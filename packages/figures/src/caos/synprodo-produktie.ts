import type { Cao } from '../types.js';

/**
 * Cao Synprodo Produktie B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Synprodo Produktie B.V.
 * https://www.fnv.nl/getmedia/25e76726-f6d0-41df-a1fd-5abc45c5eeef/95-synprodo-produktie-cao-01-04-2025-tm-31-03-2026-v15122025.pdf?ext=.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2025-04-01 (month) uit de bron
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoSynprodoProduktie2026: Cao = {
  id: 'synprodo-produktie',
  name: "Cao Synprodo Produktie B.V.",
  year: 2026,
  effectiveNote: "Cao 2025-04-01 t/m 2026-03-31; loontabel per 2025-04-01. Let op: Cao liep tot en met 31 maart 2026; een opvolgende cao is niet gevonden. Extra uitkering in december van 8 1/3% van de in het voorgaande kalenderjaar verdiende maandinkomens, alleen indien de bedrijfsresultaten het toelaten en bij een volledig jaar dienstverband. Vloer in de vakantietoeslag gelijk aan het maximum schaalbedrag van functiegroep III. Salaristabel per 1 april 2025 naar functiejaren (0 t/m 10); daarnaast een leeftijdsschaal voor jongeren. Ploegendiensten gemiddeld 40 of 36 uur per week afhankelijk van het rooster. Pensioen: premie ouderdomspensioen 1/3 werknemer en 2/3 werkgever; premiepercentage en uitvoerder niet in de cao vermeld.",
  sourceUrl: "https://www.fnv.nl/getmedia/25e76726-f6d0-41df-a1fd-5abc45c5eeef/95-synprodo-produktie-cao-01-04-2025-tm-31-03-2026-v15122025.pdf?ext=.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      'II': [2545.2, 2583, 2616.6, 2651.25, 2693.25, 2725.8],
      'III': [2608.2, 2643.9, 2686.95, 2722.65, 2760.45, 2800.35, 2836.05],
      'IV': [2678.55, 2713.2, 2755.2, 2795.1, 2831.85, 2874.9, 2913.75, 2954.7],
      'V': [2786.7, 2829.75, 2877, 2930.55, 2964.15, 3006.15, 3050.25, 3094.35],
      'VI': [2977.8, 3030.3, 3076.5, 3121.65, 3172.05, 3219.3, 3268.65, 3312.75, 3364.2],
      'VII': [3214.05, 3259.2, 3305.4, 3358.95, 3402, 3452.4, 3494.4, 3545.85, 3591, 3640.35],
      'VIII': [3471.3, 3515.4, 3558.45, 3606.75, 3649.8, 3688.65, 3730.65, 3784.2, 3826.2, 3872.4, 3916.5],
    },
  },
  vergoedingen: [],
};
