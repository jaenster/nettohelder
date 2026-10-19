import type { Cao } from '../types.js';

export const caoArchitecten2026: Cao = {
  id: 'architecten',
  name: 'Cao Architectenbureaus',
  year: 2026,
  effectiveNote:
    'Salaristabel per 1 januari 2026 (uitwerking artikel 22 lid 2 cao Architectenbureaus 2025-2026, bruto salarissen per 1-1-2026 met 3,5% verhoogd). Bruto-maandsalarissen in euro bij een 40-urige werkweek. Salarisschalen 1 t/m 10 (art. 20), salaristreden 0 t/m 9 (index = salaristrede). Lege cellen in de officiele tabel (lage schalen kennen minder treden, hoge schalen starten hoger) zijn opgevuld met het laatste geldige trede-bedrag, zodat elke schaal-array dezelfde lengte heeft; in de praktijk geldt voor schaal 1 t/m 4 trede 0-4/0-7 en stroomt men hoger door. De optionele "10% uitloop" boven de hoogste trede (art. 20) en de aanlooptreden (art. 21B: 3002 / 3094 / 3189) zijn niet als losse trede opgenomen. Cao liep formeel t/m 30-6-2026; tabel per 1-1-2026 is de laatst gepubliceerde.',
  sourceUrl:
    'https://www.sfa-architecten.nl/app/uploads/2026/02/salaristabellen-cao-2025.pdf',
  pensioenfondsId: 'architecten',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      '1': [2922, 2980, 3058, 3138, 3217, 3217, 3217, 3217, 3217, 3217],
      '2': [2922, 3002, 3085, 3172, 3261, 3348, 3430, 3519, 3519, 3519],
      '3': [3002, 3094, 3189, 3282, 3379, 3473, 3565, 3663, 3756, 3850],
      '4': [3282, 3386, 3490, 3594, 3697, 3802, 3902, 4006, 4111, 4213],
      '5': [3594, 3706, 3820, 3935, 4046, 4160, 4274, 4388, 4500, 4613],
      '6': [3935, 4058, 4182, 4308, 4433, 4558, 4680, 4807, 4931, 5056],
      '7': [4308, 4446, 4582, 4720, 4856, 4992, 5129, 5266, 5403, 5541],
      '8': [4720, 4868, 5019, 5170, 5321, 5472, 5622, 5773, 5925, 6075],
      '9': [5170, 5335, 5501, 5667, 5835, 5997, 6165, 6329, 6496, 6660],
      '10': [5667, 5849, 6031, 6211, 6393, 6576, 6757, 6940, 7124, 7304],
    },
  },
  vergoedingen: [],
};
