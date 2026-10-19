import type { Cao } from '../types.js';

/**
 * Cao Rubber Resources B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Rubber Resources B.V.
 * https://www.fnv.nl/getmedia/89f08572-206a-4a98-a886-bdb1c793070d/1527-rubber-resources-cao-01-01-2025-tm-30-6-2026-v10022026.pdf?ext=.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-01-01 (month) uit de bron
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoRubberResources2026: Cao = {
  id: 'rubber-resources',
  name: "Cao Rubber Resources B.V.",
  year: 2026,
  effectiveNote: "Cao 2025-01-01 t/m 2026-06-30; loontabel per 2026-01-01. Let op: Vakantietoeslagpercentage niet in een bron gevonden; 8% is het wettelijk minimum Eindbod noemt een 'bodem van 16 euro' in de cao (vermoedelijk minimumuurloon), samen met het actualiseren van de functiegroepen; niet nader uitgewerkt Verhogingen gelden ook voor het MIO-personeel Pensioenpremie niet gevonden Maandsalarissen per 1-1-2026 (incl. 2%): cao-schalen C t/m I per schaaljaar, laatste trede is het schaalmaximum ('Max.'); aanloopschaal niet opgenomen. MIHO-schalen 9-16 alleen als [min, max] (periodiekbedrag per schaal in de cao)",
  sourceUrl: "https://www.fnv.nl/getmedia/89f08572-206a-4a98-a886-bdb1c793070d/1527-rubber-resources-cao-01-01-2025-tm-30-6-2026-v10022026.pdf?ext=.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 37.5,
    schalen: {
      'C': [2302.77, 2349.63, 2397.82, 2446.55, 2496.53, 2547.72, 2598.88],
      'D': [2393.36, 2446.55, 2501.14, 2557.14, 2611.99, 2668.39, 2724.81, 2781.2],
      'E': [2502.69, 2563.43, 2622.95, 2684.05, 2743.63, 2804.74, 2864.25, 2925.36, 2986.46],
      'F': [2646.46, 2712.26, 2779.67, 2845.44, 2911.25, 2977.16, 3044.47, 3110.68, 3176.92],
      'G': [2839.19, 2909.69, 2978.65, 3049.18, 3118.62, 3189.82, 3261.02, 3330.64, 3401.91, 3473.17],
      'H': [3022.54, 3105.94, 3189.82, 3273.7, 3357.54, 3441.47, 3525.36, 3609.19, 3693.1, 3776.99],
      'I': [3235.74, 3322.73, 3409.79, 3498.39, 3585.47, 3672.53, 3759.55, 3848.19, 3935.19, 4022.29, 4109.4],
      'MIHO 9': [3139.44, 3914.58],
      'MIHO 10': [3397.82, 4385.83],
      'MIHO 11': [3802.12, 5040.48],
      'MIHO 12': [4243.92, 5865.17],
      'MIHO 13': [4985.59, 6869.25],
      'MIHO 14': [5790.21, 8420.9],
      'MIHO 15': [6736.72, 10067.59],
      'MIHO 16': [7620.31, 11415.73],
    },
  },
  vergoedingen: [],
};
