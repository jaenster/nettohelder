import type { Cao } from '../types.js';

/**
 * Cao NAPK Muziekensembles 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao NAPK Muziekensembles
 * https://napk.nl/wp-content/uploads/2025/01/CAO-ME-2025-2026-V1.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-01-01 (month) uit de bron
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoNapkMuziekensembles2026: Cao = {
  id: 'napk-muziekensembles',
  name: "Cao NAPK Muziekensembles",
  year: 2026,
  effectiveNote: "Cao 2025-01-01 t/m 2026-12-31; loontabel per 2026-01-01. Let op: Loonsverhoging per 1 januari 2026 kon met maximaal 1% extra stijgen (tot 3,5%) als OCW/FPK in 2025 een subsidie-indexering boven 2,5% toekende; de loontabel 2026 in de cao gaat uit van 2,5%. Schaal M is uitsluitend voor ensemble-musici; in de tabel beginnen schaal I bij stap 4 en schaal II bij stap 1 (2026). Pensioen: werkgever heeft een eigen collectieve regeling (DB of DC); geen vaste werknemerspremie in de cao. Geen eindejaarsuitkering gevonden. Geen informatie over een cao na 31 december 2026.",
  sourceUrl: "https://napk.nl/wp-content/uploads/2025/01/CAO-ME-2025-2026-V1.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 38,
    schalen: {
      'I': [2338, 2400, 2461],
      'II': [2317, 2387, 2456, 2525, 2594, 2663, 2732, 2801],
      'III': [2427, 2503, 2578, 2654, 2730, 2805, 2881, 2956, 3032, 3108],
      'IV': [2641, 2722, 2803, 2883, 2964, 3045, 3126, 3207, 3288, 3369, 3449],
      'V': [2801, 2893, 2984, 3075, 3166, 3258, 3349, 3440, 3532, 3629, 3728, 3831, 3936, 4045, 4158],
      'VI': [2986, 3103, 3219, 3335, 3451, 3567, 3683, 3799, 3915, 4021, 4129, 4241, 4355, 4473, 4594, 4716],
      'VII': [3186, 3310, 3434, 3558, 3682, 3805, 3929, 4053, 4177, 4284, 4392, 4504, 4618, 4736, 4856, 4979],
      'M': [3390, 3516, 3642, 3770, 3896, 4022, 4148, 4274, 4402, 4510, 4619, 4731, 4847, 4964, 5085, 5147],
      'VIII': [3593, 3722, 3851, 3980, 4109, 4238, 4368, 4497, 4626, 4734, 4845, 4958, 5074, 5192, 5313],
      'IX': [3967, 4113, 4259, 4405, 4551, 4697, 4844, 4990, 5136, 5274, 5416, 5561, 5711, 5866],
      'X': [4730, 4881, 5033, 5184, 5335, 5486, 5638, 5789, 5940, 6056, 6174, 6295, 6419],
      'XI': [5040, 5218, 5395, 5573, 5750, 5927, 6105, 6282, 6459, 6630, 6805, 6985, 7169],
      'XII': [6148, 6364, 6581, 6797, 7014, 7230, 7447, 7663, 7880, 8088, 8301, 8520, 8745],
    },
  },
  vergoedingen: [],
};
