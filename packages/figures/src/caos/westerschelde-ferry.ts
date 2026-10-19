import type { Cao } from '../types.js';

/**
 * Cao Westerschelde Ferry B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Westerschelde Ferry B.V.
 * https://cao-kijker.awvn.nl/bestanden/4124_01-01-2025%20tot%2001-01-2028_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2025-01-01 (month) uit de bron
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoWesterscheldeFerry2026: Cao = {
  id: 'westerschelde-ferry',
  name: "Cao Westerschelde Ferry B.V.",
  year: 2026,
  effectiveNote: "Cao 2025-01-01 t/m 2027-12-31; loontabel per 2025-01-01. Let op: Per 1 januari 2026 en 1 januari 2027: structurele verhoging met de stijging van de CBS-index cao-lonen per uur incl. bijzondere beloningen (oktober t.o.v. oktober vorig jaar); uitkomsten niet gevonden, niet opgenomen Salaristabel per 1 januari 2025; schaal 2 treden 0 en 1 liggen onder het minimumloon en zijn niet opgenomen Eindejaarsuitkering € 1.000 bruto per jaar bij fulltime dienstverband, uitbetaald in december (vast bedrag, niet als percentage opgenomen) Medewerkers met een 36-urige werkweek mogelijk (art. 11) Pensioen via ABP; premieverdeling volgt het ABP, percentage niet in de cao vermeld",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/4124_01-01-2025%20tot%2001-01-2028_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 38,
    schalen: {
      '2': [2480.03, 2553.06, 2629.65, 2708.54, 2789.8, 2873.49, 2959.88, 3048.94, 3141.16],
      '3': [2553.06, 2629.65, 2708.54, 2789.8, 2873.49, 2959.88, 3048.94, 3141.16, 3235.39, 3332.97, 3433.57],
      '4': [2789.8, 2873.49, 2959.88, 3048.94, 3141.16, 3235.39, 3332.97, 3433.57, 3569.71, 3677.63, 3903.56],
      '5': [3048.94, 3141.16, 3235.39, 3332.97, 3433.57, 3569.71, 3677.63, 3903.56, 3914.46, 4031.89, 4152.85],
      '6': [3332.97, 3433.57, 3569.71, 3677.63, 3903.56, 3914.46, 4031.89, 4152.85, 4278.78, 4354.05, 4537.7],
      '7': [3677.63, 3903.56, 3914.46, 4031.89, 4152.85, 4278.78, 4354.05, 4537.7, 4626.06, 4764.85, 4907.79],
      '8': [4031.89, 4152.85, 4278.78, 4354.05, 4537.7, 4626.06, 4764.85, 4907.79, 5057.08, 5211, 5369.67],
      '9': [4354.05, 4537.7, 4626.06, 4764.85, 4907.79, 5057.08, 5211, 5369.67, 5530.76, 5696.68, 5888.77],
      '10': [4764.85, 4907.79, 5057.08, 5211, 5369.67, 5530.76, 5696.68, 5888.77, 6065.43, 6247.39, 6434.82],
      '11': [5211, 5369.67, 5530.76, 5696.68, 5888.77, 6065.43, 6247.39, 6434.82, 6627.86, 6826.7, 7031.5],
      '12': [5696.68, 5888.77, 6065.43, 6247.39, 6434.82, 6627.86, 6826.7, 7031.5, 7242.44, 7459.72, 7683.51],
    },
  },
  vergoedingen: [],
};
