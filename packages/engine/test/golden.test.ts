import { readdirSync, readFileSync } from 'node:fs';
import { describe, it, expect } from 'vitest';
import { figures2026, figures2027, type TaxYearFigures } from '@nettohelder/figures';
import { computeCombined, type CombinedOptions, type IncomeSource } from '../src/index.js';

/**
 * Golden vectors (test/golden/*.json) freeze engine behaviour so any port can be
 * checked against the same numbers. Each vector holds:
 *  - engine: { year, sources, options } — the exact computeCombined arguments
 *  - expected: the outputs; brutoJaarloon and dertigProcentVrijstelling come from
 *    perSource[0].steps (keys 'bruto' and 'dertigProcent'), the rest from the result.
 * Amounts are compared to the cent, bijzonderTarief to 1e-9.
 * Regenerate with `pnpm --filter @nettohelder/mcp golden` after an intended change.
 */

interface GoldenVector {
  name: string;
  engine: { year: 2026 | 2027; sources: IncomeSource[]; options: CombinedOptions };
  expected: Record<string, number | string>;
}

const figuresByYear: Record<number, TaxYearFigures> = { 2026: figures2026, 2027: figures2027 };
const dir = new URL('./golden/', import.meta.url);
const vectors: GoldenVector[] = readdirSync(dir)
  .filter((f) => f.endsWith('.json'))
  .sort()
  .map((f) => JSON.parse(readFileSync(new URL(f, dir), 'utf8')) as GoldenVector);

describe('golden vectors', () => {
  it('has a representative set', () => {
    expect(vectors.length).toBeGreaterThanOrEqual(30);
    expect(new Set(vectors.map((v) => v.engine.year))).toEqual(new Set([2026, 2027]));
  });

  for (const v of vectors) {
    it(v.name, () => {
      const r = computeCombined(v.engine.sources, figuresByYear[v.engine.year]!, v.engine.options);
      const steps = r.perSource[0]!.steps;
      const actual: Record<string, number | string> = {
        ...r,
        brutoJaarloon: steps.find((s) => s.key === 'bruto')?.amount ?? 0,
        dertigProcentVrijstelling: -(steps.find((s) => s.key === 'dertigProcent')?.amount ?? 0),
      } as unknown as Record<string, number | string>;
      for (const [key, want] of Object.entries(v.expected)) {
        const got = actual[key];
        if (typeof want === 'string') expect(got, key).toBe(want);
        else if (key === 'bijzonderTarief') expect(got as number, key).toBeCloseTo(want, 9);
        else expect(got as number, key).toBeCloseTo(want, 2);
      }
    });
  }
});
