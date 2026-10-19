import type { Cao } from '../types.js';

/**
 * Cao innocent drinks 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao innocent drinks
 * https://www.cnv.nl/voeding/voeding/cao-innocent-drinks/nieuws/uitnodiging-ledenvergadering-cao-resultaat-innocent-drinks-2026-09-29/
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2025-10-01 (month) uit de bron
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-10-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoInnocentDrinks2026: Cao = {
  id: 'innocent-drinks',
  name: "Cao innocent drinks",
  year: 2026,
  effectiveNote: "Cao 2026-10-01 t/m 2027-09-30; loontabel per 2025-10-01. Let op: Cao 2026-2027 (1-10-2026 t/m 30-9-2027) is een onderhandelingsresultaat van 23 september 2026: 3,25% per 1-10-2026; ledenvergadering 7 oktober 2026, uitslag stemming nog niet gevonden Cao 2025-2026 (1-10-2025 t/m 30-9-2026): 4% per 1-10-2025 Salarisschalen per 1-10-2025 met alleen minimum en maximum per functiegroep (groep 1 leeg); hier als [min, max]. Salarisgroei binnen de schaal via beoordelingsmatrix (RSP); per 1-10-2026 normpercentages minimaal 0,7%-punt hoger Voltijd 40 uur per week (dagdienst, 2- en 3-ploegen) met 13 ADV-dagen; 5-ploegendienst 34,5 uur Vakantietoeslag 8% over het in het kalenderjaar feitelijk verdiende salaris Pensioenregeling: werknemersbijdrage en franchise niet gevonden",
  sourceUrl: "https://www.cnv.nl/voeding/voeding/cao-innocent-drinks/nieuws/uitnodiging-ledenvergadering-cao-resultaat-innocent-drinks-2026-09-29/",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      '2': [2573.01, 3111.37],
      '3': [2697.21, 3241.14],
      '4': [2791.89, 3403.84],
      '5': [2916.15, 3610.17],
      '6': [3317.8, 4255.64],
      '7': [3561.04, 4591.75],
      '8': [4122.67, 5222.63],
      '9': [4684.33, 6117.58],
      '10': [5245.98, 6652.46],
    },
  },
  periods: [
    {
      from: '2026-10-01',
      note: "+3,25% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          '2': [2656.63, 3212.49],
          '3': [2784.87, 3346.48],
          '4': [2882.63, 3514.46],
          '5': [3010.92, 3727.5],
          '6': [3425.63, 4393.95],
          '7': [3676.77, 4740.98],
          '8': [4256.66, 5392.37],
          '9': [4836.57, 6316.4],
          '10': [5416.47, 6868.66],
        },
      },
    },
  ],
  vergoedingen: [],
};
