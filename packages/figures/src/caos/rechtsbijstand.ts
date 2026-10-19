import type { Cao } from '../types.js';

/**
 * Cao Rechtsbijstand 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Rechtsbijstand
 * https://cao-kijker.awvn.nl/bestanden/1438_01-01-2026%20tot%2001-01-2027_akkoord.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2025-01-01 (month) uit de bron
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-07-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoRechtsbijstand2026: Cao = {
  id: 'rechtsbijstand',
  name: "Cao Rechtsbijstand",
  year: 2026,
  effectiveNote: "Cao 2026-01-01 t/m 2026-12-31; loontabel per 2025-01-01. Let op: Cao Rechtsbijstand 2026 (o.a. Juridisch Loket en Raad voor Rechtsbijstand, FNV); loonafspraak volgens eindbod werkgevers van 16-6-2026, dat het loonakkoord van de Rijksoverheid één op één volgt; of het eindbod is aanvaard is niet bevestigd Eenmalige bruto cao-uitkering met de salarisronde van augustus 2026 voor wie op 1-8-2026 in dienst is: max € 1.400 (t/m schaal D), € 1.200 (schaal E t/m I), € 1.000 (schaal J en hoger), bij 36 uur, naar rato Eindejaarsuitkering 8,3% van het jaarsalaris en de vakantietoeslag; vakantietoeslag 8% van de verdiende maandinkomens (juni t/m mei), beide ook maandelijks uit te betalen Pensioen bij PFZW (indien van toepassing); premieverdeling 1/3 werknemer en 2/3 werkgever, percentage niet vermeld Salaristabel per 1-1-2025 (2024 + 5%) uit de cao 2025 (https://cao-kijker.awvn.nl/bestanden/1438_01-01-2025%20tot%2001-01-2026_cao.pdf); gescande tabel, gecontroleerd tegen de uurlonentabel (maandsalaris / 156). Groep A heeft geen bedragen",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/1438_01-01-2026%20tot%2001-01-2027_akkoord.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.083,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 36,
    schalen: {
      'B': [2432, 2523, 2611, 2695, 2780, 2864, 2952, 3037, 3125],
      'C': [2536, 2626, 2715, 2807, 2898, 2985, 3075, 3167, 3259],
      'D': [2582, 2675, 2772, 2864, 2957, 3059, 3155, 3250, 3350, 3447],
      'E': [2752, 2851, 2954, 3063, 3159, 3268, 3366, 3471, 3578, 3679],
      'F': [2946, 3058, 3166, 3280, 3392, 3500, 3611, 3721, 3838, 3948],
      'G': [3173, 3291, 3413, 3536, 3654, 3777, 3897, 4017, 4139, 4260],
      'H': [3447, 3577, 3711, 3842, 3973, 4104, 4242, 4368, 4506, 4635],
      'I': [3846, 3992, 4140, 4290, 4438, 4591, 4740, 4888, 5033, 5192],
      'J': [4395, 4569, 4740, 4914, 5084, 5254, 5429, 5602, 5776, 5941],
      'K': [4989, 5195, 5396, 5601, 5812, 6005, 6203, 6404, 6602, 6802, 7006],
      'L': [5777, 6007, 6242, 6471, 6705, 6942, 7173, 7408, 7640, 7871, 8109],
      'M': [6539, 6806, 7072, 7342, 7608, 7875, 8142, 8408, 8676, 8944, 9212],
      'N': [7151, 7456, 7758, 8065, 8373, 8678, 8984, 9287, 9593, 9899, 10205, 10511],
      'O': [8022, 8360, 8711, 9054, 9398, 9742, 10088, 10432, 10777, 11118, 11465, 11809],
    },
  },
  periods: [
    {
      from: '2026-07-01',
      note: "+2,7% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 36,
        schalen: {
          'B': [2497.66, 2591.12, 2681.5, 2767.77, 2855.06, 2941.33, 3031.7, 3119, 3209.38],
          'C': [2604.47, 2696.9, 2788.31, 2882.79, 2976.25, 3065.6, 3158.03, 3252.51, 3346.99],
          'D': [2651.71, 2747.23, 2846.84, 2941.33, 3036.84, 3141.59, 3240.19, 3337.75, 3440.45, 3540.07],
          'E': [2826.3, 2927.98, 3033.76, 3145.7, 3244.29, 3356.24, 3456.88, 3564.72, 3674.61, 3778.33],
          'F': [3025.54, 3140.57, 3251.48, 3368.56, 3483.58, 3594.5, 3708.5, 3821.47, 3941.63, 4054.6],
          'G': [3258.67, 3379.86, 3505.15, 3631.47, 3752.66, 3878.98, 4002.22, 4125.46, 4250.75, 4375.02],
          'H': [3540.07, 3673.58, 3811.2, 3945.73, 4080.27, 4214.81, 4356.53, 4485.94, 4627.66, 4760.15],
          'I': [3949.84, 4099.78, 4251.78, 4405.83, 4557.83, 4714.96, 4867.98, 5019.98, 5168.89, 5332.18],
          'J': [4513.67, 4692.36, 4867.98, 5046.68, 5221.27, 5395.86, 5575.58, 5753.25, 5931.95, 6101.41],
          'K': [5123.7, 5335.27, 5541.69, 5752.23, 5968.92, 6167.14, 6370.48, 6576.91, 6780.25, 6985.65, 7195.16],
          'L': [5932.98, 6169.19, 6410.53, 6645.72, 6886.04, 7129.43, 7366.67, 7608.02, 7846.28, 8083.52, 8327.94],
          'M': [6715.55, 6989.76, 7262.94, 7540.23, 7813.42, 8087.63, 8361.83, 8635.02, 8910.25, 9185.49, 9460.72],
          'N': [7344.08, 7657.31, 7967.47, 8282.76, 8599.07, 8912.31, 9226.57, 9537.75, 9852.01, 10166.27, 10480.54, 10794.8],
          'O': [8238.59, 8585.72, 8946.2, 9298.46, 9651.75, 10005.03, 10360.38, 10713.66, 11067.98, 11418.19, 11774.56, 12127.84],
        },
      },
    },
  ],
  vergoedingen: [],
};
