import type { Cao } from '../types.js';

/**
 * Cao Orgelbouwbedrijf in Nederland 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Orgelbouwbedrijf in Nederland
 * https://www.fnv.nl/getmedia/d60751d1-487c-4af6-bc9c-aef8d99e989e/343-orgelbouwbedrijf-in-nederland-cao-01-01-2026-tm-31-12-2027-v16122025.pdf?ext=.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2027-01-01 (month) uit de bron
 *   - Basistabel 1-1-2026 teruggerekend uit de tabel per 2027-01-01 (gedeeld door +1,5%, +2%)
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-07-01, 2027-01-01)
 *
 * Excluded: none stated
 */
export const caoOrgelbouw2026: Cao = {
  id: 'orgelbouw',
  name: "Cao Orgelbouwbedrijf in Nederland",
  year: 2026,
  effectiveNote: "Cao 2026-01-01 t/m 2027-12-31; loontabel per 2027-01-01. Let op: Loonschalen per 1 januari 2027 (per maand); treden 0 t/m 7. Er bestaat ook een 4-wekentabel. Pensioenpremie Oak Pensioenfonds 2026: 26,3% van de pensioengrondslag, werkgever betaalt de helft; franchise en maximum zijn de 2026-bedragen. Pensioengevend loon omvat ook vakantiegeld, ploegentoeslag en overwerk van het vorige kalenderjaar. Verhoging van 2% per 1 januari 2025 komt uit de vorige cao (2024-2025), volgens CNV.",
  sourceUrl: "https://www.fnv.nl/getmedia/d60751d1-487c-4af6-bc9c-aef8d99e989e/343-orgelbouwbedrijf-in-nederland-cao-01-01-2026-tm-31-12-2027-v16122025.pdf?ext=.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      'I': [2561.97, 2561.97, 2612.79, 2712.26, 2788.86, 2878.91, 2966.28, 3061.7],
      'II': [2677.3, 2809.02, 3053.64, 3119.35, 3150.41, 3271.37, 3380.24, 3521.36],
      'III': [2952.83, 3079.17, 3200.14, 3326.47, 3448.77, 3571.07, 3694.74, 3815.7],
    },
  },
  periods: [
    {
      from: '2026-07-01',
      note: "+1,5% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          'I': [2600.4, 2600.4, 2651.98, 2752.94, 2830.7, 2922.1, 3010.77, 3107.63],
          'II': [2717.46, 2851.16, 3099.44, 3166.14, 3197.67, 3320.44, 3430.94, 3574.18],
          'III': [2997.12, 3125.35, 3248.14, 3376.36, 3500.5, 3624.64, 3750.16, 3872.93],
        },
      },
    },
    {
      from: '2027-01-01',
      note: "+2% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          'I': [2652.41, 2652.41, 2705.02, 2808, 2887.31, 2980.54, 3070.99, 3169.78],
          'II': [2771.81, 2908.18, 3161.43, 3229.46, 3261.62, 3386.85, 3499.56, 3645.66],
          'III': [3057.06, 3187.86, 3313.1, 3443.89, 3570.51, 3697.13, 3825.16, 3950.39],
        },
      },
    },
  ],
  vergoedingen: [],
};
