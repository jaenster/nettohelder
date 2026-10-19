import type { Cao } from '../types.js';

/**
 * Cao Almatis B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Almatis B.V.
 * https://cao-kijker.awvn.nl/bestanden/1030_01-07-2025%20tot%2001-01-2027_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-01-01 (month) uit de bron
 *
 * Excluded: none stated
 */
export const caoAlmatis2026: Cao = {
  id: 'almatis',
  name: "Cao Almatis B.V.",
  year: 2026,
  effectiveNote: "Cao 2025-07-01 t/m 2026-12-31; loontabel per 2026-01-01. Let op: Geaccepteerd (verbeterd) eindbod van 25 juni 2025; looptijd 1-7-2025 t/m 31-12-2026 Verhoging 3,5% per 1-1-2025 en eenmalige uitkering van € 700 bruto (voltijd) uit de vorige cao (1-7-2024 tot 1-7-2025); uitbetaaldatum van de eenmalige uitkering niet gevonden 13e maand ter grootte van één maandinkomen Pensioen PGB: eigen bijdrage werknemer 5% van de pensioengrondslag; pensioengevend salaris is 13,96 x maandsalaris; franchise en maximum zijn bedragen 2025 Normale arbeidsduur 40 uur per week (in ploegendienst gemiddeld minder gewerkte uren met ADV) Schaal: bijlage B, salarisschalen per 1 januari 2026 (maandbedragen, functiejarenschalen B t/m I). Treden zijn de gevulde functiejaren: B/C bij 0 t/m na 6, na 9, na 12, na 15; D t/m I bij 0 t/m na 8, na 11, na 14, na 17. Aanloopschalen en stageschaal A niet opgenomen.",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/1030_01-07-2025%20tot%2001-01-2027_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      'B': [3006.75, 3060.78, 3116.43, 3172.05, 3229.27, 3288.09, 3346.85, 3380.21, 3413.59, 3448.54],
      'C': [3076.71, 3132.31, 3189.54, 3246.74, 3305.52, 3364.34, 3424.75, 3459.69, 3493.04, 3528.03],
      'D': [3145.03, 3200.64, 3259.49, 3316.65, 3377.04, 3437.46, 3499.42, 3562.98, 3626.56, 3663.12, 3699.64, 3736.17],
      'E': [3229.27, 3288.09, 3346.85, 3407.25, 3469.25, 3531.19, 3594.76, 3658.34, 3725.11, 3761.64, 3799.8, 3837.92],
      'F': [3359.57, 3419.95, 3480.37, 3543.92, 3607.5, 3672.61, 3737.8, 3806.12, 3874.48, 3912.62, 3952.34, 3992.1],
      'G': [3458.11, 3521.69, 3583.64, 3648.82, 3713.97, 3780.71, 3849.04, 3918.98, 3988.87, 4028.63, 4069.94, 4109.66],
      'H': [3629.73, 3694.84, 3760.05, 3828.36, 3896.76, 3968.2, 4038.17, 4111.25, 4185.95, 4227.29, 4270.2, 4313.09],
      'I': [3956.41, 4027.38, 4098.45, 4172.93, 4247.46, 4325.36, 4401.61, 4481.27, 4562.7, 4607.74, 4654.51, 4701.27],
    },
  },
  vergoedingen: [],
};
