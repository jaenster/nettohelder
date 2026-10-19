import { describe, it, expect } from 'vitest';
import {
  caoTimeline,
  caoPeriodAt,
  caoNextPeriod,
  caoHasMultiplePeriods,
  caoIsOwnSalary,
  applyCaoRaise,
  caoOwnSalaryAt,
  caoEenmaligInJaar,
  caoPeriodsInYear,
  validateCao,
  type Cao,
} from '../src/index.js';

// A NN-style CAO: one table Jan–Apr, a +3% revision from 1 May.
const nnLike: Cao = {
  id: 'test-nn',
  name: 'Test NN',
  year: 2026,
  effectiveNote: 'Two periods: base from 1 jan, +3% from 1 mei.',
  sourceUrl: 'https://example.com',
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: { kind: 'band', levelLabel: 'Functiegroep', unit: 'maand', levels: [{ id: 'A', min: 2400, max: 3000 }], defaultRsp: 0.9 },
  periods: [
    {
      from: '2026-05-01',
      note: '+3% collectieve verhoging',
      salary: { kind: 'band', levelLabel: 'Functiegroep', unit: 'maand', levels: [{ id: 'A', min: 2472, max: 3090 }], defaultRsp: 0.9 },
    },
  ],
  vergoedingen: [],
};

const stable: Cao = { ...nnLike, id: 'test-stable', periods: undefined };

describe('cao period resolution', () => {
  it('builds an ordered timeline with the base period first', () => {
    const t = caoTimeline(nnLike);
    expect(t.map((p) => p.from)).toEqual(['2026-01-01', '2026-05-01']);
    expect(t[0]!.status).toBe('confirmed');
  });

  it('a stable CAO has a single-period timeline', () => {
    expect(caoTimeline(stable)).toHaveLength(1);
    expect(caoHasMultiplePeriods(stable)).toBe(false);
    expect(caoHasMultiplePeriods(nnLike)).toBe(true);
  });

  it('picks the period in effect on a date', () => {
    expect(caoPeriodAt(nnLike, '2026-02-15').from).toBe('2026-01-01');
    expect(caoPeriodAt(nnLike, '2026-04-30').from).toBe('2026-01-01');
    expect(caoPeriodAt(nnLike, '2026-05-01').from).toBe('2026-05-01'); // boundary inclusive
    expect(caoPeriodAt(nnLike, '2026-09-09').from).toBe('2026-05-01');
  });

  it('clamps a date before the first period to the base', () => {
    expect(caoPeriodAt(nnLike, '2025-12-31').from).toBe('2026-01-01');
  });

  it('reports the next upcoming period', () => {
    expect(caoNextPeriod(nnLike, '2026-02-01')?.from).toBe('2026-05-01');
    expect(caoNextPeriod(nnLike, '2026-06-01')).toBeUndefined();
  });
});

describe('period validation', () => {
  it('accepts a well-formed multi-period CAO', () => {
    expect(validateCao(nnLike).filter((i) => i.severity === 'error')).toEqual([]);
  });

  it('flags out-of-order and malformed period dates', () => {
    const bad: Cao = { ...nnLike, periods: [{ from: '2026-01-01', salary: nnLike.salary }] };
    const codes = validateCao(bad).map((i) => i.code);
    expect(codes).toContain('period-not-ascending');
  });
});

// A CAO with researched terms but no salary table: the user types their salary.
const ownLike: Cao = {
  id: 'test-own',
  name: 'Test eigen salaris',
  year: 2026,
  effectiveNote: 'Geen loontabel; +3% per 1 juli, +2% met minimum € 100 per 1 jan 2027.',
  sourceUrl: 'https://example.com',
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.05,
  salary: { kind: 'own', unit: 'maand', hoursPerWeek: 40 },
  periods: [
    { from: '2026-07-01', salary: { kind: 'own', unit: 'maand', hoursPerWeek: 40, raises: [{ pct: 0.03 }] } },
    {
      from: '2027-01-01',
      salary: { kind: 'own', unit: 'maand', hoursPerWeek: 40, raises: [{ pct: 0.02, perMaand: 100 }, { perMaand: 50 }] },
    },
  ],
  eenmaligeUitkeringen: [
    { date: '2026-12-01', amount: 500 },
    { date: '2027-03-01', amount: 300 },
  ],
  vergoedingen: [],
};

