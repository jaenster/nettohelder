import type { Cao } from '../types.js';

/**
 * Cao Fibrant B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Fibrant B.V.
 * https://cao-kijker.awvn.nl/bestanden/3979_01-04-2026%20tot%2001-04-2027_akkoord.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8%, eindejaarsuitkering 0%
 *   - Voltijd 40 uur/week
 *   - Verhogingen na 1-1-2026: 2026-07-01 +2,25% collectieve verhoging
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoFibrant2026: Cao = {
  id: 'fibrant',
  name: "Cao Fibrant B.V.",
  year: 2026,
  effectiveNote: "Cao 2026-04-01 t/m 2027-03-31; geen loontabel bekend. Let op: Eenmalige uitkering EUR 250 bruto (parttime naar rato) in december 2026 voor wie op 1-12-2026 in dienst is; exacte betaaldatum niet genoemd, daarom niet in oneOffPayments Cao 1-7-2025 t/m 31-3-2026: geen structurele loonsverhoging. 2% per 1-1-2025 komt uit de cao 2024-2025 (AWVN cao-kijker) Salarissen zijn jaarsalarissen inclusief de wettelijke vakantietoeslag, standaard uitbetaald in 14 termijnen (extra termijn in mei en november); keuze voor 13 of 12 termijnen My Choice-budget: maandelijks 9,11% van het jaarsalaris / 12 (cao 2025) Salarisschalen C33-C44 zijn jaarschalen (minimum, midden, maximum); niet opgenomen Pensioen bij Stichting Pensioenfonds DSM Nederland: werknemersbijdrage 6% boven de franchise uit het pensioenreglement (franchisebedrag niet in de cao), daarom geen pension-veld Dagdienst gemiddeld 40 uur per week; ploegendiensten kortere arbeidsduur (5-ploegendienst 33,6 uur)",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/3979_01-04-2026%20tot%2001-04-2027_akkoord.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: { kind: 'own', unit: 'maand', hoursPerWeek: 40 },
  periods: [
    {
      from: '2026-07-01',
      note: "+2,25% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', hoursPerWeek: 40, raises: [{ pct: 0.0225 }] },
    },
  ],
  vergoedingen: [],
};
