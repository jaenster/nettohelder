import type { Cao } from '../types.js';

/**
 * Cao Kringloop Nederland 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Kringloop Nederland
 * https://bkned-site.e-captain.nl/bestanden/cao-kringloop-nederland-juli-2026.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-07-01 (month) uit de bron
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoKringloop2026: Cao = {
  id: 'kringloop',
  name: "Cao Kringloop Nederland",
  year: 2026,
  effectiveNote: "Cao 2026-01-01 t/m 2026-12-31; loontabel per 2026-07-01. Let op: Lonen en treden worden in januari en juli geïndexeerd met het percentage waarmee het wettelijk minimumloon (WML) stijgt; trede 0 van schaal 1 en 2 is gelijk aan het WML Indexatie 1-7-2026 (gelijk aan de WML-stijging per juli 2026) niet als percentage opgenomen; de loontabel per 1-7-2026 bevat deze verhoging Indexaties in 2025 (cao 2025, zelfde WML-systematiek) niet opgenomen; percentages niet in de bron gevonden Bij de tabel staat een uitlooptrede (alleen bij bovengemiddeld functioneren); welke trede dat per schaal is, is uit de PDF niet af te leiden Pensioen via Pensioenfonds Detailhandel (middelloonregeling); premie niet in de cao vermeld Minimum-cao voor leden van BKN, afgesloten met vakvereniging AVV; nieuwe cao vanaf 2027 nog niet bekend Loontabel uit PDF-tekst geëxtraheerd; kolomtoewijzing bepaald via positie in de PDF Verhoging per 1-1-2026 (vermoedelijk volgens minimumloonindexatie) niet in de bron geverifieerd; niet opgenomen",
  sourceUrl: "https://bkned-site.e-captain.nl/bestanden/cao-kringloop-nederland-juli-2026.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 38,
    schalen: {
      '1': [2477.85],
      '2': [2477.85, 2487.49, 2498.25, 2509, 2519.75],
      '3': [2484.12, 2510.77, 2537.41, 2564.05, 2590.71, 2617.35, 2644],
      '4': [2511.81, 2559.94, 2608.06, 2656.19, 2704.31, 2752.44, 2800.56, 2848.69, 2896.83],
      '5': [2579.78, 2637.55, 2695.31, 2753.07, 2810.83, 2868.58, 2926.34, 2984.1, 3041.86, 3099.62, 3157.38],
      '6': [2768.07, 2846.36, 2924.69, 3004.29, 3082.6, 3160.91, 3239.21, 3318.8, 3397.13, 3475.44, 3553.75, 3633.37, 3711.65, 3789.94],
      '7': [3163.53, 3256.19, 3350.15, 3442.83, 3535.49, 3628.13, 3722.09, 3814.75, 3907.41, 4001.37, 4094.05, 4186.71, 4280.68, 4373.31, 4466, 4558.65, 4652.63, 4745.27],
      '8': [3904.81, 4028.79, 4152.78, 4276.76, 4404.23, 4525.9, 4651.34, 4775.31, 4899.29, 5024.57, 5148.56, 5272.52, 5397.83, 5521.82, 5647.1, 5771.08, 5895.06, 6020.33, 6144.32, 6269.61, 6393.6],
    },
  },
  vergoedingen: [],
};
