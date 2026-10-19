import type { Cao } from '../types.js';

/**
 * Cao Genpact NL B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Genpact NL B.V.
 * https://www.fnv.nl/cao-sector/zakelijke-dienstverlening/cao-genpact
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-04-01 (month) uit de bron
 *   - Basistabel 1-1-2026 teruggerekend uit de tabel per 2026-04-01 (gedeeld door +3,25%)
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-04-01, 2027-04-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoGenpactNl2026: Cao = {
  id: 'genpact-nl',
  name: "Cao Genpact NL B.V.",
  year: 2026,
  effectiveNote: "Cao 2026-04-01 t/m 2028-03-31; loontabel per 2026-04-01. Let op: De percentages zijn de 'toegepaste inflatiecorrectie' op de salarisschalen per 1 april 2026 (3,25%) en 1 april 2027 (2,75%); de cao zegt niet expliciet dat feitelijke salarissen hiermee stijgen. Open salarisschalen met alleen een minimum en maximum per schaal (hier als twee treden); jaarlijkse verhoging per 1 april op basis van beoordeling (0, 1 of 1,5 x normbedrag). Schalen 3 en 4 zijn doorstroomschalen voor tijdelijk en incidenteel werk. Bij maximum van de schaal en T20-beoordeling: eenmalige beoordelingsuitkering van 3% van het jaarsalaris. Daarnaast een performance bonus (percentage van de bonusgrondslag afhankelijk van schaal en beoordeling). FNV vermeldt als looptijd 1 april 2026 t/m 31 december 2028; de cao-tekst zelf noemt 31 maart 2028. Pensioen 2026: middelloonregeling bij Pensioenfonds PGB, totale premie 33,35%, werknemersbijdrage 13,15%; de franchise volgt de cao-loonontwikkeling maar het bedrag staat niet in de tekst. Vanaf 2027 naar verwachting een nieuwe regeling onder de Wtp.",
  sourceUrl: "https://www.fnv.nl/cao-sector/zakelijke-dienstverlening/cao-genpact",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      '3': [2566.98, 3116.61],
      '4': [2632.01, 3273.94],
      '5': [2713.83, 3462.75],
      '6': [2843.89, 3716.6],
      '7': [3038.99, 4027.08],
      '8': [3242.48, 4369.03],
      '9': [3469.06, 4734.04],
      '10': [3712.4, 5134.74],
      '11': [4043.85, 5608.84],
      '12': [4463.42, 6202.54],
      '13': [5107.47, 7113.01],
      '14': [5858.5, 8159.83],
      '15': [6672.45, 9301.04],
    },
  },
  periods: [
    {
      from: '2026-04-01',
      note: "+3,25% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          '3': [2650.41, 3217.9],
          '4': [2717.55, 3380.34],
          '5': [2802.03, 3575.29],
          '6': [2936.32, 3837.39],
          '7': [3137.76, 4157.96],
          '8': [3347.86, 4511.02],
          '9': [3581.8, 4887.9],
          '10': [3833.05, 5301.62],
          '11': [4175.28, 5791.13],
          '12': [4608.48, 6404.12],
          '13': [5273.46, 7344.18],
          '14': [6048.9, 8425.02],
          '15': [6889.3, 9603.32],
        },
      },
    },
    {
      from: '2027-04-01',
      note: "+2,75% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          '3': [2723.3, 3306.39],
          '4': [2792.28, 3473.3],
          '5': [2879.09, 3673.61],
          '6': [3017.07, 3942.92],
          '7': [3224.05, 4272.3],
          '8': [3439.93, 4635.07],
          '9': [3680.3, 5022.32],
          '10': [3938.46, 5447.41],
          '11': [4290.1, 5950.39],
          '12': [4735.21, 6580.23],
          '13': [5418.48, 7546.14],
          '14': [6215.24, 8656.71],
          '15': [7078.76, 9867.41],
        },
      },
    },
  ],
  vergoedingen: [],
};
