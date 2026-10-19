import type { Cao } from '../types.js';

/**
 * Cao Nationale Opera & Ballet 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Nationale Opera & Ballet
 * https://cao-kijker.awvn.nl/bestanden/1648_01-07-2025%20tot%2001-07-2027_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-07-01 (month) uit de bron
 *   - Basistabel 1-1-2026 teruggerekend uit de tabel per 2026-07-01 (gedeeld door +3%)
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-07-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoNationaleOperaBallet2026: Cao = {
  id: 'nationale-opera-ballet',
  name: "Cao Nationale Opera & Ballet",
  year: 2026,
  effectiveNote: "Cao 2025-07-01 t/m 2027-06-30; loontabel per 2026-07-01. Let op: Theatermedewerkers en buffethoofden kregen per 1 juli 2025 4% i.p.v. 3%. Per 1 juli 2025 is de opbouw van schalen A t/m E gewijzigd (schaal A start op het wettelijk minimumloon). Pensioen via ABP; het werknemersdeel van de premie staat niet in de cao. Aparte tabellen voor Koor, Extra koor (uurlonen) en werknemers op basis van beschikbaarheid. Schaal = salaristabel NO&B exclusief Koor per 1-7-2026 t/m 30-6-2027 (bijlage V, afgerond op hele euro per maand); tabellen Koor, Extra koor en beschikbaarheidskrachten niet opgenomen",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/1648_01-07-2025%20tot%2001-07-2027_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 38,
    schalen: {
      'A': [2442.72, 2508.74, 2573.79, 2639.81, 2705.83, 2770.87, 2836.89],
      'B': [2480.58, 2550.49, 2620.39, 2690.29, 2759.22, 2829.13, 2899.03, 2967.96],
      'C': [2526.21, 2598.06, 2669.9, 2741.75, 2814.56, 2888.35, 2959.22, 3032.04, 3104.85],
      'D': [2573.79, 2654.37, 2733.98, 2813.59, 2894.17, 2972.82, 3052.43, 3132.04, 3211.65, 3292.23],
      'E': [2659.22, 2744.66, 2831.07, 2917.48, 3002.91, 3089.32, 3173.79, 3260.19, 3345.63, 3432.04, 3517.48],
      'F': [2761.17, 2887.38, 3010.68, 3129.13, 3237.86, 3347.57, 3448.54, 3545.63, 3638.83, 3724.27, 3807.77],
      'G': [2991.26, 3129.13, 3260.19, 3390.29, 3509.71, 3629.13, 3742.72, 3846.6, 3952.43, 4044.66, 4131.07],
      'H': [3260.19, 3388.35, 3511.65, 3633.01, 3751.46, 3859.22, 3967.96, 4068.93, 4167.96, 4261.17, 4353.4, 4438.83, 4519.42],
      'I': [3560.19, 3701.94, 3834.95, 3968.93, 4096.12, 4222.33, 4334.95, 4447.57, 4559.22, 4660.19, 4759.22, 4853.4, 4942.72],
      'J': [3908.74, 4065.05, 4222.33, 4365.05, 4507.77, 4641.75, 4772.82, 4901.94, 5020.39, 5133.98, 5242.72, 5346.6, 5445.63],
      'K': [4336.89, 4514.56, 4685.44, 4850.49, 5006.8, 5159.22, 5305.83, 5445.63, 5578.64, 5709.71, 5832.04, 5950.49, 6059.22],
      'L': [4850.49, 5047.57, 5239.81, 5428.16, 5602.91, 5774.76, 5937.86, 6098.06, 6248.54, 6394.17, 6533.98, 6664.08, 6789.32],
      'M': [5457.28, 5682.52, 5899.03, 6108.74, 6313.59, 6507.77, 6698.06, 6872.82, 7048.54, 7211.65, 7366.02, 7520.39, 7659.22],
      'N': [6204.85, 6462.14, 6713.59, 6954.37, 7185.44, 7405.83, 7621.36, 7826.21, 8023.3, 8211.65, 8395.15, 8563.11, 8725.24],
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
          'A': [2516, 2584, 2651, 2719, 2787, 2854, 2922],
          'B': [2555, 2627, 2699, 2771, 2842, 2914, 2986, 3057],
          'C': [2602, 2676, 2750, 2824, 2899, 2975, 3048, 3123, 3198],
          'D': [2651, 2734, 2816, 2898, 2981, 3062, 3144, 3226, 3308, 3391],
          'E': [2739, 2827, 2916, 3005, 3093, 3182, 3269, 3358, 3446, 3535, 3623],
          'F': [2844, 2974, 3101, 3223, 3335, 3448, 3552, 3652, 3748, 3836, 3922],
          'G': [3081, 3223, 3358, 3492, 3615, 3738, 3855, 3962, 4071, 4166, 4255],
          'H': [3358, 3490, 3617, 3742, 3864, 3975, 4087, 4191, 4293, 4389, 4484, 4572, 4655],
          'I': [3667, 3813, 3950, 4088, 4219, 4349, 4465, 4581, 4696, 4800, 4902, 4999, 5091],
          'J': [4026, 4187, 4349, 4496, 4643, 4781, 4916, 5049, 5171, 5288, 5400, 5507, 5609],
          'K': [4467, 4650, 4826, 4996, 5157, 5314, 5465, 5609, 5746, 5881, 6007, 6129, 6241],
          'L': [4996, 5199, 5397, 5591, 5771, 5948, 6116, 6281, 6436, 6586, 6730, 6864, 6993],
          'M': [5621, 5853, 6076, 6292, 6503, 6703, 6899, 7079, 7260, 7428, 7587, 7746, 7889],
          'N': [6391, 6656, 6915, 7163, 7401, 7628, 7850, 8061, 8264, 8458, 8647, 8820, 8987],
        },
      },
    },
  ],
  vergoedingen: [],
};
