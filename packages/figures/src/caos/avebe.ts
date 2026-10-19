import type { Cao } from '../types.js';

/**
 * Cao Coöperatie Koninklijke Avebe U.A. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Coöperatie Koninklijke Avebe U.A.
 * https://comform.cnv.nl/action/attachment?s=24%2Fhw3raXI7X9S9HqD4xGnv55vuocAW4pRP%2BZ5SlQbaNkOgh0611tiX0ASUZAW6dvJ6rdxoIhBnqBHPFW5SYqZRuZjdiKU7xLJuDVXvMXfDSAiaJE%2BWXp6YEz1qEx3s%3D
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2025-01-01 (month) uit de bron
 *   - Basistabel 1-1-2026: tabel per 2025-01-01 verhoogd met +2,6% per 2026-01-01
 *   - Basistabel 1-1-2026: tabel per 2025-01-01 verhoogd met +€ 20/mnd per 2026-01-01
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoAvebe2026: Cao = {
  id: 'avebe',
  name: "Cao Coöperatie Koninklijke Avebe U.A.",
  year: 2026,
  effectiveNote: "Cao 2026-01-01 t/m 2026-12-31; loontabel per 2025-01-01. Let op: Per 1 januari 2026: 2,6% plus € 20 bruto per maand structureel (gemiddeld 0,4%) Per 1 januari 2025: 4% voor schalen 1-12, 3% voor schalen 13 en 14 (alleen het algemene percentage 4% opgenomen) Eenmalige netto uitkering van € 100 met het salaris van juli 2026 voor wie op 1 juli 2026 in dienst is (naar rato deeltijd) Salaristabel is tabel PSA11 per 1 januari 2025 (functiejaren 0 t/m max, zonder aanlooptreden -2 en -1); daarnaast bestaat tabel PSA10 met hogere bedragen 'tegen inlevering ADV-uren' Dagdienst 40 uur per week met 88 ADV-uren per jaar; 5-ploegendienst gemiddeld 33,6 uur Vakantiegeld 8% over 12 x het salaris van mei, minimaal 8% over 12 x het maximum van schaal 5 Pensioen: werknemersdeel 3,2% van het brutoloon plus 3,6% van (brutoloon - fiscale minimumfranchise), plus eventueel max. 1,25% bij premie boven 23,2%; niet als pension-veld opgenomen Daarnaast resultatendeling afhankelijk van een prestatie-indicator",
  sourceUrl: "https://comform.cnv.nl/action/attachment?s=24%2Fhw3raXI7X9S9HqD4xGnv55vuocAW4pRP%2BZ5SlQbaNkOgh0611tiX0ASUZAW6dvJ6rdxoIhBnqBHPFW5SYqZRuZjdiKU7xLJuDVXvMXfDSAiaJE%2BWXp6YEz1qEx3s%3D",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      '1': [3024.13, 3071.32, 3112.36, 3157.51, 3206.76],
      '2': [3083.64, 3130.83, 3175.98, 3221.12, 3264.21, 3309.36],
      '3': [3166.74, 3220.09, 3274.47, 3313.46, 3375.02, 3423.24],
      '4': [3258.06, 3310.38, 3373.99, 3425.29, 3479.67, 3536.1],
      '5': [3376.05, 3439.66, 3503.27, 3561.75, 3624.34, 3684.87],
      '6': [3497.11, 3559.7, 3624.34, 3684.87, 3747.46, 3814.15, 3873.66],
      '7': [3629.47, 3702.31, 3786.45, 3863.4, 3943.42, 4019.35, 4101.43],
      '8': [3807.99, 3891.1, 3975.23, 4055.26, 4136.31, 4220.44, 4299.45, 4375.37],
      '9': [4037.82, 4126.05, 4208.13, 4295.34, 4383.58, 4471.81, 4559.02, 4643.16, 4730.37],
      '10': [4340.49, 4437.96, 4530.3, 4625.71, 4718.05, 4816.55, 4906.84, 5002.26, 5091.52, 5188.99, 5289.54],
      '11': [4898.63, 5011.49, 5125.38, 5237.21, 5352.12, 5466.01, 5577.84, 5695.83, 5805.61, 5920.53, 6032.36],
      '12': [5669.16, 5827.16, 5989.27, 6146.25, 6300.15, 6460.2, 6619.23, 6779.29, 6933.19, 7089.14, 7246.12],
      '13': [6388.38, 6596.66, 6798.78, 7005.01, 7215.34, 7417.46, 7628.82, 7830.94, 8041.27, 8246.47, 8448.59, 8662],
      '14': [7299.47, 7529.29, 7749.88, 7984.84, 8213.64, 8443.46, 8674.31, 8901.06, 9130.88, 9364.81, 9589.5, 9817.27, 10044.02, 10272.82, 10497.51],
    },
  },
  vergoedingen: [],
};
