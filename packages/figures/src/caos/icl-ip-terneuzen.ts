import type { Cao } from '../types.js';

/**
 * Cao ICL-IP Terneuzen B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao ICL-IP Terneuzen B.V.
 * https://cao-kijker.awvn.nl/bestanden/3131_01-04-2025%20tot%2001-04-2026_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2025-04-01 (month) uit de bron
 *   - Basistabel 1-1-2026: tabel per 2025-04-01 verhoogd met +0,5% per 2026-01-01
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoIclIpTerneuzen2026: Cao = {
  id: 'icl-ip-terneuzen',
  name: "Cao ICL-IP Terneuzen B.V.",
  year: 2026,
  effectiveNote: "Cao 2025-04-01 t/m 2026-03-31; loontabel per 2025-04-01. Let op: Cao 1-4-2025 t/m 31-3-2026 (eindbod, FNV); een opvolgende cao vanaf 1-4-2026 is niet gevonden Salarisschalen A t/m G per 1-4-2025 in hele euro's (functiejarenschaal 0 t/m 10/11); de verhoging van 0,5% per 1-1-2026 is niet in de tabel verwerkt Na 3, 6, 9 jaar (en vanaf 1-1-2026 12 jaar) op het schaalmaximum: 1%, 2%, 3% (resp. 4%) boven het maximum; niet in de tabel opgenomen 13e maand in december op basis van het maandinkomen van november (hier als 8,33%) Vakantietoeslag 8% van het jaarinkomen Volcontinudienst gemiddeld 34,83 uur per week, vanaf 1-1-2026 34,67 uur Pensioenregeling: werknemersbijdrage niet in de cao vermeld",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/3131_01-04-2025%20tot%2001-04-2026_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      'A': [2731.59, 2765.76, 2803.95, 2838.12, 2874.3, 2908.47, 2942.64, 2978.82, 3011.99, 3050.18, 3083.34],
      'B': [2815.01, 2856.21, 2898.42, 2939.63, 2980.83, 3022.04, 3063.24, 3104.45, 3147.66, 3186.86, 3229.07],
      'C': [2913.5, 2961.74, 3006.96, 3055.2, 3101.43, 3149.67, 3195.9, 3243.14, 3290.37, 3337.61, 3382.83, 3432.08],
      'D': [3018.02, 3071.28, 3122.54, 3175.8, 3230.07, 3284.34, 3336.6, 3389.87, 3444.14, 3498.41, 3549.66, 3603.93],
      'E': [3147.66, 3206.96, 3268.26, 3329.57, 3389.87, 3452.18, 3511.47, 3572.78, 3634.08, 3695.39, 3756.69, 3814.98],
      'F': [3321.53, 3380.82, 3445.14, 3507.45, 3568.76, 3633.08, 3695.39, 3783.83, 3819, 3881.31, 3944.63, 4007.94],
      'G': [3544.64, 3612.98, 3681.32, 3749.66, 3819, 3887.34, 3956.69, 4024.02, 4093.37, 4161.71, 4230.05, 4301.4],
    },
  },
  vergoedingen: [],
};
