import type { Cao } from '../types.js';

/**
 * James Hardie Netherlands B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: James Hardie Netherlands B.V.
 * https://cao-kijker.awvn.nl/bestanden/1133_01-10-2025%20tot%2001-01-2027_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-07-01 (month) uit de bron
 *   - Basistabel 1-1-2026 teruggerekend uit de tabel per 2026-07-01 (gedeeld door +2,5%)
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-07-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoJamesHardieNetherlands2026: Cao = {
  id: 'james-hardie-netherlands',
  name: "James Hardie Netherlands B.V.",
  year: 2026,
  effectiveNote: "Cao 2025-10-01 t/m 2026-12-31; loontabel per 2026-07-01. Let op: Cao 1 oktober 2025 t/m 31 december 2026 (onderhandelingsresultaat 17 september 2025 met CNV); salarissen en schalen +2,5% per 1-1-2026 en +2,5% per 1-7-2026. Salarisschalen per 1 juli 2026 (ORBA, schaal 1 t/m 10). Schaal 9 en 10 beginnen bij trede 2. Aparte (lagere) schalen voor leer/werkovereenkomsten tot 23 jaar. Voltijd dagdienst 40 uur per week; ploegendienst kan afwijken. Vakantietoeslag 8% van de vakantietoeslagbasis (juni-mei), uitbetaald in mei. Pensioen: verplichte deelname aan de pensioenregeling van James Hardie; premieverdeling niet in de cao vermeld.",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/1133_01-10-2025%20tot%2001-01-2027_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      '1': [2936.59, 2975.61, 3016.59, 3049.76, 3088.78, 3129.76],
      '2': [3015.61, 3048.78, 3089.76, 3129.76, 3166.83, 3208.78, 3250.73],
      '3': [3090.73, 3136.59, 3180.49, 3220.49, 3263.41, 3307.32, 3355.12, 3403.9],
      '4': [3188.29, 3243.9, 3296.59, 3351.22, 3408.78, 3460.49, 3528.78, 3581.46],
      '5': [3325.85, 3387.32, 3444.88, 3506.34, 3572.68, 3633.17, 3689.76, 3748.29, 3817.56],
      '6': [3507.32, 3581.46, 3643.9, 3715.12, 3787.32, 3853.66, 3920, 3987.32, 4067.32, 4126.83],
      '7': [3736.59, 3825.37, 3897.56, 3982.44, 4062.44, 4138.54, 4217.56, 4307.32, 4373.66, 4457.56, 4534.63],
      '8': [4021.46, 4119.02, 4211.71, 4311.22, 4407.8, 4508.29, 4603.9, 4711.22, 4805.85, 4901.46, 4997.07],
      '9': [4391.22, 4507.32, 4605.85, 4715.12, 4823.41, 4943.41, 5054.63, 5164.88, 5270.24, 5382.44, 5490.73],
      '10': [4900.49, 5029.27, 5165.85, 5297.56, 5431.22, 5568.78, 5699.51, 5837.07, 5960, 6101.46, 6229.27],
    },
  },
  periods: [
    {
      from: '2026-07-01',
      note: "+2,5% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          '1': [3010, 3050, 3092, 3126, 3166, 3208],
          '2': [3091, 3125, 3167, 3208, 3246, 3289, 3332],
          '3': [3168, 3215, 3260, 3301, 3345, 3390, 3439, 3489],
          '4': [3268, 3325, 3379, 3435, 3494, 3547, 3617, 3671],
          '5': [3409, 3472, 3531, 3594, 3662, 3724, 3782, 3842, 3913],
          '6': [3595, 3671, 3735, 3808, 3882, 3950, 4018, 4087, 4169, 4230],
          '7': [3830, 3921, 3995, 4082, 4164, 4242, 4323, 4415, 4483, 4569, 4648],
          '8': [4122, 4222, 4317, 4419, 4518, 4621, 4719, 4829, 4926, 5024, 5122],
          '9': [4501, 4620, 4721, 4833, 4944, 5067, 5181, 5294, 5402, 5517, 5628],
          '10': [5023, 5155, 5295, 5430, 5567, 5708, 5842, 5983, 6109, 6254, 6385],
        },
      },
    },
  ],
  vergoedingen: [],
};
