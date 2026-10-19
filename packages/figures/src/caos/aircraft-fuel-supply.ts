import type { Cao } from '../types.js';

/**
 * Cao Aircraft Fuel Supply B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Aircraft Fuel Supply B.V.
 * https://cao-kijker.awvn.nl/bestanden/0700_01-01-2024%20tot%2001-01-2027_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8,33%, eindejaarsuitkering 8,33%
 *   - Voltijdsuren niet in de bron: 40 aangenomen
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoAircraftFuelSupply2026: Cao = {
  id: 'aircraft-fuel-supply',
  name: "Cao Aircraft Fuel Supply B.V.",
  year: 2026,
  effectiveNote: "Cao 2024-01-01 t/m 2026-12-31; geen loontabel bekend. Let op: Cao 1-1-2024 t/m 31-12-2026. Salarissen volgen jaarlijks per 1 maart de CBS-loonontwikkeling (alle cao-lonen per maand excl. bijzondere beloningen); de percentages voor maart 2025 en maart 2026 zijn niet gevonden Vaste extra verhogingen per functie: per 1-1-2025 operator € 60, procesoperator € 100 en shiftleader € 132 bruto per maand; per 1-1-2026 procesoperator € 100 en shiftleader € 132 bruto per maand (operator geen vaste verhoging in 2026). Omdat de bedragen per functie verschillen staan ze niet als algemene verhoging opgenomen Loongebouw met drie functies (operator, procesoperator, shiftleader); laatst gevonden tabel is per 1-3-2024 (bijv. operator trede 0 € 3.159,63 tot trede 6 € 3.848,84 per maand) en is daarom niet opgenomen Vakantietoeslag ter grootte van één maandsalaris in april (minimaal € 1.945,48 bij voltijd); 13e maand in december Bonus over 2025 in april 2026 van maximaal € 1.000 bruto (voltijd) afhankelijk van operationele en veiligheidstargets Jaarlijkse uitkering van € 504 bruto in december voor deelnemers aan de voormalige premiespaarregeling",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/0700_01-01-2024%20tot%2001-01-2027_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.0833,
  eindejaarsuitkeringPct: 0.0833,
  salary: { kind: 'own', unit: 'maand' },
  vergoedingen: [],
};
