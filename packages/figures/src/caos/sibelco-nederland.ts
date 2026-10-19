import type { Cao } from '../types.js';

/**
 * Sibelco Nederland 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Sibelco Nederland
 * https://cao-kijker.awvn.nl/bestanden/0889_01-05-2026%20tot%2001-05-2028_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-05-01 (month) uit de bron
 *   - Basistabel 1-1-2026 teruggerekend uit de tabel per 2026-05-01 (gedeeld door +2,7%)
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-05-01, 2027-05-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoSibelcoNederland2026: Cao = {
  id: 'sibelco-nederland',
  name: "Sibelco Nederland",
  year: 2026,
  effectiveNote: "Cao 2026-05-01 t/m 2028-04-30; loontabel per 2026-05-01. Let op: Cao 1 mei 2026 t/m 30 april 2028 (eindbod aan FNV, door leden goedgekeurd); schaalsalarissen en individuele salarissen +2,7% per 1-5-2026 en +2,7% per 1-5-2027. Daarnaast neemt de werkgever per 1-5-2026 en per 1-5-2027 telkens 0,5% van de eigen bijdrage pensioenpremie van de werknemer over (verlaging werknemersdeel); niet in de verhogingen verwerkt. Eenmalige reiskostenvergoeding € 100 bruto in de salarisbetaling van juni 2026 voor alle medewerkers behalve leaserijders. Vakantietoeslag 8% van het roosterinkomen op jaarbasis met een minimum voor functievolwassenen (€ 2.552 bruto in 2024, jaarlijks geïndexeerd met de cao-verhoging). Eindejaarsuitkering 8,33% van 12x maandinkomen plus harmonisatietoeslag. Dagdienst 40 uur per week (met ADV-dagen). Pensioen via PGB (CDC-premie 21,6% van de salarissom); werknemersdeel niet in de cao vermeld. Vakantiegeld 8% is het wettelijk minimum; niet in de cao-tekst geverifieerd Salaristabel per 1-5-2026 (incl. 2,7%); eerste trede per groep is de aanloopschaal, daarna 0 t/m 7 functiejaren. De cao bevat ook de tabel per 1-5-2027 (+2,7%) en een WML-schaal (100-120% WML)",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/0889_01-05-2026%20tot%2001-05-2028_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      'A': [2408.96, 2567.67, 2617.33, 2671.86, 2722.49, 2776.05],
      'B': [2476.14, 2617.33, 2675.75, 2732.23, 2789.68, 2847.13, 2901.66],
      'C': [2556.96, 2702.04, 2768.26, 2827.65, 2892.89, 2958.13, 3022.4, 3080.82],
      'D': [2657.25, 2810.13, 2876.34, 2955.21, 3024.34, 3098.34, 3166.5, 3237.59],
      'E': [2856.86, 2942.55, 3025.32, 3109.06, 3194.74, 3281.4, 3363.19, 3445.96],
      'F': [2983.45, 3074, 3163.58, 3251.22, 3339.82, 3430.38, 3521.91, 3609.54, 3697.18],
      'G': [3259.01, 3360.27, 3461.54, 3561.83, 3668.94, 3768.26, 3868.55, 3972.74, 4071.08],
      'H': [3505.36, 3749.76, 3868.55, 3985.39, 4104.19, 4225.9, 4344.69, 4461.54, 4585.2],
    },
  },
  periods: [
    {
      from: '2026-05-01',
      note: "+2,7% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          'A': [2474, 2637, 2688, 2744, 2796, 2851],
          'B': [2543, 2688, 2748, 2806, 2865, 2924, 2980],
          'C': [2626, 2775, 2843, 2904, 2971, 3038, 3104, 3164],
          'D': [2729, 2886, 2954, 3035, 3106, 3182, 3252, 3325],
          'E': [2934, 3022, 3107, 3193, 3281, 3370, 3454, 3539],
          'F': [3064, 3157, 3249, 3339, 3430, 3523, 3617, 3707, 3797],
          'G': [3347, 3451, 3555, 3658, 3768, 3870, 3973, 4080, 4181],
          'H': [3600, 3851, 3973, 4093, 4215, 4340, 4462, 4582, 4709],
        },
      },
    },
    {
      from: '2027-05-01',
      note: "+2,7% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          'A': [2540.8, 2708.2, 2760.58, 2818.09, 2871.49, 2927.98],
          'B': [2611.66, 2760.58, 2822.2, 2881.76, 2942.36, 3002.95, 3060.46],
          'C': [2696.9, 2849.93, 2919.76, 2982.41, 3051.22, 3120.03, 3187.81, 3249.43],
          'D': [2802.68, 2963.92, 3033.76, 3116.95, 3189.86, 3267.91, 3339.8, 3414.78],
          'E': [3013.22, 3103.59, 3190.89, 3279.21, 3369.59, 3460.99, 3547.26, 3634.55],
          'F': [3146.73, 3242.24, 3336.72, 3429.15, 3522.61, 3618.12, 3714.66, 3807.09, 3899.52],
          'G': [3437.37, 3544.18, 3650.99, 3756.77, 3869.74, 3974.49, 4080.27, 4190.16, 4293.89],
          'H': [3697.2, 3954.98, 4080.27, 4203.51, 4328.81, 4457.18, 4582.47, 4705.71, 4836.14],
        },
      },
    },
  ],
  vergoedingen: [],
};
