import type { Cao } from '../types.js';

/**
 * Cao DCL Corporation (NL) B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao DCL Corporation (NL) B.V.
 * https://cao-kijker.awvn.nl/bestanden/3261_01-10-2025%20tot%2001-10-2026_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2025-10-01 (month) uit de bron
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoDclCorporation2026: Cao = {
  id: 'dcl-corporation',
  name: "Cao DCL Corporation (NL) B.V.",
  year: 2026,
  effectiveNote: "Cao 2025-10-01 t/m 2026-09-30; loontabel per 2025-10-01. Let op: Verbeterd eindbod van 1 december 2025, looptijd 1 oktober 2025 tot 1 oktober 2026 Salaristabel per functiegroep naar functiejaren (0 t/m 15), afgeronde eurobedragen; ploegendienst 5 ploegen gemiddeld 33,6 uur Eindejaarsuitkering is 2,5% van de in het jaar verdiende maandinkomens Pensioen bij PGB: werknemersbijdrage voor wie vóór 2022 in dienst kwam 3,5% tot de WIA-grens en 7% daarboven; voor nieuwe werknemers conform Verf- en Drukinktindustrie (2022: 13,83%); actuele percentages niet gevonden SAO-toeslag voor bezwarende werkomstandigheden € 63 tot € 216 per maand",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/3261_01-10-2025%20tot%2001-10-2026_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.025,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 38.16,
    schalen: {
      '1': [2783, 2783, 2783, 2783, 2783, 2783, 2814],
      '2': [2783, 2783, 2783, 2783, 2783, 2817, 2880],
      '3': [2783, 2783, 2783, 2783, 2848, 2914, 2976],
      '4': [2783, 2783, 2795, 2861, 2933, 2998, 3069],
      '5': [2783, 2783, 2846, 2915, 2980, 3046, 3117, 3183],
      '6': [2891, 2964, 3034, 3109, 3179, 3248, 3323, 3397],
      '7': [3143, 3221, 3296, 3371, 3445, 3518, 3593, 3670, 3759],
      '8': [3518, 3596, 3673, 3759, 3832, 3911, 3987, 4061, 4142, 4234],
      '9': [3898, 3998, 4095, 4189, 4275, 4360, 4443, 4530, 4615, 4705, 4793, 4902],
      '10': [4274, 4392, 4511, 4633, 4753, 4870, 4989, 5111, 5231, 5352, 5467, 5594, 5718],
      '11': [4768, 4901, 5033, 5167, 5299, 5433, 5564, 5697, 5828, 5962, 6094, 6226, 6359, 6498],
      '12': [5264, 5409, 5552, 5698, 5843, 5989, 6137, 6283, 6429, 6573, 6722, 6867, 7012, 7166],
      '13': [5761, 5911, 6055, 6203, 6353, 6497, 6648, 6794, 6942, 7086, 7233, 7383, 7531, 7677, 7822],
      '14': [6266, 6428, 6587, 6745, 6905, 7069, 7226, 7387, 7549, 7707, 7868, 8029, 8186, 8347, 8507],
      '15': [6774, 6950, 7127, 7299, 7475, 7649, 7825, 8001, 8175, 8351, 8528, 8703, 8878, 9055, 9229, 9405],
    },
  },
  vergoedingen: [],
};
