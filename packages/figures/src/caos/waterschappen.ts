import type { Cao } from '../types.js';

/**
 * Cao Werken voor waterschappen (SAW) — salarisschalen per 1 maart 2026.
 *
 * Anders dan Rijk/Gemeenten kent deze cao GEEN vaste trede/periodiek-tabel: de
 * cao legt per schaal alleen een minimum- en maximumsalaris vast (schaal 0–18).
 * De jaarlijkse groei is 2,5% van het schaalmaximum per 1 januari zolang het
 * maximum nog niet bereikt is (art. 3.1.13) — een bandsysteem, geen grid. Daarom
 * gemodelleerd als kind:'band': het individu zit op een relatieve salarispositie
 * (RSP) tussen min en max. defaultRsp 0,9 ≈ een ervaren, nog niet gemaximeerde
 * werknemer.
 *
 * IKB (art. 3.2.1) = 21% van het salaris: 8% vakantietoelage + 13% vrije ruimte.
 * Beide componenten zijn zuiver salarisproportioneel (geen bodembedrag), dus
 * vakantiegeld 0,08 + eindejaarsuitkering 0,13 dekt het IKB exact zonder dubbeltelling.
 *
 * Tabel per 1 maart 2026 (verhoging 3,3%, de APC over 2025) geldt t/m 31 dec 2026
 * en is de actuele tabel voor het grootste deel van het jaar; de tussentabel per
 * 1 jan 2026 (1,0% + WML) is daarmee vervangen. Pensioen = ABP.
 * Bron: officiële salaristabel Vereniging werken voor waterschappen (vwvw.nl).
 */
export const caoWaterschappen2026: Cao = {
  id: 'waterschappen',
  name: 'Cao Werken voor waterschappen',
  year: 2026,
  effectiveNote:
    'Salarisschalen per 1 mrt 2026 (verhoging 3,3%, t/m 31 dec 2026), schaal 0–18. Cao kent geen vaste treden: groei is 2,5% van schaalmaximum/jaar (art. 3.1.13) → bandmodel met min/max per schaal.',
  sourceUrl:
    'https://vwvw.nl/cao/arbeidsvoorwaarden/3-beloning/ss-31-salariering/3110-salaristabel',
  pensioenfondsId: 'abp',
  vakantiegeldPct: 0.08, // IKB-vakantietoelage, art. 3.2.1
  eindejaarsuitkeringPct: 0.13, // IKB vrije ruimte (21% − 8%), art. 3.2.1
  salary: {
    kind: 'band',
    hoursPerWeek: 36,
    levelLabel: 'Salarisschaal',
    unit: 'maand',
    defaultRsp: 0.9,
    levels: [
      { id: '0', min: 2617, max: 2764 },
      { id: '1', min: 2670, max: 3093 },
      { id: '2', min: 2757, max: 3231 },
      { id: '3', min: 2845, max: 3374 },
      { id: '4', min: 2938, max: 3526 },
      { id: '5', min: 3033, max: 3688 },
      { id: '6', min: 3140, max: 3909 },
      { id: '7', min: 3282, max: 4200 },
      { id: '8', min: 3539, max: 4626 },
      { id: '9', min: 3893, max: 5199 },
      { id: '10', min: 4313, max: 5848 },
      { id: '11', min: 4780, max: 6583 },
      { id: '12', min: 5303, max: 7417 },
      { id: '13', min: 5885, max: 8363 },
      { id: '14', min: 6438, max: 9165 },
      { id: '15', min: 7048, max: 10047 },
      { id: '16', min: 7717, max: 11016 },
      { id: '17', min: 8454, max: 12082 },
      { id: '18', min: 9262, max: 13255 },
    ],
  },
  vergoedingen: [],
};
