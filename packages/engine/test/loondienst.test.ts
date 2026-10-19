import { describe, it, expect } from 'vitest';
import { figures2026, pensioenfondsen2026 } from '@nettohelder/figures';
import {
  incomeTaxBox1,
  algemeneHeffingskorting,
  arbeidskorting,
  pensioenpremie,
  bandSalary,
  computeLoondienst,
  computeCombined,
} from '../src/index.js';

const below = figures2026.belowAow;

describe('incomeTaxBox1 (2026 below-AOW)', () => {
  it('is 0 at or below 0', () => {
    expect(incomeTaxBox1(0, below.brackets)).toBe(0);
    expect(incomeTaxBox1(-100, below.brackets)).toBe(0);
  });

  it('taxes the first bracket at 35,75% up to 38.883', () => {
    expect(incomeTaxBox1(38_883, below.brackets)).toBeCloseTo(13_900.67, 2);
  });

  it('stacks the 37,56% middle bracket', () => {
    // 38.883 * 0,3575 + (45.000 - 38.883) * 0,3756
    expect(incomeTaxBox1(45_000, below.brackets)).toBeCloseTo(16_198.22, 2);
  });

  it('applies 49,50% above 78.426', () => {
    const at = incomeTaxBox1(78_426, below.brackets);
    expect(incomeTaxBox1(80_426, below.brackets)).toBeCloseTo(at + 2_000 * 0.495, 2);
  });
});

describe('AOW-age brackets use 17,85% in schijf 1', () => {
  it('taxes the first bracket at 17,85%', () => {
    expect(incomeTaxBox1(38_883, figures2026.aow.brackets)).toBeCloseTo(38_883 * 0.1785, 2);
  });
});

describe('algemeneHeffingskorting (2026 below-AOW)', () => {
  const p = below.algemeneHeffingskorting;
  it('is the max below the afbouw start', () => {
    expect(algemeneHeffingskorting(20_000, p)).toBe(3_115);
    expect(algemeneHeffingskorting(29_736, p)).toBe(3_115);
  });
  it('phases out and reaches ~0 around 78.426', () => {
    expect(algemeneHeffingskorting(78_426, p)).toBeCloseTo(0, 0);
    expect(algemeneHeffingskorting(90_000, p)).toBe(0);
  });
});

describe('arbeidskorting (2026 below-AOW)', () => {
  const p = below.arbeidskorting!;
  it('hits the segment boundaries', () => {
    expect(arbeidskorting(0, p)).toBe(0);
    expect(arbeidskorting(11_965, p)).toBeCloseTo(996, 0);
    expect(arbeidskorting(25_845, p)).toBeCloseTo(5_300, 0);
    expect(arbeidskorting(45_592, p)).toBeCloseTo(5_685, 0);
  });
  it('reaches 0 at the zeroAbove point', () => {
    expect(arbeidskorting(132_920, p)).toBe(0);
    expect(arbeidskorting(200_000, p)).toBe(0);
  });
});

describe('computeLoondienst', () => {
  it('matches a hand-verified case (45.000 gross, below-AOW)', () => {
    const r = computeLoondienst({ brutoJaarloon: 45_000 }, figures2026);
    expect(r.belastbaarLoon).toBe(45_000);
    expect(r.belastingVoorKorting).toBeCloseTo(16_198.22, 1);
    expect(r.algemeneHeffingskorting).toBeCloseTo(2_138.41, 1);
    expect(r.arbeidskorting).toBeCloseTo(5_673.52, 1);
    expect(r.nettoJaar).toBeCloseTo(36_613.71, 1);
    expect(r.nettoMaand).toBeCloseTo(36_613.71 / 12, 1);
  });

  it('pension lowers belastbaar loon; bijtelling raises tax without giving cash', () => {
    const plain = computeLoondienst({ brutoJaarloon: 45_000 }, figures2026);
    const withPension = computeLoondienst({ brutoJaarloon: 45_000, pensioenpremieJaar: 3_000 }, figures2026);
    expect(withPension.belastbaarLoon).toBe(42_000);
    expect(withPension.belastingVoorKorting).toBeLessThan(plain.belastingVoorKorting);

    const withBijtelling = computeLoondienst({ brutoJaarloon: 45_000, bijtellingJaar: 8_000 }, figures2026);
    expect(withBijtelling.belastbaarLoon).toBe(53_000);
    // more tax, but cash gross unchanged -> net is lower than plain
    expect(withBijtelling.nettoJaar).toBeLessThan(plain.nettoJaar);
  });

  it('gerichte vrijstellingen raise net euro-for-euro and are untaxed', () => {
    const plain = computeLoondienst({ brutoJaarloon: 45_000 }, figures2026);
    const withAllowance = computeLoondienst({ brutoJaarloon: 45_000, gerichteVrijstellingenJaar: 500 }, figures2026);
    expect(withAllowance.belastbaarLoon).toBe(plain.belastbaarLoon);
    expect(withAllowance.nettoJaar).toBeCloseTo(plain.nettoJaar + 500, 2);
  });

  it('does not deduct employer ZVW from employee net, but reports it', () => {
    const r = computeLoondienst({ brutoJaarloon: 45_000 }, figures2026);
    expect(r.werkgeverZvw).toBeCloseTo(45_000 * 0.061, 2);
    expect(r.nettoJaar).toBeCloseTo(36_613.71, 1); // ZVW not subtracted
  });

  it('computes AOW-age with the scaled credits and the ouderenkorting', () => {
    const r = computeLoondienst({ brutoJaarloon: 30_000, aow: true }, figures2026);
    // Scaled AHK at 30.000: (3115 - 0,06398 × 264) × 17,85/35,75 ≈ the published AOW AHK row.
    expect(r.algemeneHeffingskorting).toBeGreaterThan(1_500);
    expect(r.ouderenkorting).toBeGreaterThan(0);
    expect(r.belastingNaKorting).toBeLessThan(
      computeLoondienst({ brutoJaarloon: 30_000 }, figures2026).belastingNaKorting,
    );
  });
});

