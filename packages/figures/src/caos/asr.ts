import type { Cao } from '../types.js';

/**
 * Cao a.s.r. Nederland (De Andere Cao) 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao a.s.r. Nederland (De Andere Cao)
 * https://www.fnv.nl/getmedia/1269b557-a7f1-4c28-88df-25d489452732/1955-asr-nederland-de-andere-cao-01-04-2025-tm-31-12-2026-v27032026.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-04-01 (month) uit de bron
 *   - Basistabel 1-1-2026 teruggerekend uit de tabel per 2026-04-01 (gedeeld door +3%)
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-04-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoAsr2026: Cao = {
  id: 'asr',
  name: "Cao a.s.r. Nederland (De Andere Cao)",
  year: 2026,
  effectiveNote: "Cao 2025-04-01 t/m 2026-12-31; loontabel per 2026-04-01. Let op: Cao loopt van 1-4-2025 tot 1-1-2027; geen afspraken voor 2027 gevonden Salarisschalen geven alleen minimum en maximum per schaal (opgenomen als twee treden), op basis van de standaard jaarurennorm van 1976 uur (gemiddeld 38 uur per week) Jaarlijkse vaste salarisverhoging per 1 januari van 3% van het maximum van de schaal (tot het maximum), los van functioneren Vaste 13e maand (maandelijks of in december uitbetaald), hier als 8,3333% eindejaarsuitkering opgenomen Eenmalige betaling € 1.500 bruto bij het salaris van januari 2026 voor medewerkers in dienst op 1-1-2026 (parttime naar rato) Pensioen: Het Andere Pensioen (beschikbare premieregeling bij a.s.r. Levensverzekeringen), premie 26% van de pensioengrondslag, eigen bijdrage werknemer 4,0% vanaf 1-1-2026, maximum pensioengevend salaris € 137.800; franchise niet gevonden, daarom niet in de berekening Schaal 19 t/m 24: vaste toeslag van 10,9% (19-21) of 16,2% (22-24) van het maandsalaris; buitendienst: toeslag 25% Huidige medewerkers krijgen vanaf 2026 een salariscompensatie voor het verschil tussen de oude leeftijdsafhankelijke premiestaffel en de vlakke premie van 26%",
  sourceUrl: "https://www.fnv.nl/getmedia/1269b557-a7f1-4c28-88df-25d489452732/1955-asr-nederland-de-andere-cao-01-04-2025-tm-31-12-2026-v27032026.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.08333299999999999,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 38,
    schalen: {
      '8': [2714.05, 2966.4],
      '9': [2765.55, 3113.69],
      '10': [2818.08, 3367.07],
      '11': [2870.61, 3674.01],
      '12': [2923.14, 4064.38],
      '13': [3236.26, 4513.46],
      '14': [3568.95, 5031.55],
      '15': [4000.52, 5722.68],
      '16': [4508.31, 6605.39],
      '17': [5346.73, 7901.13],
      '18': [6222.23, 9203.05],
      '19': [6901, 9981.73],
      '20': [8861.09, 12878.09],
      '21': [11194.04, 16339.92],
      '22': [12764.79, 19021.01],
      '23': [15435.58, 22842.31],
      '24': [19339.28, 28609.28],
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
        hoursPerWeek: 38,
        schalen: {
          '8': [2795.47, 3055.39],
          '9': [2848.52, 3207.1],
          '10': [2902.62, 3468.08],
          '11': [2956.73, 3784.23],
          '12': [3010.83, 4186.31],
          '13': [3333.35, 4648.86],
          '14': [3676.02, 5182.5],
          '15': [4120.54, 5894.36],
          '16': [4643.56, 6803.55],
          '17': [5507.13, 8138.16],
          '18': [6408.9, 9479.14],
          '19': [7108.03, 10281.18],
          '20': [9126.92, 13264.43],
          '21': [11529.86, 16830.12],
          '22': [13147.73, 19591.64],
          '23': [15898.65, 23527.58],
          '24': [19919.46, 29467.56],
        },
      },
    },
  ],
  vergoedingen: [],
};
