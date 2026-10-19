import type { Cao } from '../types.js';

/**
 * Cao A.Vogel B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao A.Vogel B.V.
 * https://cao-kijker.awvn.nl/bestanden/2343_01-04-2025%20tot%2001-04-2027_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2025-04-01 (month) uit de bron
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-04-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoAVogel2026: Cao = {
  id: 'a-vogel',
  name: "Cao A.Vogel B.V.",
  year: 2026,
  effectiveNote: "Cao 2025-04-01 t/m 2027-03-31; loontabel per 2025-04-01. Let op: Cao 1-4-2025 t/m 31-3-2027 (eindvoorstel met CNV en FNV, 9-4-2025) Per 1-4-2026 structurele verhoging volgens CPI januari 2026 met een minimum van 3% (hier 3%); bij CPI boven 3% overleg over passende loonontwikkeling - werkelijke uitkomst niet gevonden Loongebouw per 1-4-2025: per schaal start-, midden- en eindsalaris per maand; hier als drie treden [start, midden, eind] Vakantietoeslag 8,33% van het jaarloon, uitbetaald in mei (uiterlijk juni) Pensioen: totale premie 26,40% (2023 en verder), werknemersbijdrage 8,71%; grondslag en franchise niet vermeld",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/2343_01-04-2025%20tot%2001-04-2027_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.0833,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 36,
    schalen: {
      '1': [2292.56, 2574.97, 2857.38],
      '2': [2362.36, 2710.81, 3059.26],
      '3': [2478.33, 2908.92, 3339.52],
      '4': [2619, 3066.24, 3513.47],
      '5': [2797.25, 3277.77, 3758.3],
      '6': [2991.61, 3524.21, 4056.82],
      '7': [3201, 3823.26, 4445.53],
      '8': [3415.76, 4245.27, 5074.78],
      '9': [3725.01, 4672.64, 5620.27],
      '10': [4092.25, 5170.88, 6249.52],
    },
  },
  periods: [
    {
      from: '2026-04-01',
      note: "+3% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 36,
        schalen: {
          '1': [2361.34, 2652.22, 2943.1],
          '2': [2433.23, 2792.13, 3151.04],
          '3': [2552.68, 2996.19, 3439.71],
          '4': [2697.57, 3158.23, 3618.87],
          '5': [2881.17, 3376.1, 3871.05],
          '6': [3081.36, 3629.94, 4178.52],
          '7': [3297.03, 3937.96, 4578.9],
          '8': [3518.23, 4372.63, 5227.02],
          '9': [3836.76, 4812.82, 5788.88],
          '10': [4215.02, 5326.01, 6437.01],
        },
      },
    },
  ],
  vergoedingen: [],
};
