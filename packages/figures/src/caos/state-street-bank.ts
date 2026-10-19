import type { Cao } from '../types.js';

/**
 * CAO State Street Bank (Nederland) 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: CAO State Street Bank International GmbH, Amsterdam Branch 1 april 2023 t/m 31 maart 2026 (v19072025), Table 4.1 Salary table 36 hours work week
 * https://www.fnv.nl/getmedia/5793fdfa-50da-4c37-8b07-3ad88bbe0206/1475-state-street-bank-cao-1-4-2023-tm-31-3-2026-v19072025.pdf?ext=.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Maand min/max per band = jaarbedrag uit Table 4.1 (36u) gedeeld door 12 - verifieer de deling, bv Associate 1 jaar 25.034,47 -> 2086,21 maand; Vice President jaar 151.227,06 -> 12.602,26 maand
 *   - Of de 36-urige variant (Table 4.1) de juiste basis is, of dat de calculator de 40-urige (Table 4.2) verwacht
 *   - Of er voor 2026 (na 31 maart 2026, einde looptijd CAO) een nieuwe/verlengde CAO met aangepaste salaristabel bestaat die hier nog niet is verwerkt
 *   - eindejaarsuitkering: de CAO kent een volledige 13e maand (1/12 van het jaarlijks bruto basissalaris, uitbetaald in december) = 0,0833 maand-equivalent
 *   - pensioenuitvoerder: Centraal Beheer PPI (geen sectorfonds) -> gemapt naar 'generiek'
 *
 * Excluded: 40-urige salaristabel (Table 4.2) - niet proportioneel met 36u-variant; meerwerkvergoeding (Tabel 4.4); reiskostenvergoeding woon-werkverkeer (op basis werkelijke OV-kosten, geen vast tarief); thuiswerkvergoeding (geen vast bedrag gepubliceerd); jubileumuitkering (Tabel 7.1); werkgeversbijdrage ziektekostenverzekering; prestatie-gebonden individuele jaarlijkse verhoging per 1 april (geen collectieve tabelverhoging)
 */
export const caoStateStreetBank2026: Cao = {
  id: 'state-street-bank',
  name: "CAO State Street Bank",
  year: 2026,
  effectiveNote: "Salaristabel uit de CAO State Street Bank International GmbH, Amsterdam Branch, looptijd 1 april 2023 t/m 31 maart 2026 (Table 4.1, 36-urige werkweek). De CAO publiceert jaarlijkse min-max JAARsalarissen per 'Bank title' (functiegroep) exclusief vakantietoeslag en 13e maand; deze zijn hier omgerekend naar MAANDbedragen (jaarbedrag / 12). Individuele salarisverhogingen vinden plaats per 1 april, gedifferentieerd op prestatie (minimaal 1,5% voor wie 'achieving' of hoger scoort) - dit is GEEN collectieve tabelverhoging en er is in dit document GEEN nieuwe (collectieve) salaristabel voor de periode na 31 maart 2026 gepubliceerd, dus periods is leeg. Uitgesloten: de 40-urige variant (Table 4.2, niet proportioneel), meerwerkvergoeding, reiskosten-/thuiswerkvergoeding (vergoed op basis van werkelijke OV-kosten, geen vaste bedragen gepubliceerd), jubileumuitkering en overige toeslagen.",
  sourceUrl: "https://www.fnv.nl/cao-sector/finance/cao-state-street-bank",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: {
    kind: 'band',
    levelLabel: "Bank title",
    unit: 'maand',
    levels: [
      { id: 'Associate 1', min: 2086.21, max: 3729.86 },
      { id: 'Associate 2', min: 2364.09, max: 4187.81 },
      { id: 'Senior Associate', min: 2812.82, max: 4836.55 },
      { id: 'Officer', min: 3184.99, max: 5940.18 },
      { id: 'Assistant Vice President', min: 4323.2, max: 8653.1 },
      { id: 'Vice President', min: 6118.19, max: 12602.26 },
    ],
    defaultRsp: 0.9,
    hoursPerWeek: 36,
  },
  vergoedingen: [],
};
