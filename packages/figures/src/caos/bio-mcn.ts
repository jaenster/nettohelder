import type { Cao } from '../types.js';

/**
 * Cao BioMethanol Chemie Nederland B.V. (BioMCN) 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao BioMethanol Chemie Nederland B.V. (BioMCN)
 * https://cao-kijker.awvn.nl/bestanden/2921_01-01-2026%20tot%2001-01-2027_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8%, eindejaarsuitkering 8,33%
 *   - Voltijd 40 uur/week
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoBioMcn2026: Cao = {
  id: 'bio-mcn',
  name: "Cao BioMethanol Chemie Nederland B.V. (BioMCN)",
  year: 2026,
  effectiveNote: "Cao 2026-01-01 t/m 2026-12-31; geen loontabel bekend. Let op: Salarisschalen staan in de cao als jaarsalarissen (12 maandsalarissen + 8% vakantietoeslag) per 1 januari 2026 met minimum, 90%-, 100%- en 108%-niveau; de jaarsalarissen zijn bepalend. Bijv. groep 100: € 35.281,24 - € 41.124,51 (100%); groep 114: € 92.450,11 - € 146.435,85 (100%). De maandtabel in de cao is gelabeld 1 januari 2025 en is daarom niet overgenomen Eindejaarsuitkering 8,33% van 12 maal het maandsalaris per 1 november (incl. eventuele ploegentoeslag) Werknemers in 5-ploegendienst: gemiddeld 33,6 uur per week Pensioen (Zwitserleven): werknemersbijdrage 5% van de pensioengrondslag; franchise niet in de cao vermeld Daarnaast winstdeling en vaste spaarbijdrage volgens de cao",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/2921_01-01-2026%20tot%2001-01-2027_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: { kind: 'own', unit: 'maand', hoursPerWeek: 40 },
  vergoedingen: [],
};
