import type { Cao } from '../types.js';

/**
 * Cao Nestlé Nederland Hoger Personeel (cao II) 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Nestlé Nederland Hoger Personeel (cao II)
 * https://www.cnv.nl/voeding/voeding/cao-nestle/
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8%, eindejaarsuitkering 8,33%
 *   - Voltijd 38 uur/week
 *   - Verhogingen na 1-1-2026: 2026-04-01 +2,5% collectieve verhoging
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoNestleNederlandHp2026: Cao = {
  id: 'nestle-nederland-hp',
  name: "Cao Nestlé Nederland Hoger Personeel (cao II)",
  year: 2026,
  effectiveNote: "Cao 2026-04-01 t/m 2027-03-31; geen loontabel bekend. Let op: Verbeterd eindbod 2026 aangenomen door de leden (CNV-bericht 24-7-2026); looptijd 1-4-2026 t/m 31-3-2027 volgens de CNV cao-pagina De verhogingen per 1-4-2025 (3%) en 1-4-2026 (2,5%) zijn budgetten die via het Pay for Performance-systeem individueel worden verdeeld; de werkelijke verhoging per werknemer verschilt. 1% per 1-9-2025 is een algemene verhoging Vakantietoeslag: 12 x 8% van het schaalsalaris van april plus 8% van de refertebeloning Gratificatie in december: salaris van december plus 8,33% van de refertebeloning; hier weergegeven als 8,33% Gemiddelde arbeidsduur 38 uur per week (voltijdnorm 1938 uur per jaar) Pensioen bij Stichting Pensioenfonds Alliance van Nestlé Nederland; werknemerspremie niet in de cao Salaristabel niet gevonden",
  sourceUrl: "https://www.cnv.nl/voeding/voeding/cao-nestle/",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: { kind: 'own', unit: 'maand', hoursPerWeek: 38 },
  periods: [
    {
      from: '2026-04-01',
      note: "+2,5% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', hoursPerWeek: 38, raises: [{ pct: 0.025 }] },
    },
  ],
  vergoedingen: [],
};
