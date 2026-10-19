import type { Cao } from '../types.js';

/**
 * Cao OCI Nitrogen B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao OCI Nitrogen B.V.
 * https://www.unie.nl/wp-content/uploads/20260929-OCI-Eindbod-CAO-2026-2027.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2025-10-01 (month) uit de bron
 *   - Latere tabellen berekend uit de cao-verhogingen (2027-01-01)
 *
 * Excluded: none stated
 */
export const caoOciNitrogen2026: Cao = {
  id: 'oci-nitrogen',
  name: "Cao OCI Nitrogen B.V.",
  year: 2026,
  effectiveNote: "Cao 2026-07-01 t/m 2027-12-31; loontabel per 2025-10-01. Let op: Cao 1-7-2026 t/m 31-12-2027 is een eindbod van OCI Nitrogen (29 september 2026); ledenstemming bij De Unie liep tot 25 oktober 2026, uitslag nog niet bekend Eindbod: 1,5% per 1-1-2027; 2% als de EBITDA over 2026 ≥ € 130 mln; bij EBITDA 2026 tussen € 100 en € 130 mln eenmalig € 1.000 (fulltime, in dienst op 1-1-2027); afhankelijk van kostenbesparingen in 2027 maximaal 2% eenmalige uitkering Vorige cao (1-10-2025 t/m 30-6-2026): 0% loonsverhoging per 1-10-2025 Salarisschalen per 1 oktober 2025 met minimum, schaalmidden, maximum (100%) en extra uitloop (104%) als vier treden Jaaruitkering van 2 maal het maandinkomen per jaar (mei en november), waarin vakantiebijslag en eindejaarsuitkering zijn begrepen; hier als 8,33% vakantiegeld + 8,33% eindejaarsuitkering. Minimum € 6.857,95 per jaar (per 1-10-2025) Resultaatafhankelijke uitkering (RAU) afhankelijk van EBITDA Pensioenbijdrage werknemer 3,5% over maandinkomen en jaaruitkering, plus 4% extra over het deel boven € 84.192 per jaar (cao 2025-2026) Dagdienst gemiddeld 40 uur per week, continudienst 33,6 uur",
  sourceUrl: "https://www.unie.nl/wp-content/uploads/20260929-OCI-Eindbod-CAO-2026-2027.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.0833,
  eindejaarsuitkeringPct: 0.0833,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      'C32': [2617, 2804, 2990, 3110],
      'C33': [2731, 2926, 3120, 3245],
      'C34': [2915, 3142, 3369, 3504],
      'C35': [3208, 3479, 3749, 3899],
      'C36': [3578, 3908, 4238, 4408],
      'C37': [4006, 4418, 4829, 5022],
      'C38': [4485, 4999, 5512, 5732],
      'C39': [5071, 5708, 6344, 6598],
      'C40': [5729, 6519, 7308, 7600],
      'C41': [6474, 7449, 8424, 8761],
    },
  },
  periods: [
    {
      from: '2027-01-01',
      note: "+1,5% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          'C32': [2656.26, 2846.06, 3034.85, 3156.65],
          'C33': [2771.97, 2969.89, 3166.8, 3293.68],
          'C34': [2958.73, 3189.13, 3419.54, 3556.56],
          'C35': [3256.12, 3531.19, 3805.24, 3957.49],
          'C36': [3631.67, 3966.62, 4301.57, 4474.12],
          'C37': [4066.09, 4484.27, 4901.44, 5097.33],
          'C38': [4552.28, 5073.99, 5594.68, 5817.98],
          'C39': [5147.07, 5793.62, 6439.16, 6696.97],
          'C40': [5814.94, 6616.79, 7417.62, 7714],
          'C41': [6571.11, 7560.74, 8550.36, 8892.42],
        },
      },
    },
  ],
  vergoedingen: [],
};
