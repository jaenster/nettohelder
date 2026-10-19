import type { Cao } from '../types.js';

/**
 * Cao Dr. Oetker Nederland B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Dr. Oetker Nederland B.V.
 * https://cao-kijker.awvn.nl/bestanden/1730_01-07-2026%20tot%2001-07-2028_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-07-01 (month) uit de bron
 *   - Basistabel 1-1-2026 teruggerekend uit de tabel per 2026-07-01 (gedeeld door +3%)
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-07-01, 2027-07-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoDrOetkerNederland2026: Cao = {
  id: 'dr-oetker-nederland',
  name: "Cao Dr. Oetker Nederland B.V.",
  year: 2026,
  effectiveNote: "Cao 2026-07-01 t/m 2028-06-30; loontabel per 2026-07-01. Let op: Eenmalige uitkeringen EUR 500 bruto in september 2026 en EUR 300 bruto in september 2027 (parttimers naar rato, naar rato van maanden in dienst); exacte betaaldatum niet genoemd, daarom niet in oneOffPayments Vakantietoeslag 8,33% van het jaarinkomen, minimaal EUR 2.738 (2026), EUR 2.820 (2027) en EUR 2.905 (2028) voor vakvolwassen voltijders Gratificatie 8,33% van het jaarinkomen, uitbetaald in november (als yearEndBonusPercentage) Salarisschalen per maand op basis van 38 uur; tabel per 1-7-2027 staat ook in bijlage II. Participatieschaal 100-120% WML niet opgenomen Pensioenregeling: werknemerspremie niet gevonden 4% per 1-7-2025 uit de vorige cao 2024-2026 (AWVN cao-kijker)",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/1730_01-07-2026%20tot%2001-07-2028_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.0833,
  eindejaarsuitkeringPct: 0.0833,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 38,
    schalen: {
      'II': [2676.7, 2724.27, 2765.05, 2808.74, 2855.34, 2899.03, 2941.75, 2987.38],
      'III': [2736.89, 2787.38, 2836.89, 2884.47, 2937.86, 2986.41, 3034.95, 3082.52],
      'IV': [2806.8, 2867.96, 2934.95, 2986.41, 3046.6, 3107.77, 3164.08, 3226.21],
      'V': [2899.03, 2960.19, 3020.39, 3079.61, 3137.86, 3200, 3262.14, 3321.36, 3381.55],
      'VI': [3023.3, 3087.38, 3159.22, 3223.3, 3293.2, 3360.19, 3428.16, 3494.17, 3561.17, 3632.04],
      'VII': [3199.03, 3273.79, 3350.49, 3427.18, 3502.91, 3576.7, 3655.34, 3733.01, 3805.83, 3881.55],
      'VIII': [3421.36, 3502.91, 3587.38, 3666.99, 3748.54, 3832.04, 3910.68, 3995.15, 4077.67, 4158.25, 4240.78],
      'IX': [3701.94, 3797.09, 3891.26, 3986.41, 4078.64, 4170.87, 4264.08, 4361.17, 4451.46, 4542.72, 4638.83, 4733.01],
      'X': [4052.43, 4161.17, 4270.87, 4380.58, 4490.29, 4599.03, 4707.77, 4815.53, 4925.24, 5035.92, 5144.66, 5253.4],
    },
  },
  periods: [
    {
      from: '2026-07-01',
      note: "+3% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 38,
        schalen: {
          'II': [2757, 2806, 2848, 2893, 2941, 2986, 3030, 3077],
          'III': [2819, 2871, 2922, 2971, 3026, 3076, 3126, 3175],
          'IV': [2891, 2954, 3023, 3076, 3138, 3201, 3259, 3323],
          'V': [2986, 3049, 3111, 3172, 3232, 3296, 3360, 3421, 3483],
          'VI': [3114, 3180, 3254, 3320, 3392, 3461, 3531, 3599, 3668, 3741],
          'VII': [3295, 3372, 3451, 3530, 3608, 3684, 3765, 3845, 3920, 3998],
          'VIII': [3524, 3608, 3695, 3777, 3861, 3947, 4028, 4115, 4200, 4283, 4368],
          'IX': [3813, 3911, 4008, 4106, 4201, 4296, 4392, 4492, 4585, 4679, 4778, 4875],
          'X': [4174, 4286, 4399, 4512, 4625, 4737, 4849, 4960, 5073, 5187, 5299, 5411],
        },
      },
    },
    {
      from: '2027-07-01',
      note: "+3% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 38,
        schalen: {
          'II': [2839.71, 2890.18, 2933.44, 2979.79, 3029.23, 3075.58, 3120.9, 3169.31],
          'III': [2903.57, 2957.13, 3009.66, 3060.13, 3116.78, 3168.28, 3219.78, 3270.25],
          'IV': [2977.73, 3042.62, 3113.69, 3168.28, 3232.14, 3297.03, 3356.77, 3422.69],
          'V': [3075.58, 3140.47, 3204.33, 3267.16, 3328.96, 3394.88, 3460.8, 3523.63, 3587.49],
          'VI': [3207.42, 3275.4, 3351.62, 3419.6, 3493.76, 3564.83, 3636.93, 3706.97, 3778.04, 3853.23],
          'VII': [3393.85, 3473.16, 3554.53, 3635.9, 3716.24, 3794.52, 3877.95, 3960.35, 4037.6, 4117.94],
          'VIII': [3629.72, 3716.24, 3805.85, 3890.31, 3976.83, 4065.41, 4148.84, 4238.45, 4326, 4411.49, 4499.04],
          'IX': [3927.39, 4028.33, 4128.24, 4229.18, 4327.03, 4424.88, 4523.76, 4626.76, 4722.55, 4819.37, 4921.34, 5021.25],
          'X': [4299.22, 4414.58, 4530.97, 4647.36, 4763.75, 4879.11, 4994.47, 5108.8, 5225.19, 5342.61, 5457.97, 5573.33],
        },
      },
    },
  ],
  vergoedingen: [],
};
