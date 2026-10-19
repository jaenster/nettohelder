import type { Cao } from '../types.js';

/**
 * Cao voor de Kalkzandsteen-/Cellenbetonindustrie 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao voor de Kalkzandsteen-/Cellenbetonindustrie
 * https://zoek.officielebekendmakingen.nl/stcrt-2026-29282.html
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-01-01 (month) uit de bron
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoKalkzandsteenindustrie2026: Cao = {
  id: 'kalkzandsteenindustrie',
  name: "Cao voor de Kalkzandsteen-/Cellenbetonindustrie",
  year: 2026,
  effectiveNote: "Cao 2026-01-01 t/m 2026-12-31; loontabel per 2026-01-01. Let op: Partijen: VNK en Xella Cellenbeton Nederland (werkgevers), FNV en CNV Loonsverhoging 3% per 1-1-2026 geldt voor werknemers die op 29 april 2026 in dienst zijn; verhogingen 2025 (3% per 1-1-2025 en 2,5% per 1-7-2025) uit de vorige cao (1-1-2025 t/m 31-12-2025) Salarisschalen zijn minimumschalen (bij functies niet volgens ORBA gewaardeerd); de cao kent ook 4-wekenbedragen. Bedragen bij 36 uur per week (1.872 uur per jaar; 5-ploegendienst 33,6 uur) Eindejaarsuitkering 3% van het in dat jaar verdiende loon Afspraken voor 2027 nog niet bekend; pensioenpremie niet gevonden",
  sourceUrl: "https://zoek.officielebekendmakingen.nl/stcrt-2026-29282.html",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.03,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 36,
    schalen: {
      'III': [2728, 2765, 2799, 2834, 2871],
      'IV': [2803, 2846, 2878, 2915, 2952, 2991],
      'V': [2894, 2931, 2972, 3008, 3045, 3084],
      'VI': [2982, 3023, 3058, 3101, 3139, 3180, 3224],
      'VII': [3068, 3108, 3147, 3189, 3233, 3270, 3319],
    },
  },
  vergoedingen: [],
};
