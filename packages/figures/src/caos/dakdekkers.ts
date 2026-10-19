import type { Cao } from '../types.js';

/**
 * CAO Dakdekkers (CAO BIKUDAK) 2026. DRAFT from cao-pipeline (confidence: high).
 * Source: Loontabellen Collectieve Arbeidsovereenkomst voor de Bitumineuze en Kunststof Dakbedekkingsbedrijven (CAO BIKUDAK) per 1 februari 2026 en 1 januari 2027
 * https://www.fnv.nl/getmedia/5cb39cda-064b-44fd-95c5-da8077ee20fb/393-bikudak-cao-garantielonen-per-1-februari-2026-en-1-januari-2027-v04032026.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Vakantiegeld percentage (assumed standard 8%)
 *   - Whether a 13th month payment exists in the full CAO text
 *   - Pension fund slug 'bpfbouw' confirmation
 *
 * Excluded: Jeugdschalen (youth scales); Aanloopschalen (entry scales); New starters reduced rates (1st and 2nd half year); Disability allowances (werknemers met arbeidsbeperking); UTA-werknemers (office/admin staff) separate scales; Various expense allowances and reimbursements
 */
export const caoDakdekkers2026: Cao = {
  id: 'dakdekkers',
  name: "CAO Dakdekkers (CAO BIKUDAK)",
  year: 2026,
  effectiveNote: "Guarantee wages effective 1 februari 2026 with 4.25% increase from prior baseline. Mid-year revision 1 januari 2027 with additional 3.5% increase. Indexed annually per cao-akkoord. Excludes: youth scales, entry scales, new starters reduced rates, disability allowances, UTA/office staff scales, and various per-km/per-day reimbursements.",
  sourceUrl: "https://www.fnv.nl/getmedia/5cb39cda-064b-44fd-95c5-da8077ee20fb/393-bikudak-cao-garantielonen-per-1-februari-2026-en-1-januari-2027-v04032026.pdf",
  pensioenfondsId: 'bpfbouw',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'band',
    levelLabel: "Functiegroep",
    unit: 'maand',
    levels: [
      { id: '1A_1B', min: 3166.78, max: 3166.78 },
      { id: '2', min: 3350.42, max: 3350.42 },
      { id: '3', min: 3539.07, max: 3539.07 },
      { id: '4', min: 3730.15, max: 3730.15 },
      { id: '5', min: 3918.96, max: 3918.96 },
    ],
    defaultRsp: 0.9,
    hoursPerWeek: 40,
  },
  periods: [
    {
      from: '2027-01-01',
      note: "+3.5% salariserhoging per 1 januari 2027",
      status: 'provisional',
      salary: {
        kind: 'band',
        levelLabel: "Functiegroep",
        unit: 'maand',
        levels: [
          { id: '1A_1B', min: 3277.62, max: 3277.62 },
          { id: '2', min: 3467.69, max: 3467.69 },
          { id: '3', min: 3662.94, max: 3662.94 },
          { id: '4', min: 3860.71, max: 3860.71 },
          { id: '5', min: 4056.12, max: 4056.12 },
        ],
        defaultRsp: 0.9,
        hoursPerWeek: 40,
      },
    },
  ],
  vergoedingen: [
    {"id":"bromfiets_0_25km","label":"Bromfiets/snorfiets: eerste 25 km","amount":1.83,"unit":"perDag","taxable":false},
    {"id":"bromfiets_over_25km","label":"Bromfiets/snorfiets: boven 25 km","amount":0.11,"unit":"perKm","taxable":false},
    {"id":"motor","label":"Motor","amount":0.37,"unit":"perKm","taxable":false},
    {"id":"werkkleding","label":"Werkkleding","amount":1.68,"unit":"perDag","taxable":false},
    {"id":"toeslag_slopen","label":"Toeslag slopen","amount":0.57,"unit":"perKm","taxable":false,"note":"per uur"},
    {"id":"consignatiediensten_weekday","label":"Consignatiediensten","amount":33.51,"unit":"perDag","taxable":false},
    {"id":"consignatiediensten_weekend","label":"Consignatiediensten op zaterdag, zondag of feestdag","amount":44.68,"unit":"perDag","taxable":false},
    {"id":"thuiswerkvergoeding","label":"Thuiswerkvergoeding","amount":2.45,"unit":"perDag","taxable":false},
    {"id":"auto_alone","label":"Auto: werknemer alleen","amount":0.5,"unit":"perKm","taxable":false},
    {"id":"auto_1collega","label":"Auto: met 1 collega","amount":0.51,"unit":"perKm","taxable":false},
    {"id":"auto_2collega","label":"Auto: met 2 collega's","amount":0.58,"unit":"perKm","taxable":false},
    {"id":"auto_3plus_collega","label":"Auto: met 3 of meer collega's","amount":0.6,"unit":"perKm","taxable":false},
  ],
};