describe('salary composition (maandloon → bruto jaarloon)', () => {
  it('composes monthly salary + 8% vakantiegeld by default', () => {
    const r = computeLoondienst({ maandloon: 3_000 }, figures2026);
    // 3000*12 = 36.000, + 8% = 2.880 -> 38.880
    expect(r.vakantiegeld).toBeCloseTo(2_880, 2);
    expect(r.brutoJaarloon).toBe(38_880);
  });

  it('is identical to entering the same all-in brutoJaarloon', () => {
    const composed = computeLoondienst({ maandloon: 3_000 }, figures2026);
    const allIn = computeLoondienst({ brutoJaarloon: 38_880 }, figures2026);
    expect(composed.nettoJaar).toBe(allIn.nettoJaar);
    expect(composed.belastingNaKorting).toBe(allIn.belastingNaKorting);
  });

  it('adds a 13e maand of one extra month', () => {
    const r = computeLoondienst({ maandloon: 3_000, dertiendeMaand: true }, figures2026);
    expect(r.brutoJaarloon).toBe(38_880 + 3_000);
  });

  it('adds an eindejaarsuitkering as a percentage (CAO style)', () => {
    const r = computeLoondienst({ maandloon: 3_000, eindejaarsuitkeringPct: 0.0837 }, figures2026);
    // 36.000 base + 8% vakantiegeld + 8,37% eindejaarsuitkering
    expect(r.brutoJaarloon).toBeCloseTo(36_000 + 2_880 + 36_000 * 0.0837, 2);
  });

  it('honours an explicit vakantiegeldPct of 0', () => {
    const r = computeLoondienst({ maandloon: 3_000, vakantiegeldPct: 0 }, figures2026);
    expect(r.vakantiegeld).toBe(0);
    expect(r.brutoJaarloon).toBe(36_000);
  });

  it('emits vakantiegeld + bruto jaarloon breakdown steps', () => {
    const r = computeLoondienst({ maandloon: 3_000 }, figures2026);
    const keys = r.steps.map((s) => s.key);
    expect(keys).toContain('maandloon');
    expect(keys).toContain('vakantiegeld');
    expect(keys).toContain('brutoJaarloon');
  });

  it('throws when neither gross input is given', () => {
    expect(() => computeLoondienst({}, figures2026)).toThrow(/brutoJaarloon or maandloon/);
  });
});

