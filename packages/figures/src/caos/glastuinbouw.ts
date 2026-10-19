import type { Cao } from '../types.js';

/**
 * Cao Glastuinbouw — ORBA-functiegroepen B t/m H × trede, HOURLY table (uurloon)
 * per 1 januari 2026 bij een normale arbeidsduur van 38 uur per week. De cao
 * kent geen maandtabel; lonen worden als uurloon vastgesteld. De B-schaal start
 * (trede 2) op het wettelijk minimumuurloon (€14,71) en loopt in vaste stappen
 * door. Trede 1 staat in de officiële tabel leeg (instap = WML-vloer) en is niet
 * gemodelleerd; de jeugdlonen (15 t/m 18 jaar) zijn eveneens niet meegenomen —
 * de schalen hieronder bevatten alleen de vakvolwassen treden 2 en hoger
 * (array-index 0 = trede 2). Vakantiegeld 8,33% van het loon. De cao kent geen
 * vaste eindejaarsuitkering (0). Pensioen = BPL Pensioen.
 * Bron: officiële loontabel Werkgeverslijn/LTO, per 1 januari 2026.
 */
export const caoGlastuinbouw2026: Cao = {
  id: 'glastuinbouw',
  name: 'Cao Glastuinbouw',
  year: 2026,
  effectiveNote:
    'Uurtabel per 1 jan 2026 (38u/week), ORBA-functiegroepen B t/m H. Alleen vakvolwassen treden (index 0 = trede 2); trede 1 (WML-instapvloer, leeg in brontabel) en jeugdlonen (15 t/m 18 jaar) zijn niet gemodelleerd. Cao loopt 1 juli 2025 t/m 31 maart 2026.',
  sourceUrl:
    'https://werkgeverslijn.nl/wp-content/uploads/2023/05/Looncijfers-cao-Glastuinbouw-per-1-januari-2026.pdf',
  pensioenfondsId: 'bpl',
  vakantiegeldPct: 0.0833,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'uur',
    hoursPerWeek: 38,
    schalen: {
      B: [14.71, 14.89, 15.07, 15.25, 15.43, 15.61],
      C: [15.09, 15.52, 16.0, 16.48, 16.99, 17.49],
      D: [15.46, 15.96, 16.47, 17.01, 17.55, 18.12],
      E: [15.74, 16.28, 16.83, 17.4, 17.98, 18.59, 19.24],
      F: [16.39, 17.0, 17.62, 18.25, 18.89, 19.58, 20.29, 21.01],
      G: [17.17, 17.83, 18.49, 19.2, 19.93, 20.71, 21.48, 22.3, 23.15],
      H: [18.5, 19.25, 20.02, 20.82, 21.65, 22.51, 23.41, 24.34, 25.29, 26.28],
    },
  },
  vergoedingen: [],
};
