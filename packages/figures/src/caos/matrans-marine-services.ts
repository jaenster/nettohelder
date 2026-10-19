import type { Cao } from '../types.js';

/**
 * Cao Matrans Marine Services B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Matrans Marine Services B.V.
 * https://www.cnv.nl/vervoer/havens/nieuws/onderhandelingsresultaat-cao-matrans-2025-10-17/
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8%, eindejaarsuitkering 0%
 *   - Voltijdsuren niet in de bron: 40 aangenomen
 *   - Verhogingen na 1-1-2026: 2027-01-01 +1% collectieve verhoging
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoMatransMarineServices2026: Cao = {
  id: 'matrans-marine-services',
  name: "Cao Matrans Marine Services B.V.",
  year: 2026,
  effectiveNote: "Cao 2025-01-01 t/m 2027-12-31; geen loontabel bekend. Let op: Gegevens uit het onderhandelingsresultaat met FNV Havens van 16 oktober 2025; CNV-leden stemden in november 2025 in. De definitieve cao-tekst is niet gevonden. Naast de verhogingen geldt automatische prijscompensatie per 1 januari (CPI alle huishoudens afgeleid, oktober-oktober); uitkomsten niet gevonden. Loongebouw (excl. BBL- en SD-schaal) krijgt per 1 januari 2026 en 1 januari 2027 een extra trede van 3,5%; medewerkers krijgen op die data een extra stap. Gediplomeerde sjorders en sjorders in opleiding krijgen na ondertekening een eenmalige uitkering van € 1.500 bruto (pro rata); betaaldatum onbekend. Werknemersbijdrage pensioenpremie per 1 januari 2026 verlaagd van 7% naar 6%; franchise en fonds niet gevonden. Vakantietoeslag niet geverifieerd (oude cao-tekst is een scan); 8% is het wettelijk minimum. Nieuw loongebouw per 1 januari 2025; salarisbedragen niet gevonden.",
  sourceUrl: "https://www.cnv.nl/vervoer/havens/nieuws/onderhandelingsresultaat-cao-matrans-2025-10-17/",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: { kind: 'own', unit: 'maand' },
  periods: [
    {
      from: '2027-01-01',
      note: "+1% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', raises: [{ pct: 0.01 }] },
    },
  ],
  vergoedingen: [],
};
