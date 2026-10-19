import type { Cao } from '../types.js';

/**
 * CAO NN Group (Nationale-Nederlanden) — own company CAO 2026–2027. Band model:
 * Hay-niveaus 8–22, each a min–max band (min = 75% of max), salary via RSP, all
 * 36u/week. Full bijlage 2 shipped. Time-phased: base = 1 mei 2026 table; a
 * +2,75% revision per 1 mei 2027 lives in `periods`. (Jan–apr 2026 continued the
 * 2024–2025 cao and is not separately modelled.) Vakantiegeld 8% + 13e maand
 * 8,33% (both monthly). Pension = NN (De Nationale APF). Source: official CAO PDF (FNV).
 */
export const caoNN2026: Cao = {
  id: 'nn',
  name: 'CAO NN Group',
  year: 2026,
  effectiveNote:
    'Bandbedragen o.b.v. 36 uur/week, Hay-niveaus 8–22 (band-minimum 75% van max), per 1 mei 2026 (na +3,25% collectieve verhoging). Jan–apr 2026 liep nog op de cao 2024–2025 en is niet apart gemodelleerd. Verdere +2,75% per 1 mei 2027 (zie salarisperiode). Vakantiegeld 8% + 13e maand 8,33% (maandelijks). Pensioen = NN (De Nationale APF).',
  sourceUrl: 'https://www.fnv.nl/cao-sector/finance/cao-nn-group',
  pensioenfondsId: 'nn',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: {
    kind: 'band',
    levelLabel: 'Hay-niveau',
    unit: 'maand',
    levels: [
      { id: '8', min: 2114.1, max: 2818.8 },
      { id: '9', min: 2194.42, max: 2925.89 },
      { id: '10', min: 2345.43, max: 3127.24 },
      { id: '11', min: 2561.23, max: 3414.98 },
      { id: '12', min: 2799.7, max: 3732.93 },
      { id: '13', min: 3056.77, max: 4075.7 },
      { id: '14', min: 3364.01, max: 4485.34 },
      { id: '15', min: 3891.19, max: 5188.25 },
      { id: '16', min: 4527.03, max: 6036.03 },
      { id: '17', min: 5339.43, max: 7119.24 },
      { id: '18', min: 6377.9, max: 8503.86 },
      { id: '19', min: 7601.77, max: 10135.7 },
      { id: '20', min: 8730.21, max: 11640.28 },
      { id: '21', min: 9962.29, max: 13283.05 },
      { id: '22', min: 11527.69, max: 15370.25 },
    ],
    defaultRsp: 0.9,
    hoursPerWeek: 36,
  },
  periods: [
    {
      from: '2027-05-01',
      note: '+2,75% collectieve verhoging',
      salary: {
        kind: 'band',
        levelLabel: 'Hay-niveau',
        unit: 'maand',
        levels: [
          { id: '8', min: 2172.24, max: 2896.32 },
          { id: '9', min: 2254.76, max: 3006.35 },
          { id: '10', min: 2409.93, max: 3213.24 },
          { id: '11', min: 2631.67, max: 3508.89 },
          { id: '12', min: 2876.69, max: 3835.59 },
          { id: '13', min: 3140.84, max: 4187.78 },
          { id: '14', min: 3456.52, max: 4608.69 },
          { id: '15', min: 3998.19, max: 5330.93 },
          { id: '16', min: 4651.52, max: 6202.03 },
          { id: '17', min: 5486.26, max: 7315.02 },
          { id: '18', min: 6553.29, max: 8737.72 },
          { id: '19', min: 7810.82, max: 10414.43 },
          { id: '20', min: 8970.29, max: 11960.39 },
          { id: '21', min: 10236.25, max: 13648.34 },
          { id: '22', min: 11844.7, max: 15792.93 },
        ],
        defaultRsp: 0.9,
        hoursPerWeek: 36,
      },
    },
  ],
  vergoedingen: [],
};
