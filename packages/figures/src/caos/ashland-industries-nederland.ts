import type { Cao } from '../types.js';

/**
 * Cao Ashland Industries Nederland B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Ashland Industries Nederland B.V.
 * https://www.cnv.nl/documents/6084/cao_Ashland_2025-2026.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2025-10-01 (month) uit de bron
 *   - Basistabel 1-1-2026: tabel per 2025-10-01 verhoogd met +3% per 2026-01-01
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoAshlandIndustriesNederland2026: Cao = {
  id: 'ashland-industries-nederland',
  name: "Cao Ashland Industries Nederland B.V.",
  year: 2026,
  effectiveNote: "Cao 2025-02-01 t/m 2026-12-31; loontabel per 2025-10-01. Let op: Per 1-1-2026 minimaal 3,0%; als het budget dat Ashland voor 2026 beschikbaar stelt hoger is, wordt het meerdere toegevoegd (in december 2025 bekend, uitkomst niet gevonden) Salaristabel: CAO Schaal B (functiejarenschaal) per oktober 2025, minimum t/m na 20 functiejaren; per 1-1-2026 wordt de tabel zo ingericht dat een extra functiejaar altijd een loonstijging geeft Vakantietoeslag 8% van het jaarinkomen (12 x maandinkomen), uitbetaald in mei; 13e maand 8,33% van het jaarinkomen, uitbetaald in december Normale arbeidsduur 40 uur per week (dagdienst, 2- en 3-ploegendienst, met ADV); 5-ploegendienst 33,6 uur Pensioen bij PGB (CDC-regeling) met werknemersbijdrage 6% van de bijdragepensioengrondslag (cijfers uit eerdere jaren); actuele franchise niet gevonden Nieuwe cao vanaf 1-1-2027 nog niet bekend",
  sourceUrl: "https://www.cnv.nl/documents/6084/cao_Ashland_2025-2026.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      'I': [2927.14, 2985.67, 3045.39, 3106.29, 3168.42, 3168.42, 3208.03, 3208.03, 3248.13, 3248.13, 3288.73, 3288.73, 3305.18, 3305.18, 3321.7, 3321.7, 3321.7, 3321.7, 3321.7, 3321.7, 3321.7],
      'II': [2980.15, 3039.75, 3100.55, 3162.55, 3225.81, 3225.81, 3266.13, 3266.13, 3306.96, 3306.96, 3348.29, 3348.29, 3365.03, 3365.03, 3381.86, 3381.86, 3381.86, 3381.86, 3381.86, 3381.86, 3381.86],
      'III': [3031.36, 3091.99, 3153.82, 3216.9, 3281.24, 3346.86, 3346.86, 3388.7, 3388.7, 3431.05, 3431.05, 3473.94, 3473.94, 3491.32, 3491.32, 3508.77, 3508.77, 3508.77, 3508.77, 3508.77, 3508.77],
      'IV': [3089.57, 3151.36, 3214.38, 3278.68, 3344.25, 3411.13, 3479.36, 3548.95, 3548.95, 3593.31, 3593.31, 3638.22, 3638.22, 3683.7, 3683.7, 3702.12, 3702.12, 3720.63, 3720.63, 3720.63, 3720.63],
      'V': [3167.75, 3231.11, 3295.73, 3361.64, 3428.88, 3497.46, 3567.41, 3638.75, 3711.53, 3757.92, 3804.89, 3804.89, 3852.46, 3852.46, 3900.61, 3900.61, 3949.37, 3949.37, 3969.12, 3969.12, 3988.96],
      'VI': [3269.37, 3334.76, 3401.46, 3469.48, 3538.87, 3609.66, 3681.85, 3755.48, 3830.59, 3878.48, 3926.96, 3926.96, 3976.05, 3976.05, 4025.74, 4025.74, 4076.07, 4076.07, 4096.44, 4096.44, 4116.93],
      'VII': [3405.71, 3473.82, 3543.29, 3614.16, 3686.44, 3760.17, 3835.38, 3912.08, 3990.32, 4040.21, 4090.71, 4090.71, 4141.84, 4141.84, 4193.61, 4193.61, 4246.03, 4246.03, 4267.26, 4267.26, 4288.6],
      'VIII': [3562.95, 3634.2, 3706.89, 3781.03, 3856.65, 3933.78, 4012.46, 4092.71, 4174.56, 4226.74, 4279.58, 4279.58, 4333.07, 4333.07, 4387.23, 4387.23, 4442.07, 4442.07, 4464.28, 4464.28, 4486.61],
      'IX': [3753.17, 3828.23, 3904.79, 3982.89, 4062.55, 4143.8, 4226.68, 4311.21, 4397.43, 4452.4, 4508.05, 4508.05, 4564.4, 4564.4, 4621.47, 4621.47, 4679.23, 4679.23, 4702.63, 4702.63, 4726.13],
      'X': [3983.37, 4063.04, 4144.3, 4227.19, 4311.73, 4397.97, 4485.93, 4575.64, 4667.16, 4725.5, 4784.57, 4784.57, 4844.37, 4844.37, 4904.92, 4904.92, 4966.24, 4966.24, 4991.07, 4991.07, 5016.03],
    },
  },
  vergoedingen: [],
};
