import type { Cao } from '../types.js';

/**
 * Cao PGI Nonwovens B.V. (Magnera) 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao PGI Nonwovens B.V. (Magnera)
 * https://cao-kijker.awvn.nl/bestanden/1926_01-10-2025%20tot%2001-10-2026_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2025-10-01 (4weeks) uit de bron
 *   - Bron is een 4-wekentabel, omgerekend naar maand (×13/12)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoPgiNonwovens2026: Cao = {
  id: 'pgi-nonwovens',
  name: "Cao PGI Nonwovens B.V. (Magnera)",
  year: 2026,
  effectiveNote: "Cao 2025-10-01 t/m 2026-09-30; loontabel per 2025-10-01. Let op: Geaccepteerd eindbod van 26 november 2025, looptijd 1-10-2025 tot 1-10-2026: 2,2% structureel per 1-10-2025 Salarisschalen per periode van 4 weken, tabel Office/dagdienst/2- en 3-ploegendienst (groep 1 t/m 8, treden 0 t/m 12); aparte tabellen voor 5-ploegendienst en voor verkoop met 3 of 6 ATV-dagen Normale arbeidsduur 40 uur per week (3-ploegendienst 36 uur, 5-ploegendienst 33,6 uur) Vakantietoeslag 8%, minimaal 8% van het bruto minimumloon Pensioen: individuele beschikbare premieregeling; werknemersbijdrage 1,8% van de pensioengrondslag. Franchise wordt jaarlijks aangepast aan de AOW (2017: € 13.123); actuele franchise niet gevonden, daarom geen pensioenveld Pensioengevend salaris is 13 x het vaste maandsalaris plus vakantiegeld",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/1926_01-10-2025%20tot%2001-10-2026_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      '1': [2703.38, 2741.87, 2780.38, 2818.88, 2857.38, 2895.87, 2934.37, 2972.87],
      '2': [2776.76, 2816.76, 2856.77, 2896.78, 2936.78, 2976.77, 3016.78, 3056.78, 3096.78],
      '3': [2856.17, 2899.88, 2943.6, 2987.31, 3031, 3074.73, 3118.44, 3162.15, 3205.88, 3249.59],
      '4': [2971.66, 3017.91, 3064.18, 3110.41, 3156.68, 3202.92, 3249.19, 3295.42, 3341.69, 3387.94],
      '5': [3108.82, 3160.43, 3212.04, 3263.66, 3315.27, 3366.88, 3418.5, 3470.11, 3521.72, 3573.34, 3624.95],
      '6': [3292.9, 3353.59, 3414.3, 3475, 3535.71, 3596.4, 3657.12, 3717.81, 3778.52, 3839.21, 3899.92, 3960.61],
      '7': [3525.09, 3596.87, 3668.65, 3740.45, 3812.24, 3884.01, 3955.8, 4027.58, 4099.37, 4171.16, 4242.95, 4314.72],
      '8': [3817.45, 3909.39, 4001.31, 4093.26, 4185.2, 4277.13, 4369.06, 4461.01, 4552.94, 4644.88, 4736.81, 4828.75, 4920.69],
    },
  },
  vergoedingen: [],
};
