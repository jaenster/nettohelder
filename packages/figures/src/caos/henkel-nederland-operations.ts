import type { Cao } from '../types.js';

/**
 * Cao Henkel Nederland Operations B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Henkel Nederland Operations B.V.
 * https://cao-kijker.awvn.nl/bestanden/0056_01-07-2026%20tot%2001-07-2028_akkoord.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2025-04-01 (month) uit de bron
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-07-01, 2027-01-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoHenkelNederlandOperations2026: Cao = {
  id: 'henkel-nederland-operations',
  name: "Cao Henkel Nederland Operations B.V.",
  year: 2026,
  effectiveNote: "Cao 2026-07-01 t/m 2028-06-30; loontabel per 2025-04-01. Let op: Cao 1-7-2026 t/m 30-6-2028 volgens eindbod van Henkel van 25 juni 2026 (door AWVN cao-kijker als akkoord geregistreerd): 3% per 1-7-2026 en 2,5% per 1-1-2027 Periodiekenschaal (0 t/m max. 10 periodieken) per 1-4-2025 uit de cao 2024-2026; schalen 2026 na 3% niet gevonden. Aanloopschalen 1 en 2 en de prestatieschalen A en B (bij beoordeling 'zeer goed') niet opgenomen Vanaf de nieuwe cao jaarlijks per 1 april een automatische periodiek tot het schaalmaximum (niet meer afhankelijk van beoordeling) Eindejaarsuitkering 1/12 van de in het jaar ontvangen maandinkomens (8,33%) Vakantietoeslag 8% van 12 maal het maandsalaris, met een minimum (2024: € 2.726,79) Tijdelijke compensatie max. € 50 bruto per maand (max. € 300) voor 2-ploegers die incidenteel in 3 ploegen werken, t/m 31-12-2026 Pensioen: beschikbare-premieregeling, eigen bijdrage 6% van (pensioengevend salaris - franchise); franchise en maximum alleen bekend voor 2023, daarom niet opgenomen",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/0056_01-07-2026%20tot%2001-07-2028_akkoord.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 38,
    schalen: {
      '3': [2797, 2839, 2881, 2932, 2980, 3033, 3087],
      '4': [2963, 3024, 3077, 3135, 3188, 3245, 3305],
      '5': [3182, 3244, 3306, 3367, 3429, 3492, 3556, 3603],
      '6': [3445, 3519, 3592, 3662, 3736, 3809, 3878, 3949, 4024],
      '7': [3848, 3935, 4029, 4116, 4209, 4298, 4391, 4479, 4571, 4663],
      '8': [4297, 4400, 4505, 4613, 4724, 4833, 4944, 5057, 5173, 5288, 5405],
    },
  },
  periods: [
    {
      from: '2026-07-01',
      note: "+3% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 38,
        schalen: {
          '3': [2880.91, 2924.17, 2967.43, 3019.96, 3069.4, 3123.99, 3179.61],
          '4': [3051.89, 3114.72, 3169.31, 3229.05, 3283.64, 3342.35, 3404.15],
          '5': [3277.46, 3341.32, 3405.18, 3468.01, 3531.87, 3596.76, 3662.68, 3711.09],
          '6': [3548.35, 3624.57, 3699.76, 3771.86, 3848.08, 3923.27, 3994.34, 4067.47, 4144.72],
          '7': [3963.44, 4053.05, 4149.87, 4239.48, 4335.27, 4426.94, 4522.73, 4613.37, 4708.13, 4802.89],
          '8': [4425.91, 4532, 4640.15, 4751.39, 4865.72, 4977.99, 5092.32, 5208.71, 5328.19, 5446.64, 5567.15],
        },
      },
    },
    {
      from: '2027-01-01',
      note: "+2,5% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 38,
        schalen: {
          '3': [2952.93, 2997.27, 3041.62, 3095.46, 3146.14, 3202.09, 3259.1],
          '4': [3128.19, 3192.59, 3248.54, 3309.78, 3365.73, 3425.91, 3489.25],
          '5': [3359.4, 3424.85, 3490.31, 3554.71, 3620.17, 3686.68, 3754.25, 3803.87],
          '6': [3637.06, 3715.18, 3792.25, 3866.16, 3944.28, 4021.35, 4094.2, 4169.16, 4248.34],
          '7': [4062.53, 4154.38, 4253.62, 4345.47, 4443.65, 4537.61, 4635.8, 4728.7, 4825.83, 4922.96],
          '8': [4536.56, 4645.3, 4756.15, 4870.17, 4987.36, 5102.44, 5219.63, 5338.93, 5461.39, 5582.81, 5706.33],
        },
      },
    },
  ],
  vergoedingen: [],
};
