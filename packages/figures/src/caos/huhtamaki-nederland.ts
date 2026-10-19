import type { Cao } from '../types.js';

/**
 * Cao Huhtamaki Nederland B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Huhtamaki Nederland B.V.
 * https://cao-kijker.awvn.nl/bestanden/0785_01-08-2025%20tot%2001-08-2026_akkoord.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2025-01-01 (month) uit de bron
 *   - Basistabel 1-1-2026: tabel per 2025-01-01 verhoogd met +2% per 2025-08-01
 *   - Basistabel 1-1-2026: tabel per 2025-01-01 verhoogd met +2% per 2026-01-01
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoHuhtamakiNederland2026: Cao = {
  id: 'huhtamaki-nederland',
  name: "Cao Huhtamaki Nederland B.V.",
  year: 2026,
  effectiveNote: "Cao 2025-08-01 t/m 2026-07-31; loontabel per 2025-01-01. Let op: Geaccepteerd verbeterd eindbod van 15 juli 2025, looptijd 1-8-2025 tot 1-8-2026: salarisschalen en werkelijke salarissen +2% per 1-8-2025 en +2% per 1-1-2026 Salaristabel per 1-1-2025 (salarisgroep 02 t/m 10, functiejaren) uit de cao 2024-2025; de hoogste trede per groep is een periodiek na 3 of 4 jaar op het maximum Vakantietoeslag 8% met een minimum (per januari 2025 € 2.822 bij een vol jaar); extra uitkering 8,33% in december Normale arbeidsduur gemiddeld 36 uur per week (5-ploegendienst 33,6 uur) Pensioen bij PGB (sector Kartonnage); werknemersdeel van de premie niet gevonden Cao verlopen per 1-8-2026; onderhandelingen over een nieuwe cao gestart in oktober 2026 (CNV)",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/0785_01-08-2025%20tot%2001-08-2026_akkoord.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 36,
    schalen: {
      '2': [2829.89, 2872.54, 2911.04, 2962.02, 2994.27, 3031.73, 3070.22],
      '3': [2874.63, 2919.36, 2970.34, 3007.8, 3055.65, 3097.27, 3147.21],
      '4': [2943.29, 2983.87, 3025.48, 3060.86, 3101.43, 3147.21, 3187.79, 3227.32],
      '5': [3015.08, 3056.7, 3096.23, 3140.97, 3175.3, 3215.88, 3252.29, 3294.95, 3337.6],
      '6': [3112.88, 3150.33, 3190.91, 3233.56, 3265.82, 3308.47, 3350.09, 3392.74, 3427.08, 3468.69],
      '7': [3225.24, 3259.57, 3304.31, 3346.97, 3388.58, 3428.12, 3470.77, 3510.31, 3555.05, 3590.42],
      '8': [3345.93, 3394.83, 3434.36, 3481.18, 3525.92, 3572.73, 3616.43, 3657.01, 3715.27, 3750.64, 3803.7, 3853.64],
      '9': [3479.1, 3530.08, 3584.18, 3646.6, 3710.07, 3760.01, 3823.47, 3875.49, 3932.71, 3989.93, 4053.4, 4110.62],
      '10': [3617.47, 3695.5, 3765.21, 3840.12, 3911.9, 3981.61, 4059.64, 4126.23, 4206.34, 4277.08, 4347.83, 4420.66],
    },
  },
  vergoedingen: [],
};
