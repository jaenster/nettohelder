import type { Cao } from '../types.js';

/**
 * Cao Mateck Project Support B.V. - Medewerkers Techniek 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Mateck Project Support B.V. - Medewerkers Techniek
 * https://cao-kijker.awvn.nl/bestanden/4311_01-01-2023%20tot%2001-01-2027_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8,33%, eindejaarsuitkering 0%
 *   - Voltijd 40 uur/week
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoMateckProjectSupport2026: Cao = {
  id: 'mateck-project-support',
  name: "Cao Mateck Project Support B.V. - Medewerkers Techniek",
  year: 2026,
  effectiveNote: "Cao 2023-01-01 t/m 2026-12-31; geen loontabel bekend. Let op: Basismaandsalarissen worden jaarlijks op 1 januari met 1,75% verhoogd, naast de automatische prijscompensatie (APC, CPI alle huishoudens afgeleid, vanaf 2024 jaarlijks over oktober-oktober); APC-uitkomsten niet opgenomen Voltijd 40 uur per week; vijfploegen volcontinudienst 33,6 uur per week, semi-continu 38,75 uur Onregelmatigheidstoeslag semi-continu 13%, volcontinu 30% Pensioen: eigen bijdrage 5% van de pensioengrondslag; pensioenuitvoerder en franchise niet vermeld, daarom niet als pensioengegevens opgenomen Salarisschalen in de cao-tekst zijn van 1 juli 2022 (alleen min-max per klasse A-E) en niet opgenomen Cao wordt met één jaar verlengd als niet tijdig is opgezegd",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/4311_01-01-2023%20tot%2001-01-2027_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.0833,
  eindejaarsuitkeringPct: 0,
  salary: { kind: 'own', unit: 'maand', hoursPerWeek: 40 },
  vergoedingen: [],
};
