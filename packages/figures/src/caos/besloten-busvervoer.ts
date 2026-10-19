import type { Cao } from '../types.js';

/**
 * Cao Besloten Busvervoer 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Besloten Busvervoer
 * https://www.fnv.nl/getmedia/3b41e1ff-3b9c-4847-baaf-14edb76b2954/504-besloten-busvervoer-cao-1-1-2025-tm-31-12-2026-v18072025.pdf?ext=.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-01-01 (month) uit de bron
 *
 * Excluded: none stated
 */
export const caoBeslotenBusvervoer2026: Cao = {
  id: 'besloten-busvervoer',
  name: "Cao Besloten Busvervoer",
  year: 2026,
  effectiveNote: "Cao 2025-01-01 t/m 2026-12-31; loontabel per 2026-01-01. Let op: Loontabel per 1-1-2026 (maandlonen, 173,33 x uurloon). 'Rijdend personeel' is één schaal met treden 0-12; I t/m VIII zijn de schalen voor niet-rijdend personeel (schaal I heeft treden 0-4) Werknemers krijgen minimaal het wettelijk minimumuurloon; laagste treden niet-rijdend liggen op dat minimum Eenmalige uitkering € 750 bruto (naar rato dienstverband en duur in 1-1 t/m 30-6-2025), uiterlijk september 2025 betaald Pensioen 2026: totale premie 30% van de pensioengrondslag, werknemer 12,19%; franchise € 17.283. Daarnaast premie WIA-aanvulling 0,90% van de pensioengrondslag (niet opgenomen). Maximum pensioengevend loon niet geverifieerd Per 1-1-2027 nieuwe pensioenregeling: heel brutoloon pensioengevend met uurfranchise (tijdelijk € 4.950 per jaar verhoogd); premie 2027 nog niet bekend Cao loopt af op 31-12-2026; onderhandelingen over cao 2027 lopen (oktober 2026: werkgevers bieden 2,5% per 1-1-2027, bonden vragen CPI september + 1%); nog geen akkoord Werknemers met gemiddeld 5 uur of minder per week kunnen een all-in uurloon krijgen (niet opgenomen)",
  sourceUrl: "https://www.fnv.nl/getmedia/3b41e1ff-3b9c-4847-baaf-14edb76b2954/504-besloten-busvervoer-cao-1-1-2025-tm-31-12-2026-v18072025.pdf?ext=.pdf",
  pensioenfondsId: 'vervoer',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      'Rijdend personeel': [3014.72, 3119.66, 3222.85, 3247.15, 3271.46, 3295.32, 3319.21, 3370.39, 3421.55, 3472.74, 3523.93, 3576.8, 3630.42],
      'I': [2505.6, 2505.6, 2505.6, 2505.6, 2512.44],
      'II': [2505.6, 2505.6, 2505.6, 2561.88, 2642.91, 2717.16],
      'III': [2505.6, 2539.71, 2615.63, 2691.56, 2766.61, 2846.73],
      'IV': [2586.65, 2667.67, 2744.39, 2821.17, 2897.06, 2975.52],
      'V': [2717.16, 2793.86, 2870.62, 2950.79, 3028.4, 3104.3],
      'VI': [2846.73, 2924.37, 3003.66, 3079.56, 3158.03, 3236.49],
      'VII': [2975.52, 3079.56, 3185.32, 3286.81, 3392.58, 3498.32],
      'VIII': [3366.98, 3471.01, 3576.8, 3680.79, 3787.44, 3891.44],
    },
  },
  vergoedingen: [],
};
