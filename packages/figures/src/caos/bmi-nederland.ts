import type { Cao } from '../types.js';

/**
 * Cao BMI 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao BMI
 * https://cao-kijker.awvn.nl/bestanden/4325_01-01-2026%20tot%2001-01-2027_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-01-01 (month) uit de bron
 *
 * Excluded: none stated
 */
export const caoBmiNederland2026: Cao = {
  id: 'bmi-nederland',
  name: "Cao BMI",
  year: 2026,
  effectiveNote: "Cao 2026-01-01 t/m 2026-12-31; loontabel per 2026-01-01. Let op: Cao BMI 2026 (BMI Nederland B.V. en BMI Productie Nederland B.V., v/h Monier en Icopal): per 1-1-2026 eerst 3% en daarna structureel € 20 bruto per maand (voltijd) op de schaalsalarissen Salarisschalen per 1-1-2026 (na verhoging): per functiegroep de 0-lijn plus periodieken (schaal 1 t/m 15). Aanloopschalen van 90% en 95% van de 0-lijn niet opgenomen Eindejaarsuitkering 8,33% van 12 maal het schaalsalaris incl. ploegentoeslag en persoonlijke toeslag (vanaf 2025) Pensioen bij PGB (middelloon): premie 2026 32,05%, werknemersbijdrage 10,68% van de pensioengrondslag. Franchise € 17.587 en maximum pensioengevend loon € 137.800 zoals vermeld in bijlage VIII; jaar van die bedragen niet expliciet vermeld (franchise wordt jaarlijks geïndexeerd). Pensioengevend salaris omvat ook vakantietoeslag Voormalige Icopal-medewerkers (in dienst per 30-6/1-7-2023) betalen max. 9,4%; het verschil wordt via een toeslag gecompenseerd. 'Beton-groep' heeft een aparte regeling (franchise € 18.475, bijdrage 10,4% in 2025) Vakantiebijslag 8% van het verdiende jaarinkomen",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/4325_01-01-2026%20tot%2001-01-2027_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      'I': [2876, 2896, 2926, 2955, 2984, 3014, 3044, 3073, 3102, 3131],
      'II': [2926, 2959, 2992, 3024, 3057, 3091, 3123, 3156, 3189, 3221, 3254],
      'III': [2987, 3024, 3060, 3096, 3134, 3170, 3207, 3243, 3280, 3316, 3353, 3389],
      'IV': [3072, 3110, 3148, 3186, 3225, 3263, 3302, 3341, 3379, 3417, 3455, 3494, 3532],
      'V': [3158, 3201, 3244, 3285, 3328, 3371, 3414, 3455, 3499, 3542, 3584, 3626, 3668, 3711],
      'VI': [3256, 3303, 3350, 3397, 3443, 3490, 3536, 3584, 3630, 3677, 3728, 3781, 3834, 3886, 3939],
      'VII': [3371, 3422, 3472, 3523, 3574, 3624, 3675, 3730, 3787, 3846, 3903, 3962, 4019, 4077, 4134, 4193],
    },
  },
  vergoedingen: [],
};
