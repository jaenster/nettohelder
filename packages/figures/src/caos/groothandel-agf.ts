import type { Cao } from '../types.js';

/**
 * Cao Groothandel in Groenten en Fruit 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Groothandel in Groenten en Fruit
 * https://dashboard.groentenfruithuis.nl/files/14891/AKKOORD-cao-Groothandel-in-Groenten-en-Fruit-1-juli-2026-tot-en-met-30-juni-2027.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-01-01 (month) uit de bron
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-07-01, 2027-01-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoGroothandelAgf2026: Cao = {
  id: 'groothandel-agf',
  name: "Cao Groothandel in Groenten en Fruit",
  year: 2026,
  effectiveNote: "Cao 2026-07-01 t/m 2027-06-30; loontabel per 2026-01-01. Let op: Verhogingen van 1 juli 2025 (1,1%), 1 juli 2026 (0,75%) en 1 januari 2027 (2,75%) zijn minimaal-percentages Bovenschaligen (niet ingedeeld in functiegroep A t/m I) hebben in de cao 2025-2026 recht op ten minste de helft van de algemene verhogingen Salaristabel is de maandtabel per 1 januari 2026 (cao 2025-2026, Bijlage A); de cao rekent met uurlonen, maandloon = uurloon x 38 x 52 / 12 Functiegroep H en I kennen alleen een minimum en maximum (0 en 10 of meer functiejaren); doorgroei gaat via beoordeling Per 1 januari 2027 vervalt trede A1 in schaal A: de oude A2 wordt A1, enzovoort; A0 blijft gekoppeld aan het wettelijk minimumloon Per 1 januari 2027 stijgt het maximaal pensioengevend loon met € 500; pensioenpremie en fonds niet gevonden Optionele waarderingstoeslag tot 10% voor functiegroep A t/m G is niet verwerkt Geen eindejaarsuitkering of eenmalige uitkering gevonden",
  sourceUrl: "https://dashboard.groentenfruithuis.nl/files/14891/AKKOORD-cao-Groothandel-in-Groenten-en-Fruit-1-juli-2026-tot-en-met-30-juni-2027.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 38,
    schalen: {
      'A': [2431.57, 2471.83, 2526.21, 2581.79, 2638.59, 2696.64, 2755.97],
      'B': [2561.39, 2621.07, 2682.14, 2744.64, 2808.59, 2874.03, 2940.99],
      'C': [2704.16, 2769.06, 2835.51, 2903.57, 2973.25, 3044.61, 3117.68],
      'D': [2846.92, 2918.1, 2991.05, 3065.82, 3142.47, 3221.03, 3301.56],
      'E': [2989.69, 3055.46, 3122.68, 3191.38, 3261.59, 3333.35, 3406.68, 3481.63, 3558.22],
      'F': [3131.25, 3190.68, 3253.51, 3314.64, 3375.77, 3438.6, 3496.34, 3560.86, 3618.6, 3679.73, 3742.56],
      'G': [3284.08, 3352, 3430.11, 3498.04, 3569.35, 3644.07, 3713.69, 3783.31, 3856.33, 3929.35, 4000.67],
      'H': [3532, 4506.69],
      'I': [3728.97, 4915.93],
    },
  },
  periods: [
    {
      from: '2026-07-01',
      note: "+0,75% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 38,
        schalen: {
          'A': [2449.81, 2490.37, 2545.16, 2601.15, 2658.38, 2716.86, 2776.64],
          'B': [2580.6, 2640.73, 2702.26, 2765.22, 2829.65, 2895.59, 2963.05],
          'C': [2724.44, 2789.83, 2856.78, 2925.35, 2995.55, 3067.44, 3141.06],
          'D': [2868.27, 2939.99, 3013.48, 3088.81, 3166.04, 3245.19, 3326.32],
          'E': [3012.11, 3078.38, 3146.1, 3215.32, 3286.05, 3358.35, 3432.23, 3507.74, 3584.91],
          'F': [3154.73, 3214.61, 3277.91, 3339.5, 3401.09, 3464.39, 3522.56, 3587.57, 3645.74, 3707.33, 3770.63],
          'G': [3308.71, 3377.14, 3455.84, 3524.28, 3596.12, 3671.4, 3741.54, 3811.68, 3885.25, 3958.82, 4030.68],
          'H': [3558.49, 4540.49],
          'I': [3756.94, 4952.8],
        },
      },
    },
    {
      from: '2027-01-01',
      note: "+2,75% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 38,
        schalen: {
          'A': [2517.18, 2558.85, 2615.15, 2672.69, 2731.48, 2791.58, 2853],
          'B': [2651.57, 2713.35, 2776.57, 2841.27, 2907.47, 2975.21, 3044.53],
          'C': [2799.36, 2866.55, 2935.34, 3005.79, 3077.93, 3151.8, 3227.44],
          'D': [2947.15, 3020.84, 3096.35, 3173.76, 3253.1, 3334.43, 3417.8],
          'E': [3094.95, 3163.03, 3232.62, 3303.74, 3376.42, 3450.7, 3526.62, 3604.21, 3683.49],
          'F': [3241.49, 3303.01, 3368.05, 3431.34, 3494.62, 3559.66, 3619.43, 3686.22, 3746, 3809.28, 3874.32],
          'G': [3399.7, 3470.01, 3550.87, 3621.19, 3695.01, 3772.36, 3844.44, 3916.51, 3992.1, 4067.69, 4141.52],
          'H': [3656.35, 4665.35],
          'I': [3860.25, 5089],
        },
      },
    },
  ],
  vergoedingen: [],
};
