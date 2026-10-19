import type { Cao } from '../types.js';

/**
 * Cao Chemours Netherlands B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Chemours Netherlands B.V.
 * https://cao-kijker.awvn.nl/bestanden/3799_01-06-2025%20tot%2001-01-2027_akkoord.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8%, eindejaarsuitkering 8,33%
 *   - Voltijd 38.7 uur/week
 *   - Eenmalige uitkeringen: 2026-12-01 € 600
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoChemoursNetherlands2026: Cao = {
  id: 'chemours-netherlands',
  name: "Cao Chemours Netherlands B.V.",
  year: 2026,
  effectiveNote: "Cao 2025-06-01 t/m 2026-12-31; geen loontabel bekend. Let op: Cao 2025-2026 is een geaccepteerd verbeterd eindbod van 11 december 2025 Prijscompensatie herleeft per 1 juli 2026: verhoging gelijk aan de stijging van de CPI-afgeleid (alle huishoudens) van oktober 2022 tot april 2026; tot oktober 2025 was dat 3,57%. De uitkomst is niet bekend en daarom niet opgenomen Per 1 januari 2027 volgt nog een prijscompensatie op basis van de CPI-afgeleid van april tot oktober 2026 (uitkomst onbekend) Eenmalige uitkering € 600 bruto in december 2026 voor medewerkers die op 1 december 2026 in dienst zijn (pro rata voor deeltijd) Dagdienst gemiddeld 38,7 uur per week (cao 2023-2025) 13e maanduitkering van 8,33% van de som van de maandsalarissen, uitbetaald in november Salarisguide kent per schaal alleen één guide rate (cao 2023-2025, o.a. CAO-S € 2.985,63, CAO-C2 € 6.087,93); geen volledige schalen opgenomen Pensioen via eigen pensioenvoorziening; werknemersbijdrage niet vermeld",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/3799_01-06-2025%20tot%2001-01-2027_akkoord.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: { kind: 'own', unit: 'maand', hoursPerWeek: 38.7 },
  vergoedingen: [],
  eenmaligeUitkeringen: [
    { date: '2026-12-01', amount: 600 },
  ],
};
