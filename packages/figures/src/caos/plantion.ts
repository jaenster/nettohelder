import type { Cao } from '../types.js';

/**
 * Cao voor medewerkers in dienst van Plantion Holding B.V. en haar dochters 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao voor medewerkers in dienst van Plantion Holding B.V. en haar dochters
 * https://cao-kijker.awvn.nl/bestanden/3758_01-01-2025%20tot%2001-01-2027_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-01-01 (month) uit de bron
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoPlantion2026: Cao = {
  id: 'plantion',
  name: "Cao voor medewerkers in dienst van Plantion Holding B.V. en haar dochters",
  year: 2026,
  effectiveNote: "Cao 2025-01-01 t/m 2026-12-31; loontabel per 2026-01-01. Let op: Salarisschalen per 1-1-2026 (maandbedragen, periodiekenschaal); de cao vermeldt ook uurlonen Pensioen: beschikbare-premieregeling bij Zwitserleven, eigen bijdrage 6,4% van de pensioengrondslag ((12,96 x maandsalaris) - franchise). Franchise alleen voor 2024 vermeld (€ 17.545, jaarlijks aangepast), daarom niet opgenomen Individueel keuzebudget (IKB) vanaf 2025 met o.a. vakantiegeld en bovenwettelijk verlof als bron Jeugdschalen per 1-1-2025 afgeschaft",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/3758_01-01-2025%20tot%2001-01-2027_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 38,
    schalen: {
      'A': [2442.79, 2505.25, 2567.72, 2630.13, 2692.61, 2755.03, 2817.5],
      'B': [2460.24, 2522.81, 2585.45, 2648.04, 2710.64, 2773.22, 2835.83, 2898.13],
      'C': [2479.02, 2544.83, 2610.65, 2676.48, 2742.32, 2808.11, 2873.94, 2939.75, 3005.13],
      'D': [2534.15, 2606.4, 2678.67, 2750.97, 2823.22, 2895.46, 2967.75, 3040.04, 3112.27, 3183.98],
      'E': [2628.83, 2709.03, 2789.22, 2869.38, 2949.58, 3029.77, 3109.94, 3190.12, 3270.3, 3350.5, 3430.22],
      'F': [2766.75, 2855.58, 2944.45, 3033.28, 3122.09, 3210.92, 3299.77, 3388.62, 3477.44, 3566.28, 3655.11, 3743.95],
      'G': [2949.85, 3047.66, 3145.41, 3243.19, 3340.98, 3438.75, 3536.55, 3634.3, 3732.09, 3829.86, 3927.62, 4025.41, 4123.64],
      'H': [3288.04, 3394.49, 3500.88, 3607.34, 3713.75, 3820.17, 3926.59, 4033.02, 4139.45, 4245.88, 4352.32, 4458.74, 4564.84],
      'I': [3576.84, 3701.17, 3825.49, 3949.74, 4074.06, 4198.39, 4322.68, 4447.04, 4571.29, 4695.64, 4819.95, 4944.24, 5067.68],
      'J': [3919.83, 4062.33, 4204.87, 4347.32, 4489.79, 4632.3, 4774.79, 4917.29, 5059.76, 5202.24, 5344.75, 5487.23, 5630.57],
      'K': [4315.65, 4476.93, 4638.15, 4799.42, 4960.69, 5121.92, 5283.15, 5444.41, 5605.64, 5766.9, 5928.19, 6089.43, 6250.66],
      'L': [4897.65, 5081.91, 5266.15, 5450.43, 5634.7, 5818.97, 6003.22, 6187.51, 6371.77, 6556.02, 6740.29, 6924.58, 7109.69],
      'M': [5854.87, 6070.05, 6285.26, 6500.47, 6715.66, 6930.85, 7146.08, 7361.27, 7576.48, 7791.62, 8006.85, 8222.05, 8437.81],
    },
  },
  vergoedingen: [],
};
