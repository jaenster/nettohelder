import type { Cao } from '../types.js';

/**
 * Cao Zeeland Refinery N.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Zeeland Refinery N.V.
 * https://cao-kijker.awvn.nl/bestanden/0618_01-10-2025%20tot%2001-10-2026_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2025-10-01 (month) uit de bron
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoZeelandRefinery2026: Cao = {
  id: 'zeeland-refinery',
  name: "Cao Zeeland Refinery N.V.",
  year: 2026,
  effectiveNote: "Cao 2025-10-01 t/m 2026-09-30; loontabel per 2025-10-01. Let op: Cao 1 oktober 2025 t/m 30 september 2026; per 1 oktober 2025 eerst 0,75% (uit cao 2024-2025) en daarna 1,75% Vakantietoeslag 8,33% van 12 x basismaandsalaris plus een toeslag van 30% daarover (samen 10,83%), met een minimum gelijk aan het basismaandsalaris van groep VIII trede 4 Dertiende maand (een basismaandsalaris) plus 30% toeslag (samen 10,83%) Werk in 5-ploegendienst, gemiddeld 33,6 uur per week; daarnaast ploegentoeslag Salarisschalen per trede (senioriteit), afgeronde eurobedragen; een deel van de treden is automatische senioriteit Controlroom Operators in schaal I t/m trede 17 krijgen jaarlijks in januari € 500 bruto persoonlijke toeslag Pensioen bij Stichting Algemeen Pensioenfonds Stap; werknemersbijdrage niet gevonden",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/0618_01-10-2025%20tot%2001-10-2026_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.10830000000000001,
  eindejaarsuitkeringPct: 0.10830000000000001,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 33.6,
    schalen: {
      'VIII': [2589, 2631, 2671, 2718, 2762, 2805, 2853],
      'VII': [2721, 2765, 2809, 2858, 2904, 2949, 2999, 3047],
      'VI': [2798, 2847, 2895, 2937, 2989, 3040, 3085, 3143, 3198],
      'V': [2898, 2939, 2999, 3047, 3103, 3161, 3208, 3269, 3321, 3372],
      'IV': [3010, 3063, 3122, 3173, 3231, 3291, 3347, 3408, 3469, 3524, 3577],
      'III': [3171, 3227, 3293, 3353, 3414, 3477, 3542, 3601, 3663, 3724, 3785, 3845],
      'II': [3373, 3433, 3507, 3567, 3632, 3700, 3765, 3828, 3895, 3959, 4029, 4094, 4139, 4186, 4231, 4279, 4326, 4372],
      'IIA': [3373, 3433, 3507, 3567, 3632, 3700, 3765, 3828, 3895, 3959, 4029, 4094, 4158, 4225, 4267, 4314, 4356, 4401, 4454, 4494, 4531],
      'I': [3592, 3671, 3737, 3806, 3873, 3946, 4017, 4086, 4154, 4226, 4299, 4370, 4438, 4483, 4536, 4585, 4632, 4679, 4728, 4778, 4827],
      'S': [3890, 3999, 4112, 4223, 4333, 4449, 4560, 4668, 4777, 4889, 5002, 5115, 5229, 5286, 5341, 5394, 5444, 5497, 5550],
    },
  },
  vergoedingen: [],
};
