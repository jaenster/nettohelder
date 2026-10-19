import type { Cao } from '../types.js';

/**
 * Cao Evos Amsterdam East B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Evos Amsterdam East B.V.
 * https://cao-kijker.awvn.nl/bestanden/3948_01-01-2024%20tot%2001-01-2027_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8,33%, eindejaarsuitkering 8,33%
 *   - Voltijd 37.5 uur/week
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoEvosAmsterdamEast2026: Cao = {
  id: 'evos-amsterdam-east',
  name: "Cao Evos Amsterdam East B.V.",
  year: 2026,
  effectiveNote: "Cao 2024-01-01 t/m 2026-12-31; geen loontabel bekend. Let op: Naast de initiële verhogingen geldt automatische prijscompensatie (CPI alle huishoudens afgeleid), halfjaarlijks per januari en juli; de uitkomsten zijn niet gevonden. Per 1 januari 2024 een eenmalige uitkering van € 1.500 bruto. Vakantietoeslag en dertiende maand: elk 8,33% van het bruto salaris inclusief onregelmatigheidstoeslag (uitbetaling in mei resp. november). Dagdienst 37,5 uur per week, continudienst 31,5 uur per week. Pensioen: beschikbare-premieregeling met een eigen bijdrage van 6% van de pensioengrondslag; franchise alleen voor 2024 bekend (€ 17.545). Salaristabel (schalen A t/m K, minimum en maximum) alleen per 1 januari 2024 in de cao; niet overgenomen vanwege de latere prijscompensaties.",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/3948_01-01-2024%20tot%2001-01-2027_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.0833,
  eindejaarsuitkeringPct: 0.0833,
  salary: { kind: 'own', unit: 'maand', hoursPerWeek: 37.5 },
  vergoedingen: [],
};
