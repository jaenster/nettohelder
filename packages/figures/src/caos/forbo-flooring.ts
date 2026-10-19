import type { Cao } from '../types.js';

/**
 * Cao Forbo Flooring B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Forbo Flooring B.V.
 * https://cao-kijker.awvn.nl/bestanden/1075_01-01-2026%20tot%2001-01-2027_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-01-01 (month) uit de bron
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoForboFlooring2026: Cao = {
  id: 'forbo-flooring',
  name: "Cao Forbo Flooring B.V.",
  year: 2026,
  effectiveNote: "Cao 2026-01-01 t/m 2026-12-31; loontabel per 2026-01-01. Let op: Cao 1-1-2026 t/m 31-12-2026; salarisschalen per 1-1-2026 inclusief 2,9% verhoging (per 1-1-2025: 3,5%) Functiejarenschaal B-1 voor 38 uur per week (dagdienst, 2- en 3-ploegendienst); aparte hulpschalen voor 4-ploegendienst (36 uur) en 5-ploegendienst (33,6 uur) niet opgenomen Minimaal € 15 bruto per uur Vakantietoeslag 8% van 12 x het maandinkomen in mei; daarnaast een 13e maand als winstdeling: in mei 1,5 x en in november 0,5 x het maandinkomen (inclusief de vakantietoeslag) Resultaatafhankelijke eenmalige uitkering, parameters vastgesteld met de OR Pensioen bij Stichting Pensioenfonds Forbo; werknemersbijdrage staat niet in de cao Werkgeversbijdrage ziektekosten € 15 bruto per maand",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/1075_01-01-2026%20tot%2001-01-2027_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 38,
    schalen: {
      'II': [2949.68, 2980.7, 3020.69, 3054.72, 3094.73, 3137.76, 3174.83, 3218.8],
      'III': [3003.71, 3042.7, 3080.72, 3125.78, 3163.79, 3213.8, 3252.82, 3296.84],
      'IV': [3071.76, 3118.74, 3158.76, 3204.79, 3247.8, 3293.82, 3333.86, 3381.87],
      'V': [3143.74, 3191.78, 3239.82, 3287.81, 3329.86, 3380.9, 3431.89, 3474.92],
      'VI': [3196.79, 3245.82, 3291.83, 3341.85, 3393.87, 3440.89, 3493.91, 3543.95],
      'VII': [3290.81, 3346.86, 3404.87, 3460.93, 3512.93, 3568.97, 3623.99, 3682.01],
      'VIII': [3432.92, 3493.91, 3554.95, 3607.01, 3675.01, 3731.02, 3788.05, 3846.09, 3909.11],
      'IX': [3622, 3693.03, 3769.06, 3840.09, 3915.12, 3990.16, 4063.21, 4132.23, 4207.25, 4283.28],
      'X': [3875.11, 3964.13, 4047.18, 4132.23, 4223.27, 4308.32, 4394.34, 4482.35, 4570.43, 4656.46],
      'XI': [4181.23, 4281.3, 4385.35, 4492.43, 4596.46, 4700.46, 4798.52, 4910.58, 5012.63, 5116.66],
      'XII': [4545.42, 4674.46, 4804.5, 4936.61, 5063.65, 5195.72, 5323.79, 5455.84, 5583.91, 5713.94, 5843.01],
    },
  },
  vergoedingen: [],
};
