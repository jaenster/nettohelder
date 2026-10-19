import type { Cao } from '../types.js';

/**
 * Cao ESD-SIC B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao ESD-SIC B.V.
 * https://www.fnv.nl/getmedia/7becdb31-d3a5-447e-bdd2-96b2dc18a87f/17-esd-sic-cao-01-06-2024-tm-31-05-2026-v07112025.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-01-01 (month) uit de bron
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoEsdSic2026: Cao = {
  id: 'esd-sic',
  name: "Cao ESD-SIC B.V.",
  year: 2026,
  effectiveNote: "Cao 2024-06-01 t/m 2026-05-31; loontabel per 2026-01-01. Let op: Cao ESD-SIC 2024-2026 (1-6-2024 t/m 31-5-2026) met FNV; geen verhoging per 1-6-2024. Opvolgende cao niet gevonden Functiejarenschalen per 1-1-2026 (groepen A t/m H, 0 t/m 10 functiejaren); inclusief toeslag bezwarende werkomstandigheden tot EBO-score 21, daarboven € 35/€ 70/€ 115 extra per maand Vaste eindejaarsuitkering 8,33% van 12x het maandinkomen van november Vakantietoeslag 8% van 12x het gemiddelde maandinkomen Arbeidsduur gemiddeld 36 uur per week (dag- en 2-ploegendienst), 33,6 uur in 5-ploegendienst Eigen pensioenregeling; werknemerspremie niet gevonden. Ploegentoeslag wordt pensioengevend bij overgang naar de Wtp (2027) Jeugdschalen en participatieschaal (100-120% WML) niet opgenomen",
  sourceUrl: "https://www.fnv.nl/getmedia/7becdb31-d3a5-447e-bdd2-96b2dc18a87f/17-esd-sic-cao-01-06-2024-tm-31-05-2026-v07112025.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 36,
    schalen: {
      'A': [2761, 2787, 2824, 2858],
      'B': [2846, 2904, 2958, 3015, 3076],
      'C': [2904, 2969, 3039, 3110, 3177, 3240],
      'D': [2963, 3045, 3130, 3216, 3296, 3377, 3457],
      'E': [3021, 3118, 3218, 3314, 3410, 3508, 3610, 3714],
      'F': [3089, 3198, 3306, 3418, 3527, 3635, 3741, 3852, 3957],
      'G': [3185, 3314, 3436, 3557, 3680, 3802, 3924, 4046, 4172, 4312],
      'H': [3315, 3466, 3619, 3778, 3928, 4083, 4238, 4387, 4541, 4702, 4856],
    },
  },
  vergoedingen: [],
};
