import type { Cao } from '../types.js';

/**
 * Bedrijfs-cao COSCO SHIPPING Lines (Netherlands) B.V. en Cross-Ocean B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Bedrijfs-cao COSCO SHIPPING Lines (Netherlands) B.V. en Cross-Ocean B.V.
 * https://cao-kijker.awvn.nl/bestanden/1683_01-01-2024%20tot%2001-01-2027_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2025-01-01 (month) uit de bron
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-04-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoCoscoShippingLines2026: Cao = {
  id: 'cosco-shipping-lines',
  name: "Bedrijfs-cao COSCO SHIPPING Lines (Netherlands) B.V. en Cross-Ocean B.V.",
  year: 2026,
  effectiveNote: "Cao 2024-01-01 t/m 2026-12-31; loontabel per 2025-01-01. Let op: Salarissen worden jaarlijks per 1 april aangepast met automatische prijscompensatie (CBS-cijfer alle huishoudens afgeleid over het voorgaande jaar); uitkomst niet opgenomen Per 1-1-2024 gold een negatieve prijscompensatie van 1,985% die niet is doorgevoerd; in 2025 en 2026 vindt geen verrekening met de indexeringsclausule plaats Per 1 april 2026 een initiële salarisschaalverhoging van 1% (cao-tekst; AWVN noemt 1-1-2026) Vakantiegeld is één maandsalaris (8,33%) Winstgerelateerde uitkering 1,5% tot 3% van het bruto jaarsalaris afhankelijk van KPI/budget, niet opgenomen Werknemers met een jaarsalaris boven € 80.000 hebben geen recht op structurele en eenmalige verhogingen uit de cao Salarisschaal januari 2025: schalen 1 t/m 12, treden 300 t/m 420",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/1683_01-01-2024%20tot%2001-01-2027_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.0833,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 38.75,
    schalen: {
      '1': [2393.82, 2487.4, 2589.2, 2684.14, 2755.67, 2805.2, 2864.36, 2941.39, 3025.33, 3127.13, 3233.07, 3337.62, 3435.29],
      '2': [2436.49, 2531.42, 2640.1, 2741.91, 2832.73, 2905.64, 2970.3, 3034.95, 3110.61, 3194.53, 3308.71, 3410.53, 3510.96],
      '3': [2486.01, 2600.2, 2708.9, 2825.82, 2911.12, 2995.06, 3069.34, 3134, 3197.3, 3312.84, 3414.65, 3520.59, 3632.03],
      '4': [2554.8, 2664.88, 2788.69, 2916.64, 3004.69, 3099.62, 3178.03, 3248.2, 3318.37, 3432.53, 3548.09, 3655.42, 3769.61],
      '5': [2635.98, 2761.17, 2900.12, 3030.83, 3124.38, 3233.07, 3314.25, 3388.51, 3465.58, 3577, 3702.19, 3812.25, 3931.95],
      '6': [2763.92, 2904.26, 3039.07, 3198.68, 3314.25, 3414.65, 3502.72, 3581.15, 3663.67, 3783.39, 3912.69, 4037.88, 4163.08],
      '7': [2937.26, 3100.99, 3271.58, 3450.43, 3570.12, 3689.8, 3786.1, 3960.84, 4029.61, 4101.16, 4231.87, 4368.08, 4501.53],
      '8': [3161.52, 3288.1, 3418.78, 3555, 3689.8, 3816.39, 3953.97, 4094.29, 4227.73, 4372.2, 4526.28, 4669.36, 4820.72],
      '9': [3431.17, 3555, 3714.59, 3863.17, 3999.35, 4147.95, 4302.04, 4457.5, 4606.08, 4764.29, 4932.12, 5083.47, 5247.19],
      '10': [3783.39, 3953.97, 4124.56, 4295.15, 4474.01, 4632.21, 4793.19, 4985.79, 5145.38, 5326.99, 5507.22, 5692.94, 5867.67],
      '11': [4332.3, 4535.92, 4734.01, 4930.77, 5135.75, 5324.23, 5525.1, 5721.84, 5918.56, 6120.81, 6329.93, 6530.78, 6731.65],
      '12': [5146.75, 5397.14, 5631.03, 5875.92, 6096.04, 6338.19, 6581.71, 6808.7, 7030.21, 7264.1, 7493.82, 7724.96, 7960.23],
    },
  },
  periods: [
    {
      from: '2026-04-01',
      note: "+1% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 38.75,
        schalen: {
          '1': [2417.76, 2512.27, 2615.09, 2710.98, 2783.23, 2833.25, 2893, 2970.8, 3055.58, 3158.4, 3265.4, 3371, 3469.64],
          '2': [2460.85, 2556.73, 2666.5, 2769.33, 2861.06, 2934.7, 3000, 3065.3, 3141.72, 3226.48, 3341.8, 3444.64, 3546.07],
          '3': [2510.87, 2626.2, 2735.99, 2854.08, 2940.23, 3025.01, 3100.03, 3165.34, 3229.27, 3345.97, 3448.8, 3555.8, 3668.35],
          '4': [2580.35, 2691.53, 2816.58, 2945.81, 3034.74, 3130.62, 3209.81, 3280.68, 3351.55, 3466.86, 3583.57, 3691.97, 3807.31],
          '5': [2662.34, 2788.78, 2929.12, 3061.14, 3155.62, 3265.4, 3347.39, 3422.4, 3500.24, 3612.77, 3739.21, 3850.37, 3971.27],
          '6': [2791.56, 2933.3, 3069.46, 3230.67, 3347.39, 3448.8, 3537.75, 3616.96, 3700.31, 3821.22, 3951.82, 4078.26, 4204.71],
          '7': [2966.63, 3132, 3304.3, 3484.93, 3605.82, 3726.7, 3823.96, 4000.45, 4069.91, 4142.17, 4274.19, 4411.76, 4546.55],
          '8': [3193.14, 3320.98, 3452.97, 3590.55, 3726.7, 3854.55, 3993.51, 4135.23, 4270.01, 4415.92, 4571.54, 4716.05, 4868.93],
          '9': [3465.48, 3590.55, 3751.74, 3901.8, 4039.34, 4189.43, 4345.06, 4502.08, 4652.14, 4811.93, 4981.44, 5134.3, 5299.66],
          '10': [3821.22, 3993.51, 4165.81, 4338.1, 4518.75, 4678.53, 4841.12, 5035.65, 5196.83, 5380.26, 5562.29, 5749.87, 5926.35],
          '11': [4375.62, 4581.28, 4781.35, 4980.08, 5187.11, 5377.47, 5580.35, 5779.06, 5977.75, 6182.02, 6393.23, 6596.09, 6798.97],
          '12': [5198.22, 5451.11, 5687.34, 5934.68, 6157, 6401.57, 6647.53, 6876.79, 7100.51, 7336.74, 7568.76, 7802.21, 8039.83],
        },
      },
    },
  ],
  vergoedingen: [],
};
