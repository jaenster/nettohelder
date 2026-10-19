import type { Cao } from '../types.js';

/**
 * Cao Hochwald Foods Nederland B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Hochwald Foods Nederland B.V.
 * https://www.cnv.nl/documents/6083/CAO_2026-2027_Hochwald.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-04-01 (month) uit de bron
 *   - Basistabel 1-1-2026 teruggerekend uit de tabel per 2026-04-01 (gedeeld door +3,75%)
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-04-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoHochwaldNederland2026: Cao = {
  id: 'hochwald-nederland',
  name: "Cao Hochwald Foods Nederland B.V.",
  year: 2026,
  effectiveNote: "Cao 2026-04-01 t/m 2027-03-31; loontabel per 2026-04-01. Let op: Salaristabel voor groepen I t/m X bij een gemiddelde werkweek van 38 uur (treden = functiejaren 0 t/m max). Groepen XI t/m XIII (40 uur per week, max € 7.160) en de 40-urentabel voor I t/m X zijn niet opgenomen Groep I trede 0-3 betreft leeftijden 19-22 (jeugdloon); minimum uurloon € 16 Gratificatie in december ter grootte van het schaalsalaris van december (hier als 8,33%), plus 8,33% van de refertebeloning Jaarlijks in december een eenmalige uitkering van € 100 netto (niet in oneOffPayments, want netto) Vakantietoeslag 8% (minimaal op niveau salarisgroep III, 2 functiejaren voor werknemers van 22 jaar en ouder) Pensioen via BPL Pensioen; werknemersbijdrage in 2026 7,31% van de pensioengrondslag. Franchise niet in de cao vermeld, daarom niet opgenomen. Overgang naar nieuw pensioenstelsel voorzien per 1-1-2027",
  sourceUrl: "https://www.cnv.nl/documents/6083/CAO_2026-2027_Hochwald.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 38,
    schalen: {
      'I': [2538.8, 2646.75, 2850.12, 2879.04, 2912.77, 2942.65, 2973.49, 3005.3],
      'II': [2538.8, 2692.05, 2898.31, 2930.12, 2960.96, 2993.73, 3026.51, 3062.17, 3093.01],
      'III': [2538.8, 2739.28, 2946.51, 2985.06, 3015.9, 3051.57, 3086.27, 3120, 3154.7, 3191.33],
      'IV': [2586.02, 2800, 3013.01, 3053.49, 3093.01, 3139.28, 3180.72, 3218.31, 3268.43, 3268.43],
      'V': [2663.13, 2880.96, 3099.76, 3144.1, 3192.29, 3233.73, 3283.86, 3330.12, 3378.31, 3426.51],
      'VI': [2771.08, 2998.55, 3225.06, 3290.6, 3342.65, 3398.55, 3452.53, 3514.22, 3573.01, 3626.99],
      'VII': [2922.41, 3166.27, 3408.19, 3468.92, 3532.53, 3589.4, 3649.16, 3713.73, 3776.39, 3842.89, 3904.58],
      'VIII': [3078.55, 3334.94, 3587.47, 3659.76, 3734.94, 3813.98, 3886.27, 3967.23, 4039.52, 4118.55, 4195.66, 4271.81],
      'IX': [3312.77, 3592.29, 3866.99, 3957.59, 4036.63, 4121.45, 4205.3, 4289.16, 4368.19, 4448.19, 4533.01, 4619.76, 4705.54],
      'X': [3622.17, 3927.71, 4231.33, 4339.28, 4446.27, 4552.29, 4661.2, 4766.27, 4875.18, 4990.84, 5092.05, 5202.89, 5310.84, 5418.8],
    },
  },
  periods: [
    {
      from: '2026-04-01',
      note: "+3,75% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 38,
        schalen: {
          'I': [2634, 2746, 2957, 2987, 3022, 3053, 3085, 3118],
          'II': [2634, 2793, 3007, 3040, 3072, 3106, 3140, 3177, 3209],
          'III': [2634, 2842, 3057, 3097, 3129, 3166, 3202, 3237, 3273, 3311],
          'IV': [2683, 2905, 3126, 3168, 3209, 3257, 3300, 3339, 3391, 3391],
          'V': [2763, 2989, 3216, 3262, 3312, 3355, 3407, 3455, 3505, 3555],
          'VI': [2875, 3111, 3346, 3414, 3468, 3526, 3582, 3646, 3707, 3763],
          'VII': [3032, 3285, 3536, 3599, 3665, 3724, 3786, 3853, 3918, 3987, 4051],
          'VIII': [3194, 3460, 3722, 3797, 3875, 3957, 4032, 4116, 4191, 4273, 4353, 4432],
          'IX': [3437, 3727, 4012, 4106, 4188, 4276, 4363, 4450, 4532, 4615, 4703, 4793, 4882],
          'X': [3758, 4075, 4390, 4502, 4613, 4723, 4836, 4945, 5058, 5178, 5283, 5398, 5510, 5622],
        },
      },
    },
  ],
  vergoedingen: [],
};
