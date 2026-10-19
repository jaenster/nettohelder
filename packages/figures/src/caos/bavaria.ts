import type { Cao } from '../types.js';

/**
 * Cao Bavaria (Swinkels Family Brewers) 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Bavaria (Swinkels Family Brewers)
 * https://cao-kijker.awvn.nl/bestanden/0330_01-04-2024%20tot%2001-04-2026_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-03-01 (month) uit de bron
 *   - Basistabel 1-1-2026 teruggerekend uit de tabel per 2026-03-01 (gedeeld door +2%)
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-03-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoBavaria2026: Cao = {
  id: 'bavaria',
  name: "Cao Bavaria (Swinkels Family Brewers)",
  year: 2026,
  effectiveNote: "Cao 2024-04-01 t/m 2026-03-31; loontabel per 2026-03-01. Let op: Cao liep tot 1 april 2026; geen nieuwe cao gevonden Salarisschalen per 1-3-2026 vanaf trede 0; aanloopstappen X01 en X02 (o.a. BBL) niet opgenomen Pensioen: beschikbare-premieregeling bij Centraal Beheer APF (Kring DC) met eigen bijdrage van 8,11% van de pensioengrondslag; franchise niet in de cao gevonden, daarom niet opgenomen Normale arbeidsduur 40 uur per week; met EVU feitelijk 38 uur. 5-ploegendienst 33,6 uur Ploegentoeslagen 17% tot 32% niet meegenomen",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/0330_01-04-2024%20tot%2001-04-2026_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      'A': [2632.35, 2667.65, 2703.92, 2745.1, 2786.27, 2817.65, 2855.88, 2900, 2939.22],
      'B': [2684.31, 2728.43, 2764.71, 2802.94, 2844.12, 2886.27, 2930.39, 2974.51, 3013.73],
      'C': [2750, 2792.16, 2839.22, 2877.45, 2929.41, 2973.53, 3023.53, 3075.49, 3126.47, 3178.43],
      'D': [2827.45, 2877.45, 2935.29, 2985.29, 3037.25, 3087.25, 3143.14, 3189.22, 3242.16, 3302.94, 3350],
      'E': [2943.14, 3001.96, 3048.04, 3099.02, 3161.76, 3210.78, 3261.76, 3315.69, 3369.61, 3423.53, 3478.43, 3534.31],
      'F': [3128.43, 3187.25, 3250.98, 3313.73, 3379.41, 3441.18, 3508.82, 3567.65, 3625.49, 3692.16, 3747.06, 3810.78, 3868.63],
      'G': [3315.69, 3393.14, 3471.57, 3540.2, 3622.55, 3700, 3779.41, 3853.92, 3934.31, 4010.78, 4083.33, 4160.78, 4237.25, 4311.76],
      'H': [3650, 3735.29, 3827.45, 3917.65, 4010.78, 4098.04, 4193.14, 4288.24, 4379.41, 4469.61, 4562.75, 4650.98, 4735.29, 4827.45, 4918.63],
    },
  },
  periods: [
    {
      from: '2026-03-01',
      note: "+2% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          'A': [2685, 2721, 2758, 2800, 2842, 2874, 2913, 2958, 2998],
          'B': [2738, 2783, 2820, 2859, 2901, 2944, 2989, 3034, 3074],
          'C': [2805, 2848, 2896, 2935, 2988, 3033, 3084, 3137, 3189, 3242],
          'D': [2884, 2935, 2994, 3045, 3098, 3149, 3206, 3253, 3307, 3369, 3417],
          'E': [3002, 3062, 3109, 3161, 3225, 3275, 3327, 3382, 3437, 3492, 3548, 3605],
          'F': [3191, 3251, 3316, 3380, 3447, 3510, 3579, 3639, 3698, 3766, 3822, 3887, 3946],
          'G': [3382, 3461, 3541, 3611, 3695, 3774, 3855, 3931, 4013, 4091, 4165, 4244, 4322, 4398],
          'H': [3723, 3810, 3904, 3996, 4091, 4180, 4277, 4374, 4467, 4559, 4654, 4744, 4830, 4924, 5017],
        },
      },
    },
  ],
  vergoedingen: [],
};
