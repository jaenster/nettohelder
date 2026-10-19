import type { Cao } from '../types.js';

export const caoSchilders2026: Cao = {
  id: 'schilders',
  name: 'Cao Schilders',
  year: 2026,
  effectiveNote:
    'Uurlonen cao SAVG (Schilders-, Afwerkings-, Vastgoedonderhoud- en Glaszetbedrijf) 2025-2028, loontabel per week 1 van 2026 (29 december 2025), met WML-indexatie per 1-1-2026 en een loonsverhoging van +4,0%. Bedragen zijn bruto uurlonen in euro bij de normale arbeidsduur van gemiddeld 37,5 uur per week (7,5 uur per dag). Schalen LG 1 t/m LG 9 zijn de loongroepen; de array loopt van de laagste trede (instap) naar de hoogste trede (maximum), met de middelste trede ("midden") als beoordelingsgrens. LG 1 en LG 2 kennen 7 treden, LG 3 t/m LG 9 kennen 9 treden. Niet opgenomen: de aanloopschalen (15 t/m 20 jaar en 21+) en de BBL-leerlingschalen — deze tool rekent met de reguliere loongroeptreden. De cao kent geen eindejaarsuitkering/13e maand.',
  sourceUrl:
    'https://www.onderhoudnl.nl/stream/loontabellen-savg-week-1-jan2026',
  pensioenfondsId: 'schilders',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'uur',
    hoursPerWeek: 37.5,
    schalen: {
      'LG 1': [17.24, 17.93, 18.67, 19.36, 20.1, 20.82, 21.53],
      'LG 2': [18.18, 18.93, 19.69, 20.46, 21.21, 21.97, 22.74],
      'LG 3': [19.18, 19.76, 20.41, 20.99, 21.6, 22.19, 22.81, 23.4, 24.0],
      'LG 4': [20.3, 20.94, 21.63, 22.32, 23.07, 23.61, 24.2, 24.76, 25.37],
      'LG 5': [21.4, 22.03, 22.73, 23.37, 24.05, 24.7, 25.39, 26.07, 26.71],
      'LG 6': [22.57, 23.26, 23.97, 24.65, 25.38, 26.08, 26.76, 27.47, 28.19],
      'LG 7': [24.11, 24.87, 25.61, 26.36, 27.14, 27.89, 28.63, 29.38, 30.14],
      'LG 8': [25.82, 26.6, 27.39, 28.2, 29.04, 29.84, 30.63, 31.43, 32.26],
      'LG 9': [27.62, 28.48, 29.32, 30.19, 31.05, 31.9, 32.76, 33.63, 34.49],
    },
  },
  vergoedingen: [],
};
