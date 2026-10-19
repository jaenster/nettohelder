import type { Cao } from '../types.js';

/**
 * Cao Synres B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Synres B.V.
 * https://cao-kijker.awvn.nl/bestanden/4074_01-07-2024%20tot%2001-07-2026_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8%, eindejaarsuitkering 0%
 *   - Voltijd 38 uur/week
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoSynres2026: Cao = {
  id: 'synres',
  name: "Cao Synres B.V.",
  year: 2026,
  effectiveNote: "Cao 2024-07-01 t/m 2026-06-30; geen loontabel bekend. Let op: Cao 1-7-2024 t/m 30-6-2026 (FNV); een opvolgende cao vanaf 1-7-2026 is niet gevonden Salarisschalen C33 t/m C44 zijn jaarbedragen inclusief wettelijke vakantietoeslag, met alleen minimum en maximum (per 1-1-2026 bijv. C33 € 31.891,65-€ 44.547,96, C44 € 117.804,17-€ 186.384,19); niet als maandtabel opgenomen Dagdienst 40 uur per week, vanaf 1-7-2025 38 uur; continudienst 33,6 uur MyChoice-percentage dagdienst afgebouwd van 6,11% naar 4,0% (1-7-2025) en 2,0% (1-1-2026); ploegentoeslag 31% (1-7-2025) en 32% (1-1-2026) Pensioen bij Stichting Pensioenfonds DSM Nederland: werknemersbijdrage 6,0% van het jaarinkomen boven de franchise; franchisebedrag niet vermeld",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/4074_01-07-2024%20tot%2001-07-2026_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: { kind: 'own', unit: 'maand', hoursPerWeek: 38 },
  vergoedingen: [],
};
