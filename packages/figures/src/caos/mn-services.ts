import type { Cao } from '../types.js';

/**
 * Cao MN Services N.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao MN Services N.V.
 * https://cao-kijker.awvn.nl/bestanden/0675_01-01-2026%20tot%2001-07-2027_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2027-01-01 (month) uit de bron
 *   - Basistabel 1-1-2026 teruggerekend uit de tabel per 2027-01-01 (gedeeld door +2%, +2%)
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-07-01, 2027-01-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoMnServices2026: Cao = {
  id: 'mn-services',
  name: "Cao MN Services N.V.",
  year: 2026,
  effectiveNote: "Cao 2026-01-01 t/m 2027-06-30; loontabel per 2027-01-01. Let op: Cao 1-1-2026 t/m 30-6-2027 (De Unie); salarissen en schalen +2% per 1-1-2026, +2% per 1-7-2026 en +2% per 1-1-2027 Salarisschalen (bijlage 1A, per 1-1-2027) kennen geen treden: per schaal minimum (70%), normsalaris (100%) en maximum (110%) per maand op basis van 36 uur Aparte schalen voor Front- en Backoffice Vermogensbeheer (bijlage 1C) zijn niet opgenomen Individuele salarisgroei binnen de schaal via tabel salarisgroei (budget 1% van de loonsom), afhankelijk van positie in de schaal Eindejaarsuitkering 8,33% en vakantietoeslag 8% van het basisjaarsalaris; beide maandelijks of jaarlijks uit te keren Pensioen bij PMT (basis + excedent); werknemer betaalt 1/3 van de premie, het premiepercentage staat niet in de cao Minimumuurloon € 14,71 bruto (€ 2.294,40 per maand bij 36 uur) Internetvergoeding € 35 netto per maand",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/0675_01-01-2026%20tot%2001-07-2027_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 36,
    schalen: {
      '9': [2211.68, 3159.54, 3475.5],
      '10': [2337.29, 3338.99, 3672.89],
      '11': [2529.36, 3613.38, 3974.72],
      '12': [2778.38, 3969.12, 4366.03],
      '13': [3072.43, 4389.2, 4828.11],
      '14': [3413.52, 4876.46, 5364.11],
      '15': [4011.36, 5730.52, 6303.57],
      '16': [4415.88, 6308.39, 6939.23],
      '17': [5146.76, 7352.51, 8087.76],
      '18': [6454.05, 9220.07, 10142.08],
      '19': [8004.18, 11434.54, 12578],
      '20': [9434.74, 13478.19, 14826.01],
      '21': [11052.33, 15789.04, 17367.95],
    },
  },
  periods: [
    {
      from: '2026-07-01',
      note: "+2% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 36,
        schalen: {
          '9': [2255.91, 3222.74, 3545.01],
          '10': [2384.04, 3405.76, 3746.34],
          '11': [2579.95, 3685.65, 4054.22],
          '12': [2833.95, 4048.5, 4453.35],
          '13': [3133.88, 4476.98, 4924.68],
          '14': [3481.79, 4973.99, 5471.39],
          '15': [4091.59, 5845.13, 6429.64],
          '16': [4504.2, 6434.56, 7078.02],
          '17': [5249.7, 7499.56, 8249.52],
          '18': [6583.13, 9404.47, 10344.92],
          '19': [8164.26, 11663.24, 12829.56],
          '20': [9623.43, 13747.75, 15122.53],
          '21': [11273.37, 16104.82, 17715.3],
        },
      },
    },
    {
      from: '2027-01-01',
      note: "+2% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 36,
        schalen: {
          '9': [2301.03, 3287.19, 3615.91],
          '10': [2431.72, 3473.88, 3821.27],
          '11': [2631.55, 3759.36, 4135.3],
          '12': [2890.63, 4129.47, 4542.42],
          '13': [3196.56, 4566.52, 5023.17],
          '14': [3551.43, 5073.47, 5580.82],
          '15': [4173.42, 5962.03, 6558.23],
          '16': [4594.28, 6563.25, 7219.58],
          '17': [5354.69, 7649.55, 8414.51],
          '18': [6714.79, 9592.56, 10551.82],
          '19': [8327.55, 11896.5, 13086.15],
          '20': [9815.9, 14022.71, 15424.98],
          '21': [11498.84, 16426.92, 18069.61],
        },
      },
    },
  ],
  vergoedingen: [],
};
