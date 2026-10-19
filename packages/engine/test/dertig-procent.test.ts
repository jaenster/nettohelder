import { describe, it, expect } from 'vitest';
import { figures2026 } from '@nettohelder/figures';
import { computeCombined } from '../src/index.js';

const d = figures2026.dertigProcent;

describe('30%-regeling (expatregeling) 2026', () => {
  it('a high earner with the ruling nets more than without', () => {
    const src = { kind: 'loondienst' as const, brutoJaarloon: 100_000 };
    const plain = computeCombined([src], figures2026);
    const ruled = computeCombined([{ ...src, dertigProcentRegeling: true }], figures2026);
    expect(ruled.nettoJaar).toBeGreaterThan(plain.nettoJaar);
  });

  it('exempts pct × grondslag and lowers belastbaar by exactly that, leaving room above the norm', () => {
    const bruto = 100_000;
    const ruled = computeCombined(
      [{ kind: 'loondienst', brutoJaarloon: bruto, dertigProcentRegeling: true }],
      figures2026,
    );
    // 30% of 100.000 = 30.000; remaining taxable 70.000 >= norm 48.013, so full exemption applies
    const exemption = d.pct * bruto;
    expect(ruled.belastbaarTotaal).toBeCloseTo(bruto - exemption, 1);
    // arbeidsinkomen also drops with the exemption (tax-free deel is not loon)
    expect(ruled.arbeidsinkomenTotaal).toBeCloseTo(bruto - exemption, 1);
    // breakdown shows the 30%-vrijstelling line pointing at provenance
    const step = ruled.perSource[0]!.steps.find((s) => s.key === 'dertigProcent');
    expect(step).toBeDefined();
    expect(step!.source).toBe('dertigProcent.pct');
    expect(step!.amount).toBeCloseTo(-exemption, 1);
  });

  it('caps the grondslag at the WNT-norm for very high salaries', () => {
    const bruto = 400_000; // well above the WNT cap of 262.000
    const ruled = computeCombined(
      [{ kind: 'loondienst', brutoJaarloon: bruto, dertigProcentRegeling: true }],
      figures2026,
    );
    // exemption capped at 30% × 262.000 = 78.600, NOT 30% × 400.000 = 120.000
    const cappedExemption = d.pct * d.wntCap;
    expect(ruled.belastbaarTotaal).toBeCloseTo(bruto - cappedExemption, 0);
    const step = ruled.perSource[0]!.steps.find((s) => s.key === 'dertigProcent');
    expect(step!.amount).toBeCloseTo(-cappedExemption, 0);
  });

  it('limits the exemption so taxable salary stays at or above the salarisnorm', () => {
    // grondslag just above the general norm: full 30% would push it under the norm.
    const bruto = 60_000;
    const ruled = computeCombined(
      [{ kind: 'loondienst', brutoJaarloon: bruto, dertigProcentRegeling: true }],
      figures2026,
    );
    // 30% × 60.000 = 18.000 would leave 42.000 < 48.013, so exemption is floored
    // to grondslag − norm = 60.000 − 48.013 = 11.987.
    const normRoom = bruto - d.generalNorm;
    expect(ruled.belastbaarTotaal).toBeCloseTo(d.generalNorm, 1);
    const step = ruled.perSource[0]!.steps.find((s) => s.key === 'dertigProcent');
    expect(step!.amount).toBeCloseTo(-normRoom, 1);
  });

  it('gives no exemption when the salary is at or below the norm', () => {
    const bruto = 45_000; // below the general norm of 48.013
    const ruled = computeCombined(
      [{ kind: 'loondienst', brutoJaarloon: bruto, dertigProcentRegeling: true }],
      figures2026,
    );
    expect(ruled.belastbaarTotaal).toBeCloseTo(bruto, 1);
    const step = ruled.perSource[0]!.steps.find((s) => s.key === 'dertigProcent');
    expect(step).toBeUndefined();
  });

  it('uses the lower jongMaster norm when selected, allowing a larger exemption', () => {
    const bruto = 60_000;
    const general = computeCombined(
      [{ kind: 'loondienst', brutoJaarloon: bruto, dertigProcentRegeling: true, dertigProcentNorm: 'algemeen' }],
      figures2026,
    );
    const jong = computeCombined(
      [{ kind: 'loondienst', brutoJaarloon: bruto, dertigProcentRegeling: true, dertigProcentNorm: 'jongMaster' }],
      figures2026,
    );
    // jongMaster norm is lower → more room for the exemption → lower taxable income → higher net
    expect(jong.belastbaarTotaal).toBeLessThan(general.belastbaarTotaal);
    expect(jong.nettoJaar).toBeGreaterThan(general.nettoJaar);
    // at 60.000 the jongMaster norm (36.497) leaves room for the full 30% (18.000)
    expect(jong.belastbaarTotaal).toBeCloseTo(bruto - d.pct * bruto, 1);
  });

  it('composes through computeCombined alongside another source', () => {
    const combo = computeCombined(
      [
        { kind: 'loondienst', brutoJaarloon: 100_000, dertigProcentRegeling: true },
        { kind: 'zzp', winst: 20_000, urencriteriumGehaald: true },
      ],
      figures2026,
    );
    const loonBelastbaar = 100_000 - d.pct * 100_000;
    const zzpBelastbaar = (20_000 - figures2026.zzp.zelfstandigenaftrek) * (1 - figures2026.zzp.mkbWinstvrijstelling);
    expect(combo.belastbaarTotaal).toBeCloseTo(loonBelastbaar + zzpBelastbaar, 1);
  });
});
