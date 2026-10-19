import type { Cao } from '../types.js';

/**
 * Cao ADM Europoort B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao ADM Europoort B.V.
 * https://www.fnv.nl/getmedia/6cf87916-b832-48b5-b62f-8876a54ae687/160-adm-europoort-cao-1-1-2025-tm-31-12-2026-v13052025.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-01-01 (month) uit de bron
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoAdmEuropoort2026: Cao = {
  id: 'adm-europoort',
  name: "Cao ADM Europoort B.V.",
  year: 2026,
  effectiveNote: "Cao 2025-01-01 t/m 2026-12-31; loontabel per 2026-01-01. Let op: Salaristabel in hele euro's (0-lijn plus functiejaren t/m maximum); ervaringsschalen E1 (80%) en E2 (90%) niet opgenomen Eindejaarsuitkering 2% van 12 maal het maandsalaris van november, minimaal € 345, uitbetaald in november Vakantietoeslag 8% met een minimum van € 2.125 voor vakvolwassen werknemers Dagdienst gemiddeld 38 uur per week; ploegendiensten 36 tot ca. 34 uur Pensioen via PGB (middelloon); werknemersbijdrage staffels in de cao zijn verouderd (2013-2021), daarom niet opgenomen",
  sourceUrl: "https://www.fnv.nl/getmedia/6cf87916-b832-48b5-b62f-8876a54ae687/160-adm-europoort-cao-1-1-2025-tm-31-12-2026-v13052025.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.02,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 38,
    schalen: {
      'A': [3333, 3401, 3479, 3554, 3624],
      'B': [3485, 3542, 3605, 3669, 3736, 3801],
      'C': [3571, 3636, 3703, 3777, 3853, 3929, 4008],
      'D': [3672, 3751, 3830, 3909, 3993, 4077, 4164, 4234],
      'E': [3824, 3908, 3998, 4092, 4186, 4273, 4370, 4467],
      'F': [4009, 4115, 4214, 4317, 4419, 4519, 4621, 4758],
      'G': [4202, 4316, 4428, 4535, 4644, 4756, 4866, 4977, 5099],
      'H': [4405, 4521, 4639, 4757, 4873, 4992, 5106, 5223, 5339, 5459],
      'I': [4613, 4754, 4887, 5023, 5159, 5298, 5431, 5569, 5703, 5840],
      'J': [4836, 4974, 5130, 5281, 5428, 5575, 5725, 5869, 6018, 6170, 6257],
    },
  },
  vergoedingen: [],
};
