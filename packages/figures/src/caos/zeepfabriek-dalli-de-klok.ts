import type { Cao } from '../types.js';

/**
 * Cao Zeepfabriek dalli-De Klok B.V. Heerde 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Zeepfabriek dalli-De Klok B.V. Heerde
 * https://cao-kijker.awvn.nl/bestanden/0145_01-07-2024%20tot%2001-07-2026_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2025-07-01 (month) uit de bron
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoZeepfabriekDalliDeKlok2026: Cao = {
  id: 'zeepfabriek-dalli-de-klok',
  name: "Cao Zeepfabriek dalli-De Klok B.V. Heerde",
  year: 2026,
  effectiveNote: "Cao 2024-07-01 t/m 2026-06-30; loontabel per 2025-07-01. Let op: Cao liep tot en met 30 juni 2026; onderhandelingen over een nieuwe cao liepen nog in september 2026 (werkgeversbod volgens CNV minder dan 1% bij een looptijd van één jaar). Eerdere verhoging: 4,5% per 1 juli 2024. Per 1 januari 2026 is de ploegentoeslag volledig pensioengevend (5-ploegen 30%, 3-ploegen 21%, 2-ploegen 15%). Eindejaarsuitkering: 8% van 12x het genoten maandinkomen, in december. Vakantiegeld en eindejaarsuitkering maken deel uit van een individueel keuzebudget. Dagdienst 40 uur, 2- en 3-ploegendienst gemiddeld 38 uur, 5-ploegendienst 33,6 uur per week. Pensioen via Pensioenfonds PGB met een werknemersbijdrage; percentage niet in de cao vermeld.",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/0145_01-07-2024%20tot%2001-07-2026_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.08,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      'I': [2343.01, 2474.8, 2606.59, 2673.32, 2731.62, 2792.45, 2849.88, 2905.6],
      'II': [2363.29, 2496.76, 2630.24, 2696.95, 2753.57, 2811.03, 2868.45, 2928.39, 2984.99],
      'III': [2396.72, 2532.27, 2668.22, 2734.48, 2802.57, 2865.95, 2935.31, 2998.51, 3069.32],
      'IV': [2438.51, 2576.15, 2713.91, 2782.32, 2849.88, 2914.03, 2979.1, 3045.3, 3110.85, 3177.56],
      'V': [2502.68, 2643.73, 2784.83, 2855.77, 2940.21, 3022.2, 3101.55, 3178.07, 3266.16, 3347.38],
      'VI': [2606.59, 2753.57, 2901.4, 2974.87, 3055.96, 3138.77, 3220.7, 3304.3, 3385.4, 3466.5, 3549.24],
      'VII': [2743.38, 2898.89, 3053.43, 3131.11, 3229.14, 3327.11, 3425.93, 3525.62, 3623.58, 3719.05, 3818.73],
      'VIII': [2927.59, 3093.98, 3258.69, 3342.31, 3441.98, 3538.27, 3635.44, 3735.11, 3832.21, 3929.34, 4027.34, 4126.99],
      'IX': [3181.85, 3362.59, 3542.47, 3632.06, 3747.78, 3860.11, 3976.69, 4089.02, 4203.04, 4318.77, 4431.94, 4548.12],
      'X': [3440.28, 3634.56, 3829.69, 3927.64, 4043.39, 4156.61, 4270.63, 4383.81, 4499.53, 4612.75, 4727.54, 4842.48, 4957.36],
      'XI': [3839.85, 4056.96, 4274.81, 4383.8, 4506.96, 4627.96, 4750.39, 4872.89, 4995.36, 5117.86, 5240.34, 5361.95, 5482.8, 5606.08],
      'XII': [4300.17, 4544.3, 4788.41, 4910.88, 5041.01, 5171.02, 5299.44, 5430.35, 5561.3, 5691.38, 5821.44, 5949.86, 6082.5, 6210.88, 6341.79],
    },
  },
  vergoedingen: [],
};
