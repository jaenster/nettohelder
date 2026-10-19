import type { Cao } from '../types.js';

/**
 * Cao Avient Protective Materials Services B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Avient Protective Materials Services B.V.
 * https://www.fnv.nl/getmedia/b014f44f-904c-417c-b6b6-6b22c330882a/2062-avient-protective-materials-services-b-v-cao-1-10-2024-tm-31-3-2026-v11022025.pdf?ext=.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8%, eindejaarsuitkering 0%
 *   - Voltijd 40 uur/week
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoAvientProtectiveMaterials2026: Cao = {
  id: 'avient-protective-materials',
  name: "Cao Avient Protective Materials Services B.V.",
  year: 2026,
  effectiveNote: "Cao 2024-10-01 t/m 2026-03-31; geen loontabel bekend. Let op: Collectieve verhoging van salarisschalen en individuele jaarsalarissen: 3,0% per 1-11-2024 en 1,5% per 1-1-2026 Daarnaast beoordelingsafhankelijke verhoging per 1 april (0-6%) tot het schaalmaximum Salarisschalen staan als jaarbedragen (incl. vakantietoeslag, excl. MyChoice-budget) in de cao en zijn niet overgenomen Voltijd gemiddeld 40 uur per week (5-ploegendienst 33,6 uur); vakantietoeslag 8% is wettelijk en in de jaarsalarissen inbegrepen Pensioen bij Stichting Pensioenfonds DSM Nederland (PDN); werknemerspremie niet opgenomen Cao liep af op 31-3-2026; een nieuwe cao is niet gevonden",
  sourceUrl: "https://www.fnv.nl/getmedia/b014f44f-904c-417c-b6b6-6b22c330882a/2062-avient-protective-materials-services-b-v-cao-1-10-2024-tm-31-3-2026-v11022025.pdf?ext=.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: { kind: 'own', unit: 'maand', hoursPerWeek: 40 },
  vergoedingen: [],
};
