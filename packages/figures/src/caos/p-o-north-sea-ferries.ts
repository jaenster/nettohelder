import type { Cao } from '../types.js';

/**
 * Cao Zeevarenden P&O North Sea Ferries B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Zeevarenden P&O North Sea Ferries B.V.
 * https://cao-kijker.awvn.nl/bestanden/1745_01-01-2026%20tot%2001-01-2027_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8,33%, eindejaarsuitkering 0%
 *   - Voltijdsuren niet in de bron: 40 aangenomen
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoPONorthSeaFerries2026: Cao = {
  id: 'p-o-north-sea-ferries',
  name: "Cao Zeevarenden P&O North Sea Ferries B.V.",
  year: 2026,
  effectiveNote: "Cao 2026-01-01 t/m 2026-12-31; geen loontabel bekend. Let op: Verhoging 3,007% per 1-1-2026 is de jaarlijkse prijscompensatie (CPI oktober-oktober); geen initiële loonsverhoging Vakantietoeslag 8,33% van de maandgage per 31 maart, uitbetaald na 1 april Gagetabellen (appendix III voor in dienst vóór 1-10-2015, appendix IV voor in dienst na 30-9-2015) staan alleen als slecht leesbare scan in de cao; niet overgenomen Pensioen via Bedrijfspensioenfonds voor de Koopvaardij; werknemersdeel niet in de cao vermeld Tijdelijk voorschot van €1.500 (maart 2026) i.v.m. wijziging betaaldatum, wordt verrekend; geen uitkering Geldt niet voor zeevarenden woonachtig in de Filipijnen en Indonesië (eigen voorwaarden) Arbeidsduur volgens vaar- en verlofsysteem; voltijd-uren per week niet vermeld",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/1745_01-01-2026%20tot%2001-01-2027_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.0833,
  eindejaarsuitkeringPct: 0,
  salary: { kind: 'own', unit: 'maand' },
  vergoedingen: [],
};
