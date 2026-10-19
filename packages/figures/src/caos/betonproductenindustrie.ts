import type { Cao } from '../types.js';

/**
 * Cao Betonproductenindustrie 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Betonproductenindustrie
 * https://www.cnv.nl/bouw/steen-en-glas/cao-betonproductenindustrie/nieuws/cao-resultaat-betonproductenindustrie-2026-07-15/
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-01-01 (month) uit de bron
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-07-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoBetonproductenindustrie2026: Cao = {
  id: 'betonproductenindustrie',
  name: "Cao Betonproductenindustrie",
  year: 2026,
  effectiveNote: "Cao 2026-07-01 t/m 2027-06-30; loontabel per 2026-01-01. Let op: Onderhandelingsresultaat 8 juli 2026 met positief stemadvies van CNV; definitieve uitslag van de ledenraadpleging niet gevonden Verhoging van 3,5% per 1 juli 2026 geldt volgens de bron voor de salarissen in de cao-schalen; of feitelijke salarissen boven de schaal ook stijgen is niet vermeld Per 1 januari 2025 zijn twee extra verlofdagen omgezet in een structurele verhoging van 0,84% (bovenop 3,5%), tenzij de werkgever dat al eerder deed Eenmalige uitkering van € 50 bruto in januari 2025 alleen voor wie op 1 januari 2024 en 1 januari 2025 in dienst was (compensatie pensioenopbouw 2024) Loontabel is de maandtabel per 1 januari 2026 (0-lijn plus periodieken); er bestaat ook een 4-wekentabel en een extra periodiek boven het maximum Jeugdlonen: 16 jaar 60% t/m 20 jaar 100% van het schaalsalaris Arbeidsduur 38 uur per week gemiddeld op jaarbasis (40-urige week met 12 roostervrije dagen) Pensioenregeling en werknemerspremie niet gevonden",
  sourceUrl: "https://www.cnv.nl/bouw/steen-en-glas/cao-betonproductenindustrie/nieuws/cao-resultaat-betonproductenindustrie-2026-07-15/",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 38,
    schalen: {
      'I': [2582, 2595, 2606, 2619],
      'II': [2589, 2605, 2639, 2675, 2711],
      'III': [2646, 2684, 2718, 2754, 2787],
      'IV': [2720, 2756, 2794, 2836, 2875, 2909],
      'V': [2791, 2834, 2873, 2909, 2950, 2990],
      'VI': [2875, 2911, 2953, 2993, 3033, 3073, 3112],
      'VII': [2956, 2996, 3038, 3076, 3117, 3161, 3200],
    },
  },
  periods: [
    {
      from: '2026-07-01',
      note: "+3,5% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 38,
        schalen: {
          'I': [2672.37, 2685.83, 2697.21, 2710.67],
          'II': [2679.62, 2696.18, 2731.37, 2768.63, 2805.89],
          'III': [2738.61, 2777.94, 2813.13, 2850.39, 2884.55],
          'IV': [2815.2, 2852.46, 2891.79, 2935.26, 2975.63, 3010.82],
          'V': [2888.69, 2933.19, 2973.56, 3010.82, 3053.25, 3094.65],
          'VI': [2975.63, 3012.89, 3056.36, 3097.76, 3139.16, 3180.56, 3220.92],
          'VII': [3059.46, 3100.86, 3144.33, 3183.66, 3226.1, 3271.64, 3312],
        },
      },
    },
  ],
  vergoedingen: [],
};
