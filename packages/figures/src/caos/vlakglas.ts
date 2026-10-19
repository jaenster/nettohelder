import type { Cao } from '../types.js';

/**
 * Cao Groothandel in Vlakglas, het Glasbewerkings- en het Glazeniersbedrijf 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Groothandel in Vlakglas, het Glasbewerkings- en het Glazeniersbedrijf
 * https://www.cnv.nl/bouw/steen-en-glas/cao-vlakglas/nieuws/cao-resultaat-vlakglas-euros-in-plaats-van-procenten-2026-06-12/
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-01-01 (month) uit de bron
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-07-01, 2027-01-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoVlakglas2026: Cao = {
  id: 'vlakglas',
  name: "Cao Groothandel in Vlakglas, het Glasbewerkings- en het Glazeniersbedrijf",
  year: 2026,
  effectiveNote: "Cao 2026-07-01 t/m 2027-06-30; loontabel per 2026-01-01. Let op: Verhogingen 2025 en 1-1-2026 komen uit de vorige cao (1-1-2025 t/m 30-6-2026); de 4% per 1-1-2025 had een maximum van 200 euro bruto per maand bij voltijd Nieuwe cao 2026-2027: vaste bedragen van 60 euro (1-7-2026) en 75 euro (1-1-2027) bruto per maand op voltijdbasis, geen procenten Eenmalige uitkering 150 euro bruto in december 2026, naar rato van het dienstverband Scale = basislonen per maand per 1-1-2026 (volwassenen, functiejaren 0 t/m 8); nieuwe tabellen per 1-7-2026 niet gevonden Normale arbeidsduur 40 uur per week met 13 ADV-dagen, of 39 uur met 6,5 ADV-dagen, of 38 uur zonder ADV-dagen Pensioen via bedrijfstakpensioenfonds (BPFV); premie tot en met 30-6-2026 maximaal 32% van de pensioengrondslag, verdeeld 65% werkgever / 35% werknemer; franchise en premie na 1-7-2026 niet gevonden Gedifferentieerde WGA-premie wordt gedurende de looptijd volledig door de werkgever betaald Jeugdschalen 16 en 17 jaar per 1-1-2027 opgenomen in die van 18-jarigen Geen eindejaarsuitkering gevonden",
  sourceUrl: "https://www.cnv.nl/bouw/steen-en-glas/cao-vlakglas/nieuws/cao-resultaat-vlakglas-euros-in-plaats-van-procenten-2026-06-12/",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      'II': [2404, 2437, 2465, 2500],
      'III': [2470, 2507, 2543, 2579, 2616],
      'IV': [2560, 2595, 2632, 2666, 2704, 2743, 2780],
      'V': [2676, 2710, 2750, 2786, 2824, 2861, 2899, 2942],
      'VI': [2793, 2837, 2880, 2925, 2969, 3015, 3065, 3110, 3160],
      'VII': [2942, 2990, 3045, 3097, 3153, 3208, 3265, 3320, 3380],
    },
  },
  periods: [
    {
      from: '2026-07-01',
      note: "+€ 60/mnd collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          'II': [2464, 2497, 2525, 2560],
          'III': [2530, 2567, 2603, 2639, 2676],
          'IV': [2620, 2655, 2692, 2726, 2764, 2803, 2840],
          'V': [2736, 2770, 2810, 2846, 2884, 2921, 2959, 3002],
          'VI': [2853, 2897, 2940, 2985, 3029, 3075, 3125, 3170, 3220],
          'VII': [3002, 3050, 3105, 3157, 3213, 3268, 3325, 3380, 3440],
        },
      },
    },
    {
      from: '2027-01-01',
      note: "+€ 75/mnd collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          'II': [2539, 2572, 2600, 2635],
          'III': [2605, 2642, 2678, 2714, 2751],
          'IV': [2695, 2730, 2767, 2801, 2839, 2878, 2915],
          'V': [2811, 2845, 2885, 2921, 2959, 2996, 3034, 3077],
          'VI': [2928, 2972, 3015, 3060, 3104, 3150, 3200, 3245, 3295],
          'VII': [3077, 3125, 3180, 3232, 3288, 3343, 3400, 3455, 3515],
        },
      },
    },
  ],
  vergoedingen: [],
};
