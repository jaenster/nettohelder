import type { Cao } from '../types.js';

/**
 * Cao T-Systems Nederland B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao T-Systems Nederland B.V.
 * https://cao-kijker.awvn.nl/bestanden/2502_01-01-2025%20tot%2001-01-2027_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8,33%, eindejaarsuitkering 0%
 *   - Voltijd 40 uur/week
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoTSystems2026: Cao = {
  id: 't-systems',
  name: "Cao T-Systems Nederland B.V.",
  year: 2026,
  effectiveNote: "Cao 2025-01-01 t/m 2026-12-31; geen loontabel bekend. Let op: Geen algemene loonsverhoging: salarissen stijgen per 1 april individueel via een verhogingsmatrix (beoordeling en relatieve schaalpositie) binnen een jaarlijks budget Midpoint van de verhogingsmatrix voor 2025 en 2026 hangt af van de CPI van januari: < 3,2% → 2,3; 3,2% tot 5% → 3; ≥ 5% → 3,5 Medewerkers met RSP ≥ 100% en een goede beoordeling krijgen een eenmalige uitkering in plaats van structurele verhoging Salarisschalen 1 t/m 14 (minimum en maximum per 1-1-2025): de tabel ontbreekt in de gepubliceerde cao-PDF (lege ruimte op p. 33); niet opgenomen Pensioen: beschikbare-premieregeling bij BeFrank; eigen bijdrage afhankelijk van leeftijd en pensioengrondslag, percentages niet in de cao Cao wordt bij niet-opzeggen automatisch met 1 jaar verlengd; afgesloten met Werknemersvereniging T-Systems NL (WNV)",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/2502_01-01-2025%20tot%2001-01-2027_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.0833,
  eindejaarsuitkeringPct: 0,
  salary: { kind: 'own', unit: 'maand', hoursPerWeek: 40 },
  vergoedingen: [],
};
