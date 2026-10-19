import type { Cao } from '../types.js';

/**
 * Cao Recreatie 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Recreatie
 * https://cao-kijker.awvn.nl/bestanden/1165_01-01-2024%20tot%2001-01-2026_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2025-07-01 (hour) uit de bron
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoRecreatie2026: Cao = {
  id: 'recreatie',
  name: "Cao Recreatie",
  year: 2026,
  effectiveNote: "Cao 2024-01-01 t/m 2026-12-31; loontabel per 2025-07-01. Let op: Cao 2024-2025 is niet opgezegd en daardoor ongewijzigd verlengd tot en met 31-12-2026 (bevestigd door HISWA-RECRON) Geen loonsverhoging in 2026: HISWA-RECRON wilde niet onderhandelen over indexatie per 1-1-2026; alleen bedragen op minimumloonniveau stijgen mee met het WML Verhoging 1-7-2025 (1%) volgt uit een CPI-afhankelijke afspraak (0-2%); bevestigd in de salaristabel per 1-7-2025 in de cao Fulltime 38 uur per week (cao-tekst) Onderhandelingen over een nieuwe cao zouden eind september 2026 starten; loonsverhoging 2027 nog niet bekend Geen eindejaarsuitkering Salaristabel vakvolwassenen per 1-7-2025 (incl. 1%) als uurlonen bij 38 uur; de laagste tredes van schaal 1-3 staan op het WML van 1-7-2025 (€ 14,40) en volgen het WML. De cao bevat ook maand-, 4-weken- en weektabellen",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/1165_01-01-2024%20tot%2001-01-2026_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'uur',
    hoursPerWeek: 38,
    schalen: {
      '1': [14.4, 14.4],
      '2': [14.4, 14.4, 14.4, 14.69, 15.05, 15.4, 15.75, 16.11],
      '3': [14.4, 14.59, 14.94, 15.3, 15.65, 16, 16.36, 16.71, 17.06],
      '4': [14.87, 15.21, 15.55, 15.89, 16.23, 16.57, 16.9, 17.24, 17.58, 17.92],
      '5': [16.03, 16.38, 16.73, 17.08, 17.43, 17.78, 18.13, 18.48, 18.83, 19.18, 19.53],
      '6': [17.27, 17.67, 18.08, 18.49, 18.89, 19.3, 19.71, 20.11, 20.52, 20.93, 21.33, 21.74],
      '7': [19.65, 20.08, 20.51, 20.94, 21.37, 21.8, 22.23, 22.66, 23.09, 23.52, 23.95, 24.38],
      '8': [21.99, 22.41, 22.82, 23.23, 23.65, 24.06, 24.47, 24.89, 25.3, 25.71, 26.13, 26.54],
      '9': [24.32, 24.78, 25.25, 25.71, 26.17, 26.63, 27.09, 27.55, 28.01, 28.47, 28.93, 29.4],
    },
  },
  vergoedingen: [],
};
