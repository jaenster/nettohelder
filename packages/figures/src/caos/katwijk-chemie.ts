import type { Cao } from '../types.js';

/**
 * Cao Katwijk Chemie B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Katwijk Chemie B.V.
 * https://www.cnv.nl/industrie/chemie-en-energie/cao-katwijk-chemie/nieuws/vernieuwd-eindbod-cao-katwijk-chemie-2026-07-14/
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2025-07-01 (4weeks) uit de bron
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-07-01)
 *   - Bron is een 4-wekentabel, omgerekend naar maand (×13/12)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoKatwijkChemie2026: Cao = {
  id: 'katwijk-chemie',
  name: "Cao Katwijk Chemie B.V.",
  year: 2026,
  effectiveNote: "Cao 2026-07-01 t/m 2027-06-30; loontabel per 2025-07-01. Let op: Cao 1-7-2026 tot 1-7-2027: verbeterd eindbod van 14-7-2026, door CNV-leden aangenomen (stemming 21-7-2026); 3,25% per 1-7-2026 met terugwerkende kracht Salarisschalen per periode van 4 weken (functiejarenschaal) per 1-7-2025 (incl. 3,8%); schalen per 1-7-2026 (+3,25%) niet gepubliceerd gevonden Eenmalige uitkering € 500 bruto (voltijd, naar rato), uiterlijk in september 2026 uitbetaald Vaste onregelmatigheidstoeslag van € 11,34 vervalt per cao 2026 en is verwerkt in de ploegentoeslag (3-ploegen 19,2%, 2-ploegen 14,4%) Vakantietoeslag 8% van het in het toeslagjaar verdiende inkomen, met een minimumbedrag (vloer) dat ook met 3,8% is verhoogd Normale arbeidsduur 40 uur per week Geen eindejaarsuitkering in de cao gevonden Pensioenregeling bestaat, maar premie en werknemersbijdrage staan niet in de cao",
  sourceUrl: "https://www.cnv.nl/industrie/chemie-en-energie/cao-katwijk-chemie/nieuws/vernieuwd-eindbod-cao-katwijk-chemie-2026-07-14/",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      'A': [2774.42, 2827.5, 2877.33],
      'B': [2930.42, 2982.42, 3035.5, 3086.42, 3138.42],
      'C': [3097.25, 3154.67, 3209.92, 3266.25, 3323.67],
      'D': [3289, 3350.75, 3413.58, 3474.25, 3540.33, 3598.83],
      'E': [3482.92, 3549, 3611.83, 3679, 3741.83, 3807.92],
      'F': [3675.75, 3746.17, 3816.58, 3883.75, 3953.08, 4024.58],
    },
  },
  periods: [
    {
      from: '2026-07-01',
      note: "+3,25% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          'A': [2864.59, 2919.39, 2970.85],
          'B': [3025.66, 3079.35, 3134.15, 3186.73, 3240.42],
          'C': [3197.91, 3257.19, 3314.24, 3372.4, 3431.69],
          'D': [3395.89, 3459.65, 3524.52, 3587.16, 3655.39, 3715.8],
          'E': [3596.11, 3664.34, 3729.22, 3798.57, 3863.44, 3931.67],
          'F': [3795.21, 3867.92, 3940.62, 4009.97, 4081.56, 4155.38],
        },
      },
    },
  ],
  vergoedingen: [],
};
