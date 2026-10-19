import type { Cao } from '../types.js';

/**
 * Cao Stichting Omroep Muziek 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Stichting Omroep Muziek
 * https://cao-kijker.awvn.nl/bestanden/1737_01-07-2024%20tot%2001-07-2026_akkoord.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8%, eindejaarsuitkering 0%
 *   - Voltijd 36 uur/week
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoOmroepMuziek2026: Cao = {
  id: 'omroep-muziek',
  name: "Cao Stichting Omroep Muziek",
  year: 2026,
  effectiveNote: "Cao 2024-07-01 t/m 2026-06-30; geen loontabel bekend. Let op: Eenmalige verhoging van de eindejaarsuitkering in december 2025 met € 250 per fte. De eindejaarsuitkering is een vast bedrag volgens de bijlagen maandsalaris; die bijlagen (salaristabellen) staan niet in de gepubliceerde cao-tekst, dus geen eindejaarspercentage en geen tabel opgenomen. Gemiddelde arbeidsduur 36 uur per week (24 ATV-dagen; feitelijk 40 uur). Pensioen bij PNO Media; pensioengrondslag = maandsalaris x 12 x 1,08 minus franchise. Werknemerspremie niet in de cao vermeld. Onderhandelingen over een nieuwe cao vanaf 1-7-2026 zijn in september 2026 gestart; nog geen resultaat.",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/1737_01-07-2024%20tot%2001-07-2026_akkoord.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: { kind: 'own', unit: 'maand', hoursPerWeek: 36 },
  vergoedingen: [],
};
