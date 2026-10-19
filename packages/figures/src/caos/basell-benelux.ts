import type { Cao } from '../types.js';

/**
 * Cao Basell Benelux B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Basell Benelux B.V.
 * https://cao-kijker.awvn.nl/bestanden/1967_01-04-2025%20tot%2001-04-2027_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8%, eindejaarsuitkering 0%
 *   - Voltijd 40 uur/week
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoBasellBenelux2026: Cao = {
  id: 'basell-benelux',
  name: "Cao Basell Benelux B.V.",
  year: 2026,
  effectiveNote: "Cao 2025-04-01 t/m 2027-03-31; geen loontabel bekend. Let op: Aangepast eindbod van 22 januari 2026, looptijd 1 april 2025 t/m 31 maart 2027 Per 1 juli 2026 worden alleen de salarisschalen met 2,7% verhoogd; individuele salarissen niet Salaris groeit binnen de schaal via individuele normverhogingen (% van schaalmaximum, afhankelijk van beoordeling) Salarisschalen A t/m F (bijlage 2, per 1 juli 2026) staan alleen als jaarbedragen met minimum en maximum (bijv. A € 48.925 - € 59.797, F € 73.368 - € 84.817) en zijn niet overgenomen Dagdienst 40 uur per week; ploegendiensten 38,3, 34,2 of 33,6 uur Eenmalige vergoeding bij behalen 6e skill (schaal E, ca. € 2.600) en team-reward € 250 Pensioenpremie (werknemersbijdrage) niet gevonden; geen eindejaarsuitkering gevonden",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/1967_01-04-2025%20tot%2001-04-2027_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: { kind: 'own', unit: 'maand', hoursPerWeek: 40 },
  vergoedingen: [],
};
