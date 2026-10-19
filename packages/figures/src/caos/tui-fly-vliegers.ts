import type { Cao } from '../types.js';

/**
 * Cao Vliegers TUI fly Nederland 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Vliegers TUI fly Nederland
 * https://cao-kijker.awvn.nl/bestanden/3238_01-02-2024%20tot%2001-02-2026_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8%, eindejaarsuitkering 0%
 *   - Voltijdsuren niet in de bron: 40 aangenomen
 *   - Verhogingen na 1-1-2026: 2026-09-01 +3% collectieve verhoging
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoTuiFlyVliegers2026: Cao = {
  id: 'tui-fly-vliegers',
  name: "Cao Vliegers TUI fly Nederland",
  year: 2026,
  effectiveNote: "Cao 2024-02-01 t/m 2026-01-31; geen loontabel bekend. Let op: Cao vliegers 1 februari 2024 tot 1 februari 2026 (VNV, tekst december 2025); geen nieuwere cao gevonden (zoekbudget uitgeput, VNV-site vermeldt niets) Salaris = (leeftijdbestanddeel + diensttijdbestanddeel + functiebestanddeel + ervaringsbestanddeel) x V-factor; geen salaristabel. V-factor per 1 juli 2025: 1,518615471 Vanaf 1 februari 2026 volgt de V-factor volgens de cao de verhogingen van de cao Reisbranche; de 3% per 1 september 2026 is daaruit overgenomen Maximum som L+D+F+E per maand: Captain € 11.561, (Senior) First Officer € 7.771 (vóór V-factor) Winstdelingsregeling volgens personeelsgids; vaste netto onkostenvergoeding € 96,95 per maand Pensioen: werknemersbijdrage 28% van de beschikbare premie tot het grenssalaris en 50% daarboven; eigen bijdrage beroepsongeschiktheid € 50 bruto per maand",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/3238_01-02-2024%20tot%2001-02-2026_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: { kind: 'own', unit: 'maand' },
  periods: [
    {
      from: '2026-09-01',
      note: "+3% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', raises: [{ pct: 0.03 }] },
    },
  ],
  vergoedingen: [],
};
