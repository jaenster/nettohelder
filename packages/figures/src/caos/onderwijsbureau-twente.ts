import type { Cao } from '../types.js';

/**
 * Cao Onderwijsbureau Twente (ObT) 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Onderwijsbureau Twente (ObT)
 * https://cao-kijker.awvn.nl/bestanden/3010_01-09-2025%20tot%2001-09-2026_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2025-09-01 (month) uit de bron
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoOnderwijsbureauTwente2026: Cao = {
  id: 'onderwijsbureau-twente',
  name: "Cao Onderwijsbureau Twente (ObT)",
  year: 2026,
  effectiveNote: "Cao 2025-09-01 t/m 2026-08-31; loontabel per 2025-09-01. Let op: Cao ObT 2025-2026 (1-9-2025 t/m 31-8-2026); onderhandelingen voor de cao daarna starten in 2026, uitkomst niet gevonden Per 1-1-2026 Individueel Keuzebudget (IKB) voor vakantiegeld, eindejaarsuitkering en verlof; bestaande rechten blijven Er is een eindejaarsuitkering, maar de hoogte is niet gevonden; vakantiegeld hier op het wettelijk minimum van 8% gezet Schaal = salarisschalen ObT per 1-9-2025 (bijlage II, geldig t/m 31-8-2026): alleen minimum en maximum per schaal, als twee treden opgenomen; jaarlijks 1 periodiek van 3,5% tot het maximum Pensioenpremie niet gevonden",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/3010_01-09-2025%20tot%2001-09-2026_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      '1': [2376, 2767],
      '2': [2427, 3016],
      '3': [2427, 3262],
      '4': [2468, 3421],
      '5': [2519, 3582],
      '6': [2599, 3735],
      '7': [2760, 4093],
      '8': [3095, 4600],
      '9': [3425, 5102],
      '10': [3734, 5594],
      '11': [4352, 6507],
      '12': [4936, 7388],
      '13': [5769, 7998],
      '14': [6593, 8774],
    },
  },
  vergoedingen: [],
};
