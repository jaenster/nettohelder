import type { Cao } from '../types.js';

/**
 * Maersk Ship Management B.V. Reglement Officieren en Scheepsgezellen 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Maersk Ship Management B.V. Reglement Officieren en Scheepsgezellen
 * https://cao-kijker.awvn.nl/bestanden/0272_01-04-2025%20tot%2001-04-2027_akkoord.pdf
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
export const caoMaerskShipManagement2026: Cao = {
  id: 'maersk-ship-management',
  name: "Maersk Ship Management B.V. Reglement Officieren en Scheepsgezellen",
  year: 2026,
  effectiveNote: "Cao 2025-04-01 t/m 2027-03-31; geen loontabel bekend. Let op: Onderhandelingsresultaat van 5 maart 2025, looptijd 1-4-2025 tot 1-4-2027: +3,5% per 1-4-2025 en +3% per 1-4-2026 (volgens de AWVN cao-kijker; het akkoord-PDF is een scan en kon niet worden gelezen) Gagetabellen (senior officieren, officieren, scheepsgezellen) niet als tekst beschikbaar Vakantietoeslag 8% van de gemiddelde maandgage (cao 2023-2025) Gages zijn maandgages voor zeevarenden; arbeidsduur en vaarschema's wijken af van wal-cao's",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/0272_01-04-2025%20tot%2001-04-2027_akkoord.pdf",
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
