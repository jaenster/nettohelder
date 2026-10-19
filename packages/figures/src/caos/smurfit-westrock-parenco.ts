import type { Cao } from '../types.js';

/**
 * Cao Smurfit Westrock Parenco B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Smurfit Westrock Parenco B.V.
 * https://www.cnv.nl/industrie/papier-en-karton/cao-smurfit-westrock-parenco/nieuws/nieuwe-cao-smurfit-westrock-parenco-is-een-feit-cnv-leden-stemmen-met-grote-meerderheid-in-2026-08-28/
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2025-04-01 (month) uit de bron
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-02-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoSmurfitWestrockParenco2026: Cao = {
  id: 'smurfit-westrock-parenco',
  name: "Cao Smurfit Westrock Parenco B.V.",
  year: 2026,
  effectiveNote: "Cao 2026-02-01 t/m 2027-04-30; loontabel per 2025-04-01. Let op: Aangepast eindbod aanvaard door CNV- en FNV-leden (ledenraadpleging 25 augustus 2026); looptijd 1-2-2026 t/m 30-4-2027 Per 1-2-2026 verhoging van alle cao-schalen met 3,5% RVU-regeling voor zware functies, maximaal 3 jaar voor AOW-datum; evaluatie in 2028 Vakantietoeslag 8% van het jaarinkomen, 13e maand 8 1/3% van de verdiende maandinkomens (eind januari), arbeidsduur gemiddeld 36 uur per week: uit de vorige cao-tekst 2024-2026 Collectieve bonusregeling bestaat, hoogte afhankelijk van resultaten; niet opgenomen Pensioen bij PGB, werknemerspremie niet in de cao Salaristabel per 1-4-2025 (36 uur, geldig t/m 31-1-2026) uit de cao 2024-2026; per 1-2-2026 worden alle schalen met 3,5% verhoogd (bron tabel: https://cao-kijker.awvn.nl/bestanden/1895_01-04-2024%20tot%2001-02-2026_cao.pdf)",
  sourceUrl: "https://www.cnv.nl/industrie/papier-en-karton/cao-smurfit-westrock-parenco/nieuws/nieuwe-cao-smurfit-westrock-parenco-is-een-feit-cnv-leden-stemmen-met-grote-meerderheid-in-2026-08-28/",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 36,
    schalen: {
      '1': [2428, 2466, 2513, 2559, 2611, 2661, 2705],
      '2': [2505, 2555, 2605, 2661, 2713, 2771, 2824, 2865],
      '3': [2618, 2671, 2725, 2791, 2838, 2905, 2960, 3002],
      '4': [2747, 2813, 2873, 2937, 3003, 3061, 3123, 3173],
      '5': [2912, 2971, 3043, 3108, 3176, 3236, 3311, 3371, 3423],
      '6': [3088, 3168, 3228, 3309, 3373, 3446, 3518, 3585, 3657, 3712],
      '7': [3293, 3368, 3442, 3531, 3594, 3664, 3751, 3825, 3903, 3977, 4036],
      '8': [3509, 3589, 3664, 3753, 3835, 3921, 3994, 4079, 4167, 4245, 4327, 4388],
      '9': [3617, 3732, 3842, 3957, 4072, 4183, 4297, 4410, 4526, 4639, 4751, 4820],
      '10': [3826, 3941, 4057, 4174, 4289, 4401, 4518, 4635, 4749, 4864, 4979, 5084, 5163],
      '11': [4276, 4388, 4505, 4624, 4740, 4859, 4973, 5092, 5210, 5324, 5441, 5558, 5670, 5755],
      '12': [4768, 4897, 5029, 5159, 5285, 5417, 5548, 5679, 5809, 5942, 6069, 6198, 6327, 6459, 6556],
      '13': [5455, 5601, 5750, 5896, 6045, 6189, 6336, 6483, 6627, 6779, 6925, 7072, 7212, 7362, 7514, 7626],
      '14': [6261, 6437, 6613, 6793, 6969, 7149, 7326, 7498, 7679, 7853, 8031, 8212, 8385, 8562, 8738, 8910, 9046],
    },
  },
  periods: [
    {
      from: '2026-02-01',
      note: "+3,5% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 36,
        schalen: {
          '1': [2512.98, 2552.31, 2600.96, 2648.57, 2702.39, 2754.14, 2799.68],
          '2': [2592.68, 2644.43, 2696.18, 2754.14, 2807.96, 2867.99, 2922.84, 2965.28],
          '3': [2709.63, 2764.49, 2820.38, 2888.69, 2937.33, 3006.68, 3063.6, 3107.07],
          '4': [2843.15, 2911.46, 2973.56, 3039.8, 3108.11, 3168.14, 3232.31, 3284.06],
          '5': [3013.92, 3074.99, 3149.51, 3216.78, 3287.16, 3349.26, 3426.89, 3488.99, 3542.81],
          '6': [3196.08, 3278.88, 3340.98, 3424.82, 3491.06, 3566.61, 3641.13, 3710.48, 3785, 3841.92],
          '7': [3408.26, 3485.88, 3562.47, 3654.59, 3719.79, 3792.24, 3882.29, 3958.88, 4039.61, 4116.2, 4177.26],
          '8': [3631.82, 3714.62, 3792.24, 3884.36, 3969.23, 4058.24, 4133.79, 4221.77, 4312.85, 4393.58, 4478.45, 4541.58],
          '9': [3743.6, 3862.62, 3976.47, 4095.5, 4214.52, 4329.41, 4447.4, 4564.35, 4684.41, 4801.37, 4917.29, 4988.7],
          '10': [3959.91, 4078.94, 4199, 4320.09, 4439.12, 4555.04, 4676.13, 4797.23, 4915.22, 5034.24, 5153.27, 5261.94, 5343.71],
          '11': [4425.66, 4541.58, 4662.68, 4785.84, 4905.9, 5029.07, 5147.06, 5270.22, 5392.35, 5510.34, 5631.44, 5752.53, 5868.45, 5956.43],
          '12': [4934.88, 5068.4, 5205.02, 5339.57, 5469.98, 5606.6, 5742.18, 5877.77, 6012.32, 6149.97, 6281.42, 6414.93, 6548.45, 6685.07, 6785.46],
          '13': [5645.93, 5797.04, 5951.25, 6102.36, 6256.58, 6405.62, 6557.76, 6709.91, 6858.95, 7016.27, 7167.38, 7319.52, 7464.42, 7619.67, 7776.99, 7892.91],
          '14': [6480.14, 6662.3, 6844.46, 7030.76, 7212.92, 7399.22, 7582.41, 7760.43, 7947.77, 8127.86, 8312.09, 8499.42, 8678.48, 8861.67, 9043.83, 9221.85, 9362.61],
        },
      },
    },
  ],
  vergoedingen: [],
};
