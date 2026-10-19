import type { Cao } from '../types.js';

/**
 * Cao Transavia Vliegers 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Transavia Vliegers
 * https://cao-kijker.awvn.nl/bestanden/0265_15-10-2023%20tot%2001-03-2026_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-01-01 (month) uit de bron
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoTransaviaVliegers2026: Cao = {
  id: 'transavia-vliegers',
  name: "Cao Transavia Vliegers",
  year: 2026,
  effectiveNote: "Cao 2023-10-15 t/m 2026-02-28; loontabel per 2026-01-01. Let op: Salaristabel 1A en 1B per 1 januari 2026; kolommen per stoelcapaciteit van de vloot (100-200, 201-300, >300 stoelen); welke kolom geldt hangt af van de vloot FO-reeks loopt van trede 0 t/m 15 (trede 15 t/m 28 hebben hetzelfde bedrag; alleen trede 15 opgenomen); trede 0 geldt de eerste 2 maanden, daarna FO-starttrede 1 CPT-reeks begint bij trede 4 (trede 0-3 bestaan niet voor CPT) en loopt t/m trede 32; trede 29 t/m 32 behoren tot salaristabel 1B (CPT in dienst op of na 1 juli 2015 e.a.) Extra loonsverhoging per 1 januari 2026 van het verschil tussen de CPI-jaarmutatie december 2025 en 3% (max. 2%), en per 1 maart 2027 van max. 0,5% afhankelijk van CPI februari 2026; uitkomst niet bekend Pensioen: premiebudget 34% van het ongemaximeerde pensioengevend salaris (maandsalaris x 12,84), waarvan 1/3 werknemerspremie; deels netto pensioenregeling; niet in het rekenmodel opgenomen Cao liep af op 28 februari 2026; geen nieuwe cao Transavia Vliegers gevonden",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/0265_15-10-2023%20tot%2001-03-2026_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      'FO 100-200 stoelen': [2560.87, 5417.16, 5801.35, 6103.21, 6528.57, 6981.35, 7327.13, 7656.45, 8136.71, 8562.04, 8946.24, 9303.01, 9714.64, 10153.7, 10643.56, 11051.91],
      'CPT 100-200 stoelen': [8813.13, 9224.8, 9636.42, 10048.06, 10459.72, 10871.33, 11282.96, 11694.61, 12106.26, 12517.9, 12929.52, 13341.14, 13752.8, 14164.45, 14576.08, 14987.72, 15399.33, 15810.98, 16222.62, 16634.27, 17045.89, 17457.53, 17869.18, 18268.47, 18680.11, 19091.74, 19503.37, 19915.01, 20323.36],
      'FO 201-300 stoelen': [2697.32, 5570.46, 5962.36, 6264.18, 6689.55, 7146.95, 7489.67, 7818.97, 8293.06, 8719.97, 9107.23, 9463.99, 9875.64, 10314.73, 10804.55, 11212.91],
      'CPT 201-300 stoelen': [9122.4, 9533.64, 9944.88, 10356.11, 10767.34, 11178.6, 11589.83, 12001.05, 12412.32, 12823.56, 13234.8, 13646.05, 14057.28, 14468.52, 14879.77, 15290.99, 15702.25, 16113.47, 16524.72, 16935.96, 17347.21, 17758.42, 18169.69, 18568.59, 18979.81, 19391.08, 19802.31, 20213.55, 20621.9],
      'FO >300 stoelen': [2913.5, 5831.13, 6219.93, 6521.74, 6942.53, 7398.4, 7741.1, 8068.87, 8543, 8966.83, 9354.09, 9710.87, 10122.5, 10561.55, 11051.4, 11459.76],
      'CPT >300 stoelen': [9607.9, 10018.6, 10429.35, 10840.09, 11250.79, 11661.55, 12072.26, 12482.97, 12893.73, 13304.45, 13715.19, 14125.9, 14536.62, 14947.38, 15358.08, 15768.83, 16179.55, 16590.28, 17001.02, 17411.73, 17822.47, 18233.19, 18643.94, 19042.32, 19453.04, 19863.78, 20274.5, 20685.23, 21093.59],
    },
  },
  vergoedingen: [],
};
