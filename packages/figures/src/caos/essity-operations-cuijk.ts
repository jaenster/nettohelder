import type { Cao } from '../types.js';

/**
 * Cao Essity Operations Cuijk B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Essity Operations Cuijk B.V.
 * https://www.fnv.nl/getmedia/c5d3e031-0125-41f0-afaf-f9bbda8932ce/1878-essity-operations-cuijk-cao-01-10-2025-tm-31-12-2026-v16032026.pdf?ext=.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2025-10-01 (month) uit de bron
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-10-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoEssityOperationsCuijk2026: Cao = {
  id: 'essity-operations-cuijk',
  name: "Cao Essity Operations Cuijk B.V.",
  year: 2026,
  effectiveNote: "Cao 2025-10-01 t/m 2026-12-31; loontabel per 2025-10-01. Let op: Schaal = maandsalarisschaal per 1-10-2025 (functiejarenschaal, incl. 4%); de cao bevat ook de tabel per 1-10-2026 (incl. 1,5%). Aanloopschalen A/B/C en participatieschaal niet opgenomen Vakantietoeslag 8% van het jaarinkomen en eindejaarsuitkering 8 1/3% van het jaarinkomen Dagdienst 8 uur per dag, met ATV-dagen (11,5 per 2026) gemiddeld 38 uur per week op jaarbasis Leefbaar loon: iedere medewerker verdient minimaal € 16 per uur Pensioen volgens SCA Nederland pensioenreglement; werknemerspremie niet opgenomen",
  sourceUrl: "https://www.fnv.nl/getmedia/c5d3e031-0125-41f0-afaf-f9bbda8932ce/1878-essity-operations-cuijk-cao-01-10-2025-tm-31-12-2026-v16032026.pdf?ext=.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 38,
    schalen: {
      '1': [2638.34, 2678.1, 2712.36, 2751.3],
      '2': [2678.1, 2712.36, 2751.3, 2796.51, 2841.65],
      '3': [2731.83, 2775.45, 2826.06, 2871.22, 2935.85, 2981.05],
      '4': [2796.51, 2851, 2901.67, 2956.93, 3018.5, 3071.44],
      '5': [2896.18, 2952.27, 3013.04, 3068.33, 3133.77, 3191.44, 3260.75],
      '6': [2984.22, 3046.53, 3110.41, 3175.05, 3238.19, 3302.8, 3367.48],
      '7': [3090.98, 3155.61, 3227.31, 3291.13, 3358.93, 3444.58, 3496.8, 3559.12],
      '8': [3206.25, 3277.13, 3342.54, 3416.55, 3479.63, 3550.6, 3630, 3690.8],
      '9': [3336.33, 3389.28, 3478.87, 3555.99, 3634.69, 3709.42, 3783.49, 3858.23, 3932.99],
      '10': [3539.6, 3623.79, 3698.54, 3778.02, 3858.23, 3939.26, 4016.39, 4098.19, 4176.85, 4261.77],
      '11': [3762.39, 3845.75, 3929.11, 4014.05, 4103.58, 4181.5, 4267.97, 4356.03, 4437.04, 4526.59, 4608.38],
    },
  },
  periods: [
    {
      from: '2026-10-01',
      note: "+1,5% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 38,
        schalen: {
          '1': [2677.92, 2718.27, 2753.05, 2792.57],
          '2': [2718.27, 2753.05, 2792.57, 2838.46, 2884.27],
          '3': [2772.81, 2817.08, 2868.45, 2914.29, 2979.89, 3025.77],
          '4': [2838.46, 2893.77, 2945.2, 3001.28, 3063.78, 3117.51],
          '5': [2939.62, 2996.55, 3058.24, 3114.35, 3180.78, 3239.31, 3309.66],
          '6': [3028.98, 3092.23, 3157.07, 3222.68, 3286.76, 3352.34, 3417.99],
          '7': [3137.34, 3202.94, 3275.72, 3340.5, 3409.31, 3496.25, 3549.25, 3612.51],
          '8': [3254.34, 3326.29, 3392.68, 3467.8, 3531.82, 3603.86, 3684.45, 3746.16],
          '9': [3386.37, 3440.12, 3531.05, 3609.33, 3689.21, 3765.06, 3840.24, 3916.1, 3991.98],
          '10': [3592.69, 3678.15, 3754.02, 3834.69, 3916.1, 3998.35, 4076.64, 4159.66, 4239.5, 4325.7],
          '11': [3818.83, 3903.44, 3988.05, 4074.26, 4165.13, 4244.22, 4331.99, 4421.37, 4503.6, 4594.49, 4677.51],
        },
      },
    },
  ],
  vergoedingen: [],
};
