import type { Cao, CaoRaise, CaoSalary, PeriodStatus } from './types.js';

/**
 * Time-phasing lives in the data as "base salary + later revisions". Consumers
 * shouldn't care about that split — they want "what's the table on date X" and
 * "what changes next". These helpers flatten a CAO into one ordered timeline and
 * answer both. ISO YYYY-MM-DD strings compare correctly with `<`, so no Date math.
 */

export interface ResolvedPeriod {
  /** ISO date this table takes effect. */
  from: string;
  note?: string;
  status: PeriodStatus;
  salary: CaoSalary;
}

/** The full ordered timeline: the base table (from year-start) plus any revisions. */
export function caoTimeline(cao: Cao): ResolvedPeriod[] {
  const base: ResolvedPeriod = { from: `${cao.year}-01-01`, status: 'confirmed', salary: cao.salary };
  const extra: ResolvedPeriod[] = (cao.periods ?? []).map((p) => ({
    from: p.from,
    ...(p.note !== undefined ? { note: p.note } : {}),
    status: p.status ?? 'confirmed',
    salary: p.salary,
  }));
  return [base, ...extra].sort((a, b) => a.from.localeCompare(b.from));
}

/** The period in effect on `isoDate` (the last one whose `from` ≤ date; clamped to the first). */
export function caoPeriodAt(cao: Cao, isoDate: string): ResolvedPeriod {
  const timeline = caoTimeline(cao);
  let current = timeline[0]!;
  for (const p of timeline) {
    if (p.from <= isoDate) current = p;
    else break;
  }
  return current;
}

/** The next period that takes effect strictly after `isoDate`, if any. */
export function caoNextPeriod(cao: Cao, isoDate: string): ResolvedPeriod | undefined {
  return caoTimeline(cao).find((p) => p.from > isoDate);
}

/** True when the CAO has more than one salary period in its year. */
export function caoHasMultiplePeriods(cao: Cao): boolean {
  return (cao.periods?.length ?? 0) > 0;
}

/** True when the CAO has no salary table and the user supplies their own salary. */
export function caoIsOwnSalary(cao: Cao): boolean {
  return cao.salary.kind === 'own';
}

/**
 * Apply one raise to a monthly salary. `deeltijd` (hours ÷ full-time hours)
 * scales the fixed amounts, which the CAO states for a full-time job.
 */
export function applyCaoRaise(maandloon: number, raise: CaoRaise, deeltijd = 1): number {
  const fixed = (raise.perMaand ?? 0) * deeltijd;
  if (raise.pct === undefined) return maandloon + fixed;
  return maandloon + Math.max(maandloon * raise.pct, fixed);
}

/**
 * Carry the user's own salary from the period starting `fromIso` to the one
 * starting `toIso` by applying the raises of every period in (from, to].
 * Only moves forward: the salary the user types already includes earlier raises.
 */
export function caoOwnSalaryAt(cao: Cao, maandloon: number, fromIso: string, toIso: string, deeltijd = 1): number {
  let out = maandloon;
  for (const p of caoTimeline(cao)) {
    if (p.from <= fromIso || p.from > toIso || p.salary.kind !== 'own') continue;
    for (const r of p.salary.raises ?? []) out = applyCaoRaise(out, r, deeltijd);
  }
  return out;
}

/** Sum of the CAO's eenmalige uitkeringen paid in `year`, scaled by `deeltijd`. */
export function caoEenmaligInJaar(cao: Cao, year: number, deeltijd = 1): number {
  return (cao.eenmaligeUitkeringen ?? [])
    .filter((u) => u.date.startsWith(`${year}-`))
    .reduce((sum, u) => sum + u.amount * deeltijd, 0);
}

/** The salary revisions taking effect during `year` (the base table of `cao.year` excluded). */
export function caoPeriodsInYear(cao: Cao, year: number): ResolvedPeriod[] {
  return caoTimeline(cao)
    .slice(1)
    .filter((p) => p.from.startsWith(`${year}-`));
}
