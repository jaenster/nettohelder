import type { Cao } from '../types.js';

/**
 * Cao Frisia Zout B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Frisia Zout B.V.
 * https://cao-kijker.awvn.nl/bestanden/1678_01-07-2025%20tot%2001-07-2026_akkoord.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2024-07-01 (month) uit de bron
 *   - Basistabel 1-1-2026: tabel per 2024-07-01 verhoogd met +3% per 2025-07-01
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoFrisiaZout2026: Cao = {
  id: 'frisia-zout',
  name: "Cao Frisia Zout B.V.",
  year: 2026,
  effectiveNote: "Cao 2025-07-01 t/m 2026-06-30; loontabel per 2024-07-01. Let op: Cao 1-7-2025 t/m 30-6-2026 volgens onderhandelingsresultaat van 12 november 2025 (3% per 1-7-2025, eenmalig € 750 bruto bij het decembersalaris 2025 voor wie op 1-11-2025 in dienst was, parttimers naar rato) Salaristabel per 1-7-2024 (functiejarenschaal, groepen 1 t/m 9) uit de cao 2024-2025; aanloopschalen A (80%) en B (90%) niet opgenomen Vakantietoeslag 8,33% van de maandinkomens (incl. vaste consignatietoeslag) Normale arbeidsduur gemiddeld 38 uur per week; 5-ploegendienst 33,6 uur Nieuwe cao per 1-7-2026: in juni 2026 wezen FNV-leden het eindbod (2% en € 350 bruto eenmalig) af; uitkomst onbekend Pensioengegevens niet in de cao vermeld",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/1678_01-07-2025%20tot%2001-07-2026_akkoord.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.0833,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 38,
    schalen: {
      '1': [2835.59, 2880.91, 2926.23, 2970.52, 3017.9, 3063.22, 3108.54],
      '2': [2871.64, 2922.11, 2971.55, 3023.05, 3072.49, 3122.96, 3174.46, 3224.93],
      '3': [2921.08, 2975.67, 3032.32, 3087.94, 3141.5, 3200.21, 3255.83, 3311.45, 3368.1],
      '4': [2993.18, 3053.95, 3114.72, 3176.52, 3236.26, 3294.97, 3355.74, 3417.54, 3478.31, 3541.14],
      '5': [3107.51, 3172.4, 3238.32, 3305.27, 3372.22, 3439.17, 3504.06, 3571.01, 3636.93, 3702.85, 3769.8],
      '6': [3278.49, 3351.62, 3423.72, 3500.97, 3573.07, 3648.26, 3722.42, 3796.58, 3869.71, 3942.84, 4018.03, 4094.25],
      '7': [3532.9, 3618.39, 3699.76, 3786.28, 3869.71, 3954.17, 4037.6, 4123.09, 4204.46, 4288.92, 4374.41, 4457.84, 4542.3],
      '8': [3873.83, 3971.68, 4067.47, 4164.29, 4261.11, 4355.87, 4454.75, 4550.54, 4648.39, 4743.15, 4839.97, 4936.79, 5034.64, 5134.55],
      '9': [4352.78, 4467.11, 4578.35, 4690.62, 4809.07, 4917.22, 5026.4, 5134.55, 5256.09, 5367.33, 5479.6, 5592.9, 5706.2, 5819.5, 5935.89],
    },
  },
  vergoedingen: [],
};
