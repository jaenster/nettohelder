import type { Cao } from '../types.js';

/**
 * Cao UCC Coffee Benelux B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao UCC Coffee Benelux B.V.
 * https://cao-kijker.awvn.nl/bestanden/0064_01-05-2026%20tot%2001-05-2027_akkoord.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8%, eindejaarsuitkering 6%
 *   - Voltijd 38 uur/week
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoUccCoffeeBenelux2026: Cao = {
  id: 'ucc-coffee-benelux',
  name: "Cao UCC Coffee Benelux B.V.",
  year: 2026,
  effectiveNote: "Cao 2026-05-01 t/m 2027-04-30; geen loontabel bekend. Let op: Onderhandelingsresultaat 1-7-2026 (FNV en CNV) voor cao 1-5-2026 t/m 30-4-2027: cao-lonen structureel +3,30%; ingangsdatum van de verhoging niet expliciet vermeld in het resultaat Vorige cao 1-5-2024 t/m 30-4-2026: 5% per 1-5-2024 en per 1-5-2025 prijscompensatie volgens CPI over 2025 (uitkomst niet gevonden) Eenmalige bruto vergoeding van € 150 in augustus 2026, alleen voor medewerkers met een reiskostenvergoeding woon-werkverkeer Eindejaarsuitkering 6% van 12 keer het maandinkomen van november, uitbetaald in januari Vakantietoeslag 8% van het jaarinkomen in mei, minimaal op basis van schaal V bij 0 functiejaren Arbeidsduur gemiddeld 38 uur per week (40 uur met adv); 5-ploegendienst 33,6 uur Salarisschalen in de cao zijn per 1-5-2024 en niet opgenomen Pensioenpremie voor 2/3 werkgever en 1/3 werknemer (excedent gelijk verdeeld); percentage niet vermeld",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/0064_01-05-2026%20tot%2001-05-2027_akkoord.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.06,
  salary: { kind: 'own', unit: 'maand', hoursPerWeek: 38 },
  vergoedingen: [],
};
