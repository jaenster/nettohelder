import type { Cao } from '../types.js';

/**
 * Cao Bunge Netherlands B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Bunge Netherlands B.V.
 * https://cao-kijker.awvn.nl/bestanden/3992_01-11-2024%20tot%2001-05-2026_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2025-11-01 (month) uit de bron
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoBungeNetherlands2026: Cao = {
  id: 'bunge-netherlands',
  name: "Cao Bunge Netherlands B.V.",
  year: 2026,
  effectiveNote: "Cao 2024-11-01 t/m 2026-04-30; loontabel per 2025-11-01. Let op: Cao van Bunge Netherlands B.V. te Amsterdam (FNV), looptijd 1-11-2024 tot 1-5-2026; per 1-11-2024 en 1-11-2025 elk 3,5% verhoging. Nieuwe cao per 1-5-2026 niet gevonden Niet te verwarren met de aparte cao Bunge Loders Croklaan (Wormerveer/Rotterdam) Dagdienst gemiddeld 40 uur per week; tweeploegendienst 36 uur; vijfploegendienst 33,6 uur Vakantietoeslag 8% van 12 x het maandinkomen; 13e maand 8,333% van het maandinkomen over het kalenderjaar Jaarlijkse variabele bonus, niet opgenomen Pensioen via Molenaarspensioenfonds; werknemersbijdrage 5% van de pensioengrondslag (afwijkend voor ex-Cargill-werknemers). Franchise niet vermeld, daarom niet opgenomen Schaal: bijlage II, functiejarenschalen per 1-11-2025 (incl. 3,5%), maandbedragen in hele euro's, 0 t/m 5-11 functiejaren; leeftijdschalen niet opgenomen. Geldt tot het einde van de cao (1-5-2026).",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/3992_01-11-2024%20tot%2001-05-2026_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.08333,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      'A': [3087, 3155, 3225, 3287, 3361, 3424],
      'B': [3118, 3192, 3262, 3333, 3398, 3468, 3533],
      'C': [3241, 3311, 3387, 3462, 3526, 3603, 3674, 3745],
      'D': [3402, 3479, 3553, 3628, 3706, 3778, 3854, 3928, 4006],
      'E': [3573, 3644, 3728, 3803, 3880, 3962, 4040, 4122, 4198, 4281],
      'F': [3781, 3863, 3954, 4033, 4120, 4205, 4289, 4373, 4462, 4541, 4623],
      'G': [4008, 4093, 4186, 4279, 4370, 4462, 4547, 4634, 4726, 4810, 4903, 4991],
      'H': [4242, 4339, 4432, 4526, 4622, 4714, 4807, 4904, 4996, 5092, 5186, 5279],
      'I': [4494, 4594, 4699, 4796, 4897, 4994, 5097, 5198, 5297, 5404, 5492, 5598],
    },
  },
  vergoedingen: [],
};
