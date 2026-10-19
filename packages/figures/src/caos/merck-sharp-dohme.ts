import type { Cao } from '../types.js';

/**
 * MSD CAO (Merck Sharp & Dohme) 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: MSD CAO (Merck Sharp & Dohme)
 * https://cao-kijker.awvn.nl/bestanden/0857_01-01-2026%20tot%2001-01-2028_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8%, eindejaarsuitkering 3%
 *   - Voltijd 40 uur/week
 *   - Verhogingen na 1-1-2026: 2026-04-01 +3,2% collectieve verhoging; 2027-04-01 +3,3% collectieve verhoging
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoMerckSharpDohme2026: Cao = {
  id: 'merck-sharp-dohme',
  name: "MSD CAO (Merck Sharp & Dohme)",
  year: 2026,
  effectiveNote: "Cao 2026-01-01 t/m 2027-12-31; geen loontabel bekend. Let op: De verhogingen zijn merit-budgetten (3,2% per 1 april 2026, 3,3% per 1 april 2027); de individuele verhoging hangt af van de positie in de schaal volgens de merit matrix (2026: 4,80% / 4,00% / 3,20% / 2,24% / 1,60%; 2027: 4,95% / 4,13% / 3,30% / 2,31% / 1,65%) Boven het schaalmaximum wordt (een deel van) de verhoging als eenmalige lump sum uitbetaald Salarisschalen A t/m M zijn jaarsalarissen (minimum, midpoint, maximum), bijv. schaal A € 24.300 - € 42.300; niet opgenomen omdat ze niet per maand zijn Eindejaarsuitkering 3% van 12 maal het maandsalaris, uitbetaald in november; vakantietoeslag in mei Pensioen via Stichting Pensioenfonds MSD (middelloon, opbouw 1,738% in 2026, franchise € 19.172, max. pensioengevend salaris € 137.800); eigen bijdrage staat in een protocol en is niet in de cao-tekst vermeld Werknemerspremie excedent-arbeidsongeschiktheidspensioen 1%; 50% van de WGA-premie wordt op werknemers verhaald Annual Incentive Plan (AIP) bonus niet opgenomen",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/0857_01-01-2026%20tot%2001-01-2028_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.03,
  salary: { kind: 'own', unit: 'maand', hoursPerWeek: 40 },
  periods: [
    {
      from: '2026-04-01',
      note: "+3,2% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', hoursPerWeek: 40, raises: [{ pct: 0.032 }] },
    },
    {
      from: '2027-04-01',
      note: "+3,3% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', hoursPerWeek: 40, raises: [{ pct: 0.033 }] },
    },
  ],
  vergoedingen: [],
};
