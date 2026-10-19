import type { Cao } from '../types.js';

/**
 * Cao Rail Service Center Rotterdam B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Rail Service Center Rotterdam B.V.
 * https://cao-kijker.awvn.nl/bestanden/1121_01-01-2025%20tot%2001-01-2027_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2025-01-01 (month) uit de bron
 *   - Basistabel 1-1-2026: tabel per 2025-01-01 verhoogd met +2% per 2026-01-01
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoRailServiceCenterRotterdam2026: Cao = {
  id: 'rail-service-center-rotterdam',
  name: "Cao Rail Service Center Rotterdam B.V.",
  year: 2026,
  effectiveNote: "Cao 2025-01-01 t/m 2026-12-31; loontabel per 2025-01-01. Let op: Per 1 januari 2025 en 1 januari 2026: APC (prijscompensatie) + 2%; bij negatieve APC alleen 2%. De APC is niet opgenomen Vakantietoeslag is één bruto basismaandsalaris plus vaste onregelmatigheidstoeslag (circa 8,33%) Novemberuitkering: jaarlijks € 900 bruto bij fulltime (32 uur), na minimaal één jaar dienst; wordt zoveel mogelijk netto uitbetaald Normale arbeidsduur gemiddeld 32 uur per week Pensioenpremie niet opgenomen Salaristabel per 1-1-2025 (incl. APC 2,58% + 2%); per 1-1-2026 volgt APC + 2%. In de bron staat bij groep 4 trede k '42.87', gelezen als € 4.287",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/1121_01-01-2025%20tot%2001-01-2027_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.0833,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 32,
    schalen: {
      '1': [2333.76, 2552.04, 2771.34, 2993.7, 3102.84, 3214.02, 3325.2, 3435.36, 3544.5, 3655.68],
      '2': [2475.54, 2700.96, 2927.4, 3154.86, 3266.04, 3379.26, 3497.58, 3612.84, 3729.12, 3845.4, 3960.66, 4075.92],
      '3': [2620.38, 2857.02, 3094.68, 3331.32, 3450.66, 3568.98, 3687.3, 3805.62, 3924.96, 4043.28, 4165.68, 4286.04],
      '4': [2771.34, 3015.12, 3255.84, 3503.7, 3629.16, 3753.6, 3877.02, 4000.44, 4123.86, 4247.28, 4372.74, 4496.16],
      '5': [2854.98, 3097.74, 3342.54, 3591.42, 3714.84, 3839.28, 3963.72, 4087.14, 4210.56, 4333.98, 4457.4, 4581.84, 4646.1, 4705.26],
      '6': [2937.6, 3181.38, 3430.26, 3678.12, 3800.52, 3924.96, 4049.4, 4172.82, 4296.24, 4419.66, 4544.1, 4668.54, 4791.96, 4915.38, 5040.84],
      '7': [3359.88, 3606.72, 3859.68, 3986.16, 4111.62, 4240.14, 4368.66, 4493.1, 4620.6, 4746.06, 4873.56, 4999.02, 5128.56, 5254.02, 5381.52],
      '4A': [2822.34, 3067.14, 3306.84, 3556.74, 3682.2, 3805.62, 3928.02, 4053.48, 4175.88, 4301.34, 4423.74, 4548.18],
      '4B': [2877.42, 3119.16, 3361.92, 3609.78, 3735.24, 3857.64, 3982.08, 4104.48, 4227.9, 4352.34, 4475.76, 4602.24],
      '4C': [2928.42, 3171.18, 3412.92, 3662.82, 3786.24, 3910.68, 4033.08, 4157.52, 4282.98, 4406.4, 4529.82, 4654.26],
    },
  },
  vergoedingen: [],
};
