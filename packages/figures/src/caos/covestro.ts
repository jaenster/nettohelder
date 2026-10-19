import type { Cao } from '../types.js';

/**
 * Cao Covestro (Netherlands) B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Covestro (Netherlands) B.V.
 * https://www.cnv.nl/documents/6065/CAO_Covestro_2025_-_2026_.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8%, eindejaarsuitkering 0%
 *   - Voltijd 40 uur/week
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoCovestro2026: Cao = {
  id: 'covestro',
  name: "Cao Covestro (Netherlands) B.V.",
  year: 2026,
  effectiveNote: "Cao 2025-10-01 t/m 2026-09-30; geen loontabel bekend. Let op: Collectieve verhoging 3% per 1-10-2025 met een MAXIMUM van € 2.300 per jaar op fulltimebasis; dat maximum kan de calculator niet uitdrukken Salarisschalen C32 t/m C40 en VS1.1 t/m VS3 staan in de cao alleen als jaarbedragen (minimum/midden/maximum, incl. vakantietoeslag); niet opgenomen omdat er geen jaar-eenheid is Daarnaast individuele salarisverhoging van 2,5% (max. 5% totaal) tot het schaalmaximum Benefit budget van 7% van het jaarsalaris (maandelijks 1/12), niet besteed deel in december uitbetaald; niet als eindejaarsuitkering opgenomen Winstdeling via het Covestro Profit Sharing Plan (PSP), afhankelijk van resultaten Pensioen bij Pensioenfonds PDN; werknemerspremie staat niet in de cao en is niet opgenomen Cao loopt af per 30-9-2026; onderhandelingen over een nieuwe cao starten 29 oktober 2026, uitkomst nog niet bekend",
  sourceUrl: "https://www.cnv.nl/documents/6065/CAO_Covestro_2025_-_2026_.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: { kind: 'own', unit: 'maand', hoursPerWeek: 40 },
  vergoedingen: [],
};
