import type { Cao } from '../types.js';

/**
 * Cao Groningen Airport Eelde N.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Groningen Airport Eelde N.V.
 * https://cao-kijker.awvn.nl/bestanden/2724_01-01-2026%20tot%2001-01-2027_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-01-01 (month) uit de bron
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoGroningenAirportEelde2026: Cao = {
  id: 'groningen-airport-eelde',
  name: "Cao Groningen Airport Eelde N.V.",
  year: 2026,
  effectiveNote: "Cao 2026-01-01 t/m 2026-12-31; loontabel per 2026-01-01. Let op: Salarisbanden zonder treden: opgenomen als [minimum, maximum (100%)]; daarnaast een maximum van 105% bij uitstekende beoordeling. Groei binnen de band via beoordelingsmatrix Vakantietoeslag 8% van 12 maandinkomens; eindejaarsuitkering 8,33% van 12 bruto maandsalarissen in december Gemiddelde arbeidsduur 36 uur per week Toeslag van 4,5% voor specifieke extra rollen (schaal A-H) en tanktoeslag EUR 150 per maand (niet meegenomen) Pensioen bij ABP; werknemerspremie niet in de cao Verhogingen 2025 (3% per 1-1 en 2,5% per 1-7) uit de cao 2025 volgens AWVN cao-kijker",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/2724_01-01-2026%20tot%2001-01-2027_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 36,
    schalen: {
      'A': [2619, 2811],
      'B': [2619, 2946],
      'C': [2619, 3101],
      'D': [2668, 3317],
      'E': [2804, 3590],
      'F': [2980, 3919],
      'G': [3204, 4311],
      'H': [3475, 4769],
      'I': [3795, 5288],
      'J': [4171, 5877],
      'K': [4595, 6530],
      'L': [5143, 7351],
      'M': [5836, 8370],
      'N': [6625, 9531],
      'O': [7516, 10855],
    },
  },
  vergoedingen: [],
};
