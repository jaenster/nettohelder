import type { Cao } from '../types.js';

/**
 * Cao Particulier Kaaspakhuisbedrijf 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Particulier Kaaspakhuisbedrijf
 * https://www.cnv.nl/documents/5373/Cao_Particulier_Kaaspakhuisbedrijf_2025-2027.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-01-01 (month) uit de bron
 *
 * Excluded: none stated
 */
export const caoKaaspakhuizen2026: Cao = {
  id: 'kaaspakhuizen',
  name: "Cao Particulier Kaaspakhuisbedrijf",
  year: 2026,
  effectiveNote: "Cao 2025-05-01 t/m 2026-12-31; loontabel per 2026-01-01. Let op: Loonschalen per 1 januari 2026 (per maand); er zijn ook 4-wekelijkse en zuivere 4-weekse tabellen. Per 1 januari 2026 hebben de hogere functiegroepen meer treden gekregen (A: 0-6 t/m F: 0-11). Pensioen bij PGB (premiegegevens Groothandel in kaas 2026): totaal 23,20%, werknemersdeel maximaal 4,64%; pensioengevend salaris omvat ook vakantietoeslag en toeslagen. Vakantietoeslag 8% van het vakantietoeslaginkomen. Onderhandelingen over een nieuwe cao starten op 4 november 2026; afspraken over een zwaarwerkregeling (RVU) volgen nog.",
  sourceUrl: "https://www.cnv.nl/documents/5373/Cao_Particulier_Kaaspakhuisbedrijf_2025-2027.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 36,
    schalen: {
      'A': [2543.33, 2581.48, 2620.21, 2659.51, 2697.01, 2735.04, 2773.6],
      'B': [2681.6, 2720.49, 2759.93, 2799.95, 2832.85, 2866.14, 2899.82, 2933.89],
      'C': [2782.87, 2822.63, 2863.64, 2904.95, 2932.41, 2961.24, 2991.29, 3020.14, 3050.5],
      'D': [2889.63, 2931.25, 2974.45, 3018.93, 3049.28, 3079.84, 3110.43, 3140.99, 3172.76, 3204.49],
      'E': [3002.06, 3046.83, 3092.08, 3138.5, 3170.28, 3202.07, 3233.88, 3265.66, 3298.64, 3331.63, 3364.95],
      'F': [3122.6, 3169.05, 3216.74, 3265.66, 3297.4, 3330.41, 3364.63, 3397.6, 3431.85, 3466.17, 3500.83, 3535.84],
    },
  },
  vergoedingen: [],
};
