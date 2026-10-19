import type { Cao } from '../types.js';

/**
 * Cao Ketjen Netherlands B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Ketjen Netherlands B.V.
 * https://www.cnv.nl/documents/4934/Cao_Ketjen_Netherlands_B.V._2024-2026.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8%, eindejaarsuitkering 7,5%
 *   - Voltijd 40 uur/week
 *   - Verhogingen na 1-1-2026: 2026-04-01 +4% collectieve verhoging
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoKetjenNetherlands2026: Cao = {
  id: 'ketjen-netherlands',
  name: "Cao Ketjen Netherlands B.V.",
  year: 2026,
  effectiveNote: "Cao 2024-10-01 t/m 2026-09-30; geen loontabel bekend. Let op: Eenmalige bruto uitkering mei 2025 van 1,25% x 4/12 van het jaarsalaris (incl. vaste toeslagen, vakantiegeld en eindejaarsuitkering) over 1-10-2024 t/m 31-1-2025 Salarisschalen 1 t/m 13 geven alleen een midpoint (100%-niveau) per schaal, geen minimum/maximum; daarom niet als tabel opgenomen. Midpoint per 1-4-2026: schaal 1 € 3.653 t/m schaal 13 € 12.515 per maand Pensioen: premieovereenkomst (DC) bij BeFrank PPI met leeftijdsafhankelijke inleg door de werkgever; franchise gelijk aan de fiscaal minimale franchise. Geen werknemersbijdrage in de cao gevonden Dagdienst 40 uur per week; vijfploegendienst gemiddeld 33,6 uur Cao liep af op 30-9-2026; nieuwe cao in onderhandeling",
  sourceUrl: "https://www.cnv.nl/documents/4934/Cao_Ketjen_Netherlands_B.V._2024-2026.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.075,
  salary: { kind: 'own', unit: 'maand', hoursPerWeek: 40 },
  periods: [
    {
      from: '2026-04-01',
      note: "+4% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', hoursPerWeek: 40, raises: [{ pct: 0.04 }] },
    },
  ],
  vergoedingen: [],
};
