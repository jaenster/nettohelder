import type { Cao } from '../types.js';

/**
 * Cao Shell Nederland Raffinaderij B.V. en Shell Nederland Chemie B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Shell Nederland Raffinaderij B.V. en Shell Nederland Chemie B.V.
 * https://www.fnv.nl/getmedia/195744d4-7540-452f-bb54-3e3637f4e7a9/Verbeterd-eindbod-Shell-CAO-2025-2028.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2025-03-01 (month) uit de bron
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-03-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoShell2026: Cao = {
  id: 'shell',
  name: "Cao Shell Nederland Raffinaderij B.V. en Shell Nederland Chemie B.V.",
  year: 2026,
  effectiveNote: "Cao 2025-03-01 t/m 2028-02-29; loontabel per 2025-03-01. Let op: Salarisgroepen kennen alleen een minimum en maximum basissalaris (voltijd); als twee treden opgenomen. Doorgroei via vaste periodieke verhoging per 1 februari (2026: € 79 tot € 122 per maand afhankelijk van de groep) Verhoging per 1 maart 2026 (3,57%) = AWVN-contractloonstijging Chemie over 2025 (bodem 3%) Verhoging per 1 maart 2027 = AWVN-contractloonstijging Chemie over 2026; percentage nog niet bekend Geen algemene verhoging over het persoonlijk toeslagdeel uit de overgangsregeling 2022 Pensioenbasissalaris is gebaseerd op 14 maandsalarissen; vakantiegeldpercentage, eventuele 13e maand, arbeidsduur en pensioenpremie niet geverifieerd; 8% is het wettelijk minimum Prestatiebonus (o.a. 5% bonuspercentage voor nieuwe medewerkers vanaf 1 september 2025) niet opgenomen Bron is het verbeterde eindbod van Shell (7 mei 2025) dat de basis van de cao 2025-2028 vormt",
  sourceUrl: "https://www.fnv.nl/getmedia/195744d4-7540-452f-bb54-3e3637f4e7a9/Verbeterd-eindbod-Shell-CAO-2025-2028.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      '7': [4319, 6154],
      '8': [3821, 5297],
      '9': [3596, 4898],
      '10': [3386, 4511],
      '11': [3169, 4088],
      '12': [3048, 3834],
    },
  },
  periods: [
    {
      from: '2026-03-01',
      note: "+3,57% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          '7': [4473.19, 6373.7],
          '8': [3957.41, 5486.1],
          '9': [3724.38, 5072.86],
          '10': [3506.88, 4672.04],
          '11': [3282.13, 4233.94],
          '12': [3156.81, 3970.87],
        },
      },
    },
  ],
  vergoedingen: [],
};
