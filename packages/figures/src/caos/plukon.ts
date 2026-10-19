import type { Cao } from '../types.js';

/**
 * Cao Plukon 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Plukon
 * https://cao-kijker.awvn.nl/bestanden/1322_19-05-2025%20tot%2025-04-2027_akkoord.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8%, eindejaarsuitkering 0,8%
 *   - Voltijd 36 uur/week
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoPlukon2026: Cao = {
  id: 'plukon',
  name: "Cao Plukon",
  year: 2026,
  effectiveNote: "Cao 2025-05-19 t/m 2027-04-25; geen loontabel bekend. Let op: Per 1 juli 2025 stijgen salarissen en schalen met € 45 én 3%; de vaste € 45 is niet opgenomen omdat niet vermeld is of dit per maand of per periode van 4 weken is Per periode 8-2026 stijgen salarissen en schalen met € 45 én 2%; de kalenderdatum van periode 8 staat niet in het akkoord, daarom niet als verhoging opgenomen Per periode 1-2027 stijgen salarissen en schalen met 0,5%; kalenderdatum niet vermeld in het akkoord Salarisbetaling per periode van 4 weken of per maand; salarisschalen in bedragen per periode (cao 2023-2025) Normale arbeidsduur gemiddeld 36 uur per week; bij een 40-urenrooster 26 ADV-dagen (cao 2023-2025) Eindejaarsuitkering 0,8% in december en winstuitkering afhankelijk van resultaat (cao 2023-2025) Nieuw functie- en salarishuis wordt tijdens de looptijd geïntroduceerd; geen salaristabel 2025-2027 gevonden",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/1322_19-05-2025%20tot%2025-04-2027_akkoord.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.008,
  salary: { kind: 'own', unit: 'maand', hoursPerWeek: 36 },
  vergoedingen: [],
};
