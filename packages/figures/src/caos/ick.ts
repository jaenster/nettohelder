import type { Cao } from '../types.js';

/**
 * CAO ICK (Informatie-, Communicatie- en Kantoortechnologiebranche) 2026. DRAFT from cao-pipeline (confidence: high).
 * Source: Informatie-, communicatie- en kantoortechnologiebranche (ICK) cao 01-04-2025 t/m 31-03-2026, Bijlage 10A Salaristabellen (nieuwe loongebouw)
 * https://www.fnv.nl/getmedia/34f49707-1aaa-4096-9e01-3b051a91a713/852-informatie-communicatie-en-kantoortechnologiebranche-ick-cao-01-04-2025-tm-31-03-2026-v02072025.pdf?ext=.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Salarisschaal 2-10 maandelijkse min/max bedragen per 1-1-2026 (band): 2:2556/2985, 3:2556/3354, 4:2766/3742, 5:2936/4054, 6:3302/4607, 7:3814/5488, 8:4270/6339, 9:4782/7324, 10:5674/8874
 *   - Of een +1,5% verhoging per 1-4-2026 daadwerkelijk is bekrachtigd en wat dan de herziene tabel is (eindbod 2026-2027)
 *   - Thuiswerkvergoeding EUR 2,40/dag (mogelijk EUR 2,45 vanaf 2026 onder nieuw eindbod)
 *   - Pensioenfonds: PNO Media/PNO Digitaal (De Nationale APF) -> gemapt op 'generiek' want geen sectorfonds in de toegestane lijst
 *
 * Excluded: salarisschaal 1 (niet aanwezig in nieuw loongebouw / Bijlage 10A); oude loongebouw (Bijlage 10B/C); tredes/periodieken binnen een schaal; jeugd- en aanloopschalen; alle toeslagen, overwerk en ploegentoeslagen; reiskostenvergoeding (geen vast CAO-kilometerbedrag); eenmalige uitkeringen; +1,5% per 1-4-2026 verhoging (eindbod 2026-2027, nog niet bekrachtigd en herziene tabel niet gepubliceerd)
 */
export const caoIck2026: Cao = {
  id: 'ick',
  name: "CAO ICK (Informatie-, Communicatie- en Kantoortechnologiebranche)",
  year: 2026,
  effectiveNote: "Band/loongebouw table effective 1-1-2026 ('Tabel loongebouw per 1-1-2026 (+2%)', Bijlage 10A). Amounts are monthly bruto (Maand) for a full-time dienstverband; the CAO also lists the annual equivalents (Jaar) which were not used. This is a minimum-cao: amounts are the minimum and maximum of each salarisschaal. A +1.5% collectieve verhoging per 1-4-2026 is announced in the 2026-2027 eindbod, but it is still pending member ratification AND the revised loontabel has not been published, so it is NOT entered as a period (no table to transcribe). EXCLUDED: salarisschaal 1 (not present in the new loongebouw / Bijlage 10A), old loongebouw scales (Bijlage 10B/C), tredes/periodieken within a scale, jeugd/aanloop arrangements, all toeslagen/overwerk, reiskostenvergoeding (no fixed CAO km amount), and any one-off payments.",
  sourceUrl: "https://www.fnv.nl/cao-sector/ict/cao-ick",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'band',
    hoursPerWeek: 40,
    levelLabel: "Salarisschaal",
    unit: 'maand',
    levels: [
      { id: '2', min: 2556, max: 2985 },
      { id: '3', min: 2556, max: 3354 },
      { id: '4', min: 2766, max: 3742 },
      { id: '5', min: 2936, max: 4054 },
      { id: '6', min: 3302, max: 4607 },
      { id: '7', min: 3814, max: 5488 },
      { id: '8', min: 4270, max: 6339 },
      { id: '9', min: 4782, max: 7324 },
      { id: '10', min: 5674, max: 8874 },
    ],
    defaultRsp: 0.9,
  },
  vergoedingen: [
    {"id":"thuiswerkvergoeding","label":"Thuiswerkvergoeding","amount":2.4,"unit":"perDag","taxable":false,"note":"Per thuisgewerkte dag, fiscaal onbelast bedrag (geldt vanaf 1-4-2025 indien werkgever geen eigen regeling heeft). In de 2026-2027 eindbod aangekondigd te verhogen naar EUR 2,45 (nog niet bekrachtigd)."},
  ],
};
