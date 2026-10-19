import type { Cao } from '../types.js';

/**
 * Cao Gebr. Van Kessel 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Gebr. Van Kessel
 * https://cao-kijker.awvn.nl/bestanden/0925_01-01-2026%20tot%2001-07-2027_akkoord.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8%, eindejaarsuitkering 0%
 *   - Voltijdsuren niet in de bron: 40 aangenomen
 *   - Verhogingen na 1-1-2026: 2027-01-01 +2% collectieve verhoging
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoGebroedersVanKessel2026: Cao = {
  id: 'gebroeders-van-kessel',
  name: "Cao Gebr. Van Kessel",
  year: 2026,
  effectiveNote: "Cao 2026-01-01 t/m 2027-06-30; geen loontabel bekend. Let op: Verhogingen gelden per loonperiode 1 van 2026 resp. 2027 (vierwekelijkse perioden); hier als 1 januari opgenomen Eenmalige netto-uitkering van € 250 in december 2025, ongeacht deeltijdpercentage (netto, daarom niet in oneOffPayments) Verhogingen 2025 (2,5% + € 50 per 1-1-2025 en 1,5% per 1-7-2025) volgens de samenvatting in de AWVN cao-kijker Onderhandelingsresultaat van 4 december 2025; de uitslag van de ledenraadpleging (stemperiode verlengd tot 19 december 2025) is niet gevonden Stagevergoeding per periode 1 2026 € 600 bruto per periode Vakantiegeld, arbeidsduur, salaristabel en pensioenpremie niet geverifieerd; 8% is het wettelijk minimum",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/0925_01-01-2026%20tot%2001-07-2027_akkoord.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: { kind: 'own', unit: 'maand' },
  periods: [
    {
      from: '2027-01-01',
      note: "+2% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', raises: [{ pct: 0.02 }] },
    },
  ],
  vergoedingen: [],
};
