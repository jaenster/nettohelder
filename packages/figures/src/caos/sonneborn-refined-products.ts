import type { Cao } from '../types.js';

/**
 * Cao Sonneborn Refined Products B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Sonneborn Refined Products B.V.
 * https://cao-kijker.awvn.nl/bestanden/2389_01-04-2025%20tot%2001-04-2027_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-04-01 (month) uit de bron
 *   - Basistabel 1-1-2026 teruggerekend uit de tabel per 2026-04-01 (gedeeld door +3%)
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-04-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoSonnebornRefinedProducts2026: Cao = {
  id: 'sonneborn-refined-products',
  name: "Cao Sonneborn Refined Products B.V.",
  year: 2026,
  effectiveNote: "Cao 2025-04-01 t/m 2027-03-31; loontabel per 2026-04-01. Let op: Cao 1 april 2025 t/m 31 maart 2027 (FNV en CNV) Salarisschalen per 1 april 2026: aanloopschaal (A t/m D) gevolgd door vakvolwassenschaal (0 t/m max periodieken), afgeronde eurobedragen Vakantietoeslag 8,33% met een minimum van € 2.720 per 1 april 2026 (21+ voltijd); eindejaarsuitkering is één maandinkomen (december) Daarnaast een resultaatafhankelijke uitkering (milieu, veiligheid e.d.) Dagdienst 40 uur per week; 5-ploegendienst gemiddeld 33,6 uur (ploegentoeslag 28%) Pensioen bij PGB (middelloon): eigen bijdrage 6,3% van de pensioengrondslag (2025); franchise niet vermeld. Nieuwe tekst pensioenartikel vanaf 1 januari 2027",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/2389_01-04-2025%20tot%2001-04-2027_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.0833,
  eindejaarsuitkeringPct: 0.0833,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      '2': [2741.75, 2797.09, 2854.37, 2912.62, 2975.73, 3035.92, 3098.06, 3157.28, 3216.5, 3275.73, 3336.89],
      '3': [2822.33, 2879.61, 2938.83, 3001.94, 3061.17, 3126.21, 3189.32, 3253.4, 3315.53, 3377.67, 3440.78, 3501.94],
      '4': [2909.71, 2969.9, 3027.18, 3094.17, 3158.25, 3223.3, 3287.38, 3351.46, 3416.5, 3480.58, 3546.6, 3612.62, 3674.76],
      '5': [3007.77, 3068.93, 3134.95, 3198.06, 3264.08, 3330.1, 3400, 3467.96, 3533.01, 3602.91, 3668.93, 3739.81, 3803.88, 3871.84],
      '6': [3124.27, 3189.32, 3253.4, 3322.33, 3390.29, 3463.11, 3530.1, 3602.91, 3670.87, 3741.75, 3810.68, 3881.55, 3949.51, 4020.39, 4090.29],
      '7': [3263.11, 3330.1, 3398.06, 3472.82, 3541.75, 3614.56, 3687.38, 3759.22, 3832.04, 3907.77, 3975.73, 4052.43, 4126.21, 4199.03, 4272.82, 4344.66],
      '8': [3431.07, 3503.88, 3575.73, 3645.63, 3727.18, 3801.94, 3880.58, 3956.31, 4027.18, 4105.83, 4181.55, 4260.19, 4334.95, 4412.62, 4488.35, 4562.14, 4643.69],
      '9': [3628.16, 3702.91, 3779.61, 3858.25, 3935.92, 4019.42, 4097.09, 4178.64, 4262.14, 4348.54, 4434.95, 4523.3, 4612.62, 4703.88, 4800, 4897.09, 4997.09, 5092.23],
      '10': [4028.16, 4113.59, 4199.03, 4286.41, 4375.73, 4465.05, 4555.34, 4650.49, 4745.63, 4843.69, 4939.81, 5043.69, 5143.69, 5250.49, 5360.19, 5468.93, 5581.55, 5694.17, 5811.65],
      '11': [4487.38, 4580.58, 4668.93, 4767.96, 4870.87, 4972.82, 5079.61, 5182.52, 5293.2, 5404.85, 5516.5, 5628.16, 5749.51, 5867.96, 5990.29, 6120.39, 6246.6, 6377.67, 6510.68, 6647.57],
    },
  },
  periods: [
    {
      from: '2026-04-01',
      note: "+3% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          '2': [2824, 2881, 2940, 3000, 3065, 3127, 3191, 3252, 3313, 3374, 3437],
          '3': [2907, 2966, 3027, 3092, 3153, 3220, 3285, 3351, 3415, 3479, 3544, 3607],
          '4': [2997, 3059, 3118, 3187, 3253, 3320, 3386, 3452, 3519, 3585, 3653, 3721, 3785],
          '5': [3098, 3161, 3229, 3294, 3362, 3430, 3502, 3572, 3639, 3711, 3779, 3852, 3918, 3988],
          '6': [3218, 3285, 3351, 3422, 3492, 3567, 3636, 3711, 3781, 3854, 3925, 3998, 4068, 4141, 4213],
          '7': [3361, 3430, 3500, 3577, 3648, 3723, 3798, 3872, 3947, 4025, 4095, 4174, 4250, 4325, 4401, 4475],
          '8': [3534, 3609, 3683, 3755, 3839, 3916, 3997, 4075, 4148, 4229, 4307, 4388, 4465, 4545, 4623, 4699, 4783],
          '9': [3737, 3814, 3893, 3974, 4054, 4140, 4220, 4304, 4390, 4479, 4568, 4659, 4751, 4845, 4944, 5044, 5147, 5245],
          '10': [4149, 4237, 4325, 4415, 4507, 4599, 4692, 4790, 4888, 4989, 5088, 5195, 5298, 5408, 5521, 5633, 5749, 5865, 5986],
          '11': [4622, 4718, 4809, 4911, 5017, 5122, 5232, 5338, 5452, 5567, 5682, 5797, 5922, 6044, 6170, 6304, 6434, 6569, 6706, 6847],
        },
      },
    },
  ],
  vergoedingen: [],
};
