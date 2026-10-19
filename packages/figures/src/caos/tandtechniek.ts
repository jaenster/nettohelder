import type { Cao } from '../types.js';

/**
 * Cao Tandtechniek 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Tandtechniek
 * https://zoek.officielebekendmakingen.nl/stcrt-2025-39958.html
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-01-01 (month) uit de bron
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoTandtechniek2026: Cao = {
  id: 'tandtechniek',
  name: "Cao Tandtechniek",
  year: 2026,
  effectiveNote: "Cao 2025-01-01 t/m 2026-12-31; loontabel per 2026-01-01. Let op: Cao Tandtechniek 2025/2026 (werkgevers VLT, ONT, NWT; werknemers CNV en De Unie). Looptijd niet letterlijk gevonden; AVV geldt tot en met 31-12-2026 Per 1-1-2025: 4,5% ten opzichte van de laatste cao-schalen, met een minimum van € 75 ten opzichte van het loon van december 2024 Per 1-1-2026 nieuw loongebouw: functiejaar-treden 2,25% en functiegroepen 4% uit elkaar; geen afzonderlijk collectief percentage gevonden. Vanaf 2026 geldt de functiejarenschaal al vanaf 20 jaar Per 1-7-2026 alleen aanpassing aan het minimumloon: onderste bedragen (groep 0, A0-A2, B0) worden € 2.469 Scale = maandsalarissen functiejarenschaal (20 jaar en ouder) per 1-1-2026, functiejaren 0 t/m 10 als treden; jeugdschaal en BBL niet opgenomen Volledig dienstverband is 40 uur per week minus ADV; fulltime uren daarom niet ingevuld Vakantietoeslag 8% met een minimum van € 1.400 per jaar (naar rato) Pensioen via PFZW; werknemerspremie niet in de cao vermeld",
  sourceUrl: "https://zoek.officielebekendmakingen.nl/stcrt-2025-39958.html",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      '0': [2423],
      'A': [2423, 2423, 2462, 2518, 2574, 2632],
      'B': [2449, 2504, 2561, 2618, 2677, 2737, 2799],
      'C': [2547, 2604, 2663, 2723, 2784, 2847, 2911, 2976],
      'D': [2649, 2709, 2770, 2832, 2896, 2961, 3027, 3096, 3165],
      'E': [2755, 2817, 2880, 2945, 3011, 3079, 3149, 3219, 3292, 3366],
      'F': [2865, 2930, 2996, 3063, 3132, 3202, 3274, 3348, 3423, 3500],
      'G': [2980, 3047, 3115, 3186, 3257, 3330, 3405, 3482, 3560, 3640, 3722],
      'H': [3099, 3169, 3240, 3313, 3387, 3464, 3542, 3621, 3703, 3786, 3871],
    },
  },
  vergoedingen: [],
};
