import type { TaxYearFigures } from '@nettohelder/figures';
import { incomeTaxBox1, algemeneHeffingskorting, arbeidskorting, euro } from './primitives.js';
import { tijdvakkenPerJaar } from './loondienst.js';
import type { Loontijdvak, Step } from './loondienst.js';

/**
 * Income is a list of sources. Each source contributes to the Box 1
 * verzamelinkomen and (where relevant) the arbeidsinkomen; brackets are then
 * applied to the TOTAL and the heffingskortingen ONCE on the totals — the
 * multi-source rule (kortingen counted once, brackets stack). ZVW differs per
 * source kind: an employee's werkgeversheffing is paid by the employer (not in
 * net); a ZZP'er pays the 4,85% bijdrage via aanslag (out of net).
 */

export interface LoondienstSource {
  kind: 'loondienst';
  label?: string;
  brutoJaarloon?: number;
  maandloon?: number;
  vakantiegeldPct?: number;
  eindejaarsuitkeringPct?: number;
  dertiendeMaand?: boolean;
  pensioen?: { franchise: number; premiePct: number };
  pensioenpremieJaar?: number;
  bijtellingJaar?: number;
  gerichteVrijstellingenJaar?: number;
  /** Apply the expatregeling (30%-regeling): part of the salary is paid tax-free. */
  dertigProcentRegeling?: boolean;
  /** Which salarisnorm to test against. Default 'algemeen'. */
  dertigProcentNorm?: 'algemeen' | 'jongMaster';
  /** One-off bonus / eenmalige uitkering per year, taxed at the bijzonder tarief. */
  bonusJaar?: number;
  /** Overtime or irregular-hours (ORT) hours per month, paid on top of maandloon. */
  overwerkUrenPerMaand?: number;
  /** Surcharge on the hourly wage for those hours, e.g. 0.25 for 125%. Default 0. */
  overwerkToeslagPct?: number;
  /** Contract hours/week, to derive the hourly wage from maandloon. Default 40. */
  uurPerWeek?: number;
}

export interface ZzpSource {
  kind: 'zzp';
  label?: string;
  /** Winst uit onderneming (omzet − kosten). */
  winst: number;
  /** Meets the 1.225-hour urencriterium → unlocks zelfstandigen-/startersaftrek. */
  urencriteriumGehaald?: boolean;
  /** Eligible for startersaftrek on top of zelfstandigenaftrek. */
  starter?: boolean;
}

export type IncomeSource = LoondienstSource | ZzpSource;

export interface SourceContribution {
  label: string;
  /** Adds to the Box 1 verzamelinkomen (can be negative for a ZZP loss). */
  belastbaar: number;
  /** Adds to the combined arbeidsinkomen (arbeidskorting base; never negative). */
  arbeidsinkomen: number;
  /** Cash this source provides before income tax (loon − pensioen + vrijstellingen, or winst). */
  cash: number;
  /** ZVW paid via aanslag by the person (ZZP) — subtracted from net. */
  zvwAanslag: number;
  /** Employer-side ZVW (informational; not in net). */
  werkgeverZvw: number;
  /** Part of `belastbaar` that is vakantiegeld / eindejaarsuitkering / bonus (bijzonder tarief). */
  bijzonderBelastbaar: number;
  /** Part of `cash` that is vakantiegeld / eindejaarsuitkering / bonus, after pension. */
  bijzonderCash: number;
  steps: Step[];
}

export interface CombinedOptions {
  aow?: boolean;
  /** Whether the heffingskortingen are applied (loonheffingskorting). Default true. */
  loonheffingskorting?: boolean;
  /** Pay period for the regular net per period. Default 'maand'. */
  loontijdvak?: Loontijdvak;
}

