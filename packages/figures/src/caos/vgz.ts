import type { Cao } from '../types.js';

/**
 * CAO Coöperatie VGZ 2025-2026 2026. DRAFT from cao-pipeline (confidence: high).
 * Source: Cao Coöperatie VGZ 2025-2026 (FNV, versie 13-05-2025)
 * https://www.fnv.nl/getmedia/660ade9c-880d-4177-9f5e-c78738700ca6/1860-vgz-cao-2025-2026-v13052025.pdf?ext=.pdf&dtime=20250514072837
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Salarisschalen per 1 januari 2026: A 2741-3033, B 2763-3172, C 2791-3398, D 2829-3674, E 2939-4091, F 3341-4648, G 3737-5338, H 4373-6246, I 5067-7237, JL 5886-8412, KM 6855-9792, MA 5067-10091
 *   - MA functiegroep heeft de hoogste maximum (10091) maar een minimum gelijk aan groep I (5067) - dit is een afwijkende, brede medisch-adviseursschaal, zo overgenomen uit de cao
 *   - vakantiegeld 8% en dertiende maand 8,33% (0,0833 maandequivalent)
 *   - geen verdere collectieve verhoging binnen 2026 (cao eindigt 1 juli 2026); periods bewust leeg
 *   - pensioenfonds is SBZ (Stichting Bedrijfstakpensioenfonds voor de Zorgverzekeraars) - niet in de toegestane slug-lijst, daarom generiek
 *   - reiskosten €0,23 netto/km, thuiswerktoeslag €2,40 netto/dag, internetvergoeding €40/maand, sportvergoeding €30/maand
 *
 * Excluded: aanloopschaal; persoonlijke toeslagen PT1-PT4 en tijdelijke persoonlijke toeslag; inzetbaarheidsvergoeding (4% eenmalig); toeslagen stand-by-diensten; toeslagen ongebruikelijke uren; overwerkvergoeding; stagevergoeding; incentives voor bijzondere prestaties; Keuzebudget
 */
export const caoVgz2026: Cao = {
  id: 'vgz',
  name: "CAO Coöperatie VGZ",
  year: 2026,
  effectiveNote: "Salarisschalen geldig vanaf 1 januari 2026 (na de collectieve verhoging van +2% per 1 jan 2026). Bedragen zijn brutomaandsalarissen (min-max per functiegroep). De cao loopt van 1 januari 2025 tot 1 juli 2026; binnen 2026 is geen verdere collectieve verhoging aangekondigd. Uitgesloten: aanloopschaal, persoonlijke toeslagen (PT1-PT4 en tijdelijke toeslag), inzetbaarheidsvergoeding (4% eenmalig), toeslagen voor stand-by/ongebruikelijke uren/overwerk, stagevergoeding, incentives bijzondere prestaties, en het Keuzebudget zelf.",
  sourceUrl: "https://www.fnv.nl/cao-sector/finance/cao-vgz",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: {
    kind: 'band',
    levelLabel: "Functiegroep",
    unit: 'maand',
    levels: [
      { id: 'A', min: 2741, max: 3033 },
      { id: 'B', min: 2763, max: 3172 },
      { id: 'C', min: 2791, max: 3398 },
      { id: 'D', min: 2829, max: 3674 },
      { id: 'E', min: 2939, max: 4091 },
      { id: 'F', min: 3341, max: 4648 },
      { id: 'G', min: 3737, max: 5338 },
      { id: 'H', min: 4373, max: 6246 },
      { id: 'I', min: 5067, max: 7237 },
      { id: 'JL', min: 5886, max: 8412 },
      { id: 'KM', min: 6855, max: 9792 },
      { id: 'MA', min: 5067, max: 10091 },
    ],
    defaultRsp: 0.9,
    hoursPerWeek: 38,
  },
  vergoedingen: [
    {"id":"reiskosten-woon-werk","label":"Reiskostenvergoeding woon-werkverkeer (eigen vervoer)","amount":0.23,"unit":"perKm","taxable":false,"note":"€0,23 netto per km bij eigen vervoer; zakelijke kilometers €0,35 (€0,23 netto + €0,12 bruto)."},
    {"id":"thuiswerktoeslag","label":"Working@home thuiswerktoeslag","amount":2.4,"unit":"perDag","taxable":false,"note":"€2,40 netto per thuiswerkdag; per werkdag te kiezen i.p.v. reiskostenvergoeding."},
    {"id":"internetvergoeding","label":"Internetvergoeding","amount":40,"unit":"perMaand","taxable":false,"note":"€40 per maand voor kosten internet thuis."},
    {"id":"sportvergoeding","label":"Sportvergoeding","amount":30,"unit":"perMaand","taxable":false,"note":"€30 per maand voor sportabonnement/-vereniging."},
  ],
};
