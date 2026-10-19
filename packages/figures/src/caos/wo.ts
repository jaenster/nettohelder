import type { Cao } from '../types.js';

/**
 * Cao Nederlandse Universiteiten (WO) — salaristabel per 1 juli 2025, geldig in
 * 2026 (cao-looptijd 1 juli 2025 t/m 30 juni 2026). De stap per 1 juli 2025 was
 * +2,0% structureel én +€100 op alle bedragen. Officiële Radboud-publicatie
 * "Salarisoverzicht 2026.1" (jan-26) verwerkt deze bedragen.
 *
 * Schalen 1–18 plus de promovendischaal P (treden 0–3). De universitaire
 * functieschalen H1/H2 (hoogleraar) en SA (student-assistent) staan ook in de
 * officiële tabel maar zijn hier weggelaten; H1/H2 lopen vrijwel gelijk aan
 * schaal 16/18 en SA is een aparte studentenschaal. Lage treden in de onderste
 * schalen ontbreken in de cao-tabel zelf (de schaal start daar op een hogere trede).
 *
 * Vakantiegeld 8% (vakantieuitkering) + eindejaarsuitkering 8,30% (bevestigd in
 * de officiële tabel). Pensioen = ABP.
 * Bron: officiële cao-salaristabel per 1 juli 2025 (Radboud Universiteit,
 * Salarisoverzicht 2026.1).
 */
export const caoWo2026: Cao = {
  id: 'wo',
  name: 'Cao Nederlandse Universiteiten',
  year: 2026,
  effectiveNote:
    'Salaristabel per 1 jul 2025 (geldig in 2026; cao loopt t/m 30 jun 2026). Schalen 1–18 + promovendischaal P; hoogleraarschalen H1/H2 en student-assistent SA niet opgenomen.',
  sourceUrl: 'https://www.universiteitenvannederland.nl/salarisschalen',
  pensioenfondsId: 'abp',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.083,
  salary: {
    kind: 'table',
    hoursPerWeek: 38,
    stepLabel: 'trede',
    unit: 'maand',
    schalen: {
      '1': [2897, 2923, 2951, 2977, 3004, 3029, 3057],
      '2': [2923, 2951, 2977, 3004, 3029, 3057, 3084, 3110],
      '3': [2951, 2977, 3004, 3029, 3057, 3084, 3110, 3137, 3164, 3191],
      '4': [2977, 3004, 3029, 3057, 3084, 3110, 3137, 3164, 3191, 3219, 3300],
      '5': [3004, 3029, 3057, 3084, 3110, 3137, 3164, 3219, 3300, 3382, 3465],
      '6': [3029, 3057, 3084, 3110, 3141, 3219, 3300, 3382, 3465, 3546, 3623],
      '7': [3057, 3084, 3219, 3382, 3465, 3546, 3623, 3708, 3792, 3881, 3985],
      '8': [3382, 3546, 3708, 3881, 3985, 4075, 4155, 4241, 4334, 4412, 4484],
      '9': [3708, 3881, 4075, 4241, 4412, 4571, 4728, 4901, 5057],
      '10': [3546, 3708, 3881, 4075, 4241, 4412, 4571, 4728, 4901, 5057, 5213, 5365, 5538],
      '11': [4728, 4901, 5057, 5213, 5365, 5538, 5705, 5870, 6030, 6195, 6349, 6433],
      '12': [5705, 5870, 6030, 6195, 6349, 6512, 6677, 6835, 6998, 7202, 7297],
      '13': [6512, 6677, 6835, 6998, 7202, 7403, 7605, 7807, 7904],
      '14': [6835, 6998, 7202, 7403, 7605, 7807, 8011, 8224, 8447, 8673],
      '15': [7403, 7605, 7807, 8011, 8224, 8447, 8673, 8946, 9230, 9517],
      '16': [8011, 8224, 8447, 8673, 8946, 9230, 9517, 9814, 10123, 10441],
      '17': [8673, 8946, 9230, 9517, 9814, 10123, 10441, 10776, 11110, 11461],
      '18': [9517, 9814, 10123, 10441, 10776, 11110, 11461, 11825, 12198, 12584],
      'P': [3059, 3546, 3708, 3881],
    },
  },
  vergoedingen: [],
};
