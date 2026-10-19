import type { Cao } from '../types.js';

/**
 * Cao Noordgastransport B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Noordgastransport B.V.
 * https://cao-kijker.awvn.nl/bestanden/1010_01-01-2026%20tot%2001-01-2028_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-01-01 (month) uit de bron
 *   - Latere tabellen berekend uit de cao-verhogingen (2027-01-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoNoordgastransport2026: Cao = {
  id: 'noordgastransport',
  name: "Cao Noordgastransport B.V.",
  year: 2026,
  effectiveNote: "Cao 2026-01-01 t/m 2027-12-31; loontabel per 2026-01-01. Let op: Cao loopt van 1 januari 2026 tot 1 januari 2028 Per 1-1-2025 eerst 3,25% en daarna € 100 per maand structureel op salaristabel en salarissen (cao 1-10-2024 t/m 31-12-2025); de 3,25% over okt-dec 2024 is eenmalig uitgekeerd Eenmalige uitkeringen van € 1.000 bruto in mei 2026 en mei 2027, parttimers naar rato Salarisschalen per januari 2026 met alleen minimum en maximum per schaal; hier [min, max] als twee treden. Per januari 2027 (+3,25%) bijv. schaal 1 € 3.106 - € 3.327 en schaal 9 € 4.978 - € 6.065 Per 1-1-2026 minimaal € 18 bruto per uur; 5-ploegentoeslag van 28% naar 28,5% 13e maand in december gelijk aan het schaalsalaris van december (incl. ploegentoeslag), na minimaal 1 jaar dienst Dagdienst gemiddeld 38 uur per week, met 11,5 roostervrije dagen effectief 36 uur; volcontinudienst 33,6 uur Pensioenregeling bij ASR; eigen bijdrage en franchise niet gevonden",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/1010_01-01-2026%20tot%2001-01-2028_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 38,
    schalen: {
      '1': [3008, 3222],
      '2': [3141, 3523],
      '3': [3260, 3659],
      '4': [3379, 3877],
      '5': [3519, 4139],
      '6': [3705, 4460],
      '7': [4120, 4844],
      '8': [4364, 5268],
      '9': [4821, 5874],
    },
  },
  periods: [
    {
      from: '2027-01-01',
      note: "+3,25% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 38,
        schalen: {
          '1': [3105.76, 3326.72],
          '2': [3243.08, 3637.5],
          '3': [3365.95, 3777.92],
          '4': [3488.82, 4003],
          '5': [3633.37, 4273.52],
          '6': [3825.41, 4604.95],
          '7': [4253.9, 5001.43],
          '8': [4505.83, 5439.21],
          '9': [4977.68, 6064.91],
        },
      },
    },
  ],
  vergoedingen: [],
};
