import type { Cao } from '../types.js';

/**
 * Teijin Aramid 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Teijin Aramid
 * https://cao-kijker.awvn.nl/bestanden/1765_01-04-2025%20tot%2001-04-2027_akkoord.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8,33%, eindejaarsuitkering 0%
 *   - Voltijd 40 uur/week
 *   - Verhogingen na 1-1-2026: 2026-04-01 +2,3% collectieve verhoging
 *   - Pensioenfonds PGB → generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoTeijinAramid2026: Cao = {
  id: 'teijin-aramid',
  name: "Teijin Aramid",
  year: 2026,
  effectiveNote: "Cao 2025-04-01 t/m 2027-03-31; geen loontabel bekend. Let op: Cao 1 april 2025 t/m 31 maart 2027 o.b.v. aangepast eindbod van 9 juli 2025. Per 1 juni 2025 structurele verhoging van € 1.150 per jaar (bedrag op jaarbasis incl. vakantietoeslag, deeltijders naar rato); niet als maandbedrag opgenomen. Salarisschalen (groep 2 t/m 13) zijn jaarsalarissen inclusief 8⅓% vakantietoeslag met alleen minimum en maximum; niet omgerekend naar maandbedragen. Schaal 1 vervalt per 1-7-2025. Individuele salarisverhoging vanaf 2026 jaarlijks per 1 juni o.b.v. beoordeling; in juni 2026 eenmalige compensatie van 2/12 x verhogingspercentage x jaarinkomen voor de verschuiving van 1 april naar 1 juni. Vakantietoeslag 8⅓% van de feitelijk verdiende maandinkomens, uitbetaald in april. Daarnaast jaarlijkse winstuitkering in juni (niet opgenomen). Voltijd: dagdienst 40 uur, 36-uursrooster 36 uur, vijfploegendienst 33,6 uur per week. Pensioen: beschikbare-premieregeling bij PGB, werknemersbijdrage 6% van de pensioengrondslag (pensioengevend salaris min franchise). Franchise (€ 18.475) en maximum pensioengevend salaris (€ 137.800) zijn bedragen voor 2025.",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/1765_01-04-2025%20tot%2001-04-2027_akkoord.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.0833,
  eindejaarsuitkeringPct: 0,
  salary: { kind: 'own', unit: 'maand', hoursPerWeek: 40 },
  periods: [
    {
      from: '2026-04-01',
      note: "+2,3% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', hoursPerWeek: 40, raises: [{ pct: 0.023 }] },
    },
  ],
  vergoedingen: [],
};
