import type { Cao } from '../types.js';

/**
 * Cao CED 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao CED
 * https://cao-kijker.awvn.nl/bestanden/4178_01-01-2025%20tot%2001-01-2028_akkoord.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8%, eindejaarsuitkering 8,33%
 *   - Voltijd 40 uur/week
 *   - Verhogingen na 1-1-2026: 2027-01-01 +1,5% collectieve verhoging
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoCed2026: Cao = {
  id: 'ced',
  name: "Cao CED",
  year: 2026,
  effectiveNote: "Cao 2025-01-01 t/m 2027-12-31; geen loontabel bekend. Let op: Gegevens uit het hernieuwde onderhandelingsresultaat (september 2025); in september 2026 overleggen partijen of de verhoging per 1-1-2027 aanpassing behoeft Dertiende maand (één bruto maandsalaris) wordt aan het keuzebudget CED Choice toegevoegd; restant wordt eind van het jaar uitbetaald Vakantietoeslag 8% over salaris en dertiende maand, betaald in mei Bovenkant van salarisschalen 4 t/m 10 per 1-1-2026 met 3 à 4% verhoogd; actuele salarisschalen niet gevonden Pensioenregeling via eigen pensioenreglement; werknemerspremie niet gevonden",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/4178_01-01-2025%20tot%2001-01-2028_akkoord.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: { kind: 'own', unit: 'maand', hoursPerWeek: 40 },
  periods: [
    {
      from: '2027-01-01',
      note: "+1,5% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', hoursPerWeek: 40, raises: [{ pct: 0.015 }] },
    },
  ],
  vergoedingen: [],
};
