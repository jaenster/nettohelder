import type { Cao } from '../types.js';

/**
 * CAO Supermarkten VGL (o.a. Albert Heijn winkels) — functiegroepen A–E ×
 * functiejaar, HOURLY table per 1 januari 2026 (38-40u, uitbetaling per 4 weken).
 * Vakantiegeld 8%; geen vaste 13e maand. Pension = bpf Levensmiddelen (premie niet
 * centraal gepubliceerd → generieke richtwaarde). Adults 21+ (jeugd 13–20 nog niet
 * meegenomen). Source: officiële VGL CAO PDF, bijlage 2.
 */
export const caoVGL2026: Cao = {
  id: 'vgl',
  name: 'CAO Supermarkten (VGL / Albert Heijn)',
  year: 2026,
  effectiveNote: 'Uurtabel per 1 jan 2026, 21 jaar e.o. Jeugdschalen (13–20) nog niet meegenomen; pensioenpremie generieke richtwaarde.',
  sourceUrl: 'https://www.fnv.nl/cao-sector/handel/supermarkten/cao-supermarkt-vgl',
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'functiejaar',
    unit: 'uur',
    hoursPerWeek: 38,
    schalen: {
      A: [14.51, 14.51],
      B: [14.51, 15.5, 15.72, 15.94, 16.16, 16.6],
      C: [14.73, 16.23, 16.5, 16.78, 17.05, 17.59],
      D: [15.47, 16.96, 17.28, 17.61, 17.94, 18.59],
      E: [17.23, 17.92, 18.32, 18.71, 19.1, 19.89],
    },
  },
  vergoedingen: [],
};
