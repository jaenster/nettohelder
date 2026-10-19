import type { Cao } from '../types.js';

/**
 * CAO Hoveniers (Nederland) 2026 salaris 2026. DRAFT from cao-pipeline (confidence: high).
 * Source: CAO voor het hoveniersbedrijf in Nederland 1 oktober 2024 tot en met 30 juni 2026 (inclusief TTW per 1 januari 2026)
 * https://www.fnv.nl/getmedia/2e0efde2-daa5-485b-b4a2-7184f0ae7cbe/506-hoveniersbedrijf-in-nederland-cao-01-10-2024-tm-30-06-2026-v10062025.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - All 90 hourly wage rates (Schalen I-VI, treads 1-10) were transcribed from Lid 8 per 1 januari 2026 - verify against official PDF
 *   - Schaal I has 9 treads (1-9), Schaal II-IV have 9 treads (1-9), Schaal V-VI have 10 treads (1-10)
 *   - Vakantiegeld confirmed at 8% per Artikel 48 Lid 2
 *   - Reiskostenvergoeding €0,23/km confirmed per 1 januari 2025
 *   - No eindejaarsuitkering (13th month) found for regular workers - only for uitzendkrachten in inlenersbeloning context
 *   - BPL pension fund confirmed per Artikel 70 and Bijlage VI
 *   - 37-hour work week standard confirmed
 *   - 1.930 annual hours confirmed for full-time employees
 *
 * Excluded: jeugdschalen (youth scales below 21 years); aanloopschalen (introductory scales); hulpkrachten (helpers - use separate table); werknemers met arbeidsbeperking (workers with disabilities - use separate table); jeugdig leerlingen (youth apprentices - use separate table); dienstjubileum (one-off payments); uitzendkrachten/inlenersbeloning (temporary workers use hiring employer's scale); toeslagen (inconvenience allowances, shift allowances, special allowances)
 */
export const caoHoveniers2026: Cao = {
  id: 'hoveniers',
  name: "CAO Hoveniers",
  year: 2026,
  effectiveNote: "Effective from 1 January 2026. Wage table per 1 januari 2026 (Lid 8 of Artikel 24). Based on hourly wages for a 37-hour work week (1.930 annual working hours for full-time). Excluded: jeugdschalen (youth scales below 21 years), aanloopschalen (introductory scales), hulpkrachten (helpers), werknemers met arbeidsbeperking (workers with disabilities), jeugdig leerlingen (youth apprentices), one-off jubileum payments, and all temporary worker/uitzending rates.",
  sourceUrl: "https://www.fnv.nl/getmedia/2e0efde2-daa5-485b-b4a2-7184f0ae7cbe/506-hoveniersbedrijf-in-nederland-cao-01-10-2024-tm-30-06-2026-v10062025.pdf",
  pensioenfondsId: 'bpl',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'uur',
    hoursPerWeek: 37,
    schalen: {
      'I': [15.24, 15.52, 15.81, 15.97, 16.27, 16.57, 16.88, 17.2, 17.52],
      'II': [17.85, 18.18, 18.52, 18.87, 19.22, 19.58, 19.95, 20.32, 20.7],
      'III': [21.09, 21.48, 21.88, 22.29, 22.71, 23.13, 23.56, 24, 24.45],
      'IV': [24.91, 25.37, 25.86, 26.36, 26.87, 27.4, 27.95, 28.52, 29.1, 29.7],
      'V': [30.31, 31.01, 31.72, 32.46, 33.21, 34, 34.8, 35.62, 36.46, 37.33],
      'VI': [38.21, 39.12, 40.05, 41.01, 42, 42.99, 43.99, 45, 46.02, 47.05],
    },
  },
  vergoedingen: [
    {"id":"vakantiegeld","label":"Vakantiegeld","amount":0.08,"unit":"perJaar","taxable":true,"note":"8% of actual wages"},
    {"id":"reiskosten","label":"Reiskostenvergoeding woon-werkverkeer","amount":0.23,"unit":"perKm","taxable":false,"note":"Per 1 januari 2025: €0,23 per kilometer; for distances up to 30km return, standard rate applies; above 30km return, €0,27 per km"},
  ],
};
