import type { Cao } from '../types.js';

/**
 * Cao Unilash B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Unilash B.V.
 * https://cao-kijker.awvn.nl/bestanden/3384_01-01-2024%20tot%2001-01-2027_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8%, eindejaarsuitkering 0%
 *   - Voltijdsuren niet in de bron: 40 aangenomen
 *   - Verhogingen na 1-1-2026: 2026-04-01 +1% collectieve verhoging
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoUnilash2026: Cao = {
  id: 'unilash',
  name: "Cao Unilash B.V.",
  year: 2026,
  effectiveNote: "Cao 2024-01-01 t/m 2026-12-31; geen loontabel bekend. Let op: Initiële loonsverhogingen; daarnaast wordt ieder jaar per 1 januari de APC (prijscompensatie) verwerkt in salarissen en toeslagen, hoogte niet opgenomen Vakantietoeslag 8% van 12 (schema)maandsalarissen Arbeidsduur, salaristabel en pensioenpremie niet opgenomen",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/3384_01-01-2024%20tot%2001-01-2027_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: { kind: 'own', unit: 'maand' },
  periods: [
    {
      from: '2026-04-01',
      note: "+1% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', raises: [{ pct: 0.01 }] },
    },
  ],
  vergoedingen: [],
};
