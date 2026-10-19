import type { Cao } from '../types.js';

/**
 * Cao Graanbe- en verwerkende Bedrijven 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Graanbe- en verwerkende Bedrijven
 * https://www.fnv.nl/getmedia/f49ed4ae-07ee-49ab-a7f8-0767c21049d4/52-graanbe-en-verwerkende-bedrijven-cao-01-01-2026-tm-31-12-2026-v19082026.pdf?ext=.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-01-01 (month) uit de bron
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoGraanverwerkendeBedrijven2026: Cao = {
  id: 'graanverwerkende-bedrijven',
  name: "Cao Graanbe- en verwerkende Bedrijven",
  year: 2026,
  effectiveNote: "Cao 2026-01-01 t/m 2026-12-31; loontabel per 2026-01-01. Let op: Eenmalige uitkering € 382 bruto voor werknemers die op 1 maart 2026 in dienst zijn (naar rato voor deeltijders). Verhoging van 2,6% geldt niet voor schaal 1a (Participatiewet, 120% WML). Pensioen bij Stichting Molenaarspensioenfonds (MPF): werknemerspremie 10,13% van de pensioengrondslag in 2026; franchise staat niet in de cao. Minimum vakantietoeslag gelijk aan periodiek 1 van schaal 5 per maand. Er is ook een tabel per 4 weken. Geen gegevens over 2025 of 2027 gevonden.",
  sourceUrl: "https://www.fnv.nl/getmedia/f49ed4ae-07ee-49ab-a7f8-0767c21049d4/52-graanbe-en-verwerkende-bedrijven-cao-01-01-2026-tm-31-12-2026-v19082026.pdf?ext=.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      '2': [2769.49, 2805.9, 2845.07, 2884.22, 2929.77, 2970.7],
      '3': [2811.36, 2845.99, 2886.04, 2928.83, 2968.13, 3011.86],
      '4': [2855.99, 2911.36, 2953.44, 3010.78, 3066.33, 3113.68, 3168.29],
      '5': [2986.2, 3044.29, 3102.75, 3163.76, 3220.37, 3282.28, 3341.3],
      '6': [3071.79, 3139.16, 3208.37, 3278.49, 3344.05, 3415.96, 3483.32, 3549.82],
      '7': [3243.82, 3316.71, 3387.72, 3460.59, 3529.79, 3598.1, 3671.84, 3748.34, 3812.97, 3890.36],
      '8': [3497, 3584.42, 3671.84, 3757.61, 3853.04, 3938.78, 4032.41, 4127.1, 4216.34, 4304.66],
      '1b': [2709.4, 2743.27],
    },
  },
  vergoedingen: [],
};
