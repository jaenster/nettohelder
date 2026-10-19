import type { Cao } from '../types.js';

/**
 * Cao Folding Boxboard Eerbeek B.V. (FolBB) 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Folding Boxboard Eerbeek B.V. (FolBB)
 * https://www.fnv.nl/getmedia/fefb6855-e612-4b57-8f9f-1525a665cd13/81-folding-boxboard-eerbeek-b-v-folbb-cao-01-07-2025-tm-31-12-2026-v09102025.pdf?ext=.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-07-01 (month) uit de bron
 *   - Basistabel 1-1-2026 teruggerekend uit de tabel per 2026-07-01 (gedeeld door +3,75%)
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-07-01)
 *
 * Excluded: none stated
 */
export const caoFolbb2026: Cao = {
  id: 'folbb',
  name: "Cao Folding Boxboard Eerbeek B.V. (FolBB)",
  year: 2026,
  effectiveNote: "Cao 2025-07-01 t/m 2026-12-31; loontabel per 2026-07-01. Let op: Vakantietoeslag 8% van het jaarinkomen, minimaal € 2.477 per jaar (fulltime) per 1-7-2026; gratificatie 8% van het jaarinkomen aan het einde van het jaar. Arbeidsduur gemiddeld 1746 uur per jaar netto (dagdienst/tweeploegendienst, met 68 uur ATV-spaarregeling); geen weekuren vermeld. Arbeidsmarkttoeslag Technische Dienst € 250 bruto per maand (pensioengevend). Resultaatafhankelijke uitkering van maximaal € 1.500 bruto per jaar vanaf 2026 (uitwerking door werkgroep; niet verwerkt). Pensioen: middelloonregeling bij PGB, vaste werknemersbijdrage 8,75% van de pensioengrondslag; franchise = fiscaal minimum (€ 18.475 in 2025). Gegevens over de looptijd en verhoging komen uit het eindbod van juni 2025.",
  sourceUrl: "https://www.fnv.nl/getmedia/fefb6855-e612-4b57-8f9f-1525a665cd13/81-folding-boxboard-eerbeek-b-v-folbb-cao-01-07-2025-tm-31-12-2026-v09102025.pdf?ext=.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.08,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      '1': [2487.71, 2517.59, 2552.29, 2585.06],
      '2': [2517.59, 2552.29, 2585.06, 2609.16, 2669.88],
      '3': [2566.75, 2606.27, 2651.57, 2695.9, 2750.84, 2793.25],
      '4': [2633.25, 2675.66, 2724.82, 2773.98, 2826.02, 2877.11],
      '5': [2716.14, 2769.16, 2825.06, 2873.25, 2933.01, 2985.06, 3044.82],
      '6': [2795.18, 2854.94, 2914.7, 2971.57, 3028.43, 3085.3, 3140.24],
      '7': [2894.46, 2953.25, 3009.16, 3072.77, 3130.6, 3212.53, 3260.72, 3318.55],
      '8': [3000.48, 3061.2, 3122.89, 3187.47, 3248.19, 3312.77, 3380.24, 3439.04],
      '9': [3116.14, 3165.3, 3247.23, 3315.66, 3382.17, 3455.42, 3520.96, 3589.4, 3653.01],
      '10': [3302.17, 3374.46, 3441.93, 3518.07, 3589.4, 3657.83, 3732.05, 3806.27, 3876.63, 3950.84],
      '11': [3496.87, 3578.8, 3652.05, 3729.16, 3811.08, 3878.55, 3958.55, 4037.59, 4108.92, 4189.88, 4267.95],
      '12': [3725.3, 3811.08, 3893.01, 3971.08, 4056.87, 4138.8, 4222.65, 4311.33, 4393.25, 4476.14, 4558.07],
      '13': [3955.66, 4043.37, 4133.98, 4219.76, 4311.33, 4399.04, 4483.86, 4576.39, 4664.1, 4749.88, 4835.66],
    },
  },
  periods: [
    {
      from: '2026-07-01',
      note: "+3,75% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          '1': [2581, 2612, 2648, 2682],
          '2': [2612, 2648, 2682, 2707, 2770],
          '3': [2663, 2704, 2751, 2797, 2854, 2898],
          '4': [2732, 2776, 2827, 2878, 2932, 2985],
          '5': [2818, 2873, 2931, 2981, 3043, 3097, 3159],
          '6': [2900, 2962, 3024, 3083, 3142, 3201, 3258],
          '7': [3003, 3064, 3122, 3188, 3248, 3333, 3383, 3443],
          '8': [3113, 3176, 3240, 3307, 3370, 3437, 3507, 3568],
          '9': [3233, 3284, 3369, 3440, 3509, 3585, 3653, 3724, 3790],
          '10': [3426, 3501, 3571, 3650, 3724, 3795, 3872, 3949, 4022, 4099],
          '11': [3628, 3713, 3789, 3869, 3954, 4024, 4107, 4189, 4263, 4347, 4428],
          '12': [3865, 3954, 4039, 4120, 4209, 4294, 4381, 4473, 4558, 4644, 4729],
          '13': [4104, 4195, 4289, 4378, 4473, 4564, 4652, 4748, 4839, 4928, 5017],
        },
      },
    },
  ],
  vergoedingen: [],
};
