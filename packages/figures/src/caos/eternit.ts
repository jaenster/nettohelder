import type { Cao } from '../types.js';

/**
 * Cao Eternit B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Eternit B.V.
 * https://cao-kijker.awvn.nl/bestanden/0403_01-07-2026%20tot%2001-07-2027_akkoord.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-01-01 (month) uit de bron
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-07-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoEternit2026: Cao = {
  id: 'eternit',
  name: "Cao Eternit B.V.",
  year: 2026,
  effectiveNote: "Cao 2026-07-01 t/m 2027-06-30; loontabel per 2026-01-01. Let op: Onderhandelingsresultaat cao 2026-2027 (juni 2026): salarissen en salarisschalen per 1-7-2026 +3,5% Salaristabel per 1-1-2026 (functiejarenschaal, functiejaar 0 t/m 11) uit de cao 2025-2026; lagere groepen beginnen pas bij een hoger functiejaar. Aanloopschaal niet opgenomen Vakantietoeslag 8,33% van 12 x maandinkomen met een minimum van € 2.712 in 2026 (23 jaar en ouder); extra uitkering 8,33% in december Normale arbeidsduur 40 uur per week in dagdienst; in ploegendiensten 36 of 33,6 uur gemiddeld Resultaatafhankelijke beloning (veiligheid en kwaliteit) tot enkele honderden euro's per jaar Pensioen: totale premie 41,31% van de pensioengrondslag (franchise € 19.399), vanaf 1-1-2027 nieuwe regeling; werknemersdeel niet gevonden",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/0403_01-07-2026%20tot%2001-07-2027_akkoord.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.0833,
  eindejaarsuitkeringPct: 0.0833,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      'I': [2746, 2786, 2822, 2852],
      'II': [2783, 2818, 2851, 2889, 2925],
      'III': [2809, 2846, 2883, 2920, 2965, 2972, 3036],
      'IV': [2870, 2911, 2961, 3000, 3036, 3077, 3123],
      'V': [2967, 3007, 3048, 3091, 3139, 3177, 3220, 3273],
      'VI': [3077, 3125, 3175, 3220, 3275, 3318, 3364, 3416],
      'VII': [3234, 3283, 3327, 3375, 3431, 3480, 3523, 3575, 3630],
      'VIII': [3384, 3449, 3503, 3557, 3614, 3668, 3726, 3780, 3832],
      'IX': [3566, 3630, 3694, 3750, 3818, 3884, 3939, 4000, 4071, 4132],
      'X': [3808, 3892, 3974, 4053, 4134, 4217, 4294, 4382, 4461, 4538, 4619, 4701],
      'XI': [4128, 4225, 4323, 4421, 4516, 4616, 4716, 4812, 4905, 5006, 5099, 5203],
      'XII': [4497, 4618, 4740, 4857, 4972, 5087, 5213, 5330, 5449, 5566, 5681, 5793],
    },
  },
  periods: [
    {
      from: '2026-07-01',
      note: "+3,5% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          'I': [2842.11, 2883.51, 2920.77, 2951.82],
          'II': [2880.41, 2916.63, 2950.79, 2990.12, 3027.38],
          'III': [2907.32, 2945.61, 2983.91, 3022.2, 3068.78, 3076.02, 3142.26],
          'IV': [2970.45, 3012.89, 3064.64, 3105, 3142.26, 3184.7, 3232.31],
          'V': [3070.85, 3112.25, 3154.68, 3199.19, 3248.87, 3288.2, 3332.7, 3387.56],
          'VI': [3184.7, 3234.38, 3286.13, 3332.7, 3389.63, 3434.13, 3481.74, 3535.56],
          'VII': [3347.19, 3397.91, 3443.45, 3493.13, 3551.09, 3601.8, 3646.31, 3700.13, 3757.05],
          'VIII': [3502.44, 3569.72, 3625.61, 3681.5, 3740.49, 3796.38, 3856.41, 3912.3, 3966.12],
          'IX': [3690.81, 3757.05, 3823.29, 3881.25, 3951.63, 4019.94, 4076.87, 4140, 4213.49, 4276.62],
          'X': [3941.28, 4028.22, 4113.09, 4194.86, 4278.69, 4364.6, 4444.29, 4535.37, 4617.14, 4696.83, 4780.67, 4865.54],
          'XI': [4272.48, 4372.88, 4474.31, 4575.74, 4674.06, 4777.56, 4881.06, 4980.42, 5076.68, 5181.21, 5277.47, 5385.11],
          'XII': [4654.4, 4779.63, 4905.9, 5027, 5146.02, 5265.05, 5395.46, 5516.55, 5639.72, 5760.81, 5879.84, 5995.76],
        },
      },
    },
  ],
  vergoedingen: [],
};
