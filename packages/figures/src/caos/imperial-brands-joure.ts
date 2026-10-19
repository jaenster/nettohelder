import type { Cao } from '../types.js';

/**
 * Cao Imperial Brands Joure 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Imperial Brands Joure
 * https://cao-kijker.awvn.nl/bestanden/1654_01-10-2025%20tot%2001-09-2027_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-10-01 (month) uit de bron
 *   - Basistabel 1-1-2026 teruggerekend uit de tabel per 2026-10-01 (gedeeld door +1%, +2,5%)
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-04-01, 2026-10-01, 2027-04-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoImperialBrandsJoure2026: Cao = {
  id: 'imperial-brands-joure',
  name: "Cao Imperial Brands Joure",
  year: 2026,
  effectiveNote: "Cao 2025-10-01 t/m 2027-08-31; loontabel per 2026-10-01. Let op: Aangepast eindbod (10-12-2025): looptijd 23 maanden, 1-10-2025 t/m 31-8-2027 Salarisgroepen 2-6 hebben periodieken; groepen 7-12 hebben alleen schaalminimum en -maximum (opgenomen als [min, max]) Cao bevat ook tabellen per 1-10-2025, 1-4-2026 en 1-4-2027 (bijlage 1) Vakantie-uitkering 8% (mei) en eindejaarsuitkering 8,33% (december); bij voltijd en 22+ samen minimaal het maximum van salarisgroep 4 Jaarlijkse juli-uitkering van EUR 700 bruto (compensatie afgeschafte premiespaarregeling), telt niet mee voor salaris 1% per 1-4-2025 komt uit de vorige cao (AWVN cao-kijker) Pensioenregeling van de werkgever (gekoppeld aan PGB-premie); werknemersbijdrage alleen voor 2021 genoemd (7,22%, bandbreedte 5-7,5%), daarom geen pension-veld Normale arbeidsduur gemiddeld 36 uur per week (156 uur per betalingsperiode)",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/1654_01-10-2025%20tot%2001-09-2027_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 36,
    schalen: {
      '2': [2888.19, 2961.6, 3035.98, 3107.46, 3187.64, 3262.01, 3335.43, 3397.25],
      '3': [3032.12, 3095.87, 3163.49, 3225.31, 3292.92, 3359.57, 3423.33, 3489.98],
      '4': [3097.8, 3168.32, 3240.76, 3318.04, 3411.74, 3480.32, 3547.94, 3618.45, 3691.86],
      '5': [3195.36, 3270.71, 3351.85, 3438.78, 3514.13, 3612.65, 3705.39, 3775.9, 3846.41, 3920.79],
      '6': [3341.22, 3452.31, 3561.46, 3665.78, 3782.66, 3894.71, 3999.03, 4111.08, 4222.17, 4309.1],
      '7': [3669.65, 4659.74],
      '8': [3989.37, 5202.61],
      '9': [4553.49, 6142.48],
      '10': [5430.57, 7311.28],
      '11': [6332.77, 8516.78],
      '12': [7332.53, 10189.81],
    },
  },
  periods: [
    {
      from: '2026-04-01',
      note: "+1% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 36,
        schalen: {
          '2': [2917.07, 2991.22, 3066.34, 3138.54, 3219.51, 3294.63, 3368.78, 3431.22],
          '3': [3062.44, 3126.83, 3195.12, 3257.56, 3325.85, 3393.17, 3457.56, 3524.88],
          '4': [3128.78, 3200, 3273.17, 3351.22, 3445.85, 3515.12, 3583.41, 3654.63, 3728.78],
          '5': [3227.32, 3303.41, 3385.37, 3473.17, 3549.27, 3648.78, 3742.44, 3813.66, 3884.88, 3960],
          '6': [3374.63, 3486.83, 3597.07, 3702.44, 3820.49, 3933.66, 4039.02, 4152.2, 4264.39, 4352.2],
          '7': [3706.34, 4706.34],
          '8': [4029.27, 5254.63],
          '9': [4599.02, 6203.9],
          '10': [5484.88, 7384.39],
          '11': [6396.1, 8601.95],
          '12': [7405.85, 10291.71],
        },
      },
    },
    {
      from: '2026-10-01',
      note: "+2,5% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 36,
        schalen: {
          '2': [2990, 3066, 3143, 3217, 3300, 3377, 3453, 3517],
          '3': [3139, 3205, 3275, 3339, 3409, 3478, 3544, 3613],
          '4': [3207, 3280, 3355, 3435, 3532, 3603, 3673, 3746, 3822],
          '5': [3308, 3386, 3470, 3560, 3638, 3740, 3836, 3909, 3982, 4059],
          '6': [3459, 3574, 3687, 3795, 3916, 4032, 4140, 4256, 4371, 4461],
          '7': [3799, 4824],
          '8': [4130, 5386],
          '9': [4714, 6359],
          '10': [5622, 7569],
          '11': [6556, 8817],
          '12': [7591, 10549],
        },
      },
    },
    {
      from: '2027-04-01',
      note: "+1% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 36,
        schalen: {
          '2': [3019.9, 3096.66, 3174.43, 3249.17, 3333, 3410.77, 3487.53, 3552.17],
          '3': [3170.39, 3237.05, 3307.75, 3372.39, 3443.09, 3512.78, 3579.44, 3649.13],
          '4': [3239.07, 3312.8, 3388.55, 3469.35, 3567.32, 3639.03, 3709.73, 3783.46, 3860.22],
          '5': [3341.08, 3419.86, 3504.7, 3595.6, 3674.38, 3777.4, 3874.36, 3948.09, 4021.82, 4099.59],
          '6': [3493.59, 3609.74, 3723.87, 3832.95, 3955.16, 4072.32, 4181.4, 4298.56, 4414.71, 4505.61],
          '7': [3836.99, 4872.24],
          '8': [4171.3, 5439.86],
          '9': [4761.14, 6422.59],
          '10': [5678.22, 7644.69],
          '11': [6621.56, 8905.17],
          '12': [7666.91, 10654.49],
        },
      },
    },
  ],
  vergoedingen: [],
};
