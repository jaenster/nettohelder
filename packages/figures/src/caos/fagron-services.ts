import type { Cao } from '../types.js';

/**
 * Cao Fagron Services B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Fagron Services B.V.
 * https://cao-kijker.awvn.nl/bestanden/3865_01-07-2024%20tot%2001-07-2029_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2024-07-01 (month) uit de bron
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoFagronServices2026: Cao = {
  id: 'fagron-services',
  name: "Cao Fagron Services B.V.",
  year: 2026,
  effectiveNote: "Cao 2024-07-01 t/m 2029-06-30; loontabel per 2024-07-01. Let op: Looptijd 1-7-2024 t/m 30-6-2029; per 1-7-2024 3% (verwerkt in de schalen) Per 1 juli van elk jaar worden de lonen verhoogd met het jaargemiddelde van de afgeleide CPI alle huishoudens over het voorgaande kalenderjaar (CBS). Bij inflatie boven 5% overleg. De toegepaste percentages per 1-7-2025 en 1-7-2026 zijn niet gevonden, daarom geen increases opgenomen Salarisschalen per 1-7-2024 (38 uur) met aanvangssalaris en maximum per schaal; hier als twee treden opgenomen. Tussen aanvang en maximum groei met een vast aantal periodieken (5 tot 16) van een vast bedrag per schaal Schalen 1-8 kennen leeftijdsschalen tot de vakvolwassen leeftijd (23 jaar; schaal 9: 27, schaal 10: 29) Schalen gelden voor 38 uur per week; het voltijdrooster in de cao noemt 40 uur per week met roostervrije dagen, 7-ploegendienst gemiddeld 34,3 uur Vakantietoeslag 8%, voor werknemers van 23 jaar en ouder minimaal 8% van 12 maal het maximum van schaal 2",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/3865_01-07-2024%20tot%2001-07-2029_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 38,
    schalen: {
      '1': [2413.61, 2648.52],
      '2': [2421.25, 2757.78],
      '3': [2495.55, 2915.12],
      '4': [2535.98, 3172.98],
      '5': [2586.24, 3346.71],
      '6': [2687.86, 3553.21],
      '7': [2812.41, 3934.54],
      '8': [2978.49, 4551.87],
      '9': [3513.88, 5227.11],
      '10': [3947.65, 6127.44],
    },
  },
  vergoedingen: [],
};
