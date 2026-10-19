import type { Cao } from '../types.js';

/**
 * Cao CurTec Nederland B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao CurTec Nederland B.V.
 * https://cao-kijker.awvn.nl/bestanden/0184_01-07-2026%20tot%2001-07-2027_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-07-01 (month) uit de bron
 *   - Basistabel 1-1-2026 teruggerekend uit de tabel per 2026-07-01 (gedeeld door +3%)
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-07-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoCurtecNederland2026: Cao = {
  id: 'curtec-nederland',
  name: "Cao CurTec Nederland B.V.",
  year: 2026,
  effectiveNote: "Cao 2026-07-01 t/m 2027-06-30; loontabel per 2026-07-01. Let op: Cao 2026-2027 afgesloten met De Unie (onderhandelingsresultaat 5 juni 2026): per 1-7-2026 3% structureel Eenmalige uitkering per 1-7-2026 van 0,7% van het jaarsalaris plus toeslagen (incl. ploegentoeslag, excl. vakantiegeld en eindejaarsuitkering); geen vast bedrag, daarom niet in oneOffPayments Salarisschalen per 1-7-2026: functiegroepen 21 t/m 31 met halve en hele periodieken (volgnummers 15 t/m 25), als treden opgenomen. Leeftijdsgebonden lonen (tot 21 jaar) niet opgenomen Roosters gemiddeld 38 uur per week (dagdienst, 2- en 3-ploegen), 4-ploegen 36 uur, 5-ploegen 34,4 uur; basiswerkweek in de definities 40 uur Eindejaarsuitkering 3% van het in het kalenderjaar verdiende maandinkomen, uitbetaald in november Pensioen: beschikbare premieregeling bij Zwitserleven PPI; werknemer betaalt 25% van de kosten tot een totale premie van 16% (en 100% daarboven). Volgens het berekeningsregister 5,5% van (jaarloon - franchise) x PT%; franchise niet vermeld, daarom niet opgenomen",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/0184_01-07-2026%20tot%2001-07-2027_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.03,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 38,
    schalen: {
      '21': [2490.29, 2509.71, 2529.13, 2552.43, 2573.79, 2598.06, 2620.39, 2644.66, 2667.96, 2692.23, 2715.53, 2739.81, 2764.08, 2788.35],
      '22': [2569.9, 2593.2, 2617.48, 2640.78, 2665.05, 2692.23, 2718.45, 2743.69, 2770.87, 2796.12, 2821.36, 2849.51, 2875.73, 2902.91, 2930.1, 2957.28],
      '23': [2691.26, 2714.56, 2739.81, 2766.99, 2793.2, 2821.36, 2849.51, 2874.76, 2900.97, 2929.13, 2959.22, 2987.38, 3015.53, 3044.66, 3074.76, 3104.85],
      '24': [2833.01, 2863.11, 2892.23, 2925.24, 2957.28, 2990.29, 3024.27, 3056.31, 3088.35, 3120.39, 3150.49, 3185.44, 3221.36, 3252.43, 3284.47, 3314.56, 3344.66],
      '25': [3048.54, 3088.35, 3128.16, 3168.93, 3207.77, 3246.6, 3285.44, 3325.24, 3366.99, 3401.94, 3439.81, 3479.61, 3518.45, 3559.22, 3600, 3637.86, 3678.64],
      '26': [3299.03, 3340.78, 3383.5, 3427.18, 3470.87, 3514.56, 3557.28, 3600, 3643.69, 3688.35, 3733.98, 3775.73, 3818.45, 3863.11, 3908.74, 3953.4, 3996.12, 4037.86, 4079.61],
      '27': [3487.38, 3537.86, 3591.26, 3641.75, 3695.15, 3746.6, 3800, 3852.43, 3906.8, 3958.25, 4012.62, 4063.11, 4114.56, 4166.02, 4217.48, 4269.9, 4323.3, 4374.76, 4425.24],
      '28': [3875.73, 3933.98, 3993.2, 4052.43, 4111.65, 4171.84, 4233.01, 4293.2, 4353.4, 4412.62, 4471.84, 4533.01, 4594.17, 4652.43, 4710.68, 4771.84, 4833.01, 4892.23, 4952.43],
      '29': [4202.91, 4271.84, 4339.81, 4405.83, 4472.82, 4539.81, 4606.8, 4671.84, 4737.86, 4805.83, 4873.79, 4941.75, 5008.74, 5075.73, 5143.69, 5209.71, 5277.67, 5345.63, 5415.53],
      '30': [4704.85, 4779.61, 4855.34, 4930.1, 5005.83, 5081.55, 5157.28, 5233.01, 5309.71, 5385.44, 5461.17, 5537.86, 5613.59, 5689.32, 5765.05, 5837.86, 5912.62, 5988.35, 6063.11],
      '31': [5614.56, 5690.29, 5766.02, 5842.72, 5919.42, 5994.17, 6068.93, 6145.63, 6222.33, 6298.06, 6373.79, 6446.6, 6521.36, 6597.09, 6672.82, 6748.54, 6824.27, 6900, 6975.73, 7050.49, 7127.18],
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
          '21': [2565, 2585, 2605, 2629, 2651, 2676, 2699, 2724, 2748, 2773, 2797, 2822, 2847, 2872],
          '22': [2647, 2671, 2696, 2720, 2745, 2773, 2800, 2826, 2854, 2880, 2906, 2935, 2962, 2990, 3018, 3046],
          '23': [2772, 2796, 2822, 2850, 2877, 2906, 2935, 2961, 2988, 3017, 3048, 3077, 3106, 3136, 3167, 3198],
          '24': [2918, 2949, 2979, 3013, 3046, 3080, 3115, 3148, 3181, 3214, 3245, 3281, 3318, 3350, 3383, 3414, 3445],
          '25': [3140, 3181, 3222, 3264, 3304, 3344, 3384, 3425, 3468, 3504, 3543, 3584, 3624, 3666, 3708, 3747, 3789],
          '26': [3398, 3441, 3485, 3530, 3575, 3620, 3664, 3708, 3753, 3799, 3846, 3889, 3933, 3979, 4026, 4072, 4116, 4159, 4202],
          '27': [3592, 3644, 3699, 3751, 3806, 3859, 3914, 3968, 4024, 4077, 4133, 4185, 4238, 4291, 4344, 4398, 4453, 4506, 4558],
          '28': [3992, 4052, 4113, 4174, 4235, 4297, 4360, 4422, 4484, 4545, 4606, 4669, 4732, 4792, 4852, 4915, 4978, 5039, 5101],
          '29': [4329, 4400, 4470, 4538, 4607, 4676, 4745, 4812, 4880, 4950, 5020, 5090, 5159, 5228, 5298, 5366, 5436, 5506, 5578],
          '30': [4846, 4923, 5001, 5078, 5156, 5234, 5312, 5390, 5469, 5547, 5625, 5704, 5782, 5860, 5938, 6013, 6090, 6168, 6245],
          '31': [5783, 5861, 5939, 6018, 6097, 6174, 6251, 6330, 6409, 6487, 6565, 6640, 6717, 6795, 6873, 6951, 7029, 7107, 7185, 7262, 7341],
        },
      },
    },
  ],
  vergoedingen: [],
};
