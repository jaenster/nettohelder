import type { Cao } from '../types.js';

/**
 * Cao Villeroy & Boch Wellness B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Villeroy & Boch Wellness B.V.
 * https://cao-kijker.awvn.nl/bestanden/1787_01-11-2025%20tot%2001-11-2026_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-07-01 (month) uit de bron
 *   - Basistabel 1-1-2026 teruggerekend uit de tabel per 2026-07-01 (gedeeld door +2%)
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-07-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoVilleroyBochWellness2026: Cao = {
  id: 'villeroy-boch-wellness',
  name: "Cao Villeroy & Boch Wellness B.V.",
  year: 2026,
  effectiveNote: "Cao 2025-11-01 t/m 2026-10-31; loontabel per 2026-07-01. Let op: Cao 1-11-2025 t/m 31-10-2026 (gewijzigd eindbod van 18 februari 2026, door leden van CNV en FNV aangenomen); 2% per 1-11-2025 en 2% per 1-7-2026. Het eerdere eindbod noemde een looptijd tot en met 31-12-2026 Functieschalen per 1 juli 2026 voor dagdienst (basis 38 uur), groepen 1 t/m 9 met functiejaren 0 t/m 9; aanloopperiodieken (A1, A2) en uitloopperiodiek (U1) niet opgenomen Er is een aparte tabel voor 5-ploegendienst op basis van 33,6 uur Vakantietoeslag 8%, jaarlijks in juni Pensioen bij PGB; franchise € 19.172 (2026); eigen bijdrage niet gevonden",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/1787_01-11-2025%20tot%2001-11-2026_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 38,
    schalen: {
      '1': [2476.15, 2553.49, 2629.3, 2705.07],
      '2': [2539.01, 2614.77, 2688.93, 2766.29, 2845.31],
      '3': [2634.12, 2732.47, 2817.91, 2908.2, 2998.49],
      '4': [2737.29, 2819.51, 2908.2, 2998.49, 3085.53, 3177.43],
      '5': [2890.47, 2983.96, 3075.87, 3170.98, 3256.44, 3351.55, 3446.66],
      '6': [3108.14, 3208.08, 3306.4, 3403.14, 3506.31, 3603.03, 3701.38, 3798.12],
      '7': [3361.2, 3461.16, 3564.33, 3664.28, 3767.49, 3869.05, 3972.25, 4068.96, 4178.59],
      '8': [3690.1, 3807.79, 3925.49, 4044.77, 4165.69, 4281.75, 4399.44, 4521.98, 4638.04],
      '9': [4099.58, 4241.46, 4381.71, 4521.98, 4657.41, 4796.05, 4933.07, 5078.19, 5218.45, 5360.3],
    },
  },
  periods: [
    {
      from: '2026-07-01',
      note: "+2% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 38,
        schalen: {
          '1': [2525.67, 2604.56, 2681.89, 2759.17],
          '2': [2589.79, 2667.07, 2742.71, 2821.62, 2902.22],
          '3': [2686.8, 2787.12, 2874.27, 2966.36, 3058.46],
          '4': [2792.04, 2875.9, 2966.36, 3058.46, 3147.24, 3240.98],
          '5': [2948.28, 3043.64, 3137.39, 3234.4, 3321.57, 3418.58, 3515.59],
          '6': [3170.3, 3272.24, 3372.53, 3471.2, 3576.44, 3675.09, 3775.41, 3874.08],
          '7': [3428.42, 3530.38, 3635.62, 3737.57, 3842.84, 3946.43, 4051.7, 4150.34, 4262.16],
          '8': [3763.9, 3883.95, 4004, 4125.67, 4249, 4367.39, 4487.43, 4612.42, 4730.8],
          '9': [4181.57, 4326.29, 4469.34, 4612.42, 4750.56, 4891.97, 5031.73, 5179.75, 5322.82, 5467.51],
        },
      },
    },
  ],
  vergoedingen: [],
};
