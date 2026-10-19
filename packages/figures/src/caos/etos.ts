import type { Cao } from '../types.js';

/**
 * Cao voor het personeel van de Distributie-organisatie van Etos BV 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao voor het personeel van de Distributie-organisatie van Etos BV
 * https://www.fnv.nl/getmedia/b1d66e1c-b672-4e96-9998-a8295d076687/606-etos-distributie-organisatie-cao-1-4-2026-tm-31-3-2027-v13102026.pdf?ext=.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-04-20 (hour) uit de bron
 *   - Basistabel 1-1-2026 teruggerekend uit de tabel per 2026-04-20 (gedeeld door +3,5%)
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-04-20)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoEtos2026: Cao = {
  id: 'etos',
  name: "Cao voor het personeel van de Distributie-organisatie van Etos BV",
  year: 2026,
  effectiveNote: "Cao 2026-04-01 t/m 2027-03-31; loontabel per 2026-04-20. Let op: Bedrijfscao voor de distributiecentra van Etos (Beverwijk); Etos-winkelpersoneel valt onder de cao VDF (drogisterij), Etos-franchisewinkels onder de KNDB-cao Schaal = Salaristabel 1 per 20-4-2026 (uurlonen 21 jaar en ouder, incl. 3,5%), alleen 21-jarige aanvangsloon en maximum per schaal opgenomen als twee treden; jaarlijkse trede is € 0,35 (C) t/m € 0,96 (I) Per 20-4-2026 zijn de oude salaristabellen I, II en III samengevoegd tot een tabel; wie boven het nieuwe schaalmaximum zat, houdt het verschil als uurlooncomponent Instroomschaal A (max. 52 weken, magazijnmedewerkers; 21 jaar: € 13,91 per uur plus uitbetaalde ADV € 1,32 per uur) niet opgenomen Fulltime = gemiddeld 40 uur per week met 197 uur arbeidsduurverkorting per jaar (220 uur bij ploegendienst) Pensioen bij Ahold Delhaize Pensioen; werknemerspremie staat niet in de cao en is niet opgenomen Loonsverhogingen onder de vorige cao (2025-2026) niet gevonden; loonsverhoging na 31-3-2027 nog niet bekend Geen eindejaarsuitkering of eenmalige uitkering gevonden",
  sourceUrl: "https://www.fnv.nl/getmedia/b1d66e1c-b672-4e96-9998-a8295d076687/606-etos-distributie-organisatie-cao-1-4-2026-tm-31-3-2027-v13102026.pdf?ext=.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'uur',
    hoursPerWeek: 40,
    schalen: {
      'C': [14.86, 15.7],
      'D': [15, 16.14],
      'E': [15.21, 16.84],
      'F': [15.34, 18.67],
      'G': [16.84, 21.57],
      'H': [17.39, 24.85],
      'I': [18.75, 28.14],
    },
  },
  periods: [
    {
      from: '2026-04-20',
      note: "+3,5% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'uur',
        hoursPerWeek: 40,
        schalen: {
          'C': [15.38, 16.25],
          'D': [15.53, 16.71],
          'E': [15.74, 17.43],
          'F': [15.88, 19.32],
          'G': [17.43, 22.32],
          'H': [18, 25.72],
          'I': [19.41, 29.13],
        },
      },
    },
  ],
  vergoedingen: [],
};
