import type { Cao } from '../types.js';

/**
 * Cao Heidelberg Materials Nederland 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Heidelberg Materials Nederland
 * https://www.cnv.nl/documents/5903/Cao_Heidelberg_Materials_Nederland_2026.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-01-01 (month) uit de bron
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoHeidelbergMaterialsNederland2026: Cao = {
  id: 'heidelberg-materials-nederland',
  name: "Cao Heidelberg Materials Nederland",
  year: 2026,
  effectiveNote: "Cao 2026-01-01 t/m 2026-12-31; loontabel per 2026-01-01. Let op: Per 1 januari 2026: 2% + € 50 bruto per maand (fulltime 40 uur); voor salarisschalen op basis van 36 uur per week is de nominale verhoging € 45 Eindbod van 12 december 2025, door CNV-leden aanvaard (61% voor) Generatiepactregeling: minimaal 20 in plaats van 25 dienstjaren Onderhandelingen over een nieuwe cao per 2027 lopen (oktober 2026) Salarisschalen per 1-1-2026 uit de cao Heidelberg Materials Nederland 2026 (per maand, 40 uur): Cement (bijlage III, schaal 04-12), Beton cao-ers (cao-1 t/m cao-5), Beton UTA (UTA-1 t/m UTA-6) en Aggregaten (bijlage 1, schaal 01-04; treden 0,1-0,3 zijn aanlooptreden). Lage treden liggen op het minimumniveau van € 2.838,38. Vakantiegeld, eindejaarsuitkering en pensioenpremie niet geverifieerd",
  sourceUrl: "https://www.cnv.nl/documents/5903/Cao_Heidelberg_Materials_Nederland_2026.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      'Cement 04': [2838.38, 2838.38, 2838.38, 2838.38, 2838.38, 2838.38, 2838.38, 2838.38, 2838.38, 2842.38, 2897.29, 2950.86],
      'Cement 05': [2838.38, 2838.38, 2838.38, 2838.38, 2838.38, 2838.38, 2838.38, 2866.5, 2921.38, 2976.27, 3031.16, 3084.73],
      'Cement 06': [2838.38, 2838.38, 2838.38, 2838.38, 2838.38, 2890.58, 2945.48, 3000.37, 3055.26, 3110.17, 3165.06, 3218.63],
      'Cement 07': [2838.38, 2871.84, 2926.73, 2981.64, 3036.52, 3091.43, 3146.32, 3201.23, 3256.09, 3311.02, 3365.9, 3419.47],
      'Cement 08': [2883.9, 2945.48, 3007.06, 3068.66, 3130.26, 3191.84, 3253.44, 3315.03, 3376.63, 3438.21, 3499.78, 3561.39, 3620.3],
      'Cement 09': [3084.73, 3154.34, 3223.97, 3293.61, 3363.22, 3432.86, 3502.46, 3572.09, 3641.73, 3711.33, 3780.97, 3850.6, 3920.22, 3988.5],
      'Cement 10': [3352.52, 3430.16, 3507.82, 3585.48, 3663.16, 3740.81, 3818.45, 3896.11, 3973.77, 4051.42, 4129.08, 4206.74, 4284.4, 4356.7],
      'Cement 11': [3620.3, 3701.98, 3783.65, 3865.33, 3946.99, 4028.67, 4110.32, 4192.01, 4273.69, 4355.35, 4437.03, 4518.7, 4600.38, 4682.06, 4758.37],
      'Cement 12': [3888.08, 3985.83, 4083.56, 4181.28, 4279.04, 4376.8, 4474.53, 4572.26, 4670, 4767.74, 4865.48, 4963.23, 5060.97, 5158.7, 5256.44, 5360.9],
      'Beton cao-1': [2838.38, 2838.38, 2910.65, 2991.01, 3071.34, 3151.67],
      'Beton cao-2': [2883.9, 2977.61, 3071.34, 3165.06, 3258.8, 3352.52],
      'Beton cao-3': [2950.86, 3071.34, 3191.84, 3312.34, 3432.86, 3553.34],
      'Beton cao-4': [3017.78, 3151.67, 3285.55, 3419.47, 3553.34, 3687.25],
      'Beton cao-5': [3017.78, 3178.45, 3339.11, 3499.78, 3660.46, 3821.12],
      'Beton UTA-1': [2838.38, 2838.38, 2838.38, 2838.38, 2861.74, 2908.44, 2955.08, 3001.78, 3048.46, 3095.15, 3141.81],
      'Beton UTA-2': [2908.07, 2974.11, 3040.11, 3106.14, 3172.19, 3238.2, 3304.22, 3370.23, 3436.27, 3502.32, 3568.33],
      'Beton UTA-3': [3259.09, 3337.85, 3416.6, 3495.35, 3574.1, 3652.82, 3731.56, 3810.32, 3889.07, 3967.82, 4046.54],
      'Beton UTA-4': [3492.96, 3588.08, 3683.22, 3778.34, 3873.48, 3968.6, 4063.72, 4158.83, 4253.98, 4349.12, 4444.23, 4539.37, 4634.5],
      'Beton UTA-5': [3843.24, 3940.6, 4037.95, 4135.29, 4232.64, 4330, 4427.36, 4524.7, 4622.05, 4719.4, 4816.76, 4914.1, 5011.45],
      'Beton UTA-6': [4078.57, 4201, 4323.44, 4445.9, 4568.35, 4690.79, 4813.22, 4935.68, 5058.13, 5180.58, 5303.02, 5425.46, 5547.9, 5670.36, 5792.77],
      'Aggregaten 01': [2838.38, 2838.38, 2838.38, 2838.38, 2838.38, 2838.38, 2838.38, 2838.38, 2838.38, 2843.56, 2878.73, 2913.89],
      'Aggregaten 02': [2838.38, 2906.84, 3117.86, 3399.19, 3469.53, 3539.86, 3610.19, 3680.51, 3750.85, 3821.2, 3891.53, 3961.85, 4032.18, 4102.5, 4172.86],
      'Aggregaten 03': [2838.38, 2949.05, 3160.04, 3441.39, 3525.79, 3610.19, 3694.6, 3778.99, 3863.39, 3947.81, 4032.18, 4116.6, 4200.98, 4285.39, 4369.81, 4457.11],
      'Aggregaten 04': [2885.75, 3026.43, 3237.42, 3518.74, 3610.19, 3701.63, 3793.06, 3884.51, 3975.93, 4067.36, 4158.78, 4250.23, 4341.66, 4433.09, 4524.5, 4617.79, 4711.51],
    },
  },
  vergoedingen: [],
};
