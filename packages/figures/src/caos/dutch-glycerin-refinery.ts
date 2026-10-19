import type { Cao } from '../types.js';

/**
 * Cao Dutch Glycerin Refinery B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Dutch Glycerin Refinery B.V.
 * https://cao-kijker.awvn.nl/bestanden/3837_01-04-2026%20tot%2001-04-2027_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-04-01 (month) uit de bron
 *   - Basistabel 1-1-2026 teruggerekend uit de tabel per 2026-04-01 (gedeeld door +3,2%)
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-04-01)
 *
 * Excluded: none stated
 */
export const caoDutchGlycerinRefinery2026: Cao = {
  id: 'dutch-glycerin-refinery',
  name: "Cao Dutch Glycerin Refinery B.V.",
  year: 2026,
  effectiveNote: "Cao 2026-04-01 t/m 2027-03-31; loontabel per 2026-04-01. Let op: Salarisschalen kennen geen treden maar drie niveaus: minimumsalaris, 90%-niveau en 100%-niveau; hier als drie 'treden' opgenomen Voltijd 40 uur per week (dagdienst e.d.); 5-ploegendienst gemiddeld 33,6 uur per week Dertiende maand: een bruto maandsalaris (incl. eventuele ploegentoeslag), betaald in november; hier als 8,33% opgenomen Pensioen: IDC-regeling bij Nationale Nederlanden; werknemersbijdrage 3% van de pensioengrondslag (max. € 137.800 in 2026, franchise € 19.172 in 2026) Minimaal uurloon van € 16 bruto per uur (sinds 1 april 2024) Verhoging 2025 (3,4% per 1-4-2025) volgens AWVN cao-kijker (geaccepteerd eindbod cao 2025-2026)",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/3837_01-04-2026%20tot%2001-04-2027_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      '1': [2686.82, 2731.28, 3034.76],
      '2': [2686.82, 2825.85, 3138.12],
      '3': [2686.82, 2961.5, 3288.83],
      '4': [2686.82, 3106.17, 3449.58],
      '5': [2789.99, 3321.89, 3689.27],
      '6': [2942.13, 3597.06, 3995],
      '7': [3209.09, 3938.08, 4373.92],
      '8': [3501.9, 4307.53, 4784.42],
      '9': [3918.15, 4829.41, 5364.29],
      '10': [4080.32, 5025.76, 5582.45],
      '11': [4556.85, 5791.78, 6433.58],
      '12': [5073.56, 6667.6, 7406.72],
      '13': [5647.69, 7684.23, 8536.31],
      '14': [6277.79, 8857.18, 9839.59],
      '15': [6973.91, 10221.3, 11355.27],
    },
  },
  periods: [
    {
      from: '2026-04-01',
      note: "+3,2% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          '1': [2772.8, 2818.68, 3131.87],
          '2': [2772.8, 2916.28, 3238.54],
          '3': [2772.8, 3056.27, 3394.07],
          '4': [2772.8, 3205.57, 3559.97],
          '5': [2879.27, 3428.19, 3807.33],
          '6': [3036.28, 3712.17, 4122.84],
          '7': [3311.78, 4064.1, 4513.89],
          '8': [3613.96, 4445.37, 4937.52],
          '9': [4043.53, 4983.95, 5535.95],
          '10': [4210.89, 5186.58, 5761.09],
          '11': [4702.67, 5977.12, 6639.45],
          '12': [5235.91, 6880.96, 7643.74],
          '13': [5828.42, 7930.13, 8809.47],
          '14': [6478.68, 9140.61, 10154.46],
          '15': [7197.08, 10548.38, 11718.64],
        },
      },
    },
  ],
  vergoedingen: [],
};
