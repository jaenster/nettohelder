import type { Cao } from '../types.js';

/**
 * Cao Lawter Maastricht B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Lawter Maastricht B.V.
 * https://cao-kijker.awvn.nl/bestanden/3117_01-04-2026%20tot%2001-04-2028_akkoord.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2025-04-01 (month) uit de bron
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-04-01, 2027-04-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoLawterMaastricht2026: Cao = {
  id: 'lawter-maastricht',
  name: "Cao Lawter Maastricht B.V.",
  year: 2026,
  effectiveNote: "Cao 2026-04-01 t/m 2028-03-31; loontabel per 2025-04-01. Let op: Tweede eindbod van 14 april 2026 (FNV), looptijd 1 april 2026 t/m 31 maart 2028 Salarisschalen per 1 april 2025 kennen geen treden maar een minimum, midpoint en maximum; deze drie zijn als treden opgenomen Volcontinudienst gemiddeld 33,6 uur per week Pensioen bij PGB: vaste premie 25,5% incl. werknemersbijdrage; werknemersbijdrage was 3,5% van de pensioengrondslag voor 2021-2025, actuele bijdrage niet gevonden Geen eindejaarsuitkering gevonden",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/3117_01-04-2026%20tot%2001-04-2028_akkoord.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      '1': [2757.72, 2859.83, 2961.83],
      '2': [2847.96, 3028.14, 3208.31],
      '3': [2924.52, 3139.51, 3354.4],
      '4': [3013.9, 3279.9, 3546.12],
      '5': [3142.33, 3459.86, 3777.28],
      '6': [3295.54, 3672.09, 4048.67],
      '7': [3522.08, 3963.4, 4404.8],
      '8': [3750.12, 4292.9, 4835.45],
      '9': [4037.77, 4695.39, 5353.01],
      '10': [4390.91, 5197.53, 6004.13],
      '11': [4973.25, 5971.15, 6969.04],
      '12': [5811.56, 7067.05, 8322.42],
      '13': [6614.4, 8183.98, 9753.65],
      '14': [7684.22, 9505.57, 11327.11],
    },
  },
  periods: [
    {
      from: '2026-04-01',
      note: "+2,5% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          '1': [2826.66, 2931.33, 3035.88],
          '2': [2919.16, 3103.84, 3288.52],
          '3': [2997.63, 3218, 3438.26],
          '4': [3089.25, 3361.9, 3634.77],
          '5': [3220.89, 3546.36, 3871.71],
          '6': [3377.93, 3763.89, 4149.89],
          '7': [3610.13, 4062.49, 4514.92],
          '8': [3843.87, 4400.22, 4956.34],
          '9': [4138.71, 4812.77, 5486.84],
          '10': [4500.68, 5327.47, 6154.23],
          '11': [5097.58, 6120.43, 7143.27],
          '12': [5956.85, 7243.73, 8530.48],
          '13': [6779.76, 8388.58, 9997.49],
          '14': [7876.33, 9743.21, 11610.29],
        },
      },
    },
    {
      from: '2027-04-01',
      note: "+2,5% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          '1': [2897.33, 3004.61, 3111.77],
          '2': [2992.14, 3181.44, 3370.73],
          '3': [3072.57, 3298.45, 3524.22],
          '4': [3166.48, 3445.94, 3725.64],
          '5': [3301.41, 3635.02, 3968.5],
          '6': [3462.38, 3857.99, 4253.63],
          '7': [3700.39, 4164.05, 4627.79],
          '8': [3939.97, 4510.23, 5080.24],
          '9': [4242.18, 4933.09, 5624.01],
          '10': [4613.2, 5460.65, 6308.09],
          '11': [5225.02, 6273.44, 7321.85],
          '12': [6105.77, 7424.82, 8743.74],
          '13': [6949.25, 8598.29, 10247.43],
          '14': [8073.23, 9986.79, 11900.54],
        },
      },
    },
  ],
  vergoedingen: [],
};
