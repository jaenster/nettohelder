import type { Cao } from '../types.js';

/**
 * Cao Trespa International B.V. en Facilities Wetering B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Trespa International B.V. en Facilities Wetering B.V.
 * https://www.fnv.nl/getmedia/9654bbd2-c95c-4bb9-a372-f2fe2c31a763/457-trespa-international-en-facilities-wetering-cao-01-10-2025-tm-30-09-2027-v08122025.pdf?ext=.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-10-01 (month) uit de bron
 *   - Basistabel 1-1-2026 teruggerekend uit de tabel per 2026-10-01 (gedeeld door +2,9%)
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-10-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoTrespa2026: Cao = {
  id: 'trespa',
  name: "Cao Trespa International B.V. en Facilities Wetering B.V.",
  year: 2026,
  effectiveNote: "Cao 2025-10-01 t/m 2027-09-30; loontabel per 2026-10-01. Let op: Salarisschalen per 1-10-2026 (functiejarenschaal in halve treden van 0 tot max. 12 functiejaren); de aanloopschaal (functiejaar -1) is niet opgenomen. In de bron staat bij schaal 8, 12 functiejaren € 4.662, lager dan de trede ervoor (vermoedelijk drukfout); die trede is weggelaten Voor schalen 3 t/m 9 wordt de schaal per 1-10-2025 en 1-10-2026 met 2 halve treden (elk 0,5%) verlengd; toekenning via de beoordelingscyclus per 1 april (eerste keer april 2026) Ploegentoeslag 2- en 5-ploegendienst +0,5% per 1-10-2025 en nogmaals +0,5% per 1-10-2026; prestatiebeloning maximaal 2,5% Vakantietoeslag 8% van het maandinkomen van mei (x12); 13e maand: één maandinkomen in november Arbeidsduur 40 uur per week (dag-, 2- en 3-ploegendienst); 5-ploegendienst gemiddeld 33,6 uur Pensioen bij Pensioenfonds PGB; werknemersbijdrage en franchise niet in de cao gevonden",
  sourceUrl: "https://www.fnv.nl/getmedia/9654bbd2-c95c-4bb9-a372-f2fe2c31a763/457-trespa-international-en-facilities-wetering-cao-01-10-2025-tm-30-09-2027-v08122025.pdf?ext=.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      '1': [2740.52, 2768.22, 2795.92, 2821.19, 2846.45, 2873.66, 2900.87, 2927.6, 2954.32, 2983.97, 3013.61, 3038.87, 3064.14],
      '2': [2834.79, 2866.38, 2897.96, 2924.2, 2950.44, 2979.11, 3007.77, 3034.99, 3062.2, 3092.32, 3122.45, 3151.6, 3180.76],
      '3': [2936.83, 2965.01, 2993.2, 3023.81, 3054.42, 3083.09, 3111.76, 3140.91, 3170.07, 3201.17, 3232.26, 3260.45, 3288.63, 3315.84, 3343.05, 3360.54, 3378.04, 3395.04, 3412.05],
      '4': [3062.2, 3094.27, 3126.34, 3156.46, 3186.59, 3217.2, 3247.81, 3279.88, 3311.95, 3339.65, 3367.35, 3399.9, 3432.46, 3460.64, 3488.82, 3520.89, 3552.96, 3570.94, 3588.92, 3606.9, 3624.88],
      '5': [3203.11, 3241.01, 3278.91, 3310.5, 3342.08, 3380.95, 3419.83, 3453.35, 3486.88, 3524.3, 3561.71, 3596.21, 3630.71, 3666.18, 3701.65, 3740.04, 3778.43, 3797.38, 3816.33, 3835.76, 3855.2],
      '6': [3382.9, 3417.4, 3451.9, 3488.82, 3525.75, 3566.57, 3607.39, 3643.83, 3680.27, 3720.6, 3760.93, 3795.43, 3829.93, 3868.8, 3907.68, 3946.55, 3985.42, 4005.83, 4026.24, 4046.65, 4067.06],
      '7': [3581.15, 3619.05, 3656.95, 3698.25, 3739.55, 3780.86, 3822.16, 3861.52, 3900.87, 3942.66, 3984.45, 4023.32, 4062.2, 4103.5, 4144.8, 4183.67, 4222.55, 4264.82, 4307.09, 4350.34, 4393.59, 4415.94, 4438.29, 4460.64, 4482.99],
      '8': [3802.72, 3845.48, 3888.24, 3928.57, 3968.9, 4013.12, 4057.34, 4100.58, 4143.83, 4185.62, 4227.41, 4270.65, 4313.9, 4358.6, 4403.3, 4447.04, 4490.77, 4534.01, 4577.26, 4623.42, 4669.58, 4692.91, 4716.23, 4740.04],
      '9': [4028.18, 4075.32, 4122.45, 4167.15, 4211.86, 4256.07, 4300.29, 4346.45, 4392.61, 4438.78, 4484.94, 4528.67, 4572.4, 4619.53, 4666.67, 4714.77, 4762.88, 4808.55, 4854.23, 4902.33, 4950.44, 4975.22, 5000, 5025.27, 5050.53],
    },
  },
  periods: [
    {
      from: '2026-10-01',
      note: "+2,9% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          '1': [2820, 2848.5, 2877, 2903, 2929, 2957, 2985, 3012.5, 3040, 3070.5, 3101, 3127, 3153],
          '2': [2917, 2949.5, 2982, 3009, 3036, 3065.5, 3095, 3123, 3151, 3182, 3213, 3243, 3273],
          '3': [3022, 3051, 3080, 3111.5, 3143, 3172.5, 3202, 3232, 3262, 3294, 3326, 3355, 3384, 3412, 3440, 3458, 3476, 3493.5, 3511],
          '4': [3151, 3184, 3217, 3248, 3279, 3310.5, 3342, 3375, 3408, 3436.5, 3465, 3498.5, 3532, 3561, 3590, 3623, 3656, 3674.5, 3693, 3711.5, 3730],
          '5': [3296, 3335, 3374, 3406.5, 3439, 3479, 3519, 3553.5, 3588, 3626.5, 3665, 3700.5, 3736, 3772.5, 3809, 3848.5, 3888, 3907.5, 3927, 3947, 3967],
          '6': [3481, 3516.5, 3552, 3590, 3628, 3670, 3712, 3749.5, 3787, 3828.5, 3870, 3905.5, 3941, 3981, 4021, 4061, 4101, 4122, 4143, 4164, 4185],
          '7': [3685, 3724, 3763, 3805.5, 3848, 3890.5, 3933, 3973.5, 4014, 4057, 4100, 4140, 4180, 4222.5, 4265, 4305, 4345, 4388.5, 4432, 4476.5, 4521, 4544, 4567, 4590, 4613],
          '8': [3913, 3957, 4001, 4042.5, 4084, 4129.5, 4175, 4219.5, 4264, 4307, 4350, 4394.5, 4439, 4485, 4531, 4576, 4621, 4665.5, 4710, 4757.5, 4805, 4829, 4853, 4877.5],
          '9': [4145, 4193.5, 4242, 4288, 4334, 4379.5, 4425, 4472.5, 4520, 4567.5, 4615, 4660, 4705, 4753.5, 4802, 4851.5, 4901, 4948, 4995, 5044.5, 5094, 5119.5, 5145, 5171, 5197],
        },
      },
    },
  ],
  vergoedingen: [],
};
