import type { Cao } from '../types.js';

/**
 * Aviko B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Aviko B.V.
 * https://www.cnv.nl/documents/6014/CAO_Aviko_tekst_2026-2027.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-04-20 (4weeks) uit de bron
 *   - Basistabel 1-1-2026 teruggerekend uit de tabel per 2026-04-20 (gedeeld door +3%)
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-04-20, 2027-04-26)
 *   - Bron is een 4-wekentabel, omgerekend naar maand (×13/12)
 *
 * Excluded: none stated
 */
export const caoAviko2026: Cao = {
  id: 'aviko',
  name: "Aviko B.V.",
  year: 2026,
  effectiveNote: "Cao 2026-04-20 t/m 2027-11-07; loontabel per 2026-04-20. Let op: Cao 20 april 2026 t/m 7 november 2027 (geaccepteerd eindbod april 2026, CNV en FNV); basissalarissen en salaristabel +3% per periode 5 2026 (20-4-2026) en +2% per periode 5 2027 (26-4-2027; CNV noemt 19-4-2027). Salaristabel per 20-4-2026 in bruto-periodebedragen (4 weken), excl. vakantiegeld, 14e periode en ploegentoeslag (USB/Berenschot-schalen 2 t/m 9). Alleen hele treden opgenomen; de tabel toont ook 'halve periodieken' die geen zelfstandige betekenis hebben. Lagere schalen beginnen bij een hogere trede. 14e periode: na periode 13 een extra betaling van 1/13 van het in het kalenderjaar uitbetaalde basissalaris (plus 1/13 van de ploegentoeslag); als 7,69% opgenomen. Normale arbeidsduur 40 uur per week (dagdienst); vierploegendienst 36 uur, vijfploegendienst 33,6 uur. Pensioen PGB (cijfers 2026): werknemersbijdrage 6,55% van de pensioengrondslag, AOW-franchise € 19.399, maximum pensioengevend salaris € 137.800.",
  sourceUrl: "https://www.cnv.nl/documents/6014/CAO_Aviko_tekst_2026-2027.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.07690000000000001,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      '2': [2575.97, 2663.92, 2751.87, 2842.8, 2931.18],
      '3': [2532.68, 2629.28, 2725.94, 2822.56, 2919.15, 3015.75, 3112.37],
      '4': [2545.13, 2650.52, 2755.96, 2861.38, 2966.76, 3072.2, 3171.11, 3282.98, 3388.38],
      '5': [2578.85, 2695.69, 2812.54, 2929.34, 3046.19, 3163, 3279.86, 3396.72, 3513.49, 3630.32],
      '6': [2629.12, 2754.15, 2879.16, 3004.16, 3129.19, 3254.22, 3379.25, 3504.27, 3629.28, 3754.31, 3879.32],
      '7': [2775.42, 2914.43, 3053.41, 3192.43, 3331.39, 3470.4, 3609.44, 3748.39, 3887.39, 4026.39, 4165.39, 4304.38],
      '8': [3082.43, 3237.23, 3392.03, 3546.89, 3701.7, 3856.5, 4011.32, 4166.07, 4320.9, 4475.72, 4630.55, 4785.37, 4945.43, 5110.9],
      '9': [3432.32, 3605.13, 3777.96, 3950.8, 4123.63, 4296.45, 4469.3, 4642.14, 4814.95, 4987.81, 5160.61, 5333.44, 5512.15, 5696.93],
    },
  },
  periods: [
    {
      from: '2026-04-20',
      note: "+3% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          '2': [2653.25, 2743.83, 2834.42, 2928.09, 3019.12],
          '3': [2608.66, 2708.16, 2807.72, 2907.23, 3006.73, 3106.22, 3205.75],
          '4': [2621.48, 2730.03, 2838.64, 2947.22, 3055.76, 3164.36, 3266.24, 3381.47, 3490.03],
          '5': [2656.21, 2776.56, 2896.92, 3017.22, 3137.57, 3257.89, 3378.26, 3498.63, 3618.9, 3739.23],
          '6': [2708, 2836.77, 2965.54, 3094.28, 3223.07, 3351.84, 3480.63, 3609.4, 3738.16, 3866.94, 3995.7],
          '7': [2858.68, 3001.86, 3145.01, 3288.2, 3431.33, 3574.51, 3717.72, 3860.84, 4004.01, 4147.18, 4290.35, 4433.51],
          '8': [3174.9, 3334.35, 3493.79, 3653.29, 3812.75, 3972.19, 4131.66, 4291.05, 4450.53, 4609.99, 4769.46, 4928.93, 5093.79, 5264.23],
          '9': [3535.29, 3713.29, 3891.3, 4069.33, 4247.34, 4425.34, 4603.38, 4781.4, 4959.4, 5137.45, 5315.43, 5493.44, 5677.51, 5867.84],
        },
      },
    },
    {
      from: '2027-04-26',
      note: "+2% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          '2': [2706.31, 2798.71, 2891.11, 2986.65, 3079.5],
          '3': [2660.83, 2762.32, 2863.87, 2965.38, 3066.86, 3168.34, 3269.86],
          '4': [2673.91, 2784.63, 2895.41, 3006.16, 3116.87, 3227.65, 3331.56, 3449.1, 3559.83],
          '5': [2709.34, 2832.09, 2954.86, 3077.57, 3200.32, 3323.04, 3445.82, 3568.6, 3691.27, 3814.02],
          '6': [2762.16, 2893.51, 3024.85, 3156.17, 3287.53, 3418.88, 3550.24, 3681.58, 3812.92, 3944.28, 4075.62],
          '7': [2915.85, 3061.9, 3207.91, 3353.96, 3499.95, 3646, 3792.07, 3938.05, 4084.09, 4230.13, 4376.15, 4522.18],
          '8': [3238.4, 3401.04, 3563.67, 3726.36, 3889, 4051.64, 4214.29, 4376.87, 4539.54, 4702.19, 4864.85, 5027.51, 5195.67, 5369.52],
          '9': [3605.99, 3787.55, 3969.13, 4150.71, 4332.29, 4513.85, 4695.44, 4877.03, 5058.59, 5240.2, 5421.74, 5603.31, 5791.06, 5985.2],
        },
      },
    },
  ],
  vergoedingen: [],
};
