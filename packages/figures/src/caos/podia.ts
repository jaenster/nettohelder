import type { Cao } from '../types.js';

/**
 * Cao Nederlandse Podia 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Nederlandse Podia
 * https://vscd.nl/files/Bijlagen-Cao-Nederlandse-Podia-2025-2026.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-11-01 (month) uit de bron
 *   - Basistabel 1-1-2026 teruggerekend uit de tabel per 2026-11-01 (gedeeld door +1%)
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-11-01)
 *
 * Excluded: none stated
 */
export const caoPodia2026: Cao = {
  id: 'podia',
  name: "Cao Nederlandse Podia",
  year: 2026,
  effectiveNote: "Cao 2025-04-01 t/m 2026-12-31; loontabel per 2026-11-01. Let op: Cao loopt van 1-4-2025 t/m 31-12-2026; daarna blijft de cao van kracht tot er een nieuwe is. Geen afspraken voor 2027 gevonden Scale = salaristabel per 1-11-2026 (schaal 1 t/m 9, maandloon bij 36 uur); schaal 1 begint bij periodiek 5, schaal 2 bij 2, schaal 3 t/m 9 bij 0 Bedragen onder het wettelijk minimumloon worden vervangen door het (leeftijdsgebonden) minimumloon Eindejaarsuitkering 1,65% van het jaarsalaris inclusief vakantietoeslag (in de calculator als % van het jaarsalaris opgenomen) Kunstenbondleden die de vakbondscontributie fiscaal uitruilen krijgen een extra toeslag van 0,5% Pensioen PFZW: werknemer betaalt volgens de cao 38,9% van de totale premie; werknemersdeel 10,0751% afgeleid uit PFZW-premie 2026 van 25,9% (franchise € 17.283, maximum € 137.800). WIA-excedentpremie niet opgenomen Werkgevers die bij toetreding de ABP-regeling toepasten zijn vrijgesteld van de PFZW-regeling Periodieken worden toegekend op basis van een beoordeling (0, 1 of 2 periodieken per jaar)",
  sourceUrl: "https://vscd.nl/files/Bijlagen-Cao-Nederlandse-Podia-2025-2026.pdf",
  pensioenfondsId: 'pfzw',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0165,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 36,
    schalen: {
      '1': [2244.21, 2326.76, 2338.89, 2386.22, 2433.56],
      '2': [2236.51, 2326.76, 2346, 2400.76, 2455.48, 2510.2, 2564.96, 2619.7, 2674.44, 2729.19],
      '3': [2326.76, 2339.73, 2401.86, 2464, 2526.13, 2588.3, 2650.42, 2712.55, 2774.68, 2836.84, 2898.95, 2961.1, 3023.23],
      '4': [2421.01, 2493.5, 2566.01, 2638.51, 2710.99, 2783.5, 2855.95, 2928.47, 3000.94, 3073.45, 3145.93, 3218.44, 3290.92],
      '5': [2590.82, 2673.66, 2756.5, 2839.38, 2922.23, 3005.07, 3087.91, 3170.76, 3253.62, 3336.46, 3419.32, 3502.15, 3584.99],
      '6': [2844.1, 2944.68, 3045.29, 3145.88, 3246.5, 3347.1, 3447.7, 3548.34, 3648.91, 3749.51, 3850.11, 3950.74],
      '7': [3335.85, 3470.49, 3605.1, 3739.73, 3874.4, 4009.04, 4143.65, 4278.29, 4412.92, 4547.54, 4682.18],
      '8': [3756.62, 3922.29, 4088.01, 4253.69, 4419.41, 4585.09, 4750.78, 4916.5, 5082.21, 5247.9, 5413.59],
      '9': [4454.89, 4663.47, 4872.08, 5080.66, 5289.28, 5497.9, 5706.5, 5915.11, 6123.67, 6332.31, 6540.92],
    },
  },
  periods: [
    {
      from: '2026-11-01',
      note: "+1% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 36,
        schalen: {
          '1': [2266.65, 2350.03, 2362.28, 2410.08, 2457.9],
          '2': [2258.88, 2350.03, 2369.46, 2424.77, 2480.03, 2535.3, 2590.61, 2645.9, 2701.18, 2756.48],
          '3': [2350.03, 2363.13, 2425.88, 2488.64, 2551.39, 2614.18, 2676.92, 2739.68, 2802.43, 2865.21, 2927.94, 2990.71, 3053.46],
          '4': [2445.22, 2518.43, 2591.67, 2664.9, 2738.1, 2811.33, 2884.51, 2957.75, 3030.95, 3104.18, 3177.39, 3250.62, 3323.83],
          '5': [2616.73, 2700.4, 2784.07, 2867.77, 2951.45, 3035.12, 3118.79, 3202.47, 3286.16, 3369.82, 3453.51, 3537.17, 3620.84],
          '6': [2872.54, 2974.13, 3075.74, 3177.34, 3278.97, 3380.57, 3482.18, 3583.82, 3685.4, 3787.01, 3888.61, 3990.25],
          '7': [3369.21, 3505.19, 3641.15, 3777.13, 3913.14, 4049.13, 4185.09, 4321.07, 4457.05, 4593.02, 4729],
          '8': [3794.19, 3961.51, 4128.89, 4296.23, 4463.6, 4630.94, 4798.29, 4965.66, 5133.03, 5300.38, 5467.73],
          '9': [4499.44, 4710.1, 4920.8, 5131.47, 5342.17, 5552.88, 5763.56, 5974.26, 6184.91, 6395.63, 6606.33],
        },
      },
    },
  ],
  vergoedingen: [],
};
