import type { Cao } from '../types.js';

/**
 * Cao OWASE 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao OWASE
 * https://www.cnv.nl/documents/6093/Owase-cao-2026.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-01-01 (month) uit de bron
 *
 * Excluded: none stated
 */
export const caoOwaseBedrijven2026: Cao = {
  id: 'owase-bedrijven',
  name: "Cao OWASE",
  year: 2026,
  effectiveNote: "Cao 2026-01-01 t/m 2026-12-31; loontabel per 2026-01-01. Let op: Minimale vakantietoeslag (21+) € 3.298. Pensioen: franchise € 21.284 per 1 januari 2026, € 21.188 per 1 april 2026 (overgang naar solidaire premieregeling). Werknemer betaalt daarnaast TNP (€ 17,50 p/m) en AOP-premie (0,3%/1,7%). 12 atv-dagen bij 40 uur per week. Ziektekostenvergoeding € 20 per maand vanaf 2026. Schaal = functiejarenschaal per 1-1-2026 (bijlage II, groepen A t/m K, hele euro per maand); kolom WML (€ 2.559,54) niet als groep opgenomen",
  sourceUrl: "https://www.cnv.nl/documents/6093/Owase-cao-2026.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      'A': [2581, 2581, 2752, 3085, 3121, 3156, 3193],
      'B': [2581, 2581, 2795, 3153, 3191, 3247, 3296, 3353],
      'C': [3229, 3276, 3329, 3378, 3429, 3482],
      'D': [3336, 3392, 3449, 3505, 3565, 3630],
      'E': [3482, 3545, 3608, 3675, 3743, 3806, 3868],
      'F': [3623, 3696, 3768, 3842, 3925, 3996, 4070, 4145],
      'G': [3817, 3899, 3986, 4070, 4158, 4243, 4323, 4410, 4499, 4586],
      'H': [4087, 4180, 4280, 4373, 4476, 4575, 4669, 4773, 4869, 4964, 5060],
      'I': [4430, 4568, 4687, 4820, 4947, 5078, 5210, 5340, 5470, 5594, 5722],
      'K': [4862, 5037, 5211, 5387, 5561, 5737, 5909, 6088, 6263, 6434, 6607],
    },
  },
  vergoedingen: [],
};
