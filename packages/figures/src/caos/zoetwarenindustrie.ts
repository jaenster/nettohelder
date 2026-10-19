import type { Cao } from '../types.js';

/**
 * Cao Zoetwarenindustrie 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Zoetwarenindustrie
 * https://www.fnv.nl/getmedia/9ecf1202-4057-4d27-a229-58b30c11cd7c/1565-zoetwarenindustrie-cao-01-10-2024-tm-30-09-2026-v06052025.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-04-01 (month) uit de bron
 *   - Basistabel 1-1-2026 teruggerekend uit de tabel per 2026-04-01 (gedeeld door +2%)
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-04-01, 2026-10-01, 2027-01-01)
 *
 * Excluded: none stated
 */
export const caoZoetwarenindustrie2026: Cao = {
  id: 'zoetwarenindustrie',
  name: "Cao Zoetwarenindustrie",
  year: 2026,
  effectiveNote: "Cao 2026-10-01 t/m 2027-09-30; loontabel per 2026-04-01. Let op: Cao 1-10-2026 t/m 30-9-2027 (onderhandelingsresultaat 21-7-2026, door leden FNV en CNV goedgekeurd): 1% per 1-10-2026 en 3% per 1-1-2027; https://www.fnv.nl/getmedia/e61db7f2-9d74-43cb-bf7d-4f2dd8c2393b/Onderhandelingsresultaat-cao-Zoetwaren-ondertekend-door-cao-partijen-23-juli-2026-FNV-CNV-en-VBZ-site.pdf Per 1-1-2027 zijn alle schaalsalarissen vanaf groep 2 periodiek 0 minimaal € 18 per uur; niet in de berekening Schaal = maandsalarissen per 1-4-2026 uit de cao 2024-2026 (36 uur per week); groepen 2 t/m 7 beginnen met de A-periodiek (instap, max. 24 maanden), daarna periodiek 0 en verder; groep 1 is vervallen. Er bestaan ook 4-wekentabellen Bij beoordelingssysteem kan een bonus van 2,5% van het schaalmaximum gelden; niet in de berekening Vakantietoeslag 8% met een minimum (per 1-5-2026 € 2.481 bij voltijd) Pensioen: Pensioenfonds Zoetwaren rekencijfers 2026 (premie 30%, franchise € 19.172, max. loon € 82.600); werknemer betaalt volgens de cao 1/3 van de premie (10%). Excedentregeling boven het max. loon niet meegenomen",
  sourceUrl: "https://www.fnv.nl/getmedia/9ecf1202-4057-4d27-a229-58b30c11cd7c/1565-zoetwarenindustrie-cao-01-10-2024-tm-30-09-2026-v06052025.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 36,
    schalen: {
      '2': [2472.55, 2658.82, 2764.71, 2875.49, 2914.71, 2949.02, 2982.35, 3019.61],
      '3': [2511.76, 2700.98, 2815.69, 2926.47, 2966.67, 3010.78, 3052.94, 3093.14],
      '4': [2544.12, 2735.29, 2953.92, 3007.84, 3054.9, 3105.88, 3160.78, 3204.9],
      '5': [2592.16, 2787.25, 3014.71, 3072.55, 3128.43, 3184.31, 3249.02, 3302.94, 3369.61],
      '6': [2641.18, 2840.2, 3075.49, 3139.22, 3201.96, 3272.55, 3343.14, 3415.69, 3495.1, 3565.69],
      '7': [2675.49, 2876.47, 3113.73, 3189.22, 3267.65, 3350, 3433.33, 3521.57, 3602.94, 3681.37, 3766.67],
      '8': [2950.98, 3193.14, 3285.29, 3381.37, 3475.49, 3570.59, 3667.65, 3761.76, 3861.76, 3956.86, 4054.9],
      '9': [3031.37, 3283.33, 3393.14, 3500.98, 3611.76, 3720.59, 3828.43, 3940.2, 4041.18, 4156.86, 4273.53, 4371.57],
      '10': [3122.55, 3381.37, 3502.94, 3625.49, 3750, 3867.65, 3994.12, 4109.8, 4237.25, 4355.88, 4480.39, 4600.98, 4725.49, 4846.08],
    },
  },
  periods: [
    {
      from: '2026-04-01',
      note: "+2% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 36,
        schalen: {
          '2': [2522, 2712, 2820, 2933, 2973, 3008, 3042, 3080],
          '3': [2562, 2755, 2872, 2985, 3026, 3071, 3114, 3155],
          '4': [2595, 2790, 3013, 3068, 3116, 3168, 3224, 3269],
          '5': [2644, 2843, 3075, 3134, 3191, 3248, 3314, 3369, 3437],
          '6': [2694, 2897, 3137, 3202, 3266, 3338, 3410, 3484, 3565, 3637],
          '7': [2729, 2934, 3176, 3253, 3333, 3417, 3502, 3592, 3675, 3755, 3842],
          '8': [3010, 3257, 3351, 3449, 3545, 3642, 3741, 3837, 3939, 4036, 4136],
          '9': [3092, 3349, 3461, 3571, 3684, 3795, 3905, 4019, 4122, 4240, 4359, 4459],
          '10': [3185, 3449, 3573, 3698, 3825, 3945, 4074, 4192, 4322, 4443, 4570, 4693, 4820, 4943],
        },
      },
    },
    {
      from: '2026-10-01',
      note: "+1% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 36,
        schalen: {
          '2': [2547.22, 2739.12, 2848.2, 2962.33, 3002.73, 3038.08, 3072.42, 3110.8],
          '3': [2587.62, 2782.55, 2900.72, 3014.85, 3056.26, 3101.71, 3145.14, 3186.55],
          '4': [2620.95, 2817.9, 3043.13, 3098.68, 3147.16, 3199.68, 3256.24, 3301.69],
          '5': [2670.44, 2871.43, 3105.75, 3165.34, 3222.91, 3280.48, 3347.14, 3402.69, 3471.37],
          '6': [2720.94, 2925.97, 3168.37, 3234.02, 3298.66, 3371.38, 3444.1, 3518.84, 3600.65, 3673.37],
          '7': [2756.29, 2963.34, 3207.76, 3285.53, 3366.33, 3451.17, 3537.02, 3627.92, 3711.75, 3792.55, 3880.42],
          '8': [3040.1, 3289.57, 3384.51, 3483.49, 3580.45, 3678.42, 3778.41, 3875.37, 3978.39, 4076.36, 4177.36],
          '9': [3122.92, 3382.49, 3495.61, 3606.71, 3720.84, 3832.95, 3944.05, 4059.19, 4163.22, 4282.4, 4402.59, 4503.59],
          '10': [3216.85, 3483.49, 3608.73, 3734.98, 3863.25, 3984.45, 4114.74, 4233.92, 4365.22, 4487.43, 4615.7, 4739.93, 4868.2, 4992.43],
        },
      },
    },
    {
      from: '2027-01-01',
      note: "+3% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 36,
        schalen: {
          '2': [2623.64, 2821.29, 2933.65, 3051.2, 3092.81, 3129.22, 3164.59, 3204.12],
          '3': [2665.25, 2866.03, 2987.74, 3105.3, 3147.95, 3194.76, 3239.49, 3282.15],
          '4': [2699.58, 2902.44, 3134.42, 3191.64, 3241.57, 3295.67, 3353.93, 3400.74],
          '5': [2750.55, 2957.57, 3198.92, 3260.3, 3319.6, 3378.89, 3447.55, 3504.77, 3575.51],
          '6': [2802.57, 3013.75, 3263.42, 3331.04, 3397.62, 3472.52, 3547.42, 3624.41, 3708.67, 3783.57],
          '7': [2838.98, 3052.24, 3303.99, 3384.1, 3467.32, 3554.71, 3643.13, 3736.76, 3823.1, 3906.33, 3996.83],
          '8': [3131.3, 3388.26, 3486.05, 3587.99, 3687.86, 3788.77, 3891.76, 3991.63, 4097.74, 4198.65, 4302.68],
          '9': [3216.61, 3483.96, 3600.48, 3714.91, 3832.47, 3947.94, 4062.37, 4180.97, 4288.12, 4410.87, 4534.67, 4638.7],
          '10': [3313.36, 3587.99, 3716.99, 3847.03, 3979.15, 4103.98, 4238.18, 4360.94, 4496.18, 4622.05, 4754.17, 4882.13, 5014.25, 5142.2],
        },
      },
    },
  ],
  vergoedingen: [],
};
