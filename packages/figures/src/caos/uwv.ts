import type { Cao } from '../types.js';

/**
 * Cao UWV 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao UWV
 * https://www.cnv.nl/overheid/rijk/cao-uwv/
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2024-07-01 (month) uit de bron
 *   - Basistabel 1-1-2026: tabel per 2024-07-01 verhoogd met +3,25% per 2025-08-01
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoUwv2026: Cao = {
  id: 'uwv',
  name: "Cao UWV",
  year: 2026,
  effectiveNote: "Cao 2025-08-01 t/m 2026-05-31; loontabel per 2024-07-01. Let op: Cao 2025-2026 loopt van 1-8-2025 tot 1-6-2026 (aangepast eindbod UWV van 23-10-2025, door de leden aanvaard). Geen verhoging in 2026 in deze cao Nieuwe cao (vanaf 1-6-2026) nog niet rond: eindbod van augustus 2026 (2% per 1-6-2026, 3% per 1-1-2027, € 750 eenmalig) is door de leden afgewezen; tot een nieuwe cao gelden de oude afspraken (nawerking) Eenmalige uitkering € 400 netto in december 2025 (netto, niet in oneOffPayments) Scale = salarisschalen 1-17 per 1-7-2024 (cao 2024-2025, minimumschaalsalaris € 2.640 per maand); de verhoging van 3,25% per 1-8-2025 is daar nog niet in verwerkt. In de cao geel gearceerde (niet gebruikte) treden zijn niet te onderscheiden en wel opgenomen Eindejaarsuitkering 8,33% van de maandsalarissen over het kalenderjaar Pensioen via Pensioenfonds UWV: totale premie max. 22,7% van de gemaximeerde pensioengevende loonsom, medewerker betaalt 1/3 (behalve 0,9% die UWV volledig betaalt); exacte werknemerspremie, franchise en grens niet gevonden",
  sourceUrl: "https://www.cnv.nl/overheid/rijk/cao-uwv/",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 38,
    schalen: {
      '1': [2725.8, 2805.12],
      '2': [2725.8, 2738.08, 2829.28, 2929.13, 3027.55],
      '3': [2725.8, 2804.68, 2913.23, 3017.39, 3125.23, 3233.76, 3339.43, 3448.7],
      '4': [2725.8, 2767.73, 2898, 3001.5, 3110.02, 3217.84, 3324.23, 3431.99, 3537.67, 3660.69],
      '5': [2725.8, 2739.51, 2937.81, 3041.3, 3156.33, 3277.9, 3400.21, 3521.73, 3641.85, 3771.54, 3924.14],
      '6': [2934.2, 3069.56, 3201.92, 3337.24, 3469.59, 3604.95, 3743.82, 3887.15, 4031.23, 4171.5, 4317.13, 4476.58],
      '7': [3505.82, 3642.59, 3781.57, 3914.1, 4057.42, 4199.27, 4338.76, 4485.23, 4629.44, 4776.04, 4920.17, 5066.01],
      '8': [4073.63, 4216.97, 4359.55, 4501.71, 4649.03, 4792.49, 4933.52, 5079.3, 5227.44, 5370.84, 5511.09, 5641.21],
      '9': [4616.1, 4771.28, 4923.31, 5076.15, 5231.33, 5384.92, 5533.85, 5687.45, 5837.92, 5987.61, 6138.09, 6288.58],
      '10': [5217.23, 5373.2, 5525.98, 5680.41, 5835.6, 5987.61, 6140.44, 6295.62, 6447.67, 6599.68, 6753.29, 6909.3],
      '11': [5880.25, 6040.94, 6202.39, 6362.22, 6521.32, 6682.75, 6843.45, 7005.66, 7167.13, 7326.99, 7486.11, 7647.5],
      '12': [6412.39, 6642.84, 6871.64, 7098.98, 7330.94, 7559.75, 7787.83, 8015.87, 8246.34, 8475.94],
      '13': [7247.1, 7476.66, 7711.79, 7943.82, 8178.14, 8410.86, 8642.09, 8874.07, 9109.19, 9341.16],
      '14': [8179.71, 8469.64, 8758.86, 9046.48, 9338.02, 9624.87, 9914.05, 10204.03],
      '15': [9206.36, 9473.63, 9737.72, 10003.53, 10270.65, 10537.92, 10802.82, 11070.07],
      '16': [11070.07, 11291.49, 11517.32, 11747.65, 11982.6, 12222.25, 12469.78, 12716.03, 12794.2],
      '17': [12794.2, 13050.11, 13311.09, 13577.34, 13848.88, 14083.31],
    },
  },
  vergoedingen: [],
};
