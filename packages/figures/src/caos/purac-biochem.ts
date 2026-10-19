import type { Cao } from '../types.js';

/**
 * Cao Corbion (Purac Biochem B.V.) 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Corbion (Purac Biochem B.V.)
 * https://cao-kijker.awvn.nl/bestanden/0364_01-04-2026%20tot%2001-04-2027_akkoord.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2025-01-01 (month) uit de bron
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-04-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoPuracBiochem2026: Cao = {
  id: 'purac-biochem',
  name: "Cao Corbion (Purac Biochem B.V.)",
  year: 2026,
  effectiveNote: "Cao 2026-04-01 t/m 2027-03-31; loontabel per 2025-01-01. Let op: Cao 2026-2027 volgens geaccepteerd hernieuwd eindbod van april 2026 (looptijd 1 jaar, 3% per 1-4-2026); salarisschalen uit de cao 2024-2026 (per 1-1-2025) Salarisschalen geven per groep een minimum, het einde van de eerste helft en een maximum; hier als drie treden opgenomen. Groei binnen de schaal via beoordelingsmatrix per 1 april Dagdienst en 2-/3-ploegendienst: 40-uurs rooster met 5% arbeidsduurverkorting (12 roostervrije dagen per jaar) Eindejaarsuitkering 1/12 van de genoten maandsalarissen (incl. ploegentoeslag en persoonlijke toeslag) Pensioen via BPL (basis- en excedent-middelloonregeling); werknemersbijdrage 2,33% (stand 2021) van de pensioengrondslag, franchise basisregeling € 15.816 (2024). Geen actuele cijfers voor 2026 gevonden, daarom niet opgenomen Participatieschaal (110%-120% minimumloon) niet opgenomen",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/0364_01-04-2026%20tot%2001-04-2027_akkoord.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      'C1': [2473.56, 2829.09, 3184.61],
      'C2': [2503.33, 2874.87, 3246.41],
      'C3': [2544.5, 2960.4, 3376.32],
      'C4': [2612.76, 3078.52, 3544.26],
      'C5': [2690.41, 3218.73, 3747.06],
      'C6': [2808.18, 3430.52, 4052.85],
      'C7': [2967.46, 3715.34, 4463.2],
      'C8': [3166.91, 4005.97, 4845.03],
      'C9': [3425.23, 4342.7, 5260.14],
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
          'C1': [2547.77, 2913.96, 3280.15],
          'C2': [2578.43, 2961.12, 3343.8],
          'C3': [2620.84, 3049.21, 3477.61],
          'C4': [2691.14, 3170.88, 3650.59],
          'C5': [2771.12, 3315.29, 3859.47],
          'C6': [2892.43, 3533.44, 4174.44],
          'C7': [3056.48, 3826.8, 4597.1],
          'C8': [3261.92, 4126.15, 4990.38],
          'C9': [3527.99, 4472.98, 5417.94],
        },
      },
    },
  ],
  vergoedingen: [],
};
