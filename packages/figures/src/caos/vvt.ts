import type { Cao } from '../types.js';

export const caoVvt2026: Cao = {
  id: 'vvt',
  name: 'Cao VVT',
  year: 2026,
  effectiveNote:
    'Bruto maandsalarissen uit "Salarisschalen VVT per 1 januari 2026/periode 1" (cao VVT 2025-2026, looptijd 1-1-2025 t/m 31-8-2026). Per FWG-schaal zijn de functionele periodieken (trede 0..n) opgenomen; de laagste trede komt overeen met periodiek 0 (FWG 25/30/35/40 starten op periodiek 1, hun officiële laagste functionele trede). De aanloop- en zij-instroomperiodieken die boven sommige schalen staan zijn niet als aparte treden opgenomen. FWG 5 en 10 ontbreken: in deze tabel bestaan die functiegroepen alleen via de geharmoniseerde jeugd-/aanloop-/functionele schalen rond het wettelijk minimumloon. Let op: in dezelfde cao is per 1 juli 2026 een loonsverhoging van 3,5% afgesproken; vanaf periode 8/2026 gelden hogere bedragen dan hier opgenomen.',
  sourceUrl: 'https://www.actiz.nl/cao-vvt-2025-2026/bijlagen/bijlage-1-salaristabellen',
  pensioenfondsId: 'pfzw',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: {
    kind: 'table',
    hoursPerWeek: 36,
    stepLabel: 'trede',
    unit: 'maand',
    schalen: {
      '15': [2320.5, 2351.37, 2404.03, 2455.2, 2511.31, 2573.47, 2643.39, 2716.43, 2798.8],
      '20': [2404.03, 2455.2, 2511.31, 2573.47, 2643.39, 2716.43, 2798.8, 2881.14, 2960.9],
      '25': [2511.31, 2573.47, 2643.39, 2716.43, 2798.8, 2881.14, 2960.9, 3050.6, 3124.01],
      '30': [2573.47, 2643.39, 2716.43, 2798.8, 2881.14, 2960.9, 3050.6, 3124.01, 3212.5, 3294.84],
      '35': [2643.39, 2716.43, 2798.8, 2881.14, 2960.9, 3050.6, 3124.01, 3212.5, 3294.84, 3384.01, 3471.46],
      '40': [2881.14, 3050.6, 3124.01, 3212.5, 3294.84, 3384.01, 3471.46, 3557.17, 3644.59, 3733.75],
      '45': [3384.01, 3471.46, 3557.17, 3644.59, 3733.75, 3824.58, 3918.86, 4016.62, 4102.26],
      '50': [3471.46, 3644.59, 3824.58, 4016.62, 4102.26, 4198.28, 4292.61, 4381.75, 4470.82, 4565.13, 4659.42],
      '55': [3644.59, 3918.86, 4102.26, 4292.61, 4470.82, 4659.42, 4746.9, 4834.28, 4935.48, 5038.32, 5139.46, 5230.32],
      '60': [4470.82, 4659.42, 4834.28, 5038.32, 5230.32, 5427.49, 5617.74, 5701.76, 5787.48, 5876.59, 5962.34],
      '65': [5038.32, 5230.32, 5331.45, 5427.49, 5525.21, 5617.74, 5787.48, 5962.34, 6138.9, 6313.73, 6490.32, 6666.89, 6752.61, 6840.02, 6930.89, 7018.3],
      '70': [5962.34, 6138.9, 6228.03, 6313.73, 6404.59, 6666.89, 6930.89, 7107.79, 7282.19, 7497.34, 7715.77, 7932.55, 8039.23, 8150.99, 8259.39, 8367.8],
      '75': [6840.02, 7018.3, 7107.79, 7192.46, 7282.19, 7388.9, 7715.77, 8039.23, 8367.8, 8586.25, 8813.21, 9055.34, 9300.96, 9419.47, 9543.1, 9685.33, 9829.32, 9969.85, 10113.8],
      '80': [7932.55, 8150.99, 8367.8, 8476.16, 8586.25, 8692.93, 9055.34, 9419.47, 9829.32, 10113.8, 10394.94, 10679.45, 10967.4, 11109.64, 11253.6, 11395.82, 11538.07, 11683.71, 11825.98],
    },
  },
  vergoedingen: [],
};
