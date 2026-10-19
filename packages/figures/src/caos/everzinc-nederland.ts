import type { Cao } from '../types.js';

/**
 * Cao EverZinc Nederland B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao EverZinc Nederland B.V.
 * https://www.fnv.nl/getmedia/942b2ead-290a-495d-a208-8ff5170ab378/312-everzinc-nederland-cao-01-05-2025-tm-30-04-2026-v23032026.pdf?ext=.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2025-05-01 (month) uit de bron
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoEverzincNederland2026: Cao = {
  id: 'everzinc-nederland',
  name: "Cao EverZinc Nederland B.V.",
  year: 2026,
  effectiveNote: "Cao 2025-05-01 t/m 2026-04-30; loontabel per 2025-05-01. Let op: Cao 1-5-2025 t/m 30-4-2026 (eindbod werkgever, FNV); een opvolgende cao vanaf 1-5-2026 is niet gevonden Salarisschalen A t/m L (salarisgroep 1-12) per 1-5-2025 in hele euro's, treden 0 t/m 12 functiejaren Arbeidsduur gemiddeld 38,25 uur per week (dagdienst/ploegen); 5-ploegendienst 33,6 uur Vakantietoeslag 8% over 12 maal het maandinkomen, minimaal € 2.841 (23+, per 1-5-2025) Ziekteverzuimpremie in december bij 5% of minder verzuim (percentage afhankelijk van verzuim, niet als vaste eindejaarsuitkering opgenomen) Pensioen bij Pensioenfonds PGB (vaste premie 25,0% van het pensioengevend salaris plus 4,0% van de pensioengrondslag); werknemersbijdrage niet vermeld",
  sourceUrl: "https://www.fnv.nl/getmedia/942b2ead-290a-495d-a208-8ff5170ab378/312-everzinc-nederland-cao-01-05-2025-tm-30-04-2026-v23032026.pdf?ext=.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 38.25,
    schalen: {
      'A': [2578, 2624, 2674, 2719, 2767, 2817],
      'B': [2677, 2730, 2784, 2835, 2888, 2935],
      'C': [2807, 2864, 2919, 2973, 3032, 3083],
      'D': [2946, 3009, 3064, 3127, 3186, 3247],
      'E': [3076, 3136, 3196, 3264, 3327, 3392, 3449],
      'F': [3273, 3345, 3415, 3489, 3560, 3635, 3714],
      'G': [3567, 3652, 3731, 3810, 3884, 3960, 4044, 4122],
      'H': [3940, 4034, 4125, 4222, 4308, 4401, 4499, 4583, 4678],
      'I': [4358, 4462, 4571, 4681, 4789, 4905, 5017, 5126, 5240, 5349],
      'J': [4804, 4937, 5080, 5218, 5349, 5480, 5624, 5757, 5893, 6034, 6169],
      'K': [5486, 5646, 5808, 5965, 6127, 6286, 6447, 6604, 6771, 6930, 7090, 7252],
      'L': [6395, 6603, 6812, 7023, 7230, 7443, 7659, 7867, 8078, 8284, 8499, 8709, 8920],
    },
  },
  vergoedingen: [],
};
