import type { Cao } from '../types.js';

/**
 * Cao voor personeel van Vopak in Nederland 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao voor personeel van Vopak in Nederland
 * https://cao-kijker.awvn.nl/bestanden/4353_01-01-2024%20tot%2001-01-2027_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8,33%, eindejaarsuitkering 0%
 *   - Voltijd 38.75 uur/week
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoVopakNederland2026: Cao = {
  id: 'vopak-nederland',
  name: "Cao voor personeel van Vopak in Nederland",
  year: 2026,
  effectiveNote: "Cao 2024-01-01 t/m 2026-12-31; geen loontabel bekend. Let op: Cao 1-1-2024 t/m 31-12-2026: naast de automatische prijscompensatie een eenmalige uitkering van € 1.500 bruto in juli 2024 en juli 2025 (voltijd, naar rato bij deeltijd) en een initiële loonsverhoging van 1,25% per 1-1-2026 Automatische prijscompensatie: basis maandsalarissen worden per 1 januari en 1 juli halfjaarlijks achteraf geïndexeerd met de CPI-afgeleid (maart-september resp. september-maart), zonder maximum; uitkomsten voor 2025 en 2026 niet gevonden Vakantietoeslag één basis maandinkomen (8,33%) Voltijd 38,75 uur per week (volcontinudienst 34,2 uur) Salaristabel in bijlage V geldt per 1-1-2024 en is niet opgenomen omdat de latere APC-indexeringen niet bekend zijn Pensioenpremie werknemer niet gevonden",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/4353_01-01-2024%20tot%2001-01-2027_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.0833,
  eindejaarsuitkeringPct: 0,
  salary: { kind: 'own', unit: 'maand', hoursPerWeek: 38.75 },
  vergoedingen: [],
};
