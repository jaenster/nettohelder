import type { Cao } from '../types.js';

/**
 * Cao Koninklijke N.V. Texels Eigen Stoomboot Onderneming (TESO) 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Koninklijke N.V. Texels Eigen Stoomboot Onderneming (TESO)
 * https://cao-kijker.awvn.nl/bestanden/0469_01-01-2026%20tot%2001-01-2027_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-01-01 (month) uit de bron
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoTeso2026: Cao = {
  id: 'teso',
  name: "Cao Koninklijke N.V. Texels Eigen Stoomboot Onderneming (TESO)",
  year: 2026,
  effectiveNote: "Cao 2026-01-01 t/m 2026-12-31; loontabel per 2026-01-01. Let op: Cao 1-1-2026 t/m 31-12-2026 (onderhandelingsresultaat 4-12-2025): lonen per 1-1-2026 +1,85% (indexcijfer); per 1-7-2026 verhoging met de dan geldende ALI, waarbij de verhogingen van 1-1-2026 en 1-7-2026 samen minimaal 4,0% zijn. De verhoging per 1-7-2026 is niet verwerkt Functiegroep 1 per 1-1-2026 minimaal € 16,00 bruto per uur Schalen per functiegroep samengesteld uit de inschalingstabel (functiegroep x functiejaar -> loonschaal) en de maandlonen per 1-1-2026 uit bijlage II (21 jaar en ouder); extra PT-eindschalen niet opgenomen Uurloon = maandloon / 156; jaarloon = 12 x maandloon Vakantietoeslag 8,9% over maandloon plus toeslagen en overwerk, minimaal het maandloon van schaal 13 (bij 12 maanden dienstverband) Jaargratificatie (13e maand) van 8,33% van 12 x het uitbetaalde maandloon, in november Pensioen bij Pensioenfonds Vervoer; premie niet in de cao vermeld",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/0469_01-01-2026%20tot%2001-01-2027_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08900000000000001,
  eindejaarsuitkeringPct: 0.0833,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      '1': [2352],
      '2': [3070.11, 3146.45, 3226.19, 3305.86, 3389, 3472.11],
      '3': [3146.45, 3226.19, 3305.86, 3389, 3472.11, 3560.35, 3648.54],
      '4': [3226.19, 3305.86, 3389, 3472.11, 3560.35, 3648.54, 3740.14, 3833.42],
      '5': [3305.86, 3389, 3472.11, 3560.35, 3648.54, 3740.14, 3833.42, 3930.09, 4028.5],
      '6': [3472.11, 3560.35, 3648.54, 3740.14, 3833.42, 3930.09, 4028.5, 4128.56, 4232.04, 4338.88],
      '7': [3648.54, 3740.14, 3833.42, 3930.09, 4028.5, 4128.56, 4232.04, 4338.88, 4445.74, 4557.69, 4671.32],
      '8': [3930.09, 4028.5, 4128.56, 4232.04, 4338.88, 4445.74, 4557.69, 4671.32, 4786.68, 4907.11, 5030.97, 5156.43],
      '9': [4232.04, 4338.88, 4445.74, 4557.69, 4671.32, 4786.68, 4907.11, 5030.97, 5156.43, 5283.69, 5415.96, 5551.67, 5690.76],
      '10': [4786.68, 4907.11, 5030.97, 5156.43, 5283.69, 5415.96, 5551.67, 5690.76, 5833.24, 5979.18, 6128.41, 6281.04, 6438.82],
      '11': [5415.96, 5551.67, 5690.76, 5833.24, 5979.18, 6128.41, 6281.04, 6438.82, 6599.91, 6764.47, 6934.05, 7107.11, 7285.19],
    },
  },
  vergoedingen: [],
};