describe('pension (fund preset)', () => {
  it('pensioenpremie is premiePct over the grondslag above the franchise', () => {
    // (38.880 − 17.283) × 12,95%
    expect(pensioenpremie(38_880, 17_283, 0.1295)).toBeCloseTo((38_880 - 17_283) * 0.1295, 2);
  });

  it('is 0 when gross is below the franchise', () => {
    expect(pensioenpremie(15_000, 17_283, 0.1295)).toBe(0);
  });

  it('deducts the fund premie pre-tax and lowers net', () => {
    const plain = computeLoondienst({ maandloon: 3_000 }, figures2026);
    const withPension = computeLoondienst(
      { maandloon: 3_000, pensioen: { franchise: 17_283, premiePct: 0.1295 } },
      figures2026,
    );
    const expectedPremie = (38_880 - 17_283) * 0.1295;
    expect(withPension.belastbaarLoon).toBeCloseTo(38_880 - expectedPremie, 0);
    expect(withPension.nettoJaar).toBeLessThan(plain.nettoJaar);
    expect(withPension.steps.some((s) => s.key === 'pensioenpremie')).toBe(true);
  });

  it('pensioen preset takes precedence over an absolute pensioenpremieJaar', () => {
    const r = computeLoondienst(
      { brutoJaarloon: 50_000, pensioenpremieJaar: 99_999, pensioen: { franchise: 18_000, premiePct: 0.05 } },
      figures2026,
    );
    // uses 5% × (50.000 − 18.000) = 1.600, not the absurd 99.999
    expect(r.belastbaarLoon).toBe(50_000 - 1_600);
  });

  it('every shipped fund preset produces a sane positive premie at a normal salary', () => {
    for (const f of pensioenfondsen2026) {
      const p = pensioenpremie(45_000, f.franchise, f.employeePremiePct);
      expect(p).toBeGreaterThan(0);
      expect(p).toBeLessThan(45_000 * 0.2); // sanity: employee share well under 20% of gross
    }
  });
});

describe('computeCombined (multi-source)', () => {
  it('a single loondienst source matches computeLoondienst', () => {
    const combined = computeCombined([{ kind: 'loondienst', brutoJaarloon: 45_000 }], figures2026);
    const single = computeLoondienst({ brutoJaarloon: 45_000 }, figures2026);
    expect(combined.nettoJaar).toBeCloseTo(single.nettoJaar, 1);
    expect(combined.belastingNaKorting).toBeCloseTo(single.belastingNaKorting, 1);
  });

  it('ZZP: winst − zelfstandigenaftrek, then 12,70% MKB-vrijstelling', () => {
    const r = computeCombined([{ kind: 'zzp', winst: 50_000, urencriteriumGehaald: true }], figures2026);
    // (50.000 − 1.200) × (1 − 0,127) = 42.602,40
    expect(r.belastbaarTotaal).toBeCloseTo(42_602.4, 1);
    // ZZP pays 4,85% ZVW via aanslag
    expect(r.zvwAanslagTotaal).toBeCloseTo(42_602.4 * 0.0485, 0);
  });

  it('without urencriterium: no ondernemersaftrek, but MKB-vrijstelling still applies', () => {
    const r = computeCombined([{ kind: 'zzp', winst: 50_000, urencriteriumGehaald: false }], figures2026);
    expect(r.belastbaarTotaal).toBeCloseTo(50_000 * 0.873, 1);
  });

  it('startersaftrek adds on top when starter + urencriterium', () => {
    const withStarter = computeCombined([{ kind: 'zzp', winst: 50_000, urencriteriumGehaald: true, starter: true }], figures2026);
    // (50.000 − 1.200 − 2.123) × 0,873
    expect(withStarter.belastbaarTotaal).toBeCloseTo((50_000 - 1_200 - 2_123) * 0.873, 1);
  });

  it('combines loon + ZZP: brackets stack, kortingen applied once on totals', () => {
    const loon = computeCombined([{ kind: 'loondienst', brutoJaarloon: 40_000 }], figures2026);
    const combo = computeCombined(
      [
        { kind: 'loondienst', brutoJaarloon: 40_000 },
        { kind: 'zzp', winst: 20_000, urencriteriumGehaald: true },
      ],
      figures2026,
    );
    // taxable total = loon (40.000) + zzp ((20.000−1.200)*0,873 = 16.412,40)
    expect(combo.belastbaarTotaal).toBeCloseTo(40_000 + (20_000 - 1_200) * 0.873, 1);
    // adding income raises tax and arbeidskorting base; net is higher than loon-only but
    // the second source is taxed at the marginal rate stacked on the first
    expect(combo.nettoJaar).toBeGreaterThan(loon.nettoJaar);
    // AHK + arbeidskorting are single combined values, not summed per source
    expect(combo.algemeneHeffingskorting).toBeLessThanOrEqual(3_115);
  });

  it('a ZZP loss reduces total taxable income (MKB-vrijstelling shrinks the loss)', () => {
    const combo = computeCombined(
      [
        { kind: 'loondienst', brutoJaarloon: 40_000 },
        { kind: 'zzp', winst: -5_000, urencriteriumGehaald: false },
      ],
      figures2026,
    );
    // loss after MKB: -5.000 * 0,873 = -4.365 → total 35.635
    expect(combo.belastbaarTotaal).toBeCloseTo(40_000 + -5_000 * 0.873, 1);
  });
});

