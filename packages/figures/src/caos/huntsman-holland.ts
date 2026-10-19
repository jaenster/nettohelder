import type { Cao } from '../types.js';

/**
 * Cao Huntsman Holland B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Huntsman Holland B.V.
 * https://cao-kijker.awvn.nl/bestanden/2611_01-08-2025%20tot%2001-08-2027_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2027-01-01 (month) uit de bron
 *   - Basistabel 1-1-2026 teruggerekend uit de tabel per 2027-01-01 (gedeeld door +2,75%, +0,5%)
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-08-01, 2027-01-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoHuntsmanHolland2026: Cao = {
  id: 'huntsman-holland',
  name: "Cao Huntsman Holland B.V.",
  year: 2026,
  effectiveNote: "Cao 2025-08-01 t/m 2027-07-31; loontabel per 2027-01-01. Let op: Salaristabel is de B-schaal (functiejaren) per 1 januari 2027; daarnaast een lagere aanloopschaal (A-schaal) en Step A/B/C-salarissen na 3, 6 en 9 jaar op het maximum 13e maanduitkering gelijk aan het maandinkomen van december (als yearEndBonusPercentage 8,33% opgenomen) Dagdienst normaliter 40 uur per week, gemiddeld 39,08 uur op jaarbasis; volcontinu gemiddeld 34,37 uur Grades 30 en 31 (functiegroepen IX en X) vallen vanaf 1 januari 2026 onder de cao; zij krijgen per 1 april 2026 de 2% van 2025 en volgen vanaf 1 augustus 2026 de cao-verhogingen Pensioenpremie werknemer niet gevonden",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/2611_01-08-2025%20tot%2001-08-2027_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      'I': [3127.91, 3167.62, 3212.16, 3255.74, 3302.22, 3344.83, 3394.22],
      'II': [3176.33, 3219.91, 3263.49, 3309, 3355.49, 3401.97, 3452.32, 3501.71],
      'III': [3252.84, 3302.22, 3349.67, 3397.13, 3449.42, 3499.78, 3554.97, 3612.11],
      'IV': [3316.75, 3370.01, 3422.3, 3476.53, 3535.61, 3592.74, 3654.72, 3716.7],
      'V': [3440.7, 3496.87, 3554.97, 3612.11, 3676.02, 3740.91, 3807.73, 3879.39],
      'VI': [3566.6, 3626.64, 3693.45, 3758.34, 3826.12, 3895.85, 3967.51, 4041.11, 4114.71],
      'VII': [3758.34, 3823.22, 3888.1, 3958.79, 4025.61, 4097.28, 4170.87, 4245.44, 4321.94, 4399.41],
      'VIII': [4004.31, 4072.1, 4143.76, 4223.17, 4295.8, 4372.3, 4449.77, 4526.27, 4610.52, 4693.81],
      'IX': [4345.18, 4456.55, 4567.91, 4679.28, 4790.65, 4901.04, 5012.41, 5123.77, 5235.14, 5346.5, 5458.84],
      'X': [4465.26, 4601.81, 4737.38, 4872.96, 5008.53, 5145.08, 5280.65, 5416.23, 5551.8, 5688.35, 5823.92, 5962.4],
    },
  },
  periods: [
    {
      from: '2026-08-01',
      note: "+2,75% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          'I': [3213.93, 3254.73, 3300.5, 3345.27, 3393.03, 3436.82, 3487.56],
          'II': [3263.68, 3308.46, 3353.23, 3400, 3447.76, 3495.52, 3547.26, 3598.01],
          'III': [3342.29, 3393.03, 3441.79, 3490.55, 3544.28, 3596.02, 3652.74, 3711.44],
          'IV': [3407.96, 3462.69, 3516.42, 3572.14, 3632.84, 3691.54, 3755.22, 3818.91],
          'V': [3535.32, 3593.03, 3652.74, 3711.44, 3777.11, 3843.78, 3912.44, 3986.07],
          'VI': [3664.68, 3726.37, 3795.02, 3861.69, 3931.34, 4002.99, 4076.62, 4152.24, 4227.86],
          'VII': [3861.69, 3928.36, 3995.02, 4067.66, 4136.32, 4209.95, 4285.57, 4362.19, 4440.8, 4520.4],
          'VIII': [4114.43, 4184.08, 4257.71, 4339.3, 4413.93, 4492.54, 4572.14, 4650.75, 4737.31, 4822.89],
          'IX': [4464.68, 4579.1, 4693.53, 4807.96, 4922.39, 5035.82, 5150.25, 5264.68, 5379.1, 5493.53, 5608.96],
          'X': [4588.06, 4728.36, 4867.66, 5006.97, 5146.27, 5286.57, 5425.87, 5565.17, 5704.48, 5844.78, 5984.08, 6126.37],
        },
      },
    },
    {
      from: '2027-01-01',
      note: "+0,5% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          'I': [3230, 3271, 3317, 3362, 3410, 3454, 3505],
          'II': [3280, 3325, 3370, 3417, 3465, 3513, 3565, 3616],
          'III': [3359, 3410, 3459, 3508, 3562, 3614, 3671, 3730],
          'IV': [3425, 3480, 3534, 3590, 3651, 3710, 3774, 3838],
          'V': [3553, 3611, 3671, 3730, 3796, 3863, 3932, 4006],
          'VI': [3683, 3745, 3814, 3881, 3951, 4023, 4097, 4173, 4249],
          'VII': [3881, 3948, 4015, 4088, 4157, 4231, 4307, 4384, 4463, 4543],
          'VIII': [4135, 4205, 4279, 4361, 4436, 4515, 4595, 4674, 4761, 4847],
          'IX': [4487, 4602, 4717, 4832, 4947, 5061, 5176, 5291, 5406, 5521, 5637],
          'X': [4611, 4752, 4892, 5032, 5172, 5313, 5453, 5593, 5733, 5874, 6014, 6157],
        },
      },
    },
  ],
  vergoedingen: [],
};
