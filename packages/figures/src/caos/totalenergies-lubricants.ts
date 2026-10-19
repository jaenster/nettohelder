import type { Cao } from '../types.js';

/**
 * Cao TotalEnergies Lubricants Plant Beverwijk B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao TotalEnergies Lubricants Plant Beverwijk B.V.
 * https://cao-kijker.awvn.nl/bestanden/0434_01-03-2026%20tot%2001-03-2027_akkoord.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2025-03-01 (month) uit de bron
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-03-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoTotalenergiesLubricants2026: Cao = {
  id: 'totalenergies-lubricants',
  name: "Cao TotalEnergies Lubricants Plant Beverwijk B.V.",
  year: 2026,
  effectiveNote: "Cao 2026-03-01 t/m 2027-02-28; loontabel per 2025-03-01. Let op: Cao 2026-2027 volgens geaccepteerd eindbod van 21 april 2026 (3% per 1-3-2026); salaristabel per 1-3-2025 uit de cao 2024-2026 Eenmalige bruto uitkering € 150 (fulltime) in de maand na totstandkoming van de cao (hier mei 2026) Groepen 3 t/m 8, treden 0 t/m max; aanloopschaal niet opgenomen Normale arbeidsduur dagdienst 39 uur (2-ploegendienst 40 uur) per week, met adv-dagen gemiddeld 38 uur Vakantietoeslag 8% met minimumbedrag (2025: € 2.281,09); 13e maand 8,33% van het jaarinkomen Collectieve bonus (max € 1.250 bruto per jaar) afhankelijk van doelstellingen, niet opgenomen Pensioen via STAP (pensioenkring TotalEnergies); premie en franchise niet in de cao vermeld Eenmalige uitkering € 150 bruto in de maand na het afsluiten van de cao; datum onbekend, niet in de berekening",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/0434_01-03-2026%20tot%2001-03-2027_akkoord.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 38,
    schalen: {
      '3': [2652.23, 2699.82, 2750.69, 2802.38, 2849.97, 2901.68, 2954.52, 3008.24, 3062.97],
      '4': [2735.1, 2787.6, 2842.59, 2895.14, 2949.26, 2999.33, 3053.45, 3110.02, 3167.73, 3226.54],
      '5': [2847.55, 2905.77, 2961.58, 3019.02, 3076.45, 3132.26, 3189.67, 3248.77, 3310.63, 3373.71, 3438.02],
      '6': [2996.02, 3068.25, 3124.05, 3184.77, 3248.77, 3307.85, 3375.16, 3435.89, 3497.41, 3565.82, 3635.63, 3706.85],
      '7': [3185.59, 3257.82, 3329.21, 3402.23, 3471.99, 3545.01, 3614.77, 3687.79, 3758.37, 3829.73, 3908.91, 3989.92, 4072.64],
      '8': [3442.45, 3526.15, 3609.83, 3693.54, 3774.78, 3857.66, 3940.54, 4023.41, 4109.58, 4193.28, 4275.34, 4369.4, 4465.39, 4563.53],
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
          '3': [2731.8, 2780.81, 2833.21, 2886.45, 2935.47, 2988.73, 3043.16, 3098.49, 3154.86],
          '4': [2817.15, 2871.23, 2927.87, 2981.99, 3037.74, 3089.31, 3145.05, 3203.32, 3262.76, 3323.34],
          '5': [2932.98, 2992.94, 3050.43, 3109.59, 3168.74, 3226.23, 3285.36, 3346.23, 3409.95, 3474.92, 3541.16],
          '6': [3085.9, 3160.3, 3217.77, 3280.31, 3346.23, 3407.09, 3476.41, 3538.97, 3602.33, 3672.79, 3744.7, 3818.06],
          '7': [3281.16, 3355.55, 3429.09, 3504.3, 3576.15, 3651.36, 3723.21, 3798.42, 3871.12, 3944.62, 4026.18, 4109.62, 4194.82],
          '8': [3545.72, 3631.93, 3718.12, 3804.35, 3888.02, 3973.39, 4058.76, 4144.11, 4232.87, 4319.08, 4403.6, 4500.48, 4599.35, 4700.44],
        },
      },
    },
  ],
  vergoedingen: [],
};
