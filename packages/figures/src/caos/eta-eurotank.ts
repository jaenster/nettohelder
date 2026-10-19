import type { Cao } from '../types.js';

/**
 * Cao Eurotank Amsterdam B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Eurotank Amsterdam B.V.
 * https://cao-kijker.awvn.nl/bestanden/4292_01-01-2025%20tot%2001-01-2027_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-01-01 (month) uit de bron
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoEtaEurotank2026: Cao = {
  id: 'eta-eurotank',
  name: "Cao Eurotank Amsterdam B.V.",
  year: 2026,
  effectiveNote: "Cao 2025-01-01 t/m 2026-12-31; loontabel per 2026-01-01. Let op: Cao 1-1-2025 t/m 31-12-2026, getekend 18-2-2026 Vakantietoeslag 8,33% van het jaarsalaris per 1 januari Per 1-1-2026 structureel € 50 bruto per maand op salarissen en schalen; geen collectieve verhoging in 2025, wel eenmalig € 2.000 bruto in augustus 2025 (pro rata parttime) voor wie op 1-1-2025 en 1-7-2025 in dienst was Jaarlijkse beoordelingsafhankelijke verhoging van 0-4% binnen de salarisband Dagdienst 40 uur per week, volcontinudienst gemiddeld 31,59 uur Salaristabel (bijlage B) per 1-1-2026 kent alleen een minimum en maximum per schaal (A t/m K); opgenomen als [min, max]. Volgens de tabel bevat deze naast € 50 ook 1,94% indexering per 1-1-2026 Pensioen: werknemersbijdrage 3% van de pensioengrondslag vanaf 1-1-2026 voor wie op of na 1-1-2011 in dienst trad (daarvoor 5%); voor wie vóór 2011 in dienst trad betaalt de werkgever het werknemersdeel. Fonds en franchise staan niet in de cao, daarom niet als pensioenveld opgenomen",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/4292_01-01-2025%20tot%2001-01-2027_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.0833,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      'A': [2969.13, 4850.9],
      'B': [3074.29, 5073.58],
      'C': [3152.3, 5254.7],
      'D': [3276.15, 5408.88],
      'E': [3527.17, 5768.66],
      'F': [4036.03, 6225.62],
      'G': [4254.82, 6500.1],
      'H': [4575.41, 6991.88],
      'I': [5031.68, 8324.97],
      'J': [5669.44, 9291.9],
      'K': [6610.82, 10840.13],
    },
  },
  vergoedingen: [],
};
