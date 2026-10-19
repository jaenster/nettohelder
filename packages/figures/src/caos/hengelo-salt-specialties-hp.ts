import type { Cao } from '../types.js';

/**
 * Cao Hengelo Salt Specialties Hoger Personeel 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Hengelo Salt Specialties Hoger Personeel
 * https://www.cnv.nl/industrie/chemie-en-energie/cao-hengelo-salt-specialties/nieuws/onderhandelingsresultaat-hengelo-salt-specialties-is-goedgekeurd-door-de-leden-2025-07-11/
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8%, eindejaarsuitkering 0%
 *   - Voltijdsuren niet in de bron: 40 aangenomen
 *   - Verhogingen na 1-1-2026: 2026-04-01 +2% collectieve verhoging
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoHengeloSaltSpecialtiesHp2026: Cao = {
  id: 'hengelo-salt-specialties-hp',
  name: "Cao Hengelo Salt Specialties Hoger Personeel",
  year: 2026,
  effectiveNote: "Cao 2025-07-01 t/m 2026-06-30; geen loontabel bekend. Let op: Onderhandelingsresultaat geldt voor zowel de cao Hengelo Salt Specialties als de cao HSS Hoger Personeel, looptijd 1-7-2025 t/m 30-6-2026; door leden goedgekeurd Per 1-10-2025 jaarsalarissen en salarisschalen structureel + € 1.200 bruto per jaar (volgens CNV € 100 per maand); per 1-4-2026 +2% Geen nieuwe cao na 30-6-2026 gevonden Hoger personeel valt onder een STI-regeling in plaats van de eindejaarsuitkering; hoogte niet gevonden Salarisschalen Hoger Personeel (o.a. salarisgroep 57) niet gevonden; vakantietoeslag 8% volgens de HSS-cao (Deel A), niet specifiek voor HP geverifieerd Arbeidsduur gemiddeld 40 uur per week, volcontinudienst 33,6 uur (HSS-cao Deel A)",
  sourceUrl: "https://www.cnv.nl/industrie/chemie-en-energie/cao-hengelo-salt-specialties/nieuws/onderhandelingsresultaat-hengelo-salt-specialties-is-goedgekeurd-door-de-leden-2025-07-11/",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: { kind: 'own', unit: 'maand' },
  periods: [
    {
      from: '2026-04-01',
      note: "+2% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', raises: [{ pct: 0.02 }] },
    },
  ],
  vergoedingen: [],
};