describe('bandSalary (CAO band + RSP)', () => {
  it('is RSP × max within the band', () => {
    // NN Hay 8: min 2231.55, max 2975.40, rsp 0.9 → 2677.86
    expect(bandSalary(0.9, 2231.55, 2975.4)).toBeCloseTo(0.9 * 2975.4, 2);
  });
  it('floors at the band minimum', () => {
    expect(bandSalary(0.5, 2231.55, 2975.4)).toBe(2231.55);
  });
  it('caps at the band maximum', () => {
    expect(bandSalary(1.2, 2231.55, 2975.4)).toBe(2975.4);
  });
});

describe('payslip variants', () => {
  const base = { maandloon: 3_500 } as const;

  it('splits regular and special pay, so the parts add up to the year', () => {
    const r = computeLoondienst({ ...base, eindejaarsuitkeringPct: 0.0833, bonusJaar: 1_000 }, figures2026);
    expect(r.nettoPerTijdvak * 12 + r.nettoBijzondereBeloningen).toBeCloseTo(r.nettoJaar, 0);
    // Marginal rate on top of a 3.500/month salary: well above the first bracket.
    expect(r.bijzonderTarief).toBeGreaterThan(0.36);
    expect(r.bijzonderTarief).toBeLessThan(0.6);
  });

  it('divides regular net over 13 four-week periods', () => {
    const month = computeLoondienst(base, figures2026);
    const fourWeeks = computeLoondienst({ ...base, loontijdvak: '4weken' }, figures2026);
    expect(fourWeeks.nettoPerTijdvak).toBeCloseTo(month.nettoPerTijdvak * 12 / 13, 1);
  });

  it('withholds more without loonheffingskorting', () => {
    const withCredits = computeLoondienst(base, figures2026);
    const without = computeLoondienst({ ...base, loonheffingskorting: false }, figures2026);
    expect(without.algemeneHeffingskorting + without.arbeidskorting).toBe(0);
    expect(without.nettoJaar).toBeLessThan(withCredits.nettoJaar);
  });

  it('pays overtime on the hourly wage with the surcharge', () => {
    const r = computeLoondienst({ ...base, overwerkUrenPerMaand: 10, overwerkToeslagPct: 0.5, uurPerWeek: 40 }, figures2026);
    const uurloon = 3_500 * 12 / 52 / 40;
    const plain = computeLoondienst(base, figures2026);
    expect(r.brutoJaarloon - plain.brutoJaarloon).toBeCloseTo(10 * 12 * uurloon * 1.5, 0);
  });
});

describe('2027 figures (provisional)', () => {
  it('uses the 2027 brackets and the lower AOW labour credit', async () => {
    const { figures2027 } = await import('@nettohelder/figures');
    const r = computeLoondienst({ brutoJaarloon: 50_000 }, figures2027);
    // 39.247 × 36,23% + 10.753 × 38,16%
    expect(r.belastingVoorKorting).toBeCloseTo(39_247 * 0.3623 + 10_753 * 0.3816, 0);
    expect(figures2027.belowAow.arbeidskorting!.zeroAbove).toBeCloseTo(138_295, 0);
    const aow = computeLoondienst({ brutoJaarloon: 30_000, aow: true }, figures2027);
    expect(aow.ouderenkorting).toBeGreaterThan(0);
  });
});

describe('computeCombined variants', () => {
  it('matches computeLoondienst for a single source', () => {
    const input = { maandloon: 3_500, eindejaarsuitkeringPct: 0.0833, bonusJaar: 1_000 };
    const single = computeLoondienst(input, figures2026);
    const combined = computeCombined([{ kind: 'loondienst', ...input }], figures2026);
    expect(combined.nettoJaar).toBeCloseTo(single.nettoJaar, 0);
    expect(combined.bijzonderTarief).toBeCloseTo(single.bijzonderTarief, 3);
    expect(combined.nettoPerTijdvak).toBeCloseTo(single.nettoPerTijdvak, 0);
  });

  it('applies the ouderenkorting at AOW age and nothing without loonheffingskorting', () => {
    const src = [{ kind: 'loondienst' as const, brutoJaarloon: 30_000 }];
    expect(computeCombined(src, figures2026, { aow: true }).ouderenkorting).toBeGreaterThan(0);
    const none = computeCombined(src, figures2026, { loonheffingskorting: false });
    expect(none.algemeneHeffingskorting + none.arbeidskorting).toBe(0);
  });
});
