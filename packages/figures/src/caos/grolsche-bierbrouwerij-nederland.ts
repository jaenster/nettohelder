import type { Cao } from '../types.js';

/**
 * Cao Grolsche Bierbrouwerij Nederland B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Grolsche Bierbrouwerij Nederland B.V.
 * https://cao-kijker.awvn.nl/bestanden/0070_01-05-2025%20tot%2001-05-2027_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-07-01 (month) uit de bron
 *   - Basistabel 1-1-2026 teruggerekend uit de tabel per 2026-07-01 (gedeeld door +0,5%)
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-07-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoGrolscheBierbrouwerijNederland2026: Cao = {
  id: 'grolsche-bierbrouwerij-nederland',
  name: "Cao Grolsche Bierbrouwerij Nederland B.V.",
  year: 2026,
  effectiveNote: "Cao 2025-05-01 t/m 2027-04-30; loontabel per 2026-07-01. Let op: Salarisschalen per 1-7-2026: functiejarenschaal (0 t/m max functiejaren); leeftijdsschalen tot 21 jaar niet opgenomen Minimum vakantietoeslag voor functievolwassen werknemers: € 2.199 (1-5-2025), € 2.265 (1-1-2026), € 2.276 (1-7-2026) Normale arbeidsduur 40 uur per week; door arbeidsduurverkorting gemiddeld 37,4, 36,5 of 36 uur op jaarbasis Extra uitkering (13e maand) 8,33% van het genoten maandinkomen; daarnaast variabele beloning (niet opgenomen) Pensioenpremie werknemer niet in de cao gevonden",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/0070_01-05-2025%20tot%2001-05-2027_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      '1': [2754.79, 2899.78, 2986.86, 3073.13, 3160.23, 3246.54, 3334.39],
      '2': [2791.81, 2938.75, 3025.85, 3115.46, 3203.37, 3292.11, 3379.23, 3467.93],
      '3': [2848.56, 2998.49, 3088.03, 3177.65, 3268.07, 3357.67, 3446.42, 3537.62],
      '4': [2923.39, 3077.25, 3170.22, 3261.39, 3354.29, 3446.42, 3537.62, 3630.57],
      '5': [3017.18, 3176.01, 3273.02, 3367.59, 3462.94, 3557.51, 3652.94, 3748.32, 3842.87],
      '6': [3158.25, 3324.46, 3424, 3523.53, 3623.05, 3722.56, 3823.77, 3923.31, 4022.84, 4122.4],
      '7': [3354.49, 3531.03, 3637.15, 3742.51, 3848.68, 3954.83, 4060.21, 4156.39, 4262.56, 4367.03, 4473.27],
      '8': [3575.91, 3764.11, 3876.88, 3990.54, 4102.48, 4203.66, 4317.31, 4429.34, 4542.08, 4655.8, 4767.7, 4879.71],
      '9': [3824.91, 4026.22, 4146.46, 4257.55, 4377.05, 4498.96, 4619.2, 4738.7, 4858.97, 4980.07, 5100.34, 5220.61, 5340.88, 5462.01],
      '10': [4091.23, 4306.56, 4435.93, 4565.34, 4693.07, 4823.29, 4951.81, 5082.06, 5211.45, 5340.88, 5468.61, 5598.83, 5729.89, 5860.97, 5991.98, 6123.04, 6252.43],
    },
  },
  periods: [
    {
      from: '2026-07-01',
      note: "+0,5% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          '1': [2768.56, 2914.28, 3001.79, 3088.5, 3176.03, 3262.77, 3351.06],
          '2': [2805.77, 2953.44, 3040.98, 3131.04, 3219.39, 3308.57, 3396.13, 3485.27],
          '3': [2862.8, 3013.48, 3103.47, 3193.54, 3284.41, 3374.46, 3463.65, 3555.31],
          '4': [2938.01, 3092.64, 3186.07, 3277.7, 3371.06, 3463.65, 3555.31, 3648.72],
          '5': [3032.27, 3191.89, 3289.39, 3384.43, 3480.25, 3575.3, 3671.2, 3767.06, 3862.08],
          '6': [3174.04, 3341.08, 3441.12, 3541.15, 3641.17, 3741.17, 3842.89, 3942.93, 4042.95, 4143.01],
          '7': [3371.26, 3548.69, 3655.34, 3761.22, 3867.92, 3974.6, 4080.51, 4177.17, 4283.87, 4388.87, 4495.64],
          '8': [3593.79, 3782.93, 3896.26, 4010.49, 4122.99, 4224.68, 4338.9, 4451.49, 4564.79, 4679.08, 4791.54, 4904.11],
          '9': [3844.03, 4046.35, 4167.19, 4278.84, 4398.94, 4521.45, 4642.3, 4762.39, 4883.26, 5004.97, 5125.84, 5246.71, 5367.58, 5489.32],
          '10': [4111.69, 4328.09, 4458.11, 4588.17, 4716.54, 4847.41, 4976.57, 5107.47, 5237.51, 5367.58, 5495.95, 5626.82, 5758.54, 5890.27, 6021.94, 6153.66, 6283.69],
        },
      },
    },
  ],
  vergoedingen: [],
};
