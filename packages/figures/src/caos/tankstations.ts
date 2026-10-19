import type { Cao } from '../types.js';

/**
 * Cao voor Tankstations en Wasbedrijven 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao voor Tankstations en Wasbedrijven
 * https://www.fnv.nl/getmedia/79714bc5-9a2c-4a4b-a1e5-58233119573c/1767-tankstations-en-wasbedrijven-cao-01-04-2025-tm-31-12-2026-v08122025.pdf?ext=.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-01-01 (month) uit de bron
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoTankstations2026: Cao = {
  id: 'tankstations',
  name: "Cao voor Tankstations en Wasbedrijven",
  year: 2026,
  effectiveNote: "Cao 2025-04-01 t/m 2026-12-31; loontabel per 2026-01-01. Let op: Schaal = functiejarentabel per maand per 1-1-2026 (21 jaar en ouder, 38 uur per week); functiejaren gelden formeel alleen bij werkgevers die tot 1-12-2009 onder de cao Motorvoertuigenbedrijf vielen, andere werkgevers passen minimaal het aanvangssalaris (functiejaar 0) toe Functiegroep 1 is gekoppeld aan het wettelijk minimumloon en niet opgenomen; cao-verhogingen gelden vanaf functiegroep 2 Per 1-1-2026 is een nieuw functiegebouw (Functieboek Tankstations en Wasbedrijven) ingevoerd Pensioen bij PMT; werknemersdeel van de premie staat niet in de cao en is niet opgenomen Cao loopt tot en met 31-12-2026; onderhandelingen over een nieuwe cao starten in oktober 2026, loonsverhoging 2027 nog niet bekend Geen eindejaarsuitkering of eenmalige uitkering gevonden",
  sourceUrl: "https://www.fnv.nl/getmedia/79714bc5-9a2c-4a4b-a1e5-58233119573c/1767-tankstations-en-wasbedrijven-cao-01-04-2025-tm-31-12-2026-v08122025.pdf?ext=.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 38,
    schalen: {
      '2': [2531.11, 2610.45, 2650.66, 2689.78],
      '3': [2650.66, 2689.78, 2726.73, 2768.03],
      '4': [2839.76, 2862.58, 2884.32, 2911.49, 2929.96, 2954.96, 2974.52],
      '5': [3001.69, 3064.72, 3113.63, 3159.27, 3200.57, 3237.52, 3284.25, 3325.55, 3369.02],
    },
  },
  vergoedingen: [],
};
