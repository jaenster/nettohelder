import type { ArbeidskortingParams } from './types.js';

/**
 * Above the AOW age the heffingskortingen are scaled by the share of the first
 * bracket rate that remains once the AOW-premie drops out (art. 8.10 lid 2
 * Wet IB 2001). The published AOW-age algemene heffingskorting follows this:
 * 2026 € 1.556 / € 3.115 = 0,4995 against 17,85% / 35,75% = 0,4993.
 */
export function aowFactor(firstRateBelowAow: number, firstRateAow: number): number {
  return firstRateAow / firstRateBelowAow;
}

/** Scale the below-AOW arbeidskorting to the AOW-age regime; the zero point stays put. */
export function aowArbeidskorting(below: ArbeidskortingParams, factor: number): ArbeidskortingParams {
  return {
    segments: below.segments.map((s) => ({ from: s.from, base: s.base * factor, rate: s.rate * factor })),
    zeroAbove: below.zeroAbove,
  };
}
