import {
  bandSalary,
  computeCombined,
  computeLoondienst,
  euro,
  monthlyFromHourly,
  type CombinedOptions,
  type LoondienstInput,
  type LoondienstSource,
  type Step,
} from '@nettohelder/engine';
import {
  caoEenmaligInJaar,
  caoOwnSalaryAt,
  caoPeriodAt,
  pensioenfondsen2026,
  type Cao,
  type CaoSalary,
  type Provenance,
} from '@nettohelder/figures';
import { caoMeta } from './cao-meta.generated.js';
import { caoSector, findCao } from './caos.js';
import { InputError } from './errors.js';
import { taxYears } from './figures.js';
import type { NettoRequest, NettoResponse, TaxYear } from './schemas.js';

/** Full-time week assumed when a CAO does not document its own basis (NL norm). */
export const FULLTIME_FALLBACK = 40;
/** Work weeks per year for the per-day thuiswerkvergoeding. */
export const WERKWEKEN = 46;

export const DISCLAIMER =
  'Indicatie op basis van de jaarloonmethode; de werkelijke loonstrook kan afwijken door ' +
  'afrondingen in de loonheffingstabellen en werkgeverspecifieke regelingen.';

type CaoUsed = NonNullable<NettoResponse['cao']>;

export interface ResolvedNetto {
  year: TaxYear;
  source: LoondienstSource;
  options: Required<CombinedOptions>;
  cao?: CaoUsed;
}

export function isoToday(): string {
  return new Date().toISOString().slice(0, 10);
}

/** Today, or the nearest day of `year` when today falls outside it. */
function defaultPeildatum(year: number, today: string): string {
  const y = Number(today.slice(0, 4));
  if (y < year) return `${year}-01-01`;
  if (y > year) return `${year}-12-31`;
  return today;
}

/** The full-time hours a monthly/band salary is based on; hourly tables have none. */
export function caoFulltimeUren(salary: CaoSalary): number | undefined {
  if (salary.kind === 'table' && salary.unit === 'uur') return undefined;
  return salary.hoursPerWeek ?? FULLTIME_FALLBACK;
}

function pensionFromFund(id: string, path: string): { franchise: number; premiePct: number; name: string } {
  const fonds = pensioenfondsen2026.find((f) => f.id === id);
  if (!fonds) {
    const known = pensioenfondsen2026.map((f) => f.id).join(', ');
    throw new InputError(`unknown pensioenfonds '${id}'; known: ${known}`, path);
  }
  return { franchise: fonds.franchise, premiePct: fonds.employeePremiePct, name: fonds.name };
}

/** Explicit pension options from the request, or undefined when none was given. */
function requestedPension(req: NettoRequest): Pick<LoondienstSource, 'pensioen' | 'pensioenpremieJaar'> | undefined {
  if (req.pensioen) return { pensioen: { franchise: req.pensioen.franchise, premiePct: req.pensioen.premiePct } };
  if (req.pensioenpremieJaar !== undefined) return { pensioenpremieJaar: req.pensioenpremieJaar };
  if (req.pensioenfondsId !== undefined) {
    const f = pensionFromFund(req.pensioenfondsId, 'pensioenfondsId');
    return { pensioen: { franchise: f.franchise, premiePct: f.premiePct } };
  }
  return undefined;
}

