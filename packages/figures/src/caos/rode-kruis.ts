import type { Cao } from '../types.js';

/**
 * Cao Nederlandse Rode Kruis 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Nederlandse Rode Kruis
 * https://www.fnv.nl/getmedia/e09d7cd8-019b-471a-9575-eb61621f8d87/1293-nederlandse-rode-kruis-nrk-cao-01-01-2025-tm-31-12-2025-v14112025.pdf?ext=.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-01-01 (month) uit de bron
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoRodeKruis2026: Cao = {
  id: 'rode-kruis',
  name: "Cao Nederlandse Rode Kruis",
  year: 2026,
  effectiveNote: "Cao 2026-01-01 t/m 2026-12-31; loontabel per 2026-01-01. Let op: Salarisschalen kennen alleen een minimum en maximum (geen treden); opgeslagen als twee treden Vakantiegeld (8%), eindejaarsuitkering (8,33%) en 56 bovenwettelijke verlofuren (2,908%) zitten in het Individueel Keuzebudget (IKB) Minimumuurloon € 16,00 per 1 januari 2026 Pensioen PFZW: werknemersdeel 9,25% van de pensioengrondslag in 2026 volgens de cao; franchise en maximum zijn de PFZW-bedragen voor 2026, niet in de cao zelf genoemd Cao loopt 1 jaar; wordt stilzwijgend met een jaar verlengd als niemand opzegt. Afspraken voor 2027 nog niet bekend In 2026 kan max. € 250 netto uit het IKB worden ingezet voor aflossing DUO-studieschuld Pensioen PFZW: werknemerspremie in de cao (9,25%) sluit niet aan op de PFZW-grondslag; niet opgenomen",
  sourceUrl: "https://www.fnv.nl/getmedia/e09d7cd8-019b-471a-9575-eb61621f8d87/1293-nederlandse-rode-kruis-nrk-cao-01-01-2025-tm-31-12-2025-v14112025.pdf?ext=.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      '6': [2773.28, 3429.62],
      '7': [2822.75, 3746.31],
      '8': [2996.57, 4124.98],
      '9': [3306.85, 4414.57],
      '10': [3681.06, 4962.01],
      '11': [4016.48, 5630.26],
      '12': [4535.76, 6423.19],
      '13': [5146.26, 7298.98],
      '14': [5634.66, 8313.34],
      '15': [6373.02, 9465.55],
      'Delegates A': [2773.28, 3735.58],
      'Delegates B': [3115.37, 4195.66],
    },
  },
  vergoedingen: [],
};
