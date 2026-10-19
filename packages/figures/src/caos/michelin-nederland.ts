import type { Cao } from '../types.js';

/**
 * Cao Michelin Nederland N.V. en Michelin Distribution B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Michelin Nederland N.V. en Michelin Distribution B.V.
 * https://cao-kijker.awvn.nl/bestanden/0762_01-04-2026%20tot%2001-04-2028_akkoord.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8%, eindejaarsuitkering 4%
 *   - Voltijdsuren niet in de bron: 40 aangenomen
 *   - Verhogingen na 1-1-2026: 2026-06-01 +3,5% collectieve verhoging; 2027-01-01 +2% collectieve verhoging; 2027-07-01 +2% collectieve verhoging; 2028-01-01 +1,5% collectieve verhoging
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoMichelinNederland2026: Cao = {
  id: 'michelin-nederland',
  name: "Cao Michelin Nederland N.V. en Michelin Distribution B.V.",
  year: 2026,
  effectiveNote: "Cao 2026-04-01 t/m 2028-03-31; geen loontabel bekend. Let op: Gegevens uit het onderhandelingsresultaat met De Unie van 12 mei 2026; de nieuwe cao-tekst is niet gevonden. Verhogingen gelden over functiebasis (FB), individuele beoordelingstoeslag (IB) en persoonlijke toeslag (PT) vast. Vakantietoeslag (8%) en eindejaarsuitkering (4% van de verdiende maandinkomens) volgens de cao 2024-2026. Basis 40 uur per week met een gemiddelde effectieve arbeidsduur van 37,7 uur (cao 2024-2026). Pensioen via de Michelin pensioenregeling bij Zwitserleven; werknemersbijdrage niet in de cao vermeld. Salaristabellen niet gevonden.",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/0762_01-04-2026%20tot%2001-04-2028_akkoord.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.04,
  salary: { kind: 'own', unit: 'maand' },
  periods: [
    {
      from: '2026-06-01',
      note: "+3,5% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', raises: [{ pct: 0.035 }] },
    },
    {
      from: '2027-01-01',
      note: "+2% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', raises: [{ pct: 0.02 }] },
    },
    {
      from: '2027-07-01',
      note: "+2% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', raises: [{ pct: 0.02 }] },
    },
    {
      from: '2028-01-01',
      note: "+1,5% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', raises: [{ pct: 0.015 }] },
    },
  ],
  vergoedingen: [],
};
