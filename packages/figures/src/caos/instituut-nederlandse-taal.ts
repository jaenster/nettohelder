import type { Cao } from '../types.js';

/**
 * Instituut voor de Nederlandse Taal 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Instituut voor de Nederlandse Taal
 * https://cao-kijker.awvn.nl/bestanden/4144_01-10-2025%20tot%2001-10-2026_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-01-01 (month) uit de bron
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoInstituutNederlandseTaal2026: Cao = {
  id: 'instituut-nederlandse-taal',
  name: "Instituut voor de Nederlandse Taal",
  year: 2026,
  effectiveNote: "Cao 2025-10-01 t/m 2026-09-30; loontabel per 2026-01-01. Let op: Cao INT 1 oktober 2025 t/m 30 september 2026 (CNV, FNV; WVOI namens werkgever); salarisschalen +1,9% per 1-10-2025 en +3% per 1-1-2026. Geen nieuwere cao gevonden. Eenmalige uitkering € 900 bruto voor werknemers in dienst op 1 november 2025, naar rato van dienstverband en maanden in dienst (1-1-2025 t/m 31-10-2025); betaaldatum niet vermeld, daarom niet opgenomen. Salarisschalen 1 t/m 18 per 1-1-2026; de laagste treden van de lagere schalen zijn gelijk aan het bodembedrag van € 2.988. Aparte schalen voor oio's, arbeidsgehandicapten en BBL-leerlingen. Volledige arbeidsduur 38 uur per week (volledige werkweek 40 uur met verlofcompensatie). Vakantie-uitkering 8% (mei), eindejaarsuitkering 8,33% (december). Pensioen bij ABP; premie niet in de cao vermeld.",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/4144_01-10-2025%20tot%2001-10-2026_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 38,
    schalen: {
      '1': [2988, 2988, 2988, 2988, 2988, 2988, 2988],
      '2': [2988, 2988, 2988, 2988, 2988, 2988, 2988, 2988],
      '3': [2988, 2988, 2988, 2988, 2988, 2988, 2988, 3024, 3115, 3197],
      '4': [2988, 2988, 2988, 2988, 2988, 2988, 3024, 3115, 3197, 3288, 3371],
      '5': [2988, 2988, 2988, 2988, 3024, 3115, 3197, 3288, 3371, 3458, 3545],
      '6': [2988, 2988, 2988, 3115, 3197, 3288, 3371, 3458, 3545, 3630, 3713],
      '7': [3024, 3115, 3288, 3458, 3545, 3630, 3713, 3802, 3892, 3989, 4098],
      '8': [3458, 3630, 3802, 3989, 4098, 4195, 4280, 4374, 4469, 4552, 4634],
      '9': [3802, 3989, 4195, 4374, 4552, 4725, 4885, 5076, 5241],
      '10': [3630, 3802, 3989, 4195, 4374, 4552, 4725, 4885, 5076, 5241, 5401, 5570, 5758],
      '11': [4885, 5076, 5241, 5401, 5570, 5758, 5942, 6117, 6287, 6458, 6627, 6722],
      '12': [5942, 6117, 6287, 6458, 6627, 6803, 6979, 7142, 7313, 7533, 7641],
      '13': [6803, 6979, 7142, 7313, 7533, 7748, 7964, 8183, 8285],
      '14': [7142, 7313, 7533, 7748, 7964, 8183, 8399, 8625, 8859, 9098],
      '15': [7748, 7964, 8183, 8399, 8625, 8859, 9098, 9396, 9689, 9998],
      '16': [8399, 8625, 8859, 9098, 9396, 9689, 9998, 10320, 10650, 10989],
      '17': [9098, 9396, 9689, 9998, 10320, 10650, 10989, 11341, 11704, 12077],
      '18': [9998, 10320, 10650, 10989, 11341, 11704, 12077, 12463, 12857, 13271],
    },
  },
  vergoedingen: [],
};
