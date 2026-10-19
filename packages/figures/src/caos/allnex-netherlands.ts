import type { Cao } from '../types.js';

/**
 * Cao Allnex Netherlands B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Allnex Netherlands B.V.
 * https://cao-kijker.awvn.nl/bestanden/2928_01-10-2025%20tot%2001-10-2026_akkoord.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2025-10-01 (month) uit de bron
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoAllnexNetherlands2026: Cao = {
  id: 'allnex-netherlands',
  name: "Cao Allnex Netherlands B.V.",
  year: 2026,
  effectiveNote: "Cao 2025-10-01 t/m 2026-09-30; loontabel per 2025-10-01. Let op: Eindbod Allnex van december 2025, looptijd 1 oktober 2025 t/m 30 september 2026 Salarisgroepen kennen geen treden maar een minimum, 90%-niveau en 100%-niveau; deze drie zijn als treden opgenomen Voltijd dagdienst 40 uur per week; volcontinudienst gemiddeld 33,6 uur Bruto bijdrage ziektekostenverzekering van € 45 per maand wordt voortgezet Pensioen: beschikbare premieregeling (3%-staffel); werknemersbijdrage niet gevonden. Overgang naar Wtp per 1 januari 2027 in voorbereiding",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/2928_01-10-2025%20tot%2001-10-2026_akkoord.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      '1': [2995.27, 3290.2, 3638.03],
      '2': [3083.79, 3441.33, 3805.95],
      '3': [3213.18, 3668.77, 4058.66],
      '4': [3372.67, 3957.09, 4379.02],
      '5': [3652.83, 4325.95, 4788.86],
      '6': [3961.42, 4728.52, 5236.16],
      '7': [4398.03, 5295.36, 5865.98],
      '8': [4572.62, 5507.89, 6102.13],
      '9': [5090, 6340.9, 7027.69],
      '10': [5652.48, 7291.69, 8084.13],
      '11': [6276.22, 8395.99, 9311.13],
      '12': [6960.06, 9669.59, 10726.24],
      '13': [7717.31, 11150.52, 12371.72],
    },
  },
  vergoedingen: [],
};
