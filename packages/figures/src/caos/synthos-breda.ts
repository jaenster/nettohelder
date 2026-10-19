import type { Cao } from '../types.js';

/**
 * Cao Synthos Breda B.V. en Synthos Styrenics Services B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Synthos Breda B.V. en Synthos Styrenics Services B.V.
 * https://cao-kijker.awvn.nl/bestanden/0005_01-07-2025%20tot%2001-07-2027_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-07-01 (month) uit de bron
 *   - Basistabel 1-1-2026 teruggerekend uit de tabel per 2026-07-01 (gedeeld door +3,5%)
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-07-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoSynthosBreda2026: Cao = {
  id: 'synthos-breda',
  name: "Cao Synthos Breda B.V. en Synthos Styrenics Services B.V.",
  year: 2026,
  effectiveNote: "Cao 2025-07-01 t/m 2027-06-30; loontabel per 2026-07-01. Let op: Salarisschalen per 1-7-2026 (functiejarenschaal 0-15 functiejaren; N/ST-regels met hetzelfde bedrag één keer opgenomen). Prestatietreden P1-P3 en aanloopschalen I-III niet opgenomen Vakantietoeslag 8% van het maandsalaris (in mei); 13e maand = 1 maandsalaris in november, hier weergegeven als 8,33% Bonusregeling, maximaal 5,5% van het jaarsalaris (niet meegenomen) Pensioen: beschikbare premieregeling (Zwitserleven); werknemersbijdrage 3% alleen over het pensioengevend inkomen boven EUR 54.263, daaronder geen eigen bijdrage; niet als pension-veld opgenomen Dagdienst 40 uur per week; 5-ploegendienst gemiddeld 33,6 uur (34,2 uur incl. opkomstdagen)",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/0005_01-07-2025%20tot%2001-07-2027_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      '10': [2926, 2987.69, 3051.11, 3115.32, 3181.23, 3248.76, 3317.17, 3387.23, 3459],
      '11': [3020.73, 3084.8, 3149.66, 3216.2, 3284.39, 3353.44, 3424.13, 3496.46, 3570.53, 3646.19],
      '12': [3139.3, 3205.59, 3273.52, 3342.28, 3412.71, 3484.79, 3558.53, 3633.91, 3710.98, 3789.67, 3870.08],
      '13': [3273.03, 3345.83, 3420.22, 3495.48, 3572.39, 3651.78, 3732.76, 3815.49, 3899.84, 3985.86, 4074.33],
      '14': [3440.86, 3520.79, 3602.39, 3685.63, 3770.51, 3857.87, 3946.84, 4038.36, 4131.53, 4227.11, 4324.38],
      '15': [3634, 3721.97, 3811.6, 3903.68, 3997.41, 4093.57, 4192.26, 4293.4, 4396.99, 4503.05, 4611.57],
      '16': [3859.28, 3956.34, 4055.77, 4157.73, 4262.15, 4369.01, 4478.33, 4591, 4706.11, 4824.51, 4945.38],
      'A': [4346, 4446.32, 4549.08, 4654.32, 4762.19, 4872.16, 4984.84, 5099.94, 5217.54, 5337.51, 5460.87, 5586.67, 5715.74, 5847.29, 5982.12, 6120.26],
      'B': [4846.7, 4973.42, 5103.22, 5236.44, 5372.88, 5512.69, 5656.57, 5803.71, 5955.03, 6110.36, 6269.87, 6433.51, 6601.23, 6773.09, 6949.81, 7130.7],
    },
  },
  periods: [
    {
      from: '2026-07-01',
      note: "+3,5% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          '10': [3028.41, 3092.26, 3157.9, 3224.36, 3292.57, 3362.47, 3433.27, 3505.78, 3580.06],
          '11': [3126.46, 3192.77, 3259.9, 3328.77, 3399.34, 3470.81, 3543.97, 3618.84, 3695.5, 3773.81],
          '12': [3249.18, 3317.79, 3388.09, 3459.26, 3532.15, 3606.76, 3683.08, 3761.1, 3840.86, 3922.31, 4005.53],
          '13': [3387.59, 3462.93, 3539.93, 3617.82, 3697.42, 3779.59, 3863.41, 3949.03, 4036.33, 4125.36, 4216.93],
          '14': [3561.29, 3644.02, 3728.47, 3814.63, 3902.48, 3992.9, 4084.98, 4179.7, 4276.13, 4375.06, 4475.73],
          '15': [3761.19, 3852.24, 3945.01, 4040.31, 4137.32, 4236.85, 4338.99, 4443.67, 4550.88, 4660.66, 4772.97],
          '16': [3994.35, 4094.81, 4197.72, 4303.25, 4411.33, 4521.93, 4635.07, 4751.69, 4870.82, 4993.37, 5118.47],
          'A': [4498.11, 4601.94, 4708.3, 4817.22, 4928.87, 5042.69, 5159.31, 5278.44, 5400.15, 5524.32, 5652, 5782.2, 5915.79, 6051.94, 6191.49, 6334.47],
          'B': [5016.33, 5147.49, 5281.83, 5419.72, 5560.93, 5705.63, 5854.55, 6006.84, 6163.46, 6324.22, 6489.32, 6658.68, 6832.27, 7010.15, 7193.05, 7380.27],
        },
      },
    },
  ],
  vergoedingen: [],
};
