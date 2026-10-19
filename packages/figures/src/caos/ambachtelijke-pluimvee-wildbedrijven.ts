import type { Cao } from '../types.js';

/**
 * Cao Ambachtelijke Pluimvee- en Wildbedrijven 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Ambachtelijke Pluimvee- en Wildbedrijven
 * https://www.fnv.nl/getmedia/f8a50cac-38b5-46c8-8a59-3d84cec78dd2/1889-ambachtelijke-pluimvee-en-wildbedrijven-poeliers-cao-01-09-2025-tm-28-02-2027-v31032026.pdf?ext=.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2027-01-01 (hour) uit de bron
 *   - Basistabel 1-1-2026 teruggerekend uit de tabel per 2027-01-01 (gedeeld door +3,5%, +1,5%)
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-03-01, 2027-01-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoAmbachtelijkePluimveeWildbedrijven2026: Cao = {
  id: 'ambachtelijke-pluimvee-wildbedrijven',
  name: "Cao Ambachtelijke Pluimvee- en Wildbedrijven",
  year: 2026,
  effectiveNote: "Cao 2025-09-01 t/m 2027-02-28; loontabel per 2027-01-01. Let op: Schaal 1 en schaal 2 trede 0 volgen het wettelijk minimumloon en krijgen de procentuele verhogingen niet. Per 1 september 2025: uurloon schaal 8 trede 0 naar € 17,58 en schaal 9 trede 0 naar € 17,88. Per 1 november 2025 afwijkende verhogingen voor jeugdlonen en enkele treden (schaal 2 trede 2 +1,5%, schaal 4 trede 1 +1,5%, schaal 5 trede 0 +1,5%). De cao bevat ook week-, 4-weken- en maandlonen (afgeleid van de uurlonen x 38). Tabel per 1 januari 2027 vermeldt voor trede 0 van schaal 1 en 2 nog € 14,71. Pensioenfonds en werknemerspremie niet in de cao gevonden.",
  sourceUrl: "https://www.fnv.nl/getmedia/f8a50cac-38b5-46c8-8a59-3d84cec78dd2/1889-ambachtelijke-pluimvee-en-wildbedrijven-poeliers-cao-01-09-2025-tm-28-02-2027-v31032026.pdf?ext=.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'uur',
    hoursPerWeek: 38,
    schalen: {
      '1': [14],
      '2': [14, 14.72, 14.72, 14.9, 15.27, 15.65, 16.01, 16.35],
      '3': [14.72, 14.79, 14.85, 15.14, 15.45, 15.76, 16.06, 16.37, 16.58],
      '4': [14.79, 14.86, 15.56, 15.87, 16.12, 16.35, 16.53, 16.73, 16.9, 17.09],
      '5': [14.86, 16.68, 17, 17.26, 17.59, 17.91],
      '6': [16.84, 17.17, 17.48, 17.79, 18.09, 18.48, 18.68],
      '7': [17.35, 17.71, 18.04, 18.37, 18.71, 19.08, 19.27],
      '8': [17.76, 18.2, 18.61, 18.95, 19.31, 19.69, 19.87],
      '9': [18.06, 18.28, 18.68, 19.18, 19.43, 19.73, 19.89, 20.31],
      '10': [18.87, 19.27, 19.66, 20.04, 20.41, 20.79, 21.18, 21.6],
      '11': [18.88, 19.29, 19.72, 20.09, 20.54, 21, 21.44, 21.9, 22.34],
    },
  },
  periods: [
    {
      from: '2026-03-01',
      note: "+3,5% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'uur',
        hoursPerWeek: 38,
        schalen: {
          '1': [14.49],
          '2': [14.49, 15.23, 15.23, 15.42, 15.8, 16.2, 16.57, 16.93],
          '3': [15.23, 15.31, 15.37, 15.67, 15.99, 16.32, 16.62, 16.95, 17.16],
          '4': [15.31, 15.38, 16.11, 16.42, 16.68, 16.93, 17.11, 17.32, 17.49, 17.68],
          '5': [15.38, 17.26, 17.6, 17.86, 18.21, 18.53],
          '6': [17.43, 17.77, 18.09, 18.41, 18.72, 19.12, 19.33],
          '7': [17.96, 18.33, 18.67, 19.01, 19.37, 19.74, 19.94],
          '8': [18.38, 18.84, 19.26, 19.62, 19.99, 20.37, 20.56],
          '9': [18.69, 18.92, 19.33, 19.85, 20.11, 20.42, 20.59, 21.02],
          '10': [19.53, 19.94, 20.34, 20.74, 21.12, 21.52, 21.92, 22.35],
          '11': [19.54, 19.96, 20.41, 20.8, 21.26, 21.73, 22.19, 22.67, 23.12],
        },
      },
    },
    {
      from: '2027-01-01',
      note: "+1,5% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'uur',
        hoursPerWeek: 38,
        schalen: {
          '1': [14.71],
          '2': [14.71, 15.46, 15.46, 15.65, 16.04, 16.44, 16.82, 17.18],
          '3': [15.46, 15.54, 15.6, 15.91, 16.23, 16.56, 16.87, 17.2, 17.42],
          '4': [15.54, 15.61, 16.35, 16.67, 16.93, 17.18, 17.37, 17.58, 17.75, 17.95],
          '5': [15.61, 17.52, 17.86, 18.13, 18.48, 18.81],
          '6': [17.69, 18.04, 18.36, 18.69, 19, 19.41, 19.62],
          '7': [18.23, 18.61, 18.95, 19.3, 19.66, 20.04, 20.24],
          '8': [18.66, 19.12, 19.55, 19.91, 20.29, 20.68, 20.87],
          '9': [18.97, 19.2, 19.62, 20.15, 20.41, 20.73, 20.9, 21.34],
          '10': [19.82, 20.24, 20.65, 21.05, 21.44, 21.84, 22.25, 22.69],
          '11': [19.83, 20.26, 20.72, 21.11, 21.58, 22.06, 22.52, 23.01, 23.47],
        },
      },
    },
  ],
  vergoedingen: [],
};
