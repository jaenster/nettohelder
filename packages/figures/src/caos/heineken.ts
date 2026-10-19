import type { Cao } from '../types.js';

/**
 * Cao Heineken 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Heineken
 * https://cao-kijker.awvn.nl/bestanden/0662_01-01-2025%20tot%2001-01-2027_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-01-01 (month) uit de bron
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoHeineken2026: Cao = {
  id: 'heineken',
  name: "Cao Heineken",
  year: 2026,
  effectiveNote: "Cao 2025-01-01 t/m 2026-12-31; loontabel per 2026-01-01. Let op: Resultaat geldt voor drie cao's: Heineken Group B.V., Heineken Netherlands Supply B.V. en Heineken Nederland B.V. Verhogingen gelden voor salarisschalen en salarissen Bij een horizontale stap (ander functieprofiel in dezelfde functiegroep) 2,5% verhoging tot het schaalmaximum Stand-by vergoeding (consignatie, HNS) is pensioengevend per 1-1-2026 Onderhandelingen over een nieuwe cao lopen (oktober 2026); loonsverhoging 2027 nog niet bekend Vakantiegeld 8% is het wettelijk minimum; niet apart geverifieerd in de cao-tekst Salarisschalen functiegroep 1 t/m 7 per 1-1-2026 (bijlage 2 cao 2025-2026, per maand, 36 uur, excl. vakantietoeslag) hebben alleen een minimum en een maximum (normsalaris 100% RSP); als twee treden opgenomen. Groei binnen de schaal via beoordeling (RSP). Pensioenpremie en eindejaarsuitkering niet gevonden",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/0662_01-01-2025%20tot%2001-01-2027_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 36,
    schalen: {
      '1': [2874, 3592],
      '2': [2934, 3668],
      '3': [3040, 3848],
      '4': [3141, 4133],
      '5': [3301, 4585],
      '6': [3571, 5101],
      '7': [4051, 5787],
    },
  },
  vergoedingen: [],
};
