import type { Cao } from '../types.js';

/**
 * Cao Olam Cocoa B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Olam Cocoa B.V.
 * https://cao-kijker.awvn.nl/bestanden/0682_01-04-2026%20tot%2001-04-2028_akkoord.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8%, eindejaarsuitkering 8,33%
 *   - Voltijd 36 uur/week
 *   - Verhogingen na 1-1-2026: 2026-04-01 +1,5% collectieve verhoging; 2027-04-01 +2% collectieve verhoging
 *   - Pensioenfonds Pensioenfonds Zoetwaren → generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoOlamCocoa2026: Cao = {
  id: 'olam-cocoa',
  name: "Cao Olam Cocoa B.V.",
  year: 2026,
  effectiveNote: "Cao 2026-04-01 t/m 2028-03-31; geen loontabel bekend. Let op: Naast de structurele verhogingen geldt de automatische prijscompensatie (APC): salarissen worden in januari en juli aangepast op basis van de CBS-cpi; totale verhoging (APC + koopkracht) maximaal 6,5% per kalenderjaar. De APC-uitkomsten zijn niet verwerkt. Gegevens over de nieuwe cao komen uit het onderhandelingsresultaat van 24 april 2026; vakantietoeslag (8%), gratificatie (8,33% in november) en arbeidsduur (36 uur, 5-ploegendienst 33,6 uur) uit de cao 2024-2026. Pensioen: werknemersbijdrage 5,53% van de pensioengrondslag van basis- en excedentregeling; franchise € 19.172 en basisregeling tot € 82.600, excedent tot € 137.800 (niveau 2026). Omkleedvergoeding € 50 bruto per maand voor bepaalde functies t/m loonschaal I. Geen salaristabel voor 2026 gevonden.",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/0682_01-04-2026%20tot%2001-04-2028_akkoord.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: { kind: 'own', unit: 'maand', hoursPerWeek: 36 },
  periods: [
    {
      from: '2026-04-01',
      note: "+1,5% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', hoursPerWeek: 36, raises: [{ pct: 0.015 }] },
    },
    {
      from: '2027-04-01',
      note: "+2% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', hoursPerWeek: 36, raises: [{ pct: 0.02 }] },
    },
  ],
  vergoedingen: [],
};
