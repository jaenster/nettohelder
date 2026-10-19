import type { Cao } from '../types.js';

/**
 * Cao Chane Terminals 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Chane Terminals
 * https://cao-kijker.awvn.nl/bestanden/2106_01-01-2024%20tot%2001-01-2028_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8,33%, eindejaarsuitkering 8,33%
 *   - Voltijdsuren niet in de bron: 40 aangenomen
 *   - Verhogingen na 1-1-2026: 2027-01-01 +1% collectieve verhoging
 *   - Eenmalige uitkeringen: 2026-01-01 € 1500
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoChaneTerminals2026: Cao = {
  id: 'chane-terminals',
  name: "Cao Chane Terminals",
  year: 2026,
  effectiveNote: "Cao 2024-01-01 t/m 2027-12-31; geen loontabel bekend. Let op: Cao 1-1-2024 t/m 31-12-2027: per 1-1-2024 0%, per 1-1-2025 en 1-1-2026 een eenmalige uitkering van € 1.500 bruto (naar rato; niet voor wie op of na 1-10 van het voorgaande jaar in dienst kwam), per 1-1-2027 1,0% initieel; telkens naast de APC Automatische prijscompensatie (APC): salarissen worden halfjaarlijks per 1 januari en 1 juli geïndexeerd met de CBS-consumentenprijsindex (alle huishoudens afgeleid), zonder maximum; de uitkomsten zijn hier niet verwerkt Vakantietoeslag gelijk aan één maandsalaris (8,33%) inclusief vaste toeslagen, uitbetaald in mei 13e maand van één bruto maandsalaris, maandelijks als 1/12 uitbetaald; voor CTWP (v/h Maastank) ingefaseerd: 6% vanaf 1-1-2026 en 8,33% vanaf 1-1-2027 Pensioen: beschikbare premieregeling; werknemersbijdrage 4% van de pensioengrondslag (pensioengevend salaris minus franchise); de hoogte van de franchise staat niet in de cao Open loonschalen (12 salarisbandbreedtes, ORBA) met beoordelingsafhankelijke verhoging; loongebouw in de cao is van 1-1-2024 en niet opgenomen Cao-tekst is een gescande PDF",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/2106_01-01-2024%20tot%2001-01-2028_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.0833,
  eindejaarsuitkeringPct: 0.0833,
  salary: { kind: 'own', unit: 'maand' },
  periods: [
    {
      from: '2027-01-01',
      note: "+1% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', raises: [{ pct: 0.01 }] },
    },
  ],
  vergoedingen: [],
  eenmaligeUitkeringen: [
    { date: '2026-01-01', amount: 1500 },
  ],
};
