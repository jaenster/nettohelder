import type { Cao } from '../types.js';

/**
 * Cao kantoorpersoneel HES Bulk Terminal Maasdelta (HBTM) B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao kantoorpersoneel HES Bulk Terminal Maasdelta (HBTM) B.V.
 * https://www.cnv.nl/documents/5117/HBTM_kantoor_cao_tm_dec_2026.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8,33%, eindejaarsuitkering 8,33%
 *   - Voltijd 40 uur/week
 *   - Pensioenfonds Aegon → generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoHbtmKantoor2026: Cao = {
  id: 'hbtm-kantoor',
  name: "Cao kantoorpersoneel HES Bulk Terminal Maasdelta (HBTM) B.V.",
  year: 2026,
  effectiveNote: "Cao 2025-01-01 t/m 2026-12-31; geen loontabel bekend. Let op: Naast de vaste verhogingen geldt automatische prijscompensatie (CBS-cpi alle huishoudens afgeleid); uitkomsten niet verwerkt. Vakantietoeslag van 1 basismaandsalaris (april) en kerstgratificatie van 1 basismaandsalaris (december), hier als 8,33%. Voltijd is 40 uur per week; voor wie vóór 1-1-2015 in dienst kwam (niet TD) 37,5 uur. Pensioen: beschikbare premieregeling bij Aegon; eigen bijdrage 7,2% van een afgeleide pensioengrondslag met franchise 100/70 AOW (€ 19.975 in 2025); maximum pensioengevend salaris € 137.800 (2025). Geen salarisschalen in de cao (partijen willen die nog opzetten). Voor operationeel personeel geldt een aparte cao (hes-bulk-terminal-maasdelta).",
  sourceUrl: "https://www.cnv.nl/documents/5117/HBTM_kantoor_cao_tm_dec_2026.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.0833,
  eindejaarsuitkeringPct: 0.0833,
  salary: { kind: 'own', unit: 'maand', hoursPerWeek: 40 },
  vergoedingen: [],
};
