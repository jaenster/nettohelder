import type { Cao } from '../types.js';

/**
 * Cao voor de Papierindustrie (Papier Restgroep) 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao voor de Papierindustrie (Papier Restgroep)
 * https://www.cnv.nl/documents/5902/Cao_Papierindustrie_2026-2027.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2027-01-01 (month) uit de bron
 *   - Basistabel 1-1-2026 teruggerekend uit de tabel per 2027-01-01 (gedeeld door +1%, +1%)
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-07-01, 2027-01-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoPapierindustrie2026: Cao = {
  id: 'papierindustrie',
  name: "Cao voor de Papierindustrie (Papier Restgroep)",
  year: 2026,
  effectiveNote: "Cao 2026-04-01 t/m 2027-03-31; loontabel per 2027-01-01. Let op: Cao voor Coldenhove Paper, Papierfabriek Doetinchem en WEPA Nederland (eindbod werkgevers, door de leden aangenomen maart 2026); Coldenhove is in mei 2026 failliet gegaan Verhogingen zijn die voor Coldenhove en WEPA (1% per 1-7-2026 en 1% per 1-1-2027); Papierfabriek Doetinchem verhoogt in een keer 2% per 1-4-2026. De eindtabellen zijn gelijk Loonsverhogingen 2025 (cao 1-4-2025 t/m 31-3-2026) niet gevonden Loontabel = maandsalarissen per 1-1-2027 (Coldenhove/WEPA), gelijk aan de tabel per 1-4-2026 van Papierfabriek Doetinchem; groep 1 t/m 11 per functiejaar; bij een bedrag onder het WML geldt het WML Vakantietoeslag 8% met een minimum van € 3.029 per 1-4-2026 Eindejaarsuitkering 8 1/3% van 12 x maandinkomen bij een vol kalenderjaar in dienst Pensioen per onderneming geregeld (ondernemingspensioenregeling); werknemersbijdrage niet in de cao vermeld Loonsverhoging na 31-3-2027 nog niet bekend",
  sourceUrl: "https://www.cnv.nl/documents/5902/Cao_Papierindustrie_2026-2027.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 38,
    schalen: {
      '1': [2555.9, 2594.52, 2627.75, 2665.62],
      '2': [2594.52, 2627.75, 2665.62, 2709.51, 2753.36],
      '3': [2646.72, 2689.08, 2738.22, 2782.08, 2844.84, 2888.73],
      '4': [2709.51, 2762.44, 2811.63, 2865.32, 2925.12, 2976.49],
      '5': [2806.29, 2860.8, 2919.78, 2973.49, 3037.06, 3093.06, 3160.36],
      '6': [2891.81, 2952.36, 3014.37, 3077.1, 3138.46, 3201.2, 3264.02],
      '7': [2995.47, 3058.25, 3127.86, 3189.86, 3255.71, 3338.89, 3389.62, 3450.13],
      '8': [3107.4, 3176.26, 3239.79, 3311.66, 3372.95, 3441.83, 3518.95, 3578],
      '9': [3233.73, 3285.2, 3372.17, 3447.05, 3523.5, 3596.12, 3668.02, 3740.61, 3813.21],
      '10': [3431.15, 3512.89, 3585.54, 3662.7, 3740.61, 3819.29, 3894.18, 3973.64, 4050.02, 4132.5],
      '11': [3647.56, 3728.5, 3809.45, 3891.94, 3978.9, 4054.56, 4138.53, 4224.01, 4302.74, 4389.69, 4469.11],
    },
  },
  periods: [
    {
      from: '2026-07-01',
      note: "+1% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 38,
        schalen: {
          '1': [2581.46, 2620.47, 2654.03, 2692.28],
          '2': [2620.47, 2654.03, 2692.28, 2736.6, 2780.89],
          '3': [2673.19, 2715.97, 2765.6, 2809.9, 2873.29, 2917.61],
          '4': [2736.6, 2790.06, 2839.74, 2893.97, 2954.37, 3006.26],
          '5': [2834.36, 2889.41, 2948.98, 3003.23, 3067.43, 3123.99, 3191.96],
          '6': [2920.73, 2981.88, 3044.51, 3107.87, 3169.84, 3233.21, 3296.66],
          '7': [3025.43, 3088.83, 3159.14, 3221.76, 3288.27, 3372.28, 3423.51, 3484.63],
          '8': [3138.48, 3208.02, 3272.19, 3344.77, 3406.68, 3476.25, 3554.14, 3613.78],
          '9': [3266.07, 3318.05, 3405.89, 3481.52, 3558.73, 3632.08, 3704.7, 3778.02, 3851.35],
          '10': [3465.47, 3548.02, 3621.4, 3699.33, 3778.02, 3857.49, 3933.12, 4013.38, 4090.52, 4173.82],
          '11': [3684.04, 3765.78, 3847.54, 3930.86, 4018.69, 4095.11, 4179.91, 4266.25, 4345.77, 4433.58, 4513.8],
        },
      },
    },
    {
      from: '2027-01-01',
      note: "+1% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 38,
        schalen: {
          '1': [2607.27, 2646.67, 2680.57, 2719.2],
          '2': [2646.67, 2680.57, 2719.2, 2763.97, 2808.7],
          '3': [2699.92, 2743.13, 2793.26, 2838, 2902.02, 2946.79],
          '4': [2763.97, 2817.96, 2868.14, 2922.91, 2983.91, 3036.32],
          '5': [2862.7, 2918.3, 2978.47, 3033.26, 3098.1, 3155.23, 3223.88],
          '6': [2949.94, 3011.7, 3074.96, 3138.95, 3201.54, 3265.54, 3329.63],
          '7': [3055.68, 3119.72, 3190.73, 3253.98, 3321.15, 3406, 3457.75, 3519.48],
          '8': [3169.86, 3240.1, 3304.91, 3378.22, 3440.75, 3511.01, 3589.68, 3649.92],
          '9': [3298.73, 3351.23, 3439.95, 3516.34, 3594.32, 3668.4, 3741.75, 3815.8, 3889.86],
          '10': [3500.12, 3583.5, 3657.61, 3736.32, 3815.8, 3896.06, 3972.45, 4053.51, 4131.43, 4215.56],
          '11': [3720.88, 3803.44, 3886.02, 3970.17, 4058.88, 4136.06, 4221.71, 4308.91, 4389.23, 4477.92, 4558.94],
        },
      },
    },
  ],
  vergoedingen: [],
};
