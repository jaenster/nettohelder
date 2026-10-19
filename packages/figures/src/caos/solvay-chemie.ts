import type { Cao } from '../types.js';

/**
 * Cao Solvay Chemie B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Solvay Chemie B.V.
 * https://cao-kijker.awvn.nl/bestanden/0734_01-04-2025%20tot%2001-07-2026_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2025-04-01 (month) uit de bron
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoSolvayChemie2026: Cao = {
  id: 'solvay-chemie',
  name: "Cao Solvay Chemie B.V.",
  year: 2026,
  effectiveNote: "Cao 2025-04-01 t/m 2026-06-30; loontabel per 2025-04-01. Let op: Cao 1-4-2025 t/m 30-6-2026 (eindbod 27-3-2025, partij FNV): 4,5% per 1-4-2025; de vloeren van de vakantietoeslag stijgen met hetzelfde percentage Geen opvolgende cao vanaf 1-7-2026 gevonden Vakantietoeslag is 8% van 13 x het maandinkomen (dus ca. 8,67% van 12 maandsalarissen), met een minimum gelijk aan het salaris van functiegroep 2 met 1 functiejaar 13e maand: 8,33% van 12 x het maandinkomen van december Dagdienst en 2-ploegendienst: 40 uur per week, gemiddeld 38 uur door arbeidsduurverkorting Minimumuurloon € 16,00 Pensioen bij Centraal Beheer APF (beschikbare premie): werknemersbijdrage 2,5% van de pensioengrondslag; franchise alleen bekend als cijfer 2024 (€ 17.545), daarom niet opgenomen Salaristabel per 1-4-2025 (incl. 4,5%), functiegroep 1-10 met 0 t/m 18 functiejaren; tabel staat als afbeelding in de cao en is daaruit overgenomen",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/0734_01-04-2025%20tot%2001-07-2026_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      '1': [2611.78, 2664.12, 2717.8, 2772.83, 2827.85, 2869.46],
      '2': [2678.87, 2732.57, 2787.6, 2843.95, 2900.33, 2958.04, 3017.09, 3037.22],
      '3': [2760.75, 2815.78, 2872.15, 2929.84, 2988.9, 3049.31, 3109.7, 3171.43, 3214.38],
      '4': [2856.03, 2913.75, 2971.47, 3030.52, 3090.91, 3152.65, 3215.72, 3280.14, 3345.91, 3413.01, 3439.86],
      '5': [2978.14, 3037.22, 3097.62, 3159.36, 3222.44, 3286.86, 3352.63, 3419.73, 3488.17, 3557.96, 3629.09, 3647.9],
      '6': [3139.22, 3202.32, 3266.74, 3332.49, 3399.59, 3468.04, 3537.84, 3608.97, 3681.44, 3755.27, 3830.42, 3906.92, 3956.57],
      '7': [3368, 3435.47, 3504.25, 3574.37, 3645.8, 3718.55, 3792.63, 3868.03, 3944.77, 4024.14, 4104.82, 4186.85, 4270.19, 4297.96],
      '8': [3705.6, 3779.42, 3854.58, 3931.08, 4010.26, 4090.79, 4172.67, 4255.87, 4340.43, 4427.66, 4516.24, 4606.17, 4698.77, 4792.72, 4888.02, 4924.25],
      '9': [4054.55, 4135.08, 4218.28, 4302.86, 4388.75, 4475.98, 4565.91, 4657.17, 4749.77, 4845.07, 4941.7, 5041.01, 5141.67, 5245.01, 5349.71, 5457.08, 5514.79],
      '10': [4462.56, 4552.48, 4643.74, 4736.35, 4831.64, 4928.27, 5026.25, 5126.91, 5228.91, 5333.6, 5439.62, 5548.35, 5659.73, 5772.47, 5887.88, 6006.01, 6126.8, 6248.92, 6306.63],
    },
  },
  vergoedingen: [],
};
