import type { Cao } from '../types.js';

/**
 * CAO Foodservice en Groothandel in Levensmiddelen (FSGIL) 2025-2027 2026. DRAFT from cao-pipeline (confidence: high).
 * Source: CAO voor de Foodservice en de Groothandel in Levensmiddelen (FSGIL) 2025-2027, Bijlage 2 (Bruto salarisschaal per 1 januari 2026) en Bijlage 3 (per 1 juli 2026)
 * https://groothandelinlevensmiddelen.nl/wp-content/uploads/sites/2/2026/07/cao_GIL_2025-2027_okt_2025.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - FG2 per 1-1-2026: 21j 2558.07 / P1 2575.66 / P2 2593.25 / P3 2610.85
 *   - FG3 per 1-1-2026: 21j 2584.46 / P1 2610.85 / P2 2637.24 / P3 2663.63 / P4 2690.02
 *   - FG4 per 1-1-2026: 21j 2609.09 / P1 2644.27 / P2 2679.46 / P3 2714.65 / P4 2749.83 / P5 2785.02
 *   - FG5 per 1-1-2026: 21j 2635.48 / P1 2679.46 / P2 2723.44 / P3 2767.43 / P4 2811.41 / P5 2855.39 / P6 2899.38
 *   - FG5 per 1-7-2026 top (P6) = 2942.87
 *   - Number of periodieken differs per functiegroep (FG2=3, FG3=4, FG4=5, FG5=6) plus the 21-jaar instap row
 *   - pensioenfondsId set to 'generiek' because the sector's Bedrijfstakpensioenfonds voor de Foodservice en Groothandel in Levensmiddelen is not in the allowed slug list
 *   - No eindejaarsuitkering / 13e maand exists in this CAO (verify)
 *
 * Excluded: Functiegroep 1 (gelijk aan wettelijk minimumloon per leeftijd, geen eigen schaalbedragen); Jeugdschalen 15 t/m 20 jaar (percentage van het volwassenloon); Oproepkracht-uurschalen (Bijlage 5, inclusief vakantiebijslag en vakantiedagenbijslag); GIL-subsector loonschalen (Deel B, Bijlage I Loonschalen); Toeslagen, reiskosten- en maaltijdvergoedingen; Tabellen per 1 juli 2025 en per 1 januari 2027 (buiten 2026)
 */
export const caoFoodserviceDeGroothandelInLevensmiddelen2026: Cao = {
  id: 'foodservice-de-groothandel-in-levensmiddelen',
  name: "CAO Foodservice en Groothandel in Levensmiddelen (FSGIL) 2025-2027",
  year: 2026,
  effectiveNote: "Bruto maandsalarissen per 1 januari 2026 (inclusief 1,5% cao-verhoging), full-time = 40 uur per week (uurloon = maandsalaris / 173,333). Een tweede collectieve verhoging van 1,5% geldt per 1 juli 2026 (zie periods). Getranscribeerd: de volwassen treden (21 jaar = instap, daarna Periodiek 1 t/m 6) per functiegroep FG2 t/m FG5. UITGESLOTEN: functiegroep 1 (gelijk aan WML per leeftijd, geen eigen bedragen), de jeugdschalen (15 t/m 20 jaar, percentage van het volwassenloon), de aparte uurschalen voor oproepkrachten (Bijlage 5, inclusief vakantiebijslag en vakantiedagenbijslag), de GIL-subsector loonschalen (Deel B Bijlage I), toeslagen en (reiskosten/maaltijd)vergoedingen. Geen eindejaarsuitkering in deze CAO.",
  sourceUrl: "https://groothandelinlevensmiddelen.nl/wp-content/uploads/sites/2/2026/07/cao_GIL_2025-2027_okt_2025.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      'FG2': [2558.07, 2575.66, 2593.25, 2610.85],
      'FG3': [2584.46, 2610.85, 2637.24, 2663.63, 2690.02],
      'FG4': [2609.09, 2644.27, 2679.46, 2714.65, 2749.83, 2785.02],
      'FG5': [2635.48, 2679.46, 2723.44, 2767.43, 2811.41, 2855.39, 2899.38],
    },
  },
  periods: [
    {
      from: '2026-07-01',
      note: "+1,5% collectieve verhoging (Bijlage 3, per 1 juli 2026)",
      status: 'confirmed',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          'FG2': [2596.44, 2614.29, 2632.15, 2650.01],
          'FG3': [2623.22, 2650.01, 2676.79, 2703.58, 2730.37],
          'FG4': [2648.22, 2683.94, 2719.65, 2755.37, 2791.08, 2826.79],
          'FG5': [2675.01, 2719.65, 2764.29, 2808.94, 2853.58, 2898.22, 2942.87],
        },
      },
    },
  ],
  vergoedingen: [],
};
