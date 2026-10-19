import type { Cao } from '../types.js';

/**
 * Cao Nederlandse Baksteenindustrie 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Nederlandse Baksteenindustrie
 * https://www.fnv.nl/getmedia/15c56e02-6309-4858-89f9-6d17aa0556cd/64-baksteenindustrie-cao-01-10-2025-tm-30-09-2026-v19012026.pdf?ext=.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-01-01 (month) uit de bron
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoBaksteenindustrie2026: Cao = {
  id: 'baksteenindustrie',
  name: "Cao Nederlandse Baksteenindustrie",
  year: 2026,
  effectiveNote: "Cao 2025-10-01 t/m 2026-09-30; loontabel per 2026-01-01. Let op: Partijen: Vereniging Koninklijke Nederlandse Bouwkeramiek (KNB), FNV en CNV Cao loopt tot 1 oktober 2026; afspraken voor een nieuwe cao nog niet gevonden Verhoging 3,25% per 1-5-2025 komt uit de vorige cao (1-5-2024 tot 1-10-2025) De cao kent naast maandschalen ook 4-wekenschalen; dagdienst 40 uur per week met 13 roostervrije dagen Vakantietoeslag 8% met een minimum van € 2.279,68 bruto Pensioen bij BpfBOUW; vanaf 1-1-2026 betaalt de werknemer 30% van de premie (was 50%); premiepercentage niet gevonden",
  sourceUrl: "https://www.fnv.nl/getmedia/15c56e02-6309-4858-89f9-6d17aa0556cd/64-baksteenindustrie-cao-01-10-2025-tm-30-09-2026-v19012026.pdf?ext=.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.03,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      'II': [2665.25, 2703.92, 2742.7, 2782.97],
      'III': [2744.2, 2786, 2825.52, 2867.25],
      'IV': [2831.58, 2876.39, 2918.95, 2961.47, 3008.58],
      'V': [2960.65, 3010.07, 3054.16, 3102.01, 3149.83],
      'VI': [3116.42, 3167.31, 3216.68, 3266.84, 3317.7, 3366.34],
      'VII': [3316.96, 3370.85, 3427.87, 3484.82, 3539.53, 3594.22],
      'VIII': [3551.58, 3612.45, 3674.71, 3732.48, 3794.74, 3854.75, 3917.03],
      'IX': [3844.13, 3924.63, 3992.99, 4062.87, 4134.27, 4201.88, 4272.58],
    },
  },
  vergoedingen: [],
};
