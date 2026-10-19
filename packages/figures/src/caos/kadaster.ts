import type { Cao } from '../types.js';

/**
 * Cao Kadaster 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Kadaster
 * https://www.fnv.nl/getmedia/206345c2-2db5-4b9c-96bc-4d5a69bfd3c7/Onderhandelingsresultaat-CAO-Kadaster-1-7-2026-30-6-2027.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8%, eindejaarsuitkering 0%
 *   - Voltijd 36 uur/week
 *   - Verhogingen na 1-1-2026: 2026-07-01 +€ 50/mnd collectieve verhoging
 *   - Eenmalige uitkeringen: 2026-08-01 € 1500
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoKadaster2026: Cao = {
  id: 'kadaster',
  name: "Cao Kadaster",
  year: 2026,
  effectiveNote: "Cao 2026-07-01 t/m 2027-06-30; geen loontabel bekend. Let op: Individueel Keuzebudget (IKB) van 25% van het IKB-maandinkomen: optelsom van vakantie-uitkering (8%), eindejaarsuitkering, bovenwettelijk verlof en afkoop van regelingen; aandeel eindejaarsuitkering niet apart gevonden, daarom niet ingevuld Verhogingen 2025 (3,7% per 1-2-2025) en 2026 (2% per 1-1-2026) en eenmalige uitkering januari 2025 (€ 600 bruto) komen uit de cao 1-1-2025 t/m 30-6-2026 Per 1-7-2026 gaan alle salaristreden omhoog met € 50 bruto per maand (bedrag is per trede, niet naar rato van deeltijd vermeld) Eenmalige uitkering € 1.500 bruto in augustus 2026 voor wie op 1-7-2026 in dienst was, naar rato van de arbeidsduur Per 1-1-2027 72 extra bovenwettelijke verlofuren (fulltime), waarde 3,85%; uit te betalen op verzoek. Niet in de berekening opgenomen Pensioen bij ABP (sector Rijk); werknemerspremie voor het Kadaster niet apart geverifieerd, daarom niet ingevuld Salaristabellen staan als afbeelding in de bijlage cao; niet opgenomen",
  sourceUrl: "https://www.fnv.nl/getmedia/206345c2-2db5-4b9c-96bc-4d5a69bfd3c7/Onderhandelingsresultaat-CAO-Kadaster-1-7-2026-30-6-2027.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: { kind: 'own', unit: 'maand', hoursPerWeek: 36 },
  periods: [
    {
      from: '2026-07-01',
      note: "+€ 50/mnd collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', hoursPerWeek: 36, raises: [{ perMaand: 50 }] },
    },
  ],
  vergoedingen: [],
  eenmaligeUitkeringen: [
    { date: '2026-08-01', amount: 1500 },
  ],
};
