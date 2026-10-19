import type { Cao } from '../types.js';

export const caoSlagers2026: Cao = {
  id: 'slagers',
  name: 'Cao Slagersbedrijf',
  year: 2026,
  effectiveNote:
    'Salarisschalen per 1 maart 2026 (bijlage 2 bij de Cao voor het Slagersbedrijf, looptijd 1 september 2025 t/m 28 februari 2027). Per 1 maart 2026 zijn de schaallonen 2 t/m 11 met 3,50% verhoogd (na 1,00% per 1 november 2025); een volgende verhoging van 1,50% volgt per 1 januari 2027 (niet opgenomen). De cao kent 11 salarisschalen, gekoppeld aan functiegroepen 1 t/m 11. Bedragen zijn bruto maandlonen in euro op basis van een 38-urige werkweek (maandloon = uurloon x 38 x 4 x 13 / 12). Schaal 1 volgt het wettelijk minimumloon en kent alleen trede 0; de overige schalen lopen van trede 0 t/m hun schaalmaximum. De stappen zijn loontreden (periodieken): trede 0 = inschaling bij indiensttreding vanaf 21 jaar, daarna jaarlijks een trede tot het maximum. De jeugdlonen (15 t/m 20 jaar), die op leeftijd in plaats van trede zijn gebaseerd, zijn niet opgenomen; deze tool rekent met het volwassen loon vanaf trede 0. Niet gemodelleerd: koudetoeslag (€ 10,80/week), avond-/nacht-, overwerk- en ploegentoeslag, productietoeslag (3,40%, vervallen voor nieuwe instroom per 1-11-2025) en de Meesterslager-toeslag (2% op schaalmaximum).',
  sourceUrl:
    'https://www.fnv.nl/getmedia/2d0a9291-7147-45ec-a6e0-e1eaf8622696/601-slagersbedrijf-cao-01-09-2025-tm-28-02-2027-v07042026.pdf',
  pensioenfondsId: 'slagers',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 38,
    schalen: {
      '1': [2431.57],
      '2': [
        2431.57, 2507.87, 2507.87, 2539.16, 2601.73, 2667.6, 2728.53, 2787.81,
      ],
      '3': [
        2507.87, 2521.05, 2530.93, 2580.33, 2633.02, 2685.71, 2736.76, 2791.1,
        2825.68,
      ],
      '4': [
        2521.05, 2532.57, 2652.78, 2703.83, 2746.64, 2787.81, 2817.45, 2852.03,
        2880.02, 2911.31,
      ],
      '5': [
        2532.57, 2842.15, 2898.13, 2940.95, 2998.58, 3051.27,
      ],
      '6': [
        2870.14, 2926.13, 2978.82, 3031.51, 3082.56, 3148.43, 3183.01,
      ],
      '7': [
        2957.41, 3018.34, 3074.33, 3130.31, 3189.59, 3250.52, 3283.45,
      ],
      '8': [
        3026.57, 3102.32, 3171.48, 3230.76, 3291.69, 3354.26, 3385.55,
      ],
      '9': [
        3077.62, 3115.49, 3183.01, 3268.63, 3311.45, 3362.49, 3390.49, 3461.29,
      ],
      '10': [
        3215.94, 3283.45, 3349.32, 3415.19, 3477.76, 3543.63, 3609.49, 3680.3,
      ],
      '11': [
        3217.59, 3286.75, 3360.85, 3425.07, 3500.81, 3578.21, 3653.95, 3732.99,
        3807.09,
      ],
    },
  },
  vergoedingen: [
    {
      id: 'reiskosten',
      label: 'Reiskostenvergoeding woon-werk',
      amount: 0.23,
      unit: 'perKm',
      taxable: false,
      note: 'Per 1 maart 2026 € 0,23/km. Eerste 10 km enkele reis (20 km/dag) eigen bijdrage; vergoed tot max. 55 km enkele reis; alleen gewerkte dagen.',
    },
  ],
};
