import type { Cao } from '../types.js';

/**
 * Cao LANXESS Chemical B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao LANXESS Chemical B.V.
 * https://cao-kijker.awvn.nl/bestanden/3331_01-01-2025%20tot%2001-04-2026_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-01-01 (month) uit de bron
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoLanxessChemical2026: Cao = {
  id: 'lanxess-chemical',
  name: "Cao LANXESS Chemical B.V.",
  year: 2026,
  effectiveNote: "Cao 2025-01-01 t/m 2026-03-31; loontabel per 2026-01-01. Let op: Cao 1-1-2025 t/m 31-3-2026 (eindbod LANXESS van 24-2-2025, partij FNV); geen nieuwere cao gevonden, onderhandelingen voor een cao vanaf 1-4-2026 niet bekend Salarisschalen per 1-1-2026 geven per functiegroep minimum, midpoint en maximum; hier als drie treden opgenomen 13e maanduitkering gelijk aan het maandinkomen van december (ca. 8,33%) Volcontinudienst: arbeidsduur 33,6 uur per week; dagdienst 40 uur Pensioen: werknemerspremie volgens bedrijfsreglement, percentage en franchise niet in de cao vermeld; niet opgenomen Variabele beloning bestaat maar maakt geen deel uit van het salaris; niet opgenomen",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/3331_01-01-2025%20tot%2001-04-2026_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      'D': [2992, 3361, 3730],
      'E': [3098, 3523, 3948],
      'F': [3234, 3720, 4206],
      'G': [3442, 4003, 4562],
      'H': [3744, 4397, 5050],
      'I': [4113, 4869, 5623],
      'J': [4549, 5417, 6286],
      'K': [5054, 6047, 7040],
      'L': [5704, 6854, 8001],
    },
  },
  vergoedingen: [],
};
