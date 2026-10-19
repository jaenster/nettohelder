import type { Cao } from '../types.js';

/**
 * Cao Owens Corning Veil Netherlands B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Owens Corning Veil Netherlands B.V.
 * https://cao-kijker.awvn.nl/bestanden/0855_01-04-2026%20tot%2001-04-2027_akkoord.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2025-04-01 (month) uit de bron
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-04-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoOwensCorningVeilNederland2026: Cao = {
  id: 'owens-corning-veil-nederland',
  name: "Cao Owens Corning Veil Netherlands B.V.",
  year: 2026,
  effectiveNote: "Cao 2026-04-01 t/m 2027-03-31; loontabel per 2025-04-01. Let op: Eindbod van 22 april 2026, looptijd 1 april 2026 t/m 31 maart 2027 Eenmalige uitkering € 350 bruto in oktober 2026 Salarisschalen per functiejaar (-2 t/m 7, plus uitlooptreden) per 1 april 2025, afgeronde eurobedragen Vakantietoeslag 8,33% met een minimum gelijk aan 8,33% van het jaarsalaris van groep I met 7 functiejaren Pensioen: beschikbare premieregeling, werknemersbijdrage 8% van de pensioengrondslag (werkgever 16%); franchise is de minimale fiscale franchise, bedrag niet in de cao vermeld In augustus 2025 eenmalig € 350 netto (vorige cao)",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/0855_01-04-2026%20tot%2001-04-2027_akkoord.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.0833,
  eindejaarsuitkeringPct: 0.0833,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      'I': [2856, 2909, 2961, 3013, 3066, 3118, 3170, 3223, 3275, 3343, 3396],
      'II': [2999, 3051, 3103, 3164, 3225, 3287, 3348, 3409, 3470, 3538, 3599],
      'III': [3187, 3239, 3292, 3357, 3423, 3488, 3554, 3618, 3684, 3749, 3818, 3883],
      'IV': [3388, 3440, 3493, 3571, 3650, 3728, 3807, 3884, 3963, 4042, 4120, 4188, 4267],
      'V': [3616, 3668, 3720, 3812, 3904, 3996, 4088, 4180, 4272, 4364, 4455, 4548, 4617, 4708],
      'VI': [3978, 4030, 4083, 4195, 4309, 4421, 4534, 4647, 4760, 4873, 4986, 5098, 5212, 5281, 5393],
    },
  },
  periods: [
    {
      from: '2026-04-01',
      note: "+3,5% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          'I': [2955.96, 3010.82, 3064.64, 3118.46, 3173.31, 3227.13, 3280.95, 3335.81, 3389.63, 3460.01, 3514.86],
          'II': [3103.97, 3157.79, 3211.61, 3274.74, 3337.88, 3402.05, 3465.18, 3528.32, 3591.45, 3661.83, 3724.97],
          'III': [3298.55, 3352.37, 3407.22, 3474.5, 3542.81, 3610.08, 3678.39, 3744.63, 3812.94, 3880.22, 3951.63, 4018.91],
          'IV': [3506.58, 3560.4, 3615.26, 3695.99, 3777.75, 3858.48, 3940.25, 4019.94, 4101.71, 4183.47, 4264.2, 4334.58, 4416.35],
          'V': [3742.56, 3796.38, 3850.2, 3945.42, 4040.64, 4135.86, 4231.08, 4326.3, 4421.52, 4516.74, 4610.93, 4707.18, 4778.6, 4872.78],
          'VI': [4117.23, 4171.05, 4225.91, 4341.83, 4459.82, 4575.74, 4692.69, 4809.65, 4926.6, 5043.56, 5160.51, 5276.43, 5394.42, 5465.84, 5581.76],
        },
      },
    },
  ],
  vergoedingen: [],
};
