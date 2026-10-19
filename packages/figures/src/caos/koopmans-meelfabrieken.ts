import type { Cao } from '../types.js';

/**
 * Cao Koopmans Koninklijke Meelfabrieken B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Koopmans Koninklijke Meelfabrieken B.V.
 * https://cao-kijker.awvn.nl/bestanden/0771_01-01-2026%20tot%2001-01-2028_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-01-01 (month) uit de bron
 *   - Latere tabellen berekend uit de cao-verhogingen (2027-01-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoKoopmansMeelfabrieken2026: Cao = {
  id: 'koopmans-meelfabrieken',
  name: "Cao Koopmans Koninklijke Meelfabrieken B.V.",
  year: 2026,
  effectiveNote: "Cao 2026-01-01 t/m 2027-12-31; loontabel per 2026-01-01. Let op: Overeengekomen loonsverhoging 4,5% in 2026 en 3,5% in 2027; de cao bevat salarisschalen per 1 januari 2026 en per 1 januari 2027, daarom zijn de verhogingen op 1 januari gedateerd Wijkt de inflatie (CBS-CPI oktober-oktober) 2 procentpunten of meer af van de loonsverhoging, dan treden partijen in overleg Minimumsalaris vanaf 1 januari 2026 € 16,74 per uur Eindejaarsuitkering in december van 8% van het jaarinkomen (telt mee voor de pensioengrondslag) Vakantietoeslag 8% van het jaarinkomen (exclusief overwerk, eindejaarsuitkering en vakantietoeslag) Normale arbeidsduur gemiddeld 38 uur per week; volcontinudienst 33,6 uur Salarisschalen (functiejarenschaal) per 1-1-2026 overgenomen van de tabel-afbeelding in bijlage II (per maand, 38 uur; gecontroleerd met de uurlonen in dezelfde tabel). Treden = functiejaren vanaf 0. Leeftijdsschalen (alleen vakantie- en weekendhulpen) niet opgenomen. De cao bevat ook een tabel per 1-1-2027. Pensioenpremie niet gevonden",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/0771_01-01-2026%20tot%2001-01-2028_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.08,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 38,
    schalen: {
      'I': [2756.62, 2798.49, 2842.18, 2884.12, 2925.06, 2967.13, 3011.64],
      'II': [2804.88, 2849.51, 2895.02, 2940.56, 2987, 3031.61, 3075.23, 3121.36],
      'III': [2869.5, 2921.42, 2972.43, 3025.22, 3076.25, 3128.12, 3173.24, 3220.84],
      'IV': [2954.2, 3015.18, 3077.13, 3139.97, 3201.92, 3262.88, 3310, 3359.64],
      'V': [3048, 3111.74, 3173.64, 3236.51, 3299.27, 3362.13, 3424.07, 3473.61, 3525.72],
      'VI': [3185.49, 3255.61, 3324.81, 3395.82, 3465.04, 3534.25, 3604.38, 3674.48, 3727.79, 3783.7],
      'VII': [3374.91, 3455.05, 3533.34, 3613.46, 3690.87, 3770.09, 3850.26, 3928.56, 3985.67, 4045.46],
      'VIII': [3601.71, 3686.43, 3770.16, 3855.77, 3941.36, 4025.15, 4110.7, 4196.33, 4280.98, 4343.64, 4408.79],
      'IX': [3905.85, 4003.3, 4099.85, 4197.24, 4293.76, 4391.23, 4487.72, 4585.16, 4682.59, 4779.13, 4849.2, 4921.93],
      'X': [4283.78, 4396.7, 4510.52, 4623.35, 4737.18, 4850.15, 4963.99, 5076.88, 5189.78, 5303.62, 5381.56, 5462.29],
    },
  },
  periods: [
    {
      from: '2027-01-01',
      note: "+3,5% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 38,
        schalen: {
          'I': [2853.1, 2896.44, 2941.66, 2985.06, 3027.44, 3070.98, 3117.05],
          'II': [2903.05, 2949.24, 2996.35, 3043.48, 3091.55, 3137.72, 3182.86, 3230.61],
          'III': [2969.93, 3023.67, 3076.47, 3131.1, 3183.92, 3237.6, 3284.3, 3333.57],
          'IV': [3057.6, 3120.71, 3184.83, 3249.87, 3313.99, 3377.08, 3425.85, 3477.23],
          'V': [3154.68, 3220.65, 3284.72, 3349.79, 3414.74, 3479.8, 3543.91, 3595.19, 3649.12],
          'VI': [3296.98, 3369.56, 3441.18, 3514.67, 3586.32, 3657.95, 3730.53, 3803.09, 3858.26, 3916.13],
          'VII': [3493.03, 3575.98, 3657.01, 3739.93, 3820.05, 3902.04, 3985.02, 4066.06, 4125.17, 4187.05],
          'VIII': [3727.77, 3815.46, 3902.12, 3990.72, 4079.31, 4166.03, 4254.57, 4343.2, 4430.81, 4495.67, 4563.1],
          'IX': [4042.55, 4143.42, 4243.34, 4344.14, 4444.04, 4544.92, 4644.79, 4745.64, 4846.48, 4946.4, 5018.92, 5094.2],
          'X': [4433.71, 4550.58, 4668.39, 4785.17, 4902.98, 5019.91, 5137.73, 5254.57, 5371.42, 5489.25, 5569.91, 5653.47],
        },
      },
    },
  ],
  vergoedingen: [],
};
