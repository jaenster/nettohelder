import type { Cao } from '../types.js';

/**
 * Cao Offshore Catering 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Offshore Catering
 * https://zoek.officielebekendmakingen.nl/stcrt-2026-2426.html
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-01-01 (month) uit de bron
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoOffshoreCatering2026: Cao = {
  id: 'offshore-catering',
  name: "Cao Offshore Catering",
  year: 2026,
  effectiveNote: "Cao 2026-01-01 t/m 2026-12-31; loontabel per 2026-01-01. Let op: Structurele verhoging per 1 januari 2026: 3,2% voor schaal 1 en 2 (Steward, Leading Steward, Night Cook) en 3% voor schaal 3 t/m 5; hier is 3% opgenomen De cao kent dagsalarissen per offshore dag van 12 uur (per 1-1-2026: Steward € 182,33, Leading Steward € 189,81, Night Cook € 200,54, Cook/Steward € 227,59, Chef Manager en Day Cook € 264,84, Campboss € 293,40); de tabel hier is het minimale maandsalaris volgens de cao: 15,17 x het dagsalaris Voltijd is gemiddeld 2184,48 uur per kalenderjaar (12-uursdiensten, evenveel dagen offshore als thuis); meer gewerkte uren worden na afloop van het jaar nabetaald Offshore allowance van 1,5% van het maandsalaris per nacht offshore (gemiddeld 22,76% bij 15,17 nachten per maand) is niet verwerkt Looptijd afgeleid uit de cao 2026 en de avv (geldig tot en met 31 december 2026); geen afspraken voor 2027 gevonden Geen pensioenpremie, eindejaarsuitkering of eenmalige uitkering gevonden",
  sourceUrl: "https://zoek.officielebekendmakingen.nl/stcrt-2026-2426.html",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      '1 Steward': [2765.95],
      '1 Leading Steward': [2879.42],
      '2 Night Cook': [3042.19],
      '3 Cook / Steward': [3452.54],
      '4 Chef Manager': [4017.62],
      '4 Day Cook': [4017.62],
      '5 Campboss': [4450.88],
    },
  },
  vergoedingen: [],
};
