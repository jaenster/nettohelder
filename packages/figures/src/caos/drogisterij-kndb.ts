import type { Cao } from '../types.js';

/**
 * KNDB-cao voor zelfstandige drogisterijbedrijven 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: KNDB-cao voor zelfstandige drogisterijbedrijven
 * https://www.fnv.nl/getmedia/e730d69d-aa10-4853-98e2-e34bc71a8c4c/Onderhandelingsresultaat-KNDB-CAO-2026-2027-CNV-en-KNDB_1.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-01-01 (hour) uit de bron
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-07-01, 2027-01-01, 2027-07-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoDrogisterijKndb2026: Cao = {
  id: 'drogisterij-kndb',
  name: "KNDB-cao voor zelfstandige drogisterijbedrijven",
  year: 2026,
  effectiveNote: "Cao 2026-07-01 t/m 2027-12-31; loontabel per 2026-01-01. Let op: Cao voor zelfstandige drogisterijen (KNDB); filiaalbedrijven als Kruidvat en Etos vallen onder de VDF-cao Schaal = uurlonen per 1-1-2026 uit bijlage 1 van de cao 2025-2026 (21 jaar en ouder, functiejaar 0 t/m 6); maandloon = uurloon x 148 x 13/12 bij 37 uur per week; jeugdlonen niet opgenomen Functiegroep 1 is voor 21+ gelijk aan het wettelijk minimumloon en daarom niet opgenomen; groep 6 begint bij functiejaar 1 Per 1-7-2027 wordt de verhoging het WML-percentage als de WML-verhoging per die datum hoger is dan 1,25% Cao 2026-2027 (1-7-2026 t/m 31-12-2027) is na ledenraadpleging definitief (CNV, 31-7-2026; FNV legde het voor als eindbod) Pensioenregeling en -premie niet in de cao vermeld Geen eindejaarsuitkering of eenmalige uitkering gevonden",
  sourceUrl: "https://www.fnv.nl/getmedia/e730d69d-aa10-4853-98e2-e34bc71a8c4c/Onderhandelingsresultaat-KNDB-CAO-2026-2027-CNV-en-KNDB_1.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'uur',
    hoursPerWeek: 37,
    schalen: {
      '2': [14.79, 14.87, 14.94, 15, 15.06, 15.13, 15.21],
      '3': [14.98, 15.05, 15.13, 15.2, 15.27, 15.35, 15.42],
      '4': [15.09, 15.23, 15.38, 15.52, 15.67, 15.81, 15.97],
      '5': [15.29, 15.49, 15.69, 15.89, 16.08, 16.28, 16.49],
      '6': [15.77, 16.14, 16.5, 16.86, 17.23, 17.6],
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
        unit: 'uur',
        hoursPerWeek: 37,
        schalen: {
          '2': [15.09, 15.17, 15.24, 15.3, 15.36, 15.43, 15.51],
          '3': [15.28, 15.35, 15.43, 15.5, 15.58, 15.66, 15.73],
          '4': [15.39, 15.53, 15.69, 15.83, 15.98, 16.13, 16.29],
          '5': [15.6, 15.8, 16, 16.21, 16.4, 16.61, 16.82],
          '6': [16.09, 16.46, 16.83, 17.2, 17.57, 17.95],
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
        hoursPerWeek: 37,
        schalen: {
          '2': [15.31, 15.39, 15.47, 15.53, 15.59, 15.66, 15.75],
          '3': [15.51, 15.58, 15.66, 15.74, 15.81, 15.89, 15.96],
          '4': [15.62, 15.77, 15.92, 16.07, 16.22, 16.37, 16.53],
          '5': [15.83, 16.04, 16.24, 16.45, 16.65, 16.85, 17.07],
          '6': [16.33, 16.71, 17.08, 17.46, 17.84, 18.22],
        },
      },
    },
    {
      from: '2027-07-01',
      note: "+1,25% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'uur',
        hoursPerWeek: 37,
        schalen: {
          '2': [15.5, 15.59, 15.66, 15.72, 15.79, 15.86, 15.94],
          '3': [15.7, 15.78, 15.86, 15.93, 16.01, 16.09, 16.16],
          '4': [15.82, 15.96, 16.12, 16.27, 16.43, 16.57, 16.74],
          '5': [16.03, 16.24, 16.45, 16.66, 16.86, 17.07, 17.29],
          '6': [16.53, 16.92, 17.3, 17.67, 18.06, 18.45],
        },
      },
    },
  ],
  vergoedingen: [],
};
