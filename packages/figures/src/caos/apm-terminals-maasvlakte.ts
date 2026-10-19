import type { Cao } from '../types.js';

/**
 * Cao APM Terminals Maasvlakte II B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao APM Terminals Maasvlakte II B.V.
 * https://www.cnv.nl/documents/6018/APMTerminals_CAO2025-2027.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2025-01-01 (month) uit de bron
 *   - Basistabel 1-1-2026: tabel per 2025-01-01 verhoogd met +2% per 2026-01-01
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-07-01, 2027-01-01, 2027-07-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoApmTerminalsMaasvlakte2026: Cao = {
  id: 'apm-terminals-maasvlakte',
  name: "Cao APM Terminals Maasvlakte II B.V.",
  year: 2026,
  effectiveNote: "Cao 2025-01-01 t/m 2027-12-31; loontabel per 2025-01-01. Let op: Cao 1 januari 2025 t/m 31 december 2027 (CNV en FNV Havens) Salarisgebouw groepen 0 t/m 8 met maximaal 10 periodieken, per 1 januari 2025, excl. 8% vakantiegeld; afgeronde eurobedragen Gemiddelde arbeidsduur 32,55 uur (volcontinurooster) tot 38,75 uur (kantoordienst) Pensioen: beschikbare premieregeling met werknemersbijdrage 5% van de pensioengrondslag (pensioengevend jaarsalaris minus franchise); franchisebedrag niet vermeld Mentor/superuser-toeslag € 200 bruto per maand; in 2026 start onderzoek naar herziening van het loongebouw",
  sourceUrl: "https://www.cnv.nl/documents/6018/APMTerminals_CAO2025-2027.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      '0': [2699.94, 2893.74, 3089.58, 3282.36, 3478.2, 3670.98],
      '1': [2837.64, 3025.32, 3208.92, 3394.56, 3579.18, 3762.78, 3950.46],
      '2': [3119.16, 3317.04, 3514.92, 3711.78, 3909.66, 4105.5, 4302.36, 4501.26],
      '3': [3259.92, 3542.46, 3830.1, 4116.72, 4403.34, 4687.92, 4974.54, 5259.12],
      '4': [3325.2, 3601.62, 3876, 4152.42, 4427.82, 4703.22, 4979.64, 5256.06, 5530.44],
      '5': [3388.44, 3662.82, 3938.22, 4213.62, 4485.96, 4761.36, 5035.74, 5311.14, 5586.54],
      '6': [3716.88, 3979.02, 4244.22, 4505.34, 4767.48, 5029.62, 5292.78, 5557.98, 5820.12, 6082.26],
      '7': [3781.14, 4034.1, 4291.14, 4542.06, 4797.06, 5050.02, 5301.96, 5559, 5809.92, 6063.9, 6315.84],
      '8': [3913.74, 4201.38, 4486.98, 4777.68, 5062.26, 5348.88, 5638.56, 5925.18, 6212.82, 6499.44, 6789.12],
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
          '0': [2753.94, 2951.61, 3151.37, 3348.01, 3547.76, 3744.4],
          '1': [2894.39, 3085.83, 3273.1, 3462.45, 3650.76, 3838.04, 4029.47],
          '2': [3181.54, 3383.38, 3585.22, 3786.02, 3987.85, 4187.61, 4388.41, 4591.29],
          '3': [3325.12, 3613.31, 3906.7, 4199.05, 4491.41, 4781.68, 5074.03, 5364.3],
          '4': [3391.7, 3673.65, 3953.52, 4235.47, 4516.38, 4797.28, 5079.23, 5361.18, 5641.05],
          '5': [3456.21, 3736.08, 4016.98, 4297.89, 4575.68, 4856.59, 5136.45, 5417.36, 5698.27],
          '6': [3791.22, 4058.6, 4329.1, 4595.45, 4862.83, 5130.21, 5398.64, 5669.14, 5936.52, 6203.91],
          '7': [3856.76, 4114.78, 4376.96, 4632.9, 4893, 5151.02, 5408, 5670.18, 5926.12, 6185.18, 6442.16],
          '8': [3992.01, 4285.41, 4576.72, 4873.23, 5163.51, 5455.86, 5751.33, 6043.68, 6337.08, 6629.43, 6924.9],
        },
      },
    },
    {
      from: '2027-01-01',
      note: "+2% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          '0': [2809.02, 3010.65, 3214.4, 3414.97, 3618.72, 3819.29],
          '1': [2952.28, 3147.54, 3338.56, 3531.7, 3723.78, 3914.8, 4110.06],
          '2': [3245.17, 3451.05, 3656.92, 3861.74, 4067.61, 4271.36, 4476.18, 4683.11],
          '3': [3391.62, 3685.58, 3984.84, 4283.04, 4581.23, 4877.31, 5175.51, 5471.59],
          '4': [3459.54, 3747.13, 4032.59, 4320.18, 4606.7, 4893.23, 5180.82, 5468.4, 5753.87],
          '5': [3525.33, 3810.8, 4097.32, 4383.85, 4667.19, 4953.72, 5239.18, 5525.71, 5812.24],
          '6': [3867.04, 4139.77, 4415.69, 4687.36, 4960.09, 5232.82, 5506.61, 5782.52, 6055.25, 6327.98],
          '7': [3933.9, 4197.08, 4464.5, 4725.56, 4990.86, 5254.04, 5516.16, 5783.58, 6044.64, 6308.88, 6571],
          '8': [4071.86, 4371.12, 4668.25, 4970.7, 5266.78, 5564.97, 5866.36, 6164.56, 6463.82, 6762.02, 7063.4],
        },
      },
    },
    {
      from: '2027-07-01',
      note: "+2% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          '0': [2865.2, 3070.86, 3278.69, 3483.27, 3691.09, 3895.67],
          '1': [3011.33, 3210.49, 3405.33, 3602.33, 3798.25, 3993.09, 4192.26],
          '2': [3310.08, 3520.07, 3730.06, 3938.97, 4148.96, 4356.79, 4565.7, 4776.77],
          '3': [3459.45, 3759.29, 4064.53, 4368.7, 4672.86, 4974.86, 5279.02, 5581.02],
          '4': [3528.73, 3822.07, 4113.24, 4406.58, 4698.84, 4991.09, 5284.43, 5577.77, 5868.95],
          '5': [3595.84, 3887.01, 4179.27, 4471.53, 4760.54, 5052.79, 5343.97, 5636.22, 5928.48],
          '6': [3944.38, 4222.57, 4504, 4781.1, 5059.29, 5337.47, 5616.74, 5898.17, 6176.36, 6454.54],
          '7': [4012.58, 4281.02, 4553.79, 4820.07, 5090.68, 5359.12, 5626.48, 5899.26, 6165.53, 6435.06, 6702.42],
          '8': [4153.29, 4458.54, 4761.62, 5070.11, 5372.11, 5676.27, 5983.68, 6287.85, 6593.09, 6897.26, 7204.67],
        },
      },
    },
  ],
  vergoedingen: [],
};
