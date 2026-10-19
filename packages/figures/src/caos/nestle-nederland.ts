import type { Cao } from '../types.js';

/**
 * Nestlé Nederland CAO-I 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Nestlé Nederland CAO-I
 * https://www.cnv.nl/voeding/voeding/cao-nestle/
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8%, eindejaarsuitkering 8,33%
 *   - Voltijd 36 uur/week
 *   - Verhogingen na 1-1-2026: 2026-04-01 +2,5% collectieve verhoging
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoNestleNederland2026: Cao = {
  id: 'nestle-nederland',
  name: "Nestlé Nederland CAO-I",
  year: 2026,
  effectiveNote: "Cao 2026-04-01 t/m 2027-03-31; geen loontabel bekend. Let op: Cao I 2026-2027 (1 april 2026 t/m 31 maart 2027): 2,5% per 1 april 2026 volgens de CNV-caopagina; CNV-leden stemden in juli 2026 in met het aangepaste eindbod, FNV-leden stemden tegen. Definitieve cao-tekst 2026-2027 niet gevonden Verhogingen 2025 (3% per 1 april en 1% per 1 september) uit de cao I 2025-2026 Gratificatie in december gelijk aan het schaalsalaris van december (plus 8,33% van refertebeloning) Vakantietoeslag 8% met een minimum gelijk aan salarisgroep III, 2 functiejaren (23 jaar en ouder); uitbetaling in mei Normale arbeidsduur gemiddeld 36 uur per week; 5-ploegendienst 33,6 uur Salaristabel per 1 april 2026 niet gevonden; de cao 2025-2026 bevat tabellen per 1 april en 1 september 2025 Pensioenpremie niet in de cao vermeld",
  sourceUrl: "https://www.cnv.nl/voeding/voeding/cao-nestle/",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: { kind: 'own', unit: 'maand', hoursPerWeek: 36 },
  periods: [
    {
      from: '2026-04-01',
      note: "+2,5% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', hoursPerWeek: 36, raises: [{ pct: 0.025 }] },
    },
  ],
  vergoedingen: [],
};