function resolveCaoMaandloon(
  cao: Cao,
  req: NettoRequest,
  salary: Exclude<CaoSalary, { kind: 'own' }>,
  uren: number,
): { maandloon: number; schaal?: string; trede?: number; niveau?: string; rsp?: number } {
  const sel = req.cao!;
  if (req.brutoPerMaand !== undefined) {
    throw new InputError(`CAO '${cao.id}' has a salary ${salary.kind}; select a position instead of brutoPerMaand`, 'brutoPerMaand');
  }
  if (salary.kind === 'table') {
    const schalen = Object.keys(salary.schalen);
    if (sel.schaal === undefined) {
      throw new InputError(`cao.schaal is required for '${cao.id}'; one of: ${schalen.join(', ')}`, 'cao.schaal');
    }
    const schaal = String(sel.schaal);
    const steps = salary.schalen[schaal];
    if (!steps) throw new InputError(`unknown schaal '${schaal}' for '${cao.id}'; one of: ${schalen.join(', ')}`, 'cao.schaal');
    const trede = sel.trede ?? 0;
    const raw = steps[trede];
    if (raw === undefined) {
      throw new InputError(`trede ${trede} out of range for schaal '${schaal}' (0..${steps.length - 1})`, 'cao.trede');
    }
    // Hourly tables scale with hours directly; a monthly table is full-time, so prorate.
    const maandloon = salary.unit === 'uur' ? monthlyFromHourly(raw, uren) : (raw * uren) / caoFulltimeUren(salary)!;
    return { maandloon, schaal, trede };
  }
  const levels = salary.levels.map((l) => l.id);
  if (sel.niveau === undefined) {
    throw new InputError(`cao.niveau is required for '${cao.id}'; one of: ${levels.join(', ')}`, 'cao.niveau');
  }
  const level = salary.levels.find((l) => l.id === sel.niveau);
  if (!level) throw new InputError(`unknown niveau '${sel.niveau}' for '${cao.id}'; one of: ${levels.join(', ')}`, 'cao.niveau');
  const rsp = sel.rsp ?? salary.defaultRsp;
  const maandloon = (bandSalary(rsp, level.min, level.max) * uren) / caoFulltimeUren(salary)!;
  return { maandloon, niveau: level.id, rsp };
}

function resolveCao(req: NettoRequest, today: string): { source: LoondienstSource; cao: CaoUsed } {
  const sel = req.cao!;
  const cao = findCao(sel.id);
  if (!cao) throw new InputError(`unknown CAO '${sel.id}'; search with GET /api/v1/caos?q=`, 'cao.id', 'not_found');

  const peildatum = sel.peildatum ?? defaultPeildatum(req.year, today);
  const period = caoPeriodAt(cao, peildatum);
  const salary = period.salary;
  const fulltime = caoFulltimeUren(salary);
  const uren = req.uurPerWeek ?? salary.hoursPerWeek ?? FULLTIME_FALLBACK;
  // Part-time factor for the CAO's full-time amounts (fixed raises, eenmalige uitkeringen).
  const deeltijd = fulltime ? uren / fulltime : 1;

  let position: ReturnType<typeof resolveCaoMaandloon>;
  if (salary.kind === 'own') {
    if (req.brutoPerMaand === undefined) {
      throw new InputError(`CAO '${cao.id}' has no salary table; pass your own brutoPerMaand`, 'brutoPerMaand');
    }
    // The salary entered is today's; carry it forward over raises up to the peildatum.
    const todayFrom = caoPeriodAt(cao, today).from;
    position = { maandloon: caoOwnSalaryAt(cao, req.brutoPerMaand, todayFrom, period.from, deeltijd) };
  } else {
    position = resolveCaoMaandloon(cao, req, salary, uren);
  }

  const fund = pensioenfondsen2026.find((f) => f.id === cao.pensioenfondsId);
  const eenmalig = caoEenmaligInJaar(cao, req.year, deeltijd);
  const thuiswerk = cao.vergoedingen.find((v) => v.id === 'thuiswerk');
  const thuiswerkJaar = thuiswerk && sel.thuiswerkDagenPerWeek ? sel.thuiswerkDagenPerWeek * WERKWEKEN * thuiswerk.amount : 0;
  const vakantiegeldPct = req.vakantiegeldPct ?? cao.vakantiegeldPct;
  const eindejaarsuitkeringPct = req.eindejaarsuitkeringPct ?? cao.eindejaarsuitkeringPct;
  const pension = requestedPension(req) ?? (fund ? { pensioen: { franchise: fund.franchise, premiePct: fund.employeePremiePct } } : {});
  const vrijstellingen = (req.gerichteVrijstellingenJaar ?? 0) + thuiswerkJaar;
  const bonus = (req.bonusJaar ?? 0) + eenmalig;

  const source: LoondienstSource = {
    kind: 'loondienst',
    maandloon: position.maandloon,
    vakantiegeldPct,
    eindejaarsuitkeringPct,
    ...pension,
    ...commonSourceFields(req, uren),
    ...(vrijstellingen ? { gerichteVrijstellingenJaar: vrijstellingen } : {}),
    ...(bonus ? { bonusJaar: bonus } : {}),
  };

  const meta = caoMeta[cao.id];
  const sector = caoSector(cao.id);
  const used: CaoUsed = {
    id: cao.id,
    name: cao.name,
    ...(sector !== undefined ? { sector } : {}),
    sourceUrl: cao.sourceUrl,
    draft: meta?.draft ?? false,
    ...(meta?.confidence !== undefined ? { confidence: meta.confidence } : {}),
    peildatum,
    period: { from: period.from, status: period.status, ...(period.note !== undefined ? { note: period.note } : {}) },
    salaryKind: salary.kind,
    ...(position.schaal !== undefined ? { schaal: position.schaal } : {}),
    ...(position.trede !== undefined ? { trede: position.trede } : {}),
    ...(position.niveau !== undefined ? { niveau: position.niveau } : {}),
    ...(position.rsp !== undefined ? { rsp: position.rsp } : {}),
    uurPerWeek: uren,
    deeltijd,
    maandloon: euro(position.maandloon),
    vakantiegeldPct,
    eindejaarsuitkeringPct,
    ...(fund && !requestedPension(req)
      ? { pensioenfonds: { id: fund.id, name: fund.name, franchise: fund.franchise, premiePct: fund.employeePremiePct } }
      : {}),
    eenmaligeUitkeringJaar: euro(eenmalig),
    thuiswerkvergoedingJaar: euro(thuiswerkJaar),
  };
  return { source, cao: used };
}

