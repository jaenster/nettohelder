import type { Cao } from '../types.js';

/**
 * Cao Essity Operations Gennep B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Essity Operations Gennep B.V.
 * https://cao-kijker.awvn.nl/bestanden/1918_01-07-2025%20tot%2001-07-2026_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2025-07-01 (month) uit de bron
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoEssityOperationsGennep2026: Cao = {
  id: 'essity-operations-gennep',
  name: "Cao Essity Operations Gennep B.V.",
  year: 2026,
  effectiveNote: "Cao 2025-07-01 t/m 2026-06-30; loontabel per 2025-07-01. Let op: Meest recente cao liep van 1 juli 2025 tot en met 30 juni 2026; geen nieuwe cao of verhoging per 2026 gevonden. CNV is per 2026 niet meer betrokken bij het cao-overleg (alleen FNV) Per 1-7-2025 salarissen en schalen +3,55% (inclusief € 25 voor gestegen kosten ziektekostenverzekering) Salarisschalen per 1 juli 2025 (groepen 1 t/m 10 op ORBA-punten, periodieken 0 t/m 11); groepen 1 en 2 worden tijdens de looptijd niet gebruikt Vakantietoeslag 8% van 12 x het bruto maandinkomen Dagdienst gemiddeld 40 uur per week Pensioenregeling in aparte afspraken; premie en franchise niet gevonden",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/1918_01-07-2025%20tot%2001-07-2026_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      '1': [2129, 2385, 2639, 2677, 2751, 2791],
      '2': [2180, 2444, 2702, 2752, 2806, 2857, 2924],
      '3': [2626, 2690, 2755, 2821, 2889, 2952, 3015, 3075],
      '4': [2735, 2778, 2822, 2879, 2938, 2992, 3044, 3110, 3221],
      '5': [2841, 2864, 2915, 2968, 3022, 3076, 3135, 3250, 3302, 3349],
      '6': [2920, 2940, 3017, 3070, 3125, 3174, 3226, 3286, 3336, 3447],
      '7': [2994, 3075, 3134, 3211, 3286, 3355, 3430, 3499, 3586, 3659],
      '8': [3075, 3179, 3258, 3348, 3439, 3479, 3538, 3629, 3726, 3819, 3918],
      '9': [3244, 3315, 3385, 3479, 3578, 3665, 3764, 3855, 3954, 4050, 4141, 4236],
      '10': [3505, 3615, 3722, 3829, 3931, 4038, 4142, 4249, 4355, 4461, 4567, 4671],
    },
  },
  vergoedingen: [],
};
