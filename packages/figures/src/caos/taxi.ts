import type { Cao } from '../types.js';

/**
 * CAO Zorgvervoer en Taxi 2026. DRAFT from cao-pipeline (confidence: high).
 * Source: CAO Zorgvervoer en Taxi 2026-2027 (version 03-03-2026)
 * https://www.fnv.nl/getmedia/2c9aa04a-a0c5-4638-9a76-7c677772372b/501-zorgvervoer-en-taxi-cao-01-01-2026-tm-31-12-2027-v03032026.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Hourly rate calculation: 40 hours/week * 52 weeks/12 months = 173.33 hours/month average assumed
 *   - Non-driving personnel salary table has no step progression beyond trede 7 for most functions - verify if this is complete
 *   - Driving personnel salary table appears to have only treads 5-12, with notes about automatic rescaling from treads 3-4 in 2023
 *
 * Excluded: jeugdschalen (under 18 års ages for most roles, but youth scales 15-19 are provided); aanloopschalen (not mentioned - apprenticeships covered separately); one-off payments beyond vacation and allowances; sector-specific supplementary pension contributions beyond base pension; HAP toeslag and OV ORT (explicitly excluded from vacation allowance calculation)
 */
export const caoTaxi2026: Cao = {
  id: 'taxi',
  name: "CAO Zorgvervoer en Taxi",
  year: 2026,
  effectiveNote: "Effective 1 January 2026 (3.5% salary increase); indexed at 1 January 2027 by additional 3.5%; plus 1% reserved per 1 July 2027 for additional allowance increases. Vacation allowance of 8% calculated over reference period 1 May prior year to 30 April current year. Excludes youth salary scales (ages 15-20), overtime allowances beyond base hourly rates, and various toeslagen explicitly noted.",
  sourceUrl: "https://www.fnv.nl/getmedia/2c9aa04a-a0c5-4638-9a76-7c677772372b/501-zorgvervoer-en-taxi-cao-01-01-2026-tm-31-12-2027-v03032026.pdf",
  pensioenfondsId: 'vervoer',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      'rijdend': [2689.62, 2746.52, 2803.4, 2860.26, 2917.15, 2974.04, 3030.91, 3087.8],
      'telefonist': [2593.3, 2593.3, 2593.3, 2593.3, 2647.56, 2701.69, 2756, 2808.32],
      'administratief': [2593.3, 2593.3, 2595.87, 2651.29, 2703.61, 2825.79],
      'centralist': [2593.3, 2668.72, 2738.54, 2808.32, 2878.12, 2947.89, 3017.69, 3087.48],
      'overige': [2593.3, 2668.72, 2738.54, 2808.32, 2878.12, 2947.89, 3017.69, 3087.48],
    },
  },
  vergoedingen: [
    {id:'reiskostenvergoeding',label:'Travel cost allowance (home-work)',amount:0.23,unit:'perKm',taxable:false,note:'€0.23 per km for distances above 10 km single trip, max 45 km; max €16.10/day. Effective 1 January 2026.'},
  ],
};
