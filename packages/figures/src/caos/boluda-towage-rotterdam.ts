import type { Cao } from '../types.js';

/**
 * Cao Boluda Towage Rotterdam (Boluda Crew B.V., KHTR B.V. en SHTR B.V.) 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Boluda Towage Rotterdam (Boluda Crew B.V., KHTR B.V. en SHTR B.V.)
 * https://cao-kijker.awvn.nl/bestanden/3898_01-01-2024%20tot%2001-01-2027_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2025-01-01 (month) uit de bron
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoBoludaTowageRotterdam2026: Cao = {
  id: 'boluda-towage-rotterdam',
  name: "Cao Boluda Towage Rotterdam (Boluda Crew B.V., KHTR B.V. en SHTR B.V.)",
  year: 2026,
  effectiveNote: "Cao 2024-01-01 t/m 2026-12-31; loontabel per 2025-01-01. Let op: Per 1 januari 2026 prijscompensatie op basis van de CPI (afgeleid, oktober-oktober); voor het B-deel tussen 0% en 4%. De uitkomst staat niet in de cao en is niet opgenomen Salaristabel is het B-deel (Boluda Crew en KHTR) per 1 januari 2025, basismaandsalaris zonder onregelmatigheidstoeslag (ORT 33%); treden D, C, B, A (dienstdoend) en 0 t/m 7 (matroos/stuurman 0 t/m 10); normale arbeidsduur 2288 uur per jaar B-deel: vakantietoeslag gelijk aan één basismaandsalaris inclusief 33% ORT (opgenomen als 8,33%) C-deel (SHTR): vakantietoeslag 8,4% en eindejaarsuitkering 8,33% van 12 x (basismaandsalaris + onregelmatigheidstoeslag), eigen salaristabellen (systeem 36 of 48 uur) Pensioen bij Bedrijfspensioenfonds voor de Koopvaardij; werknemerspremie niet als percentage gevonden",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/3898_01-01-2024%20tot%2001-01-2027_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.0833,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      'Kapitein': [4007.63, 4145.83, 4284.02, 4422.22, 4560.4, 4698.6, 4836.79, 4975, 5113.19, 5251.38, 5389.57, 5527.77],
      'Machinist': [3606.87, 3731.25, 3855.62, 3980, 4104.38, 4228.75, 4353.12, 4477.5, 4601.87, 4726.25, 4850.62, 4975],
      'Matroos/Stuurman': [2313.54, 2469.09, 2624.64, 2780.19, 2935.74, 3091.68, 3247.23, 3402.79, 3558.33, 3713.88, 3869.44],
    },
  },
  vergoedingen: [],
};
