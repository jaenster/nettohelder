import type { Cao } from '../types.js';

/**
 * Cao Carglass 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Carglass
 * https://www.cnv.nl/documents/4854/Cao_Carglass__2025-2026_.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-01-01 (month) uit de bron
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoCarglass2026: Cao = {
  id: 'carglass',
  name: "Cao Carglass",
  year: 2026,
  effectiveNote: "Cao 2025-02-01 t/m 2026-06-30; loontabel per 2026-01-01. Let op: Salarisschalen geven alleen een aanvangs- en maximumsalaris per schaal; hier als [min, max] opgenomen Voltijd: feitelijk 40 uur per week, gemiddeld 38 uur op jaarbasis (met roostervrije dagen) Eigen bijdrage pensioen werknemer 8,5% van de pensioengrondslag; franchise niet in de cao vermeld, daarom niet opgenomen Aanloopschaal voor medewerkers zonder opleiding of ervaring; niet opgenomen Cao liep af op 30-6-2026; in juni 2026 liepen de onderhandelingen nog (openingsbod Carglass: 1% per 1-7-2026 en 1,5% per 1-1-2027, geen akkoord bekend)",
  sourceUrl: "https://www.cnv.nl/documents/4854/Cao_Carglass__2025-2026_.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 38,
    schalen: {
      'B': [2550.76, 3368.59],
      'C': [2668.4, 3536.65],
      'D': [2798.59, 3722.63],
      'E': [3000.47, 4018.62],
      'F': [3335.19, 4525.91],
      'G': [3674.89, 5052.13],
      'H': [4086.04, 5692.92],
      'I': [4510.01, 6335.47],
      'J': [5161.97, 7299.35],
      'K': [5836.72, 8263.29],
      'L': [6511.44, 9227.16],
      'M': [7055.68, 10004.67],
    },
  },
  vergoedingen: [],
};
