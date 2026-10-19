import type { Cao } from '../types.js';

/**
 * Cao ECT (Europe Container Terminals) 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao ECT (Europe Container Terminals)
 * https://cao-kijker.awvn.nl/bestanden/1428_01-01-2025%20tot%2001-01-2028_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 10,83%, eindejaarsuitkering 0%
 *   - Voltijd 38.75 uur/week
 *   - Verhogingen na 1-1-2026: 2027-01-01 +1,5% collectieve verhoging
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoEct2026: Cao = {
  id: 'ect',
  name: "Cao ECT (Europe Container Terminals)",
  year: 2026,
  effectiveNote: "Cao 2025-01-01 t/m 2027-12-31; geen loontabel bekend. Let op: Initiële verhogingen van de salarisschalen: 1,0% per 1-4-2025, 1,5% per 1-1-2026 en 1,5% per 1-1-2027 Daarnaast automatische prijscompensatie (APC): per 1 januari worden salarissen aangepast aan de CBS-CPI (oktober-oktober); uitkomsten voor 2026 en 2027 niet opgenomen Eenmalige uitkering 2025 van € 1.500 bruto, pro rata, voor medewerkers in dienst op 1-1-2025 (betaaldatum niet vermeld) Vakantietoeslag per kalenderjaar 1,3 x het bruto basismaandsalaris (hier 10,83%) Gemiddelde arbeidsduur 38¾ uur per week exclusief ADV; volcontinu 32,55 uur Beloningsgebouw per 1-1-2025 bestaat uit meerdere functielijsten (I, II, III) met verschillende tabellen per datum van indiensttreding; niet overgenomen Pensioen: wettelijk minimale franchise; premie niet gevonden Eenmalige uitkering € 1.500 over 2025; betaaldatum niet vermeld, niet in de berekening",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/1428_01-01-2025%20tot%2001-01-2028_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.10830000000000001,
  eindejaarsuitkeringPct: 0,
  salary: { kind: 'own', unit: 'maand', hoursPerWeek: 38.75 },
  periods: [
    {
      from: '2027-01-01',
      note: "+1,5% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', hoursPerWeek: 38.75, raises: [{ pct: 0.015 }] },
    },
  ],
  vergoedingen: [],
};
