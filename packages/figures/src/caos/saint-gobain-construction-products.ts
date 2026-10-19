import type { Cao } from '../types.js';

/**
 * Cao Saint-Gobain Construction Products Nederland B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Saint-Gobain Construction Products Nederland B.V.
 * https://cao-kijker.awvn.nl/bestanden/2071_01-05-2026%20tot%2001-05-2027_akkoord.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2025-05-01 (month) uit de bron
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-05-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoSaintGobainConstructionProducts2026: Cao = {
  id: 'saint-gobain-construction-products',
  name: "Cao Saint-Gobain Construction Products Nederland B.V.",
  year: 2026,
  effectiveNote: "Cao 2026-05-01 t/m 2027-04-30; loontabel per 2025-05-01. Let op: Bron 2026-2027 is het eindbod van 13/14 april 2026 (voorgelegd aan de leden); de 3,25% per 1 mei 2025 komt uit de cao 2025-2026 Eindejaarsgratificatie 8,5% van 12 maal het maandinkomen van december, uitbetaald in december Dagdienst gemiddeld 38 uur per week (40 uur met 12 atv-dagen); ploegendiensten 36 tot ca. 34 uur Nieuw functiehuis gepland per 1 november 2026; bij lagere schaal een geïndexeerde welvaartstoeslag Pensioenpremie en werknemersbijdrage niet in de cao vermeld Salaristabel per 1-5-2025 (+3,25%) uit de cao 2025-2026 (https://cao-kijker.awvn.nl/bestanden/2071_01-05-2025%20tot%2001-05-2026_cao.pdf); de verhoging per 1-5-2026 komt hierbovenop",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/2071_01-05-2026%20tot%2001-05-2027_akkoord.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.085,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 38,
    schalen: {
      'A': [2604.66, 2635.96, 2663.41, 2702.32, 2735.91, 2767.15],
      'B': [2651.98, 2686.28, 2717.59, 2756.47, 2797.63, 2840.38],
      'C': [2712.21, 2754.18, 2795.34, 2839.62, 2882.28, 2925.01],
      'D': [2791.55, 2834.28, 2877.74, 2920.43, 2963.18, 3009.69, 3060.03],
      'E': [2890.69, 2934.18, 2983.75, 3031.05, 3079.85, 3129.45, 3176.73],
      'F': [3016.54, 3072.24, 3124.83, 3175.95, 3228.58, 3279.71, 3336.88, 3387.22],
      'G': [3207.23, 3260.62, 3313.24, 3372.73, 3425.35, 3480.32, 3533.67, 3594.69, 3649.58],
      'H': [3466.54, 3528.31, 3598.46, 3664.84, 3731.95, 3801.38, 3868.5, 3936.35, 4004.24],
      'I': [3747.97, 3834.92, 3908.15, 3989.76, 4072.14, 4147.6, 4232.29, 4314.67, 4394.93, 4480.12],
      'J': [4101.13, 4201.03, 4297.91, 4399.68, 4505.49, 4608.82, 4711.44, 4810.95, 4911.19, 5016.98],
      'K': [4347.56, 4469.12, 4587.53, 4711.44, 4828.28, 4953.82, 5072.25, 5195.36, 5313.8, 5434.55],
      'L': [4604.86, 4731.96, 4862.27, 4960.96, 5133.79, 5274.33, 5420.33, 5568.81, 5717.97, 5872.67, 5995.84],
    },
  },
  periods: [
    {
      from: '2026-05-01',
      note: "+3,3% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 38,
        schalen: {
          'A': [2690.61, 2722.95, 2751.3, 2791.5, 2826.2, 2858.47],
          'B': [2739.5, 2774.93, 2807.27, 2847.43, 2889.95, 2934.11],
          'C': [2801.71, 2845.07, 2887.59, 2933.33, 2977.4, 3021.54],
          'D': [2883.67, 2927.81, 2972.71, 3016.8, 3060.96, 3109.01, 3161.01],
          'E': [2986.08, 3031.01, 3082.21, 3131.07, 3181.49, 3232.72, 3281.56],
          'F': [3116.09, 3173.62, 3227.95, 3280.76, 3335.12, 3387.94, 3447, 3499],
          'G': [3313.07, 3368.22, 3422.58, 3484.03, 3538.39, 3595.17, 3650.28, 3713.31, 3770.02],
          'H': [3580.94, 3644.74, 3717.21, 3785.78, 3855.1, 3926.83, 3996.16, 4066.25, 4136.38],
          'I': [3871.65, 3961.47, 4037.12, 4121.42, 4206.52, 4284.47, 4371.96, 4457.05, 4539.96, 4627.96],
          'J': [4236.47, 4339.66, 4439.74, 4544.87, 4654.17, 4760.91, 4866.92, 4969.71, 5073.26, 5182.54],
          'K': [4491.03, 4616.6, 4738.92, 4866.92, 4987.61, 5117.3, 5239.63, 5366.81, 5489.16, 5613.89],
          'L': [4756.82, 4888.11, 5022.72, 5124.67, 5303.21, 5448.38, 5599.2, 5752.58, 5906.66, 6066.47, 6193.7],
        },
      },
    },
  ],
  vergoedingen: [],
};