describe('own-salary CAOs', () => {
  it('applies a percentage, a percentage with a minimum and a fixed amount', () => {
    expect(applyCaoRaise(3000, { pct: 0.03 })).toBeCloseTo(3090);
    expect(applyCaoRaise(3000, { pct: 0.02, perMaand: 100 })).toBeCloseTo(3100); // 2% = 60 < minimum 100
    expect(applyCaoRaise(6000, { pct: 0.02, perMaand: 100 })).toBeCloseTo(6120);
    expect(applyCaoRaise(3000, { perMaand: 50 })).toBeCloseTo(3050);
  });

  it('scales fixed amounts, not percentages, with part-time', () => {
    expect(applyCaoRaise(1500, { perMaand: 100 }, 0.5)).toBeCloseTo(1550);
    expect(applyCaoRaise(1500, { pct: 0.02, perMaand: 100 }, 0.5)).toBeCloseTo(1550);
    expect(applyCaoRaise(1500, { pct: 0.04, perMaand: 50 }, 0.5)).toBeCloseTo(1560);
  });

  it('carries the typed salary forward through the raises up to the chosen period', () => {
    expect(caoIsOwnSalary(ownLike)).toBe(true);
    expect(caoIsOwnSalary(nnLike)).toBe(false);
    expect(caoOwnSalaryAt(ownLike, 3000, '2026-01-01', '2026-01-01')).toBe(3000);
    expect(caoOwnSalaryAt(ownLike, 3000, '2026-01-01', '2026-07-01')).toBeCloseTo(3090);
    // 3090 → +2% = 61,80 < 100 → 3190 → +50 → 3240
    expect(caoOwnSalaryAt(ownLike, 3000, '2026-01-01', '2027-01-01')).toBeCloseTo(3240);
    // Typed in the July period: that raise is already in it.
    expect(caoOwnSalaryAt(ownLike, 3090, '2026-07-01', '2027-01-01')).toBeCloseTo(3240);
  });

  it('sums the eenmalige uitkeringen of one year, part-time scaled', () => {
    expect(caoEenmaligInJaar(ownLike, 2026)).toBe(500);
    expect(caoEenmaligInJaar(ownLike, 2027, 0.5)).toBe(150);
    expect(caoEenmaligInJaar(nnLike, 2026)).toBe(0);
  });

  it('passes validation', () => {
    expect(validateCao(ownLike)).toEqual([]);
  });

  it('rejects raises on the base, mixed kinds and empty raises', () => {
    const codes = (c: Cao) => validateCao(c).map((i) => i.code);
    expect(codes({ ...ownLike, salary: { kind: 'own', unit: 'maand', raises: [{ pct: 0.02 }] } })).toContain('raise-on-base');
    expect(codes({ ...ownLike, periods: [{ from: '2026-07-01', salary: nnLike.salary }] })).toContain('mixed-salary-kind');
    expect(codes({ ...ownLike, periods: [{ from: '2026-07-01', salary: { kind: 'own', unit: 'maand', raises: [{}] } }] })).toContain(
      'empty-raise',
    );
    expect(codes({ ...ownLike, eenmaligeUitkeringen: [{ date: '2026-12-01', amount: 50000 }] })).toContain('eenmalig-atypical');
  });
});

describe('caoPeriodsInYear', () => {
  const twoYears: Cao = {
    ...nnLike,
    id: 'test-two-years',
    periods: [
      ...nnLike.periods!,
      { from: '2027-05-01', note: '+2,75%', status: 'provisional', salary: nnLike.periods![0]!.salary },
    ],
  };

  it('returns only the revisions taking effect in that year', () => {
    expect(caoPeriodsInYear(twoYears, 2026).map((p) => p.from)).toEqual(['2026-05-01']);
    expect(caoPeriodsInYear(twoYears, 2027).map((p) => p.from)).toEqual(['2027-05-01']);
    expect(caoPeriodsInYear(twoYears, 2027)[0]!.status).toBe('provisional');
  });

  it('never counts the base table as a revision', () => {
    expect(caoPeriodsInYear(stable, 2026)).toEqual([]);
    expect(caoPeriodsInYear(stable, 2027)).toEqual([]);
  });
});
