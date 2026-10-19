import type { Cao } from '../types.js';

/**
 * Cao Consumentenbond 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Consumentenbond
 * https://cao-kijker.awvn.nl/bestanden/1490_01-01-2026%20tot%2001-01-2029_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-01-01 (month) uit de bron
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoConsumentenbond2026: Cao = {
  id: 'consumentenbond',
  name: "Cao Consumentenbond",
  year: 2026,
  effectiveNote: "Cao 2026-01-01 t/m 2028-12-31; loontabel per 2026-01-01. Let op: Salarissen worden per 1 juni van elk jaar verhoogd met de AWVN-contractloonindex (gemiddelde contractloonstijging op twaalfmaandbasis, mei t/m april); de uitkomst per 1 juni 2026, 2027 en 2028 is niet in de cao opgenomen Salaristabel per 1 januari 2026 (bijlage 1) geeft alleen schaalminimum en -maximum; opgeslagen als twee treden. Groepsnamen zijn de rollen uit het Baarda-rollenmodel die bij die schaal horen Vakantietoeslag 8% en eindejaarsuitkering 5% zitten in het Individueel Keuzebudget (optie A 13%, optie B 17,85% incl. 2 weken bovenwettelijk verlof en 0,5% extra beloning); nieuwe medewerkers vanaf 1-1-2026 standaard optie B Minimum vakantietoeslag €3.632 (40 uur, per 1 juni 2025), jaarlijks geïndexeerd Pensioenpremie totaal 21% van de pensioengrondslag, waarvan 5,25% werknemer; franchise en pensioenuitvoerder niet in de cao vermeld Looptijd 1 januari 2026 tot 1 januari 2029",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/1490_01-01-2026%20tot%2001-01-2029_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.05,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      'Junior Vakkracht': [2566, 3095],
      'Medior Vakkracht': [2566, 3533],
      'Volleerd Vakkracht / Junior Allrounder': [2825, 4033],
      'Buitengewoon Volleerd Vakkracht / Medior Allrounder': [3026, 4324],
      'Junior Vakspecialist / Volleerd Allrounder': [3502, 5002],
      'Medior Vakspecialist / Buitengewoon Volleerd Allrounder': [4056, 5792],
      'Volleerd Vakspecialist / Junior Professional': [4483, 6350],
      'Buitengewoon Volleerd Vakspecialist / Medior Professional': [5245, 7499],
      'Volleerd Professional': [6121, 8742],
      'Buitengewoon Volleerd Professional / Medior Generalist': [7203, 10289],
      'Volleerd Generalist': [7861, 11229],
      'Buitengewoon Volleerd Generalist / Medior Leider': [9319, 13312],
      'Volleerd Leider': [11203, 16002],
      'Buitengewoon Volleerd Leider': [11907, 17010],
    },
  },
  vergoedingen: [],
};
