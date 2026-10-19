import type { Cao } from '../types.js';

/**
 * Cao voor de Kunststof-, Rubber- en Lijmindustrie (KRLI) 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao voor de Kunststof-, Rubber- en Lijmindustrie (KRLI)
 * https://www.cnv.nl/industrie/chemie-en-energie/cao-kunststof-rubber-en-lijmindustrie/nieuws/stemmingsuitslag-eindbod-cao-kunststof-rubber-en-lijmindustrie-2026-08-26/
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2025-09-01 (month) uit de bron
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-09-01, 2027-09-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoRubberKunststof2026: Cao = {
  id: 'rubber-kunststof',
  name: "Cao voor de Kunststof-, Rubber- en Lijmindustrie (KRLI)",
  year: 2026,
  effectiveNote: "Cao 2026-09-01 t/m 2028-06-30; loontabel per 2025-09-01. Let op: Cao 2026-2028 = eindbod NRK Werkgevers (8-7-2026), door de leden aangenomen (CNV, 26-8-2026); definitieve cao-tekst nog niet gepubliceerd Verhogingen gelden niet voor schaal 0 (WML) en WML-salarissen; daar volgt het loon de WML-indexatie Loontabel = maandsalarissen per 1-9-2025 uit de cao 2025-2026 (functiejaren 0 t/m max, groep A t/m J, 40 uur per week); de aanloopschaal en groep 0 (WML) zijn niet opgenomen Salarissen onder het WML (maandtoetsloon) worden opgehoogd tot het WML Minimum vakantietoeslag per 1-9-2025: € 2.251,72 Pensioen bij PGB: werknemersdeel maximaal 40% van de werkgeversspecifieke premie (gemiddeld max. 31% van de pensioengrondslag), dus geen vast percentage; franchise 2025 € 19.795, max. pensioengevend salaris 2025 € 84.238. Cijfers 2026/2027 niet gevonden Geen eindejaarsuitkering of eenmalige uitkering gevonden",
  sourceUrl: "https://www.cnv.nl/industrie/chemie-en-energie/cao-kunststof-rubber-en-lijmindustrie/nieuws/stemmingsuitslag-eindbod-cao-kunststof-rubber-en-lijmindustrie-2026-08-26/",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      'A': [2459.58, 2483.07, 2502.78, 2523.18, 2546.71],
      'B': [2506.56, 2529.29, 2552.77, 2573.96, 2602.01, 2632.31],
      'C': [2568.68, 2595.18, 2627.74, 2661.13, 2696.68, 2731.52],
      'D': [2641.39, 2686.83, 2720.17, 2765.61, 2808.79, 2856.53],
      'E': [2726.22, 2777.79, 2816.35, 2865.61, 2911.08, 2958.03, 3007.28],
      'F': [2842.15, 2890.59, 2937.6, 2987.57, 3039.84, 3084.54, 3136.03],
      'G': [2952.73, 3006.52, 3057.28, 3108.74, 3161.07, 3213.31, 3262.57, 3315.56],
      'H': [3066.36, 3125.47, 3181.53, 3245.14, 3302.74, 3361.04, 3414.85, 3476.93, 3532.99],
      'I': [3275.42, 3342.85, 3413.34, 3489.07, 3557.99, 3626.93, 3702.72, 3772.36, 3845.88, 3917.82],
      'J': [3511.04, 3605.71, 3703.45, 3798.15, 3893.6, 3989.8, 4091.31, 4184.5, 4282.94, 4378.4, 4472.31],
    },
  },
  periods: [
    {
      from: '2026-09-01',
      note: "+2,5% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          'A': [2521.07, 2545.15, 2565.35, 2586.26, 2610.38],
          'B': [2569.22, 2592.52, 2616.59, 2638.31, 2667.06, 2698.12],
          'C': [2632.9, 2660.06, 2693.43, 2727.66, 2764.1, 2799.81],
          'D': [2707.42, 2754, 2788.17, 2834.75, 2879.01, 2927.94],
          'E': [2794.38, 2847.23, 2886.76, 2937.25, 2983.86, 3031.98, 3082.46],
          'F': [2913.2, 2962.85, 3011.04, 3062.26, 3115.84, 3161.65, 3214.43],
          'G': [3026.55, 3081.68, 3133.71, 3186.46, 3240.1, 3293.64, 3344.13, 3398.45],
          'H': [3143.02, 3203.61, 3261.07, 3326.27, 3385.31, 3445.07, 3500.22, 3563.85, 3621.31],
          'I': [3357.31, 3426.42, 3498.67, 3576.3, 3646.94, 3717.6, 3795.29, 3866.67, 3942.03, 4015.77],
          'J': [3598.82, 3695.85, 3796.04, 3893.1, 3990.94, 4089.55, 4193.59, 4289.11, 4390.01, 4487.86, 4584.12],
        },
      },
    },
    {
      from: '2027-09-01',
      note: "+2,5% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          'A': [2584.1, 2608.78, 2629.48, 2650.92, 2675.64],
          'B': [2633.45, 2657.34, 2682, 2704.27, 2733.74, 2765.57],
          'C': [2698.72, 2726.56, 2760.77, 2795.85, 2833.2, 2869.8],
          'D': [2775.11, 2822.85, 2857.88, 2905.62, 2950.98, 3001.14],
          'E': [2864.23, 2918.42, 2958.93, 3010.68, 3058.45, 3107.78, 3159.52],
          'F': [2986.03, 3036.93, 3086.32, 3138.82, 3193.73, 3240.69, 3294.79],
          'G': [3102.21, 3158.73, 3212.05, 3266.12, 3321.1, 3375.98, 3427.74, 3483.41],
          'H': [3221.59, 3283.7, 3342.59, 3409.43, 3469.94, 3531.19, 3587.73, 3652.95, 3711.85],
          'I': [3441.24, 3512.08, 3586.14, 3665.7, 3738.11, 3810.54, 3890.17, 3963.34, 4040.58, 4116.16],
          'J': [3688.79, 3788.25, 3890.94, 3990.43, 4090.71, 4191.78, 4298.43, 4396.34, 4499.76, 4600.06, 4698.72],
        },
      },
    },
  ],
  vergoedingen: [],
};
