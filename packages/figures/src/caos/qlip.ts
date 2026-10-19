import type { Cao } from '../types.js';

/**
 * Cao Qlip B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Qlip B.V.
 * https://cao-kijker.awvn.nl/bestanden/2896_01-07-2025%20tot%2001-01-2027_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-07-01 (month) uit de bron
 *   - Basistabel 1-1-2026 teruggerekend uit de tabel per 2026-07-01 (gedeeld door +2,25%)
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-07-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoQlip2026: Cao = {
  id: 'qlip',
  name: "Cao Qlip B.V.",
  year: 2026,
  effectiveNote: "Cao 2025-07-01 t/m 2026-12-31; loontabel per 2026-07-01. Let op: Salarisschaal per 1 juli 2026 zonder ADV (bijlage II, 40 uur): alleen minimum en maximum per groep opgenomen; binnen de open schaal gelden vaste periodiekstappen (bijv. groep 1 € 85, groep 12 € 210) en onder de vakvolwassen leeftijd (22-26 jaar) leeftijdsschalen Werknemers die ADV behouden (40 uur + 13 ADV-dagen) hebben een lagere schaal (bijlage III, verhouding 38/40) Eindejaarsuitkering 3,5% van 12 x het maandsalaris van november (niet pensioengevend), uitbetaald in november Pensioen PGB: werknemersbijdrage 4,0% van de pensioengrondslag (eerbiedigende werking) of 5,0% voor nieuwe werknemers vanaf 1 januari 2027 (vlakke premie); franchise niet vermeld",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/2896_01-07-2025%20tot%2001-01-2027_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.035,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      '1': [2569.19, 3385.82],
      '2': [2666.01, 3503.18],
      '3': [2761.86, 3640.1],
      '4': [2865.53, 3817.11],
      '5': [2983.86, 4038.14],
      '6': [3144.25, 4293.4],
      '7': [3335.94, 4763.81],
      '8': [3580.44, 5347.68],
      '9': [3927.63, 6091.93],
      '10': [4360.88, 6998.53],
      '11': [4928.12, 8104.65],
      '12': [5546.21, 9126.65],
    },
  },
  periods: [
    {
      from: '2026-07-01',
      note: "+2,25% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          '1': [2627, 3462],
          '2': [2726, 3582],
          '3': [2824, 3722],
          '4': [2930, 3903],
          '5': [3051, 4129],
          '6': [3215, 4390],
          '7': [3411, 4871],
          '8': [3661, 5468],
          '9': [4016, 6229],
          '10': [4459, 7156],
          '11': [5039, 8287],
          '12': [5671, 9332],
        },
      },
    },
  ],
  vergoedingen: [],
};
