import type { Cao } from '../types.js';

/**
 * Cao NIZO food research B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao NIZO food research B.V.
 * https://www.cnv.nl/documents/5311/Cao-NIZO_2025-2026.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8%, eindejaarsuitkering 0%
 *   - Voltijd 40 uur/week
 *   - Verhogingen na 1-1-2026: 2026-07-01 +1% collectieve verhoging
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoNizoFoodResearch2026: Cao = {
  id: 'nizo-food-research',
  name: "Cao NIZO food research B.V.",
  year: 2026,
  effectiveNote: "Cao 2025-07-01 t/m 2026-12-31; geen loontabel bekend. Let op: NIZO kent geen salarisschalen met treden maar één jaarlijks normsalaris per functiegroep (1 t/m 13), bijv. per 1-7-2026 groep 1 € 34.827, groep 7 € 58.166, groep 13 € 137.012 per jaar (inclusief vakantietoeslag, gebruikt voor de relatieve salarispositie); individuele verhoging via salarisverhogingstabel op basis van RSP en beoordeling. Niet als schaal opgenomen Voltijd gemiddeld 40 uur per week met 104 uur ADV per jaar (gemiddeld 38 uur) Vakantietoeslag: maandelijks 8% van het vaste salaris plus overwerk gereserveerd, uitbetaald in mei Pensioen: beschikbare premieregeling volgens pensioenreglement; werknemersbijdrage en franchise niet in de cao gevonden Volgend cao-traject na de zomer van 2026",
  sourceUrl: "https://www.cnv.nl/documents/5311/Cao-NIZO_2025-2026.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: { kind: 'own', unit: 'maand', hoursPerWeek: 40 },
  periods: [
    {
      from: '2026-07-01',
      note: "+1% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', hoursPerWeek: 40, raises: [{ pct: 0.01 }] },
    },
  ],
  vergoedingen: [],
};
