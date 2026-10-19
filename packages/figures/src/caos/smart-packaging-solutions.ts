import type { Cao } from '../types.js';

/**
 * Cao Smart Packaging Solutions 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Smart Packaging Solutions
 * https://cao-kijker.awvn.nl/bestanden/2942_01-10-2025%20tot%2001-01-2027_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-01-01 (month) uit de bron
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoSmartPackagingSolutions2026: Cao = {
  id: 'smart-packaging-solutions',
  name: "Cao Smart Packaging Solutions",
  year: 2026,
  effectiveNote: "Cao 2025-10-01 t/m 2026-12-31; loontabel per 2026-01-01. Let op: Cao 1-10-2025 t/m 31-12-2026 volgens onderhandelingsresultaat van 2 december 2025 (4% per 1-1-2026); verhoging 3% per 1-2-2025 uit de vorige cao (1-7-2024 t/m 1-10-2025) Minimumloon in de reguliere schalen € 18 per uur; aanloopschaal -3 geschrapt Vakantietoeslag 8% (met minimumbedrag) en eindejaarsuitkering 8,33% volgens de cao 2022-2024; niet geverifieerd voor de nieuwe cao Gemiddeld 36 uur per week (ploegendienst tot 44 uur per week met compensatie in vrije tijd) Winstuitkering afhankelijk van bedrijfsresultaat, niet opgenomen; koffiegeld per 1-1-2026 afgeschaft Pensioengegevens niet gevonden Salaristabel per 1-1-2026 (incl. 4%), groep 1-11; eerste twee tredes per groep zijn aanlooptredes -2 en -1",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/2942_01-10-2025%20tot%2001-01-2027_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 36,
    schalen: {
      '1': [2314, 2571, 2818, 2870, 2939, 2997, 3056, 3113, 3177],
      '2': [2335, 2590, 2845, 2907, 2972, 3029, 3095, 3161, 3223],
      '3': [2361, 2616, 2869, 2942, 3005, 3073, 3135, 3201, 3269],
      '4': [2406, 2669, 2934, 3002, 3073, 3141, 3206, 3277, 3346],
      '5': [2438, 2706, 2970, 3035, 3110, 3182, 3244, 3318, 3389, 3455],
      '6': [2519, 2797, 3073, 3145, 3221, 3301, 3367, 3449, 3519, 3592],
      '7': [2603, 2887, 3178, 3254, 3342, 3425, 3510, 3594, 3676, 3762],
      '8': [2914, 3139, 3285, 3367, 3452, 3534, 3623, 3707, 3793, 3872, 3959],
      '9': [3056, 3293, 3449, 3551, 3641, 3741, 3840, 3936, 4036, 4125, 4226],
      '10': [3243, 3495, 3663, 3764, 3865, 3969, 4068, 4176, 4274, 4375, 4474, 4580],
      '11': [3458, 3729, 3906, 4024, 4122, 4229, 4338, 4447, 4554, 4667, 4772, 4877, 4985],
    },
  },
  vergoedingen: [],
};
