import type { Cao } from '../types.js';

/**
 * CAO Primair Onderwijs (PO) 2025–2027 — salaristabellen per 1 november 2025
 * (the table in force for the bulk of 2026; a +1,2% staps lands per 1 nov 2026).
 * Fixed schaal × trede table, maandsalarissen.
 *
 * Leraren: schalen LB/LC/LD/LE (the functiehuis the CAO now publishes; the older
 * L10/L11/L12 map to LB/LC/LD). OOP: onderwijsondersteunend personeel, schalen 1–11.
 * The published OOP grid is ragged — each schaal has its own trede-range — and is
 * transposed here so schalen[schaal] = bruto per trede in ascending order.
 *
 * Minimumsalaris-correctie applied: per 1 jan 2026 the sector minimum is €2.559,54;
 * treden that the table prices below that are corrected up to it (per the CAO note).
 *
 * Vakantie-uitkering 8% + eindejaarsuitkering 8,33% (both standard PO, monthly-accrued).
 * Pension = ABP. Source: officiële PO-Raad salaristabellen cao PO 2025-2027, per 1-11-2025.
 */
export const caoPo2026: Cao = {
  id: 'po',
  name: 'Cao Primair Onderwijs',
  year: 2026,
  effectiveNote:
    'Salaristabel per 1 nov 2025 (geldig grootste deel van 2026; +1,2% per 1 nov 2026 nog niet meegenomen). Leraren LB–LE + OOP 1–11, minimumsalaris €2.559,54 per 1-1-2026 verwerkt. Niet meegenomen: OOP 12–17, (adjunct-)directeuren D12–D15, en de OOP-10-conversie per 1 juli 2026.',
  sourceUrl: 'https://www.poraad.nl/bedrijfsvoering/financien-primair-onderwijs/salaristabellen-cao-akkoord-primair-onderwijs-2025-2027',
  pensioenfondsId: 'abp',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: {
    kind: 'table',
    hoursPerWeek: 40,
    stepLabel: 'trede',
    unit: 'maand',
    schalen: {
      LB: [3622, 3710, 3821, 3933, 4046, 4185, 4348, 4533, 4742, 4975, 5234, 5520],
      LC: [3644, 3817, 4015, 4213, 4409, 4629, 4873, 5138, 5427, 5740, 6074, 6432],
      LD: [3659, 3874, 4125, 4376, 4627, 4910, 5225, 5577, 5960, 6378, 6828, 7313],
      LE: [4695, 4870, 5025, 5341, 5691, 6011, 6329, 6649, 6969, 7287, 7605, 8065],
      '1': [2559.54, 2559.54, 2559.54, 2580, 2634, 2689, 2743],
      '2': [2559.54, 2559.54, 2580, 2641, 2702, 2764, 2825, 2886],
      '3': [2559.54, 2574, 2651, 2729, 2806, 2884, 2961, 3039, 3116],
      '4': [2559.54, 2598, 2673, 2748, 2822, 2897, 2971, 3046, 3121, 3195, 3270],
      '5': [2559.54, 2637, 2723, 2810, 2896, 2982, 3068, 3154, 3240, 3326, 3412],
      '6': [2672, 2766, 2859, 2953, 3047, 3141, 3235, 3329, 3422, 3516, 3610],
      '7': [2798, 2902, 3005, 3109, 3212, 3316, 3419, 3523, 3626, 3730, 3833, 3937],
      '8': [3022, 3152, 3281, 3411, 3541, 3671, 3800, 3930, 4060, 4190, 4320, 4449],
      '9': [3326, 3496, 3835, 4030, 4201, 4371, 4534, 4695, 4870, 5025],
      '10': [3326, 3659, 3835, 4030, 4201, 4371, 4534, 4695, 4870, 5025, 5185, 5341, 5520],
      '11': [3644, 3817, 4015, 4213, 4409, 4629, 4873, 5138, 5427, 5740, 6074, 6432],
    },
  },
  vergoedingen: [],
};