export interface CombinedResult {
  belastbaarTotaal: number;
  arbeidsinkomenTotaal: number;
  belastingVoorKorting: number;
  algemeneHeffingskorting: number;
  arbeidskorting: number;
  ouderenkorting: number;
  belastingNaKorting: number;
  /** Extra tax on special payments as a fraction of them (bijzonder tarief, jaarloon approach). */
  bijzonderTarief: number;
  /** Net of regular pay per loontijdvak, without special payments. */
  nettoPerTijdvak: number;
  loontijdvak: Loontijdvak;
  /** Net of vakantiegeld + eindejaarsuitkering + bonus together. */
  nettoBijzondereBeloningen: number;
  zvwAanslagTotaal: number;
  nettoJaar: number;
  nettoMaand: number;
  werkgeverZvw: number;
  perSource: SourceContribution[];
  steps: Step[];
}

function loondienstContribution(s: LoondienstSource, figures: TaxYearFigures): SourceContribution {
  let bruto: number;
  let bijzonder = s.bonusJaar ?? 0;
  if (s.maandloon !== undefined) {
    const maand = s.maandloon * 12;
    const vakantiegeld = maand * (s.vakantiegeldPct ?? 0.08);
    const eindejaars =
      s.eindejaarsuitkeringPct !== undefined
        ? maand * s.eindejaarsuitkeringPct
        : s.dertiendeMaand
          ? s.maandloon
          : 0;
    const uurloon = s.maandloon * 12 / 52 / (s.uurPerWeek ?? 40);
    const overwerk = (s.overwerkUrenPerMaand ?? 0) * 12 * uurloon * (1 + (s.overwerkToeslagPct ?? 0));
    bijzonder += vakantiegeld + eindejaars;
    bruto = maand + overwerk + bijzonder;
  } else {
    bruto = (s.brutoJaarloon ?? 0) + bijzonder;
  }
  const pensioen = s.pensioen
    ? Math.max(0, bruto - s.pensioen.franchise) * s.pensioen.premiePct
    : (s.pensioenpremieJaar ?? 0);
  const bijtelling = s.bijtellingJaar ?? 0;
  const vrijstellingen = s.gerichteVrijstellingenJaar ?? 0;
  const grondslag = Math.max(0, bruto - pensioen + bijtelling);

  // 30%-regeling: a fraction of the grondslag (capped at the WNT-norm) is paid
  // tax-free. The exemption is further limited so the remaining taxable salary
  // stays at or above the applicable salarisnorm. The tax-free part is not loon,
  // so it leaves belastbaar AND arbeidsinkomen, but is still paid out as cash.
  let dertigProcent = 0;
  if (s.dertigProcentRegeling) {
    const d = figures.dertigProcent;
    const norm = s.dertigProcentNorm === 'jongMaster' ? d.jongMasterNorm : d.generalNorm;
    const wantExemption = d.pct * Math.min(grondslag, d.wntCap);
    const normRoom = Math.max(0, grondslag - norm);
    dertigProcent = Math.min(wantExemption, normRoom);
  }

  const belastbaar = grondslag - dertigProcent;

  const steps: Step[] = [
    { key: 'bruto', nl: 'Bruto', en: 'Gross', amount: euro(bruto) },
  ];
  if (dertigProcent > 0) {
    const pct = (figures.dertigProcent.pct * 100).toLocaleString('nl-NL');
    steps.push({
      key: 'dertigProcent',
      nl: `Af: ${pct}%-regeling (belastingvrij)`,
      en: `Less: ${pct}% expat ruling (tax-free)`,
      amount: -euro(dertigProcent),
      source: 'dertigProcent.pct',
    });
  }
  steps.push({ key: 'belastbaar', nl: 'Belastbaar', en: 'Taxable', amount: euro(belastbaar) });

  // Pension and the 30%-regeling are spread pro rata over regular and special pay.
  const shareBijzonder = bruto > 0 ? bijzonder / bruto : 0;
  return {
    label: s.label ?? 'Loon uit werk',
    belastbaar,
    arbeidsinkomen: belastbaar,
    bijzonderBelastbaar: belastbaar * shareBijzonder,
    bijzonderCash: (bruto - pensioen) * shareBijzonder,
    cash: bruto - pensioen + vrijstellingen,
    zvwAanslag: 0,
    werkgeverZvw: Math.min(belastbaar, figures.zvw.maxBijdrageInkomen) * figures.zvw.werkgeversheffing,
    steps,
  };
}

