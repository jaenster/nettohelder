import type { Cao } from '../types.js';

/**
 * Cao Euronyl-DPI B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Euronyl-DPI B.V.
 * https://cao-kijker.awvn.nl/bestanden/0532_01-01-2026%20tot%2001-01-2027_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-07-01 (month) uit de bron
 *   - Basistabel 1-1-2026 teruggerekend uit de tabel per 2026-07-01 (gedeeld door +1,5%)
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-07-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoEuronylDpi2026: Cao = {
  id: 'euronyl-dpi',
  name: "Cao Euronyl-DPI B.V.",
  year: 2026,
  effectiveNote: "Cao 2026-01-01 t/m 2026-12-31; loontabel per 2026-07-01. Let op: Salarisschalen worden aangepast aan de stijgingen van het wettelijk minimumloon zodat niemand minder verdient dan het WML. Schaalsalarissen per 1-7-2026 (bijlage II, incl. 1,5%) in hele euro per maand; treden zijn functiejaren (groep B alleen 6 functiejaren, groep I alleen 0 en 9, groep J alleen 0 en 10); groep A heeft geen bedragen Pensioenregeling en werknemersbijdrage niet in de cao vermeld.",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/0532_01-01-2026%20tot%2001-01-2027_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.09,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      'B': [2534.98],
      'C': [2540.89, 2582.27, 2624.63],
      'D': [2565.52, 2609.85, 2655.17, 2700.49, 2744.83],
      'E': [2541.87, 2606.9, 2664.04, 2725.12, 2780.3, 2840.39, 2903.45],
      'F': [2582.27, 2654.19, 2723.15, 2790.15, 2865.02, 2932.02, 3003.94, 3073.89],
      'G': [2704.43, 2776.35, 2851.23, 2919.21, 2995.07, 3065.02, 3139.9, 3213.79, 3283.74],
      'H': [2897.54, 2976.35, 3057.14, 3142.86, 3225.62, 3309.36, 3395.07, 3474.88, 3557.64],
      'I': [3138.92, 3939.9],
      'J': [3448.28, 4329.06],
    },
  },
  periods: [
    {
      from: '2026-07-01',
      note: "+1,5% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          'B': [2573],
          'C': [2579, 2621, 2664],
          'D': [2604, 2649, 2695, 2741, 2786],
          'E': [2580, 2646, 2704, 2766, 2822, 2883, 2947],
          'F': [2621, 2694, 2764, 2832, 2908, 2976, 3049, 3120],
          'G': [2745, 2818, 2894, 2963, 3040, 3111, 3187, 3262, 3333],
          'H': [2941, 3021, 3103, 3190, 3274, 3359, 3446, 3527, 3611],
          'I': [3186, 3999],
          'J': [3500, 4394],
        },
      },
    },
  ],
  vergoedingen: [],
};
