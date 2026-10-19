import type { Cao } from '../types.js';

/**
 * Cao Havenbedrijf Rotterdam N.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Havenbedrijf Rotterdam N.V.
 * https://cao-kijker.awvn.nl/bestanden/2141_01-07-2024%20tot%2001-07-2026_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2025-07-01 (month) uit de bron
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoHavenbedrijfRotterdam2026: Cao = {
  id: 'havenbedrijf-rotterdam',
  name: "Cao Havenbedrijf Rotterdam N.V.",
  year: 2026,
  effectiveNote: "Cao 2024-07-01 t/m 2026-06-30; loontabel per 2025-07-01. Let op: Cao liep tot 1 juli 2026; geen nieuwe cao gevonden Vakantietoeslag (8%) en dertiende maand (8,33%) worden maandelijks in het Persoonlijk Keuzebudget (PKB) gestort; daarnaast vitaliteitsbijdrage 2,3% en extra PKB 0,97% (PKB totaal 19,6%) Jaarlijkse individuele salarisaanpassing per 1 januari op basis van relatieve salarispositie (RSP): <80% 6%, 80-90% 4%, 90-100% 2%, >=100% 0% Minimum bruto uurloon € 17 Pensioen bij ABP; werknemerspremie niet in de cao vermeld Volledig dienstverband 36 uur per week Salarisschalen 5-18 per 1-7-2025 (hoofdstuk 3.1 cao, per maand, hele euro's, 36 uur); treden = aanloopsalaris, minimum, 80%, 90% en 100% RSP. Groei per 1 januari via de RSP-tabel, niet in vaste treden.",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/2141_01-07-2024%20tot%2001-07-2026_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 36,
    schalen: {
      '5': [2471, 2568, 3129, 3520, 3911],
      '6': [2619, 2722, 3277, 3687, 4097],
      '7': [2913, 3029, 3571, 4017, 4464],
      '8': [3302, 3434, 4028, 4531, 5035],
      '9': [3640, 3786, 4529, 5095, 5661],
      '10': [3911, 4068, 5017, 5644, 6271],
      '11': [4657, 4846, 5881, 6616, 7351],
      '12': [5573, 5799, 6488, 7299, 8110],
      '13': [6208, 6461, 7095, 7982, 8869],
      '14': [6593, 6862, 7890, 8877, 9863],
      '15': [7079, 7368, 8683, 9769, 10854],
      '16': [7573, 7883, 9744, 10962, 12180],
      '17': [8369, 8711, 9932, 11173, 12415],
      '18': [9263, 9643, 10898, 12260, 13622],
    },
  },
  vergoedingen: [],
};
