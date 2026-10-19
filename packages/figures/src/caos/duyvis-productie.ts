import type { Cao } from '../types.js';

/**
 * Cao Duyvis Productie B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Duyvis Productie B.V.
 * https://cao-kijker.awvn.nl/bestanden/2962_01-07-2025%20tot%2001-01-2027_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-01-01 (month) uit de bron
 *
 * Excluded: none stated
 */
export const caoDuyvisProductie2026: Cao = {
  id: 'duyvis-productie',
  name: "Cao Duyvis Productie B.V.",
  year: 2026,
  effectiveNote: "Cao 2025-07-01 t/m 2026-12-31; loontabel per 2026-01-01. Let op: Per 1-1-2026 ook een extra verhoging van het maandsalaris van 0,545% (in de tabelkop staat 0,0545%) als compensatie voor de verlaging van de eindejaarsuitkering naar 7,7%; niet als aparte verhoging opgenomen. Eindejaarsuitkering 7,7% van de in het kalenderjaar verdiende maandinkomens, in november. Groep 5 trede 10 (€ 3.754,40) is in de bron lager dan trede 9 (€ 3.757,73) en is weggelaten. Pensioen: Duyvis middelloonregeling bij het Nederlands Pensioenfonds, werknemersbijdrage 8% van de pensioengrondslag; franchise € 18.475 is het niveau 2025 (jaarlijks geïndexeerd met de AOW). Werknemers die per 31-12-2019 deelnamen krijgen t/m 2034 compensatie voor de verhoogde werknemersbijdrage. Aanloopschaal: 90% van trede 0.",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/2962_01-07-2025%20tot%2001-01-2027_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.077,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      '1': [2760.44, 2813.95, 2865.03, 2924.63, 2968.41, 3030.44, 3088.82, 3141.11, 3210.44],
      '2': [2840.71, 2903.95, 2955.03, 3010.98, 3073.01, 3128.95, 3187.33, 3250.57, 3313.81, 3378.27],
      '3': [2905.17, 2958.68, 3013.41, 3079.09, 3135.03, 3208, 3272.46, 3338.14, 3397.73, 3467.06],
      '4': [2962.33, 3021.93, 3080.3, 3141.11, 3221.38, 3299.22, 3386.79, 3459.76, 3529.08, 3598.41],
      '5': [3057.2, 3116.79, 3175.17, 3250.57, 3329.62, 3414.76, 3499.89, 3593.54, 3681.11, 3757.73],
      '6': [3193.41, 3259.09, 3321.11, 3413.54, 3510.84, 3611.78, 3710.3, 3824.62, 3928, 4002.19, 4078.81],
      '7b': [3436.65, 3509.62, 3570.43, 3672.59, 3766.24, 3865.97, 3973, 4073.94, 4184.62, 4273.4, 4348.8],
      '7c': [3524.22, 3592.32, 3666.51, 3758.94, 3853.81, 3955.97, 4063, 4172.45, 4283.13, 4364.61, 4453.4],
      '7d': [3613, 3678.68, 3748, 3844.08, 3946.24, 4048.4, 4156.64, 4277.05, 4382.86, 4464.34, 4550.69],
      '7e': [3690.84, 3766.24, 3836.78, 3937.73, 4038.67, 4146.91, 4253.94, 4364.61, 4476.51, 4567.72, 4660.15],
      '8b': [3748, 3825.84, 3895.16, 3993.67, 4110.43, 4216.24, 4322.05, 4440.02, 4550.69, 4671.1, 4763.53, 4853.53],
      '8c': [3855.03, 3931.65, 4009.48, 4118.94, 4223.53, 4326.91, 4448.53, 4559.21, 4685.69, 4807.31, 4905.83, 4998.26],
      '8d': [3969.35, 4042.32, 4125.02, 4229.62, 4335.43, 4454.61, 4568.94, 4692.99, 4814.61, 4942.31, 5038.39, 5138.12],
      '8e': [4071.51, 4155.43, 4230.83, 4348.8, 4455.83, 4572.59, 4700.29, 4818.26, 4945.96, 5076.09, 5174.61, 5280.42],
      '9b': [4408.4, 4530.02, 4644.34, 4773.26, 4897.31, 5017.72, 5150.28, 5291.36, 5421.5, 5527.31, 5637.98],
      '9c': [4584.75, 4705.15, 4835.29, 4955.69, 5079.74, 5220.82, 5353.39, 5496.9, 5644.06, 5747.44, 5864.19],
      '9d': [4758.66, 4881.5, 5009.2, 5141.77, 5274.34, 5415.41, 5554.06, 5698.79, 5849.6, 5965.14, 6081.89],
      '9e': [4927.72, 5060.28, 5196.5, 5324.2, 5466.5, 5613.66, 5755.95, 5907.98, 6061.22, 6173.11, 6297.16],
    },
  },
  vergoedingen: [],
};
