import type { Cao } from '../types.js';

/**
 * Cao Koninklijke Mosa 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Koninklijke Mosa
 * https://cao-kijker.awvn.nl/bestanden/0018_01-02-2025%20tot%2001-02-2026_akkoord.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8%, eindejaarsuitkering 4,5%
 *   - Voltijdsuren niet in de bron: 40 aangenomen
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoMosaKoninklijke2026: Cao = {
  id: 'mosa-koninklijke',
  name: "Cao Koninklijke Mosa",
  year: 2026,
  effectiveNote: "Cao 2025-02-01 t/m 2026-01-31; geen loontabel bekend. Let op: Cao 1-2-2025 t/m 31-1-2026: eindbod van Mosa (15-7-2025) aan FNV Procesindustrie en Vakbond ABW met een structurele algemene loonsverhoging van 3,7% per 1-1-2026 Vakantietoeslag (8%) en eindejaarsuitkering (4,5% van het uitbetaalde jaarsalaris, in december) volgens de cao 2023-2025; niet bevestigd in een nieuwere cao-tekst Dagdienst contractueel gemiddeld 38,15 uur per week op jaarbasis (cao 2023-2025) Geen salaristabel gevonden voor 2026; opvolger van de cao na 31-1-2026 niet gevonden",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/0018_01-02-2025%20tot%2001-02-2026_akkoord.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.045,
  salary: { kind: 'own', unit: 'maand' },
  vergoedingen: [],
};
