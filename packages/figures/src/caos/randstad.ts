import type { Cao } from '../types.js';

/**
 * Cao Randstad Groep Nederland 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Randstad Groep Nederland
 * https://cao-kijker.awvn.nl/bestanden/3826_01-07-2025%20tot%2001-04-2026_akkoord.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-03-01 (month) uit de bron
 *   - Basistabel 1-1-2026 teruggerekend uit de tabel per 2026-03-01 (gedeeld door +2%)
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-03-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoRandstad2026: Cao = {
  id: 'randstad',
  name: "Cao Randstad Groep Nederland",
  year: 2026,
  effectiveNote: "Cao 2025-07-01 t/m 2026-03-31; loontabel per 2026-03-01. Let op: Overbruggings-cao van 1 juli 2025 t/m 31 maart 2026; een opvolgende cao is niet gevonden. Per 1 maart 2026 stijgen individuele lonen, begin- en eindsalarissen en verhogingsbedragen bij promotie met 2%. De 4% per 30 juni 2025 komt uit de cao 2024-2025. Salaristabel met alleen begin- en eindsalaris per schaal (hier als twee treden); individuele verhogingen per 1 januari uit een door de directie vastgesteld budget. Verhogingsbedrag per stap bij promotie: € 59 (schaal 2) t/m € 272 (schaal 11). Benefit-budget van 12,347% van het maandsalaris (8,5% vakantiebijslag, 3,077% werkgeversbijdrage en waarde van 2 vrije dagen), maandelijks beschikbaar; restant wordt aan het eind van het jaar uitbetaald. Pensioen via Het Nederlandse Pensioenfonds (kring Randstad Groep); eigen bijdrage 4,8% van de pensioengrondslag; franchise alleen voor 2025 bekend (€ 18.475), maximum € 137.800 (2025). Pensioengevend salaris is 12x maandsalaris plus 8,5%.",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/3826_01-07-2025%20tot%2001-04-2026_akkoord.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.085,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      '1': [2496.08, 2496.08],
      '2': [2496.08, 2569.61],
      '3': [2496.08, 2686.27],
      '4': [2496.08, 2929.41],
      '5': [2652.94, 3298.04],
      '6': [2907.84, 3683.33],
      '7': [3120.59, 4196.08],
      '8': [3331.37, 4758.82],
      '9': [3809.8, 5442.16],
      '10': [4455.88, 6364.71],
      '11': [5213.73, 7447.06],
    },
  },
  periods: [
    {
      from: '2026-03-01',
      note: "+2% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          '1': [2546, 2546],
          '2': [2546, 2621],
          '3': [2546, 2740],
          '4': [2546, 2988],
          '5': [2706, 3364],
          '6': [2966, 3757],
          '7': [3183, 4280],
          '8': [3398, 4854],
          '9': [3886, 5551],
          '10': [4545, 6492],
          '11': [5318, 7596],
        },
      },
    },
  ],
  vergoedingen: [],
};
