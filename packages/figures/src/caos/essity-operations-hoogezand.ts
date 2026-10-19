import type { Cao } from '../types.js';

/**
 * Cao Essity Operations Hoogezand B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Essity Operations Hoogezand B.V.
 * https://cao-kijker.awvn.nl/bestanden/1417_01-01-2026%20tot%2001-01-2027_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-01-01 (month) uit de bron
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoEssityOperationsHoogezand2026: Cao = {
  id: 'essity-operations-hoogezand',
  name: "Cao Essity Operations Hoogezand B.V.",
  year: 2026,
  effectiveNote: "Cao 2026-01-01 t/m 2026-12-31; loontabel per 2026-01-01. Let op: Cao 2026 volgens verbeterd eindbod van mei 2026: 3% structureel per 1-1-2026 (met terugwerkende kracht) Eenmalige prestatiegerelateerde uitkering € 250 bruto (naar rato) voor wie op 1-11-2026 in dienst is, alleen als de locatie gemiddeld 22 of minder ongeplande stops per 24 uur haalt; daarom niet als vaste eenmalige uitkering opgenomen Salarisschalen per 1-1-2026 als functiejarenschaal (functiejaren 0 t/m max per groep); minimum bruto-uurloon € 16,00 Fulltime 36 uur per week; 5-ploegendienst gemiddeld 33,6 uur Groepen X en XI uit de cao 2024-2025 komen in de schalen 2026 niet meer voor Pensioen via aparte Pensioencao Essity Netherlands; werknemerspremie niet gevonden, niet opgenomen Verhoging per 1-1-2025 (3,5%) volgt uit de cao 2024-2026 (schalen per 1-1-2025)",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/1417_01-01-2026%20tot%2001-01-2027_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 36,
    schalen: {
      'I': [2735, 2769, 2806, 2839, 2874, 2910],
      'II': [2778, 2819, 2856, 2897, 2928, 2972, 3018, 3053],
      'III': [2864, 2910, 2957, 3008, 3046, 3090, 3146, 3189],
      'IV': [3013, 3053, 3104, 3159, 3209, 3260, 3311, 3357],
      'V': [3169, 3233, 3293, 3349, 3406, 3469, 3527, 3591],
      'VI': [3348, 3402, 3468, 3522, 3584, 3641, 3700, 3761, 3825],
      'VII': [3542, 3614, 3696, 3769, 3842, 3919, 3987, 4062, 4132],
      'VIII': [3811, 3894, 3984, 4069, 4150, 4244, 4327, 4409, 4500, 4592],
      'IX': [4037, 4124, 4217, 4306, 4402, 4495, 4582, 4674, 4765, 4861, 4946],
    },
  },
  vergoedingen: [],
};
