import type { Cao } from '../types.js';

/**
 * Cao Solidus Solutions Board B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Solidus Solutions Board B.V.
 * https://cao-kijker.awvn.nl/bestanden/1613_01-10-2024%20tot%2001-10-2026_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-01-01 (month) uit de bron
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoSolidusSolutionsBoard2026: Cao = {
  id: 'solidus-solutions-board',
  name: "Cao Solidus Solutions Board B.V.",
  year: 2026,
  effectiveNote: "Cao 2024-10-01 t/m 2026-09-30; loontabel per 2026-01-01. Let op: Cao 1-10-2024 t/m 30-9-2026; functiejarenschaal per 1-1-2025 +4% en per 1-1-2026 +2,5%. Geen nieuwe cao na 1-10-2026 gevonden Salarisschalen per 1 januari 2026 (functiegroepen 1 t/m 9, periodieken 0 t/m 9); daarnaast een aanloopschaal (niet opgenomen) Vakantietoeslag 8,33% van 12 x het maandinkomen van april, minimaal € 2.480,81 per 1-1-2026 voor vakvolwassen werknemers 13e maand van 8,3% van 12 x het maandinkomen van december Pensioen bij PGB met gestaffelde werknemersbijdrage: 2,925% van de pensioengrondslag tot € 62.323, 7,4% van € 62.323 tot € 71.433 en 1,4% daarboven (cijfers 2025); franchise € 18.475 (2025) Dagdienst 40 uur per week; volcontinu gemiddeld 33,6 uur",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/1613_01-10-2024%20tot%2001-10-2026_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.0833,
  eindejaarsuitkeringPct: 0.083,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      '1': [2802.82, 2857.21, 2919.25, 2975.33, 3033.11],
      '2': [2854.67, 2919.25, 2982.11, 3043.31, 3107.89],
      '3': [2928.59, 2999.96, 3070.46, 3143.57, 3244.68],
      '4': [3022.9, 3106.2, 3185.19, 3263.37, 3373.88],
      '5': [3136.76, 3205.64, 3277.83, 3346.67, 3418.01, 3520.84],
      '6': [3264.24, 3339.01, 3412.07, 3482.59, 3557.37, 3630.45, 3704.37],
      '7': [3441.82, 3520.84, 3599.86, 3679.74, 3763.88, 3842.06, 3922.79, 4000.93],
      '8': [3636.41, 3734.13, 3825.03, 3921.07, 4015.36, 4109.7, 4203.18, 4299.17, 4391.82],
      '9': [3874.36, 3979.69, 4087.63, 4194.68, 4300.88, 4407.95, 4514.17, 4619.54, 4728.27, 4835.36],
    },
  },
  vergoedingen: [],
};