/** Fields that mean the same with or without a CAO. */
function commonSourceFields(req: NettoRequest, uren: number): Partial<LoondienstSource> {
  return {
    ...(req.bijtellingJaar ? { bijtellingJaar: req.bijtellingJaar } : {}),
    ...(req.dertigProcentRegeling ? { dertigProcentRegeling: true, dertigProcentNorm: req.dertigProcentNorm } : {}),
    ...(req.overwerkUrenPerMaand
      ? {
          overwerkUrenPerMaand: req.overwerkUrenPerMaand,
          overwerkToeslagPct: req.overwerkToeslagPct ?? 0,
          uurPerWeek: uren,
        }
      : {}),
  };
}

/** Turn an API request into the exact engine input. Throws InputError on unresolvable input. */
export function resolveNetto(req: NettoRequest, today: string = isoToday()): ResolvedNetto {
  const options = { aow: req.aow, loonheffingskorting: req.loonheffingskorting, loontijdvak: req.loontijdvak };
  if (req.cao) {
    const { source, cao } = resolveCao(req, today);
    return { year: req.year, source, options, cao };
  }
  const uren = req.uurPerWeek ?? FULLTIME_FALLBACK;
  const gross: Partial<LoondienstSource> =
    req.brutoPerMaand !== undefined
      ? {
          maandloon: req.brutoPerMaand,
          vakantiegeldPct: req.vakantiegeldPct ?? 0.08,
          ...(req.eindejaarsuitkeringPct !== undefined ? { eindejaarsuitkeringPct: req.eindejaarsuitkeringPct } : {}),
          ...(req.dertiendeMaand ? { dertiendeMaand: true } : {}),
        }
      : { brutoJaarloon: req.brutoPerJaar! };
  const source: LoondienstSource = {
    kind: 'loondienst',
    ...gross,
    ...(requestedPension(req) ?? {}),
    ...commonSourceFields(req, uren),
    ...(req.gerichteVrijstellingenJaar ? { gerichteVrijstellingenJaar: req.gerichteVrijstellingenJaar } : {}),
    ...(req.bonusJaar ? { bonusJaar: req.bonusJaar } : {}),
  };
  return { year: req.year, source, options };
}

