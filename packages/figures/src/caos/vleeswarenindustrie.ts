import type { Cao } from '../types.js';

/**
 * Cao Vleeswarenindustrie 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Vleeswarenindustrie
 * https://www.fnv.nl/getmedia/7ebb6ac8-412b-4e6e-8f5a-973588ccad73/510-vleeswarenindustrie-cao-01-10-2024-tm-28-02-2026-v03022025.pdf?ext=.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-03-01 (month) uit de bron
 *   - Basistabel 1-1-2026 teruggerekend uit de tabel per 2026-03-01 (gedeeld door +3,2%)
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-03-01)
 *
 * Excluded: none stated
 */
export const caoVleeswarenindustrie2026: Cao = {
  id: 'vleeswarenindustrie',
  name: "Cao Vleeswarenindustrie",
  year: 2026,
  effectiveNote: "Cao 2026-03-01 t/m 2027-02-28; loontabel per 2026-03-01. Let op: Loonschalen per 1 maart 2026 (maandlonen bij 36 uur per week, 7,2 uur per dag); er zijn ook uur-, week- en 4-wekentabellen. Groepen B t/m E beginnen bij 1 functiejaar (geen waarde bij 0 functiejaren). De verhoging van 3,2% per 1 maart 2026 geldt voor de feitelijke lonen; de tabellen zijn inclusief deze verhoging. In juli 2026 krijgen werknemers met recht op reiskostenvergoeding eenmalig € 200 bruto (naar rato bij deeltijd); niet als algemene eenmalige uitkering opgenomen. Vakantietoeslag 8% met een minimum van € 1.410 per jaar. Pensioenpremie VLEP is in 2026 tijdelijk 24,36% (werknemer 5,87%); normaal 26% (werknemer 6,26%). Franchise en maximum pensioengevend salaris zijn de VLEP-bedragen voor 2026; het pensioengevend salaris omvat ook vakantietoeslag. Verhoging van 3% per 1 juli 2025 komt uit de vorige cao (1 oktober 2024 tot 1 maart 2026).",
  sourceUrl: "https://www.fnv.nl/getmedia/7ebb6ac8-412b-4e6e-8f5a-973588ccad73/510-vleeswarenindustrie-cao-01-10-2024-tm-28-02-2026-v03022025.pdf?ext=.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 36,
    schalen: {
      'B': [2332.72, 2376.96, 2421.19, 2465.43, 2509.66, 2553.9, 2598.13, 2642.36, 2686.59],
      'C': [2347.42, 2706.12, 2764.16, 2790.53, 2816.91, 2845.92, 2877.57, 2903.94, 2932.96],
      'D': [2376.43, 2740.42, 2798.44, 2824.82, 2853.83, 2882.84, 2909.22, 2938.24, 2964.61],
      'E': [2402.81, 2774.7, 2827.45, 2856.47, 2885.48, 2911.86, 2940.87, 2967.25, 2996.26],
      'F': [2421.27, 2708.77, 2808.99, 2851.19, 2880.2, 2906.58, 2935.59, 2964.61, 2993.62, 3020],
      'G': [2476.66, 2769.43, 2872.3, 2911.86, 2940.87, 2969.88, 3004.17, 3033.19, 3059.56, 3093.85],
      'H': [2521.5, 2816.91, 2922.4, 2964.61, 2993.62, 3025.27, 3054.28, 3085.94, 3114.95, 3141.33],
      'I': [2582.16, 2885.48, 2993.62, 3035.82, 3064.84, 3099.12, 3130.78, 3159.79, 3194.08, 3223.09],
      'J': [2624.36, 2932.96, 3041.09, 3091.21, 3117.59, 3146.6, 3180.89, 3212.54, 3244.19, 3273.2],
      'K': [2663.92, 2975.16, 3085.94, 3130.78, 3162.42, 3196.72, 3225.73, 3257.37, 3286.39, 3315.41],
    },
  },
  periods: [
    {
      from: '2026-03-01',
      note: "+3,2% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 36,
        schalen: {
          'B': [2407.37, 2453.02, 2498.67, 2544.32, 2589.97, 2635.62, 2681.27, 2726.92, 2772.56],
          'C': [2422.54, 2792.72, 2852.61, 2879.83, 2907.05, 2936.99, 2969.65, 2996.87, 3026.81],
          'D': [2452.48, 2828.11, 2887.99, 2915.21, 2945.15, 2975.09, 3002.31, 3032.26, 3059.48],
          'E': [2479.7, 2863.49, 2917.93, 2947.88, 2977.82, 3005.04, 3034.98, 3062.2, 3092.14],
          'F': [2498.75, 2795.45, 2898.88, 2942.43, 2972.37, 2999.59, 3029.53, 3059.48, 3089.42, 3116.64],
          'G': [2555.91, 2858.05, 2964.21, 3005.04, 3034.98, 3064.92, 3100.3, 3130.25, 3157.47, 3192.85],
          'H': [2602.19, 2907.05, 3015.92, 3059.48, 3089.42, 3122.08, 3152.02, 3184.69, 3214.63, 3241.85],
          'I': [2664.79, 2977.82, 3089.42, 3132.97, 3162.91, 3198.29, 3230.96, 3260.9, 3296.29, 3326.23],
          'J': [2708.34, 3026.81, 3138.41, 3190.13, 3217.35, 3247.29, 3282.68, 3315.34, 3348, 3377.94],
          'K': [2749.17, 3070.36, 3184.69, 3230.96, 3263.62, 3299.01, 3328.95, 3361.61, 3391.55, 3421.5],
        },
      },
    },
  ],
  vergoedingen: [],
};
