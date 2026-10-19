import type { Cao } from '../types.js';

/**
 * Cao Danisco Zaandam B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Danisco Zaandam B.V.
 * https://cao-kijker.awvn.nl/bestanden/0454_01-07-2026%20tot%2001-01-2028_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2027-07-01 (month) uit de bron
 *   - Basistabel 1-1-2026 teruggerekend uit de tabel per 2027-07-01 (gedeeld door +2%, +1,5%, +1,75%)
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-07-01, 2027-01-01, 2027-07-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoDaniscoZaandam2026: Cao = {
  id: 'danisco-zaandam',
  name: "Cao Danisco Zaandam B.V.",
  year: 2026,
  effectiveNote: "Cao 2026-07-01 t/m 2027-12-31; loontabel per 2027-07-01. Let op: Salaristabel in hele euro's; treden zijn functiejaren 0 t/m 6 (B, C) of 0 t/m 8 (D t/m G). Tabellen per 1 juli 2026 en 1 januari 2027 staan ook in de cao Laagste loonschaal per 1 juli 2026 boven € 18 bruto per uur Verhogingen 2025 en 1-1-2026 uit de cao 2025-2026 (1 januari 2025 t/m 30 juni 2026), die ook een eenmalige uitkering van 5% van het jaarsalaris kende (minus eerder ontvangen uitkeringen) Eindejaarsuitkering € 775 plus een extra uitkering afhankelijk van de capaciteitsbezetting (€ 15 - € 50); uitkering kwaliteitsdoelstellingen max. € 650 bruto; niet opgenomen Pensioen: werknemersbijdrage niet in de cao vermeld",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/0454_01-07-2026%20tot%2001-01-2028_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      'B': [3002.61, 3041.53, 3082.35, 3126.02, 3164.94, 3209.55, 3260.81],
      'C': [3074.75, 3116.52, 3163.04, 3207.65, 3260.81, 3311.13, 3358.59],
      'D': [3196.26, 3245.63, 3297.84, 3346.25, 3396.56, 3451.62, 3500.04, 3551.3, 3602.56],
      'E': [3406.06, 3459.22, 3517.12, 3573.13, 3629.14, 3685.15, 3742.11, 3795.27, 3854.12],
      'F': [3667.11, 3738.31, 3802.86, 3875.96, 3945.25, 4013.6, 4082.9, 4147.45, 4226.24],
      'G': [3967.09, 4088.6, 4149.35, 4238.58, 4330.67, 4426.54, 4514.83, 4603.11, 4699.94],
    },
  },
  periods: [
    {
      from: '2026-07-01',
      note: "+2% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          'B': [3062.66, 3102.36, 3143.99, 3188.54, 3228.23, 3273.74, 3326.03],
          'C': [3136.25, 3178.85, 3226.3, 3271.81, 3326.03, 3377.35, 3425.76],
          'D': [3260.19, 3310.54, 3363.79, 3413.18, 3464.49, 3520.65, 3570.04, 3622.32, 3674.61],
          'E': [3474.18, 3528.4, 3587.47, 3644.59, 3701.72, 3758.85, 3816.95, 3871.17, 3931.2],
          'F': [3740.45, 3813.07, 3878.92, 3953.47, 4024.16, 4093.87, 4164.56, 4230.4, 4310.77],
          'G': [4046.43, 4170.37, 4232.34, 4323.36, 4417.28, 4515.07, 4605.12, 4695.17, 4793.94],
        },
      },
    },
    {
      from: '2027-01-01',
      note: "+1,5% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          'B': [3108.6, 3148.89, 3191.15, 3236.36, 3276.66, 3322.85, 3375.92],
          'C': [3183.29, 3226.54, 3274.69, 3320.88, 3375.92, 3428.01, 3477.15],
          'D': [3309.09, 3360.2, 3414.25, 3464.37, 3516.46, 3573.46, 3623.59, 3676.66, 3729.73],
          'E': [3526.29, 3581.33, 3641.28, 3699.26, 3757.25, 3815.23, 3874.2, 3929.24, 3990.17],
          'F': [3796.56, 3870.27, 3937.1, 4012.78, 4084.52, 4155.28, 4227.03, 4293.86, 4375.43],
          'G': [4107.13, 4232.92, 4295.82, 4388.21, 4483.54, 4582.8, 4674.2, 4765.6, 4865.85],
        },
      },
    },
    {
      from: '2027-07-01',
      note: "+1,75% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          'B': [3163, 3204, 3247, 3293, 3334, 3381, 3435],
          'C': [3239, 3283, 3332, 3379, 3435, 3488, 3538],
          'D': [3367, 3419, 3474, 3525, 3578, 3636, 3687, 3741, 3795],
          'E': [3588, 3644, 3705, 3764, 3823, 3882, 3942, 3998, 4060],
          'F': [3863, 3938, 4006, 4083, 4156, 4228, 4301, 4369, 4452],
          'G': [4179, 4307, 4371, 4465, 4562, 4663, 4756, 4849, 4951],
        },
      },
    },
  ],
  vergoedingen: [],
};
