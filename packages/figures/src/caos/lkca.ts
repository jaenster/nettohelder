import type { Cao } from '../types.js';

/**
 * Cao LKCA 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao LKCA
 * https://cao-kijker.awvn.nl/bestanden/4295_01-01-2023%20tot%2001-01-2027_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8%, eindejaarsuitkering 6%
 *   - Voltijd 36 uur/week
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoLkca2026: Cao = {
  id: 'lkca',
  name: "Cao LKCA",
  year: 2026,
  effectiveNote: "Cao 2023-01-01 t/m 2026-12-31; geen loontabel bekend. Let op: Voor structurele salarisverhogingen volgt LKCA de cao Sociaal Werk, Welzijn & Maatschappelijke Dienstverlening, mits de financiële positie van de werkgever dit toestaat (art. 4.3.2); de verhogingen hier zijn die van de cao Sociaal Werk 2025-2027, niet bevestigd dat LKCA ze heeft toegepast Cao wordt stilzwijgend met een jaar verlengd als geen van de partijen opzegt Eindejaarsuitkering 6% van het in het jaar ontvangen brutosalaris vermeerderd met de vakantietoeslag Pensioen via PFZW; verdeling van de premie volgt de cao Sociaal Werk, niet als pensioengegevens opgenomen Salaristabel in de cao-tekst (bijlage 1) is van 2023 en niet opgenomen De cao volgt de loonsverhogingen van cao Sociaal Werk alleen als de financiële positie dat toelaat; niet bevestigd, daarom niet in de berekening",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/4295_01-01-2023%20tot%2001-01-2027_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.06,
  salary: { kind: 'own', unit: 'maand', hoursPerWeek: 36 },
  vergoedingen: [],
};
