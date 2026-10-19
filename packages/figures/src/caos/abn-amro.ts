import type { Cao } from '../types.js';

/**
 * CAO ABN AMRO (Nederland) 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Arbeidsvoorwaarden CAO ABN AMRO 1 juli 2024 - 1 juli 2026 (v31012025), par. 5.4 Salarisschalen
 * https://www.fnv.nl/getmedia/88e7fefb-7035-40bb-83bd-9968906f37ee/1326-ABN-AMRO-cao-01-07-2024-tm-30-06-2026-v31012025.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - KRITIEK: de gepubliceerde schaalbedragen zijn JAARbedragen INCLUSIEF 8% vakantietoeslag. De hier opgenomen maandbedragen zijn simpelweg /12. Wil de rekentool een bruto maandsalaris EXCLUSIEF vakantiegeld (met vakantiegeldPct 0.08 er apart bovenop), dan moet eerst de 8% eruit (deel door 1,08) om dubbeltelling te voorkomen.
 *   - Schaal 2 min/max jaar: 23.452 / 33.502 EUR -> maand 1954,33 / 2791,83
 *   - Schaal 15 min/max jaar: 122.086 / 174.408 EUR -> maand 10173,83 / 14534,00
 *   - Alle bedragen gebaseerd op 36 uur/week (basisarbeidsduur); pro rata bij afwijkende arbeidsduur
 *   - Geen 13e maand/eindejaarsuitkering in deze CAO (alleen 11% benefit budget) - bevestig
 *   - pensioenfondsId 'generiek': Stichting Pensioenfonds van ABN AMRO Bank N.V. (ondernemingspensioenfonds, geen sectorfonds in de toegestane lijst)
 *   - Geen periods-revisie per 1 juli 2026: nieuwe CAO nog niet onderhandeld op peildatum 2 juni 2026 - bevestig of er inmiddels een akkoord is
 *
 * Excluded: jeugd-/aanloopschalen (n.v.t.; schalen 2 t/m 15); benefit budget 11% (flexibele arbeidsvoorwaarden); waarderingspremie 2,5%/5% (eenmalig); salaristoeslagen; meerwerk- en overwerkvergoedingen; jubileumuitkering en overlijdensuitkering; netto pensioenregeling
 */
export const caoAbnAmro2026: Cao = {
  id: 'abn-amro',
  name: "CAO ABN AMRO",
  year: 2026,
  effectiveNote: "Salarisschalen per 1 juli 2025 (structureel +3,75% t.o.v. 1 juli 2024); deze tabel geldt op 1 januari 2026. De CAO 2024-2026 loopt t/m 30 juni 2026; onderhandelingen voor de opvolger zijn op 1 juni 2026 gestart, er is nog GEEN nieuw akkoord/tabel voor de periode vanaf 1 juli 2026 (daarom geen periods-revisie opgenomen). LET OP: de gepubliceerde bedragen zijn JAARbedragen INCLUSIEF 8% vakantietoeslag, gebaseerd op 36 uur/week; hier omgerekend naar maand (/12). Uitgesloten: jeugd-/aanloopschalen (n.v.t. - schalen 2 t/m 15), benefit budget (11% flexibel), waarderingspremie (2,5%/5% eenmalig), toeslagen/vergoedingen, salaristoeslagen, meerwerk- en overwerkvergoedingen.",
  sourceUrl: "https://www.fnv.nl/cao-sector/finance/cao-abn-amro",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'band',
    levelLabel: "Salarisschaal",
    unit: 'maand',
    levels: [
      { id: '2', min: 1954.33, max: 2791.83 },
      { id: '3', min: 2166.67, max: 3095.17 },
      { id: '4', min: 2340.92, max: 3344.08 },
      { id: '5', min: 2620.67, max: 3743.75 },
      { id: '6', min: 2936, max: 4194.25 },
      { id: '7', min: 3298, max: 4711.33 },
      { id: '8', min: 3706.75, max: 5295.33 },
      { id: '9', min: 4174.58, max: 5963.67 },
      { id: '10', min: 4778.5, max: 6826.42 },
      { id: '11', min: 5465.08, max: 7807.17 },
      { id: '12', min: 6349.17, max: 9070.17 },
      { id: '13', min: 7379.92, max: 10542.67 },
      { id: '14', min: 8652.33, max: 12360.42 },
      { id: '15', min: 10173.83, max: 14534 },
    ],
    defaultRsp: 0.9,
    hoursPerWeek: 36,
  },
  vergoedingen: [],
};
