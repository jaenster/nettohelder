import type { Cao } from '../types.js';

/**
 * Cao Vrumona B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Vrumona B.V.
 * https://cao-kijker.awvn.nl/bestanden/4321_01-01-2026%20tot%2001-01-2027_akkoord.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8%, eindejaarsuitkering 0%
 *   - Voltijdsuren niet in de bron: 40 aangenomen
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoVrumona2026: Cao = {
  id: 'vrumona',
  name: "Cao Vrumona B.V.",
  year: 2026,
  effectiveNote: "Cao 2026-01-01 t/m 2026-12-31; geen loontabel bekend. Let op: Per 1 januari 2026: feitelijke salarissen en schalen + € 168,76 bruto per maand (bedrag niet naar arbeidsduur gedifferentieerd in het akkoord) Salarisschalen bestaan uit minimum, normsalaris en (deels) maximum; schalen 1-7 gebaseerd op 36 uur, 16-25 op 38 uur, nieuwe Commercie-medewerkers op 40 uur; datum van de tabel niet vermeld, daarom niet opgenomen Arbeidsduur verschilt per groep (36, 38 of 40 uur); nieuwe medewerkers Commercie/Staff t/m JobGrade 7 vanaf 1 januari 2026 40 uur zonder atv Pensioen via Pensioenfonds Detailhandel met de premieverdeling van de cao Drankenindustrie; percentage niet in de cao vermeld Succesbonus 2025 (€ 500 - € 1.500 afhankelijk van volume) en STI-regeling niet opgenomen Employability budget (€ 750 per 3 jaar) vervalt per 2026 en is als 0,35% toegevoegd aan de nominale verhoging",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/4321_01-01-2026%20tot%2001-01-2027_akkoord.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: { kind: 'own', unit: 'maand' },
  vergoedingen: [],
};
