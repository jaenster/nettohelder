import type { Cao } from '../types.js';

/**
 * Cao Koninklijke Remia 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Koninklijke Remia
 * https://www.fnv.nl/getmedia/a072d5ab-c97b-481f-9eee-d9f8d6d09cca/2065-koninklijke-remia-cao-01-02-2026-tm-30-04-2027-v03082026.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-02-01 (month) uit de bron
 *   - Basistabel 1-1-2026 teruggerekend uit de tabel per 2026-02-01 (gedeeld door +3%)
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-02-01, 2027-01-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoRemia2026: Cao = {
  id: 'remia',
  name: "Cao Koninklijke Remia",
  year: 2026,
  effectiveNote: "Cao 2026-02-01 t/m 2027-04-30; loontabel per 2026-02-01. Let op: Salarisschalen A t/m I per 1-2-2026 (incl. 3%); de cao bevat ook de schalen per 1-1-2027 (incl. 1%) Normale arbeidsduur 40 uur per week met 92 uur adv per jaar (dag-, twee- en drieploegendienst) Vakantietoeslag 8% in mei, minimaal op basis van schaal A trede 1 Gratificatie (13e maand) 8,33% van het jaarsalaris voor medewerkers in dienst vanaf 1-12-2009; maandelijks of in december Pensioen via PGB (middelloon, opbouw 1,75%, tijdelijk ca. 1,564%); werkgever draagt minstens de helft van de premie; werknemerspremie niet gevonden WGA-hiaatpremie 0,453% (2026) ten laste van de werknemer",
  sourceUrl: "https://www.fnv.nl/getmedia/a072d5ab-c97b-481f-9eee-d9f8d6d09cca/2065-koninklijke-remia-cao-01-02-2026-tm-30-04-2027-v03082026.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      'A': [2691.93, 2717.88, 2745.68, 2772.55, 2803.13],
      'B': [2742.46, 2770.27, 2798.07, 2825.91, 2853.73, 2881.47, 2909.33, 2937.13],
      'C': [2827.6, 2862.97, 2898.38, 2933.8, 2969.17, 3004.57, 3039.98, 3075.33],
      'D': [2933.8, 2974.21, 3014.68, 3055.13, 3095.6, 3136.07, 3176.49, 3216.93],
      'E': [3077.05, 3122.55, 3168.04, 3213.58, 3259.09, 3304.6, 3350.13, 3395.64],
      'F': [3264.98, 3317.26, 3369.52, 3421.76, 3474.01, 3526.24, 3578.52, 3630.78, 3683.02],
      'G': [3505.18, 3573.47, 3641.73, 3709.95, 3778.25, 3846.54, 3914.79, 3983.08, 4051.32],
      'H': [3803.56, 3878.55, 3953.51, 4028.55, 4103.6, 4178.54, 4253.59, 4328.61, 4403.65, 4478.63],
      'I': [4154.13, 4245.18, 4336.16, 4427.18, 4518.25, 4609.25, 4700.28, 4791.3, 4882.32, 4973.35],
    },
  },
  periods: [
    {
      from: '2026-02-01',
      note: "+3% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          'A': [2772.69, 2799.42, 2828.05, 2855.73, 2887.22],
          'B': [2824.73, 2853.38, 2882.01, 2910.69, 2939.34, 2967.91, 2996.61, 3025.24],
          'C': [2912.43, 2948.86, 2985.33, 3021.81, 3058.25, 3094.71, 3131.18, 3167.59],
          'D': [3021.81, 3063.44, 3105.12, 3146.78, 3188.47, 3230.15, 3271.78, 3313.44],
          'E': [3169.36, 3216.23, 3263.08, 3309.99, 3356.86, 3403.74, 3450.63, 3497.51],
          'F': [3362.93, 3416.78, 3470.61, 3524.41, 3578.23, 3632.03, 3685.88, 3739.7, 3793.51],
          'G': [3610.34, 3680.67, 3750.98, 3821.25, 3891.6, 3961.94, 4032.23, 4102.57, 4172.86],
          'H': [3917.67, 3994.91, 4072.12, 4149.41, 4226.71, 4303.9, 4381.2, 4458.47, 4535.76, 4612.99],
          'I': [4278.75, 4372.54, 4466.24, 4560, 4653.8, 4747.53, 4841.29, 4935.04, 5028.79, 5122.55],
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
        hoursPerWeek: 40,
        schalen: {
          'A': [2800.42, 2827.41, 2856.33, 2884.29, 2916.09],
          'B': [2852.98, 2881.91, 2910.83, 2939.8, 2968.73, 2997.59, 3026.58, 3055.49],
          'C': [2941.55, 2978.35, 3015.18, 3052.03, 3088.83, 3125.66, 3162.49, 3199.27],
          'D': [3052.03, 3094.07, 3136.17, 3178.25, 3220.35, 3262.45, 3304.5, 3346.57],
          'E': [3201.05, 3248.39, 3295.71, 3343.09, 3390.43, 3437.78, 3485.14, 3532.49],
          'F': [3396.56, 3450.95, 3505.32, 3559.65, 3614.01, 3668.35, 3722.74, 3777.1, 3831.45],
          'G': [3646.44, 3717.48, 3788.49, 3859.46, 3930.52, 4001.56, 4072.55, 4143.6, 4214.59],
          'H': [3956.85, 4034.86, 4112.84, 4190.9, 4268.98, 4346.94, 4425.01, 4503.05, 4581.12, 4659.12],
          'I': [4321.54, 4416.27, 4510.9, 4605.6, 4700.34, 4795.01, 4889.7, 4984.39, 5079.08, 5173.78],
        },
      },
    },
  ],
  vergoedingen: [],
};
