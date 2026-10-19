import type { Cao } from '../types.js';

/**
 * Cao RENOLIT Nederland 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao RENOLIT Nederland
 * https://cao-kijker.awvn.nl/bestanden/1234_01-10-2025%20tot%2001-01-2027_akkoord.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-01-01 (month) uit de bron
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-07-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoRenolitNederland2026: Cao = {
  id: 'renolit-nederland',
  name: "Cao RENOLIT Nederland",
  year: 2026,
  effectiveNote: "Cao 2025-10-01 t/m 2026-12-31; loontabel per 2026-01-01. Let op: Nieuw loongebouw per 1 oktober 2025 (functieklassen A-K, treden = functiejaren); tabel per 1 januari 2026 opgenomen Aanloopschalen AL1 (90%) en AL2 (95%) van het schaalsalaris bij 0 functiejaren niet opgenomen 13e maand: extra uitkering in december ter hoogte van het gemiddelde maandinkomen over het kalenderjaar Vakantietoeslag 8% van 12 maandinkomens met een vloer die meestijgt met de loonsverhogingen Gemiddelde arbeidsduur dag- en ploegendienst 40 uur per week Pensioenpremie niet opgenomen",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/1234_01-10-2025%20tot%2001-01-2027_akkoord.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      'A': [2794, 2841, 2888, 2934],
      'B': [2922, 2976, 3030, 3083, 3137],
      'C': [3054, 3112, 3170, 3228, 3286, 3344],
      'D': [3213, 3277, 3341, 3405, 3469, 3533, 3597],
      'E': [3407, 3478, 3548, 3619, 3690, 3761, 3831, 3902],
      'F': [3640, 3719, 3798, 3876, 3955, 4034, 4113, 4191, 4270],
      'G': [3919, 4007, 4095, 4183, 4271, 4359, 4447, 4535, 4623, 4711],
      'H': [4252, 4351, 4449, 4548, 4646, 4745, 4843, 4942, 5040, 5139, 5237],
      'I': [4648, 4759, 4869, 4979, 5090, 5200, 5310, 5421, 5531, 5641, 5752, 5862],
      'J': [5117, 5241, 5365, 5489, 5612, 5736, 5860, 5984, 6108, 6231, 6355, 6479, 6603],
      'K': [5671, 5810, 5949, 6088, 6227, 6366, 6505, 6644, 6783, 6922, 7061, 7200, 7339, 7477],
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
          'A': [2821.94, 2869.41, 2916.88, 2963.34],
          'B': [2951.22, 3005.76, 3060.3, 3113.83, 3168.37],
          'C': [3084.54, 3143.12, 3201.7, 3260.28, 3318.86, 3377.44],
          'D': [3245.13, 3309.77, 3374.41, 3439.05, 3503.69, 3568.33, 3632.97],
          'E': [3441.07, 3512.78, 3583.48, 3655.19, 3726.9, 3798.61, 3869.31, 3941.02],
          'F': [3676.4, 3756.19, 3835.98, 3914.76, 3994.55, 4074.34, 4154.13, 4232.91, 4312.7],
          'G': [3958.19, 4047.07, 4135.95, 4224.83, 4313.71, 4402.59, 4491.47, 4580.35, 4669.23, 4758.11],
          'H': [4294.52, 4394.51, 4493.49, 4593.48, 4692.46, 4792.45, 4891.43, 4991.42, 5090.4, 5190.39, 5289.37],
          'I': [4694.48, 4806.59, 4917.69, 5028.79, 5140.9, 5252, 5363.1, 5475.21, 5586.31, 5697.41, 5809.52, 5920.62],
          'J': [5168.17, 5293.41, 5418.65, 5543.89, 5668.12, 5793.36, 5918.6, 6043.84, 6169.08, 6293.31, 6418.55, 6543.79, 6669.03],
          'K': [5727.71, 5868.1, 6008.49, 6148.88, 6289.27, 6429.66, 6570.05, 6710.44, 6850.83, 6991.22, 7131.61, 7272, 7412.39, 7551.77],
        },
      },
    },
  ],
  vergoedingen: [],
};
