import type { Cao } from '../types.js';

/**
 * Hapag-Lloyd Rotterdam 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Hapag-Lloyd Rotterdam
 * https://www.cnv.nl/documents/6045/Hapag-Lloyd_Rotterdam_cao_2025-2026-2027.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8,33%, eindejaarsuitkering 0%
 *   - Voltijd 38.75 uur/week
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoHapagLloydRotterdam2026: Cao = {
  id: 'hapag-lloyd-rotterdam',
  name: "Hapag-Lloyd Rotterdam",
  year: 2026,
  effectiveNote: "Cao 2025-01-01 t/m 2027-12-31; geen loontabel bekend. Let op: Cao Hapag-Lloyd Rotterdam 1 januari 2025 t/m 31 december 2027 (FNV Havens, CNV). Lonen en toeslagen worden jaarlijks per 1 januari verhoogd met automatische prijscompensatie (APC, CBS CPI afgeleid oktober-oktober); uitkomsten voor 2026 en 2027 niet in de cao vermeld. Werknemers onder het schaalmaximum krijgen daarnaast per 1 januari 3,0% structurele verhoging tot het maximum van hun schaal (budget APC + 0,5% loonsom). Salarisschalen (bijlage IV, per 1-1-2025) noemen alleen maximumsalarissen per schaal (A1-A10, B1-B6); niet opgenomen. Vakantietoeslag: één bruto maandsalaris (aprilsalaris), uitbetaald in mei; als 8,33% opgenomen. Normale arbeidsduur 38,75 uur per week (7,75 uur per dag). Pensioen: beschikbare-premieregeling bij ABN Amro; eigen bijdrage 6% van de pensioengrondslag (4% voor werknemers in dienst op 31-12-2016 en ex-NileDutch). Franchise niet vermeld.",
  sourceUrl: "https://www.cnv.nl/documents/6045/Hapag-Lloyd_Rotterdam_cao_2025-2026-2027.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.0833,
  eindejaarsuitkeringPct: 0,
  salary: { kind: 'own', unit: 'maand', hoursPerWeek: 38.75 },
  vergoedingen: [],
};
