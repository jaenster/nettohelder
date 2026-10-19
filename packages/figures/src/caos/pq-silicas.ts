import type { Cao } from '../types.js';

/**
 * Cao PQ Silicas B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao PQ Silicas B.V.
 * https://cao-kijker.awvn.nl/bestanden/3308_01-10-2025%20tot%2001-10-2026_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2025-10-01 (month) uit de bron
 *
 * Excluded: none stated
 */
export const caoPqSilicas2026: Cao = {
  id: 'pq-silicas',
  name: "Cao PQ Silicas B.V.",
  year: 2026,
  effectiveNote: "Cao 2025-10-01 t/m 2026-09-30; loontabel per 2025-10-01. Let op: Cao gebaseerd op het eindbod van PQ Silicas van 5 november 2025 (geen onderhandelingsresultaat met FNV). Werkgever garandeert een bodem van € 18,00 bruto per uur inclusief ploegentoeslag. Werknemers in 5-ploegendienst werken gemiddeld 33,6 uur per week; overige 40 uur. Pensioen: beschikbare premie, basisregeling tot salarisgrens € 52.556 (2026) minus franchise € 19.172 (2026) en excedentregeling tot € 137.800; werknemerspremie 4% van de pensioengrondslag. Pensioengevend salaris is inclusief vakantietoeslag en vaste toeslagen. Verplichte Anw-hiaatverzekering: werknemersbijdrage € 15 per maand. Schaal = maandsalarissen per 1-10-2025 (bijlage 1, geldig t/m 30-9-2026): alleen begin- en eindsalaris (rsp 100%) per groep, als twee treden opgenomen; bedragen op hele euro's",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/3308_01-10-2025%20tot%2001-10-2026_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      'A': [2694, 3429],
      'B': [2727, 3557],
      'C': [2793, 3728],
      'D': [2882, 3917],
      'E': [3018, 4198],
      'F': [3180, 4556],
      'G': [3473, 5000],
      'H': [3792, 5484],
      'K': [4246, 6163],
    },
  },
  vergoedingen: [],
};
