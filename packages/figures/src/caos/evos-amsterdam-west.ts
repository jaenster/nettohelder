import type { Cao } from '../types.js';

/**
 * Cao voor personeel van Evos Amsterdam West B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao voor personeel van Evos Amsterdam West B.V.
 * https://cao-kijker.awvn.nl/bestanden/4243_01-01-2024%20tot%2001-01-2027_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8,33%, eindejaarsuitkering 0%
 *   - Voltijd 38.75 uur/week
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoEvosAmsterdamWest2026: Cao = {
  id: 'evos-amsterdam-west',
  name: "Cao voor personeel van Evos Amsterdam West B.V.",
  year: 2026,
  effectiveNote: "Cao 2024-01-01 t/m 2026-12-31; geen loontabel bekend. Let op: Cao 1-1-2024 t/m 31-12-2026 (CNV en FNV Havens); aparte cao naast die van Evos Amsterdam East Naast de genoemde verhogingen jaarlijkse automatische prijscompensatie (APC) op basis van de CPI (bij negatieve CPI bevriezing en verrekening); uitkomsten voor 2025 en 2026 niet gevonden Eenmalige uitkeringen van € 1.500 bruto per 1-1-2024 en 1-1-2025 (naast de APC) Vakantietoeslag één basismaandsalaris (8,33%), uitbetaald in mei Dagdienst en onregelmatige dienst gemiddeld 38,75 uur per week, volcontinu 34,2 uur Salarisschaal in de cao (bijlage V) geldt per 1-1-2024 en is niet opgenomen Pensioen: beschikbare premieregeling met vlakke premie van 25% van de pensioengrondslag, waarvan werknemersbijdrage 4%; franchise niet vermeld",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/4243_01-01-2024%20tot%2001-01-2027_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.0833,
  eindejaarsuitkeringPct: 0,
  salary: { kind: 'own', unit: 'maand', hoursPerWeek: 38.75 },
  vergoedingen: [],
};
