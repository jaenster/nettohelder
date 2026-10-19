import type { Cao } from '../types.js';

/**
 * Cao Sonac Vuren B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Sonac Vuren B.V.
 * https://www.cnv.nl/voeding/vlees-en-vis/cao-sonac-vuren/
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8%, eindejaarsuitkering 8,33%
 *   - Voltijd 40 uur/week
 *   - Verhogingen na 1-1-2026: 2026-07-01 +1% collectieve verhoging
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoSonacVuren2026: Cao = {
  id: 'sonac-vuren',
  name: "Cao Sonac Vuren B.V.",
  year: 2026,
  effectiveNote: "Cao 2025-07-01 t/m 2026-09-30; geen loontabel bekend. Let op: Cao 1 juli 2025 t/m 30 september 2026, afgesloten via hetzelfde (aangepast verbeterd) eindbod van 17 november 2025 als de cao Rendac Son/Sonac Burgum/Ecoson/Darling Ingredients, maar met een eigen cao-tekst Onderhandelingen over een nieuwe cao per 1 oktober 2026 lopen Vakantietoeslag 8% van 12 maal het maandinkomen over mei, voor vakvolwassen werknemers minimaal € 2.877 bruto (2025) Eindejaarsuitkering gelijk aan het maandinkomen van november (opgenomen als 8,33%); daarnaast een winstafhankelijke uitkering Arbeidsduur dagdienst 40 uur, 5-ploegendienst gemiddeld 33,6 uur Salarisschalen (bijlage II, vorige cao) zijn niet uitleesbaar en niet opgenomen; schaal A bij Sonac Vuren heeft een uurloon onder € 16 maar daar worden geen vaste functies op ingeschaald Pensioen bij PGB; werknemersbijdrage niet gevonden",
  sourceUrl: "https://www.cnv.nl/voeding/vlees-en-vis/cao-sonac-vuren/",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: { kind: 'own', unit: 'maand', hoursPerWeek: 40 },
  periods: [
    {
      from: '2026-07-01',
      note: "+1% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', hoursPerWeek: 40, raises: [{ pct: 0.01 }] },
    },
  ],
  vergoedingen: [],
};
