import type { Cao } from '../types.js';

/**
 * OVET personeel in de stuwadoors en technische dienst 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: OVET personeel in de stuwadoors en technische dienst
 * https://cao-kijker.awvn.nl/bestanden/0659_01-01-2025%20tot%2001-01-2029_akkoord.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8%, eindejaarsuitkering 0%
 *   - Voltijdsuren niet in de bron: 40 aangenomen
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoOvet2026: Cao = {
  id: 'ovet',
  name: "OVET personeel in de stuwadoors en technische dienst",
  year: 2026,
  effectiveNote: "Cao 2025-01-01 t/m 2028-12-31; geen loontabel bekend. Let op: Cao OVET 1 januari 2025 t/m 31 december 2028 o.b.v. onderhandelingsresultaat (november 2024). Salarissen worden jaarlijks per 1 januari verhoogd met automatische prijscompensatie (APC, ongewijzigd voortgezet) plus 1,5%; de APC-uitkomsten zijn niet bekend en niet opgenomen. Per 1-1-2027 en 1-1-2028 nog eens 1,5% naast APC, maar alleen als de APC over de twee voorafgaande referteperiodes samen niet hoger is dan 11%; daarom niet opgenomen. Winstuitkering in december bij netto resultaat boven 5% van de omzet (gelijk bedrag per fte); niet opgenomen. Vakantietoeslag, arbeidsduur, salarisschalen en pensioenpremie niet gevonden (geen cao-tekst beschikbaar); 8% vakantietoeslag is niet geverifieerd.",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/0659_01-01-2025%20tot%2001-01-2029_akkoord.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: { kind: 'own', unit: 'maand' },
  vergoedingen: [],
};
