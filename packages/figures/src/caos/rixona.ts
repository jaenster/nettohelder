import type { Cao } from '../types.js';

/**
 * Cao Rixona B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Rixona B.V.
 * https://www.cnv.nl/documents/6143/CAO_Rixona_B.V_2026_-_2027.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-05-18 (4weeks) uit de bron
 *   - Basistabel 1-1-2026 teruggerekend uit de tabel per 2026-05-18 (gedeeld door +2%)
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-05-18, 2027-05-24)
 *   - Bron is een 4-wekentabel, omgerekend naar maand (×13/12)
 *
 * Excluded: none stated
 */
export const caoRixona2026: Cao = {
  id: 'rixona',
  name: "Cao Rixona B.V.",
  year: 2026,
  effectiveNote: "Cao 2026-05-01 t/m 2027-11-07; loontabel per 2026-05-18. Let op: Cao 1-5-2026 t/m 7-11-2027 (eindbod, door leden aangenomen in mei 2026); salarissen en schalen +2% per 18-5-2026 (periode 6) en +1,5% per 24-5-2027 Salarisschalen I t/m IX per 4-weekse periode, op basis van functiejaren (tabel per 18-5-2026) Eindejaarsuitkering (14e periode) van afgerond 7,7% over basissalaris en ploegentoeslag, uitbetaald bij periode 13 Pensioen bij PGB (cijfers 2026): eigen bijdrage 6,55% van de pensioengrondslag, franchise € 19.399, maximum pensioengevend salaris € 137.800. Bij de overgang naar de solidaire premieregeling (verwacht 1-1-2027) wordt de eigen bijdrage 6,9% Dagdienst 40 uur per week (160 uur per periode); vijfploegendienst gemiddeld 33,6 uur, vanaf 2027 afgerond 35 uur Tegemoetkoming ziektekosten € 27,50 bruto per 4 weken",
  sourceUrl: "https://www.cnv.nl/documents/6143/CAO_Rixona_B.V_2026_-_2027.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.077,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      'I': [2623.46, 2650.6, 2677.51, 2704.57, 2731.71, 2758.78],
      'II': [2640.23, 2672.63, 2704.96, 2737.31, 2769.63, 2801.88, 2834.4, 2866.77],
      'III': [2712.24, 2752.95, 2793.67, 2835.41, 2877.6, 2921.69, 2966.47, 3008.84],
      'IV': [2788.87, 2838.85, 2889.64, 2942.92, 2996.21, 3049.51, 3102.57, 3156.58, 3209.11],
      'V': [2875.79, 2936.21, 2997.15, 3057.94, 3118.93, 3179.77, 3240.63, 3301.5, 3363.55, 3424.51],
      'VI': [3025.88, 3093.15, 3160.49, 3227.91, 3295.16, 3362.5, 3429.85, 3497.18, 3565.74, 3633.22],
      'VII': [3181.4, 3256.77, 3332.13, 3407.49, 3482.88, 3558.24, 3633.68, 3709.01, 3784.41, 3861.39, 3936.95],
      'VIII': [3415.41, 3497.48, 3579.72, 3661.85, 3744.01, 3826.22, 3908.29, 3990.39, 4072.6, 4156.52, 4238.86, 4321.21, 4403.55],
      'IX': [3719.98, 3812.25, 3904.44, 3996.68, 4088.95, 4181.19, 4273.48, 4365.66, 4457.86, 4550.15, 4644.26, 4736.69, 4829.13, 4921.54],
    },
  },
  periods: [
    {
      from: '2026-05-18',
      note: "+2% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          'I': [2675.93, 2703.61, 2731.06, 2758.66, 2786.34, 2813.96],
          'II': [2693.04, 2726.08, 2759.06, 2792.05, 2825.02, 2857.92, 2891.09, 2924.1],
          'III': [2766.49, 2808.01, 2849.55, 2892.12, 2935.15, 2980.12, 3025.8, 3069.02],
          'IV': [2844.65, 2895.63, 2947.44, 3001.78, 3056.14, 3110.5, 3164.62, 3219.71, 3273.29],
          'V': [2933.31, 2994.93, 3057.09, 3119.1, 3181.31, 3243.37, 3305.45, 3367.53, 3430.82, 3493],
          'VI': [3086.4, 3155.01, 3223.7, 3292.47, 3361.06, 3429.75, 3498.45, 3567.12, 3637.05, 3705.89],
          'VII': [3245.03, 3321.9, 3398.77, 3475.64, 3552.54, 3629.41, 3706.35, 3783.2, 3860.1, 3938.62, 4015.69],
          'VIII': [3483.72, 3567.43, 3651.31, 3735.08, 3818.89, 3902.74, 3986.46, 4070.2, 4154.05, 4239.65, 4323.64, 4407.64, 4491.62],
          'IX': [3794.38, 3888.5, 3982.53, 4076.62, 4170.73, 4264.81, 4358.95, 4452.98, 4547.02, 4641.15, 4737.15, 4831.43, 4925.71, 5019.97],
        },
      },
    },
    {
      from: '2027-05-24',
      note: "+1,5% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          'I': [2716.07, 2744.16, 2772.03, 2800.04, 2828.14, 2856.17],
          'II': [2733.43, 2766.97, 2800.44, 2833.93, 2867.39, 2900.79, 2934.46, 2967.96],
          'III': [2807.98, 2850.13, 2892.29, 2935.5, 2979.18, 3024.82, 3071.19, 3115.05],
          'IV': [2887.32, 2939.07, 2991.65, 3046.8, 3101.98, 3157.16, 3212.09, 3268.01, 3322.39],
          'V': [2977.31, 3039.85, 3102.95, 3165.89, 3229.03, 3292.02, 3355.03, 3418.04, 3482.28, 3545.4],
          'VI': [3132.69, 3202.34, 3272.05, 3341.85, 3411.48, 3481.19, 3550.93, 3620.63, 3691.61, 3761.48],
          'VII': [3293.7, 3371.73, 3449.76, 3527.77, 3605.83, 3683.85, 3761.95, 3839.94, 3918, 3997.7, 4075.92],
          'VIII': [3535.97, 3620.94, 3706.08, 3791.11, 3876.17, 3961.28, 4046.26, 4131.26, 4216.36, 4303.24, 4388.49, 4473.75, 4558.99],
          'IX': [3851.29, 3946.82, 4042.27, 4137.77, 4233.29, 4328.78, 4424.34, 4519.77, 4615.23, 4710.77, 4808.2, 4903.9, 4999.6, 5095.27],
        },
      },
    },
  ],
  vergoedingen: [],
};
