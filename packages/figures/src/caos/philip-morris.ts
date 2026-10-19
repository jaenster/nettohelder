import type { Cao } from '../types.js';

/**
 * Cao Philip Morris Investments B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Philip Morris Investments B.V.
 * https://cao-kijker.awvn.nl/bestanden/0714_01-07-2026%20tot%2001-07-2027_akkoord.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2025-07-01 (month) uit de bron
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-07-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoPhilipMorris2026: Cao = {
  id: 'philip-morris',
  name: "Cao Philip Morris Investments B.V.",
  year: 2026,
  effectiveNote: "Cao 2026-07-01 t/m 2027-06-30; loontabel per 2025-07-01. Let op: Onderhandelingsresultaat 22-7-2026 (looptijd 1-7-2026 t/m 30-6-2027): 3,6% op het schaalsalaris per 1-7-2026, onder voorbehoud van instemming door de leden; nabetaling in september 2026 Salaristabel is die van 1-7-2025 (cao 2025-2026, schalen 1-11, periodieken 0-14); de tabel per 1-7-2026 is nog niet gepubliceerd Vakantietoeslag 8% en eindejaarsuitkering 8,33% van de verdiende maandinkomens Individueel Keuze Budget EUR 500 netto per jaar (max EUR 2.000) Dagdienst en 2-ploegendienst 40 uur per week; 3-ploegendienst 37,5 uur; 4/5/6-ploegendienst gemiddeld 36 uur Pensioen via Nationale Nederlanden: werknemersbijdrage 6,26% van de pensioengrondslag (cao 2025-2026); franchise niet in de cao, daarom geen pension-veld",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/0714_01-07-2026%20tot%2001-07-2027_akkoord.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      '1': [2860, 2950, 3045, 3130, 3219, 3311, 3402, 3494, 3580],
      '2': [2942, 3046, 3141, 3240, 3345, 3441, 3537, 3641, 3740],
      '3': [3028, 3127, 3222, 3319, 3426, 3522, 3620, 3720, 3814, 3917],
      '4': [3146, 3255, 3362, 3465, 3579, 3689, 3796, 3908, 4012, 4127],
      '5': [3267, 3373, 3482, 3588, 3694, 3797, 3908, 4011, 4115, 4228, 4328],
      '6': [3392, 3512, 3628, 3749, 3867, 3986, 4104, 4223, 4337, 4457, 4574],
      '7': [3554, 3675, 3795, 3915, 4035, 4154, 4272, 4396, 4513, 4631, 4750, 4869],
      '8': [3729, 3866, 3994, 4130, 4261, 4397, 4525, 4658, 4793, 4926, 5059, 5191, 5327],
      '9': [3911, 4061, 4220, 4370, 4522, 4676, 4828, 4984, 5137, 5297, 5451, 5600, 5752, 5907],
      '10': [4142, 4321, 4505, 4683, 4865, 5046, 5229, 5409, 5587, 5771, 5954, 6129, 6313, 6491, 6671],
      '11': [4375, 4618, 4861, 5103, 5347, 5586, 5831, 6066, 6308, 6543, 6779, 7019, 7256, 7494, 7728],
    },
  },
  periods: [
    {
      from: '2026-07-01',
      note: "+3,6% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          '1': [2962.96, 3056.2, 3154.62, 3242.68, 3334.88, 3430.2, 3524.47, 3619.78, 3708.88],
          '2': [3047.91, 3155.66, 3254.08, 3356.64, 3465.42, 3564.88, 3664.33, 3772.08, 3874.64],
          '3': [3137.01, 3239.57, 3337.99, 3438.48, 3549.34, 3648.79, 3750.32, 3853.92, 3951.3, 4058.01],
          '4': [3259.26, 3372.18, 3483.03, 3589.74, 3707.84, 3821.8, 3932.66, 4048.69, 4156.43, 4275.57],
          '5': [3384.61, 3494.43, 3607.35, 3717.17, 3826.98, 3933.69, 4048.69, 4155.4, 4263.14, 4380.21, 4483.81],
          '6': [3514.11, 3638.43, 3758.61, 3883.96, 4006.21, 4129.5, 4251.74, 4375.03, 4493.13, 4617.45, 4738.66],
          '7': [3681.94, 3807.3, 3931.62, 4055.94, 4180.26, 4303.54, 4425.79, 4554.26, 4675.47, 4797.72, 4921, 5044.28],
          '8': [3863.24, 4005.18, 4137.78, 4278.68, 4414.4, 4555.29, 4687.9, 4825.69, 4965.55, 5103.34, 5241.12, 5377.88, 5518.77],
          '9': [4051.8, 4207.2, 4371.92, 4527.32, 4684.79, 4844.34, 5001.81, 5163.42, 5321.93, 5487.69, 5647.24, 5801.6, 5959.07, 6119.65],
          '10': [4291.11, 4476.56, 4667.18, 4851.59, 5040.14, 5227.66, 5417.24, 5603.72, 5788.13, 5978.76, 6168.34, 6349.64, 6540.27, 6724.68, 6911.16],
          '11': [4532.5, 4784.25, 5036, 5286.71, 5539.49, 5787.1, 6040.92, 6284.38, 6535.09, 6778.55, 7023.04, 7271.68, 7517.22, 7763.78, 8006.21],
        },
      },
    },
  ],
  vergoedingen: [],
};
