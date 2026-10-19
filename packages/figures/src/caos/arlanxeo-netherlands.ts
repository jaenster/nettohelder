import type { Cao } from '../types.js';

/**
 * Cao ARLANXEO Netherlands B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao ARLANXEO Netherlands B.V.
 * https://www.fnv.nl/getmedia/08ac0b4d-02df-42b2-bf67-d5367343d1ae/1984-arlanxeo-netherlands-b-v-cao-01-07-2024-tm-31-12-2025-v02072025.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-01-01 (month) uit de bron
 *
 * Excluded: none stated
 */
export const caoArlanxeoNetherlands2026: Cao = {
  id: 'arlanxeo-netherlands',
  name: "Cao ARLANXEO Netherlands B.V.",
  year: 2026,
  effectiveNote: "Cao 2026-01-01 t/m 2027-03-31; loontabel per 2026-01-01. Let op: Salarisschalen geven minimum, schaalmidden en maximum; hier als drie treden opgenomen. Minimum C32 is ten minste het wettelijk minimumloon Jaaruitkering van 2 maandinkomens per jaar, inclusief vakantietoeslag (hier verdeeld als 8,33% vakantiegeld en 8,33% eindejaarsuitkering) Pensioen: middelloonregeling ARLANXEO zonder franchise; eigen bijdrage 3,5% van het pensioengevend salaris tot € 84.898 (2026) en 7,5% daarboven tot € 137.800. De 7,5% boven € 84.898 is hier niet meegenomen Verhoging van 1% per 1-1-2026 geldt alleen voor medewerkers die op 1-1-2026 in dienst zijn Dagdienst en 2-/3-ploegendienst gemiddeld 40 uur per week; continudienst 33,6 uur Participatieschaal P31 (100-120% WML) niet opgenomen",
  sourceUrl: "https://www.fnv.nl/getmedia/08ac0b4d-02df-42b2-bf67-d5367343d1ae/1984-arlanxeo-netherlands-b-v-cao-01-07-2024-tm-31-12-2025-v02072025.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.0833,
  eindejaarsuitkeringPct: 0.0833,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      'C32': [2500, 2675, 2852],
      'C33': [2604, 2787, 2971],
      'C34': [2780, 2991, 3205],
      'C35': [3052, 3308, 3561],
      'C36': [3402, 3711, 4019],
      'C37': [3800, 4185, 4572],
      'C38': [4254, 4733, 5214],
      'C39': [4802, 5398, 5997],
      'C40': [5418, 6158, 6899],
      'C41': [6121, 7034, 7949],
    },
  },
  vergoedingen: [],
};
