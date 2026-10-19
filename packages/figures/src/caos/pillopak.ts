import type { Cao } from '../types.js';

/**
 * Cao PilloPak B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao PilloPak B.V.
 * https://cao-kijker.awvn.nl/bestanden/0703_01-01-2025%20tot%2001-01-2027_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-10-01 (month) uit de bron
 *   - Basistabel 1-1-2026 teruggerekend uit de tabel per 2026-10-01 (gedeeld door +2,5%, +1,5%)
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-04-01, 2026-10-01)
 *
 * Excluded: none stated
 */
export const caoPillopak2026: Cao = {
  id: 'pillopak',
  name: "Cao PilloPak B.V.",
  year: 2026,
  effectiveNote: "Cao 2025-01-01 t/m 2026-12-31; loontabel per 2026-10-01. Let op: Vakantietoeslag 8 1/3% van het jaarinkomen (in mei), minimaal de vakantietoeslag van schaal III periodiek 9; 13e maand 8 1/3% in december. Pensioen: middelloonregeling bij PGB, werknemersbijdrage 8,77% van de pensioengrondslag. Franchise € 20.171 is het niveau 2025 (jaarlijks aangepast aan de cao-loonindex). Pensioengevend salaris = vast maandsalaris plus toeslagen x 13 of 14. Naast de schalen (treden 0-10) is er een aanloopschaal (A0-A3) onder trede 0. Eenmalige Resultaat Afhankelijke Beloning van € 200 bruto als 2 jaar zonder ongeval met verzuim wordt gewerkt; daarnaast mogelijk 0,4% van het jaarsalaris bij een EBITDA-doel. Niet verwerkt (voorwaardelijk). RVU-regeling voor drieploegendienst met minimaal 10 dienstjaren, tot 31-12-2026.",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/0703_01-01-2025%20tot%2001-01-2027_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.0833,
  eindejaarsuitkeringPct: 0.0833,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      '1': [2624.46, 2658.27, 2697.69, 2740.36, 2774.15, 2816.86, 2869.18, 2898.96, 2920.7],
      '2': [2688.02, 2733.09, 2771.77, 2815.24, 2858.68, 2898.16, 2941.58, 2996.37, 3026.13, 3046.28],
      '3': [2772.54, 2816.86, 2862.72, 2908.64, 2948.85, 2993.13, 3038.22, 3091.37, 3123.56, 3145.27],
      '4': [2855.49, 2898.16, 2943.22, 2989.89, 3037.43, 3081.69, 3125.96, 3171.88, 3224.98, 3257.2, 3278.12],
      '5': [2954.5, 3007.62, 3052.7, 3100.23, 3150.1, 3201.64, 3254.04, 3311.09, 3365.06, 3400.45, 3421.43],
      '6': [3076.05, 3125.96, 3178.33, 3234.65, 3291.02, 3350.61, 3406.93, 3465.71, 3529.28, 3569.51, 3595.31],
      '7': [3241.13, 3303.88, 3361.06, 3426.29, 3487.43, 3551.84, 3618.67, 3683.88, 3746.65, 3815.92, 3883.53],
      '8': [3550.25, 3649.25, 3746.65, 3847.29, 3943.89, 4043.75, 4138.68, 4236.13, 4336.79, 4435.8, 4462.35],
      '9': [3925.38, 4046.12, 4166.86, 4283.64, 4403.61, 4523.49, 4641.88, 4765.02, 4881.78, 5001.69, 5124.06],
    },
  },
  periods: [
    {
      from: '2026-04-01',
      note: "+2,5% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          '1': [2690.07, 2724.73, 2765.13, 2808.87, 2843.51, 2887.28, 2940.91, 2971.44, 2993.71],
          '2': [2755.22, 2801.42, 2841.06, 2885.63, 2930.15, 2970.61, 3015.12, 3071.28, 3101.78, 3122.43],
          '3': [2841.85, 2887.28, 2934.29, 2981.36, 3022.57, 3067.96, 3114.18, 3168.65, 3201.65, 3223.9],
          '4': [2926.88, 2970.61, 3016.8, 3064.64, 3113.37, 3158.73, 3204.11, 3251.17, 3305.61, 3338.63, 3360.07],
          '5': [3028.36, 3082.81, 3129.01, 3177.73, 3228.86, 3281.68, 3335.39, 3393.87, 3449.18, 3485.46, 3506.97],
          '6': [3152.96, 3204.11, 3257.78, 3315.52, 3373.29, 3434.37, 3492.1, 3552.35, 3617.51, 3658.75, 3685.19],
          '7': [3322.16, 3386.47, 3445.08, 3511.95, 3574.61, 3640.64, 3709.13, 3775.98, 3840.32, 3911.32, 3980.62],
          '8': [3639, 3740.48, 3840.32, 3943.47, 4042.48, 4144.85, 4242.15, 4342.03, 4445.21, 4546.7, 4573.91],
          '9': [4023.52, 4147.27, 4271.03, 4390.73, 4513.7, 4636.58, 4757.93, 4884.15, 5003.82, 5126.73, 5252.16],
        },
      },
    },
    {
      from: '2026-10-01',
      note: "+1,5% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          '1': [2730.42, 2765.6, 2806.61, 2851, 2886.16, 2930.59, 2985.02, 3016.01, 3038.62],
          '2': [2796.55, 2843.44, 2883.68, 2928.91, 2974.1, 3015.17, 3060.35, 3117.35, 3148.31, 3169.27],
          '3': [2884.48, 2930.59, 2978.3, 3026.08, 3067.91, 3113.98, 3160.89, 3216.18, 3249.67, 3272.26],
          '4': [2970.78, 3015.17, 3062.05, 3110.61, 3160.07, 3206.11, 3252.17, 3299.94, 3355.19, 3388.71, 3410.47],
          '5': [3073.79, 3129.05, 3175.95, 3225.4, 3277.29, 3330.91, 3385.42, 3444.78, 3500.92, 3537.74, 3559.57],
          '6': [3200.25, 3252.17, 3306.65, 3365.25, 3423.89, 3485.89, 3544.48, 3605.64, 3671.77, 3713.63, 3740.47],
          '7': [3371.99, 3437.27, 3496.76, 3564.63, 3628.23, 3695.25, 3764.77, 3832.62, 3897.92, 3969.99, 4040.33],
          '8': [3693.59, 3796.59, 3897.92, 4002.62, 4103.12, 4207.02, 4305.78, 4407.16, 4511.89, 4614.9, 4642.52],
          '9': [4083.87, 4209.48, 4335.1, 4456.59, 4581.41, 4706.13, 4829.3, 4957.41, 5078.88, 5203.63, 5330.94],
        },
      },
    },
  ],
  vergoedingen: [],
};
