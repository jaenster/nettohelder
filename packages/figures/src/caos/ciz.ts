import type { Cao } from '../types.js';

/**
 * Cao CIZ (Centrum Indicatiestelling Zorg) 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao CIZ (Centrum Indicatiestelling Zorg)
 * https://www.cnv.nl/documents/5038/CIZ_cao_2025-2026.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-01-01 (month) uit de bron
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoCiz2026: Cao = {
  id: 'ciz',
  name: "Cao CIZ (Centrum Indicatiestelling Zorg)",
  year: 2026,
  effectiveNote: "Cao 2025-01-01 t/m 2026-12-31; loontabel per 2026-01-01. Let op: Salaristabel: functionele schalen 25 t/m 80 per 1-1-2026 (36 uur per week). Aanloopschalen en jeugdschalen niet opgenomen Eindejaarsuitkering 8% van het jaarsalaris inclusief vakantietoelage (8% x 1,08 = 8,64% van het jaarsalaris) Pensioen via ABP; CIZ verhaalt een deel van de premie op de werknemer, percentage en franchise niet in de cao vermeld Vitaliteitsbudget € 2.250 (2025) en € 2.500 (2026) per jaar Schalen 25 en 30 kennen twee uitloopperiodieken (na 14 en 16 jaar)",
  sourceUrl: "https://www.cnv.nl/documents/5038/CIZ_cao_2025-2026.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0864,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 36,
    schalen: {
      '25': [2296.95, 2416.82, 2484.3, 2560.29, 2639.59, 2729.06, 2818.47, 2901.19, 2993.99, 3069.97, 3161.11, 3243.78, 3331.57],
      '30': [2354.37, 2484.3, 2639.59, 2729.06, 2818.47, 2901.19, 2993.99, 3069.97, 3161.11, 3243.78, 3331.57, 3417.64, 3502.03],
      '35': [2484.3, 2639.59, 2818.47, 2901.19, 2993.99, 3069.97, 3161.11, 3243.78, 3331.57, 3417.64, 3502.03, 3588.09],
      '40': [2639.59, 2818.47, 2993.99, 3069.97, 3161.11, 3243.78, 3331.57, 3417.64, 3502.03, 3588.09, 3675.85, 3765.28, 3858.1],
      '45': [2993.99, 3161.11, 3331.57, 3417.64, 3502.03, 3588.09, 3675.85, 3765.28, 3858.1, 3954.34, 4038.7, 4133.21, 4226.05],
      '50': [3417.64, 3588.09, 3765.28, 3954.34, 4038.7, 4133.21, 4226.05, 4313.81, 4401.57, 4494.38, 4587.21, 4673.31, 4759.36, 4858.93],
      '55': [3858.1, 4038.7, 4226.05, 4401.57, 4587.21, 4673.31, 4759.36, 4858.93, 4960.21, 5059.78, 5149.25, 5343.32, 5530.64, 5697.72],
      '60': [4401.57, 4587.21, 4759.36, 4960.21, 5149.25, 5343.32, 5530.64, 5613.37, 5697.72, 5785.5, 5869.87, 6043.74, 6215.86, 6389.71],
      '65': [5149.25, 5343.32, 5530.64, 5697.72, 5869.87, 6043.74, 6215.86, 6389.71, 6563.54, 6647.92, 6733.99, 6823.44, 6909.53, 7083.36, 7257.2, 7363.52],
      '70': [6043.74, 6305.34, 6563.54, 6823.44, 7083.36, 7257.2, 7471.56, 7689.24, 7905.27, 8011.61, 8123, 8231.01, 8339.03],
      '75': [7083.36, 7363.52, 7689.24, 8011.61, 8339.03, 8556.74, 8782.89, 9024.23, 9268.97, 9387.1, 9510.31, 9652.08, 9795.52, 9935.6, 10079.07],
      '80': [8339.03, 8663.06, 9024.23, 9387.1, 9795.52, 10079.07, 10359.22, 10642.76, 10929.68, 11071.46, 11214.91, 11356.66, 11498.43, 11643.58, 11785.32],
    },
  },
  vergoedingen: [],
};
