import type { Cao } from '../types.js';

/**
 * Cao ICL Fertilizers Europe C.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao ICL Fertilizers Europe C.V.
 * https://cao-kijker.awvn.nl/bestanden/0023_01-07-2025%20tot%2001-09-2026_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2025-07-01 (month) uit de bron
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoIclFertilizerEurope2026: Cao = {
  id: 'icl-fertilizer-europe',
  name: "Cao ICL Fertilizers Europe C.V.",
  year: 2026,
  effectiveNote: "Cao 2025-07-01 t/m 2026-08-31; loontabel per 2025-07-01. Let op: Eenmalige beloning van bruto € 600 in de maand december 2025 voor medewerkers die op 1 juli 2025 in dienst waren (later in dienst: naar rato). Cao loopt tot 1 september 2026; een opvolgende cao is niet gevonden. Volcontinu-medewerkers werken gemiddeld 33,6 uur per week op jaarbasis; dagdienst 40 uur. Minimum (vloer) in de vakantietoeslag wordt verhoogd met de structurele loonstijging. Pensioen: beschikbare-premieregeling zonder eigen bijdrage; nieuwe medewerkers vanaf 2025 bij Zwitser Leven met een premie van 19% inclusief 3% eigen bijdrage. Franchise alleen voor 2025 bekend (€ 20.345). Salarisschalen per 1-7-2025 (incl. 3%) overgenomen van de tabel-afbeelding in bijlage II A (per maand); alleen minimum en maximum per groep, als twee treden opgenomen. De tabel noemt ook een periodiekbedrag per groep (bijv. groep I € 60,37, groep XI € 124,68).",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/0023_01-07-2025%20tot%2001-09-2026_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      'I': [2700.79, 2984.09],
      'II': [2770.84, 3091.05],
      'III': [2811.01, 3194.88],
      'IV': [2883.46, 3315.59],
      'V': [3005, 3501.45],
      'VI': [3111.99, 3692.14],
      'VII': [3231.91, 3878.04],
      'VIII': [3404.08, 4162.85],
      'IX': [3610.87, 4495.97],
      'X': [3885.27, 5058.42],
      'XI': [4451.74, 5850.2],
    },
  },
  vergoedingen: [],
};
