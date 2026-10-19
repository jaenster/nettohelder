import type { Cao } from '../types.js';

/**
 * Cao Univar Solutions Netherlands B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Univar Solutions Netherlands B.V.
 * https://cao-kijker.awvn.nl/bestanden/0931_01-01-2026%20tot%2001-01-2028_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2027-01-01 (month) uit de bron
 *   - Basistabel 1-1-2026 teruggerekend uit de tabel per 2027-01-01 (gedeeld door +2,7%)
 *   - Latere tabellen berekend uit de cao-verhogingen (2027-01-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoUnivarSolutionsNetherlands2026: Cao = {
  id: 'univar-solutions-netherlands',
  name: "Cao Univar Solutions Netherlands B.V.",
  year: 2026,
  effectiveNote: "Cao 2026-01-01 t/m 2027-12-31; loontabel per 2027-01-01. Let op: Eindejaarsuitkering van 80% van het maandinkomen van november (6,67% van het jaarsalaris), plus een variabele resultaatuitkering van maximaal 40% van het maandinkomen. Vakantietoeslag 8%, voor werknemers van 23 jaar en ouder minimaal € 1.879,96. Jaarlijks een bruto bedrag van € 250 (voltijd), uitbetaald in november; kan ook voor de fietsregeling worden ingezet. Pensioen: premieovereenkomst (beschikbare premie) zonder eigen bijdrage van de werknemer (0%); maximaal pensioengevend jaarsalaris € 100.000. Salaristabel per 1-1-2027 (schalen A t/m J, treden 0-7, hele euro's per maand); per 1-1-2026 gold een tabel met 3,3% verhoging.",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/0931_01-01-2026%20tot%2001-01-2028_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0667,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      'A': [2721.52, 2754.63, 2785.78],
      'B': [2787.73, 2825.71, 2864.65, 2899.71, 2936.71],
      'C': [2856.86, 2894.84, 2936.71, 2979.55, 3024.34],
      'D': [2929.89, 2972.74, 3014.61, 3063.29, 3108.08, 3145.08],
      'E': [3013.63, 3061.34, 3108.08, 3152.87, 3199.61, 3249.27, 3291.14],
      'F': [3119.77, 3170.4, 3210.32, 3266.8, 3317.43, 3363.19, 3413.83],
      'G': [3259.01, 3305.74, 3353.46, 3408.96, 3459.59, 3506.33, 3555.99],
      'H': [3408.96, 3464.46, 3512.17, 3560.86, 3616.36, 3667.96, 3718.6],
      'I': [3555.01, 3609.54, 3663.1, 3715.68, 3768.26, 3822.78, 3874.39, 3926],
      'J': [3666.02, 3716.65, 3779.94, 3834.47, 3889, 3933.79, 3993.18, 4051.61],
    },
  },
  periods: [
    {
      from: '2027-01-01',
      note: "+2,7% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          'A': [2795, 2829, 2861],
          'B': [2863, 2902, 2942, 2978, 3016],
          'C': [2934, 2973, 3016, 3060, 3106],
          'D': [3009, 3053, 3096, 3146, 3192, 3230],
          'E': [3095, 3144, 3192, 3238, 3286, 3337, 3380],
          'F': [3204, 3256, 3297, 3355, 3407, 3454, 3506],
          'G': [3347, 3395, 3444, 3501, 3553, 3601, 3652],
          'H': [3501, 3558, 3607, 3657, 3714, 3767, 3819],
          'I': [3651, 3707, 3762, 3816, 3870, 3926, 3979, 4032],
          'J': [3765, 3817, 3882, 3938, 3994, 4040, 4101, 4161],
        },
      },
    },
  ],
  vergoedingen: [],
};
