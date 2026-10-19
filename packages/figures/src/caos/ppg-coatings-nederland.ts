import type { Cao } from '../types.js';

/**
 * Cao PPG Coatings Nederland B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao PPG Coatings Nederland B.V.
 * https://cao-kijker.awvn.nl/bestanden/0216_01-01-2026%20tot%2001-01-2027_akkoord.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2025-01-01 (month) uit de bron
 *   - Basistabel 1-1-2026: tabel per 2025-01-01 verhoogd met +3,25% per 2026-01-01
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoPpgCoatingsNederland2026: Cao = {
  id: 'ppg-coatings-nederland',
  name: "Cao PPG Coatings Nederland B.V.",
  year: 2026,
  effectiveNote: "Cao 2026-01-01 t/m 2026-12-31; loontabel per 2025-01-01. Let op: Salarisschalen per 1 januari 2025 bestaan uit een min-, mid- en max-salaris (geen treden); deze zijn als drie treden opgenomen. Per 1 januari 2026 +3,25% Minimum vakantietoeslag € 2.849 (2025); vakantietoeslagjaar loopt van augustus tot augustus Extra uitkering 8 1/3% van de verdiende maandsalarissen (december), desgewenst maandelijks Dagdienst gemiddeld 38 uur per week (40 uur verkort met adv); ploegendiensten 33,6-36 uur ORBA-bonus blijft gehandhaafd Pensioenpremie werknemer niet gevonden",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/0216_01-01-2026%20tot%2001-01-2027_akkoord.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 38,
    schalen: {
      '3': [2720.64, 2851.77, 2982.89],
      '4': [2774.33, 2990.12, 3202.82],
      '5': [2968.44, 3237.92, 3508.44],
      '6': [3220.37, 3554.9, 3890.46],
      '7': [3524.96, 3974.09, 4425.3],
      '8': [3928.66, 4527.51, 5130.49],
      '9': [4629.73, 5328.73, 6026.7],
    },
  },
  vergoedingen: [],
};
