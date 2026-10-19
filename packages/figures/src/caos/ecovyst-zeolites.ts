import type { Cao } from '../types.js';

/**
 * Cao Ecovyst Zeolites B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Ecovyst Zeolites B.V.
 * https://cao-kijker.awvn.nl/bestanden/1278_01-08-2025%20tot%2001-08-2027_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-08-01 (month) uit de bron
 *   - Basistabel 1-1-2026 teruggerekend uit de tabel per 2026-08-01 (gedeeld door +3,1%)
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-08-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoEcovystZeolites2026: Cao = {
  id: 'ecovyst-zeolites',
  name: "Cao Ecovyst Zeolites B.V.",
  year: 2026,
  effectiveNote: "Cao 2025-08-01 t/m 2027-07-31; loontabel per 2026-08-01. Let op: Cao 2025-2027 op basis van het geaccepteerde verbeterde eindbod van 6 november 2025 Salarisschalen kennen alleen een minimum en maximum; hier als twee treden opgenomen (tabel per 1-8-2026) Normale arbeidsduur dagdienst en 2/3-ploegendienst 40 uur per week; 4/5-ploegendienst 36 uur, labrooster 33,6 uur Pensioen via eigen pensioenreglement Ecovyst Zeolites; werknemersbijdrage 3,2% van de pensioengrondslag, franchise niet vermeld, daarom niet opgenomen",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/1278_01-08-2025%20tot%2001-08-2027_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      'B': [2946.65, 3347.24],
      'C': [3011.64, 3510.18],
      'D': [3101.84, 3680.89],
      'E': [3185.26, 3839.96],
      'F': [3281.28, 4003.88],
      'G': [3440.35, 4268.67],
      'H': [3742, 4704.17],
      'I': [4073.71, 5258.97],
      'J': [4580.99, 6075.65],
      'K': [5233.75, 7105.72],
      'L': [5988.36, 8330.75],
    },
  },
  periods: [
    {
      from: '2026-08-01',
      note: "+3,1% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          'B': [3038, 3451],
          'C': [3105, 3619],
          'D': [3198, 3795],
          'E': [3284, 3959],
          'F': [3383, 4128],
          'G': [3547, 4401],
          'H': [3858, 4850],
          'I': [4200, 5422],
          'J': [4723, 6264],
          'K': [5396, 7326],
          'L': [6174, 8589],
        },
      },
    },
  ],
  vergoedingen: [],
};
