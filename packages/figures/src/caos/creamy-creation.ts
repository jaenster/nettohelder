import type { Cao } from '../types.js';

/**
 * Cao Creamy Creation B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Creamy Creation B.V.
 * https://cao-kijker.awvn.nl/bestanden/4287_01-01-2022%20tot%2001-01-2027_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8%, eindejaarsuitkering 5%
 *   - Voltijd 36 uur/week
 *   - Verhogingen na 1-1-2026: 2026-04-01 +3,3% collectieve verhoging
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoCreamyCreation2026: Cao = {
  id: 'creamy-creation',
  name: "Cao Creamy Creation B.V.",
  year: 2026,
  effectiveNote: "Cao 2022-01-01 t/m 2026-12-31; geen loontabel bekend. Let op: Cao 1-1-2022 t/m 31-12-2026 (FNV). Creamy Creation volgt de cao Zuivelindustrie één op één voor loonontwikkeling, vakantietoeslag/eindejaarsuitkering en toeslagen; de verhogingen hier zijn die van de cao Zuivelindustrie (3% per 1-4-2025, 1,75% per 1-8-2025, 3,3% per 1-4-2026) en niet afzonderlijk in een Creamy Creation-bron bevestigd Cao I: 36 uur per week, eindejaarsuitkering 5% van het jaarinkomen (vanaf 1-1-2025). Cao HP schaal 13-17: 38 uur, eindejaarsuitkering 4%; vanaf schaal 18: 40 uur Salarisschalen cao I in de cao gaan alleen tot 1-8-2025 (functiejarenschaal, 40 uur); geen tabel voor 2026 gevonden, daarom niet opgenomen; cao HP (Hay 13-19) heeft maandbandbreedtes per 1-1-2025 (RSP 70%-110%, bijv. Hay 13 € 3.273,11-€ 5.143,45) Vakantietoeslag 8% van het jaarinkomen (juni t/m mei) met wettelijk minimum, uitbetaald in mei Pensioen volgens pensioen-cao Zuivelindustrie; werknemersbijdrage niet in de cao vermeld",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/4287_01-01-2022%20tot%2001-01-2027_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.05,
  salary: { kind: 'own', unit: 'maand', hoursPerWeek: 36 },
  periods: [
    {
      from: '2026-04-01',
      note: "+3,3% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', hoursPerWeek: 36, raises: [{ pct: 0.033 }] },
    },
  ],
  vergoedingen: [],
};
