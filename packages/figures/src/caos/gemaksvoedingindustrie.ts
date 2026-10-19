import type { Cao } from '../types.js';

/**
 * Cao Gemaksvoedingindustrie 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Gemaksvoedingindustrie
 * https://www.cnv.nl/documents/6274/Cao_Gemaksvoedingindustrie_juli_2026-sept._2027.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2027-04-01 (month) uit de bron
 *   - Basistabel 1-1-2026 teruggerekend uit de tabel per 2027-04-01 (gedeeld door +3%, +1%)
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-07-01, 2027-04-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoGemaksvoedingindustrie2026: Cao = {
  id: 'gemaksvoedingindustrie',
  name: "Cao Gemaksvoedingindustrie",
  year: 2026,
  effectiveNote: "Cao 2026-07-01 t/m 2027-09-30; loontabel per 2027-04-01. Let op: Loonschalen per 1 april 2027 (maandlonen bij 40 uur per week); de cao bevat ook 4-weken-, week- en uurlonen. Treden zijn functiejaren 0 t/m 8. Minimale vakantietoeslag voltijd (20+): € 2.700 per 1 juli 2026 en € 2.727 per 1 april 2027. Eindejaarsuitkering 3% van het bruto inkomen van de afgelopen 12 maanden (excl. vakantietoeslag). Pensioen bij VLEP (Bedrijfspensioen Vlees-, Vleeswaren- en Gemaksvoedingindustrie); werknemersdeel van de premie voor de Gemaksvoedingindustrie niet gevonden, daarom niet opgenomen. Per 1 juli 2026 is een nieuw ORBA-functiehandboek ingevoerd; herindeling kan tot een andere functiegroep leiden. Verhogingen per 1 april 2025 (3,5%) en 1 januari 2026 (0,75%) komen uit de vorige cao (1 april 2025 tot 1 juli 2026).",
  sourceUrl: "https://www.cnv.nl/documents/6274/Cao_Gemaksvoedingindustrie_juli_2026-sept._2027.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.03,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      'A': [2623.63, 2657.68, 2691.76, 2725.78, 2759.07, 2793.94, 2827.19, 2862.05, 2896.11],
      'B': [2731.65, 2769.01, 2804.72, 2842.09, 2878.68, 2916.1, 2951.8, 2989.18, 3025.73],
      'C': [2792.28, 2832.14, 2871.19, 2910.26, 2950.13, 2989.18, 3029.07, 3068.11, 3107.98],
      'D': [2869.58, 2911.89, 2954.27, 2995.8, 3038.21, 3080.54, 3122.94, 3164.44, 3206.85],
      'E': [2978.39, 3024.07, 3068.88, 3114.6, 3159.51, 3205.18, 3250.04, 3295.78, 3341.4],
      'F': [3112.1, 3161.97, 3210.99, 3261.66, 3310.7, 3360.54, 3410.38, 3460.21, 3509.23],
      'G': [3276.63, 3331.44, 3386.27, 3441.96, 3496.81, 3551.63, 3607.26, 3662.95, 3716.96],
      'H': [3483.47, 3544.98, 3607.26, 3668.74, 3730.22, 3791.72, 3854.02, 3914.67, 3976.14],
    },
  },
  periods: [
    {
      from: '2026-07-01',
      note: "+3% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          'A': [2702.34, 2737.41, 2772.51, 2807.55, 2841.84, 2877.76, 2912.01, 2947.91, 2982.99],
          'B': [2813.6, 2852.08, 2888.86, 2927.36, 2965.04, 3003.58, 3040.36, 3078.85, 3116.5],
          'C': [2876.05, 2917.11, 2957.33, 2997.56, 3038.63, 3078.85, 3119.94, 3160.15, 3201.22],
          'D': [2955.66, 2999.25, 3042.9, 3085.67, 3129.36, 3172.96, 3216.62, 3259.38, 3303.06],
          'E': [3067.74, 3114.79, 3160.95, 3208.04, 3254.3, 3301.34, 3347.54, 3394.65, 3441.64],
          'F': [3205.47, 3256.83, 3307.32, 3359.51, 3410.02, 3461.36, 3512.69, 3564.02, 3614.5],
          'G': [3374.93, 3431.39, 3487.86, 3545.22, 3601.71, 3658.18, 3715.48, 3772.84, 3828.47],
          'H': [3587.97, 3651.33, 3715.48, 3778.8, 3842.13, 3905.48, 3969.64, 4032.11, 4095.43],
        },
      },
    },
    {
      from: '2027-04-01',
      note: "+1% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          'A': [2729.36, 2764.78, 2800.24, 2835.63, 2870.26, 2906.54, 2941.13, 2977.39, 3012.82],
          'B': [2841.74, 2880.6, 2917.75, 2956.63, 2994.69, 3033.62, 3070.76, 3109.64, 3147.67],
          'C': [2904.81, 2946.28, 2986.9, 3027.54, 3069.02, 3109.64, 3151.14, 3191.75, 3233.23],
          'D': [2985.22, 3029.24, 3073.33, 3116.53, 3160.65, 3204.69, 3248.79, 3291.97, 3336.09],
          'E': [3098.42, 3145.94, 3192.56, 3240.12, 3286.84, 3334.35, 3381.02, 3428.6, 3476.06],
          'F': [3237.52, 3289.4, 3340.39, 3393.11, 3444.12, 3495.97, 3547.82, 3599.66, 3650.65],
          'G': [3408.68, 3465.7, 3522.74, 3580.67, 3637.73, 3694.76, 3752.63, 3810.57, 3866.75],
          'H': [3623.85, 3687.84, 3752.63, 3816.59, 3880.55, 3944.53, 4009.34, 4072.43, 4136.38],
        },
      },
    },
  ],
  vergoedingen: [],
};
