import type { Cao } from '../types.js';

/**
 * Cao Norit Nederland B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Norit Nederland B.V.
 * https://www.fnv.nl/nieuwsbericht/sectornieuws/procesindustrie/2026/04/fnv-leden-stemmen-in-met-vernieuwd-eindbod-norit
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2025-03-01 (month) uit de bron
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-03-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoNoritNederland2026: Cao = {
  id: 'norit-nederland',
  name: "Cao Norit Nederland B.V.",
  year: 2026,
  effectiveNote: "Cao 2026-03-01 t/m 2027-02-28; loontabel per 2025-03-01. Let op: Verbeterd eindbod van 23 maart 2026 (looptijd 1-3-2026 tot 1-3-2027), op 30 maart 2026 door FNV-leden aangenomen Salarisschalen per 1-3-2025 (groepen I t/m X, functiejaren) uit de cao 2024-2026; schalen per 1-3-2026 (+3%) niet gevonden. De rij 'max fj + 5 jr' is niet opgenomen 13e maand: 1/12 van het roosterinkomen van het afgelopen jaar (hier als 8,33%) Vakantietoeslag 8% van het jaarinkomen Arbeidsduur dag- en 2-ploegendienst 40 uur, 3-ploegendienst en semi-continu gemiddeld 36 uur, continudienst 33,6 uur per week Resultaatafhankelijke beloning (RAB) voor werknemers zonder STI; niet opgenomen Pensioenpremie niet gevonden",
  sourceUrl: "https://www.fnv.nl/nieuwsbericht/sectornieuws/procesindustrie/2026/04/fnv-leden-stemmen-in-met-vernieuwd-eindbod-norit",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      'I': [2924, 2958, 2993, 3027, 3060, 3092],
      'II': [2978, 3010, 3050, 3089, 3122, 3162, 3197],
      'III': [3040, 3077, 3116, 3158, 3197, 3237, 3275, 3315],
      'IV': [3126, 3173, 3219, 3264, 3304, 3352, 3392, 3436],
      'V': [3236, 3278, 3322, 3367, 3409, 3453, 3498, 3537],
      'VI': [3400, 3448, 3495, 3537, 3584, 3632, 3676, 3721],
      'VII': [3593, 3644, 3690, 3744, 3788, 3846, 3896, 3946, 3993, 4048],
      'VIII': [3794, 3852, 3909, 3969, 4025, 4082, 4141, 4202, 4264, 4320, 4375, 4434],
      'IX': [4074, 4158, 4238, 4327, 4409, 4495, 4578, 4655, 4739, 4820, 4908, 4985, 5068, 5151],
      'X': [4514, 4606, 4699, 4787, 4880, 4975, 5066, 5158, 5250, 5341, 5434, 5525, 5618, 5711],
    },
  },
  periods: [
    {
      from: '2026-03-01',
      note: "+3% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          'I': [3011.72, 3046.74, 3082.79, 3117.81, 3151.8, 3184.76],
          'II': [3067.34, 3100.3, 3141.5, 3181.67, 3215.66, 3256.86, 3292.91],
          'III': [3131.2, 3169.31, 3209.48, 3252.74, 3292.91, 3334.11, 3373.25, 3414.45],
          'IV': [3219.78, 3268.19, 3315.57, 3361.92, 3403.12, 3452.56, 3493.76, 3539.08],
          'V': [3333.08, 3376.34, 3421.66, 3468.01, 3511.27, 3556.59, 3602.94, 3643.11],
          'VI': [3502, 3551.44, 3599.85, 3643.11, 3691.52, 3740.96, 3786.28, 3832.63],
          'VII': [3700.79, 3753.32, 3800.7, 3856.32, 3901.64, 3961.38, 4012.88, 4064.38, 4112.79, 4169.44],
          'VIII': [3907.82, 3967.56, 4026.27, 4088.07, 4145.75, 4204.46, 4265.23, 4328.06, 4391.92, 4449.6, 4506.25, 4567.02],
          'IX': [4196.22, 4282.74, 4365.14, 4456.81, 4541.27, 4629.85, 4715.34, 4794.65, 4881.17, 4964.6, 5055.24, 5134.55, 5220.04, 5305.53],
          'X': [4649.42, 4744.18, 4839.97, 4930.61, 5026.4, 5124.25, 5217.98, 5312.74, 5407.5, 5501.23, 5597.02, 5690.75, 5786.54, 5882.33],
        },
      },
    },
  ],
  vergoedingen: [],
};
