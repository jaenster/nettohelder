import type { Cao } from '../types.js';

/**
 * Cao B.V. Terschellinger Stoomboot Maatschappij 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao B.V. Terschellinger Stoomboot Maatschappij
 * https://cao-kijker.awvn.nl/bestanden/1953_01-01-2026%20tot%2001-01-2028_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-01-01 (month) uit de bron
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoTerschellingerStoombootMij2026: Cao = {
  id: 'terschellinger-stoomboot-mij',
  name: "Cao B.V. Terschellinger Stoomboot Maatschappij",
  year: 2026,
  effectiveNote: "Cao 2026-01-01 t/m 2027-12-31; loontabel per 2026-01-01. Let op: Lonen worden halfjaarlijks (1 januari en 1 juli) geïndexeerd met de Algemene Loonindex (ALI) van het CBS. Per 1-1-2026 was dat 1,85%. Minimumgaranties: de verhogingen van 1-1-2026 en 1-7-2026 samen minimaal 3,75%; die van 1-1-2027 en 1-7-2027 samen minimaal 3%. De werkelijke ALI-uitkomsten voor 1-7-2026 en 2027 zijn niet verwerkt. Groep 41 (stuurman, senior fo) staat zo in de loontabel tussen groep 4 en 5. Pensioen bij Pensioenfonds Vervoer; de premieverdeling volgt het fondsbestuur en staat niet in de cao. 80/90/100-regeling vanaf 3 jaar voor AOW-leeftijd (per 1-1-2027 vanaf 5 jaar).",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/1953_01-01-2026%20tot%2001-01-2028_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 36,
    schalen: {
      '1': [2797, 2844, 2922, 2996, 3069, 3144],
      '2': [2990, 3088, 3189, 3286, 3386, 3489],
      '3': [3201, 3308, 3401, 3504, 3597, 3702],
      '4': [3565, 3661, 3761, 3861, 3968, 4059],
      '5': [4120, 4233, 4343, 4453, 4573, 4680],
      '6': [4348, 4458, 4575, 4683, 4798, 4908],
      '7': [4685, 4802, 4913, 5025, 5131, 5248],
      '41': [3661, 3761, 3861, 3968, 4059, 4157],
    },
  },
  vergoedingen: [],
};
