import type { Cao } from '../types.js';

/**
 * Cao Cabot B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Cabot B.V.
 * https://cao-kijker.awvn.nl/bestanden/0805_01-09-2025%20tot%2001-09-2026_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2025-09-01 (month) uit de bron
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoCabot2026: Cao = {
  id: 'cabot',
  name: "Cao Cabot B.V.",
  year: 2026,
  effectiveNote: "Cao 2025-09-01 t/m 2026-08-31; loontabel per 2025-09-01. Let op: Eenmalige bruto-uitkering van € 1.000 voor werknemers die op 31 augustus 2025 in dienst waren en op 14 januari 2026 nog in dienst zijn; uitbetaling in de maand volgend op goedkeuring door de FNV-leden (datum niet bekend) Extra uitkering (13e maand) gelijk aan het salaris over november, uitbetaald in november Schalen 19 t/m 13 kennen ook een aanloopsalaris onder periodiek 1 (niet opgenomen); na het maximum gelden anciënniteitsbedragen (3 jaar +1%, 6 jaar +2%, 9 jaar +2,5%); niet opgenomen Ploegendienst kent een kortere arbeidsduur (33,6 of 35,4 uur per week) Pensioen via PGB (basis) plus excedentregeling; premie verdeeld 65% werkgever / 35% werknemer, premiepercentage niet in de cao vermeld Werkgever draagt de gedifferentieerde WGA-premie volledig gedurende de looptijd Resultaatafhankelijke eenmalige beloning (collectief € 550 tot € 1.278, individueel max. € 852) niet opgenomen",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/0805_01-09-2025%20tot%2001-09-2026_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 36,
    schalen: {
      '10': [4387.39, 4541.62, 4694.96, 4848.28, 5002.55, 5156.78, 5310.09, 5463.44, 5618.58, 5771, 5925.25],
      '11': [4006.79, 4133.66, 4261.42, 4389.19, 4516.96, 4644.77, 4770.72, 4899.4, 5026.27, 5154.02, 5281.84],
      '12': [3722.05, 3837.94, 3952.92, 4067.94, 4182.92, 4298.84, 4413.86, 4529.76, 4645.67, 4760.67],
      '13': [3546.82, 3657.21, 3767.67, 3878.12, 3987.66, 4098.04, 4208.47, 4319.83, 4430.29],
      '14': [3366.09, 3472.85, 3578.71, 3684.61, 3791.34, 3897.24, 4003.99, 4110.83, 4215.79],
      '15': [3286.68, 3389.77, 3491.12, 3594.24, 3695.55, 3797.76, 3899.97, 4003.14],
      '16': [3166.23, 3259.29, 3354.19, 3448.2, 3542.25, 3636.27, 3730.22, 3824.24],
      '17': [3076.73, 3168.91, 3260.2, 3352.39, 3445.49, 3537.64, 3628.91],
      '18': [3004.64, 3097.76, 3191.75, 3283.91, 3377.03, 3470.11],
      '19': [2963.55, 3042.96, 3122.4, 3202.69, 3283, 3363.36],
      '20': [2929.8, 3001, 3071.26, 3142.46, 3214.57, 3283.91],
    },
  },
  vergoedingen: [],
};
