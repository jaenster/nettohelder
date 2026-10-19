import type { Cao } from '../types.js';

/**
 * Cao HTL-DHT B.V. (v/h Deli HTL Tabak) 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao HTL-DHT B.V. (v/h Deli HTL Tabak)
 * https://www.fnv.nl/getmedia/dcf41a15-659a-4902-a675-2008101fbb15/632-htl-dht-cao-01-01-2026-tm-31-12-2026-v07102026.pdf?ext=.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-01-01 (month) uit de bron
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoHtlDht2026: Cao = {
  id: 'htl-dht',
  name: "Cao HTL-DHT B.V. (v/h Deli HTL Tabak)",
  year: 2026,
  effectiveNote: "Cao 2026-01-01 t/m 2026-12-31; loontabel per 2026-01-01. Let op: Salaristabel is de dagdiensttabel per 1-1-2026 (40 uur, 173,3 uur per maand); aparte tabellen voor 2-, verlengde 2-, 3- en 5-ploegendienst met toeslagen van 15% tot 27% Groep A is de instroomschaal (minimumloon); jeugdlonen: 19 jaar en jonger 80%, 20 jaar 90% Vakantietoeslag 8% en eindejaarsuitkering 8% van het jaarsalaris inclusief overwerk; vloer per 1-1-2026 € 2.514 (vakantietoeslag) en € 2.713 (eindejaarsuitkering) Verhoging 4% per 1-1-2025 komt uit het akkoord 2025 (AWVN cao-kijker), niet uit de cao-tekst 2026 Pensioen bij BPL: premie per 1-1-2024 26,4% van het pensioengevend salaris, werknemer 1/3 (8,8%); premie en franchise voor 2026 niet in de cao vermeld Looptijd 1 januari 2026 tot en met 31 december 2026",
  sourceUrl: "https://www.fnv.nl/getmedia/dcf41a15-659a-4902-a675-2008101fbb15/632-htl-dht-cao-01-01-2026-tm-31-12-2026-v07102026.pdf?ext=.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.08,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      'A': [2778, 2881, 2984, 3087],
      'B': [3245, 3296, 3347, 3398],
      'C': [3266, 3319, 3372, 3425],
      'D': [3299, 3354, 3410, 3465],
      'E': [3310, 3366, 3423, 3479, 3536],
      'F': [3338, 3400, 3462, 3524, 3586, 3648],
      'G': [3390, 3458, 3526, 3595, 3663, 3732, 3800],
      'H': [3445, 3520, 3596, 3671, 3747, 3822, 3898, 3973],
      'I': [3500, 3584, 3667, 3750, 3834, 3917, 4000, 4084, 4167],
    },
  },
  vergoedingen: [],
};