/** The gross-composition steps (salary, vakantiegeld, bonus, pension ...) from the engine itself. */
function grossSteps(source: LoondienstSource, options: Required<CombinedOptions>, year: TaxYear): Step[] {
  const { kind: _kind, dertigProcentRegeling: _d, dertigProcentNorm: _n, label: _l, ...rest } = source;
  const input: LoondienstInput = { ...rest, aow: options.aow };
  const all = computeLoondienst(input, taxYears[year].figures).steps;
  const end = all.findIndex((s) => s.key === 'belastingVoorKorting');
  return all.slice(0, end < 0 ? all.length : end).filter((s) => s.key !== 'belastbaarLoon');
}

/** Engine output for an already-resolved input — the part a port has to reproduce. */
export function computeResolved(resolved: ResolvedNetto): NettoResponse {
  const { year, source, options } = resolved;
  const { figures, provenance } = taxYears[year];
  const combined = computeCombined([source], figures, options);
  const perSource = combined.perSource[0]!;
  const dertigStep = perSource.steps.find((s) => s.key === 'dertigProcent');
  const vrijstelling = dertigStep ? -dertigStep.amount : 0;

  const steps: Step[] = [
    ...grossSteps(source, options, year),
    ...perSource.steps.filter((s) => s.key === 'dertigProcent'),
    ...combined.steps,
  ];
  const brutoJaarloon = perSource.steps.find((s) => s.key === 'bruto')?.amount ?? 0;

  const regime = options.aow ? 'aow' : 'belowAow';
  const usedKeys = new Set<string>([
    `${regime}.brackets`,
    `${regime}.algemeneHeffingskorting`,
    `${regime}.arbeidskorting`,
    'zvw.werkgeversheffing',
    'zvw.maxBijdrageInkomen',
    ...(options.aow ? ['aow.ouderenkorting'] : []),
    ...(source.dertigProcentRegeling ? ['dertigProcent.pct', 'dertigProcent.generalNorm', 'dertigProcent.jongMasterNorm', 'dertigProcent.wntCap'] : []),
    ...steps.flatMap((s) => (s.source ? [s.source] : [])),
  ]);
  const used: Record<string, Provenance> = {};
  for (const key of [...usedKeys].sort()) {
    const p = provenance[key];
    if (p) used[key] = p;
  }
  const status = Object.values(used).some((p) => p.status === 'provisional') ? 'provisional' : 'confirmed';

  return {
    year,
    result: {
      brutoJaarloon,
      belastbaarTotaal: combined.belastbaarTotaal,
      arbeidsinkomenTotaal: combined.arbeidsinkomenTotaal,
      dertigProcentVrijstelling: vrijstelling,
      belastingVoorKorting: combined.belastingVoorKorting,
      algemeneHeffingskorting: combined.algemeneHeffingskorting,
      arbeidskorting: combined.arbeidskorting,
      ouderenkorting: combined.ouderenkorting,
      belastingNaKorting: combined.belastingNaKorting,
      bijzonderTarief: combined.bijzonderTarief,
      nettoJaar: combined.nettoJaar,
      nettoMaand: combined.nettoMaand,
      nettoPerTijdvak: combined.nettoPerTijdvak,
      loontijdvak: combined.loontijdvak,
      nettoBijzondereBeloningen: combined.nettoBijzondereBeloningen,
      werkgeverZvw: combined.werkgeverZvw,
    },
    engineInput: { source: source as NettoResponse['engineInput']['source'], options },
    ...(resolved.cao ? { cao: resolved.cao } : {}),
    steps: steps.map((s) => {
      const p = s.source ? provenance[s.source] : undefined;
      return p ? { ...s, status: p.status } : s;
    }),
    provenance: { status, figures: used },
    disclaimer: DISCLAIMER,
  };
}

/** Gross → net for one loondienst job, with the breakdown and the provenance of every figure used. */
export function computeNetto(req: NettoRequest, today: string = isoToday()): NettoResponse {
  return computeResolved(resolveNetto(req, today));
}
