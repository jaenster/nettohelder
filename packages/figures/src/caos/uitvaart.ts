import type { Cao } from '../types.js';

/**
 * Cao Uitvaartbranche 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Uitvaartbranche
 * https://www.cnv.nl/documents/6082/260206_CAO_Uitvaartbranche_2627_def.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-01-01 (month) uit de bron
 *   - Latere tabellen berekend uit de cao-verhogingen (2027-01-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoUitvaart2026: Cao = {
  id: 'uitvaart',
  name: "Cao Uitvaartbranche",
  year: 2026,
  effectiveNote: "Cao 2026-01-01 t/m 2027-12-31; loontabel per 2026-01-01. Let op: Loontabel = maandsalarissen per 1-1-2026 (incl. 3,5%) bij een 40-urige werkweek; per 1-1-2027 nieuwe tabel (+3%) Bovenop de hoogste trede bestaat een extra trede ('bijzonder maximum', +2,5%) voor bovengemiddeld functioneren; niet opgenomen A-schalen: beschikbaarheid apart vergoed per uur (€ 2,73 vanaf 1-1-2026, € 2,81 vanaf 1-1-2027); B-schalen: beschikbaarheid in het salaris opgenomen Minimum cao-uurloon per 1-1-2026 € 15,50 bruto; treden daaronder zijn vervallen. Inschaling zonder ervaring max. 1 jaar in de aanloopschaal (één schaal lager) Volgens CNV stijgen de salarisschalen; of de verhoging ook op salarissen boven de schaal geldt is niet gecontroleerd Pensioen is een regeling per werkgever (geen bedrijfstakpensioenfonds); premie niet bekend Vakantietoeslag 8%, uiterlijk in juni Geen eenmalige uitkering of eindejaarsuitkering gevonden",
  sourceUrl: "https://www.cnv.nl/documents/6082/260206_CAO_Uitvaartbranche_2627_def.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      '1': [2712, 2815],
      '2': [2731, 2842, 2958, 3072, 3184],
      '6': [3252, 3394, 3537, 3676, 3819, 3961, 4101, 4247, 4385, 4527, 4671],
      '7': [3469, 3641, 3814, 3987, 4162, 4334, 4506, 4678, 4852, 5026, 5200],
      '8': [3683, 3874, 4063, 4254, 4443, 4632, 4823, 5014, 5203, 5393, 5582],
      '9': [3897, 4100, 4306, 4509, 4713, 4918, 5121, 5326, 5530, 5734, 5939, 6143],
      '3A': [2708, 2805, 2917, 3034, 3147],
      '3B': [2708, 2779, 2904, 3032, 3160, 3287, 3414, 3544],
      '4A': [2708, 2786, 2895, 2999, 3104, 3211, 3317, 3425, 3529],
      '4B': [2904, 3024, 3141, 3260, 3377, 3493, 3614, 3733, 3850, 3945],
      '5A': [2732, 2842, 2956, 3069, 3181, 3294, 3406, 3518, 3633, 3742],
      '5B': [3080, 3206, 3332, 3455, 3579, 3705, 3831, 3955, 4081, 4203],
    },
  },
  periods: [
    {
      from: '2027-01-01',
      note: "+3% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          '1': [2793.36, 2899.45],
          '2': [2812.93, 2927.26, 3046.74, 3164.16, 3279.52],
          '6': [3349.56, 3495.82, 3643.11, 3786.28, 3933.57, 4079.83, 4224.03, 4374.41, 4516.55, 4662.81, 4811.13],
          '7': [3573.07, 3750.23, 3928.42, 4106.61, 4286.86, 4464.02, 4641.18, 4818.34, 4997.56, 5176.78, 5356],
          '8': [3793.49, 3990.22, 4184.89, 4381.62, 4576.29, 4770.96, 4967.69, 5164.42, 5359.09, 5554.79, 5749.46],
          '9': [4013.91, 4223, 4435.18, 4644.27, 4854.39, 5065.54, 5274.63, 5485.78, 5695.9, 5906.02, 6117.17, 6327.29],
          '3A': [2789.24, 2889.15, 3004.51, 3125.02, 3241.41],
          '3B': [2789.24, 2862.37, 2991.12, 3122.96, 3254.8, 3385.61, 3516.42, 3650.32],
          '4A': [2789.24, 2869.58, 2981.85, 3088.97, 3197.12, 3307.33, 3416.51, 3527.75, 3634.87],
          '4B': [2991.12, 3114.72, 3235.23, 3357.8, 3478.31, 3597.79, 3722.42, 3844.99, 3965.5, 4063.35],
          '5A': [2813.96, 2927.26, 3044.68, 3161.07, 3276.43, 3392.82, 3508.18, 3623.54, 3741.99, 3854.26],
          '5B': [3172.4, 3302.18, 3431.96, 3558.65, 3686.37, 3816.15, 3945.93, 4073.65, 4203.43, 4329.09],
        },
      },
    },
  ],
  vergoedingen: [],
};
