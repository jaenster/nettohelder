import type { Cao } from '../types.js';

/**
 * Cao Ampco Flashlight Rental B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Ampco Flashlight Rental B.V.
 * https://cao-kijker.awvn.nl/bestanden/3587_01-01-2025%20tot%2001-01-2028_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8%, eindejaarsuitkering 0%
 *   - Voltijd 40 uur/week
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoAmpcoFlashlightRental2026: Cao = {
  id: 'ampco-flashlight-rental',
  name: "Cao Ampco Flashlight Rental B.V.",
  year: 2026,
  effectiveNote: "Cao 2025-01-01 t/m 2027-12-31; geen loontabel bekend. Let op: In 2026 en 2027 wordt de loonsverhoging bepaald via automatische prijscompensatie op basis van de CPI-stijging, met een maximum van 3,5%; uitkomst en ingangsdatum staan niet in de cao. De cao noemt een salarisverhoging van 2,75% over het tijdvak 2025; de exacte ingangsdatum (aangenomen 1 januari 2025) staat er niet expliciet bij. Loontabel per maand (begin- en eindloon per functiegroep FG1 t/m FG5, peildatum niet vermeld, kop 'inclusief 3 procent'): FG1 € 2.455,81-3.250, FG2 € 2.500-3.750, FG3 € 2.800-4.750, FG4 € 3.300-5.250, FG5 € 3.800-6.000. Niet als schaal opgenomen omdat de ingangsdatum onduidelijk is. Beginloon FG1 en FG2 volgt het wettelijk minimumloon. Pensioen via PNO Media; werknemersbijdrage niet in de cao vermeld.",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/3587_01-01-2025%20tot%2001-01-2028_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: { kind: 'own', unit: 'maand', hoursPerWeek: 40 },
  vergoedingen: [],
};
