import type { Cao } from '../types.js';

/**
 * Cao Kwaliteits-Controle-Bureau (KCB) 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Kwaliteits-Controle-Bureau (KCB)
 * https://cao-kijker.awvn.nl/bestanden/3928_01-01-2026%20tot%2001-01-2027_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-01-01 (month) uit de bron
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoKwaliteitsControleBureau2026: Cao = {
  id: 'kwaliteits-controle-bureau',
  name: "Cao Kwaliteits-Controle-Bureau (KCB)",
  year: 2026,
  effectiveNote: "Cao 2026-01-01 t/m 2026-12-31; loontabel per 2026-01-01. Let op: Letterschalen A t/m K per 1-1-2026 (incl. 2,8% indexatie), bedragen in hele euro per maand bij 40 uur Extra periodiek (eenmalig toegekend na vijf jaar op het maximum) niet in de schaal opgenomen: A 3.259, B 3.495, C 3.766, D 3.984, E 4.297, F 4.559, G 5.098, H 5.930, I 6.783, J 8.316, K 10.462 Cijferschalen 1 t/m 10 vervallen per 1-1-2026; medewerkers gaan over naar de letterschalen Pensioenregeling is premievrij voor de werknemer (werkgeversbijdrage 16% van de bruto loonsom); nieuwe regeling onder Wtp beoogd per 1-1-2027 Medewerkers van KCB-Ondersteuning nemen deel aan ABP-pensioen; premieverdeling daarvan niet opgenomen Vakantietoeslag 8% (mei) en 13e maand 8,33% (december), beide over 12x het bruto maandsalaris Pensioen: werknemer betaalt geen premie (regeling via ASR)",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/3928_01-01-2026%20tot%2001-01-2027_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      'A': [2798, 2852, 2906, 2962, 3019, 3077, 3137, 3197],
      'B': [2888, 2943, 3000, 3057, 3116, 3176, 3238, 3300, 3364, 3429],
      'C': [3110, 3170, 3231, 3293, 3357, 3422, 3488, 3555, 3624, 3694],
      'D': [3289, 3352, 3417, 3483, 3550, 3619, 3689, 3761, 3834, 3908],
      'E': [3382, 3463, 3547, 3633, 3721, 3811, 3904, 3998, 4095, 4195],
      'F': [3502, 3587, 3673, 3762, 3854, 3948, 4043, 4141, 4242, 4345, 4451],
      'G': [3912, 4007, 4104, 4204, 4306, 4411, 4519, 4629, 4742, 4857, 4976],
      'H': [4547, 4658, 4771, 4888, 5007, 5129, 5255, 5383, 5515, 5650, 5788],
      'I': [4792, 4932, 5076, 5225, 5379, 5537, 5699, 5867, 6039, 6217, 6400, 6589],
      'J': [5699, 5867, 6039, 6217, 6400, 6589, 6783, 6983, 7189, 7402, 7620, 7845, 8077],
      'K': [7160, 7371, 7589, 7813, 8044, 8282, 8527, 8780, 9040, 9308, 9583, 9868, 10160],
    },
  },
  vergoedingen: [],
};
