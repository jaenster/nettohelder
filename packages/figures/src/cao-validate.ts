import type { Cao } from './types.js';

/**
 * Salary data is the moat and the liability: a transposed digit in a trede is
 * worse than a missing CAO, because people make money decisions on it. This is
 * the guard that every CAO — hand-written or pipeline-drafted — passes before it
 * ships. It encodes the structural invariants a correct salary table must hold,
 * so the common extraction errors (swapped min/max, wrong unit, dropped digit)
 * surface as issues instead of silently going live.
 */

export type IssueSeverity = 'error' | 'warn';

export interface CaoIssue {
  caoId: string;
  severity: IssueSeverity;
  /** Stable machine code, e.g. 'trede-not-increasing'. */
  code: string;
  message: string;
}

export interface ValidateOptions {
  /** Pensioenfonds ids that exist, to catch a CAO pointing at a missing fund. */
  knownPensioenfondsIds?: Set<string>;
}

// Plausibility windows. Outside these is a warning, not a hard error — a CAO
// can legitimately surprise us, but a monthly salary of €150 or €40.000 almost
// always means the wrong unit or a misread figure.
const MAAND_MIN = 1200;
const MAAND_MAX = 25000;
const UUR_MIN = 9;
const UUR_MAX = 150;

export function validateCao(cao: Cao, opts: ValidateOptions = {}): CaoIssue[] {
  const issues: CaoIssue[] = [];
  const err = (code: string, message: string) =>
    issues.push({ caoId: cao.id, severity: 'error', code, message });
  const warn = (code: string, message: string) =>
    issues.push({ caoId: cao.id, severity: 'warn', code, message });

  if (!cao.id) err('missing-id', 'CAO has no id.');
  if (!cao.sourceUrl || !/^https?:\/\//.test(cao.sourceUrl))
    warn('no-source-url', 'sourceUrl is missing or not an http(s) URL.');
  if (!cao.effectiveNote || cao.effectiveNote.length < 10)
    warn('thin-note', 'effectiveNote is missing or too short to state caveats.');

  if (cao.vakantiegeldPct < 0.07 || cao.vakantiegeldPct > 0.09)
    warn('vakantiegeld-atypical', `vakantiegeldPct ${cao.vakantiegeldPct} is outside the usual 7–9%.`);
  if (cao.eindejaarsuitkeringPct < 0 || cao.eindejaarsuitkeringPct > 0.13)
    warn('eindejaar-atypical', `eindejaarsuitkeringPct ${cao.eindejaarsuitkeringPct} is outside 0–13%.`);

  if (opts.knownPensioenfondsIds && !opts.knownPensioenfondsIds.has(cao.pensioenfondsId))
    warn('unknown-pensioenfonds', `pensioenfondsId '${cao.pensioenfondsId}' not found in pensioenfondsen.`);

  // `where` prefixes messages so a bad table in a revision is distinguishable
  // from one in the base table (e.g. "period 2026-05-01 schaal '3' ...").
  const checkSalary = (salary: typeof cao.salary, where: string) => {
    if (salary.kind === 'table') {
      const lo = salary.unit === 'uur' ? UUR_MIN : MAAND_MIN;
      const hi = salary.unit === 'uur' ? UUR_MAX : MAAND_MAX;
      if (salary.unit === 'uur' && !salary.hoursPerWeek)
        warn('no-hours', `${where}unit is 'uur' but hoursPerWeek is unset — can't convert to a month.`);

      const schalen = Object.entries(salary.schalen);
      if (schalen.length === 0) err('empty-schalen', `${where}table salary has no schalen.`);

      for (const [schaal, steps] of schalen) {
        if (steps.length === 0) {
          err('empty-schaal', `${where}schaal '${schaal}' has no tredes.`);
          continue;
        }
        let prev = -Infinity;
        steps.forEach((amount, i) => {
          if (!(amount > 0)) err('non-positive', `${where}schaal '${schaal}' trede ${i} is ${amount}.`);
          else if (amount < lo || amount > hi)
            warn('amount-out-of-range', `${where}schaal '${schaal}' trede ${i} = ${amount} (${salary.unit}); expected ${lo}–${hi}.`);
          // Tredes are seniority steps: they only ever go up within a schaal.
          if (amount < prev)
            err('trede-not-increasing', `${where}schaal '${schaal}' trede ${i} (${amount}) < previous (${prev}).`);
          prev = amount;
        });
      }

      // Cross-schaal sanity: a higher-numbered schaal sitting ENTIRELY below a
      // lower one almost always means columns were transposed in extraction — it
      // passes the per-schaal monotonic check but is still wrong (the scrambled
      // huisartsenzorg draft was exactly this). Numeric keys only; overlapping
      // bands are normal, full inversion is not. Warning, never a hard error.
      const ranges = schalen
        .filter(([k, steps]) => /^\d+$/.test(k) && steps.length > 0)
        .map(([k, steps]) => ({ k: Number(k), lo: steps[0]!, hi: steps[steps.length - 1]! }))
        .sort((a, b) => a.k - b.k);
      for (let i = 1; i < ranges.length; i++) {
        if (ranges[i]!.hi < ranges[i - 1]!.lo)
          warn('schaal-order-suspect', `${where}schaal ${ranges[i]!.k} (max ${ranges[i]!.hi}) sits entirely below schaal ${ranges[i - 1]!.k} (min ${ranges[i - 1]!.lo}) — columns may be transposed.`);
      }
    } else if (salary.kind === 'own') {
      // No amounts to check; only the raises, which must be positive and plausible.
      if (salary.hoursPerWeek !== undefined && (salary.hoursPerWeek < 20 || salary.hoursPerWeek > 48))
        warn('hours-atypical', `${where}hoursPerWeek ${salary.hoursPerWeek} is outside 20–48.`);
      for (const r of salary.raises ?? []) {
        if (r.pct === undefined && r.perMaand === undefined)
          err('empty-raise', `${where}raise has neither pct nor perMaand.`);
        if (r.pct !== undefined && !(r.pct > 0))
          err('non-positive', `${where}raise pct is ${r.pct}.`);
        else if (r.pct !== undefined && r.pct > 0.15)
          warn('raise-atypical', `${where}raise pct ${r.pct} is above 15% — percent instead of fraction?`);
        if (r.perMaand !== undefined && !(r.perMaand > 0))
          err('non-positive', `${where}raise perMaand is ${r.perMaand}.`);
        else if (r.perMaand !== undefined && r.perMaand > 1000)
          warn('raise-atypical', `${where}raise perMaand ${r.perMaand} is above €1000 — cents instead of euros?`);
      }
    } else {
      if (salary.defaultRsp <= 0 || salary.defaultRsp > 1)
        err('bad-rsp', `${where}defaultRsp ${salary.defaultRsp} must be in (0, 1].`);
      if (salary.levels.length === 0) err('empty-levels', `${where}band salary has no levels.`);
      for (const lvl of salary.levels) {
        if (!(lvl.min > 0)) err('non-positive', `${where}level '${lvl.id}' min is ${lvl.min}.`);
        if (!(lvl.max > 0)) err('non-positive', `${where}level '${lvl.id}' max is ${lvl.max}.`);
        if (lvl.max < lvl.min)
          err('max-below-min', `${where}level '${lvl.id}' max (${lvl.max}) < min (${lvl.min}) — likely swapped.`);
        if (lvl.min < MAAND_MIN || lvl.max > MAAND_MAX)
          warn('amount-out-of-range', `${where}level '${lvl.id}' band ${lvl.min}–${lvl.max} outside ${MAAND_MIN}–${MAAND_MAX}.`);
      }
    }
  };

  checkSalary(cao.salary, '');
  // The base of an own-salary CAO is whatever the user types; a raise there has nothing to apply to.
  if (cao.salary.kind === 'own' && cao.salary.raises?.length)
    err('raise-on-base', 'own salary base carries raises; put them in a period.');
  for (const u of cao.eenmaligeUitkeringen ?? []) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(u.date))
      err('bad-eenmalig-date', `eenmalige uitkering '${u.date}' is not an ISO YYYY-MM-DD date.`);
    if (!(u.amount > 0)) err('non-positive', `eenmalige uitkering ${u.date} is ${u.amount}.`);
    else if (u.amount > 10000)
      warn('eenmalig-atypical', `eenmalige uitkering ${u.date} = ${u.amount}; above €10.000 — cents instead of euros?`);
  }

  // Later salary revisions: each must be a valid table, dated this year, ascending.
  let prevFrom = `${cao.year}-01-01`;
  let prevSalary: typeof cao.salary = cao.salary;
  for (const p of cao.periods ?? []) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(p.from))
      err('bad-period-date', `period '${p.from}' is not an ISO YYYY-MM-DD date.`);
    else {
      // Revisions may run into later years (a known future raise); only a date
      // BEFORE the base year is suspect.
      if (p.from < `${cao.year}-01-01`)
        warn('period-before-year', `period '${p.from}' predates the CAO year ${cao.year}.`);
      if (p.from <= prevFrom)
        err('period-not-ascending', `period '${p.from}' is not after the previous period (${prevFrom}).`);
      prevFrom = p.from;
    }
    if (p.status && p.status !== 'confirmed' && p.status !== 'provisional')
      err('bad-period-status', `period '${p.from}' has invalid status '${p.status}'.`);
    // An own salary can't switch to a table mid-year (or back): the user's input
    // would mean something different per period.
    if ((p.salary.kind === 'own') !== (cao.salary.kind === 'own'))
      err('mixed-salary-kind', `period '${p.from}' mixes an own salary with a salary table.`);
    else if (p.salary.kind === 'own' && !p.salary.raises?.length)
      warn('period-without-raise', `period '${p.from}' has no raises — nothing changes on that date.`);
    // A revision identical to the table it follows means the raise wasn't applied
    // (or the extractor duplicated the table) — there'd be no reason to list it.
    else if (p.salary.kind !== 'own' && JSON.stringify(p.salary) === JSON.stringify(prevSalary))
      warn('period-identical-to-previous', `period '${p.from}' salary is identical to the previous table — the revision looks un-applied.`);
    prevSalary = p.salary;
    checkSalary(p.salary, `period ${p.from} `);
  }

  return issues;
}

/** Validate a whole set, adding cross-record checks (duplicate ids). */
export function validateCaos(caos: Cao[], opts: ValidateOptions = {}): CaoIssue[] {
  const issues = caos.flatMap((c) => validateCao(c, opts));
  const seen = new Set<string>();
  for (const c of caos) {
    if (seen.has(c.id))
      issues.push({ caoId: c.id, severity: 'error', code: 'duplicate-id', message: `id '${c.id}' is used more than once.` });
    seen.add(c.id);
  }
  return issues;
}
