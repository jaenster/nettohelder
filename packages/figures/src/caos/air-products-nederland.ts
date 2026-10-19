import type { Cao } from '../types.js';

/**
 * Cao Air Products Nederland B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Air Products Nederland B.V.
 * https://cao-kijker.awvn.nl/bestanden/0453_01-06-2026%20tot%2001-06-2027_akkoord.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8%, eindejaarsuitkering 0%
 *   - Voltijdsuren niet in de bron: 40 aangenomen
 *   - Verhogingen na 1-1-2026: 2026-06-01 +3% collectieve verhoging
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoAirProductsNederland2026: Cao = {
  id: 'air-products-nederland',
  name: "Cao Air Products Nederland B.V.",
  year: 2026,
  effectiveNote: "Cao 2026-06-01 t/m 2027-05-31; geen loontabel bekend. Let op: Structurele verhoging van 3% per 1 juni 2026 op salarissen en salarisschalen (hernieuwd eindbod 27 mei 2026, door AWVN als geaccepteerd eindbod geregistreerd; 76% van de CNV-leden stemde voor) Verhoging 3,8% per 1 juni 2025 uit de vorige cao (2025-2026) Sociaal plan verlengd tot 31 december 2027; streefdatum 80-90-100-regeling 1 juni 2027 Vakantiegeld, eindejaarsuitkering, salaristabel en pensioenpremie niet geverifieerd",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/0453_01-06-2026%20tot%2001-06-2027_akkoord.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: { kind: 'own', unit: 'maand' },
  periods: [
    {
      from: '2026-06-01',
      note: "+3% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', raises: [{ pct: 0.03 }] },
    },
  ],
  vergoedingen: [],
};
