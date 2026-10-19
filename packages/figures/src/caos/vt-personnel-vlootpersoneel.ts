import type { Cao } from '../types.js';

/**
 * Cao VT Personnel Services B.V. (vlootpersoneel) 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao VT Personnel Services B.V. (vlootpersoneel)
 * https://cao-kijker.awvn.nl/bestanden/1359_01-01-2025%20tot%2001-01-2028_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8%, eindejaarsuitkering 0%
 *   - Voltijdsuren niet in de bron: 40 aangenomen
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoVtPersonnelVlootpersoneel2026: Cao = {
  id: 'vt-personnel-vlootpersoneel',
  name: "Cao VT Personnel Services B.V. (vlootpersoneel)",
  year: 2026,
  effectiveNote: "Cao 2025-01-01 t/m 2027-12-31; geen loontabel bekend. Let op: Lonen stijgen ieder jaar per 1 januari met de CPI-stijging over het voorgaande jaar (CBS); de uitkomsten voor 2025-2027 staan niet in de cao en zijn niet opgenomen. Per 1 januari 2025 daarnaast +1% initieel Eindejaarsgratificatie van 7 dagen (in geld op basis van het dagloon of in dagen) bij een fulltime dienstverband van 26 werkweken Arbeidstijd minimaal 1.846 uur per jaar in 26 volledige weken (week op, week af) Menagevergoeding € 11,70 bruto per gewerkte dag (2025) Pensioen via Allianz; werknemerspremie niet vermeld. Loontabel is een bijlage die niet in de gepubliceerde cao-tekst staat",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/1359_01-01-2025%20tot%2001-01-2028_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: { kind: 'own', unit: 'maand' },
  vergoedingen: [],
};
