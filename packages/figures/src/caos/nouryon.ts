import type { Cao } from '../types.js';

/**
 * Cao Nouryon Nederland 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Nouryon Nederland
 * https://www.fnv.nl/getmedia/05bcc479-b940-4c77-81c4-c80487b977c9/616-nouryon-cao-01-01-2026-tm-31-12-2026-v03092026.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-01-01 (month) uit de bron
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoNouryon2026: Cao = {
  id: 'nouryon',
  name: "Cao Nouryon Nederland",
  year: 2026,
  effectiveNote: "Cao 2026-01-01 t/m 2026-12-31; loontabel per 2026-01-01. Let op: Per 1 januari 2026: salarissen en schalen + € 1.650 bruto per jaar (parttimers naar rato), met een minimum van 2% Nouryon-salarissen zijn jaarsalarissen (12 maandsalarissen + 8% vakantietoeslag); de € 1.650 is omgerekend naar € 127,31 per maand (1.650 / 12,96) Per 1 april 2025: € 500 bruto (per jaar) + 3,5%; alleen het percentage is opgenomen WGA-lasten worden in 2026 niet doorbelast aan werknemers Eindejaarsuitkering ter grootte van het maandinkomen van december, voor salarisschalen A-K (cao 2024-2025); schalen 56-61 hebben een STI-regeling Verhoging 1-1-2026: 2% met een minimum van € 1.650 per jaar; het minimum is niet in de berekening opgenomen Schaal = maandsalarissen per 1-1-2026 (bijlage I cao 2026, hele euro): minimumsalaris en 100%-niveau per groep als twee treden; de cao noemt ook een 90%-niveau en de jaarsalarissen zijn leidend (maandbedragen kunnen door afronding afwijken). Groep A0 (minimumloon-120% WML) niet opgenomen Pensioenpremie niet opgenomen; nieuwe cao per 2027 in voorbereiding",
  sourceUrl: "https://www.fnv.nl/getmedia/05bcc479-b940-4c77-81c4-c80487b977c9/616-nouryon-cao-01-01-2026-tm-31-12-2026-v03092026.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      '56': [4390, 6117],
      '57': [4858, 7013],
      '58': [5367, 8044],
      '59': [5931, 9241],
      '60': [6551, 10621],
      '61': [7251, 12227],
      'A': [2815, 3448],
      'B': [2841, 3555],
      'C': [2900, 3711],
      'D': [2983, 3875],
      'E': [3103, 4124],
      'F': [3251, 4439],
      'G': [3512, 4828],
      'H': [3799, 5253],
      'K': [4204, 5851],
    },
  },
  vergoedingen: [],
};
