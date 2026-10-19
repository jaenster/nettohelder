import type { Cao } from '../types.js';

/**
 * Cao voor de Boekhandel & Kantoorvakhandel 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao voor de Boekhandel & Kantoorvakhandel
 * https://www.cnv.nl/documents/5743/Cao_Boek-_en_Kantoorvakhandel_2025-2027.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-01-01 (month) uit de bron
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-07-01, 2027-01-01, 2027-07-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoBoekhandel2026: Cao = {
  id: 'boekhandel',
  name: "Cao voor de Boekhandel & Kantoorvakhandel",
  year: 2026,
  effectiveNote: "Cao 2025-10-01 t/m 2027-12-31; loontabel per 2026-01-01. Let op: Loonsverhogingen gelden alleen tot de loongrens (incl. vakantiegeld): € 45.669 per jaar vanaf 1-1-2026, € 46.126 vanaf 1-7-2026, € 46.956 vanaf 1-1-2027, € 47.426 vanaf 1-7-2027. Salaristabel per 1 januari 2026 (schaaltreden 21+); in functiegroep 1 gelden de wettelijke minimum(jeugd)lonen. Pensioen bij Bedrijfstakpensioenfonds voor de Detailhandel; premie en franchise niet in de cao vermeld. Schaal: bijlage I, salaristabel per 1 januari 2026 (+2,2%), maandbedragen schaaltreden 0 t/m 12 (21+); latere verhogingen (1-7-2026, 2027) zitten niet in de tabel. Schaal: bijlage I, salaristabel per 1 januari 2026 (+2,2%), maandbedragen schaaltreden 0 t/m 12 (21+); latere verhogingen (1-7-2026, 2027) zitten niet in de tabel.",
  sourceUrl: "https://www.cnv.nl/documents/5743/Cao_Boek-_en_Kantoorvakhandel_2025-2027.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 38,
    schalen: {
      '1': [2432.69, 2432.69, 2432.69],
      '2': [2432.69, 2432.69, 2432.69, 2432.69, 2432.69],
      '3': [2432.69, 2432.69, 2432.69, 2453.21, 2490.2, 2527.19, 2564.17],
      '4': [2432.69, 2432.69, 2468.84, 2508.99, 2549.13, 2589.28, 2629.42, 2669.56],
      '5': [2434.86, 2478.05, 2521.23, 2564.42, 2607.61, 2650.8, 2693.99, 2737.18, 2780.37],
      '6': [2481.16, 2528.38, 2575.61, 2622.83, 2670.06, 2717.29, 2764.51, 2811.74, 2858.96, 2906.19],
      '7': [2527.46, 2578.45, 2629.44, 2680.44, 2731.43, 2782.42, 2833.41, 2884.4, 2935.4, 2986.39, 3037.38],
      '8': [2573.76, 2631.95, 2678.86, 2737.04, 2795.23, 2853.42, 2911.6, 2969.79, 3027.98, 3086.16, 3144.35, 3202.53, 3260.72],
      '9': [2620.06, 2696.49, 2772.92, 2849.37, 2925.79, 3002.22, 3078.66, 3155.08, 3231.53, 3307.96, 3384.38, 3460.81, 3523.85],
    },
  },
  periods: [
    {
      from: '2026-07-01',
      note: "+1% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 38,
        schalen: {
          '1': [2457.02, 2457.02, 2457.02],
          '2': [2457.02, 2457.02, 2457.02, 2457.02, 2457.02],
          '3': [2457.02, 2457.02, 2457.02, 2477.74, 2515.1, 2552.46, 2589.81],
          '4': [2457.02, 2457.02, 2493.53, 2534.08, 2574.62, 2615.17, 2655.71, 2696.26],
          '5': [2459.21, 2502.83, 2546.44, 2590.06, 2633.69, 2677.31, 2720.93, 2764.55, 2808.17],
          '6': [2505.97, 2553.66, 2601.37, 2649.06, 2696.76, 2744.46, 2792.16, 2839.86, 2887.55, 2935.25],
          '7': [2552.73, 2604.23, 2655.73, 2707.24, 2758.74, 2810.24, 2861.74, 2913.24, 2964.75, 3016.25, 3067.75],
          '8': [2599.5, 2658.27, 2705.65, 2764.41, 2823.18, 2881.95, 2940.72, 2999.49, 3058.26, 3117.02, 3175.79, 3234.56, 3293.33],
          '9': [2646.26, 2723.45, 2800.65, 2877.86, 2955.05, 3032.24, 3109.45, 3186.63, 3263.85, 3341.04, 3418.22, 3495.42, 3559.09],
        },
      },
    },
    {
      from: '2027-01-01',
      note: "+1,8% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 38,
        schalen: {
          '1': [2501.24, 2501.24, 2501.24],
          '2': [2501.24, 2501.24, 2501.24, 2501.24, 2501.24],
          '3': [2501.24, 2501.24, 2501.24, 2522.34, 2560.37, 2598.41, 2636.43],
          '4': [2501.24, 2501.24, 2538.41, 2579.69, 2620.96, 2662.25, 2703.52, 2744.79],
          '5': [2503.47, 2547.88, 2592.28, 2636.69, 2681.09, 2725.5, 2769.91, 2814.31, 2858.72],
          '6': [2551.08, 2599.63, 2648.19, 2696.74, 2745.3, 2793.86, 2842.41, 2890.97, 2939.53, 2988.09],
          '7': [2598.68, 2651.11, 2703.54, 2755.97, 2808.4, 2860.83, 2913.26, 2965.68, 3018.12, 3070.55, 3122.97],
          '8': [2646.29, 2706.12, 2754.35, 2814.17, 2874, 2933.83, 2993.65, 3053.48, 3113.31, 3173.13, 3232.96, 3292.78, 3352.61],
          '9': [2693.89, 2772.48, 2851.06, 2929.67, 3008.24, 3086.82, 3165.42, 3243.99, 3322.59, 3401.18, 3479.75, 3558.34, 3623.15],
        },
      },
    },
    {
      from: '2027-07-01',
      note: "+1% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 38,
        schalen: {
          '1': [2526.26, 2526.26, 2526.26],
          '2': [2526.26, 2526.26, 2526.26, 2526.26, 2526.26],
          '3': [2526.26, 2526.26, 2526.26, 2547.56, 2585.98, 2624.39, 2662.79],
          '4': [2526.26, 2526.26, 2563.8, 2605.49, 2647.17, 2688.87, 2730.55, 2772.24],
          '5': [2528.51, 2573.36, 2618.2, 2663.05, 2707.9, 2752.75, 2797.61, 2842.46, 2887.31],
          '6': [2576.59, 2625.63, 2674.67, 2723.71, 2772.76, 2821.8, 2870.84, 2919.88, 2968.92, 3017.97],
          '7': [2624.67, 2677.62, 2730.57, 2783.53, 2836.49, 2889.44, 2942.39, 2995.34, 3048.3, 3101.25, 3154.2],
          '8': [2672.75, 2733.18, 2781.89, 2842.31, 2902.74, 2963.17, 3023.59, 3084.01, 3144.44, 3204.86, 3265.29, 3325.71, 3386.13],
          '9': [2720.83, 2800.2, 2879.57, 2958.96, 3038.32, 3117.69, 3197.07, 3276.43, 3355.82, 3435.19, 3514.55, 3593.92, 3659.38],
        },
      },
    },
  ],
  vergoedingen: [],
};
