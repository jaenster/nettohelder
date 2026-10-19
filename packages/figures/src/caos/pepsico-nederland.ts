import type { Cao } from '../types.js';

/**
 * PepsiCo Nederland B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: PepsiCo Nederland B.V.
 * https://cao-kijker.awvn.nl/bestanden/0834_01-07-2025%20tot%2001-01-2027_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-01-01 (month) uit de bron
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoPepsicoNederland2026: Cao = {
  id: 'pepsico-nederland',
  name: "PepsiCo Nederland B.V.",
  year: 2026,
  effectiveNote: "Cao 2025-07-01 t/m 2026-12-31; loontabel per 2026-01-01. Let op: Cao PepsiCo (en Duyvis) 1 juli 2025 t/m 31 december 2026 o.b.v. aangepast eindbod (geaccepteerd volgens AWVN); +2% per 1-7-2025 en +3,5% per 1-1-2026. Salarisschalen per 1-1-2026 (schaal 0 t/m VIII, treden = 0 t/m max periodieken); daarnaast een aanloopschaal (A) onder trede 0 (niet opgenomen). Eindejaarsuitkering 7,7% van de in het kalenderjaar verdiende maandinkomens (excl. overwerktoeslag), in november. Vakantietoeslag 8% (mei-april), uitbetaald in april. Voltijd: dagdienst, 2- en 3-ploegendienst 40 uur; 4-ploegendienst 36 uur; 5-ploegendienst 33,6 uur per week. Duyvis heeft een eigen cao-bestand (duyvis-productie); pensioenpremie niet in deze cao vermeld.",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/0834_01-07-2025%20tot%2001-01-2027_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.077,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      '0': [2677.86, 2733.59, 2789.33, 2845.06, 2900.8, 2956.52, 3012.27, 3067.95],
      'I': [2933.27, 3010.77, 3083.2, 3142.58, 3195.53, 3241.78, 3280.87, 3319.98],
      'II': [3005.1, 3084.57, 3158.83, 3219.69, 3274.04, 3321.43, 3361.51, 3394],
      'III': [3086.17, 3167.9, 3244.24, 3306.81, 3362.7, 3411.42, 3452.64, 3486],
      'IV': [3189.85, 3274.45, 3353.41, 3418.23, 3476.03, 3526.44, 3569.08, 3603.62, 3638.55],
      'V': [3362.83, 3452.12, 3535.57, 3604.01, 3665.07, 3718.37, 3763.4, 3799.88, 3836.74],
      'VI': [3622.77, 3719.27, 3809.41, 3883.28, 3949.27, 4006.78, 4055.43, 4094.86, 4134.6],
      'VII': [3938.47, 4043.64, 4141.86, 4222.4, 4294.32, 4356.98, 4410.03, 4452.97, 4496.36],
      'VIII': [4320.68, 4436.35, 4544.38, 4633, 4712.04, 4781.05, 4839.34, 4886.6, 4934.29, 4982.55],
    },
  },
  vergoedingen: [],
};
