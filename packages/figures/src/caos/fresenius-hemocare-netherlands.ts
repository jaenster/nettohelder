import type { Cao } from '../types.js';

/**
 * Cao Fresenius HemoCare Netherlands B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Fresenius HemoCare Netherlands B.V.
 * https://cao-kijker.awvn.nl/bestanden/0096_01-04-2026%20tot%2001-04-2027_akkoord.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2025-04-01 (month) uit de bron
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-04-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoFreseniusHemocareNetherlands2026: Cao = {
  id: 'fresenius-hemocare-netherlands',
  name: "Cao Fresenius HemoCare Netherlands B.V.",
  year: 2026,
  effectiveNote: "Cao 2026-04-01 t/m 2027-03-31; loontabel per 2025-04-01. Let op: Cao 2026-2027 betreft een geaccepteerd eindbod (11-3-2026): 3% per 1-4-2026, plus RVU-regeling voor zwaar werk (nachtarbeid) Bruto voltijdnorm 40 uur per week; netto arbeidsduur 1735,5 uur per jaar (33,26 uur per week) door 12 roostervrije dagen Eindejaarsuitkering 3% over 12 maal het maandsalaris plus inconveniëntietoeslag, vakantiegeld en vaste toeslagen Eenmalige uitkering van € 250 bruto in juni 2025 voor werknemers in dienst op 1-6-2025, naar rato dienstverband Salarisschalen per 1-4-2025 (incl. 4%) uit bijlage 2 van de cao 2025-2026 (periodieken 2 t/m 14, groep A is vervallen); de schalen per 1-4-2026 (+3%) zijn niet gepubliceerd gevonden Pensioen bij PGB (voorwaardelijke middelloonregeling, franchise € 19.167 per 2024); werknemer betaalt 32% van de totale premie, het premiepercentage van de werknemer is niet in de cao vermeld",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/0096_01-04-2026%20tot%2001-04-2027_akkoord.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.03,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      'B': [2670, 2718, 2760, 2807, 2850, 2895, 2940, 2978],
      'C': [2760, 2813, 2864, 2917, 2967, 3019, 3072, 3122],
      'D': [2894, 2948, 3004, 3056, 3108, 3165, 3219, 3273, 3327],
      'E': [3063, 3120, 3179, 3233, 3293, 3353, 3410, 3464, 3523, 3583],
      'F': [3184, 3252, 3323, 3392, 3463, 3533, 3602, 3672, 3744, 3814, 3884],
      'G': [3474, 3556, 3637, 3714, 3795, 3872, 3954, 4034, 4108, 4188, 4267, 4345],
      'H': [3815, 3904, 3991, 4085, 4173, 4257, 4346, 4439, 4528, 4614, 4699, 4794, 4880],
      'I': [4257, 4367, 4474, 4583, 4693, 4801, 4908, 5016, 5124, 5235, 5342, 5449, 5558],
    },
  },
  periods: [
    {
      from: '2026-04-01',
      note: "+3% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          'B': [2750.1, 2799.54, 2842.8, 2891.21, 2935.5, 2981.85, 3028.2, 3067.34],
          'C': [2842.8, 2897.39, 2949.92, 3004.51, 3056.01, 3109.57, 3164.16, 3215.66],
          'D': [2980.82, 3036.44, 3094.12, 3147.68, 3201.24, 3259.95, 3315.57, 3371.19, 3426.81],
          'E': [3154.89, 3213.6, 3274.37, 3329.99, 3391.79, 3453.59, 3512.3, 3567.92, 3628.69, 3690.49],
          'F': [3279.52, 3349.56, 3422.69, 3493.76, 3566.89, 3638.99, 3710.06, 3782.16, 3856.32, 3928.42, 4000.52],
          'G': [3578.22, 3662.68, 3746.11, 3825.42, 3908.85, 3988.16, 4072.62, 4155.02, 4231.24, 4313.64, 4395.01, 4475.35],
          'H': [3929.45, 4021.12, 4110.73, 4207.55, 4298.19, 4384.71, 4476.38, 4572.17, 4663.84, 4752.42, 4839.97, 4937.82, 5026.4],
          'I': [4384.71, 4498.01, 4608.22, 4720.49, 4833.79, 4945.03, 5055.24, 5166.48, 5277.72, 5392.05, 5502.26, 5612.47, 5724.74],
        },
      },
    },
  ],
  vergoedingen: [],
};
