import type { Cao } from '../types.js';

/**
 * Cao Watervoorziening Hatenboer-Neptunus B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Watervoorziening Hatenboer-Neptunus B.V.
 * https://cao-kijker.awvn.nl/bestanden/1207_01-07-2024%20tot%2001-07-2027_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8%, eindejaarsuitkering 0%
 *   - Voltijdsuren niet in de bron: 40 aangenomen
 *   - Verhogingen na 1-1-2026: 2027-01-01 +1% collectieve verhoging
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoWatervoorzieningHatenboer2026: Cao = {
  id: 'watervoorziening-hatenboer',
  name: "Cao Watervoorziening Hatenboer-Neptunus B.V.",
  year: 2026,
  effectiveNote: "Cao 2024-07-01 t/m 2027-06-30; geen loontabel bekend. Let op: Naast de vaste verhogingen van 1% per 1 januari worden de lonen per 1 juli geïndexeerd met de afgeleide CPI (mei-mei), gemaximeerd op 3%; per 1-7-2024 was dit 1,7%. Uitkomsten 1-7-2025 en 1-7-2026 niet in de cao, daarom niet opgenomen Lonen zijn weeklonen per functie (kapitein, machinist/volmatroos, scheepsjongen), leeftijd en dienstjaren (bijlage A, per 1-7-2024). Tabel is een slecht leesbare scan en niet opgenomen Uurloon = 98,113% van het weekloon gedeeld door 39 Vakantietoeslag 8%, uitbetaald in mei; 25 vakantiedagen plus extra dagen vanaf 56 jaar Pensioenregeling niet uitgewerkt in deze gegevens",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/1207_01-07-2024%20tot%2001-07-2027_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: { kind: 'own', unit: 'maand' },
  periods: [
    {
      from: '2027-01-01',
      note: "+1% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', raises: [{ pct: 0.01 }] },
    },
  ],
  vergoedingen: [],
};
