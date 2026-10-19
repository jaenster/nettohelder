import type { Cao } from '../types.js';

/**
 * Cao Peterson Nederland B.V. (controlewerkzaamheden Nederlandse Zeehavens) 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Peterson Nederland B.V. (controlewerkzaamheden Nederlandse Zeehavens)
 * https://cao-kijker.awvn.nl/bestanden/4052_01-01-2024%20tot%2001-01-2027_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2024-07-01 (month) uit de bron
 *   - Basistabel 1-1-2026: tabel per 2024-07-01 verhoogd met +0,5% per 2025-01-01
 *   - Basistabel 1-1-2026: tabel per 2024-07-01 verhoogd met +1% per 2026-01-01
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoPetersonRotterdam2026: Cao = {
  id: 'peterson-rotterdam',
  name: "Cao Peterson Nederland B.V. (controlewerkzaamheden Nederlandse Zeehavens)",
  year: 2026,
  effectiveNote: "Cao 2024-01-01 t/m 2026-12-31; loontabel per 2024-07-01. Let op: Automatische prijscompensatie per januari en juli (CBS CPI alle huishoudens afgeleid, april-oktober en oktober-april) naast de structurele verhogingen; uitkomsten vanaf 2025 niet opgenomen (per 1-1-2024 1,039%, per 1-7-2024 0,870%) Vakantietoeslag is 1,20173 bruto basismaandsalaris per jaar (≈ 10,01% van 12 maandsalarissen) Salarisschaal per 1-7-2024: basismaandsalaris dagdienst; ploegentoeslagen 13,20% (2-ploegen), 20,64% (3-ploegen), 28,28% (5-ploegen) niet opgenomen; schalen I d-g en II c-f hebben dezelfde bedragen Normale arbeidsduur 38,75 uur per week in dagdienst; volcontinu gemiddeld 32,55 uur Pensioen: beschikbare premieregeling bij Aegon Cappital, eigen bijdrage 4,4% van de pensioengrondslag; franchise (2024: € 17.545) en maximum (2024: € 137.800) alleen voor 2024 bekend, daarom niet als pensioengegevens opgenomen",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/4052_01-01-2024%20tot%2001-01-2027_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.1001,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 38.75,
    schalen: {
      'I': [2475.94, 2620.12, 2773.12, 2935.06, 3106.43, 3287.86, 3479.95],
      'II': [2935.06, 3106.43, 3287.86, 3479.95, 3683.06],
      'III': [3898.09, 3943.87, 3989.63],
      'IV': [4048.84, 4108.05, 4215.69, 4304.46, 4382.52, 4463.26, 4535.97],
      'V': [4611.33, 4772.82, 4923.5],
    },
  },
  vergoedingen: [],
};
