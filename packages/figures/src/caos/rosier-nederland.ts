import type { Cao } from '../types.js';

/**
 * Cao Rosier Nederland B.V. te Sas van Gent 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Rosier Nederland B.V. te Sas van Gent
 * https://cao-kijker.awvn.nl/bestanden/0009_01-07-2025%20tot%2001-07-2026_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2025-07-01 (month) uit de bron
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoRosierNederland2026: Cao = {
  id: 'rosier-nederland',
  name: "Cao Rosier Nederland B.V. te Sas van Gent",
  year: 2026,
  effectiveNote: "Cao 2025-07-01 t/m 2026-06-30; loontabel per 2025-07-01. Let op: Cao 1 juli 2025 t/m 30 juni 2026; geen nieuwere cao gevonden Salarisschalen I t/m XI per functiejaar; daarnaast een lagere aanloopschaal (0-2 jaar) die niet is opgenomen Dertiende maand gelijk aan een maandinkomen (opgenomen als 8,33%); daarnaast winstdelingsregeling Normale arbeidsduur 40 uur per week, door 15 ATV-dagen gemiddeld 37,7 uur Pensioen bij PGB (middelloon): eigen bijdrage 2,5% van de pensioengrondslag, franchise is de minimale (Witteveen-)franchise; bedrag niet vermeld",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/0009_01-07-2025%20tot%2001-07-2026_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      'I': [2681.07, 2714.81, 2745.16, 2776.37, 2809.26, 2837.94, 2856.48],
      'II': [2748.54, 2783.97, 2821.92, 2858.18, 2894.44, 2929.02, 2950.1],
      'III': [2810.12, 2852.26, 2894.44, 2937.46, 2978.77, 3020.96, 3065.64],
      'IV': [2872.52, 2919.75, 2970.33, 3017.59, 3065.64, 3113.73, 3165.17, 3187.93],
      'V': [2962.76, 3016.73, 3068.17, 3121.31, 3176.97, 3229.26, 3281.55, 3335.52, 3361.67],
      'VI': [3107.82, 3166.01, 3222.5, 3279.03, 3335.52, 3393.72, 3451.07, 3505.88, 3534.56],
      'VII': [3248.65, 3307.71, 3367.56, 3427.44, 3485.63, 3543.83, 3606.23, 3666.12, 3724.31, 3755.51],
      'VIII': [3451.91, 3515.17, 3587.7, 3652.62, 3723.48, 3792.63, 3858.41, 3926.73, 3996.72, 4030.48],
      'IX': [3662.75, 3742.03, 3824.67, 3907.32, 3985.78, 4069.25, 4150.21, 4231.19, 4312.15, 4353.47],
      'X': [3929.25, 4018.65, 4108.9, 4194.91, 4284.31, 4371.18, 4461.43, 4548.29, 4638.53, 4726.23, 4771.79],
      'XI': [4242.14, 4345.05, 4450.47, 4554.19, 4659.62, 4762.51, 4869.61, 4974.19, 5074.56, 5177.45, 5233.11],
    },
  },
  vergoedingen: [],
};
