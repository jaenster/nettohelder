import type { Cao } from '../types.js';

/**
 * Cao Lucite International Alpha B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Lucite International Alpha B.V.
 * https://cao-kijker.awvn.nl/bestanden/0445_01-01-2022%20tot%2001-01-2027_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8%, eindejaarsuitkering 8,33%
 *   - Voltijd 40 uur/week
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoLuciteInternationalAlpha2026: Cao = {
  id: 'lucite-international-alpha',
  name: "Cao Lucite International Alpha B.V.",
  year: 2026,
  effectiveNote: "Cao 2022-01-01 t/m 2026-12-31; geen loontabel bekend. Let op: Loonsverhogingen per 1 maart 2025 en 1 maart 2026 zijn gelijk aan de CPI-prijscompensatie (CBS, alle huishoudens afgeleid) over het voorgaande kalenderjaar, maximaal 4% en alleen bij een positieve EBIT; de vastgestelde uitkomsten zijn niet gevonden. 13e maand: in december een uitkering van eenmaal het maandinkomen per 1 december. Vakantietoeslag minimaal over het maximum van loongroep II in schaal B (werknemers 22+). Dagdienst 40 uur per week; volcontinudienst gemiddeld 34,37 uur per week. Pensioen via PGB; werkgeverspremie gemaximeerd op 23,25% van de pensioengrondslagen; werknemersbijdrage niet in de cao vermeld. Salaristabel in de cao-tekst is van 1 maart 2022; latere schalen worden als aparte bijlage verstrekt en zijn niet gevonden.",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/0445_01-01-2022%20tot%2001-01-2027_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: { kind: 'own', unit: 'maand', hoursPerWeek: 40 },
  vergoedingen: [],
};
