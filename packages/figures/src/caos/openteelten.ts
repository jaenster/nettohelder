import type { Cao } from '../types.js';

/**
 * Cao Open Teelten (agrarisch — akkerbouw, fruitteelt, boomkwekerij,
 * bloembollen) — maandlonentabel per 1 januari 2026. Functiegroepen B t/m H,
 * stap = trede/periodiek 0..n (werknemers gaan na elk dienstjaar één trede
 * omhoog tot het schaalmaximum). Maandlonen zijn afgeleid van 38u/week
 * (startschaal = WML-uurloon × 38 × 52,2 / 12). De loontabel kreeg per 1 jan
 * 2026 +2,2% t.o.v. 1 juli 2025, behalve schaal B die het WML volgt. Schaal B
 * loopt t/m trede 4, C t/m 5, D t/m 6, E/F t/m 7/8, G t/m 9, H t/m 10.
 * Jeugdlonen (15–18 jaar) zijn NIET gemodelleerd — alleen 19 jaar tot AOW.
 * Vakantietoeslag 8,25% (art. 27.4, boven het wettelijke minimum van 8%).
 * Geen eindejaarsuitkering in deze cao (0). Pensioen = BPL Pensioen.
 * Cao loopt 1 juli 2025 t/m 30 juni 2027.
 * Bron: officiële looncijfers cao Open Teelten per 1 januari 2026 (DEF).
 */
export const caoOpenTeelten2026: Cao = {
  id: 'openteelten',
  name: 'Cao Open Teelten',
  year: 2026,
  effectiveNote:
    'Maandlonentabel per 1 jan 2026 (38u/week), functiegroepen B t/m H, trede 0 t/m schaalmaximum. Jeugdlonen (15–18 jaar) niet meegenomen; alleen 19 jaar tot AOW-leeftijd. Cao 1 juli 2025 t/m 30 juni 2027.',
  sourceUrl:
    'https://werkgeverslijn.nl/wp-content/uploads/2025/11/Looncijfers-cao-Open-Teelten-per-1-januari-2026-DEF.pdf',
  pensioenfondsId: 'bpl',
  vakantiegeldPct: 0.0825,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 38,
    schalen: {
      B: [2431.57, 2464.63, 2497.69, 2530.75, 2563.81],
      C: [2469.58, 2504.30, 2539.01, 2575.37, 2610.09, 2644.80],
      D: [2522.48, 2568.76, 2616.70, 2666.29, 2710.92, 2760.51, 2810.10],
      E: [2585.29, 2659.68, 2734.06, 2808.45, 2881.18, 2953.91, 3028.30, 3102.68],
      F: [2659.68, 2755.55, 2851.43, 2948.95, 3046.48, 3145.66, 3241.53, 3337.41, 3436.59],
      G: [
        2815.06, 2927.46, 3043.17, 3158.88, 3272.94, 3387.00, 3504.36, 3616.76,
        3732.47, 3846.53,
      ],
      H: [
        3034.91, 3165.50, 3296.08, 3428.32, 3555.60, 3687.84, 3818.43, 3949.02,
        4079.60, 4211.84, 4340.78,
      ],
    },
  },
  vergoedingen: [],
};
