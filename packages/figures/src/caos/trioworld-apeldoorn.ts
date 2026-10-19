import type { Cao } from '../types.js';

/**
 * Cao Trioworld Apeldoorn B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Trioworld Apeldoorn B.V.
 * https://www.cnv.nl/industrie/papier-en-karton/cao-trioworld/nieuws/eindbod-trioworld-is-goedgekeurd-door-de-leden-2026-04-29/
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8,33%, eindejaarsuitkering 8,33%
 *   - Voltijd 40 uur/week
 *   - Verhogingen na 1-1-2026: 2026-04-01 +3,1% collectieve verhoging
 *   - Eenmalige uitkeringen: 2026-06-01 € 250
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoTrioworldApeldoorn2026: Cao = {
  id: 'trioworld-apeldoorn',
  name: "Cao Trioworld Apeldoorn B.V.",
  year: 2026,
  effectiveNote: "Cao 2026-04-01 t/m 2027-03-31; geen loontabel bekend. Let op: Eindbod 2026-2027 van de werkgever, goedgekeurd door de leden (april 2026) Eenmalige uitkering € 250 bruto in juni 2026 voor wie op 1 juni 2026 in dienst is Vakantietoeslag 8,33% van het jaarsalaris met een minimum gelijk aan schaal 14 met 0 functiejaren; eindejaarsuitkering (13e maand) 8,33% van het jaarinkomen (bron: cao 2024-2025) Gemiddeld 40 uur per week met 138 roostervrije uren per jaar; 5-ploegendienst gemiddeld 33,6 uur Pensioen: beschikbare premieregeling, totale premie 24,1% van de pensioengrondslag, werknemersbijdrage 1/3 van de totale premie; franchise gelijk aan de fiscaal minimale franchise. Niet als pensioenveld opgenomen (franchisebedrag niet in de bron); pensioenafspraken in het kader van de Wtp volgen Verhoging per 1-4-2025 (cao 2025-2026) en salarisschalen niet gevonden",
  sourceUrl: "https://www.cnv.nl/industrie/papier-en-karton/cao-trioworld/nieuws/eindbod-trioworld-is-goedgekeurd-door-de-leden-2026-04-29/",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.0833,
  eindejaarsuitkeringPct: 0.0833,
  salary: { kind: 'own', unit: 'maand', hoursPerWeek: 40 },
  periods: [
    {
      from: '2026-04-01',
      note: "+3,1% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', hoursPerWeek: 40, raises: [{ pct: 0.031 }] },
    },
  ],
  vergoedingen: [],
  eenmaligeUitkeringen: [
    { date: '2026-06-01', amount: 250 },
  ],
};
