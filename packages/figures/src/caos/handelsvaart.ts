import type { Cao } from '../types.js';

/**
 * Cao Handelsvaart 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Handelsvaart
 * https://zoek.officielebekendmakingen.nl/stcrt-2026-12259.html
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-01-01 (month) uit de bron
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoHandelsvaart2026: Cao = {
  id: 'handelsvaart',
  name: "Cao Handelsvaart",
  year: 2026,
  effectiveNote: "Cao 2026-01-01 t/m 2026-12-31; loontabel per 2026-01-01. Let op: Cao tussen VWH en Nautilus International; looptijd niet in de AVV-tekst vermeld. AVV geldt tot en met 31-12-2026; 1-1-2026 t/m 31-12-2026 aangenomen op basis van de AVV en de eenjarige cao's in eerdere jaren Verhoging 5% per 1-1-2025 uit de eenjarige cao 2025 (volgens KVNR) Scale = gagetabel per 1-1-2026 (maandgages in hele euro's), anciënniteitsjaren 0-10 als treden; loongroep I alleen het bedrag voor 21 jaar en ouder (gebaseerd op het minimumjeugdloon) Tankervaart: extra tankerverhoging per maand per loongroep (bijv. € 246 bij loongroep A, € 482 bij loongroep Q) Vakantietoeslag 8% van de maandgage; uurverdienste is 1/204 van de maandgage Pensioen via Bedrijfspensioenfonds voor de Koopvaardij; werknemerspremie niet in de cao-tekst gevonden Geen eindejaarsuitkering in de AVV-tekst gevonden",
  sourceUrl: "https://zoek.officielebekendmakingen.nl/stcrt-2026-12259.html",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      'I': [3746, 3891, 4037, 4181, 4331, 4474, 4617, 4766, 4909, 5057, 5202],
      'II': [2613, 2699, 2782, 2867, 2950, 3035, 3116, 3204, 3286],
      'III': [2621, 2707, 2795, 2881, 2970, 3061, 3149, 3235, 3323, 3410],
      'A': [2845, 2952, 3063, 3175, 3281, 3391, 3505, 3610, 3723, 3834, 3946],
      'B': [2983, 3097, 3213, 3326, 3446, 3558, 3674, 3785, 3903, 4019, 4134],
      'C': [3173, 3292, 3417, 3537, 3662, 3780, 3906, 4030, 4155, 4278, 4401],
      'D': [3247, 3369, 3498, 3621, 3751, 3875, 3999, 4125, 4251, 4377, 4501],
      'E': [3326, 3456, 3586, 3714, 3844, 3971, 4101, 4235, 4358, 4489, 4615],
      'F': [3403, 3535, 3666, 3799, 3932, 4063, 4196, 4332, 4467, 4596, 4727],
      'G': [3492, 3625, 3762, 3897, 4031, 4165, 4299, 4433, 4574, 4711, 4847],
      'H': [3574, 3708, 3848, 3986, 4125, 4262, 4405, 4544, 4679, 4819, 4957],
      'J': [3875, 4022, 4174, 4330, 4477, 4629, 4780, 4928, 5079, 5234, 5381],
      'K': [4060, 4221, 4379, 4541, 4698, 4859, 5012, 5173, 5331, 5491, 5650],
      'L': [4258, 4425, 4596, 4761, 4924, 5089, 5261, 5429, 5593, 5759, 5925],
      'M': [4473, 4646, 4824, 4999, 5169, 5346, 5525, 5702, 5875, 6047, 6225],
      'N': [4720, 4904, 5086, 5275, 5457, 5643, 5831, 6015, 6197, 6383, 6567],
      'O': [4956, 5149, 5343, 5541, 5733, 5924, 6120, 6317, 6507, 6701, 6896],
      'P': [5203, 5406, 5611, 5816, 6017, 6222, 6424, 6634, 6834, 7037, 7242],
      'Q': [5462, 5675, 5890, 6106, 6318, 6533, 6747, 6964, 7175, 7390, 7602],
    },
  },
  vergoedingen: [],
};
