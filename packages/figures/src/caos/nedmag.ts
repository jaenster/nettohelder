import type { Cao } from '../types.js';

/**
 * Cao Nedmag B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Nedmag B.V.
 * https://cao-kijker.awvn.nl/bestanden/0756_01-04-2026%20tot%2001-04-2027_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-04-01 (month) uit de bron
 *   - Basistabel 1-1-2026 teruggerekend uit de tabel per 2026-04-01 (gedeeld door +2,8%)
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-04-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoNedmag2026: Cao = {
  id: 'nedmag',
  name: "Cao Nedmag B.V.",
  year: 2026,
  effectiveNote: "Cao 2026-04-01 t/m 2027-03-31; loontabel per 2026-04-01. Let op: Cao 2026-2027 is een geaccepteerd eindbod (7-4-2026): 2,8% per 1-4-2026, geen overige afspraken Vakantietoeslag 8,33% van 12 x het maandinkomen over mei, minimaal het salaris bij 0 periodieken van groep III Extra uitkering (dertiende maand) 8,33% van 12 x het maandinkomen over december Normale arbeidsduur gemiddeld 37 uur per week (via 18 roostervrije dagen); 5-ploegendienst 33,6 uur Salarisschalen zonder aanloopschaal (80%/90% van 0 periodieken) en participatieschaal (WML-uurlonen) Pensioen: beschikbare-premieregeling (budget 25,5% van de pensioengrondslag, franchise € 19.172 in 2026, max. pensioengevend salaris € 137.800); werknemer betaalt 1/3 van de premies als uniform percentage, dat percentage staat niet in de cao",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/0756_01-04-2026%20tot%2001-04-2027_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.0833,
  eindejaarsuitkeringPct: 0.0833,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 37,
    schalen: {
      'I': [2626.91, 2676.9, 2726.88, 2776.86, 2826.85, 2876.82, 2926.83],
      'II': [2681.94, 2734.67, 2787.39, 2840.13, 2892.86, 2945.58, 2998.31],
      'III': [2751.92, 2806.3, 2860.69, 2915.08, 2969.47, 3023.86, 3078.25, 3132.64],
      'IV': [2836.98, 2895.06, 2953.11, 3011.19, 3069.26, 3127.33, 3185.38, 3243.46, 3301.52],
      'V': [2962.44, 3022.76, 3083.07, 3143.37, 3203.68, 3263.99, 3324.31, 3384.62, 3444.92, 3505.22],
      'VI': [3115.67, 3179.5, 3243.33, 3307.18, 3371, 3434.84, 3498.68, 3562.51, 3626.34, 3690.18, 3754.01],
      'VII': [3335.69, 3405.17, 3474.67, 3544.15, 3613.64, 3683.13, 3752.63, 3822.11, 3891.6, 3961.09, 4030.56, 4100.05],
      'VIII': [3595.5, 3672.09, 3748.7, 3825.28, 3901.88, 3978.47, 4055.07, 4131.66, 4208.26, 4284.85, 4361.44, 4438.04, 4514.63],
      'IX': [3931.08, 4015.33, 4099.58, 4183.84, 4268.1, 4352.35, 4436.61, 4520.88, 4605.13, 4689.39, 4773.64, 4857.91, 4942.15, 5026.41],
    },
  },
  periods: [
    {
      from: '2026-04-01',
      note: "+2,8% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 37,
        schalen: {
          'I': [2700.46, 2751.85, 2803.23, 2854.61, 2906, 2957.37, 3008.78],
          'II': [2757.03, 2811.24, 2865.44, 2919.65, 2973.86, 3028.06, 3082.26],
          'III': [2828.97, 2884.88, 2940.79, 2996.7, 3052.62, 3108.53, 3164.44, 3220.35],
          'IV': [2916.42, 2976.12, 3035.8, 3095.5, 3155.2, 3214.9, 3274.57, 3334.28, 3393.96],
          'V': [3045.39, 3107.4, 3169.4, 3231.38, 3293.38, 3355.38, 3417.39, 3479.39, 3541.38, 3603.37],
          'VI': [3202.91, 3268.53, 3334.14, 3399.78, 3465.39, 3531.02, 3596.64, 3662.26, 3727.88, 3793.51, 3859.12],
          'VII': [3429.09, 3500.51, 3571.96, 3643.39, 3714.82, 3786.26, 3857.7, 3929.13, 4000.56, 4072, 4143.42, 4214.85],
          'VIII': [3696.17, 3774.91, 3853.66, 3932.39, 4011.13, 4089.87, 4168.61, 4247.35, 4326.09, 4404.83, 4483.56, 4562.31, 4641.04],
          'IX': [4041.15, 4127.76, 4214.37, 4300.99, 4387.61, 4474.22, 4560.84, 4647.46, 4734.07, 4820.69, 4907.3, 4993.93, 5080.53, 5167.15],
        },
      },
    },
  ],
  vergoedingen: [],
};
