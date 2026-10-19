import type { Cao } from '../types.js';

/**
 * Cao VHP Security Paper B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao VHP Security Paper B.V.
 * https://cao-kijker.awvn.nl/bestanden/1907_01-04-2026%20tot%2001-04-2027_akkoord.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8%, eindejaarsuitkering 0%
 *   - Voltijdsuren niet in de bron: 40 aangenomen
 *   - Verhogingen na 1-1-2026: 2026-04-01 +3% collectieve verhoging
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoVhpSecurityPaper2026: Cao = {
  id: 'vhp-security-paper',
  name: "Cao VHP Security Paper B.V.",
  year: 2026,
  effectiveNote: "Cao 2026-04-01 t/m 2027-03-31; geen loontabel bekend. Let op: 3% per 1 april 2026 volgens de samenvatting in de AWVN cao-kijker (geaccepteerd eindbod van 24 maart 2026) Nieuwe RVU-regeling voor werknemers met structurele nachtarbeid of consignatie; extra vrije diensten voor oudere ploegwerkers per 1 juli 2026 VHP werkt aan een transparant salarisgebouw en functiewaardering naar ORBA (loontransparantie per 2027) Vakantiegeld, eindejaarsuitkering, salaristabel en pensioenpremie niet geverifieerd",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/1907_01-04-2026%20tot%2001-04-2027_akkoord.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: { kind: 'own', unit: 'maand' },
  periods: [
    {
      from: '2026-04-01',
      note: "+3% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', raises: [{ pct: 0.03 }] },
    },
  ],
  vergoedingen: [],
};
