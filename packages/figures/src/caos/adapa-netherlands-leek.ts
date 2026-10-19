import type { Cao } from '../types.js';

/**
 * Cao adapa the Netherlands Leek B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao adapa the Netherlands Leek B.V.
 * https://www.cnv.nl/documents/6104/adapa_the_Netherlands_Leek_BV_cao_2026-2027_.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-07-01 (month) uit de bron
 *   - Basistabel 1-1-2026 teruggerekend uit de tabel per 2026-07-01 (gedeeld door +1,5%)
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-07-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoAdapaNetherlandsLeek2026: Cao = {
  id: 'adapa-netherlands-leek',
  name: "Cao adapa the Netherlands Leek B.V.",
  year: 2026,
  effectiveNote: "Cao 2026-03-01 t/m 2027-02-28; loontabel per 2026-07-01. Let op: Per 1-1-2027 een tweede structurele verhoging van 1,5%, maar alleen als drie doelstellingen over 2026 (efficiency, afvalvermindering, kwaliteit) worden behaald; elke doelstelling is 0,5%. Uitkomst nog niet bekend, daarom niet als verhoging opgenomen Eenmalige compensatie bij de uitbetaling in juli 2026: 1,5% van het maandsalaris over maart t/m juni 2026 (4 maanden, circa 6% van één maandsalaris); niet als vast bedrag opgenomen Minimumloon € 17 bruto per uur per 1 juli 2026 (functiejarenschaal); leeftijdsschalen geschrapt. Vorige cao (1-5-2025 t/m 28-2-2026): 2,75% per 1-5-2025 en minimumloon € 16 per uur Salaristabel: functiejarenschaal per 1-7-2026 (0 t/m max. 10 functiejaren); groep I t/m III hebben 5 treden Normale arbeidsduur gemiddeld 36 uur per week (dag-, 2- en 3-ploegendienst), 5-ploegendienst 33,6 uur Vakantietoeslag 8,33% van het in de voorafgaande 12 maanden verdiende salaris Pensioen bij PGB (Kartonnage- en Flexibele Verpakkingenbedrijf); de werknemersbijdrage (1%) is per 1-1-2025 gestaakt, dus geen eigen bijdrage werknemer volgens de cao Winstuitkering afhankelijk van de nettowinst; niet opgenomen",
  sourceUrl: "https://www.cnv.nl/documents/6104/adapa_the_Netherlands_Leek_BV_cao_2026-2027_.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.0833,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 36,
    schalen: {
      'I': [2612.79, 2612.79, 2612.79, 2612.79, 2612.79],
      'II': [2612.79, 2612.79, 2618.27, 2652.99, 2690.06],
      'III': [2619.05, 2662.64, 2702.99, 2747.37, 2789.3],
      'IV': [2670.71, 2720.73, 2773.17, 2824, 2877.25, 2929.7],
      'V': [2776.41, 2832.05, 2884.51, 2937.77, 2992.61, 3049.89, 3103.14],
      'VI': [2897.46, 2951.48, 3007.14, 3062.79, 3121.73, 3177.39, 3235.45, 3291.89],
      'VII': [3070.05, 3145.89, 3222.54, 3300.81, 3378.26, 3455.71, 3532.35, 3610.6, 3688.84],
      'VIII': [3242.71, 3325.82, 3406.47, 3488.77, 3569.44, 3650.13, 3734.05, 3814.66, 3895.4, 3979.27],
      'IX': [3490.39, 3578.33, 3664.68, 3750.96, 3837.29, 3924.43, 4010.77, 4100.28, 4186.63, 4272.13, 4358.47],
      'X': [3819.58, 3937.29, 4051.92, 4169.7, 4285.06, 4401.23, 4519.01, 4635.21, 4751.4, 4868.36, 4985.35],
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
        hoursPerWeek: 36,
        schalen: {
          'I': [2651.98, 2651.98, 2651.98, 2651.98, 2651.98],
          'II': [2651.98, 2651.98, 2657.54, 2692.78, 2730.41],
          'III': [2658.34, 2702.58, 2743.53, 2788.58, 2831.14],
          'IV': [2710.77, 2761.54, 2814.77, 2866.36, 2920.41, 2973.65],
          'V': [2818.06, 2874.53, 2927.78, 2981.84, 3037.5, 3095.64, 3149.69],
          'VI': [2940.92, 2995.75, 3052.25, 3108.73, 3168.56, 3225.05, 3283.98, 3341.27],
          'VII': [3116.1, 3193.08, 3270.88, 3350.32, 3428.93, 3507.55, 3585.34, 3664.76, 3744.17],
          'VIII': [3291.35, 3375.71, 3457.57, 3541.1, 3622.98, 3704.88, 3790.06, 3871.88, 3953.83, 4038.96],
          'IX': [3542.75, 3632, 3719.65, 3807.22, 3894.85, 3983.3, 4070.93, 4161.78, 4249.43, 4336.21, 4423.85],
          'X': [3876.87, 3996.35, 4112.7, 4232.25, 4349.34, 4467.25, 4586.8, 4704.74, 4822.67, 4941.39, 5060.13],
        },
      },
    },
  ],
  vergoedingen: [],
};
