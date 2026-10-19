import type { Cao } from '../types.js';

/**
 * Cao Kerry (NL) B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Kerry (NL) B.V.
 * https://cao-kijker.awvn.nl/bestanden/2884_01-03-2026%20tot%2001-05-2027_akkoord.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8%, eindejaarsuitkering 0%
 *   - Voltijdsuren niet in de bron: 40 aangenomen
 *   - Verhogingen na 1-1-2026: 2026-03-01 +3% collectieve verhoging
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoKerry2026: Cao = {
  id: 'kerry',
  name: "Cao Kerry (NL) B.V.",
  year: 2026,
  effectiveNote: "Cao 2026-03-01 t/m 2027-04-30; geen loontabel bekend. Let op: Verhoging 3% per 1 maart 2026 voor werknemers die op 1 augustus 2026 in dienst zijn (eindbod 18 augustus 2026, door AWVN als geaccepteerd geregistreerd) Verhoging 4% per 1 maart 2025 uit de vorige cao Cao-bonus van € 800 ongewijzigd voortgezet (voorwaarden niet geverifieerd) Vakantiegeld, eindejaarsuitkering, salaristabel en pensioenpremie niet geverifieerd",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/2884_01-03-2026%20tot%2001-05-2027_akkoord.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: { kind: 'own', unit: 'maand' },
  periods: [
    {
      from: '2026-03-01',
      note: "+3% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', raises: [{ pct: 0.03 }] },
    },
  ],
  vergoedingen: [],
};
