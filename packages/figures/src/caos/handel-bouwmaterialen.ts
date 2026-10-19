import type { Cao } from '../types.js';

/**
 * Cao voor de Groothandel in Bouwmaterialen (Hibin) 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao voor de Groothandel in Bouwmaterialen (Hibin)
 * https://assets.hibin.nl/p/5177344/none/Salaristabel%20-%20Loontabel%20per%201%20juli%202026%20en%201%20januari%202026.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-01-01 (month) uit de bron
 *   - Latere tabellen berekend uit de cao-verhogingen (2027-01-01, 2027-10-01)
 *   - Bron bevat ook een tabel per 1-7-2026 (WML-verhoging, trede 0 groep 1: 2598.27);
 *     die periode ontbreekt hier
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoHandelBouwmaterialen2026: Cao = {
  id: 'handel-bouwmaterialen',
  name: "Cao voor de Groothandel in Bouwmaterialen (Hibin)",
  year: 2026,
  effectiveNote: "Cao 2025-10-01 t/m 2027-12-31; loontabel per 2026-01-01. Let op: Schaal = maandsalarissen per 1-1-2026 (trede 0 t/m max, 40 uur per week); jeugdschalen A en B niet opgenomen Bij een WML-stijging worden alle tredes verhoogd als groep 1 trede 0 onder het WML zakt; tabellen per 1-7-2026 en 1-1-2027 nog niet gevonden Pensioen bij Bpf Hibin (middelloon), werkgever betaalt 2/3 en werknemer 1/3 van de premie; premie en franchise 2026 niet gevonden, daarom niet opgenomen Geen eindejaarsuitkering of eenmalige uitkering gevonden",
  sourceUrl: "https://assets.hibin.nl/p/5177344/none/Salaristabel%20-%20Loontabel%20per%201%20juli%202026%20en%201%20januari%202026.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      '1': [2580.77],
      '2': [2580.77, 2613.22, 2665.48],
      '3': [2580.77, 2643.78, 2696.65, 2750.58],
      '4': [2580.77, 2674.45, 2727.94, 2782.5],
      '5': [2649.7, 2707.07, 2785.57, 2866.85, 2949.96],
      '6': [2774.63, 2856.19, 2938.69, 3024.84, 3112.83, 3204.49],
      '7': [3017.51, 3105.49, 3196.24, 3289.74, 3385.98, 3484.96, 3587.63],
      '8': [3370.4, 3468.47, 3570.21, 3674.7, 3782.85, 3893.76, 4008.33, 4125.66],
      '9': [3863.52, 3977.18, 4093.58, 4213.66, 4338.32, 4465.72, 4597.69, 4732.44, 4872.68],
    },
  },
  periods: [
    {
      from: '2027-01-01',
      note: "+3% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          '1': [2658.19],
          '2': [2658.19, 2691.62, 2745.44],
          '3': [2658.19, 2723.09, 2777.55, 2833.1],
          '4': [2658.19, 2754.68, 2809.78, 2865.98],
          '5': [2729.19, 2788.28, 2869.14, 2952.86, 3038.46],
          '6': [2857.87, 2941.88, 3026.85, 3115.59, 3206.21, 3300.62],
          '7': [3108.04, 3198.65, 3292.13, 3388.43, 3487.56, 3589.51, 3695.26],
          '8': [3471.51, 3572.52, 3677.32, 3784.94, 3896.34, 4010.57, 4128.58, 4249.43],
          '9': [3979.43, 4096.5, 4216.39, 4340.07, 4468.47, 4599.69, 4735.62, 4874.41, 5018.86],
        },
      },
    },
    {
      from: '2027-10-01',
      note: "+0,75% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          '1': [2678.13],
          '2': [2678.13, 2711.8, 2766.04],
          '3': [2678.13, 2743.52, 2798.38, 2854.35],
          '4': [2678.13, 2775.34, 2830.85, 2887.47],
          '5': [2749.66, 2809.19, 2890.66, 2975, 3061.25],
          '6': [2879.3, 2963.94, 3049.55, 3138.95, 3230.26, 3325.38],
          '7': [3131.35, 3222.64, 3316.82, 3413.85, 3513.72, 3616.43, 3722.97],
          '8': [3497.55, 3599.32, 3704.9, 3813.33, 3925.56, 4040.65, 4159.54, 4281.3],
          '9': [4009.27, 4127.22, 4248.01, 4372.62, 4501.98, 4634.19, 4771.14, 4910.97, 5056.5],
        },
      },
    },
  ],
  vergoedingen: [],
};
