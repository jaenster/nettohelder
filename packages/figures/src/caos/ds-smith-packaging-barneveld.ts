import type { Cao } from '../types.js';

/**
 * Cao DS Smith Packaging Barneveld B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao DS Smith Packaging Barneveld B.V.
 * https://cao-kijker.awvn.nl/bestanden/3006_01-10-2025%20tot%2001-10-2026_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2025-10-01 (month) uit de bron
 *
 * Excluded: none stated
 */
export const caoDsSmithPackagingBarneveld2026: Cao = {
  id: 'ds-smith-packaging-barneveld',
  name: "Cao DS Smith Packaging Barneveld B.V.",
  year: 2026,
  effectiveNote: "Cao 2025-10-01 t/m 2026-09-30; loontabel per 2025-10-01. Let op: Salarisschalen per maand m.i.v. 1-10-2025 (functiejaren 0-10); groep 1 begint bij functiejaar 2. Daarnaast een participatieschaal van 100-110% WML en 80%/90%-aanloopschalen (niet opgenomen) Normale arbeidsduur 40 uur per week; met 13 ATV-dagen (104 uur) verkort tot gemiddeld 38 uur Vakantietoeslag 8% van het jaarinkomen, uitbetaald in mei; vloer gekoppeld aan het maximum van schaal 1 Bonusregeling op basis van bedrijfsresultaat, maximaal 7% van het verdiende inkomen; niet meegenomen Pensioen bij Pensioenfonds PGB: werknemersbijdrage 8,33% van de pensioengrondslag plus 1,9% van het pensioengevend salaris boven EUR 50.939 (deze extra 1,9% kan de calculator niet uitdrukken). Franchise (fiscaal minimum) en maximum pensioengevend salaris zijn de in de cao genoemde 2025-bedragen Periodieken worden voortaan per 1 januari toegekend (was 1 mei) Vorige cao (1-10-2024 t/m 30-9-2025): 4% per 1-10-2024 (AWVN), valt voor 2025-01-01",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/3006_01-10-2025%20tot%2001-10-2026_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      '1': [2834, 2871, 2901, 2943, 2971],
      '2': [2826, 2865, 2907, 2947, 2991, 3034, 3076],
      '3': [2884, 2922, 2968, 3017, 3060, 3099, 3144, 3194],
      '4': [3028, 3074, 3120, 3166, 3206, 3253, 3297, 3350],
      '5': [3109, 3151, 3201, 3245, 3297, 3340, 3392, 3442, 3471],
      '6': [3238, 3288, 3335, 3384, 3434, 3482, 3530, 3582, 3626],
      '7': [3339, 3393, 3448, 3495, 3552, 3599, 3651, 3702, 3744],
      '8': [3432, 3482, 3533, 3589, 3640, 3691, 3747, 3796, 3847, 3901],
      '9': [3571, 3630, 3688, 3748, 3806, 3866, 3932, 3992, 4053, 4111],
      '10': [3758, 3822, 3875, 3933, 3992, 4050, 4110, 4169, 4226, 4287, 4344],
      '11': [3983, 4048, 4119, 4182, 4244, 4313, 4385, 4449, 4518, 4584, 4649],
      '12': [4244, 4307, 4364, 4422, 4483, 4546, 4602, 4662, 4723, 4778, 4844],
    },
  },
  vergoedingen: [],
};
