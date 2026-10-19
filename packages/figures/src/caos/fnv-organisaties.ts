import type { Cao } from '../types.js';

/**
 * Cao FNV-Organisaties 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao FNV-Organisaties
 * https://cao-kijker.awvn.nl/bestanden/1681_01-05-2023%20tot%2001-05-2026_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2025-01-01 (month) uit de bron
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoFnvOrganisaties2026: Cao = {
  id: 'fnv-organisaties',
  name: "Cao FNV-Organisaties",
  year: 2026,
  effectiveNote: "Cao 2023-05-01 t/m 2026-04-30; loontabel per 2025-01-01. Let op: Cao 1-5-2023 t/m 30-4-2026 (versie februari 2025); geen opvolgende cao gevonden Jaarlijks per 1 januari automatische prijscompensatie (CPI alle huishoudens afgeleid, oktober-oktober), boven 5% doorgeschoven naar volgend jaar (max. +2% extra), ondergrens 0%. Per 1-1-2025 was dit 2,6%; de APC per 1-1-2026 is niet gevonden Salaristabel per 1-1-2025 (schaal 1 t/m 18, periodiek 0 t/m 11) Eenmalige uitkering van € 500 bruto per 1-1-2025 en per 1-1-2026 (naar rato dienstverband) Pensioen bij PFZW: werknemersbijdrage is 22% van de totale pensioenpremie die de werkgever afdraagt; als percentage van de grondslag niet vermeld Voltijd gemiddeld 35 uur per week",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/1681_01-05-2023%20tot%2001-05-2026_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.0833,
  eindejaarsuitkeringPct: 0.0833,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 35,
    schalen: {
      '1': [2647, 2647, 2647, 2647],
      '2': [2647, 2647, 2647, 2687],
      '3': [2647, 2647, 2647, 2727, 2835],
      '4': [2647, 2647, 2711, 2817, 2921],
      '5': [2647, 2717, 2819, 2921, 3024, 3125],
      '6': [2701, 2812, 2919, 3029, 3140, 3248, 3358],
      '7': [2852, 2982, 3109, 3238, 3367, 3496, 3624],
      '8': [3030, 3160, 3288, 3416, 3546, 3674, 3800, 3931],
      '9': [3249, 3396, 3544, 3692, 3839, 3987, 4136, 4281],
      '10': [3513, 3661, 3807, 3955, 4104, 4252, 4397, 4545, 4693],
      '11': [3826, 3994, 4160, 4330, 4497, 4664, 4832, 4999, 5166],
      '12': [4201, 4366, 4527, 4689, 4852, 5014, 5177, 5341, 5502, 5666],
      '13': [4622, 4827, 5033, 5239, 5444, 5649, 5855, 6064, 6269, 6475],
      '14': [5100, 5342, 5582, 5819, 6060, 6300, 6538, 6779, 7018, 7258],
      '15': [5706, 5930, 6157, 6383, 6606, 6833, 7058, 7285, 7511, 7737, 7963],
      '16': [6338, 6577, 6818, 7057, 7299, 7538, 7779, 8020, 8259, 8499, 8742],
      '17': [7152, 7374, 7597, 7819, 8042, 8260, 8485, 8707, 8926, 9150, 9373, 9595],
      '18': [8089, 8313, 8533, 8757, 8980, 9202, 9422, 9645, 9868, 10091, 10312, 10535],
    },
  },
  vergoedingen: [],
};
