import type { Cao } from '../types.js';

/**
 * Cao Rotterdam-Antwerpen Pijpleiding (Nederland) N.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Rotterdam-Antwerpen Pijpleiding (Nederland) N.V.
 * https://cao-kijker.awvn.nl/bestanden/1283_01-04-2025%20tot%2001-04-2028_akkoord.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2024-04-01 (month) uit de bron
 *   - Basistabel 1-1-2026: tabel per 2024-04-01 verhoogd met +4% per 2025-04-01
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-04-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoRotterdamAntwerpenPijpleiding2026: Cao = {
  id: 'rotterdam-antwerpen-pijpleiding',
  name: "Cao Rotterdam-Antwerpen Pijpleiding (Nederland) N.V.",
  year: 2026,
  effectiveNote: "Cao 2025-04-01 t/m 2028-03-31; loontabel per 2024-04-01. Let op: Eindbod van 17 maart 2026 (FNV), looptijd 1 april 2025 t/m 31 maart 2028 Per 1 april 2027 verhoging gelijk aan de cao-contractloonstijging 2026 in de sector Chemie (AWVN-eindevaluatie); uitkomst onbekend Eenmalige bruto uitkering van € 4.000 bij de eerstvolgende salarisbetaling na het akkoord (datum geschat op april 2026) Salarisschalen A t/m D-TD per functiejaar uit de vorige cao (per 1 april 2024); de verhogingen vanaf 1 april 2025 komen daar bovenop 13e en 14e maand (elk een basismaandsalaris, in mei en december), waarin de wettelijke vakantietoeslag is begrepen; hier als vakantiegeld en eindejaarsuitkering van 8,33% opgenomen Dagdienst 40 uur per week; ploegendienst gemiddeld 33,6 uur Pensioenpremie (werknemersbijdrage) niet gevonden Eenmalige uitkering € 4.000 bruto; betaaldatum niet in de bron vermeld, daarom niet in de berekening",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/1283_01-04-2025%20tot%2001-04-2028_akkoord.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.0833,
  eindejaarsuitkeringPct: 0.0833,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      'A': [3429.97, 3499.32, 3561.62, 3628.1, 3694.54, 3767.65, 3839.91, 3913.88, 3988.64],
      'B': [3467.51, 3546.29, 3625.06, 3703.9, 3782.68, 3861.48, 3940.31, 4019.05, 4097.86, 4176.66, 4255.47, 4334.25, 4411.53, 4487.12, 4561.91, 4635.84, 4717.27, 4797, 4869.3, 4949.86],
      'C': [3577.02, 3658.3, 3739.62, 3820.94, 3902.25, 3983.52, 4064.81, 4146.15, 4227.46, 4308.72, 4390.06, 4471.38, 4548.61, 4625.05, 4704.8, 4785.34, 4860.96, 4944.07, 5011.36, 5094.44, 5170.04],
      'D': [3717.29, 3801.79, 3886.27, 3970.76, 4055.24, 4139.7, 4224.19, 4308.68, 4393.18, 4477.67, 4562.15, 4646.62, 4727.23, 4802.01, 4877.57, 4958.17, 5036.28, 5112.71, 5187.47, 5265.28, 5342.02, 5422.56],
      'D-TD': [4098.32, 4191.48, 4284.61, 4377.76, 4470.91, 4564.02, 4657.17, 4750.31, 4843.48, 4936.63, 5029.76, 5122.89, 5211.77, 5294.21, 5377.52, 5466.38, 5552.51, 5636.77, 5719.18, 5804.97, 5889.57, 5978.38],
    },
  },
  periods: [
    {
      from: '2026-04-01',
      note: "+3,57% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          'A': [3552.42, 3624.24, 3688.76, 3757.63, 3826.43, 3902.15, 3976.99, 4053.61, 4131.03],
          'B': [3591.3, 3672.89, 3754.47, 3836.13, 3917.72, 3999.33, 4080.98, 4162.53, 4244.15, 4325.77, 4407.39, 4488.98, 4569.03, 4647.31, 4724.77, 4801.34, 4885.68, 4968.25, 5043.13, 5126.57],
          'C': [3704.72, 3788.91, 3873.13, 3957.35, 4041.56, 4125.73, 4209.92, 4294.16, 4378.39, 4462.54, 4546.78, 4631, 4710.99, 4790.16, 4872.77, 4956.18, 5034.5, 5120.57, 5190.27, 5276.31, 5354.61],
          'D': [3850, 3937.52, 4025.01, 4112.52, 4200.01, 4287.49, 4374.99, 4462.5, 4550.01, 4637.52, 4725.02, 4812.5, 4895.99, 4973.44, 5051.7, 5135.18, 5216.08, 5295.24, 5372.66, 5453.25, 5532.73, 5616.15],
          'D-TD': [4244.63, 4341.12, 4437.57, 4534.04, 4630.52, 4726.95, 4823.43, 4919.9, 5016.39, 5112.87, 5209.32, 5305.78, 5397.83, 5483.22, 5569.49, 5661.52, 5750.73, 5838, 5923.35, 6012.21, 6099.83, 6191.81],
        },
      },
    },
  ],
  vergoedingen: [],
};
