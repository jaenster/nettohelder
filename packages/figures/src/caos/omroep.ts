import type { Cao } from '../types.js';

/**
 * Cao voor het Omroeppersoneel 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao voor het Omroeppersoneel
 * https://over.nos.nl/wp-content/uploads/2025/09/CAO-voor-het-Omroeppersoneel-1-januari-2025-tm-31-december-2026.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-01-01 (month) uit de bron
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoOmroep2026: Cao = {
  id: 'omroep',
  name: "Cao voor het Omroeppersoneel",
  year: 2026,
  effectiveNote: "Cao 2025-01-01 t/m 2026-12-31; loontabel per 2026-01-01. Let op: Salarisschalen kennen alleen een minimum en maximum (geen vaste treden); als twee treden opgenomen. Periodieken op basis van beoordelingspercentage; daarboven max. 7,5% uitloop Decemberuitkering is 6% van 12 x (maandsalaris + vakantietoeslag), dus 6,48% van het jaarsalaris Per 1 juni 2025 zijn de schaalminima C t/m H met 2,5% verhoogd Inflatieclausule: als de CPI over 2025 boven 4% uitkomt, overleggen partijen in 2026 over compensatie; uitkomst niet gevonden Onderhandelingen over de cao 2027 zijn op 1 oktober 2026 gestart; loonsverhoging 2027 nog niet bekend Pensioenpremie (Pensioenfonds PNO Media) niet geverifieerd",
  sourceUrl: "https://over.nos.nl/wp-content/uploads/2025/09/CAO-voor-het-Omroeppersoneel-1-januari-2025-tm-31-december-2026.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.06480000000000001,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 36,
    schalen: {
      'C (6)': [2282.99, 2800.4],
      'D (7)': [2491.74, 3160.47],
      'E (8)': [2717.73, 3617.18],
      'F (9)': [3032.79, 4241.24],
      'G (10)': [3449.57, 5056.94],
      'H (11)': [3995.43, 6103.97],
      'J (12)': [4629.04, 7491.57],
      'K (13)': [5475.77, 8877.72],
      'L (14)': [6440.39, 10467.06],
      'M (15)': [7634.57, 12428.04],
    },
  },
  vergoedingen: [],
};
