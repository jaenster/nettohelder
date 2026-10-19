import type { Cao } from '../types.js';

/**
 * Cao voor Uitzendkrachten (ABU/NBBU/LBV) 2026-2028. Uitzendkrachten worden in
 * de regel betaald volgens de INLENERSBELONING: de uitzendkracht volgt het loon-
 * gebouw van de cao van de opdrachtgever (inlener). Daarnaast kent de cao een
 * eigen ABU-loongebouw: de cao-beloning allocatiegroep (artikel 33). Dat is een
 * uurlonentabel per functiegroep, alleen toepasbaar voor uitzendkrachten in de
 * allocatiegroep (afstand tot de arbeidsmarkt / schoolverlaters) en alleen voor
 * functiegroep 6 en lager, voor maximaal 52 gewerkte weken. Dit ABU-loongebouw
 * is hier gemodelleerd; voor de meeste uitzendkrachten geldt echter de
 * inlenersbeloning (= het loon van de inlener-cao, niet deze tabel).
 *
 * Structuur (artikel 33): functiegroep 1 t/m 3 = wettelijk minimum(uur)loon;
 * functiegroep 4 t/m 6 = een beginuurloon met periodieke verhogingen van 2,25%
 * per 26 gewerkte weken. De beginuurlonen worden per 1 januari en 1 juli
 * geïndexeerd met het percentage waarmee het WML stijgt. Pensioen = StiPP.
 */
export const caoAbu2026: Cao = {
  id: 'abu',
  name: 'Cao ABU (uitzendkrachten)',
  year: 2026,
  effectiveNote:
    'ABU-loongebouw cao-beloning allocatiegroep (artikel 33). LET OP: de meeste uitzendkrachten worden betaald volgens de INLENERSBELONING (het loon van de cao van de opdrachtgever), niet volgens deze ABU-tabel; deze tabel geldt alleen voor de allocatiegroep, functiegroep 6 en lager, max. 52 gewerkte weken. Functiegroep 1-3 = wettelijk minimumuurloon (€14,71 per 1-1-2026, 21+). Functiegroep 4-6: beginuurloon plus periodieke verhogingen van 2,25% per 26 gewerkte weken (trede 0 = beginuurloon). De officiële beginuurlonen per 1-1-2025 zijn €14,94 (fg4), €15,63 (fg5), €16,39 (fg6); de hier opgenomen bedragen per 1-1-2026 zijn DAARVAN AFGELEID via de WML-indexatie (€14,40→€14,71 = +2,16%), omdat ABU de numerieke tabel per 1-1-2026 niet op een bereikbare bron publiceert (de cao-PDF bevat alleen de functie-indelingsmethodiek). De treden boven trede 0 (3 periodieke stappen van 2,25%) zijn modelmatig; het werkelijke maximumaantal periodieken is niet bevestigd. Vakantiebijslag: cao kent geen vast percentage los van WML; minimum 8% (Wet minimumloon en minimumvakantiebijslag). Jeugdlonen niet apart opgenomen.',
  sourceUrl:
    'https://www.abu.nl/kennisbank/cao-voor-uitzendkrachten/minimumloon-en-cao-beloning-allocatiegroep-stijgen-per-1-januari-2025/',
  pensioenfondsId: 'stipp',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'uur',
    hoursPerWeek: 40,
    schalen: {
      '1-3 (WML)': [14.71, 15.04, 15.38, 15.73],
      '4': [15.26, 15.6, 15.95, 16.31],
      '5': [15.97, 16.33, 16.7, 17.08],
      '6': [16.74, 17.12, 17.51, 17.9],
    },
  },
  vergoedingen: [],
};
