import type {
  Bracket,
  HeffingskortingParams,
  ArbeidskortingParams,
} from '@nettohelder/figures';

/** Progressive Box 1 income tax over the given brackets. Precise (no rounding). */
export function incomeTaxBox1(belastbaarInkomen: number, brackets: Bracket[]): number {
  if (belastbaarInkomen <= 0) return 0;
  let tax = 0;
  let lower = 0;
  for (const b of brackets) {
    if (belastbaarInkomen <= lower) break;
    const upper = Math.min(belastbaarInkomen, b.upTo);
    tax += (upper - lower) * b.rate;
    lower = b.upTo;
  }
  return tax;
}

/** Algemene heffingskorting: flat max, linear afbouw above the threshold, clamped at 0. */
export function algemeneHeffingskorting(
  verzamelinkomen: number,
  p: HeffingskortingParams,
): number {
  const afbouw = Math.max(0, verzamelinkomen - p.afbouwStart) * p.afbouwRate;
  return Math.max(0, p.max - afbouw);
}

/**
 * Arbeidskorting: piecewise on arbeidsinkomen (loon + winst, NOT box 3).
 * Returns 0 at/above zeroAbove. Clamped at 0.
 */
export function arbeidskorting(arbeidsinkomen: number, p: ArbeidskortingParams): number {
  if (arbeidsinkomen <= 0) return 0;
  if (arbeidsinkomen >= p.zeroAbove) return 0;
  let seg = p.segments[0];
  if (seg === undefined) return 0;
  for (const s of p.segments) {
    if (arbeidsinkomen >= s.from) seg = s;
  }
  return Math.max(0, seg.base + seg.rate * (arbeidsinkomen - seg.from));
}

/**
 * Employee pension contribution: premiePct of the pensioengrondslag
 * (= gross above the franchise). Deducted pre-tax.
 */
export function pensioenpremie(brutoJaarloon: number, franchise: number, premiePct: number): number {
  return Math.max(0, brutoJaarloon - franchise) * premiePct;
}

/**
 * Salary from a functiegroep band + relatieve salarispositie. RSP is a fraction
 * of the band maximum (salaris = RSP × max), clamped to the [min, max] band.
 */
export function bandSalary(rsp: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, rsp * max));
}

/** Convert an hourly wage to a monthly amount given full-time hours/week. */
export function monthlyFromHourly(uurloon: number, hoursPerWeek: number): number {
  return (uurloon * hoursPerWeek * 52) / 12;
}

/** Round to whole eurocents. */
export function euro(n: number): number {
  return Math.round(n * 100) / 100;
}
