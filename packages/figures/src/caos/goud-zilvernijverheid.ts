import type { Cao } from '../types.js';

/**
 * Cao Goud- en Zilvernijverheid 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Goud- en Zilvernijverheid
 * https://www.cnv.nl/documents/5675/20260326_goud-en-zilvernijverheid_A.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-03-01 (month) uit de bron
 *   - Basistabel 1-1-2026 teruggerekend uit de tabel per 2026-03-01 (gedeeld door +3%)
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-03-01, 2027-03-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoGoudZilvernijverheid2026: Cao = {
  id: 'goud-zilvernijverheid',
  name: "Cao Goud- en Zilvernijverheid",
  year: 2026,
  effectiveNote: "Cao 2026-02-01 t/m 2028-01-31; loontabel per 2026-03-01. Let op: Cao valt onder de Vakraad Metaal en Techniek; loonafspraken gelijk aan Metaalbewerking (resultaat 2026-2028) Verhogingen 2025 (1-3-2025 € 100 bruto, 1-10-2025 3%) komen uit de vorige cao (1-4-2024 t/m 31-1-2026) Eenmalige uitkering € 132 bruto in november 2026 voor werknemers die op 1 november 2026 in dienst zijn Scale = maandtabel 21 jaar en ouder per 1-3-2026, functiejaren als treden; groep A bij 0 functiejaren is het WML (1-1-2026). Vierwekentabellen en jeugdlonen niet opgenomen Pensioen via PMT; werknemersdeel volgens cao: helft van niet-VPL-premie min afslag. Percentage, franchise en salarisgrens 2026 overgenomen van PMT-cijfers (zoals bij Metaalbewerking), niet in deze cao-tekst zelf vermeld Geen eindejaarsuitkering gevonden in de cao Pensioen waarschijnlijk PMT, maar premie en franchise zijn niet apart geverifieerd voor deze cao",
  sourceUrl: "https://www.cnv.nl/documents/5675/20260326_goud-en-zilvernijverheid_A.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 38,
    schalen: {
      'A': [2351.7, 2600.97, 2619.42, 2644.66],
      'B': [2669.9, 2747.57, 2770.87, 2790.29, 2808.74, 2836.89, 2862.14, 2888.35],
      'C': [2773.79, 2796.12, 2814.56, 2837.86, 2854.37, 2882.52, 2910.68, 2936.89],
      'D': [2829.13, 2854.37, 2886.41, 2908.74, 2940.78, 2964.08, 3011.65, 3052.43],
      'E': [2914.56, 2965.05, 3020.39, 3062.14, 3120.39, 3167.96, 3219.42, 3311.65],
      'F': [3054.37, 3122.33, 3184.47, 3250.49, 3313.59, 3378.64, 3443.69, 3544.66],
      'G': [3292.23, 3357.28, 3425.24, 3499.03, 3565.05, 3633.01, 3699.03, 3775.73],
      'H': [3557.28, 3630.1, 3698.06, 3776.7, 3852.43, 3923.3, 3993.2, 4066.02, 4139.81],
      'I': [3875.73, 3963.11, 4040.78, 4126.21, 4209.71, 4285.44, 4365.05, 4440.78, 4531.07, 4601.94],
      'J': [4264.08, 4348.54, 4434.95, 4531.07, 4610.68, 4697.09, 4787.38, 4876.7, 4965.05, 5047.57, 5137.86],
    },
  },
  periods: [
    {
      from: '2026-03-01',
      note: "+3% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 38,
        schalen: {
          'A': [2422.25, 2679, 2698, 2724],
          'B': [2750, 2830, 2854, 2874, 2893, 2922, 2948, 2975],
          'C': [2857, 2880, 2899, 2923, 2940, 2969, 2998, 3025],
          'D': [2914, 2940, 2973, 2996, 3029, 3053, 3102, 3144],
          'E': [3002, 3054, 3111, 3154, 3214, 3263, 3316, 3411],
          'F': [3146, 3216, 3280, 3348, 3413, 3480, 3547, 3651],
          'G': [3391, 3458, 3528, 3604, 3672, 3742, 3810, 3889],
          'H': [3664, 3739, 3809, 3890, 3968, 4041, 4113, 4188, 4264],
          'I': [3992, 4082, 4162, 4250, 4336, 4414, 4496, 4574, 4667, 4740],
          'J': [4392, 4479, 4568, 4667, 4749, 4838, 4931, 5023, 5114, 5199, 5292],
        },
      },
    },
    {
      from: '2027-03-01',
      note: "+€ 115/mnd collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 38,
        schalen: {
          'A': [2537.25, 2794, 2813, 2839],
          'B': [2865, 2945, 2969, 2989, 3008, 3037, 3063, 3090],
          'C': [2972, 2995, 3014, 3038, 3055, 3084, 3113, 3140],
          'D': [3029, 3055, 3088, 3111, 3144, 3168, 3217, 3259],
          'E': [3117, 3169, 3226, 3269, 3329, 3378, 3431, 3526],
          'F': [3261, 3331, 3395, 3463, 3528, 3595, 3662, 3766],
          'G': [3506, 3573, 3643, 3719, 3787, 3857, 3925, 4004],
          'H': [3779, 3854, 3924, 4005, 4083, 4156, 4228, 4303, 4379],
          'I': [4107, 4197, 4277, 4365, 4451, 4529, 4611, 4689, 4782, 4855],
          'J': [4507, 4594, 4683, 4782, 4864, 4953, 5046, 5138, 5229, 5314, 5407],
        },
      },
    },
  ],
  vergoedingen: [],
};
