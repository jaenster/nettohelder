import type { Cao } from '../types.js';

/**
 * Cao Maasvlakte Olie Terminal N.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Maasvlakte Olie Terminal N.V.
 * https://cao-kijker.awvn.nl/bestanden/4335_01-01-2025%20tot%2001-04-2028_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2025-01-01 (month) uit de bron
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoMaasvlakteOlieTerminal2026: Cao = {
  id: 'maasvlakte-olie-terminal',
  name: "Cao Maasvlakte Olie Terminal N.V.",
  year: 2026,
  effectiveNote: "Cao 2025-01-01 t/m 2028-03-31; loontabel per 2025-01-01. Let op: Eindbod van 4 december 2025, looptijd 1 januari 2025 t/m 31 maart 2028 Per 1 april 2026: verhoging gelijk aan de cao-contractloonstijging 2025 in de sector Chemie (AWVN-eindevaluatie), minimaal 3%; volgens het eindbod RAPL (maart 2026) is dat 3,57% Per 1 april 2027: verhoging gelijk aan de cao-contractloonstijging 2026 in de sector Chemie, zonder bodem; uitkomst onbekend Salarisschalen per 1 januari 2025 kennen minimum (75%), referentie (100%) en maximum (110%); deze drie zijn als treden opgenomen. Afgeronde eurobedragen; jaarsalaris is 14 x maandsalaris Voltijd 40 uur per week, via ATV-dagen verkort tot gemiddeld 37,7 uur (dagdienst) of 33,75 uur (ploegendienst) Jaarlijkse individuele performance-verhoging volgens personeelshandboek Pensioen: Flexibel Bedrijfspensioen MOT; werknemersbijdrage niet gevonden Verhoging per 1-4-2026 is gelijk aan de cao-loonstijging Chemie 2025; dat percentage is niet in de MOT-stukken vermeld, daarom niet in de berekening",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/4335_01-01-2025%20tot%2001-04-2028_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.0833,
  eindejaarsuitkeringPct: 0.0833,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      '1': [2651, 3534, 3888],
      '2': [2998, 3998, 4397],
      '3': [3386, 4515, 4967],
      '4': [3862, 5150, 5665],
      '5': [4437, 5916, 6508],
      '6': [5136, 6848, 7533],
    },
  },
  vergoedingen: [],
};
