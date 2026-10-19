import type { Cao } from '../types.js';

/**
 * Cao Apollo Tyres (NL) B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Apollo Tyres (NL) B.V.
 * https://cao-kijker.awvn.nl/bestanden/0159_01-04-2025%20tot%2001-07-2026_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-04-01 (month) uit de bron
 *   - Basistabel 1-1-2026 teruggerekend uit de tabel per 2026-04-01 (gedeeld door +2%)
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-04-01)
 *
 * Excluded: none stated
 */
export const caoApolloTyres2026: Cao = {
  id: 'apollo-tyres',
  name: "Cao Apollo Tyres (NL) B.V.",
  year: 2026,
  effectiveNote: "Cao 2025-04-01 t/m 2026-06-30; loontabel per 2026-04-01. Let op: Vakantietoeslag 8% met een minimum van € 3.027 per 1 april 2026. Naast de treden geldt per schaal een maximaal te bereiken schaalsalaris (per 1-4-2026: A € 2.826,72 t/m I € 5.013,17) en een aanloopschaal. Pensioen: beschikbare premieregeling, werknemersbijdrage 10% van de pensioengrondslag; franchise = fiscaal minimum (€ 18.475 in 2025, 2026 niet vermeld). Uitvoerder niet genoemd in de cao. Arbeidsduur 36 uur per week, in 5-ploegendienst 33,6 uur. Geen nieuwe cao na 30-6-2026 gevonden; de productie in Enschede wordt in 2026 gestopt.",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/0159_01-04-2025%20tot%2001-07-2026_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 36,
    schalen: {
      'A': [2518.25, 2565.11, 2615.25, 2666.56, 2718.93],
      'B': [2594.83, 2645.92, 2697.97, 2750.34, 2804.05],
      'C': [2694.5, 2752.08, 2811.28, 2871.22, 2932.65, 2995.54],
      'D': [2805.82, 2871.22, 2938.3, 3007.12, 3074.55, 3143.84, 3213.19],
      'E': [2940.21, 3014.85, 3088.01, 3163.09, 3236.3, 3311.43, 3384.59, 3459.69],
      'F': [3116.92, 3197.78, 3280.61, 3361.45, 3442.32, 3523.35, 3606.06, 3687.45],
      'G': [3353.78, 3440.4, 3525.18, 3611.85, 3697.2, 3784.72, 3872.24, 3957.78, 4045.35],
      'H': [3579.13, 3681.61, 3784.72, 3887.8, 3990.82, 4093.99, 4197.09, 4300.11, 4403.25],
      'I': [3841.15, 3948.06, 4055.08, 4163.96, 4270.96, 4377.97, 4484.92, 4593.85, 4700.79, 4807.82],
    },
  },
  periods: [
    {
      from: '2026-04-01',
      note: "+2% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 36,
        schalen: {
          'A': [2568.62, 2616.41, 2667.56, 2719.89, 2773.31],
          'B': [2646.73, 2698.84, 2751.93, 2805.35, 2860.13],
          'C': [2748.39, 2807.12, 2867.51, 2928.64, 2991.3, 3055.45],
          'D': [2861.94, 2928.64, 2997.07, 3067.26, 3136.04, 3206.72, 3277.45],
          'E': [2999.01, 3075.15, 3149.77, 3226.35, 3301.03, 3377.66, 3452.28, 3528.88],
          'F': [3179.26, 3261.74, 3346.22, 3428.68, 3511.17, 3593.82, 3678.18, 3761.2],
          'G': [3420.86, 3509.21, 3595.68, 3684.09, 3771.14, 3860.41, 3949.68, 4036.94, 4126.26],
          'H': [3650.71, 3755.24, 3860.41, 3965.56, 4070.64, 4175.87, 4281.03, 4386.11, 4491.32],
          'I': [3917.97, 4027.02, 4136.18, 4247.24, 4356.38, 4465.53, 4574.62, 4685.73, 4794.81, 4903.98],
        },
      },
    },
  ],
  vergoedingen: [],
};
