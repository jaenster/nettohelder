import type { Cao } from '../types.js';

export const caoApotheken2026: Cao = {
  id: 'apotheken',
  name: 'Cao Apotheken',
  year: 2026,
  effectiveNote:
    'Bruto maandsalarissen uit "Salarisbedragen Cao Apotheken per 1-1-2026 (indexatie 8%)" (cao Apotheken 2024-2027, algemeen verbindend verklaard, normwerkweek 36 uur = 1878 uur/jaar). Per salarisschaal 1 t/m 9 zijn de functiejaren (0..n) opgenomen; de schalen verschillen in lengte (schalen 1-4 lopen t/m functiejaar 7, schalen 5 en 7-9 t/m functiejaar 9). De jeugdschalen (15/16/17 jaar) zijn niet als treden opgenomen omdat ze leeftijd- in plaats van ervaringsgebonden zijn. Eindejaarsuitkering 4% (december 2026) per cao-afspraak.',
  sourceUrl: 'https://www.knmp.nl/sites/default/files/2025-12/salarisschalen_cao_apotheken_m.i.v_01-01-2026_v.dec2025.pdf',
  pensioenfondsId: 'pma',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.04,
  salary: {
    kind: 'table',
    stepLabel: 'functiejaar',
    unit: 'maand',
    hoursPerWeek: 36,
    schalen: {
      '1': [2302.12, 2302.12, 2302.12, 2302.12, 2316.87, 2378.04, 2440.8, 2505.25],
      '2': [2302.12, 2302.12, 2331.17, 2392.7, 2455.88, 2520.7, 2587.26, 2655.55],
      '3': [2302.12, 2346.6, 2422.65, 2501.15, 2582.16, 2665.86, 2752.21, 2841.39],
      '4': [2349.45, 2439.21, 2532.41, 2629.12, 2729.58, 2833.84, 2942.1, 3054.48],
      '5': [2454.76, 2537.96, 2624.01, 2712.98, 2804.93, 2900.03, 2998.32, 3100.0, 3205.06, 3313.73],
      '6': [2694.06, 2794.54, 2898.8, 3006.89, 3119.06, 3235.41, 3356.09, 3481.27, 3611.12, 3745.83],
      '7': [2888.79, 2998.85, 3113.12, 3231.75, 3354.86, 3482.67, 3615.35, 3753.1, 3896.09, 4044.55],
      '8': [3235.45, 3358.75, 3486.69, 3619.53, 3757.46, 3900.59, 4049.2, 4203.48, 4363.63, 4529.9],
      '9': [3656.06, 3795.36, 3939.95, 4090.07, 4245.9, 4407.67, 4575.61, 4749.94, 4930.91, 5120.14],
    },
  },
  vergoedingen: [],
};
