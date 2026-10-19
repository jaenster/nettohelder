import type { Cao } from '../types.js';

/**
 * Cao Air Liquide B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Air Liquide B.V.
 * https://cao-kijker.awvn.nl/bestanden/3363_01-10-2025%20tot%2001-04-2027_akkoord.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8%, eindejaarsuitkering 0%
 *   - Voltijdsuren niet in de bron: 40 aangenomen
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoAirLiquide2026: Cao = {
  id: 'air-liquide',
  name: "Cao Air Liquide B.V.",
  year: 2026,
  effectiveNote: "Cao 2025-10-01 t/m 2027-03-31; geen loontabel bekend. Let op: Onderhandelingsresultaat (ABW) / eindbod (FNV Procesindustrie) van februari 2026; looptijd 18 maanden, van 1-10-2025 tot 1-4-2027 3,5% per 1-1-2026 voor medewerkers verloond conform de salarismatrix 80/90/100-regeling voor medewerkers vanaf 60 jaar blijft Vakantietoeslag, arbeidsduur, salarismatrix en pensioenpremie niet in de gevonden bron; vakantiegeld hier op het wettelijk minimum van 8% gezet",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/3363_01-10-2025%20tot%2001-04-2027_akkoord.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: { kind: 'own', unit: 'maand' },
  vergoedingen: [],
};