function zzpContribution(s: ZzpSource, figures: TaxYearFigures, aow: boolean): SourceContribution {
  const z = figures.zzp;
  const zelf = aow ? z.zelfstandigenaftrek * z.zelfstandigenaftrekAowFactor : z.zelfstandigenaftrek;
  const aftrek = s.urencriteriumGehaald ? zelf + (s.starter ? z.startersaftrek : 0) : 0;
  const winstNaAftrek = s.winst - aftrek;
  // MKB-winstvrijstelling applies to the (possibly negative) winst-na-aftrek — on a
  // loss it reduces the deductible loss (the counterintuitive but correct rule).
  const belastbaar = winstNaAftrek * (1 - z.mkbWinstvrijstelling);
  const grondslag = Math.max(0, belastbaar);

  return {
    label: s.label ?? 'ZZP / winst uit onderneming',
    belastbaar,
    arbeidsinkomen: Math.max(0, belastbaar),
    cash: s.winst,
    bijzonderBelastbaar: 0,
    bijzonderCash: 0,
    zvwAanslag: Math.min(grondslag, figures.zvw.maxBijdrageInkomen) * figures.zvw.aanslagBijdrage,
    werkgeverZvw: 0,
    steps: [
      { key: 'winst', nl: 'Winst uit onderneming', en: 'Business profit', amount: euro(s.winst) },
      { key: 'ondernemersaftrek', nl: 'Af: ondernemersaftrek', en: 'Less: entrepreneur deduction', amount: -euro(aftrek), source: 'zzp.zelfstandigenaftrek' },
      { key: 'mkb', nl: `Af: MKB-winstvrijstelling (${(z.mkbWinstvrijstelling * 100).toLocaleString('nl-NL')}%)`, en: 'Less: SME profit exemption', amount: -euro(winstNaAftrek * z.mkbWinstvrijstelling), source: 'zzp.mkbWinstvrijstelling' },
      { key: 'belastbaar', nl: 'Belastbare winst', en: 'Taxable profit', amount: euro(belastbaar) },
    ],
  };
}

function contribution(s: IncomeSource, figures: TaxYearFigures, aow: boolean): SourceContribution {
  return s.kind === 'zzp' ? zzpContribution(s, figures, aow) : loondienstContribution(s, figures);
}

/**
 * Net/gross over one or more income sources, for the given tax year. Brackets stack over the
 * combined belastbaar inkomen; AHK + arbeidskorting are applied ONCE.
 */
