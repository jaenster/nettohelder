import type { Cao } from '../types.js';

/**
 * Cao Essity Operations Suameer B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Essity Operations Suameer B.V.
 * https://cao-kijker.awvn.nl/bestanden/0476_01-01-2026%20tot%2001-01-2027_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-01-01 (month) uit de bron
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoEssityOperationsSuameer2026: Cao = {
  id: 'essity-operations-suameer',
  name: "Cao Essity Operations Suameer B.V.",
  year: 2026,
  effectiveNote: "Cao 2026-01-01 t/m 2026-12-31; loontabel per 2026-01-01. Let op: Verbeterd eindbod van 29 mei 2026, looptijd 1 januari t/m 31 december 2026 Salarisschalen per functiegroep naar aantal periodieken, afgeronde eurobedragen; minimum uurloon € 16 bruto Dagdienst 36 uur per week; 3-ploegendienst 35 uur, 5-ploegendienst 33,6 uur RVU-regeling voor zware beroepen per 1 januari 2026 (t/m 2028) Pensioen via de aparte Pensioen-cao Essity Netherlands; werknemersbijdrage niet gevonden Geen eindejaarsuitkering gevonden in de cao-tekst",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/0476_01-01-2026%20tot%2001-01-2027_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 36,
    schalen: {
      '2': [2780, 2807, 2835, 2859],
      '3': [2850, 2900, 2958, 3023, 3076],
      '4': [2904, 2958, 3018, 3067, 3115, 3169],
      '5': [2977, 3039, 3095, 3147, 3212, 3270],
      '6': [3067, 3143, 3233, 3307, 3391, 3476],
      '7': [3178, 3247, 3315, 3383, 3453, 3518, 3596],
      '8': [3295, 3402, 3508, 3611, 3727, 3829, 3937],
      '9': [3420, 3530, 3641, 3749, 3866, 3971, 4087, 4195],
      '10': [3558, 3677, 3802, 3934, 4053, 4174, 4303, 4424, 4551],
      '11': [3777, 3900, 4029, 4162, 4287, 4416, 4538, 4669, 4798, 4925],
      '12': [3987, 4114, 4243, 4368, 4500, 4627, 4757, 4882, 5008, 5142, 5271],
      '13': [4254, 4385, 4514, 4657, 4784, 4916, 5099, 5177, 5311, 5447, 5577],
    },
  },
  vergoedingen: [],
};
