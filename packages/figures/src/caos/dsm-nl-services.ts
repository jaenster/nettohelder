import type { Cao } from '../types.js';

/**
 * Cao dsm-firmenich (DSM NL Services B.V.) 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao dsm-firmenich (DSM NL Services B.V.)
 * https://cao-kijker.awvn.nl/bestanden/3707_01-01-2026%20tot%2001-01-2027_akkoord.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8%, eindejaarsuitkering 0%
 *   - Voltijd 40 uur/week
 *   - Verhogingen na 1-1-2026: 2026-03-01 +3,4% collectieve verhoging
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoDsmNlServices2026: Cao = {
  id: 'dsm-nl-services',
  name: "Cao dsm-firmenich (DSM NL Services B.V.)",
  year: 2026,
  effectiveNote: "Cao 2026-01-01 t/m 2026-12-31; geen loontabel bekend. Let op: Geaccepteerd eindbod van 11 december 2025, looptijd 1-1-2026 t/m 31-12-2026: individuele jaarsalarissen en Banden (ANH: C-schalen) per 1-3-2026 +3,4% Salarissen zijn jaarsalarissen inclusief de wettelijke vakantietoeslag (excl. MyChoice); daarom geen maandtabel opgenomen. Banden per 1-1-2025 (min/mid/max per jaar): L € 35.942-55.455, K € 36.015-61.395, J € 38.727-69.343, I € 46.542-86.265, H € 60.142-113.628, G € 79.658-150.172, F € 105.939-201.838 Maandelijks MyChoice-budget van 6,11% van het jaarsalaris / 12 Pensioen bij Pensioenfonds PDN: werknemersbijdrage 6% van het pensioengevend jaarinkomen boven de franchise; franchisebedrag niet gevonden STI (bonus) met bandbreedtes per Band vanaf 2026; minimuminkomen € 18 bruto per uur Merit-verhogingen volgens budget gestuurd meritproces, niet in de cao vastgelegd",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/3707_01-01-2026%20tot%2001-01-2027_akkoord.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: { kind: 'own', unit: 'maand', hoursPerWeek: 40 },
  periods: [
    {
      from: '2026-03-01',
      note: "+3,4% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', hoursPerWeek: 40, raises: [{ pct: 0.034 }] },
    },
  ],
  vergoedingen: [],
};
