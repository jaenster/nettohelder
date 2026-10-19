import type { Cao } from '../types.js';

/**
 * Cao NRG PALLAS 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao NRG PALLAS
 * https://cao-kijker.awvn.nl/bestanden/3995_01-07-2025%20tot%2001-07-2030_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8%, eindejaarsuitkering 8,3%
 *   - Voltijd 40 uur/week
 *   - Verhogingen na 1-1-2026: 2026-07-01 +3,1% collectieve verhoging
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoNrgPallas2026: Cao = {
  id: 'nrg-pallas',
  name: "Cao NRG PALLAS",
  year: 2026,
  effectiveNote: "Cao 2025-07-01 t/m 2030-06-30; geen loontabel bekend. Let op: Loonontwikkeling volgt de structurele algemene loonsverhoging en eventuele eenmalige uitkeringen uit de cao Nederlandse Universiteiten per dezelfde ingangsdatum (tot 1 juli 2030) Cao NU 2026-2027: 3,1% per 1 juli 2026, daarna alle bedragen in de salaristabel + € 50, en een eenmalige uitkering van € 1.534 bruto (voltijd); niet geverifieerd of NRG PALLAS de € 50 schaalverhoging en de eenmalige uitkering één-op-één overneemt Verhoging per 1 juli 2025 uit de cao NU is al verwerkt in de salaristabel per 1-7-2025 van deze cao Volledige arbeidsduur 40 uur per week; door 96 roostervrije uren gemiddeld 38 uur Salaristabel (Hay-schalen met RSP-posities H09-H25) niet opgenomen Pensioen bij ABP; werknemerspremie niet in de cao gevonden",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/3995_01-07-2025%20tot%2001-07-2030_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.083,
  salary: { kind: 'own', unit: 'maand', hoursPerWeek: 40 },
  periods: [
    {
      from: '2026-07-01',
      note: "+3,1% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', hoursPerWeek: 40, raises: [{ pct: 0.031 }] },
    },
  ],
  vergoedingen: [],
};
