import type { Cao } from '../types.js';

/**
 * Cao Marfo B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Marfo B.V.
 * https://www.cnv.nl/voeding/voeding/cao-marfo/
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-01-01 (month) uit de bron
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-07-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoMarfo2026: Cao = {
  id: 'marfo',
  name: "Cao Marfo B.V.",
  year: 2026,
  effectiveNote: "Cao 2026-07-01 t/m 2027-06-30; loontabel per 2026-01-01. Let op: Salaristabel per 1 januari 2026 (cao 2024-2026), volwassen (21+) bedragen; trede 0 is het 21+-salaris, daarna periodieken Per 1 januari 2027 loonstijging gelijk aan de procentuele stijging van het wettelijk minimumloon per die datum (niet opgenomen) Jeugdloonschalen worden afgeschaft (cao 2026-2027) Fulltime werkweek 40 uur Pensioenpremie werknemer niet gevonden",
  sourceUrl: "https://www.cnv.nl/voeding/voeding/cao-marfo/",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      'F01': [2580.02, 2619.31, 2664.07, 2708.81, 2753.47, 2798.13],
      'F02': [2673.14, 2716.07, 2750.63, 2798.21, 2842.71, 2890.24, 2938.63],
      'F03': [2762.15, 2802.82, 2846.51, 2895.64, 2947.8, 3004.6, 3061.36, 3117.37, 3172.6],
      'F04': [2875.68, 2923.25, 2976.23, 3026.07, 3085.9, 3139.6, 3200.27, 3258.54, 3317.64, 3375.95],
      'F05': [2980.75, 3036.86, 3089.13, 3140.73, 3199.1, 3257.43, 3315.06, 3378.78, 3440.9, 3500.02, 3564.47],
      'F06': [3152.09, 3205.88, 3260.46, 3315.06, 3375.7, 3432.55, 3501.58, 3559.96, 3621.32, 3684.26, 3747.9, 3813.9],
      'F07': [3342.36, 3396.93, 3453.78, 3510.65, 3569.79, 3631.95, 3696.38, 3759.34, 3823.78, 3891.23, 3958.66, 4025.41, 4096.66],
      'F08': [3558.37, 3610.74, 3671.37, 3734.3, 3800.2, 3864.68, 3934.42, 4001.91, 4068.6, 4142.12, 4214.9, 4284.64, 4361.96, 4434.75],
      'F09': [3788.12, 3850.99, 3915.45, 3985.22, 4054.94, 4123.94, 4194.46, 4264.95, 4343.77, 4415.8, 4492.35, 4568.92, 4649.23, 4731.17, 4812.27],
    },
  },
  periods: [
    {
      from: '2026-07-01',
      note: "+1,9% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          'F01': [2629.04, 2669.08, 2714.69, 2760.28, 2805.79, 2851.29],
          'F02': [2723.93, 2767.68, 2802.89, 2851.38, 2896.72, 2945.15, 2994.46],
          'F03': [2814.63, 2856.07, 2900.59, 2950.66, 3003.81, 3061.69, 3119.53, 3176.6, 3232.88],
          'F04': [2930.32, 2978.79, 3032.78, 3083.57, 3144.53, 3199.25, 3261.08, 3320.45, 3380.68, 3440.09],
          'F05': [3037.38, 3094.56, 3147.82, 3200.4, 3259.88, 3319.32, 3378.05, 3442.98, 3506.28, 3566.52, 3632.19],
          'F06': [3211.98, 3266.79, 3322.41, 3378.05, 3439.84, 3497.77, 3568.11, 3627.6, 3690.13, 3754.26, 3819.11, 3886.36],
          'F07': [3405.86, 3461.47, 3519.4, 3577.35, 3637.62, 3700.96, 3766.61, 3830.77, 3896.43, 3965.16, 4033.87, 4101.89, 4174.5],
          'F08': [3625.98, 3679.34, 3741.13, 3805.25, 3872.4, 3938.11, 4009.17, 4077.95, 4145.9, 4220.82, 4294.98, 4366.05, 4444.84, 4519.01],
          'F09': [3860.09, 3924.16, 3989.84, 4060.94, 4131.98, 4202.29, 4274.15, 4345.98, 4426.3, 4499.7, 4577.7, 4655.73, 4737.57, 4821.06, 4903.7],
        },
      },
    },
  ],
  vergoedingen: [],
};
