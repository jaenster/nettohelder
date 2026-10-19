import type { Cao } from '../types.js';

/**
 * Breedband en Telecommunicatie 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Breedband en Telecommunicatie
 * https://www.fnv.nl/getmedia/0c5d531f-c5e5-403a-b4b4-fa22b3673fff/1186-breedband-en-telecommunicatie-cao-01-01-2025-31-12-2027-versie-01-09-2025.pdf?ext=.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-01-01 (month) uit de bron
 *   - Latere tabellen berekend uit de cao-verhogingen (2027-01-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoBreedbandTelecom2026: Cao = {
  id: 'breedband-telecom',
  name: "Breedband en Telecommunicatie",
  year: 2026,
  effectiveNote: "Cao 2025-01-01 t/m 2027-12-31; loontabel per 2026-01-01. Let op: Schaal: salaristabel per 1 januari 2026, maandbedragen (40 uur) in hele euro's; per functieschaal alleen basissalaris (70%) en maximumsalaris (100%), opgenomen als twee treden. Uitloopsalaris (110%) niet opgenomen. Basissalarissen van de laagste schalen liggen onder het wettelijk minimumloon.",
  sourceUrl: "https://www.fnv.nl/getmedia/0c5d531f-c5e5-403a-b4b4-fa22b3673fff/1186-breedband-en-telecommunicatie-cao-01-01-2025-31-12-2027-versie-01-09-2025.pdf?ext=.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      '1': [1937, 2723],
      '2': [2033, 2861],
      '3': [2148, 3025],
      '4': [2286, 3222],
      '5': [2464, 3477],
      '6': [2674, 3786],
      '7': [2979, 4233],
      '8': [3314, 4726],
      '9': [3714, 5306],
      '10': [4206, 6008],
      '11': [4781, 6830],
      '12': [5469, 7813],
    },
  },
  periods: [
    {
      from: '2027-01-01',
      note: "+2% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          '1': [1975.74, 2777.46],
          '2': [2073.66, 2918.22],
          '3': [2190.96, 3085.5],
          '4': [2331.72, 3286.44],
          '5': [2513.28, 3546.54],
          '6': [2727.48, 3861.72],
          '7': [3038.58, 4317.66],
          '8': [3380.28, 4820.52],
          '9': [3788.28, 5412.12],
          '10': [4290.12, 6128.16],
          '11': [4876.62, 6966.6],
          '12': [5578.38, 7969.26],
        },
      },
    },
  ],
  vergoedingen: [],
};
