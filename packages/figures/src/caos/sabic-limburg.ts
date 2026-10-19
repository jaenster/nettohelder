import type { Cao } from '../types.js';

/**
 * Cao SABIC Limburg B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao SABIC Limburg B.V.
 * https://cao-kijker.awvn.nl/bestanden/2028_01-07-2025%20tot%2001-07-2027_akkoord.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8%, eindejaarsuitkering 8,67%
 *   - Voltijd 40 uur/week
 *   - Verhogingen na 1-1-2026: 2026-07-01 +2% collectieve verhoging
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoSabicLimburg2026: Cao = {
  id: 'sabic-limburg',
  name: "Cao SABIC Limburg B.V.",
  year: 2026,
  effectiveNote: "Cao 2025-07-01 t/m 2027-06-30; geen loontabel bekend. Let op: Gegevens uit het aangepaste eindbod van SABIC van 9 juni 2026 (looptijd 1 juli 2025 - 1 juli 2027); de definitieve cao-tekst is niet gevonden. Loonsverhogingen en eenmalige uitkering gelden voor salarisschalen C32 t/m C41; de eenmalige uitkering van € 820 bruto (fulltime) geldt per 1 januari 2026 voor wie dan in dienst is; de betaaldatum staat niet in het eindbod. Jaaruitkering van 2 maal het maandinkomen per jaar, inclusief vakantiebijslag (cao 2024-2025); hier verdeeld als 8% vakantietoeslag en 8,67% eindejaarsuitkering. Daarnaast een collectieve variabele beloning afhankelijk van EBITDA-doelstellingen. Continudienst gemiddeld 33,6 uur per week; overige diensten 40 uur. Pensioen via Stichting Pensioenfonds SABIC; werknemersbijdrage niet gevonden. Salarisschalen niet gevonden. Eenmalige uitkering € 820 (peildatum 1-1-2026); betaaldatum niet vermeld, niet in de berekening",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/2028_01-07-2025%20tot%2001-07-2027_akkoord.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0867,
  salary: { kind: 'own', unit: 'maand', hoursPerWeek: 40 },
  periods: [
    {
      from: '2026-07-01',
      note: "+2% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', hoursPerWeek: 40, raises: [{ pct: 0.02 }] },
    },
  ],
  vergoedingen: [],
};
