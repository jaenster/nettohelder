import type { Cao } from '../types.js';

/**
 * Cao voor Dierentuinen 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao voor Dierentuinen
 * https://www.cnv.nl/documents/4552/Dierentuin_cao_2025-2026.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2025-01-01 (month) uit de bron
 *   - Basistabel 1-1-2026: tabel per 2025-01-01 verhoogd met +1% per 2025-07-01
 *   - Basistabel 1-1-2026: tabel per 2025-01-01 verhoogd met +2,5% per 2026-01-01
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoDierentuinen2026: Cao = {
  id: 'dierentuinen',
  name: "Cao voor Dierentuinen",
  year: 2026,
  effectiveNote: "Cao 2025-01-01 t/m 2026-12-31; loontabel per 2025-01-01. Let op: Verhogingen van 1% (1-7-2025) en 2,5% (1-1-2026) gelden voor functiegroepen III t/m XI (basis-, eindloon en feitelijk loon) Per 1-1-2025 is het loongebouw gerepareerd: functiegroepen III-VI +2,5% en VII-XI +2,0% op feitelijk loon en eindloon; basislonen III, IV en V +5,5%, +7% en +4%. Deze verhoging verschilt per groep en is niet opgenomen Functiegroep I+II (samengevoegd per 1-1-2025) volgt het wettelijk minimumloon: basisloon, eindloon en feitelijk loon stijgen per 1 januari en 1 juli met het WML-percentage Fulltime is 38 uur per week (1976 uur per jaar, jaarurensystematiek) Bovenop de cao-verhoging een jaarlijkse individuele periodieke verhoging op basis van beoordeling (2% als er niet beoordeeld wordt), tot het eindloon Geen eindejaarsuitkering en geen pensioenregeling in de cao-tekst Cao loopt af op 31-12-2026; onderhandelingen over een nieuwe cao lopen (oktober 2026) Loontabel per 1-1-2025 (bijlage 2) geeft alleen basisloon en eindloon per functiegroep; opgenomen als [basisloon, eindloon]. Groei binnen de schaal via individuele periodieke verhoging (variabel %) Functiegroep I+II niet in de schaal: basisloon is het WML (€ 2.315,21 per 1-1-2025), eindloon € 2.397,21 per 1-1-2025, beide geïndexeerd met het WML",
  sourceUrl: "https://www.cnv.nl/documents/4552/Dierentuin_cao_2025-2026.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 38,
    schalen: {
      'III': [2460.31, 2617.11],
      'IV': [2495.28, 2843.7],
      'V': [2530.28, 3021.67],
      'VI': [2779.7, 3368.17],
      'VII': [3059.63, 3781.48],
      'VIII': [3300.67, 4140.6],
      'IX': [3598.35, 4604.39],
      'X': [3922.2, 5018.78],
      'XI': [4275.24, 5468.34],
    },
  },
  vergoedingen: [],
};
