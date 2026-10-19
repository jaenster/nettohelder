import type { Cao } from '../types.js';

/**
 * Cao Banden- en Wielenbranche 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Banden- en Wielenbranche
 * https://zoek.officielebekendmakingen.nl/stcrt-2026-2319.html
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-01-01 (month) uit de bron
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-07-01, 2027-03-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoBandenWielen2026: Cao = {
  id: 'banden-wielen',
  name: "Cao Banden- en Wielenbranche",
  year: 2026,
  effectiveNote: "Cao 2025-06-01 t/m 2027-03-31; loontabel per 2026-01-01. Let op: Per 1 januari 2026 nieuw loongebouw (functiegroepen A t/m H): salaris per 31-12-2025 plus persoonlijke toeslagen wordt verhoogd met 3,25% en daarna afgerond naar de eerstvolgende hogere trede (tabel 2.5a); boven de hoogste trede volgt een persoonlijke toeslag Functies buiten functiegroep A t/m H: per 1 januari 2026 2,25% bij een basisloon tot € 7.176 per maand en 1,25% vanaf € 7.176 (in plaats van 3,25%) Salaristabellen per 1 juli 2026 (tabel 2.5b) en per 1 maart 2027 (tabel 2.5c) staan in de cao maar zijn hier niet opgenomen; de tabel hier is die per 1 januari 2026 Trede 0 is ook het uitgangspunt voor jeugdlonen (16 t/m 20 jaar: 45% t/m 82,5% van trede 0) Voltijd is 40 uur per week, waarvan 38 werkuren en 2 uur arbeidstijdverkorting (ATV) Pensioenpremie en eventuele eindejaarsuitkering staan niet in de cao-tekst; niet opgenomen Avv geldt tot en met 31 maart 2027 en niet voor Michelin en Apollo Tyres",
  sourceUrl: "https://zoek.officielebekendmakingen.nl/stcrt-2026-2319.html",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      'A': [2471.5, 2511.02, 2550.53, 2590.04, 2629.56, 2669],
      'B': [2513.93, 2558.87, 2603.81, 2648.75, 2693.69, 2738.63, 2779.71],
      'C': [2577.44, 2619.73, 2662.02, 2704.31, 2746.6, 2788.89, 2831.18, 2873.47, 2916.58],
      'D': [2653.39, 2699.62, 2745.86, 2792.1, 2838.34, 2884.57, 2930.81, 2977.05, 3023.29, 3069.53, 3115.57],
      'E': [2793.31, 2840.88, 2888.46, 2936.04, 2983.62, 3031.2, 3078.78, 3126.36, 3173.94, 3221.52, 3269.1, 3316.68, 3366.43],
      'F': [2976.77, 3031.42, 3086.08, 3140.74, 3195.39, 3250.05, 3304.7, 3359.36, 3414.01, 3468.67, 3523.32, 3577.98, 3631.65],
      'G': [3230.45, 3290.99, 3351.53, 3412.08, 3472.62, 3533.16, 3593.7, 3654.25, 3714.79, 3775.33, 3835.87, 3896.42, 3954.86],
      'H': [3528.62, 3592.53, 3656.44, 3720.34, 3784.25, 3848.16, 3912.06, 3975.97, 4039.87, 4103.78, 4167.69, 4231.59, 4295.5, 4359.93],
    },
  },
  periods: [
    {
      from: '2026-07-01',
      note: "+1,25% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          'A': [2502.39, 2542.41, 2582.41, 2622.42, 2662.43, 2702.36],
          'B': [2545.35, 2590.86, 2636.36, 2681.86, 2727.36, 2772.86, 2814.46],
          'C': [2609.66, 2652.48, 2695.3, 2738.11, 2780.93, 2823.75, 2866.57, 2909.39, 2953.04],
          'D': [2686.56, 2733.37, 2780.18, 2827, 2873.82, 2920.63, 2967.45, 3014.26, 3061.08, 3107.9, 3154.51],
          'E': [2828.23, 2876.39, 2924.57, 2972.74, 3020.92, 3069.09, 3117.26, 3165.44, 3213.61, 3261.79, 3309.96, 3358.14, 3408.51],
          'F': [3013.98, 3069.31, 3124.66, 3180, 3235.33, 3290.68, 3346.01, 3401.35, 3456.69, 3512.03, 3567.36, 3622.7, 3677.05],
          'G': [3270.83, 3332.13, 3393.42, 3454.73, 3516.03, 3577.32, 3638.62, 3699.93, 3761.22, 3822.52, 3883.82, 3945.13, 4004.3],
          'H': [3572.73, 3637.44, 3702.15, 3766.84, 3831.55, 3896.26, 3960.96, 4025.67, 4090.37, 4155.08, 4219.79, 4284.48, 4349.19, 4414.43],
        },
      },
    },
    {
      from: '2027-03-01',
      note: "+2% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          'A': [2552.44, 2593.26, 2634.06, 2674.86, 2715.68, 2756.41],
          'B': [2596.26, 2642.67, 2689.08, 2735.5, 2781.91, 2828.32, 2870.75],
          'C': [2661.85, 2705.53, 2749.2, 2792.88, 2836.55, 2880.23, 2923.9, 2967.58, 3012.1],
          'D': [2740.29, 2788.03, 2835.79, 2883.54, 2931.3, 2979.04, 3026.79, 3074.55, 3122.3, 3170.06, 3217.6],
          'E': [2884.79, 2933.92, 2983.06, 3032.2, 3081.33, 3130.47, 3179.61, 3228.75, 3277.89, 3327.02, 3376.16, 3425.3, 3476.68],
          'F': [3074.26, 3130.7, 3187.15, 3243.6, 3300.04, 3356.49, 3412.93, 3469.38, 3525.82, 3582.27, 3638.71, 3695.16, 3750.59],
          'G': [3336.25, 3398.77, 3461.29, 3523.83, 3586.35, 3648.87, 3711.39, 3773.93, 3836.45, 3898.97, 3961.49, 4024.03, 4084.38],
          'H': [3644.18, 3710.19, 3776.19, 3842.18, 3908.18, 3974.19, 4040.18, 4106.18, 4172.18, 4238.18, 4304.18, 4370.17, 4436.18, 4502.72],
        },
      },
    },
  ],
  vergoedingen: [],
};
