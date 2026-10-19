import type { Cao } from '../types.js';

/**
 * Cao Hutchison Ports Delta II B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Hutchison Ports Delta II B.V.
 * https://www.cnv.nl/documents/5406/DELTA_II_CAO2025-2027.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2025-04-01 (month) uit de bron
 *   - Basistabel 1-1-2026: tabel per 2025-04-01 verhoogd met +1,5% per 2026-01-01
 *   - Latere tabellen berekend uit de cao-verhogingen (2027-01-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoHutchisonPortsDeltaIi2026: Cao = {
  id: 'hutchison-ports-delta-ii',
  name: "Cao Hutchison Ports Delta II B.V.",
  year: 2026,
  effectiveNote: "Cao 2025-01-01 t/m 2027-12-31; loontabel per 2025-04-01. Let op: Naast de initiële verhogingen (1% per 1-4-2025, 1,5% per 1-1-2026 en 1,5% per 1-1-2027) jaarlijks per 1 januari volledige automatische prijscompensatie (CPI oktober-oktober, negatieve CPI wordt verrekend). Per 1-1-2025 was dat 1,60%; de prijscompensatie per 1-1-2026 en 1-1-2027 is niet gevonden en niet opgenomen Eenmalige uitkering € 1.500 bruto (deeltijd pro rata) bij afsluiten van de cao voor werknemers in dienst op 1-7-2025 Twee sectoren: operationele sector (volcontinurooster gemiddeld 32,55 uur per week) en beambtensector (gebruikelijke arbeidsduur 38,75 uur per week); daarom geen voltijduren opgenomen. Beambtensector krijgt een 13e maand (artikel 36), operationele sector niet Vakantietoeslag operationele sector 8% van twaalf basismaandsalarissen plus roosterurentoeslag, beambtensector 8,33% van twaalf basismaandsalarissen; uitbetaald in mei. 13e maand beambtensector 8,33% van het bruto basis-jaarinkomen (november) Pensioen via a.s.r. (beschikbare premie): eigen bijdrage operationele sector 6% van de pensioengrondslag (3,25% voor 50+ in dienst vóór 2015), beambtensector 5% (3,1% voor in dienst vóór 2015); franchise niet gevonden Salarisgebouwen per 1-4-2025 (incl. 1% cao-verhoging) uit bijlage 3a (operationele sector, groepen 0, A, B1-B3, C, D) en 3b (beambtensector, groepen 0-5); per maand. Treden zijn dienstjaren; bij de operationele sector is de laatste trede schaal 13A (prestatieschaal).",
  sourceUrl: "https://www.cnv.nl/documents/5406/DELTA_II_CAO2025-2027.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      'Operationeel 0': [2867.38, 2939.44, 3010.49, 3079.51, 3159.7, 3225.67, 3293.68, 3364.73, 3439.84, 3505.81, 3584.98],
      'Operationeel B1': [3128.23, 3318.04, 3503.78, 3698.66, 3889.48, 4078.27, 4265.03, 4451.79, 4644.64, 4835.46, 5022.22, 5214.06],
      'Operationeel B2': [3222.63, 3411.42, 3609.34, 3805.24, 3998.09, 4193.98, 4388.86, 4581.71, 4780.65, 4968.43, 5168.38, 5361.23],
      'Operationeel B3': [3304.84, 3504.8, 3709.83, 3906.74, 4107.71, 4310.71, 4514.72, 4709.6, 4908.54, 5109.51, 5312.51, 5515.51],
      'Operationeel C': [3390.1, 3591.07, 3792.04, 3986.92, 4191.95, 4389.88, 4582.73, 4786.74, 4985.68, 5189.7, 5390.67, 5588.59],
      'Operationeel D': [3829.6, 4044.78, 4267.06, 4490.36, 4708.59, 4928.84, 5148.08, 5364.28, 5588.59, 5810.88, 6030.12, 6248.34],
      'Operationeel A': [3120.11, 3257.14, 3392.13, 3534.23, 3670.24, 3806.25, 3944.29, 4088.42, 4224.43, 4362.47, 4500.51],
      'Beambten 0': [2499.95, 2616.67, 2631.9, 2842, 2951.62, 3063.27, 3181.01, 3286.57, 3402.28],
      'Beambten 1': [2721.22, 2834.9, 2950.61, 3060.23, 3182.03, 3288.6, 3409.39, 3515.96, 3528.14, 3744.34, 3959.52],
      'Beambten 2': [2934.37, 3049.06, 3160.71, 3272.36, 3380.97, 3496.68, 3609.34, 3719.98, 3834.67, 3945.31, 4056.96, 4174.7, 4286.35],
      'Beambten 3': [2960.76, 3087.63, 3223.64, 3353.56, 3486.53, 3561.64, 3750.43, 3885.42, 4012.3, 4145.26, 4279.24, 4403.07, 4537.05, 4666.97, 4800.95, 4929.86],
      'Beambten 4': [3335.29, 3483.48, 3626.6, 3765.65, 3911.81, 4050.87, 4196.01, 4338.11, 4488.33, 4626.37, 4768.47, 4910.57, 5050.64, 5198.83, 5341.95, 5488.11],
      'Beambten 5': [3621.52, 3780.88, 3932.11, 4092.48, 4245.75, 4403.07, 4562.43, 4721.78, 4880.12, 5032.37, 5189.7, 5344.99, 5506.38, 5658.63, 5819, 5971.25, 6130.6, 6287.93],
    },
  },
  periods: [
    {
      from: '2027-01-01',
      note: "+1,5% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          'Operationeel 0': [2910.39, 2983.53, 3055.65, 3125.7, 3207.09, 3274.06, 3343.08, 3415.2, 3491.43, 3558.4, 3638.75],
          'Operationeel B1': [3175.15, 3367.81, 3556.34, 3754.14, 3947.82, 4139.44, 4329.01, 4518.57, 4714.31, 4907.99, 5097.55, 5292.27],
          'Operationeel B2': [3270.96, 3462.59, 3663.48, 3862.31, 4058.06, 4256.89, 4454.69, 4650.44, 4852.36, 5042.95, 5245.91, 5441.65],
          'Operationeel B3': [3354.41, 3557.37, 3765.47, 3965.34, 4169.32, 4375.37, 4582.44, 4780.24, 4982.17, 5186.15, 5392.2, 5598.24],
          'Operationeel C': [3440.95, 3644.94, 3848.92, 4046.72, 4254.83, 4455.72, 4651.47, 4858.54, 5060.47, 5267.54, 5471.52, 5672.42],
          'Operationeel D': [3887.04, 4105.45, 4331.07, 4557.72, 4779.21, 5002.77, 5225.3, 5444.74, 5672.42, 5898.04, 6120.57, 6342.07],
          'Operationeel A': [3166.91, 3305.99, 3443.01, 3587.24, 3725.29, 3863.34, 4003.45, 4149.75, 4287.8, 4427.91, 4568.02],
          'Beambten 0': [2537.44, 2655.92, 2671.37, 2884.63, 2995.89, 3109.22, 3228.73, 3335.87, 3453.31],
          'Beambten 1': [2762.03, 2877.42, 2994.86, 3106.13, 3229.76, 3337.93, 3460.53, 3568.7, 3581.06, 3800.5, 4018.91],
          'Beambten 2': [2978.38, 3094.8, 3208.12, 3321.45, 3431.68, 3549.13, 3663.48, 3775.77, 3892.19, 4004.48, 4117.81, 4237.32, 4350.64],
          'Beambten 3': [3005.17, 3133.94, 3271.99, 3403.86, 3538.82, 3615.06, 3806.68, 3943.7, 4072.48, 4207.44, 4343.43, 4469.12, 4605.11, 4736.97, 4872.96, 5003.8],
          'Beambten 4': [3385.32, 3535.73, 3680.99, 3822.13, 3970.49, 4111.63, 4258.95, 4403.18, 4555.65, 4695.77, 4840, 4984.23, 5126.4, 5276.81, 5422.07, 5570.43],
          'Beambten 5': [3675.84, 3837.59, 3991.09, 4153.87, 4309.43, 4469.12, 4630.86, 4792.61, 4953.32, 5107.86, 5267.54, 5425.16, 5588.97, 5743.5, 5906.28, 6060.81, 6222.56, 6382.24],
        },
      },
    },
  ],
  vergoedingen: [],
};
