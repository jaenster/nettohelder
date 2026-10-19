import type { Cao } from '../types.js';

/**
 * Cao Metsä Board Winschoten B.V. (voorheen Konvertia Winschoten) 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Metsä Board Winschoten B.V. (voorheen Konvertia Winschoten)
 * https://cao-kijker.awvn.nl/bestanden/0417_01-04-2026%20tot%2001-07-2027_akkoord.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8%, eindejaarsuitkering 0%
 *   - Voltijdsuren niet in de bron: 40 aangenomen
 *   - Verhogingen na 1-1-2026: 2026-04-01 +2,75% collectieve verhoging
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoKonvertiaWinschoten2026: Cao = {
  id: 'konvertia-winschoten',
  name: "Cao Metsä Board Winschoten B.V. (voorheen Konvertia Winschoten)",
  year: 2026,
  effectiveNote: "Cao 2026-04-01 t/m 2027-06-30; geen loontabel bekend. Let op: Verbeterd cao-bod van 27 mei 2026, door AWVN als geaccepteerd eindbod geregistreerd Verhoging 4,5% per 1 april 2025 uit de vorige cao (2024-2026), volgens AWVN cao-kijker RVU-regeling voortgezet: € 15.000 bruto per jaar voor wie minimaal 5 jaar in ploegendienst met nachtarbeid werkte Vakantiegeld, eindejaarsuitkering, salaristabel en pensioenpremie niet geverifieerd",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/0417_01-04-2026%20tot%2001-07-2027_akkoord.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: { kind: 'own', unit: 'maand' },
  periods: [
    {
      from: '2026-04-01',
      note: "+2,75% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', raises: [{ pct: 0.0275 }] },
    },
  ],
  vergoedingen: [],
};
