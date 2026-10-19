import type { Cao } from '../types.js';

/**
 * Cao Papierfabriek Schut B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Papierfabriek Schut B.V.
 * https://cao-kijker.awvn.nl/bestanden/1570_01-07-2025%20tot%2001-07-2027_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-07-01 (month) uit de bron
 *   - Basistabel 1-1-2026 teruggerekend uit de tabel per 2026-07-01 (gedeeld door +3%)
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-07-01, 2027-01-01)
 *
 * Excluded: none stated
 */
export const caoPapierfabriekSchut2026: Cao = {
  id: 'papierfabriek-schut',
  name: "Cao Papierfabriek Schut B.V.",
  year: 2026,
  effectiveNote: "Cao 2025-07-01 t/m 2027-06-30; loontabel per 2026-07-01. Let op: Cao 1-7-2025 t/m 30-6-2027 Salarisschalen per 1-7-2026 in hele euro's: groepen A t/m H functiejarenschaal (aanloopschaal niet opgenomen); salarisbanden I t/m P als [minimum, functiesalaris maximum] - daarboven persoonlijk maximum (bijv. I € 5.526, P € 11.346) bij een richtbedrag-periodiek. Tabellen per 1-7-2025, 1-1-2026 en 1-1-2027 staan ook in de cao Arbeidsduur op jaarbasis gemiddeld 38 uur per week (40 uur met 12 ATV-dagen) Vakantietoeslag 8,33% van de verdiende maandinkomens, minimaal € 2.512 (1-1-2026), € 2.587 (1-7-2026), € 2.613 (1-1-2027); voorschot in mei, afrekening december Eindejaarsuitkering 8,33% van de verdiende maandinkomens, in december (of maandelijks op verzoek) Winstdeling 0,8% van 12x het inkomen bij winst na belasting van minimaal € 45.000 Pensioen PGB (middelloon, opbouw 1,634%): werknemersbijdrage 9% van de pensioengrondslag; pensioengevend salaris = 14 x (maandsalaris + ploegentoeslag + persoonlijke toeslag); franchise € 19.172 in 2026",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/1570_01-07-2025%20tot%2001-07-2027_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.0833,
  eindejaarsuitkeringPct: 0.0833,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 38,
    schalen: {
      'A': [2420.39, 2462.14, 2500.97, 2543.69, 2588.35, 2623.3],
      'B': [2475.73, 2522.33, 2565.05, 2614.56, 2663.11, 2709.71],
      'C': [2559.22, 2607.77, 2657.28, 2707.77, 2763.11, 2813.59, 2862.14],
      'D': [2653.4, 2706.8, 2761.17, 2813.59, 2865.05, 2913.59, 2968.93, 3023.3],
      'E': [2782.52, 2839.81, 2899.03, 2957.28, 3012.62, 3069.9, 3127.18, 3183.5, 3244.66],
      'F': [2930.1, 2997.09, 3058.25, 3116.5, 3183.5, 3248.54, 3310.68, 3375.73, 3436.89, 3503.88],
      'G': [3101.94, 3169.9, 3233.98, 3305.83, 3376.7, 3441.75, 3517.48, 3585.44, 3651.46, 3718.45, 3787.38],
      'H': [3289.32, 3362.14, 3433.98, 3473.79, 3578.64, 3651.46, 3722.33, 3794.17, 3870.87, 3941.75, 4015.53, 4086.41],
      'I': [3130.1, 4470.87],
      'K': [3455.34, 4935.92],
      'L': [3841.75, 5487.38],
      'M': [4308.74, 6155.34],
      'N': [4880.58, 6971.84],
      'O': [5573.79, 7962.14],
      'P': [6425.24, 9179.61],
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
          'A': [2493, 2536, 2576, 2620, 2666, 2702],
          'B': [2550, 2598, 2642, 2693, 2743, 2791],
          'C': [2636, 2686, 2737, 2789, 2846, 2898, 2948],
          'D': [2733, 2788, 2844, 2898, 2951, 3001, 3058, 3114],
          'E': [2866, 2925, 2986, 3046, 3103, 3162, 3221, 3279, 3342],
          'F': [3018, 3087, 3150, 3210, 3279, 3346, 3410, 3477, 3540, 3609],
          'G': [3195, 3265, 3331, 3405, 3478, 3545, 3623, 3693, 3761, 3830, 3901],
          'H': [3388, 3463, 3537, 3578, 3686, 3761, 3834, 3908, 3987, 4060, 4136, 4209],
          'I': [3224, 4605],
          'K': [3559, 5084],
          'L': [3957, 5652],
          'M': [4438, 6340],
          'N': [5027, 7181],
          'O': [5741, 8201],
          'P': [6618, 9455],
        },
      },
    },
    {
      from: '2027-01-01',
      note: "+1% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 38,
        schalen: {
          'A': [2517.93, 2561.36, 2601.76, 2646.2, 2692.66, 2729.02],
          'B': [2575.5, 2623.98, 2668.42, 2719.93, 2770.43, 2818.91],
          'C': [2662.36, 2712.86, 2764.37, 2816.89, 2874.46, 2926.98, 2977.48],
          'D': [2760.33, 2815.88, 2872.44, 2926.98, 2980.51, 3031.01, 3088.58, 3145.14],
          'E': [2894.66, 2954.25, 3015.86, 3076.46, 3134.03, 3193.62, 3253.21, 3311.79, 3375.42],
          'F': [3048.18, 3117.87, 3181.5, 3242.1, 3311.79, 3379.46, 3444.1, 3511.77, 3575.4, 3645.09],
          'G': [3226.95, 3297.65, 3364.31, 3439.05, 3512.78, 3580.45, 3659.23, 3729.93, 3798.61, 3868.3, 3940.01],
          'H': [3421.88, 3497.63, 3572.37, 3613.78, 3722.86, 3798.61, 3872.34, 3947.08, 4026.87, 4100.6, 4177.36, 4251.09],
          'I': [3256.24, 4651.05],
          'K': [3594.59, 5134.84],
          'L': [3996.57, 5708.52],
          'M': [4482.38, 6403.4],
          'N': [5077.27, 7252.81],
          'O': [5798.41, 8283.01],
          'P': [6684.18, 9549.55],
        },
      },
    },
  ],
  vergoedingen: [],
};
