import type { Cao } from '../types.js';

/**
 * Cao CBR (Centraal Bureau Rijvaardigheidsbewijzen) 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao CBR (Centraal Bureau Rijvaardigheidsbewijzen)
 * https://cao-kijker.awvn.nl/bestanden/0426_01-01-2026%20tot%2001-04-2027_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2027-02-01 (month) uit de bron
 *   - Basistabel 1-1-2026 teruggerekend uit de tabel per 2027-02-01 (gedeeld door +3,5%, +1,1%)
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-03-01, 2027-02-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoCbr2026: Cao = {
  id: 'cbr',
  name: "Cao CBR (Centraal Bureau Rijvaardigheidsbewijzen)",
  year: 2026,
  effectiveNote: "Cao 2026-01-01 t/m 2027-03-31; loontabel per 2027-02-01. Let op: Functiegroepen 80 en 85 kennen geen treden, alleen een minimum en maximum; die staan hier als twee treden. Pensioen bij het ABP; de werknemerspremie staat niet in de cao. Vitaliteitsregeling 70-90-100 (instroom 2026), vanaf instroom 2027 deels 80-90-100. Loongebouw volgens de cao onder voorbehoud van tikfouten.",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/0426_01-01-2026%20tot%2001-04-2027_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 37.5,
    schalen: {
      '35': [2751.23, 2902.12],
      '40': [2893.29, 3022.41, 3157.59],
      '45': [3038.03, 3169.79, 3307.54, 3451.52],
      '50': [3301.73, 3443.51, 3591.61, 3746.38, 3907.98],
      '55': [3584.01, 3708.62, 3837.72, 3971.48, 4110.06, 4253.61],
      '60': [3885.88, 4029.64, 4178.9, 4333.84, 4494.69, 4661.75, 4835.15],
      '65': [4207.3, 4372.74, 4544.84, 4723.96, 4910.29, 5104.22, 5305.99, 5515.89],
      '70': [4587.26, 4764.08, 4947.89, 5138.99, 5337.64, 5544.14, 5758.87, 5982.09, 6214.12],
      '75': [5082.79, 5275.74, 5476.2, 5684.46, 5900.8, 6125.6, 6359.14, 6601.76, 6853.79, 7115.65],
      '80': [5612.48, 8196.71],
      '85': [6189.3, 9314.54],
    },
  },
  periods: [
    {
      from: '2026-03-01',
      note: "+3,5% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 37.5,
        schalen: {
          '35': [2847.53, 3003.69],
          '40': [2994.56, 3128.19, 3268.1],
          '45': [3144.36, 3280.73, 3423.3, 3572.32],
          '50': [3417.29, 3564.04, 3717.32, 3877.51, 4044.76],
          '55': [3709.45, 3838.42, 3972.04, 4110.48, 4253.91, 4402.48],
          '60': [4021.89, 4170.68, 4325.16, 4485.53, 4652.01, 4824.92, 5004.38],
          '65': [4354.56, 4525.79, 4703.91, 4889.3, 5082.15, 5282.87, 5491.7, 5708.94],
          '70': [4747.81, 4930.82, 5121.07, 5318.85, 5524.46, 5738.18, 5960.44, 6191.46, 6431.61],
          '75': [5260.68, 5460.4, 5667.86, 5883.41, 6107.33, 6340, 6581.71, 6832.82, 7093.67, 7364.7],
          '80': [5808.91, 8483.59],
          '85': [6405.92, 9640.54],
        },
      },
    },
    {
      from: '2027-02-01',
      note: "+1,1% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 37.5,
        schalen: {
          '35': [2878.85, 3036.73],
          '40': [3027.5, 3162.6, 3304.05],
          '45': [3178.95, 3316.82, 3460.96, 3611.62],
          '50': [3454.88, 3603.24, 3758.21, 3920.16, 4089.25],
          '55': [3750.25, 3880.64, 4015.73, 4155.7, 4300.7, 4450.91],
          '60': [4066.13, 4216.56, 4372.74, 4534.87, 4703.18, 4877.99, 5059.43],
          '65': [4402.46, 4575.57, 4755.65, 4943.08, 5138.05, 5340.98, 5552.11, 5771.74],
          '70': [4800.04, 4985.06, 5177.4, 5377.36, 5585.23, 5801.3, 6026, 6259.57, 6502.36],
          '75': [5318.55, 5520.46, 5730.21, 5948.13, 6174.51, 6409.74, 6654.11, 6907.98, 7171.7, 7445.71],
          '80': [5872.81, 8576.91],
          '85': [6476.39, 9746.59],
        },
      },
    },
  ],
  vergoedingen: [],
};
