import type { Cao } from '../types.js';

/**
 * Cao Rendac Son B.V., Sonac Burgum B.V., Ecoson B.V. en Darling Ingredients Nederland B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Rendac Son B.V., Sonac Burgum B.V., Ecoson B.V. en Darling Ingredients Nederland B.V.
 * https://cao-kijker.awvn.nl/bestanden/1481_01-07-2025%20tot%2001-10-2026_akkoord.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2025-01-01 (month) uit de bron
 *   - Basistabel 1-1-2026: tabel per 2025-01-01 verhoogd met +4,25% per 2025-07-01
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-07-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoRendacSonacDarling2026: Cao = {
  id: 'rendac-sonac-darling',
  name: "Cao Rendac Son B.V., Sonac Burgum B.V., Ecoson B.V. en Darling Ingredients Nederland B.V.",
  year: 2026,
  effectiveNote: "Cao 2025-07-01 t/m 2026-09-30; loontabel per 2025-01-01. Let op: Aangepast verbeterd eindbod van 17 november 2025; volgens FNV definitief (december 2025) Per 1 juli 2025 toeslag van 3% voor wachtoverdracht in 3- en 5-ploegendienst Onderhandelingen over een nieuwe cao per 1 oktober 2026 lopen Vakantiegeld, eindejaarsuitkering en pensioenpremie niet geverifieerd Salaristabel per 1-1-2025 (+2,25%) uit de vorige cao 1-4-2024 t/m 30-6-2025 (https://cao-kijker.awvn.nl/bestanden/1481_01-04-2024%20tot%2001-07-2025_cao.pdf), 40 uur; gelijke tredes aan het einde samengevoegd, laatste trede is 'na 5 jaar op max.'. Verhogingen vanaf 1-7-2025 komen hierbovenop",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/1481_01-07-2025%20tot%2001-10-2026_akkoord.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      '1': [2903.36, 2954.45, 3007.61, 3063.91, 3120.2, 3176.5, 3226.54, 3282.83, 3300.56],
      '2': [3007.61, 3068.08, 3130.63, 3189.01, 3254.69, 3306.81, 3367.28, 3428.78, 3439.21],
      '3': [3130.63, 3194.22, 3264.07, 3321.41, 3394.38, 3461.1, 3522.61, 3589.33, 3606.01],
      '4': [3250.52, 3316.19, 3393.34, 3464.23, 3536.16, 3608.09, 3686.28, 3757.17, 3776.98],
      '5': [3352.68, 3431.91, 3512.18, 3591.41, 3676.9, 3746.75, 3824.93, 3906.25, 3926.06],
      '6': [3494.46, 3568.48, 3649.79, 3731.11, 3814.51, 3893.74, 3976.1, 4057.41, 4135.6, 4157.49],
      '7': [3649.79, 3746.75, 3841.61, 3930.23, 4019.88, 4116.83, 4210.66, 4301.36, 4395.18, 4418.12],
      '8': [3841.61, 3939.61, 4054.28, 4157.49, 4260.7, 4370.16, 4471.28, 4576.58, 4683.95, 4706.89],
      '9': [4030.31, 4157.49, 4274.25, 4400.39, 4523.41, 4645.38, 4767.35, 4891.41, 5013.38, 5039.45],
      '10': [4297.19, 4443.14, 4578.66, 4723.57, 4864.31, 5007.13, 5155.16, 5296.94, 5436.64, 5464.79],
    },
  },
  periods: [
    {
      from: '2026-07-01',
      note: "+1% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          '1': [2932.4, 2983.99, 3037.69, 3094.55, 3151.4, 3208.26, 3258.8, 3315.66, 3333.56],
          '2': [3037.69, 3098.76, 3161.93, 3220.9, 3287.23, 3339.88, 3400.95, 3463.07, 3473.6],
          '3': [3161.93, 3226.16, 3296.71, 3354.62, 3428.32, 3495.71, 3557.83, 3625.22, 3642.07],
          '4': [3283.02, 3349.35, 3427.27, 3498.87, 3571.52, 3644.17, 3723.14, 3794.74, 3814.75],
          '5': [3386.21, 3466.23, 3547.3, 3627.33, 3713.67, 3784.21, 3863.18, 3945.31, 3965.32],
          '6': [3529.4, 3604.16, 3686.29, 3768.42, 3852.65, 3932.67, 4015.86, 4097.98, 4176.95, 4199.06],
          '7': [3686.29, 3784.21, 3880.03, 3969.53, 4060.08, 4158, 4252.76, 4344.37, 4439.13, 4462.3],
          '8': [3880.03, 3979, 4094.83, 4199.06, 4303.3, 4413.86, 4516, 4622.34, 4730.79, 4753.96],
          '9': [4070.61, 4199.06, 4316.99, 4444.4, 4568.64, 4691.83, 4815.03, 4940.32, 5063.52, 5089.84],
          '10': [4340.16, 4487.57, 4624.45, 4770.8, 4912.95, 5057.2, 5206.71, 5349.91, 5491, 5519.43],
        },
      },
    },
  ],
  vergoedingen: [],
};
