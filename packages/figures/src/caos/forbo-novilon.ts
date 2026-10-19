import type { Cao } from '../types.js';

/**
 * Forbo-Novilon B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Forbo-Novilon B.V.
 * https://cao-kijker.awvn.nl/bestanden/0127_01-01-2026%20tot%2001-01-2027_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-01-01 (month) uit de bron
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoForboNovilon2026: Cao = {
  id: 'forbo-novilon',
  name: "Forbo-Novilon B.V.",
  year: 2026,
  effectiveNote: "Cao 2026-01-01 t/m 2026-12-31; loontabel per 2026-01-01. Let op: Cao 1-1-2026 t/m 31-12-2026 (geaccepteerd eindbod 5 maart 2026); salarisschalen per 1-1-2026 inclusief 2,9% verhoging. Schalen I t/m XII met functiejaren 0 t/m max (21+/functievolwassen); daarnaast aanloopfasen -2 en -1 onder functiejaar 0 (niet opgenomen). Minimaal € 15 per uur. Dagdienst 40 uur per week, met 96 uur roostervrije tijd gemiddeld 38 uur; 4-ploegendienst 36 uur, 5-ploegendienst 33,6 uur. Vakantietoeslag 8% van 12x het maandinkomen van mei. 13e maand: 1/2 maandinkomen in mei en 1/2 in november. Resultaatafhankelijke uitkering (bijlage V, op basis van 14 maandsalarissen, gelijk verdeeld) niet opgenomen. Pensioen via Stichting Pensioenfonds Forbo; werknemerspremie niet in de cao vermeld. Forbo Flooring (cao-code 1075) heeft een aparte cao met dezelfde verhogingen.",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/0127_01-01-2026%20tot%2001-01-2027_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 38,
    schalen: {
      'I': [2722.92, 2770.16, 2818.3, 2866.36, 2916.14, 2960.91, 3009.04, 3059.66],
      'II': [2785.36, 2837.68, 2893.39, 2946.57, 3000.57, 3052.12, 3105.19, 3160.09],
      'III': [2848.66, 2901.79, 2955.83, 3011.55, 3068.1, 3122.95, 3176.94, 3235.22],
      'IV': [2915.33, 2971.92, 3029.23, 3084.97, 3142.34, 3200.58, 3262.21, 3322.17],
      'V': [2990.45, 3051.19, 3110.28, 3172.78, 3236.04, 3299.32, 3358.45, 3420.89],
      'VI': [3081.58, 3145.77, 3211.55, 3274.87, 3341.49, 3404.87, 3471.54, 3540.74],
      'VII': [3171.05, 3244.47, 3319.62, 3391.34, 3464.78, 3540.74, 3609.91, 3686.72],
      'VIII': [3290.03, 3365.14, 3439.41, 3518.77, 3591.31, 3664.78, 3740.73, 3809.11, 3882.56],
      'IX': [3439.41, 3529.77, 3616.38, 3711.21, 3797.32, 3886.76, 3975.35, 4066.52, 4153.51, 4247.14],
      'X': [3660.55, 3770.3, 3874.93, 3983.81, 4085.97, 4191.41, 4301.12, 4409.22, 4507.94, 4615.96],
      'XI': [3928.95, 4058.07, 4182.16, 4312.13, 4438.69, 4568.68, 4694.46, 4821.88, 4950.19, 5077.65],
      'XII': [4251.34, 4404.94, 4555.17, 4713.92, 4865.77, 5021.87, 5173, 5329.95, 5487.77, 5643.95, 5798.37],
    },
  },
  vergoedingen: [],
};
