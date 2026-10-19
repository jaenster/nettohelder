import type { Cao } from '../types.js';

/**
 * Cao voor PostNL 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao voor PostNL
 * https://cao-kijker.awvn.nl/bestanden/1521_01-04-2024%20tot%2001-07-2026_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-01-01 (month) uit de bron
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoPostnl2026: Cao = {
  id: 'postnl',
  name: "Cao voor PostNL",
  year: 2026,
  effectiveNote: "Cao 2024-04-01 t/m 2026-06-30; loontabel per 2026-01-01. Let op: Geldt niet voor postbezorgers (eigen cao, zie postnl-postbezorgers) Voltijd: Groep A gemiddeld 37 uur per week, Groep B gemiddeld 39,25 uur per week, met aparte salaristabellen Cao is op 30 juni 2026 verlopen; onderhandelingen over een nieuwe cao zijn op 13 oktober 2026 gestart. Loonsverhoging na 1 januari 2026 nog niet bekend Pensioen via Stichting Pensioenfonds PostNL: werknemersbijdrage 7% van de pensioengrondslag vanaf 1 januari 2026 (6% daarvoor); franchise alleen bekend voor 2024 (€ 18.799,03), daarom niet als pensioen opgenomen Schaal = salaristabel Groep A (37 uur) per 1-1-2026 (bijlage 1 cao), schaaljaren 0 t/m 14; schaal 10 t/m 13 hebben alleen een minimum (0) en maximum (14), als twee treden opgenomen. Groep B (39,25 uur, bijlage 2) heeft een eigen tabel en is niet opgenomen",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/1521_01-04-2024%20tot%2001-07-2026_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 37,
    schalen: {
      '1': [2329.83, 2357.19, 2384.54, 2431.2, 2477.86, 2529.35, 2576.01],
      '2': [2352.36, 2410.28, 2469.82, 2529.35, 2587.27, 2646.81, 2703.12, 2764.26],
      '3': [2381.32, 2450.51, 2519.69, 2590.49, 2661.29, 2732.08, 2801.27, 2872.07, 2942.86, 3012.05],
      '4': [2400.63, 2473.03, 2543.83, 2613.02, 2685.42, 2756.22, 2825.4, 2897.81, 2967, 3036.18, 3110.2, 3179.38],
      '5': [2481.08, 2592.1, 2662.9, 2733.69, 2804.49, 2875.28, 2946.08, 3016.88, 3087.67, 3158.47, 3229.26, 3298.45, 3369.25],
      '6': [2529.35, 2638.76, 2756.22, 2827.01, 2897.81, 2967, 3037.79, 3110.2, 3179.38, 3250.18, 3322.59, 3391.77, 3462.57, 3533.36, 3604.16],
      '7': [2815.75, 3068.36, 3143.99, 3221.22, 3296.84, 3374.07, 3449.7, 3523.71, 3600.94, 3674.96, 3748.97, 3827.81, 3901.83, 3979.06],
      '8': [3008.83, 3275.92, 3361.2, 3449.7, 3533.36, 3617.03, 3700.7, 3787.59, 3872.86, 3954.92, 4040.2, 4123.87, 4210.75, 4294.42, 4379.7],
      '9': [3287.19, 3580.03, 3687.83, 3797.24, 3903.43, 4011.24, 4119.04, 4226.84, 4334.65, 4444.06, 4550.25, 4658.06, 4764.25, 4872.05, 4979.86],
      '10': [4091.69, 5637.94],
      '11': [4588.87, 6498.75],
      '12': [5200.29, 7559.08],
      '13': [5958.13, 8868.81],
    },
  },
  vergoedingen: [],
};
