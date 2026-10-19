import type { Cao } from '../types.js';

/**
 * Cao Compaxo 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Compaxo
 * https://cao-kijker.awvn.nl/bestanden/2488_01-12-2024%20tot%2001-12-2026_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8%, eindejaarsuitkering 2%
 *   - Voltijd 36 uur/week
 *   - Verhogingen na 1-1-2026: 2026-04-01 +2% collectieve verhoging; 2026-07-01 +1,5% collectieve verhoging
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoCompaxo2026: Cao = {
  id: 'compaxo',
  name: "Cao Compaxo",
  year: 2026,
  effectiveNote: "Cao 2024-12-01 t/m 2026-11-30; geen loontabel bekend. Let op: Geldt voor Compaxo Gouda B.V., Compaxo Vlees Zevenaar B.V., Compaxo Groep B.V. en Maasland Vleeswaren B.V. Verhogingen gelden niet voor de WML-bedragen Eindejaarsuitkering 2% van het inkomen over de voorafgaande 13 loonruns Jaarlijks in december netto nieuwjaarsuitkering € 50 en feestdaguitkering € 135 (fulltime; netto, daarom niet in oneOffPayments) Salarisschalen per 4 weken, verschillend per vestiging en alleen per 9-9-2024 in de cao; geen tabel voor 2026 gevonden, niet opgenomen Nieuwe cao vanaf 1 december 2026 nog niet bekend",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/2488_01-12-2024%20tot%2001-12-2026_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.02,
  salary: { kind: 'own', unit: 'maand', hoursPerWeek: 36 },
  periods: [
    {
      from: '2026-04-01',
      note: "+2% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', hoursPerWeek: 36, raises: [{ pct: 0.02 }] },
    },
    {
      from: '2026-07-01',
      note: "+1,5% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', hoursPerWeek: 36, raises: [{ pct: 0.015 }] },
    },
  ],
  vergoedingen: [],
};
