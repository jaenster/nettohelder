import type { Cao } from '../types.js';

/**
 * Cao IFF (International Flavors & Fragrances I.F.F. (Nederland) B.V.) 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao IFF (International Flavors & Fragrances I.F.F. (Nederland) B.V.)
 * https://www.cnv.nl/voeding/voeding/cao-iff/nieuws/nieuwe-cao-iff-is-een-feit-2026-07-09/
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-01-01 (month) uit de bron
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-07-01, 2027-01-01)
 *
 * Excluded: none stated
 */
export const caoIff2026: Cao = {
  id: 'iff',
  name: "Cao IFF (International Flavors & Fragrances I.F.F. (Nederland) B.V.)",
  year: 2026,
  effectiveNote: "Cao 2026-07-01 t/m 2027-06-30; loontabel per 2026-01-01. Let op: Cao 2026-2027 (1-7-2026 t/m 30-6-2027) volgens CNV: 2% per 1-7-2026 en 1,5% per 1-1-2027, plus een eenmalige reiskostenvergoeding van € 150 bruto (parttime naar rato); betaaldatum niet bekend. Salaristabel is die per 1-1-2026 uit de cao 2025-2026. De 13e maand is sinds 1-7-2024 opgenomen in het IKB-budget (basispercentage 14,15%, in 5-ploegendienst 9,5%, inclusief 13e maand en collectieve toeslag); daarom geen aparte eindejaarsuitkering opgenomen. Vakantietoeslag 8% met een vloer op het niveau van salarisgroep 3, twee treden. Pensioen: eigen bijdrage 7% van het pensioengevend salaris voor wie na 1-1-2006 in dienst kwam (3,5% voor wie al op 1-1-2006 in dienst was). Middelloon tot € 76.427, beschikbare premie tot € 137.800 (2025). In 2025 een eenmalige uitkering van 5% van het jaarsalaris (april 2025).",
  sourceUrl: "https://www.cnv.nl/voeding/voeding/cao-iff/nieuws/nieuwe-cao-iff-is-een-feit-2026-07-09/",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      '1': [2899, 2938, 2964, 2996, 3038, 3066],
      '2': [2959, 2981, 3023, 3057, 3094, 3132, 3169],
      '3': [3023, 3058, 3097, 3138, 3179, 3226, 3269, 3315],
      '4': [3129, 3169, 3218, 3261, 3313, 3363, 3409, 3453, 3513],
      '5': [3291, 3332, 3396, 3449, 3511, 3564, 3619, 3672, 3736, 3791],
      '6': [3514, 3586, 3666, 3744, 3817, 3899, 3976, 4059, 4144, 4220],
      '7': [3865, 3967, 4075, 4186, 4292, 4397, 4503, 4609, 4714, 4824, 4924],
    },
  },
  periods: [
    {
      from: '2026-07-01',
      note: "+2% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          '1': [2956.98, 2996.76, 3023.28, 3055.92, 3098.76, 3127.32],
          '2': [3018.18, 3040.62, 3083.46, 3118.14, 3155.88, 3194.64, 3232.38],
          '3': [3083.46, 3119.16, 3158.94, 3200.76, 3242.58, 3290.52, 3334.38, 3381.3],
          '4': [3191.58, 3232.38, 3282.36, 3326.22, 3379.26, 3430.26, 3477.18, 3522.06, 3583.26],
          '5': [3356.82, 3398.64, 3463.92, 3517.98, 3581.22, 3635.28, 3691.38, 3745.44, 3810.72, 3866.82],
          '6': [3584.28, 3657.72, 3739.32, 3818.88, 3893.34, 3976.98, 4055.52, 4140.18, 4226.88, 4304.4],
          '7': [3942.3, 4046.34, 4156.5, 4269.72, 4377.84, 4484.94, 4593.06, 4701.18, 4808.28, 4920.48, 5022.48],
        },
      },
    },
    {
      from: '2027-01-01',
      note: "+1,5% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          '1': [3001.33, 3041.71, 3068.63, 3101.76, 3145.24, 3174.23],
          '2': [3063.45, 3086.23, 3129.71, 3164.91, 3203.22, 3242.56, 3280.87],
          '3': [3129.71, 3165.95, 3206.32, 3248.77, 3291.22, 3339.88, 3384.4, 3432.02],
          '4': [3239.45, 3280.87, 3331.6, 3376.11, 3429.95, 3481.71, 3529.34, 3574.89, 3637.01],
          '5': [3407.17, 3449.62, 3515.88, 3570.75, 3634.94, 3689.81, 3746.75, 3801.62, 3867.88, 3924.82],
          '6': [3638.04, 3712.59, 3795.41, 3876.16, 3951.74, 4036.63, 4116.35, 4202.28, 4290.28, 4368.97],
          '7': [4001.43, 4107.04, 4218.85, 4333.77, 4443.51, 4552.21, 4661.96, 4771.7, 4880.4, 4994.29, 5097.82],
        },
      },
    },
  ],
  vergoedingen: [],
};
