import type { Cao } from '../types.js';

/**
 * Bedrijfs-cao Stichting Pluryn Maatschappelijke Ondernemingen 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Bedrijfs-cao Stichting Pluryn Maatschappelijke Ondernemingen
 * https://cao-kijker.awvn.nl/bestanden/3945_01-07-2025%20tot%2001-01-2027_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2025-07-01 (month) uit de bron
 *   - Basistabel 1-1-2026: tabel per 2025-07-01 verhoogd met +2% per 2026-01-01
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoPluryn2026: Cao = {
  id: 'pluryn',
  name: "Bedrijfs-cao Stichting Pluryn Maatschappelijke Ondernemingen",
  year: 2026,
  effectiveNote: "Cao 2025-07-01 t/m 2026-12-31; loontabel per 2025-07-01. Let op: Loontabel per 1-7-2025 geeft per functiegroep alleen basisloon en eindloon (geen treden); hier als [min, max] opgenomen. Groepen I t/m VI beginnen op 110% van het wettelijk minimumloon Per 1-1-2026 tabel en feitelijke salarissen +2%; in de tabel 2026 staan groepen I-III en de beginlonen IV-VI alleen als '110% WML', daarom de tabel van 1-7-2025 opgenomen. Eindlonen 2026: VII € 3.595,33, XI € 5.092,36 Jaarlijkse groei in de schaal 2% van het maandsalaris tot het eindloon (of via beoordelingssysteem, minimaal 2% bij voldoende) Eindejaarsuitkering 4% in 2025, 5% in 2026 en 6% in 2027 van het feitelijk verdiende salaris Cao afgesloten met De Horecabond; voltijd gemiddeld 38 uur per week Pensioenregeling en werknemerspremie niet in de cao vermeld; niet opgenomen",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/3945_01-07-2025%20tot%2001-01-2027_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.05,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 38,
    schalen: {
      'I': [2660.55, 2660.55],
      'II': [2660.55, 2660.55],
      'III': [2660.55, 2660.55],
      'IV': [2660.55, 2681.65],
      'V': [2660.55, 2907.93],
      'VI': [2660.55, 3211.53],
      'VII': [2796.87, 3595.33],
      'VIII': [3062.45, 3914.03],
      'IX': [3338.64, 4325.61],
      'X': [3639.13, 4693.38],
      'XI': [3966.65, 5092.36],
    },
  },
  vergoedingen: [],
};