export function computeCombined(
  sources: IncomeSource[],
  figures: TaxYearFigures,
  opts: CombinedOptions = {},
): CombinedResult {
  const aow = opts.aow ?? false;
  const regime = aow ? figures.aow : figures.belowAow;
  if (regime.arbeidskorting === null) {
    throw new Error(`arbeidskorting for the AOW-age regime is not yet implemented in figures ${figures.year}`);
  }

  const perSource = sources.map((s) => contribution(s, figures, aow));

  const belastbaarTotaal = perSource.reduce((a, c) => a + c.belastbaar, 0);
  const arbeidsinkomenTotaal = perSource.reduce((a, c) => a + c.arbeidsinkomen, 0);
  const cashTotaal = perSource.reduce((a, c) => a + c.cash, 0);
  const zvwAanslagTotaal = perSource.reduce((a, c) => a + c.zvwAanslag, 0);
  const werkgeverZvw = perSource.reduce((a, c) => a + c.werkgeverZvw, 0);

  const credits = opts.loonheffingskorting ?? true;
  const loontijdvak = opts.loontijdvak ?? 'maand';
  const arbeidskortingParams = regime.arbeidskorting;
  // Tax over a belastbaar + arbeidsinkomen pair; credits are capped at the tax due, in order.
  const taxFor = (belastbaar: number, arbeid: number) => {
    const base = Math.max(0, belastbaar);
    const voor = incomeTaxBox1(base, regime.brackets);
    const ahk = credits ? Math.min(voor, algemeneHeffingskorting(base, regime.algemeneHeffingskorting)) : 0;
    const ak = credits ? Math.min(voor - ahk, arbeidskorting(arbeid, arbeidskortingParams)) : 0;
    const ok = credits && regime.ouderenkorting
      ? Math.min(voor - ahk - ak, algemeneHeffingskorting(base, regime.ouderenkorting))
      : 0;
    return { voor, ahk, ak, ok, na: voor - ahk - ak - ok };
  };

  const tax = taxFor(belastbaarTotaal, arbeidsinkomenTotaal);
  const belastingVoorKorting = tax.voor;
  const ahk = tax.ahk;
  const ak = tax.ak;
  const ouderen = tax.ok;
  const belastingNaKorting = tax.na;

  const nettoJaar = cashTotaal - belastingNaKorting - zvwAanslagTotaal;

  const bijzonderBelastbaar = perSource.reduce((a, c) => a + c.bijzonderBelastbaar, 0);
  const bijzonderCash = perSource.reduce((a, c) => a + c.bijzonderCash, 0);
  const belastingRegulier = taxFor(belastbaarTotaal - bijzonderBelastbaar, arbeidsinkomenTotaal - bijzonderBelastbaar).na;
  const belastingBijzonder = belastingNaKorting - belastingRegulier;
  const bijzonderTarief = bijzonderBelastbaar > 0
    ? Math.round((belastingBijzonder / bijzonderBelastbaar) * 1e5) / 1e5
    : 0;
  const nettoBijzonder = bijzonderCash - belastingBijzonder;

  const steps: Step[] = [
    { key: 'belastbaarTotaal', nl: 'Belastbaar inkomen (totaal)', en: 'Taxable income (total)', amount: euro(belastbaarTotaal) },
    { key: 'belastingVoorKorting', nl: 'Inkomstenbelasting (box 1)', en: 'Income tax (box 1)', amount: -euro(belastingVoorKorting), source: aow ? 'aow.brackets' : 'belowAow.brackets' },
    { key: 'algemeneHeffingskorting', nl: 'Bij: algemene heffingskorting', en: 'Plus: general tax credit', amount: euro(ahk), source: aow ? 'aow.algemeneHeffingskorting' : 'belowAow.algemeneHeffingskorting' },
    { key: 'arbeidskorting', nl: 'Bij: arbeidskorting', en: 'Plus: labour tax credit', amount: euro(ak), source: aow ? 'aow.arbeidskorting' : 'belowAow.arbeidskorting' },
    ...(ouderen > 0
      ? [{ key: 'ouderenkorting', nl: 'Bij: ouderenkorting', en: 'Plus: elderly tax credit', amount: euro(ouderen), source: 'aow.ouderenkorting' }]
      : []),
    { key: 'belastingNaKorting', nl: 'Te betalen belasting na kortingen', en: 'Tax after credits', amount: -euro(belastingNaKorting) },
  ];
  if (zvwAanslagTotaal > 0) {
    steps.push({ key: 'zvwAanslag', nl: 'Af: ZVW-bijdrage (aanslag)', en: 'Less: ZVW contribution (assessment)', amount: -euro(zvwAanslagTotaal), source: 'zvw.aanslagBijdrage' });
  }
  steps.push({ key: 'nettoJaar', nl: 'Netto per jaar', en: 'Net per year', amount: euro(nettoJaar) });

  return {
    belastbaarTotaal: euro(belastbaarTotaal),
    arbeidsinkomenTotaal: euro(arbeidsinkomenTotaal),
    belastingVoorKorting: euro(belastingVoorKorting),
    algemeneHeffingskorting: euro(ahk),
    arbeidskorting: euro(ak),
    ouderenkorting: euro(ouderen),
    belastingNaKorting: euro(belastingNaKorting),
    bijzonderTarief,
    nettoPerTijdvak: euro((nettoJaar - nettoBijzonder) / tijdvakkenPerJaar[loontijdvak]),
    loontijdvak,
    nettoBijzondereBeloningen: euro(nettoBijzonder),
    zvwAanslagTotaal: euro(zvwAanslagTotaal),
    nettoJaar: euro(nettoJaar),
    nettoMaand: euro(nettoJaar / 12),
    werkgeverZvw: euro(werkgeverZvw),
    perSource,
    steps,
  };
}
