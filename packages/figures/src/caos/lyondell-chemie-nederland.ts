import type { Cao } from '../types.js';

/**
 * Cao Lyondell Chemie Nederland B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Lyondell Chemie Nederland B.V.
 * https://cao-kijker.awvn.nl/bestanden/4003_01-04-2025%20tot%2001-04-2027_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8,33%, eindejaarsuitkering 8,33%
 *   - Voltijd 40 uur/week
 *   - Verhogingen na 1-1-2026: 2026-07-01 +2,5% collectieve verhoging
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoLyondellChemieNederland2026: Cao = {
  id: 'lyondell-chemie-nederland',
  name: "Cao Lyondell Chemie Nederland B.V.",
  year: 2026,
  effectiveNote: "Cao 2025-04-01 t/m 2027-03-31; geen loontabel bekend. Let op: Cao 1-4-2025 t/m 31-3-2027 op basis van aangepast eindbod van de werkgever (update 21-1-2026) aan FNV en CNV Per 1-1-2026 worden alleen de salarisschalen met 3,0% verhoogd (niet de individuele salarissen); per 1-7-2026 salarisschalen en maandsalarissen +2,5% Salarisschalen zijn jaarbedragen (min 80%, midpoint, max 115% van midpoint; overgangsregeling max 120%) per groep IN t/m NN, bijv. per 1-7-2026 NN € 40.930-€ 58.840 en IN € 71.762-€ 103.157 per jaar; niet als maandtabel opgenomen Arbeidsduur 40 uur per week met 104 adv-uren per jaar (effectief 38 uur); volcontinu 35,6 uur (effectief 33,6) Vakantietoeslag 8,33% van 12 maal het basismaandsalaris van april, uitbetaald in april; 13e maand = basismaandsalaris per 1 december (hier als 8,33%) Pensioenregeling: werknemersbijdrage niet in de cao vermeld",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/4003_01-04-2025%20tot%2001-04-2027_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.0833,
  eindejaarsuitkeringPct: 0.0833,
  salary: { kind: 'own', unit: 'maand', hoursPerWeek: 40 },
  periods: [
    {
      from: '2026-07-01',
      note: "+2,5% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', hoursPerWeek: 40, raises: [{ pct: 0.025 }] },
    },
  ],
  vergoedingen: [],
};
