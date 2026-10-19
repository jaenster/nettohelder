import type { Cao } from '../types.js';

/**
 * Cao AAK Netherlands B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao AAK Netherlands B.V.
 * https://cao-kijker.awvn.nl/bestanden/0389_01-01-2026%20tot%2001-01-2027_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-01-01 (month) uit de bron
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoAakNetherlands2026: Cao = {
  id: 'aak-netherlands',
  name: "Cao AAK Netherlands B.V.",
  year: 2026,
  effectiveNote: "Cao 2026-01-01 t/m 2026-12-31; loontabel per 2026-01-01. Let op: Gegevens over 2026 uit het eindbod van 24 maart 2026 (door FNV neutraal aan de leden voorgelegd); vakantietoeslag, eindejaarsuitkering (8% van 12x maandinkomen oktober, in november) en arbeidsduur uit de cao 2025. Pensioen: eigen regeling; werknemerspremie 3% van de pensioengrondslag plus 5% over het pensioengevend inkomen boven € 32.618 (niveau 2025). Niet in de calculator verwerkt. Schaal: salarisschaal per 1 januari 2026 (incl. 3,0%), maandbedragen in hele euro's, fulltime, functiegroepen 1 t/m 11, periodieken 0 t/m 7-9.",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/0389_01-01-2026%20tot%2001-01-2027_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.08,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      '1': [3094, 3121, 3145, 3168, 3192, 3214, 3253, 3277],
      '2': [3137, 3166, 3192, 3219, 3260, 3311, 3349, 3392, 3428],
      '3': [3167, 3196, 3230, 3267, 3318, 3360, 3412, 3452, 3492],
      '4': [3212, 3256, 3312, 3360, 3420, 3464, 3516, 3567, 3617],
      '5': [3312, 3364, 3425, 3478, 3539, 3590, 3651, 3705, 3761],
      '6': [3428, 3489, 3552, 3612, 3679, 3729, 3797, 3856, 3919],
      '7': [3574, 3642, 3706, 3772, 3851, 3912, 3978, 4044, 4109],
      '8': [3765, 3848, 3918, 3985, 4065, 4136, 4214, 4267, 4335],
      '9': [4009, 4097, 4180, 4263, 4350, 4428, 4520, 4586, 4663],
      '10': [4297, 4393, 4489, 4584, 4679, 4776, 4870, 4963, 5038, 5127],
      '11': [4668, 4783, 4890, 5007, 5119, 5235, 5345, 5461, 5549, 5654],
    },
  },
  vergoedingen: [],
};
