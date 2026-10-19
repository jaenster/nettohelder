import type { Cao } from '../types.js';

/**
 * Cao Arkema B.V., vestiging Vlissingen 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Arkema B.V., vestiging Vlissingen
 * https://cao-kijker.awvn.nl/bestanden/0455_01-01-2025%20tot%2001-01-2027_akkoord.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2025-01-01 (month) uit de bron
 *   - Basistabel 1-1-2026: tabel per 2025-01-01 verhoogd met +3% per 2026-01-01
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoArkemaVlissingen2026: Cao = {
  id: 'arkema-vlissingen',
  name: "Cao Arkema B.V., vestiging Vlissingen",
  year: 2026,
  effectiveNote: "Cao 2025-01-01 t/m 2026-12-31; loontabel per 2025-01-01. Let op: Cao 2025-2026 is een geaccepteerd eindbod van 7 januari 2026 Salarisschalen: functiejarenschaal (vanaf 23 jaar) per 1-1-2025 uit het eindbod; voor 16 t/m 22 jaar gelden aparte leeftijdsschalen (niet opgenomen) Arbeidsduur dagdienst 37,5 uur per week; 3-ploegendienst 36 uur, 5-ploegendienst 33,6 uur (cao 2024) Extra uitkering gelijk aan het salaris over december (incl. ploegentoeslag), hier als 8,33% opgenomen Pensioen via eigen pensioenregeling; werknemersbijdrage niet in de cao vermeld",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/0455_01-01-2025%20tot%2001-01-2027_akkoord.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 37.5,
    schalen: {
      'B': [2906.66, 2958.16, 3005.54, 3061.16, 3113.69, 3164.16, 3186.82],
      'C': [3008.63, 3071.46, 3130.17, 3187.85, 3248.62, 3308.36, 3329.99],
      'D': [3071.46, 3129.14, 3183.73, 3240.38, 3301.15, 3358.83, 3412.39, 3471.1, 3497.88],
      'E': [3214.63, 3274.37, 3337.2, 3395.91, 3459.77, 3518.48, 3583.37, 3645.17, 3669.89],
      'F': [3322.78, 3387.67, 3448.44, 3511.27, 3577.19, 3642.08, 3704.91, 3767.74, 3832.63, 3895.46, 3925.33],
      'G': [3438.14, 3511.27, 3586.46, 3658.56, 3728.6, 3797.61, 3872.8, 3946.96, 4013.91, 4089.1, 4161.2, 4190.04],
      'H': [3646.2, 3721.39, 3794.52, 3864.56, 3939.75, 4010.82, 4089.1, 4161.2, 4236.39, 4315.7, 4380.59, 4455.78, 4529.94, 4605.13, 4639.12],
      'I': [3967.56, 4049.96, 4130.3, 4211.67, 4297.16, 4375.44, 4458.87, 4543.33, 4624.7, 4705.04, 4786.41, 4869.84, 4951.21, 5032.58, 5113.95, 5151.03],
    },
  },
  vergoedingen: [],
};
