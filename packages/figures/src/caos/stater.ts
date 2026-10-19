import type { Cao } from '../types.js';

/**
 * CAO Stater (Nederland) 2026 2026. DRAFT from cao-pipeline (confidence: high).
 * Source: Cao 1 januari 2025 tot en met 30 juni 2026 Stater N.V. (versie 29-07-2025) - Tabel 1b, pagina 13
 * https://www.fnv.nl/getmedia/b683c3d4-9a17-41b5-93c8-caab0e8339d7/1425-stater-cao-1-1-2025-tm-30-6-2026-v29072025.pdf?ext=.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Band min/max zijn afgeleid: min = 70% x 100%-RSP-waarde, max = 120% x 100%-RSP-waarde. De CAO publiceert alleen de 100%-RSP kolom; de 70%- en 120%-bedragen staan NIET als tabel in de CAO en zijn door mij berekend.
 *   - Gebruik van de basis 'bruto maandsalaris' kolom i.p.v. de 'Totaal bruto maandsalaris' (incl. PDI) kolom - controleer welke kolom de calculator nodig heeft
 *   - Schaal 13 100%=2809.70, 25 100%=10884.03 (transcriptie Tabel 1b 1-1-2026)
 *   - vakantiegeld 8% is geintegreerd in PDI-budget en wordt niet als losse 8%-uitkering betaald - controleer hoe de calculator hiermee moet omgaan
 *   - geen eindejaarsuitkering/13e maand (benefitbudget 2,5% zit in PDI, geen 13e maand)
 *   - reiskosten EUR 0,23/km per 1-1-2026 met max 33 km enkele reis
 *   - fulltime = 40 uur/week
 *
 * Excluded: Persoonlijk Duurzaam Inzetbaarheidsbudget (PDI) - bevat vakantietoeslag 8%, benefitbudget 2,5%, atv-dagen en bovenwettelijke dagen; PDI-kolom uit de salaristabel (alleen de basis bruto maandsalaris kolom is gebruikt); persoonlijke toeslag; overwerk-, onregelmatigheids- en vervangingstoeslag; RVU-regeling (vervroegd uittreden); 60+/gedeeltelijke vervroegde uittredingsregeling; salaristabel na 30 juni 2026 (nog niet gepubliceerd)
 */
export const caoStater2026: Cao = {
  id: 'stater',
  name: "CAO Stater",
  year: 2026,
  effectiveNote: "[fonds→generiek, auto-gok afgekeurd] Salarisschalen geldig 1 januari 2026 t/m 30 juni 2026 (Tabel 1b), o.b.v. 100% RSP en fulltime 40 uur/week. Bedragen zijn bruto maandsalarissen (de 'bruto maandsalaris' kolom, exclusief PDI). Per 1 jan 2026 is een collectieve loonsverhoging van 2% doorgevoerd t.o.v. 2025. De CAO loopt af op 30 juni 2026; voor de periode na 30 juni 2026 is nog geen salaristabel gepubliceerd, dus geen tweede periode opgenomen. Model: band — elke schaal kent een ondergrens RSP=70%, maximum bij 'Goed' RSP=100% en uitloop tot RSP=120%; min en max in deze record zijn berekend als 70% resp. 120% van de gepubliceerde 100%-waarde. UITGESLOTEN: het Persoonlijk Duurzaam Inzetbaarheidsbudget (PDI, bevat o.a. vakantietoeslag 8%, benefitbudget 2,5%, atv- en bovenwettelijke dagen), persoonlijke toeslagen, overwerk-/onregelmatigheids-/vervangingstoeslagen, RVU-regeling en de 60+/gedeeltelijke vervroegde uittredingsregeling.",
  sourceUrl: "https://www.fnv.nl/getmedia/b683c3d4-9a17-41b5-93c8-caab0e8339d7/1425-stater-cao-1-1-2025-tm-30-6-2026-v29072025.pdf?ext=.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'band',
    levelLabel: "Salarisschaal",
    unit: 'maand',
    levels: [
      { id: '13', min: 1966.79, max: 3371.64 },
      { id: '14', min: 2084.62, max: 3573.64 },
      { id: '15', min: 2215.11, max: 3797.33 },
      { id: '16', min: 2428.63, max: 4163.36 },
      { id: '17', min: 2629.5, max: 4507.72 },
      { id: '18', min: 2869.12, max: 4918.49 },
      { id: '19', min: 3160.93, max: 5418.74 },
      { id: '20', min: 3610.92, max: 6190.14 },
      { id: '21', min: 4257.02, max: 7297.75 },
      { id: '22', min: 4847.77, max: 8310.46 },
      { id: '23', min: 5663.9, max: 9709.54 },
      { id: '24', min: 6661.92, max: 11420.44 },
      { id: '25', min: 7618.82, max: 13060.84 },
    ],
    defaultRsp: 0.9,
    hoursPerWeek: 40,
  },
  vergoedingen: [
    {"id":"reiskosten","label":"Reiskostenvergoeding woon-werkverkeer","amount":0.23,"unit":"perKm","taxable":false,"note":"Per 1 januari 2026 verhoogd naar EUR 0,23/km (of het dan geldende belastingvrije tarief), op declaratiebasis bij eigen vervoer, met maximum van 33 km enkele reis (66 km retour)."},
    {"id":"thuiswerkvergoeding","label":"Thuiswerkvergoeding","amount":2,"unit":"perDag","taxable":false,"note":"EUR 2,- netto per dag dat de werknemer volledig thuiswerkt."},
  ],
};
