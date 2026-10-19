import type { Cao } from '../types.js';

/**
 * Cao Etex Building Performance B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Etex Building Performance B.V.
 * https://cao-kijker.awvn.nl/bestanden/0221_01-06-2026%20tot%2001-06-2027_akkoord.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2025-06-01 (month) uit de bron
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-06-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoEtexBuildingPerformance2026: Cao = {
  id: 'etex-building-performance',
  name: "Cao Etex Building Performance B.V.",
  year: 2026,
  effectiveNote: "Cao 2026-06-01 t/m 2027-05-31; loontabel per 2025-06-01. Let op: Salaristabel is de functiejarenschaal per 1 juni 2025 (incl. 4,7%); per 1 juni 2026 +3,5% Daarnaast aanloopschaal (90% van functiejaar 0) en diensttijduitloop na 6 jaar op het maximum (bijv. groep I € 3.075, groep IX € 5.396 per 1 juni 2025) Normale arbeidsduur 40 uur per week, door adv gemiddeld 38 uur; 5-ploegendienst gemiddeld 33,6 uur Vakantietoeslag 8,33% van 12 x het maandinkomen volgens dienstrooster (mei), minimaal het schaalsalaris groep III bij 0 functiejaren Nieuwe werknemers vanaf 1 januari 2027 naar pensioenfonds PGB met eigen bijdrage 7% van de pensioengrondslag; franchise niet vermeld; bestaande werknemers houden de huidige regeling Generatiepact 80-90-90 vanaf 1 januari 2027",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/0221_01-06-2026%20tot%2001-06-2027_akkoord.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.0833,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      'I': [2829, 2862, 2895, 2936, 2969, 3004],
      'II': [2895, 2931, 2969, 3007, 3042, 3076, 3115],
      'III': [2973, 3012, 3052, 3090, 3129, 3171, 3211, 3259],
      'IV': [3059, 3110, 3156, 3205, 3262, 3307, 3367, 3417],
      'V': [3186, 3240, 3293, 3350, 3410, 3470, 3520, 3574, 3629],
      'VI': [3354, 3417, 3479, 3542, 3606, 3670, 3733, 3794, 3867, 3923],
      'VII': [3564, 3641, 3711, 3786, 3860, 3933, 4002, 4080, 4147, 4224, 4292],
      'VIII': [3823, 3912, 4000, 4090, 4179, 4270, 4357, 4454, 4542, 4632, 4719],
      'IX': [4146, 4246, 4343, 4440, 4542, 4639, 4741, 4836, 4935, 5034, 5129, 5230],
    },
  },
  periods: [
    {
      from: '2026-06-01',
      note: "+3,5% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          'I': [2928.02, 2962.17, 2996.33, 3038.76, 3072.92, 3109.14],
          'II': [2996.33, 3033.59, 3072.92, 3112.25, 3148.47, 3183.66, 3224.03],
          'III': [3077.06, 3117.42, 3158.82, 3198.15, 3238.52, 3281.99, 3323.39, 3373.07],
          'IV': [3166.07, 3218.85, 3266.46, 3317.18, 3376.17, 3422.75, 3484.85, 3536.6],
          'V': [3297.51, 3353.4, 3408.26, 3467.25, 3529.35, 3591.45, 3643.2, 3699.09, 3756.02],
          'VI': [3471.39, 3536.6, 3600.77, 3665.97, 3732.21, 3798.45, 3863.66, 3926.79, 4002.35, 4060.31],
          'VII': [3688.74, 3768.44, 3840.89, 3918.51, 3995.1, 4070.66, 4142.07, 4222.8, 4292.15, 4371.84, 4442.22],
          'VIII': [3956.81, 4048.92, 4140, 4233.15, 4325.27, 4419.45, 4509.5, 4609.89, 4700.97, 4794.12, 4884.17],
          'IX': [4291.11, 4394.61, 4495.01, 4595.4, 4700.97, 4801.37, 4906.94, 5005.26, 5107.73, 5210.19, 5308.52, 5413.05],
        },
      },
    },
  ],
  vergoedingen: [],
};
