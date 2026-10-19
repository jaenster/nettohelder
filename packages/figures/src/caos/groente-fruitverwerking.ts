import type { Cao } from '../types.js';

/**
 * Cao Groenten- en Fruitverwerkende Industrie 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Groenten- en Fruitverwerkende Industrie
 * https://www.fnv.nl/getmedia/798c61ba-b519-47ac-b2dd-344f4543bb05/247-groenten-en-fruitverwerkende-industrie-cao-01-04-2025-tm-30-09-2026-v07112025.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2025-07-01 (month) uit de bron
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-07-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoGroenteFruitverwerking2026: Cao = {
  id: 'groente-fruitverwerking',
  name: "Cao Groenten- en Fruitverwerkende Industrie",
  year: 2026,
  effectiveNote: "Cao 2025-04-01 t/m 2026-09-30; loontabel per 2025-07-01. Let op: Cao liep af op 30-9-2026; onderhandelingen over een nieuwe cao liepen in oktober 2026 nog zonder resultaat Eindejaarsuitkering vanaf 2026 ten minste 4,5% van het jaarinkomen (bij minimaal 9 maanden in dienst in het kalenderjaar); t/m 2025 een eenmalige uitkering van ten minste 4,25% van het jaarinkomen. Winstdeling wordt verrekend Scale = maandsalarissen per 1-7-2025 (na 3,75%), functiejaren als treden; groep I begint bij 1 functiejaar (0 functiejaren = WML). Inlooptreden A1/A2, jeugdbodembedragen en periodetabel niet opgenomen Tabel per 1-7-2026 (na 3%) niet gevonden; de verhoging per 1-7-2026 staat wel in de cao Pensioen via BPL Pensioen; werknemerspremie niet in de cao vermeld",
  sourceUrl: "https://www.fnv.nl/getmedia/798c61ba-b519-47ac-b2dd-344f4543bb05/247-groenten-en-fruitverwerkende-industrie-cao-01-04-2025-tm-30-09-2026-v07112025.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.045,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      'I': [2521.06, 2545.15, 2569.23, 2593.55, 2618.1],
      'II': [2511.84, 2540.7, 2569.59, 2598.4, 2627.25, 2656.12, 2685.32, 2714.84],
      'III': [2576.09, 2612.38, 2648.75, 2685.96, 2723.67, 2762.9, 2802.71, 2843.09],
      'IV': [2644.53, 2689.08, 2734.32, 2781.88, 2829.38, 2876.95, 2924.27, 2972.36, 3021.24],
      'V': [2722.03, 2775.89, 2830.26, 2884.53, 2938.86, 2993.16, 3047.53, 3101.78, 3157, 3213.2],
      'VI': [2855.82, 2915.99, 2976.04, 3036.09, 3096.17, 3156.18, 3216.28, 3276.32, 3337.47, 3399.76],
      'VII': [2994.56, 3061.83, 3129.13, 3196.35, 3263.58, 3330.84, 3398.05, 3465.35, 3532.59, 3601.13, 3671],
      'VIII': [3203.37, 3276.62, 3349.99, 3423.23, 3496.52, 3569.81, 3643.12, 3716.42, 3789.68, 3864.39, 3940.57],
      'IX': [3475.08, 3557.39, 3639.67, 3721.96, 3804.19, 3886.53, 3968.82, 4051.13, 4133.4, 4215.7, 4299.64, 4385.25],
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
          'I': [2596.69, 2621.5, 2646.31, 2671.36, 2696.64],
          'II': [2587.2, 2616.92, 2646.68, 2676.35, 2706.07, 2735.8, 2765.88, 2796.29],
          'III': [2653.37, 2690.75, 2728.21, 2766.54, 2805.38, 2845.79, 2886.79, 2928.38],
          'IV': [2723.87, 2769.75, 2816.35, 2865.34, 2914.26, 2963.26, 3012, 3061.53, 3111.88],
          'V': [2803.69, 2859.17, 2915.17, 2971.07, 3027.03, 3082.95, 3138.96, 3194.83, 3251.71, 3309.6],
          'VI': [2941.49, 3003.47, 3065.32, 3127.17, 3189.06, 3250.87, 3312.77, 3374.61, 3437.59, 3501.75],
          'VII': [3084.4, 3153.68, 3223, 3292.24, 3361.49, 3430.77, 3499.99, 3569.31, 3638.57, 3709.16, 3781.13],
          'VIII': [3299.47, 3374.92, 3450.49, 3525.93, 3601.42, 3676.9, 3752.41, 3827.91, 3903.37, 3980.32, 4058.79],
          'IX': [3579.33, 3664.11, 3748.86, 3833.62, 3918.32, 4003.13, 4087.88, 4172.66, 4257.4, 4342.17, 4428.63, 4516.81],
        },
      },
    },
  ],
  vergoedingen: [],
};
