import type { Cao } from '../types.js';

/**
 * Cao Refresco Benelux B.V. (voorheen Menken Drinks B.V.) 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Refresco Benelux B.V. (voorheen Menken Drinks B.V.)
 * https://cao-kijker.awvn.nl/bestanden/1980_01-07-2025%20tot%2001-04-2027_akkoord.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8%, eindejaarsuitkering 6%
 *   - Voltijd 40 uur/week
 *   - Verhogingen na 1-1-2026: 2026-07-01 +2% collectieve verhoging
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoMenkenDrinks2026: Cao = {
  id: 'menken-drinks',
  name: "Cao Refresco Benelux B.V. (voorheen Menken Drinks B.V.)",
  year: 2026,
  effectiveNote: "Cao 2025-07-01 t/m 2027-03-31; geen loontabel bekend. Let op: Eerste ondernemings-cao Refresco Benelux voor de locaties Maarheeze, Sittard, Hoensbroek, Zoetermeer en Bodegraven (voorheen cao Menken Drinks / Refresco Bodegraven) Eindejaarsuitkering over het vaste maandinkomen: 4% per 1 juli 2025, 6% per 1 januari 2026 en 8% per 1 januari 2027; de variabele bonusregeling in Bodegraven vervalt na 2025 Nieuw functiehuis en loongebouw beoogd per 1 januari 2027 (nog niet bekend) 13 ADV-dagen per jaar op basis van een 40-urig contract; ploegentoeslagen per 1 januari 2026 vastgelegd Vakantietoeslagpercentage niet in het akkoord vermeld; 8% is het wettelijk minimum Salaristabel en pensioenpremie niet gevonden",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/1980_01-07-2025%20tot%2001-04-2027_akkoord.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.06,
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
