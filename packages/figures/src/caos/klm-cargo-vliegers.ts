import type { Cao } from '../types.js';

/**
 * Cao KLM Cargo-vliegers 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao KLM Cargo-vliegers
 * https://cao-kijker.awvn.nl/bestanden/1054_01-03-2025%20tot%2001-03-2027_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8%, eindejaarsuitkering 0%
 *   - Voltijdsuren niet in de bron: 40 aangenomen
 *   - Pensioenfonds LifeSight → generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoKlmCargoVliegers2026: Cao = {
  id: 'klm-cargo-vliegers',
  name: "Cao KLM Cargo-vliegers",
  year: 2026,
  effectiveNote: "Cao 2025-03-01 t/m 2027-02-28; geen loontabel bekend. Let op: Aparte cao voor KLM-vliegers die bij Martinair (KLM Cargo) zijn tewerkgesteld; niet dezelfde als de cao KLM Vliegers Geen structurele salarisverhoging gevonden in de cao 2025-2027 Structurele eindejaarsuitkering over 12 x het maandsalaris per 1 december: 3,0% (gezagvoerder) / 4,5% (eerste officier) tot 2025, 4,0% / 5,5% in 2026 en 5,0% / 6,5% vanaf 2027; niet als één percentage opgenomen omdat het per functie verschilt Eenmalige uitkering van € 750 NETTO (naar rato van tewerkstelling maart-december 2025) bij het salaris van juni 2026 Pensioen (premieregeling, uitvoerder LifeSight): werknemer betaalt 11% van de bijdragegrondslag (12 x maandsalaris plus eindejaarsuitkering vorig jaar, min de overhevelingstoeslag van € 791,85); geen franchise op de bijdrage, franchise € 19.172 (2026) geldt alleen voor de opbouw. Daarnaast 7% levenslooptoeslag Salaristabellen (per rang en dienstjaren) niet opgenomen; geen vaste fulltime-uren per week",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/1054_01-03-2025%20tot%2001-03-2027_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: { kind: 'own', unit: 'maand' },
  vergoedingen: [],
};
