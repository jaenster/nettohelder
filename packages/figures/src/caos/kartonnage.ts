import type { Cao } from '../types.js';

/**
 * Cao Kartonnage- en Flexibele Verpakkingenbedrijf 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Kartonnage- en Flexibele Verpakkingenbedrijf
 * https://www.fnv.nl/getmedia/a12f6d5e-e23a-4083-803a-115eb66f03ba/Verbeterd-bod-CAO-2026-2027-Kartoflex.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2025-07-01 (month) uit de bron
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-07-01, 2027-05-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoKartonnage2026: Cao = {
  id: 'kartonnage',
  name: "Cao Kartonnage- en Flexibele Verpakkingenbedrijf",
  year: 2026,
  effectiveNote: "Cao 2026-05-01 t/m 2028-04-30; loontabel per 2025-07-01. Let op: Cao 2026-2028 is het verbeterde eindbod van Kartoflex (11 september 2026), waarmee de leden van FNV en CNV eind september 2026 instemden. Eenmalige uitkeringen gelden voor wie op 1 oktober 2026 resp. 1 januari 2027 in dienst is, op basis van 36 uur per week (naar rato). Pensioen: in 2025 bij PGB 24,2% premie, werknemer 11,87%, franchise € 22.992; premie en franchise voor 2026 (en mogelijke overgang naar PNO Media) niet geverifieerd, daarom niet opgenomen. Salarisschalen (functiejarenschaal) per 1-7-2025 overgenomen van de tabelpagina van de cao 2025-2026 (https://www.fnv.nl/getmedia/353644b5-5cfb-44c0-b737-c3991d876ff1/392-kartonnage-en-flexibele-verpakkingenbedrijf-cao-01-01-2025-tm-30-04-2026-v17092025.pdf), per maand in hele euro's, 36 uur per week. Eerste trede is de aanloopschaal (€ 2.341), daarna functiejaren vanaf 0 (groep 1 vanaf 1 functiejaar). Groep 0 heeft geen bedragen; jeugdschaal niet opgenomen. Nog geen tabel met de verhoging van 1-7-2026 gevonden.",
  sourceUrl: "https://www.fnv.nl/getmedia/a12f6d5e-e23a-4083-803a-115eb66f03ba/Verbeterd-bod-CAO-2026-2027-Kartoflex.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 36,
    schalen: {
      '1': [2341, 2370, 2416, 2455, 2497],
      '2': [2341, 2375, 2420, 2467, 2520, 2579],
      '3': [2341, 2382, 2438, 2500, 2562, 2627],
      '4': [2341, 2462, 2523, 2592, 2649, 2713, 2778],
      '5': [2341, 2565, 2638, 2708, 2778, 2851, 2924],
      '6': [2341, 2708, 2792, 2877, 2960, 3041, 3125],
      '7': [2341, 2896, 2978, 3062, 3153, 3232, 3318, 3411],
      '8': [2341, 3097, 3196, 3297, 3398, 3492, 3588, 3691],
    },
  },
  periods: [
    {
      from: '2026-07-01',
      note: "+2,25% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 36,
        schalen: {
          '1': [2393.67, 2423.33, 2470.36, 2510.24, 2553.18],
          '2': [2393.67, 2428.44, 2474.45, 2522.51, 2576.7, 2637.03],
          '3': [2393.67, 2435.6, 2492.86, 2556.25, 2619.65, 2686.11],
          '4': [2393.67, 2517.4, 2579.77, 2650.32, 2708.6, 2774.04, 2840.51],
          '5': [2393.67, 2622.71, 2697.36, 2768.93, 2840.51, 2915.15, 2989.79],
          '6': [2393.67, 2768.93, 2854.82, 2941.73, 3026.6, 3109.42, 3195.31],
          '7': [2393.67, 2961.16, 3045.01, 3130.9, 3223.94, 3304.72, 3392.66, 3487.75],
          '8': [2393.67, 3166.68, 3267.91, 3371.18, 3474.46, 3570.57, 3668.73, 3774.05],
        },
      },
    },
    {
      from: '2027-05-01',
      note: "+2,25% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 36,
        schalen: {
          '1': [2447.53, 2477.85, 2525.94, 2566.72, 2610.63],
          '2': [2447.53, 2483.08, 2530.13, 2579.26, 2634.68, 2696.36],
          '3': [2447.53, 2490.4, 2548.94, 2613.77, 2678.59, 2746.54],
          '4': [2447.53, 2574.04, 2637.81, 2709.95, 2769.55, 2836.46, 2904.42],
          '5': [2447.53, 2681.72, 2758.05, 2831.23, 2904.42, 2980.74, 3057.06],
          '6': [2447.53, 2831.23, 2919.05, 3007.92, 3094.7, 3179.38, 3267.21],
          '7': [2447.53, 3027.79, 3113.52, 3201.34, 3296.48, 3379.08, 3468.99, 3566.22],
          '8': [2447.53, 3237.93, 3341.44, 3447.03, 3552.63, 3650.91, 3751.28, 3858.96],
        },
      },
    },
  ],
  vergoedingen: [],
};
