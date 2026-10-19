import type { Cao } from '../types.js';

/**
 * Cao Timmerindustrie 2025-2027 (cao-code 09). Maandlonen per 1 januari 2026
 * (loonsverhoging +2,00%). De loonstructuur kent functiegroepen A t/m I × treden
 * (trede 0 = "0 / vanaf 21 jaar", daarboven ervaringstreden en extra treden).
 * Per deze cao is schaal A volledig vervallen en zijn van schaal B de treden 1 en
 * 2 vervallen, zodat de structuur start bij B3; A is daarom niet opgenomen en B
 * begint hier op zijn laagste geldige trede (B3). Elke schaal-array start op de
 * laagste geldige trede van die schaal en loopt oplopend. Jeugdtreden en
 * BBL/leerlinglonen zijn niet opgenomen.
 */
export const caoTimmerindustrie2026: Cao = {
  id: 'timmerindustrie',
  name: 'Cao Timmerindustrie',
  year: 2026,
  effectiveNote:
    'Maandlonen per 1 januari 2026 (+2,00%), cao Timmerindustrie 2025-2027. Normale arbeidsduur 37,5 uur per week. Functiegroepen B t/m I; schaal A is in deze cao volledig vervallen en van schaal B zijn de treden 1 en 2 vervallen (structuur start bij B3), daarom is A niet opgenomen en begint B op trede 3. Elke schaal start op zijn laagste geldige trede. Jeugdtreden (16-20 jaar) en BBL/leerlinglonen zijn niet opgenomen. Er is geen vaste eindejaarsuitkering in deze cao (alleen een eindejaarsuitkering bij arbeidsongeschiktheid, niet als structureel loonbestanddeel).',
  sourceUrl:
    'https://nbvt.nl/wp-content/uploads/2025/10/Loontabellen-cao-Timmer-per-1-januari-2026_def.pdf',
  pensioenfondsId: 'bpfbouw',
  vakantiegeldPct: 0.0833,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    hoursPerWeek: 37.5,
    stepLabel: 'trede',
    unit: 'maand',
    schalen: {
      B: [2536.42, 2582.43, 2628.38, 2674.41, 2720.38],
      C: [2553.25, 2615.17, 2677.08, 2739.06, 2800.9, 2862.84, 2924.74, 2986.67],
      D: [2785.45, 2849.58, 2913.73, 2977.87, 3042.06, 3106.19, 3170.35, 3234.5, 3298.64, 3362.74],
      E: [3056.39, 3126.28, 3196.22, 3266.14, 3336.12, 3406.04, 3475.95, 3545.92, 3615.81, 3685.76, 3755.72, 3825.67],
      F: [3520.76, 3598.72, 3676.66, 3754.64, 3832.63, 3910.52, 3988.53, 4066.45, 4144.38, 4222.36, 4300.31, 4378.24],
      G: [4023.86, 4101.38, 4178.91, 4256.48, 4334.03, 4411.57, 4489.1, 4566.66, 4644.2, 4721.73, 4799.2, 4876.74],
      H: [4410.86, 4489.1, 4567.33, 4645.55, 4723.76, 4801.99, 4880.28, 4958.5, 5036.72, 5114.92, 5193.2, 5271.48],
      I: [4797.8, 4880.68, 4963.48, 5046.31, 5129.11, 5211.97, 5294.72, 5377.59, 5460.35, 5543.22, 5626.04, 5708.89, 5791.7],
    },
  },
  vergoedingen: [],
};
