import type { Cao } from '../types.js';

/**
 * Cao Arkema B.V. locatie Rotterdam 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Arkema B.V. locatie Rotterdam
 * https://cao-kijker.awvn.nl/bestanden/2509_01-01-2025%20tot%2001-01-2027_akkoord.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8%, eindejaarsuitkering 8,33%
 *   - Voltijd 37.44 uur/week
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoArkemaRotterdam2026: Cao = {
  id: 'arkema-rotterdam',
  name: "Cao Arkema B.V. locatie Rotterdam",
  year: 2026,
  effectiveNote: "Cao 2025-01-01 t/m 2026-12-31; geen loontabel bekend. Let op: Cao 2025-2026 is een door FNV en CNV geaccepteerd eindbod van 8 januari 2026; de volledige cao-tekst 2025-2026 is niet gevonden Arbeidsduur 37,44 uur per week geldt voor dagdienst (cao 2024); andere roosters o.a. 33,6 uur per week Dertiende maand: een maandinkomen (december) per jaar, hier als 8,33% opgenomen Minimum vakantietoeslag voor 22 jaar en ouder was € 2.351,71 (cao 2024); bedrag voor 2025/2026 niet bekend Pensioen via eigen pensioenfonds; werknemersbijdrage in beginsel 2% van de pensioengrondslag (cao 2024), franchise niet vermeld, daarom niet opgenomen Salarisschalen alleen in de cao 2024 gevonden (verhoogd met 4% per 1-1-2025 en 3% per 1-1-2026); geen actuele tabel opgenomen Afspraak om uiterlijk 1 april 2026 een RVU-regeling vast te stellen",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/2509_01-01-2025%20tot%2001-01-2027_akkoord.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: { kind: 'own', unit: 'maand', hoursPerWeek: 37.44 },
  vergoedingen: [],
};
