import type { Cao } from '../types.js';

/**
 * ProRail CAO 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: ProRail CAO
 * https://cao-kijker.awvn.nl/bestanden/2161_01-01-2026%20tot%2001-04-2027_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-03-01 (month) uit de bron
 *   - Basistabel 1-1-2026 teruggerekend uit de tabel per 2026-03-01 (gedeeld door +3,3%)
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-03-01, 2027-03-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoProrail2026: Cao = {
  id: 'prorail',
  name: "ProRail CAO",
  year: 2026,
  effectiveNote: "Cao 2026-01-01 t/m 2027-03-31; loontabel per 2026-03-01. Let op: Looptijd 1 januari 2026 tot 1 april 2027 (onderhandelingsresultaat 15 december 2025) Vorige cao (tot 1 januari 2026) kende in 2025 nominale verhogingen: € 60 bruto per 1 maart 2025 en € 70 bruto per 1 september 2025 (niet als percentage opgenomen) ORT-vergoedingen per 1 maart 2026 in totaal met 8,3% verhoogd Vakantiegeldpercentage, eindejaarsuitkering/IKB en pensioenpremie (Rail & OV) niet geverifieerd; 8% is het wettelijk minimum Schaal = loontabel per 1-3-2026 (bijlage 1 cao), maandbedragen bij 36 uur; alleen minimum en maximum per salarisgroep, als twee treden opgenomen. Tabel per 1-3-2027 staat ook in de cao (o.a. groep 1 € 3.157,86-€ 3.691,98) Voltijd 36 uur per week; uurloon = maandloon / 156",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/2161_01-01-2026%20tot%2001-04-2027_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 36,
    schalen: {
      '1': [3035.73, 3549.2],
      '2': [3072.78, 3686.83],
      '3': [3165.8, 3918.98],
      '4': [3264.1, 4155.68],
      '5': [3422.9, 4489.92],
      '6': [3697.79, 4911.51],
      '7': [3989.31, 5490],
      '8': [4325.06, 6058.31],
      '9': [4928.15, 7030.19],
      '10': [5672.26, 8685.66],
      '11': [6431.04, 10498.18],
    },
  },
  periods: [
    {
      from: '2026-03-01',
      note: "+3,3% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 36,
        schalen: {
          '1': [3135.91, 3666.32],
          '2': [3174.18, 3808.5],
          '3': [3270.27, 4048.31],
          '4': [3371.82, 4292.82],
          '5': [3535.86, 4638.09],
          '6': [3819.82, 5073.59],
          '7': [4120.96, 5671.17],
          '8': [4467.79, 6258.23],
          '9': [5090.78, 7262.19],
          '10': [5859.44, 8972.29],
          '11': [6643.26, 10844.62],
        },
      },
    },
    {
      from: '2027-03-01',
      note: "+0,7% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 36,
        schalen: {
          '1': [3157.86, 3691.98],
          '2': [3196.4, 3835.16],
          '3': [3293.16, 4076.65],
          '4': [3395.42, 4322.87],
          '5': [3560.61, 4670.56],
          '6': [3846.56, 5109.11],
          '7': [4149.81, 5710.87],
          '8': [4499.06, 6302.04],
          '9': [5126.42, 7313.03],
          '10': [5900.46, 9035.1],
          '11': [6689.76, 10920.53],
        },
      },
    },
  ],
  vergoedingen: [],
};
