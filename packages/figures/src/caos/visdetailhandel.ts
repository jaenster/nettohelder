import type { Cao } from '../types.js';

/**
 * Cao voor de Visdetailhandel 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao voor de Visdetailhandel
 * https://zoek.officielebekendmakingen.nl/stcrt-2026-13313.html
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-01-01 (month) uit de bron
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoVisdetailhandel2026: Cao = {
  id: 'visdetailhandel',
  name: "Cao voor de Visdetailhandel",
  year: 2026,
  effectiveNote: "Cao 2026-01-01 t/m 2026-12-31; loontabel per 2026-01-01. Let op: Maandlonen per 1 januari 2026 (40 uur per week, periodiekstappen vanaf stap 2); lage treden zijn opgetrokken tot het wettelijk minimumloon De laatste periodiek(en) per schaal zijn beoordelingsafhankelijk Loonsverhoging 2026 (3,5%) is gemaximeerd op de verhoging van schaal 8, stap 8 Werknemers met gemiddeld 12 uur per week of minder krijgen een all-in loon Looptijd afgeleid uit de AVV (tot en met 31 december 2026); loonsverhoging 2027 nog niet bekend Pensioen via Pensioenfonds Detailhandel; werknemerspremie niet in de cao vermeld Bron is de in de Staatscourant gepubliceerde cao-tekst (AVV-besluit)",
  sourceUrl: "https://zoek.officielebekendmakingen.nl/stcrt-2026-13313.html",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      '2': [2592.6, 2592.6, 2592.6, 2592.6, 2592.6, 2606.88],
      '3': [2592.6, 2592.6, 2592.6, 2592.6, 2641.55, 2717.81, 2794.08],
      '4': [2592.6, 2592.6, 2636.35, 2723.01, 2809.68, 2906.74, 3000.34],
      '5': [2592.6, 2599.95, 2691.81, 2787.15, 2884.21, 2976.08, 3085.27, 3196.21],
      '6': [2596.08, 2698.75, 2809.68, 2922.34, 3035.01, 3145.94, 3272.47, 3405.93, 3544.6],
      '7': [2615.55, 2735.15, 2853.01, 2970.88, 3088.74, 3206.61, 3324.47, 3461.4, 3605.26, 3754.33],
      '8': [2688.35, 2827.01, 2963.94, 3102.61, 3237.8, 3374.74, 3513.4, 3674.6, 3844.46, 4021.26],
    },
  },
  vergoedingen: [],
};
