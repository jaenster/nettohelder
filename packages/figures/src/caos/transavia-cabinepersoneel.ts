import type { Cao } from '../types.js';

/**
 * Cao Transavia Cabinepersoneel 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Transavia Cabinepersoneel
 * https://cao-kijker.awvn.nl/bestanden/0247_01-07-2024%20tot%2001-03-2026_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-01-01 (month) uit de bron
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoTransaviaCabinepersoneel2026: Cao = {
  id: 'transavia-cabinepersoneel',
  name: "Cao Transavia Cabinepersoneel",
  year: 2026,
  effectiveNote: "Cao 2024-07-01 t/m 2026-02-28; loontabel per 2026-01-01. Let op: Salarisschalen per 1-1-2026: Cabin Attendant (CA1 1e en 2e seizoen, CA2, treden 0-9), CA2 Airbus en Purser Airbus (treden 1-20) Eindejaarsuitkering: Cabin Attendants 5,15% (daarnaast is 3,18% in het maandsalaris verwerkt), Pursers 8,33% van het jaarsalaris; hier 5,15% opgenomen Mogelijke extra CPI-verhoging per 1-1-2026 (verschil boven 3% inflatie december 2025, max 2%) en per 1-1-2027 (max 0,5%); uitkomst niet bekend Pensioen: beschikbare-premieregeling bij BeFrank; werknemersbijdrage 7,5% van de pensioengrondslag (premiebudget 20,5% per 1-7-2025). Franchise niet in de cao vermeld, daarom niet opgenomen Cao liep af op 28-2-2026; geen nieuwe cao gevonden Arbeidsduur voor voltijd niet in uren per week vastgelegd (roosters/vlieguren)",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/0247_01-07-2024%20tot%2001-03-2026_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.051500000000000004,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      'CA': [2678.54, 2718.73, 2759.5, 2800.89, 2842.91, 2885.55, 2928.83, 2972.76, 3017.35, 3062.62, 3108.55, 3151.2, 3214.22],
      'CA2 Airbus': [2814.69, 2856.91, 2899.77, 2943.25, 2987.4, 3032.22, 3077.7, 3123.87, 3170.72, 3214.22, 3278.51],
      'PU Airbus': [3285.71, 3365.7, 3446.54, 3523.45, 3604.24, 3685.07, 3761.95, 3843.54, 3922.02, 3998.47, 4072.78, 4148.6, 4227.19, 4307.32, 4389.09, 4476.89, 4566.43, 4657.72, 4750.87, 4845.89],
    },
  },
  vergoedingen: [],
};
