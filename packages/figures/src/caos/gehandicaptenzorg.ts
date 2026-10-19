import type { Cao } from '../types.js';

export const caoGehandicaptenzorg2026: Cao = {
  id: 'gehandicaptenzorg',
  name: 'Cao Gehandicaptenzorg',
  year: 2026,
  effectiveNote:
    'Bruto maandsalarissen uit "Artikel 4:15 Salarisschalen functiegroepen per 1 mei 2026" (Salaristabellen CAO Gehandicaptenzorg 2025-2026, looptijd 1-1-2025 t/m 31-3-2027). Per FWG-functiegroep zijn alle functionele periodieken (treden) opgenomen; de array-index begint bij de laagste in de tabel vermelde trede (FWG 35 vanaf trede 1, FWG 40/45 vanaf trede 2, FWG 50 vanaf trede 1). De FWG-bedragen wijken af van Ziekenhuizen/VVT. Let op: per 1 november 2026 geldt een loonsverhoging van 2% (na de 2% per 1 mei 2026); vanaf die datum gelden hogere bedragen dan hier opgenomen. De aparte garantieschalen DTG, student-werknemer-, ID-baan- en inpassingstabellen zijn niet opgenomen.',
  sourceUrl:
    'https://www.vgn.nl/system/files/2025-05/Salaristabellen%20CAO%20Gehandicaptenzorg%202025-2026_0.pdf',
  pensioenfondsId: 'pfzw',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: {
    kind: 'table',
    hoursPerWeek: 36,
    stepLabel: 'trede',
    unit: 'maand',
    schalen: {
      '5': [2132, 2164, 2197, 2266, 2337, 2373, 2430, 2482, 2536, 2597],
      '10': [2164, 2197, 2266, 2337, 2373, 2430, 2482, 2536, 2597, 2664, 2735],
      '15': [2197, 2266, 2337, 2373, 2430, 2482, 2536, 2597, 2664, 2735, 2812, 2893],
      '20': [2266, 2373, 2430, 2482, 2536, 2597, 2664, 2735, 2812, 2893, 2966, 3052],
      '25': [2337, 2430, 2536, 2597, 2664, 2735, 2812, 2893, 2966, 3052, 3125, 3212],
      '30': [2373, 2482, 2597, 2735, 2812, 2893, 2966, 3052, 3125, 3212, 3296, 3385],
      '35': [2597, 2735, 2893, 2966, 3052, 3125, 3212, 3296, 3385, 3468, 3551, 3635],
      '40': [2893, 3052, 3125, 3212, 3296, 3385, 3468, 3551, 3635, 3718, 3812, 3902],
      '45': [3052, 3212, 3385, 3468, 3551, 3635, 3718, 3812, 3902, 3995, 4077, 4171, 4262],
      '50': [3296, 3468, 3635, 3812, 3995, 4077, 4171, 4262, 4347, 4438, 4527, 4619, 4705],
      '55': [3551, 3718, 3902, 4077, 4262, 4438, 4619, 4705, 4807, 4910, 5012, 5109, 5200],
      '60': [4077, 4262, 4438, 4619, 4807, 5012, 5200, 5394, 5588, 5668, 5754, 5843, 5926],
      '65': [4619, 4910, 5200, 5394, 5588, 5754, 5926, 6106, 6280, 6452, 6631, 6714, 6804, 6890, 6975],
      '70': [5588, 5843, 6106, 6365, 6631, 6890, 7152, 7328, 7549, 7765, 7984, 8096, 8205, 8313, 8424],
      '75': [6631, 6890, 7152, 7440, 7765, 8096, 8424, 8641, 8872, 9115, 9362, 9484, 9607, 9750, 9892, 10036, 10195],
      '80': [7765, 8096, 8424, 8749, 9115, 9484, 9892, 10195, 10509, 10831, 11154, 11316, 11476, 11637, 11797, 11962, 12122],
    },
  },
  vergoedingen: [],
};
