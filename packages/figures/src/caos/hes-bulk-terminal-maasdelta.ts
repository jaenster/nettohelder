import type { Cao } from '../types.js';

/**
 * Cao HES Bulk Terminal Maasdelta (HBTM) B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao HES Bulk Terminal Maasdelta (HBTM) B.V.
 * https://cao-kijker.awvn.nl/bestanden/1079_01-01-2025%20tot%2001-01-2027_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2025-01-01 (month) uit de bron
 *   - Basistabel 1-1-2026: tabel per 2025-01-01 verhoogd met +1,5% per 2026-01-01
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoHesBulkTerminalMaasdelta2026: Cao = {
  id: 'hes-bulk-terminal-maasdelta',
  name: "Cao HES Bulk Terminal Maasdelta (HBTM) B.V.",
  year: 2026,
  effectiveNote: "Cao 2025-01-01 t/m 2026-12-31; loontabel per 2025-01-01. Let op: Naast de vaste verhogingen van 1,5% per 1-1-2025 en 1-1-2026 worden salarissen per 1 januari en 1 juli geïndexeerd met de CBS-consumentenprijsindex (alle huishoudens); die uitkomsten zijn niet opgenomen Basismaandsalarissen operationeel personeel per 1-1-2025 in klassen A, B en C (in de cao aangeduid als 'nog vervangen'); instroomschalen 80% / 87,5% / 92,5% van het startsalaris niet opgenomen Vakantietoeslag van 1 basismaandsalaris per jaar (hier 8,33%); de kerstuitkering van één basismaandsalaris is kostenneutraal in de basisbetalingen ingebouwd Arbeidsduur afhankelijk van het rooster, gemiddeld circa 36,1 tot 36,9 uur per week Pensioen via beschikbare premieregeling met wettelijke minimumfranchise; werknemersbijdrage niet vermeld",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/1079_01-01-2025%20tot%2001-01-2027_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.0833,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      'O1': [3541.3, 3681.65, 3822],
      'O2': [3962.4, 4103.65, 4243.98],
      'O3': [4384.33, 4524.66, 4667.72],
      'O4': [4829.76, 4994.55, 5158.49],
      'O5': [5223.43, 5288.46, 5352.45],
      'O6': [5405.11, 5488.68, 5677.64],
      'O7': [5611.55, 5879.93, 6148.34],
      'O8': [6061.26, 6420.83, 6780.72],
      'O9': [5387.91, 5623.59, 5859.25],
      'T1': [4117.69, 4303.31, 4479.44],
      'T2': [4615.07, 4751.62, 4887.21],
      'T3': [4977.63, 5068.04, 5158.49],
      'T4': [5223.43, 5288.45, 5352.44],
      'T5': [5397.72, 5441.98, 5486.24],
      'T6': [5415.56, 5486.24],
      'T7': [5745.28, 6013.67, 6282.13],
    },
  },
  vergoedingen: [],
};
