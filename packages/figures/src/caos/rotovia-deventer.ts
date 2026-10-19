import type { Cao } from '../types.js';

/**
 * Cao Rotovia Deventer B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Rotovia Deventer B.V.
 * https://www.fnv.nl/getmedia/aac6432f-3562-4a1b-a3d6-f966d30f6696/51-rotovia-deventer-cao-01-06-2025-tm-31-05-2028-v23072026.pdf?ext=.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-06-01 (month) uit de bron
 *   - Basistabel 1-1-2026 teruggerekend uit de tabel per 2026-06-01 (gedeeld door +2,8%)
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-06-01)
 *
 * Excluded: none stated
 */
export const caoRotoviaDeventer2026: Cao = {
  id: 'rotovia-deventer',
  name: "Cao Rotovia Deventer B.V.",
  year: 2026,
  effectiveNote: "Cao 2025-06-01 t/m 2028-05-31; loontabel per 2026-06-01. Let op: Cao 1-6-2025 t/m 31-5-2028 (versie juli 2026); salarissen en salarisschalen worden jaarlijks onderhandeld: +3,7% per 1-6-2025 en +2,8% per 1-6-2026. Verhoging per 1-6-2027 nog niet bekend Salarisschaal per 1-6-2026, groepen I t/m VIII, periodiek 0 t/m 6; aanloopschalen niet opgenomen Normale arbeidsduur 40 uur per week, gemiddelde arbeidsduur 36 uur per week Minimumvakantietoeslag voor 21+ voltijd per 1-6-2025 € 2.610 bruto, jaarlijks geïndexeerd Pensioen PGB: beschikbare premie 25% van de pensioengrondslag, werknemer draagt 40% daarvan (= 10%); franchise is het bedrag voor 2025 (100/70 x AOW), maximum € 137.800 in 2025 en 2026",
  sourceUrl: "https://www.fnv.nl/getmedia/aac6432f-3562-4a1b-a3d6-f966d30f6696/51-rotovia-deventer-cao-01-06-2025-tm-31-05-2028-v23072026.pdf?ext=.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 36,
    schalen: {
      'I': [2368.68, 2402.72, 2442.61, 2463.04, 2508.75, 2540.86, 2583.66],
      'II': [2437.74, 2464.01, 2512.65, 2550.58, 2596.3, 2631.32, 2678.02],
      'III': [2510.7, 2554.47, 2603.11, 2646.89, 2698.44, 2744.16, 2786.96],
      'IV': [2595.33, 2646.89, 2704.28, 2756.81, 2806.42, 2867.7, 2913.42],
      'V': [2696.5, 2764.59, 2826.85, 2902.72, 2964.01, 3030.16, 3091.44],
      'VI': [2824.9, 2903.7, 2976.65, 3051.56, 3122.57, 3202.33, 3274.32],
      'VII': [3007.78, 3091.44, 3182.88, 3261.67, 3350.19, 3439.69, 3526.26],
      'VIII': [3247.08, 3344.36, 3441.63, 3542.8, 3648.83, 3761.67, 3869.65],
    },
  },
  periods: [
    {
      from: '2026-06-01',
      note: "+2,8% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 36,
        schalen: {
          'I': [2435, 2470, 2511, 2532, 2579, 2612, 2656],
          'II': [2506, 2533, 2583, 2622, 2669, 2705, 2753],
          'III': [2581, 2626, 2676, 2721, 2774, 2821, 2865],
          'IV': [2668, 2721, 2780, 2834, 2885, 2948, 2995],
          'V': [2772, 2842, 2906, 2984, 3047, 3115, 3178],
          'VI': [2904, 2985, 3060, 3137, 3210, 3292, 3366],
          'VII': [3092, 3178, 3272, 3353, 3444, 3536, 3625],
          'VIII': [3338, 3438, 3538, 3642, 3751, 3867, 3978],
        },
      },
    },
  ],
  vergoedingen: [],
};
