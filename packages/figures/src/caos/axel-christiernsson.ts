import type { Cao } from '../types.js';

/**
 * Cao Axel Christiernsson B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Axel Christiernsson B.V.
 * https://cao-kijker.awvn.nl/bestanden/1342_01-04-2026%20tot%2001-04-2027_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-04-01 (month) uit de bron
 *   - Basistabel 1-1-2026 teruggerekend uit de tabel per 2026-04-01 (gedeeld door +3%)
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-04-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoAxelChristiernsson2026: Cao = {
  id: 'axel-christiernsson',
  name: "Cao Axel Christiernsson B.V.",
  year: 2026,
  effectiveNote: "Cao 2026-04-01 t/m 2027-03-31; loontabel per 2026-04-01. Let op: Cao 1-4-2026 t/m 31-3-2027 is een verlenging van de cao 2025-2026 (onderhandelingsresultaat 9 april 2026, door leden goedgekeurd); salarisschalen en lonen per 1-4-2026 +3% Salarisschalen per 1 april 2026 (inclusief +3%), schalen 1 t/m 10 met tredes 0 t/m 14 (bedragen per maand) Winstdelingsregeling: over 2025 en 2026 een bruto uitkering van 3% van het bedrijfsresultaat (local EBITDA) gedeeld door het aantal fte; bedrag per persoon onbekend Voltijd 40 uur per week in dag- en 2-ploegendienst; 3-ploegendienst 37,5 uur Minimumvakantietoeslag gekoppeld aan salarisgroep 1 Basispensioenregeling bij Nationale-Nederlanden (1-1-2025 t/m 31-12-2027) met eigen bijdrage van 6% van de pensioengrondslag; franchise niet gevonden",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/1342_01-04-2026%20tot%2001-04-2027_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      '1': [2584.47, 2638.83, 2695.15, 2753.4, 2812.62, 2872.82, 2934.95, 2997.09, 3061.17, 3126.21],
      '2': [2717.48, 2780.58, 2844.66, 2910.68, 2978.64, 3047.57, 3118.45, 3191.26, 3265.05, 3339.81, 3418.45],
      '3': [2781.55, 2846.6, 2912.62, 2980.58, 3050.49, 3122.33, 3194.17, 3268.93, 3345.63, 3422.33, 3502.91, 3584.47],
      '4': [2877.67, 2947.57, 3018.45, 3093.2, 3167.96, 3244.66, 3324.27, 3403.88, 3487.38, 3571.84, 3658.25, 3747.57, 3838.83],
      '5': [2993.2, 3068.93, 3146.6, 3226.21, 3307.77, 3390.29, 3476.7, 3564.08, 3653.4, 3744.66, 3839.81, 3936.89, 4031.07],
      '6': [3133.98, 3216.5, 3301.94, 3388.35, 3478.64, 3569.9, 3664.08, 3759.22, 3859.22, 3960.19, 4064.08, 4171.84, 4273.79],
      '7': [3298.06, 3387.38, 3478.64, 3572.82, 3668.93, 3767.96, 3869.9, 3974.76, 4081.55, 4192.23, 4305.83, 4420.39, 4528.16],
      '8': [3469.9, 3563.11, 3658.25, 3757.28, 3858.25, 3962.14, 4068.93, 4178.64, 4291.26, 4406.8, 4525.24, 4646.6, 4770.87, 4886.41],
      '9': [3803.88, 3904.85, 4006.8, 4112.62, 4221.36, 4331.07, 4445.63, 4563.11, 4682.52, 4805.83, 4933.01, 5062.14, 5195.15, 5316.5],
      '10': [4051.46, 4159.22, 4268.93, 4382.52, 4500, 4619.42, 4741.75, 4867.96, 4997.09, 5130.1, 5266.99, 5406.8, 5550.49, 5698.06, 5828.16],
    },
  },
  periods: [
    {
      from: '2026-04-01',
      note: "+3% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          '1': [2662, 2718, 2776, 2836, 2897, 2959, 3023, 3087, 3153, 3220],
          '2': [2799, 2864, 2930, 2998, 3068, 3139, 3212, 3287, 3363, 3440, 3521],
          '3': [2865, 2932, 3000, 3070, 3142, 3216, 3290, 3367, 3446, 3525, 3608, 3692],
          '4': [2964, 3036, 3109, 3186, 3263, 3342, 3424, 3506, 3592, 3679, 3768, 3860, 3954],
          '5': [3083, 3161, 3241, 3323, 3407, 3492, 3581, 3671, 3763, 3857, 3955, 4055, 4152],
          '6': [3228, 3313, 3401, 3490, 3583, 3677, 3774, 3872, 3975, 4079, 4186, 4297, 4402],
          '7': [3397, 3489, 3583, 3680, 3779, 3881, 3986, 4094, 4204, 4318, 4435, 4553, 4664],
          '8': [3574, 3670, 3768, 3870, 3974, 4081, 4191, 4304, 4420, 4539, 4661, 4786, 4914, 5033],
          '9': [3918, 4022, 4127, 4236, 4348, 4461, 4579, 4700, 4823, 4950, 5081, 5214, 5351, 5476],
          '10': [4173, 4284, 4397, 4514, 4635, 4758, 4884, 5014, 5147, 5284, 5425, 5569, 5717, 5869, 6003],
        },
      },
    },
  ],
  vergoedingen: [],
};
