import type { Cao } from '../types.js';

/**
 * Cao Vleessector 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Vleessector
 * https://www.fnv.nl/getmedia/2cb7b656-ea9f-4408-831c-0f5b4ce30bd4/904-vleessector-cao-01-05-2025-tm-31-08-2026-v08012026.pdf?ext=.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-01-01 (month) uit de bron
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoVleessector2026: Cao = {
  id: 'vleessector',
  name: "Cao Vleessector",
  year: 2026,
  effectiveNote: "Cao 2025-05-01 t/m 2026-08-31; loontabel per 2026-01-01. Let op: Cao is per 1 september 2026 verlopen; per 16 oktober 2026 nog geen onderhandelingsresultaat voor een nieuwe cao (volgend overleg 28 oktober 2026) Loonsverhoging na 1 september 2026 en 2027 nog niet bekend (werkgevers boden 2% per 1 september 2026 en 0,5% per 1 juli 2027, bonden vragen 2,5% + 2,5%) Verhogingen gelden niet voor de feitelijke lonen in schalen B0 en B1; die volgen het wettelijk minimumloon Standaard arbeidstijd 36 uur per week; werkgever kan dit verhogen naar 38 uur met volledige betaling van de extra uren Eindejaarsuitkering 2% van het inkomen van de voorafgaande 12 maanden (exclusief vakantietoeslag), betaald in december Nieuw functiehandboek/loongebouw ingevoerd in 2026 (herindeling uiterlijk 1 september 2026, met persoonlijke toeslag bij lagere indeling); salaristabel 2026 niet gevonden Pensioen via BPF VLEP; totale premie daalt in 2026 van 26% naar 24,36%, werknemersdeel en franchise niet gevonden Loontabel per 1 januari 2026 (maandlonen o.b.v. 36-urige werkweek, bijlage II). De laagste functieperiodieken (B en C 0-1, D 0) staan op WMUL en zijn weggelaten; er bestaat ook een tabel o.b.v. 38 uur en 4-wekenbedragen.",
  sourceUrl: "https://www.fnv.nl/getmedia/2cb7b656-ea9f-4408-831c-0f5b4ce30bd4/904-vleessector-cao-01-05-2025-tm-31-08-2026-v08012026.pdf?ext=.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.02,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 36,
    schalen: {
      'B': [2327.32, 2453.16, 2494.02, 2536.51, 2577.37, 2618.22],
      'C': [2389.42, 2515.27, 2561.03, 2603.51, 2646.01, 2695.04, 2740.8, 2791.46],
      'D': [2351.83, 2480.95, 2608.42, 2652.54, 2703.22, 2752.25, 2802.91, 2853.57, 2902.6],
      'E': [2324.05, 2461.32, 2598.62, 2735.9, 2789.83, 2838.87, 2894.43, 2948.37, 3003.93, 3056.23, 3113.44],
      'F': [2477.66, 2618.23, 2760.4, 2909.13, 2963.08, 3021.91, 3079.12, 3136.31, 3196.79, 3255.63, 3316.08, 3373.3, 3482.79],
    },
  },
  vergoedingen: [],
};
