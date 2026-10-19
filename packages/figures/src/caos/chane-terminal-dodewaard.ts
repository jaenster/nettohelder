import type { Cao } from '../types.js';

/**
 * Cao Chane Terminal Dodewaard B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Chane Terminal Dodewaard B.V.
 * https://www.cnv.nl/documents/5776/Cao_Chane_Terminal_Dodewaard_2025-2026.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8,33%, eindejaarsuitkering 4%
 *   - Voltijd 40 uur/week
 *   - Pensioenfonds Pensioenregeling Chane Terminal Dodewaard → generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoChaneTerminalDodewaard2026: Cao = {
  id: 'chane-terminal-dodewaard',
  name: "Cao Chane Terminal Dodewaard B.V.",
  year: 2026,
  effectiveNote: "Cao 2025-01-01 t/m 2026-12-31; geen loontabel bekend. Let op: Eerste cao voor Chane Terminal Dodewaard. Geen vaste loonsverhogingen: salarissen worden per 1 januari en 1 juli geïndexeerd met de CBS-cpi (prijscompensatie); uitkomsten niet verwerkt. Daarnaast individuele salarisherziening per 1 januari op basis van beoordeling (A-E), naar oordeel van de directie. Eindejaarsuitkering wordt opgebouwd: december 2025 2%, december 2026 4%, december 2027 6%, december 2028 8,33% van de twaalf maandsalarissen. Vakantietoeslag gelijk aan één maandsalaris (8,33%), in mei. Eenmalige uitkering van € 2.250 bij de loonbetaling van januari 2025. Pensioen: eigen bijdrage van 4% van het salaris; uitvoerder niet genoemd in de cao. Het salarisgebouw (bijlage III) was in de gepubliceerde cao nog niet ingevuld.",
  sourceUrl: "https://www.cnv.nl/documents/5776/Cao_Chane_Terminal_Dodewaard_2025-2026.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.0833,
  eindejaarsuitkeringPct: 0.04,
  salary: { kind: 'own', unit: 'maand', hoursPerWeek: 40 },
  vergoedingen: [],
};
