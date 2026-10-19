import type { Cao } from '../types.js';

/**
 * Cao Nederlandse Algemene Keuringsdienst voor zaaizaad en pootgoed van landbouwgewassen (NAK) 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Nederlandse Algemene Keuringsdienst voor zaaizaad en pootgoed van landbouwgewassen (NAK)
 * https://cao-kijker.awvn.nl/bestanden/2318_01-05-2026%20tot%2001-01-2027_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-05-01 (month) uit de bron
 *   - Basistabel 1-1-2026 teruggerekend uit de tabel per 2026-05-01 (gedeeld door +3%)
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-05-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoNakKeuringsdienst2026: Cao = {
  id: 'nak-keuringsdienst',
  name: "Cao Nederlandse Algemene Keuringsdienst voor zaaizaad en pootgoed van landbouwgewassen (NAK)",
  year: 2026,
  effectiveNote: "Cao 2026-05-01 t/m 2026-12-31; loontabel per 2026-05-01. Let op: Cao 1-5-2026 t/m 31-12-2026 (onderhandelingsresultaat 19-5-2026 met CNV); salarissen en schalen +3% per 1-5-2026 met terugwerkende kracht. Overleg over een cao vanaf 1-1-2027 gepland in het najaar van 2026 Salaristabel per 1-5-2026 in hele euro's, functiegroepen A t/m N met functiejaren; aparte uurloontabel voor nulurencontracten Eindejaarsuitkering vanaf 2026 jaarlijks € 300 bruto (fulltime, naar rato), voor wie op 1 december in dienst is; maximaal € 150 hiervan kan netto via de WKR Eenmalige compensatie € 100 netto (fulltime, via WKR) in juli 2026 voor wie op 1-7-2026 in dienst was Vakantietoeslag 8% van 12 keer het maandsalaris, uitbetaald in april Arbeidsduur gemiddeld 38 uur per week (40 uur met 12 adv-dagen) Pensioen bij BPL; de werkgever betaalt de volledige pensioenpremie (geen werknemersbijdrage)",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/2318_01-05-2026%20tot%2001-01-2027_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 38,
    schalen: {
      'A': [2504.85, 2590.29, 2675.73, 2761.17, 2847.57, 2933.01],
      'B': [2518.45, 2607.77, 2697.09, 2785.44, 2874.76, 2964.08, 3052.43],
      'C': [2563.11, 2653.4, 2744.66, 2834.95, 2925.24, 3016.5, 3106.8, 3198.06],
      'D': [2632.04, 2721.36, 2811.65, 2901.94, 2991.26, 3081.55, 3170.87, 3261.17, 3351.46],
      'E': [2731.07, 2833.01, 2934.95, 3036.89, 3138.83, 3239.81, 3341.75, 3443.69, 3545.63],
      'F': [2857.28, 2964.08, 3071.84, 3179.61, 3287.38, 3395.15, 3502.91, 3610.68, 3718.45],
      'G': [3008.74, 3131.07, 3253.4, 3374.76, 3497.09, 3619.42, 3741.75, 3864.08, 3985.44],
      'H': [3200.97, 3327.18, 3454.37, 3580.58, 3707.77, 3834.95, 3961.17, 4088.35, 4214.56, 4341.75],
      'I': [3439.81, 3590.29, 3741.75, 3893.2, 4044.66, 4196.12, 4346.6, 4498.06, 4649.51, 4800.97],
      'J': [3821.36, 3982.52, 4142.72, 4303.88, 4464.08, 4624.27, 4785.44, 4945.63, 5106.8, 5266.99, 5427.18],
      'K': [4306.8, 4497.09, 4687.38, 4878.64, 5068.93, 5260.19, 5450.49, 5641.75, 5832.04, 6023.3, 6213.59],
      'L': [4959.22, 5166.02, 5372.82, 5578.64, 5785.44, 5992.23, 6199.03, 6405.83, 6611.65, 6818.45, 7025.24, 7232.04],
      'M': [5800.97, 6045.63, 6290.29, 6534.95, 6779.61, 7024.27, 7268.93, 7513.59, 7758.25, 8002.91, 8247.57, 8492.23],
      'N': [6891.26, 7161.17, 7430.1, 7699.03, 7967.96, 8236.89, 8505.83, 8774.76, 9043.69, 9312.62, 9581.55, 9850.49, 10119.42],
    },
  },
  periods: [
    {
      from: '2026-05-01',
      note: "+3% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 38,
        schalen: {
          'A': [2580, 2668, 2756, 2844, 2933, 3021],
          'B': [2594, 2686, 2778, 2869, 2961, 3053, 3144],
          'C': [2640, 2733, 2827, 2920, 3013, 3107, 3200, 3294],
          'D': [2711, 2803, 2896, 2989, 3081, 3174, 3266, 3359, 3452],
          'E': [2813, 2918, 3023, 3128, 3233, 3337, 3442, 3547, 3652],
          'F': [2943, 3053, 3164, 3275, 3386, 3497, 3608, 3719, 3830],
          'G': [3099, 3225, 3351, 3476, 3602, 3728, 3854, 3980, 4105],
          'H': [3297, 3427, 3558, 3688, 3819, 3950, 4080, 4211, 4341, 4472],
          'I': [3543, 3698, 3854, 4010, 4166, 4322, 4477, 4633, 4789, 4945],
          'J': [3936, 4102, 4267, 4433, 4598, 4763, 4929, 5094, 5260, 5425, 5590],
          'K': [4436, 4632, 4828, 5025, 5221, 5418, 5614, 5811, 6007, 6204, 6400],
          'L': [5108, 5321, 5534, 5746, 5959, 6172, 6385, 6598, 6810, 7023, 7236, 7449],
          'M': [5975, 6227, 6479, 6731, 6983, 7235, 7487, 7739, 7991, 8243, 8495, 8747],
          'N': [7098, 7376, 7653, 7930, 8207, 8484, 8761, 9038, 9315, 9592, 9869, 10146, 10423],
        },
      },
    },
  ],
  vergoedingen: [],
};
