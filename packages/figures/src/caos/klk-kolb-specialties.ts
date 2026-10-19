import type { Cao } from '../types.js';

/**
 * Cao KLK Kolb Specialties B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao KLK Kolb Specialties B.V.
 * https://www.cnv.nl/industrie/chemie-en-energie/cao-klk-kolb-specialties-vh-elementis/nieuws/eindbod-cao-klk-kolb-2026-04-09/
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8,33%, eindejaarsuitkering 8,33%
 *   - Voltijd 40 uur/week
 *   - Verhogingen na 1-1-2026: 2026-04-01 +2,3% collectieve verhoging; 2027-04-01 +2,3% collectieve verhoging
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoKlkKolbSpecialties2026: Cao = {
  id: 'klk-kolb-specialties',
  name: "Cao KLK Kolb Specialties B.V.",
  year: 2026,
  effectiveNote: "Cao 2026-04-01 t/m 2028-03-31; geen loontabel bekend. Let op: Eindbod van de werkgever (looptijd 1-4-2026 tot 1-4-2028); geaccepteerd door de CNV-leden (april 2026), afgewezen door de FNV-leden; vervolg bij FNV niet bekend Vakantietoeslag 8,33% van 12 x het maandinkomen van april; 13e maand 8,33% van 12 x het maandinkomen van november (bron: cao 2024-2025) Dagdienst 40 uur per week met 92 uur arbeidsduurverkorting per jaar (gemiddeld 38 uur); 5-ploegendienst gemiddeld 33,6 uur Minimum uurloon volgens de cao € 16,00 Verhogingen uit de cao 2025-2026 niet gevonden; salarisschalen alleen per 1-4-2024 gevonden, niet opgenomen; pensioenpremie niet gevonden",
  sourceUrl: "https://www.cnv.nl/industrie/chemie-en-energie/cao-klk-kolb-specialties-vh-elementis/nieuws/eindbod-cao-klk-kolb-2026-04-09/",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.0833,
  eindejaarsuitkeringPct: 0.0833,
  salary: { kind: 'own', unit: 'maand', hoursPerWeek: 40 },
  periods: [
    {
      from: '2026-04-01',
      note: "+2,3% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', hoursPerWeek: 40, raises: [{ pct: 0.023 }] },
    },
    {
      from: '2027-04-01',
      note: "+2,3% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', hoursPerWeek: 40, raises: [{ pct: 0.023 }] },
    },
  ],
  vergoedingen: [],
};
