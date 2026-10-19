import type { Cao } from '../types.js';

/**
 * Cao Transavia Oproepkrachten Cabinepersoneel 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Transavia Oproepkrachten Cabinepersoneel
 * https://cao-kijker.awvn.nl/bestanden/1533_01-01-2024%20tot%2001-07-2026_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8%, eindejaarsuitkering 0%
 *   - Voltijdsuren niet in de bron: 40 aangenomen
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoTransaviaOproepCabinepersoneel2026: Cao = {
  id: 'transavia-oproep-cabinepersoneel',
  name: "Cao Transavia Oproepkrachten Cabinepersoneel",
  year: 2026,
  effectiveNote: "Cao 2024-01-01 t/m 2026-06-30; geen loontabel bekend. Let op: Uurlonen per 1-1-2026 (excl. 8% vakantietoeslag): Cabin Attendant €22,44, Cabin Attendant Airbus €22,89, Purser €27,03, Purser Airbus €28,65; niet als schaal opgenomen omdat geen voltijd-arbeidsduur geldt voor oproepkrachten All-in uurloon: compensatie voor vakantie/verlof (incl. 8% vakantiebijslag daarover) en 8,33% eindejaarsuitkering zitten al in het uurloon; daarnaast 8% vakantietoeslag over gewerkte uren Geen pensioenregeling voor oproepkrachten Uurloon volgt automatisch de kostencompenserende loonsverhogingen van de cao Transavia Cabinepersoneel Eenmalige uitkering 4,5% in december 2024 (vóór 2025, niet opgenomen) Cao liep af op 30-6-2026; geen nieuwe cao gevonden",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/1533_01-01-2024%20tot%2001-07-2026_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: { kind: 'own', unit: 'maand' },
  vergoedingen: [],
};
