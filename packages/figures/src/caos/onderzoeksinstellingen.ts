import type { Cao } from '../types.js';

/**
 * Cao Onderzoekinstellingen (cao-OI) 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Onderzoekinstellingen (cao-OI)
 * https://wvoi.nl/wp-content/uploads/2025/12/Cao-OI-2025-2026.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-01-01 (month) uit de bron
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoOnderzoeksinstellingen2026: Cao = {
  id: 'onderzoeksinstellingen',
  name: "Cao Onderzoekinstellingen (cao-OI)",
  year: 2026,
  effectiveNote: "Cao 2025-10-01 t/m 2026-09-30; loontabel per 2026-01-01. Let op: Partijen: WVOI (namens KB, NWO en NWO-I) met AOb, CNV en FNV; geldt niet voor universiteiten of umc’s Cao loopt van 1-10-2025 t/m 30-9-2026 en wordt stilzwijgend met een jaar verlengd als hij niet tijdig is opgezegd; nieuwe loonafspraken niet gevonden Eenmalige uitkering € 900 bruto voor wie op 1-11-2025 in dienst is, naar rato van deeltijd en diensttijd 1-1-2025 t/m 31-10-2025 Salarisschalen per 1-1-2026 in hele euro’s; de laagste treden zijn gelijkgesteld aan het minimumbedrag van de tabel (€ 2.988). Schaal 10 begint in de tabel lager (€ 3.630) dan schaal 9 (€ 3.802) Oio-salarissen (oio-1 t/m oio-4) niet opgenomen Volledige arbeidsduur 38 uur per week; bij 40 uur per week geldt een toelage van 5,25% met minder vakantie-uren Pensioen bij ABP; de cao noemt de premieverdeling niet, daarom geen pensioenpremie opgenomen Verhogingen in 2025 vóór 1 oktober (vorige cao) niet gevonden",
  sourceUrl: "https://wvoi.nl/wp-content/uploads/2025/12/Cao-OI-2025-2026.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 38,
    schalen: {
      '1': [2988, 2988, 2988, 2988, 2988, 2988, 2988],
      '2': [2988, 2988, 2988, 2988, 2988, 2988, 2988, 2988],
      '3': [2988, 2988, 2988, 2988, 2988, 2988, 2988, 3024, 3115, 3197],
      '4': [2988, 2988, 2988, 2988, 2988, 2988, 3024, 3115, 3197, 3288, 3371],
      '5': [2988, 2988, 2988, 2988, 3024, 3115, 3197, 3288, 3371, 3458, 3545],
      '6': [2988, 2988, 2988, 3115, 3197, 3288, 3371, 3458, 3545, 3630, 3713],
      '7': [3024, 3115, 3288, 3458, 3545, 3630, 3713, 3802, 3892, 3989, 4098],
      '8': [3458, 3630, 3802, 3989, 4098, 4195, 4280, 4374, 4469, 4552, 4634],
      '9': [3802, 3989, 4195, 4374, 4552, 4725, 4885, 5076, 5241],
      '10': [3630, 3802, 3989, 4195, 4374, 4552, 4725, 4885, 5076, 5241, 5401, 5570, 5758],
      '11': [4885, 5076, 5241, 5401, 5570, 5758, 5942, 6117, 6287, 6458, 6627, 6722],
      '12': [5942, 6117, 6287, 6458, 6627, 6803, 6979, 7142, 7313, 7533, 7641],
      '13': [6803, 6979, 7142, 7313, 7533, 7748, 7964, 8183, 8285],
      '14': [7142, 7313, 7533, 7748, 7964, 8183, 8399, 8625, 8859, 9098],
      '15': [7748, 7964, 8183, 8399, 8625, 8859, 9098, 9396, 9689, 9998],
      '16': [8399, 8625, 8859, 9098, 9396, 9689, 9998, 10320, 10650, 10989],
      '17': [9098, 9396, 9689, 9998, 10320, 10650, 10989, 11341, 11704, 12077],
      '18': [9998, 10320, 10650, 10989, 11341, 11704, 12077, 12463, 12857, 13271],
    },
  },
  vergoedingen: [],
};
