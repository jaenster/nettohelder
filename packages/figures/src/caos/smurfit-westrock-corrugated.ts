import type { Cao } from '../types.js';

/**
 * Cao Smurfit Westrock Corrugated Benelux 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Smurfit Westrock Corrugated Benelux
 * https://cao-kijker.awvn.nl/bestanden/0698_01-05-2026%20tot%2001-05-2027_akkoord.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2025-07-01 (month) uit de bron
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-05-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoSmurfitWestrockCorrugated2026: Cao = {
  id: 'smurfit-westrock-corrugated',
  name: "Cao Smurfit Westrock Corrugated Benelux",
  year: 2026,
  effectiveNote: "Cao 2026-05-01 t/m 2027-04-30; loontabel per 2025-07-01. Let op: Verbeterd eindbod (juli 2026) met 2,8% per 1 mei 2026 op salarissen en salaristabel; 85% van de CNV-leden stemde in (25 augustus 2026) Verhoging 2,75% per 1 juli 2025 uit de vorige cao (2024-2026) Oude RVU-regeling ongewijzigd voortgezet tot en met 30 april 2028 Vorige cao kende een resultaatafhankelijke beloning van maximaal € 600 bruto Vakantiegeld, eindejaarsuitkering en pensioenpremie niet geverifieerd Salaristabel (periodiekenschaal) per 1-7-2025 uit de cao 2024-2026; per 1-5-2026 +2,8% (bron tabel: https://cao-kijker.awvn.nl/bestanden/0698_01-07-2024%20tot%2001-05-2026_cao.pdf)",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/0698_01-05-2026%20tot%2001-05-2027_akkoord.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      'I': [2873.05, 2908.38, 2946.11, 2982.27, 3020.83, 3064.17, 3101.92],
      'II': [2945.33, 2986.28, 3031.24, 3078.65, 3123.63, 3170.99, 3217.6],
      'III': [3003.94, 3049.73, 3097.1, 3147.69, 3197.53, 3242.46, 3293.85, 3345.29],
      'IV': [3114.78, 3164.55, 3215.15, 3263.35, 3315.54, 3361.33, 3414.34, 3458.47],
      'V': [3252.13, 3303.53, 3355.7, 3403.07, 3457.74, 3514.71, 3564.52, 3616.72],
      'VI': [3395.08, 3447.25, 3505.09, 3554.94, 3606.27, 3662.54, 3717.11, 3766.09],
      'VII': [3513.1, 3566.15, 3622.33, 3681.81, 3735.58, 3794.2, 3850.45, 3906.64],
      'VIII': [3603.86, 3662.54, 3721.09, 3778.96, 3837.58, 3892.18, 3952.44, 4010.26, 4065.67],
      'IX': [3758.88, 3825.52, 3887.34, 3954.84, 4022.29, 4085.72, 4156.42, 4223.07, 4288.96],
      'X': [3973.27, 4073.71, 4169.29, 4268.03, 4361.21, 4458.41, 4555.53, 4654.35, 4684.08],
      'XI': [4270.48, 4389.3, 4504.14, 4622.24, 4741.89, 4859.93, 4982.05, 5099.28, 5215.71, 5337.78],
    },
  },
  periods: [
    {
      from: '2026-05-01',
      note: "+2,8% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          'I': [2953.5, 2989.81, 3028.6, 3065.77, 3105.41, 3149.97, 3188.77],
          'II': [3027.8, 3069.9, 3116.11, 3164.85, 3211.09, 3259.78, 3307.69],
          'III': [3088.05, 3135.12, 3183.82, 3235.83, 3287.06, 3333.25, 3386.08, 3438.96],
          'IV': [3201.99, 3253.16, 3305.17, 3354.72, 3408.38, 3455.45, 3509.94, 3555.31],
          'V': [3343.19, 3396.03, 3449.66, 3498.36, 3554.56, 3613.12, 3664.33, 3717.99],
          'VI': [3490.14, 3543.77, 3603.23, 3654.48, 3707.25, 3765.09, 3821.19, 3871.54],
          'VII': [3611.47, 3666, 3723.76, 3784.9, 3840.18, 3900.44, 3958.26, 4016.03],
          'VIII': [3704.77, 3765.09, 3825.28, 3884.77, 3945.03, 4001.16, 4063.11, 4122.55, 4179.51],
          'IX': [3864.13, 3932.63, 3996.19, 4065.58, 4134.91, 4200.12, 4272.8, 4341.32, 4409.05],
          'X': [4084.52, 4187.77, 4286.03, 4387.53, 4483.32, 4583.25, 4683.08, 4784.67, 4815.23],
          'XI': [4390.05, 4512.2, 4630.26, 4751.66, 4874.66, 4996.01, 5121.55, 5242.06, 5361.75, 5487.24],
        },
      },
    },
  ],
  vergoedingen: [],
};
