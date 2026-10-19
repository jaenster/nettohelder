import type { Cao } from '../types.js';

/**
 * Cao TEAM Terminal B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao TEAM Terminal B.V.
 * https://cao-kijker.awvn.nl/bestanden/0349_01-04-2025%20tot%2001-04-2028_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2025-04-01 (month) uit de bron
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-04-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoTeamTerminal2026: Cao = {
  id: 'team-terminal',
  name: "Cao TEAM Terminal B.V.",
  year: 2026,
  effectiveNote: "Cao 2025-04-01 t/m 2028-03-31; loontabel per 2025-04-01. Let op: Per 1 april 2026: verhoging met de cao-contractloonstijging 2025 in de sector Chemie (AWVN-eindevaluatierapport) met een minimum van 3%; alleen het minimum is opgenomen Per 1 april 2027: verhoging met de cao-contractloonstijging 2026 in de sector Chemie; uitkomst niet bekend, niet opgenomen Salaristabel per 1 april 2025 kent alleen minimum en maximum per schaal, plus een periodiekbedrag (A € 82, B € 80, C € 154, D € 146, E € 137, F € 139) en aanloopschalen; opgenomen als [min, max]. Schalen per april 2026/2027 worden als addendum verstrekt Vakantietoeslag 8,33% van 12 maal het basismaandsalaris op 1 april, minimaal € 1.827 bruto 13e maand: eenmaal het basismaandsalaris van december, uitbetaald in december Dagdienst 40 uur per week met 17 adv-dagen (gemiddeld 37,38 uur); 5-ploegendienst gemiddeld 33,6 uur Bijdrage zorgverzekering € 100 bruto per maand vanaf 1 april 2025 Pensioenpremie niet in de cao vermeld",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/0349_01-04-2025%20tot%2001-04-2028_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.0833,
  eindejaarsuitkeringPct: 0.0833,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      'A': [3262, 3834],
      'B': [3560, 4198],
      'C': [3822, 5201],
      'D': [4226, 5681],
      'E': [4787, 6296],
      'F': [5571, 7232],
    },
  },
  periods: [
    {
      from: '2026-04-01',
      note: "+3% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          'A': [3359.86, 3949.02],
          'B': [3666.8, 4323.94],
          'C': [3936.66, 5357.03],
          'D': [4352.78, 5851.43],
          'E': [4930.61, 6484.88],
          'F': [5738.13, 7448.96],
        },
      },
    },
  ],
  vergoedingen: [],
};
