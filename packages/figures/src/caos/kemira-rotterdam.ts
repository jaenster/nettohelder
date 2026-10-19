import type { Cao } from '../types.js';

/**
 * Cao Kemira Rotterdam B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Kemira Rotterdam B.V.
 * https://cao-kijker.awvn.nl/bestanden/3419_01-01-2026%20tot%2001-01-2027_akkoord.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2025-01-01 (month) uit de bron
 *   - Basistabel 1-1-2026: tabel per 2025-01-01 verhoogd met +3% per 2026-01-01
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoKemiraRotterdam2026: Cao = {
  id: 'kemira-rotterdam',
  name: "Cao Kemira Rotterdam B.V.",
  year: 2026,
  effectiveNote: "Cao 2026-01-01 t/m 2026-12-31; loontabel per 2025-01-01. Let op: Cao 2026 is een geaccepteerd eindbod van 30 maart 2026 Eenmalige uitkering € 500 bruto per 1 juli 2026 (fulltime) voor medewerkers die dan minimaal 6 maanden in dienst zijn Salarisschalen per 1-1-2025 (functiejaren 0 t/m max) uit de cao 2025; per 1-1-2026 verhoogd met 3% Voltijd arbeidsduur 40 uur per week, door adv verkort tot gemiddeld 36,62 uur (dag-, 2- en 3-ploegendienst); 5-ploegendienst 33,6 uur, 6-ploegendienst 34,67 uur 13e maanduitkering gelijk aan het maandinkomen van december, hier als 8,33% opgenomen Pensioen: werknemerspremie niet in de cao vermeld",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/3419_01-01-2026%20tot%2001-01-2027_akkoord.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      'I': [3064.25, 3142.53, 3180.64, 3202.27, 3239.35, 3268.19, 3298.06],
      'II': [3131.2, 3167.25, 3197.12, 3230.08, 3263.04, 3298.06, 3341.32],
      'III': [3198.15, 3230.08, 3258.92, 3304.24, 3343.38, 3386.64, 3431.96, 3475.22],
      'IV': [3283.64, 3326.9, 3370.16, 3417.54, 3463.89, 3504.06, 3563.8, 3618.39],
      'V': [3396.94, 3450.5, 3494.79, 3560.71, 3612.21, 3666.8, 3726.54, 3778.04],
      'VI': [3565.86, 3627.66, 3688.43, 3741.99, 3793.49, 3855.29, 3917.09, 3973.74, 4025.24],
      'VII': [3818.21, 3891.34, 3969.62, 4043.78, 4101.46, 4185.92, 4258.02, 4341.45, 4411.49],
      'VIII': [4113.82, 4203.43, 4277.59, 4361.02, 4450.63, 4537.15, 4622.64, 4715.34, 4805.98],
      'IX': [4277.59, 4365.14, 4537.15, 4630.88, 4716.37, 4804.95, 4897.65, 4987.26, 5088.2, 5180.9],
    },
  },
  vergoedingen: [],
};
