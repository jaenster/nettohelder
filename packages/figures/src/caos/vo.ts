import type { Cao } from '../types.js';

/**
 * CAO Voortgezet Onderwijs (VO) 2025–2027 — salaristabellen per 1 november 2025
 * (the table in force for the bulk of 2026; a +1,2% staps lands per 1 nov 2026).
 * Fixed schaal × trede table, maandsalarissen.
 *
 * Docenten: schalen LB/LC/LD/LE. OOP: onderwijsondersteunend personeel, functieschalen
 * 1–17. The published OOP grid is ragged — each schaal has its own trede-range — and is
 * transposed here so schalen[schaal] = bruto per trede in ascending order.
 *
 * OOP-schaal 10 staat hier met de 13-treden overgangsstructuur per 1-11-2025; per
 * 1-7-2026 wordt OOP-10 gelijk aan schaal LB (conversietabel in de bron, niet verwerkt).
 *
 * Vakantie-uitkering 8% (uitbetaald in mei) + eindejaarsuitkering 8,33% (maandelijks
 * opgebouwd, uitbetaald in december). Pension = ABP.
 * Source: officiële VO-raad salaristabellen cao vo 2025-2027, kolom per 1-11-2025.
 */
export const caoVo2026: Cao = {
  id: 'vo',
  name: 'Cao Voortgezet Onderwijs',
  year: 2026,
  effectiveNote:
    'Salaristabel per 1 nov 2025 (geldig grootste deel van 2026; +1,2% per 1 nov 2026 nog niet meegenomen). Docenten LB–LE + OOP-functieschalen 1–17. Niet meegenomen: de lio-schaal, HOS 15-jaarsuitzicht/instroom-/doorstroombanen, en de OOP-10-conversie naar LB per 1 juli 2026.',
  sourceUrl: 'https://www.vo-raad.nl/onderwerpen/cao-vo',
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
      '1': [2416, 2471, 2525, 2580, 2634, 2689, 2743],
      '2': [2458, 2519, 2580, 2641, 2702, 2764, 2825, 2886],
      '3': [2496, 2574, 2651, 2729, 2806, 2884, 2961, 3039, 3116],
      '4': [2524, 2598, 2673, 2748, 2822, 2897, 2971, 3046, 3121, 3195, 3270],
      '5': [2551, 2637, 2723, 2810, 2896, 2982, 3068, 3154, 3240, 3326, 3412],
      '6': [2672, 2766, 2859, 2953, 3047, 3141, 3235, 3329, 3422, 3516, 3610],
      '7': [2798, 2902, 3005, 3109, 3212, 3316, 3419, 3523, 3626, 3730, 3833, 3937],
      '8': [3022, 3152, 3281, 3411, 3541, 3671, 3800, 3930, 4060, 4190, 4320, 4449],
      '9': [3326, 3496, 3835, 4030, 4201, 4371, 4534, 4695, 4870, 5025],
      '10': [3326, 3659, 3835, 4030, 4201, 4371, 4534, 4695, 4870, 5025, 5185, 5341, 5520],
      '11': [3644, 3817, 4015, 4213, 4409, 4629, 4873, 5138, 5427, 5740, 6074, 6432],
      '12': [3659, 3874, 4125, 4376, 4627, 4910, 5225, 5577, 5960, 6378, 6828, 7313],
      '13': [5691, 5889, 6088, 6285, 6483, 6682, 6879, 7076, 7274, 7471, 7670, 7867, 8065],
      '14': [6517, 6681, 7004, 7209, 7416, 7621, 7828, 8036, 8253, 8478, 8708],
      '15': [6841, 7004, 7209, 7621, 7828, 8036, 8253, 8478, 8708, 8984, 9270, 9562],
      '16': [7416, 7621, 7828, 8253, 8478, 8708, 8984, 9270, 9562, 9868, 10179, 10503],
      '17': [8036, 8253, 8478, 8984, 9270, 9562, 9868, 10179, 10503, 10839, 11182, 11537],
    },
  },
  vergoedingen: [],
};
