import type { Cao } from '../types.js';

/**
 * Cao ESKA 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao ESKA
 * https://cao-kijker.awvn.nl/bestanden/2769_01-06-2025%20tot%2001-07-2027_akkoord.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8,33%, eindejaarsuitkering 8,3%
 *   - Voltijd 40 uur/week
 *   - Verhogingen na 1-1-2026: 2026-05-01 +€ 40/mnd collectieve verhoging; 2026-07-01 +2% collectieve verhoging; 2027-01-01 +€ 75/mnd collectieve verhoging
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoEska2026: Cao = {
  id: 'eska',
  name: "Cao ESKA",
  year: 2026,
  effectiveNote: "Cao 2025-06-01 t/m 2027-06-30; geen loontabel bekend. Let op: Eindbod van 23 december 2025, door AWVN als geaccepteerd eindbod geregistreerd Vakantietoeslag 8,33% van 12 maal het maandinkomen met een minimum voor vakvolwassen werknemers; gratificatie (13e maand) 8,3%, met voorschot van 5% in mei (volgens cao 2024-2025) Vakbondscontributie 2026 wordt netto vergoed Eindbod bevat een overzicht van één bedrag per salarisgroep (a1-i9); geen volledige tabel met treden, daarom niet opgenomen Pensioen bij Pensioenfonds PGB; premieverdeling werkgever/werknemer niet als percentage gevonden",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/2769_01-06-2025%20tot%2001-07-2027_akkoord.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.0833,
  eindejaarsuitkeringPct: 0.083,
  salary: { kind: 'own', unit: 'maand', hoursPerWeek: 40 },
  periods: [
    {
      from: '2026-05-01',
      note: "+€ 40/mnd collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', hoursPerWeek: 40, raises: [{ perMaand: 40 }] },
    },
    {
      from: '2026-07-01',
      note: "+2% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', hoursPerWeek: 40, raises: [{ pct: 0.02 }] },
    },
    {
      from: '2027-01-01',
      note: "+€ 75/mnd collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', hoursPerWeek: 40, raises: [{ perMaand: 75 }] },
    },
  ],
  vergoedingen: [],
};
