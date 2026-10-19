import type { Cao } from '../types.js';

/**
 * CAO MBO (Middelbaar Beroepsonderwijs) 2025–2026 — salarisbedragen Bijlage A,
 * tabel per 1 januari 2025 (de tabel die geldt voor het grootste deel van de
 * looptijd 1 aug 2025 – 1 maart 2026, dus de basis voor 2026). Vaste schaal ×
 * regelnummer-tabel, maandsalarissen bij volledige betrekking.
 *
 * Docentenschalen LB/LC/LD/LE (bijlage A: OP). De OBP-loopbaanpatronen LB t/m
 * LE delen dezelfde bedragen als OBP-schalen 10 t/m 13, maar zijn hier expliciet
 * opgenomen omdat de CAO ze als aparte docentenschalen publiceert.
 * OBP-(ondersteunend) schalen 1–14 zijn opgenomen; elke schaal heeft zijn eigen
 * regelnummer-bereik (ragged), getransponeerd zodat schalen[schaal] = bruto per
 * trede oplopend.
 *
 * Vakantietoeslag 8% (art. 6.1) + eindejaarsuitkering 8,33% (art. 6.2).
 * Pensioen = ABP. Bron: mbo-cao.nl Bijlage A (salarisbedragen per 1-1-2025).
 */
export const caoMbo2026: Cao = {
  id: 'mbo',
  name: 'Cao MBO',
  year: 2026,
  effectiveNote:
    'Salaristabel per 1 jan 2025 (Bijlage A), geldig gedurende de looptijd 1 aug 2025 – 1 maart 2026, dus de basis voor 2026. Opgenomen: docentenschalen LB–LE en OBP-schalen 1–14. Niet meegenomen: OBP-schalen 15–18, jeugd-/LIO-/participatieschalen, en een eventuele nieuwe CAO/loonsverhoging na 1 maart 2026.',
  sourceUrl: 'https://www.mbo-cao.nl/bijlagen/bijlage-a-salarisbedragen/',
  pensioenfondsId: 'abp',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: {
    kind: 'table',
    hoursPerWeek: 40,
    stepLabel: 'trede',
    unit: 'maand',
    schalen: {
      LB: [3713, 3873, 4036, 4198, 4360, 4523, 4685, 4846, 5008, 5170, 5333, 5495],
      LC: [4226, 4407, 4587, 4768, 4947, 5128, 5309, 5488, 5669, 5848, 6029, 6210],
      LD: [4817, 5017, 5217, 5418, 5618, 5818, 6019, 6218, 6419, 6620, 6819, 7020],
      LE: [5492, 5667, 5844, 6019, 6194, 6371, 6546, 6721, 6897, 7073, 7249, 7424, 7600],
      '1': [2466, 2466, 2466, 2500, 2547, 2592, 2654],
      '2': [2466, 2466, 2500, 2592, 2654, 2722, 2807, 2891],
      '3': [2466, 2500, 2592, 2722, 2807, 2891, 2971, 3049, 3126],
      '4': [2466, 2466, 2547, 2654, 2807, 2891, 2971, 3049, 3126, 3201, 3277],
      '5': [2466, 2466, 2592, 2722, 2891, 2971, 3049, 3126, 3201, 3277, 3349, 3431],
      '6': [2494, 2588, 2717, 2885, 3045, 3120, 3197, 3271, 3344, 3425, 3503, 3578],
      '7': [2650, 2717, 2885, 3045, 3197, 3344, 3425, 3503, 3578, 3657, 3738, 3822, 3920],
      '8': [2965, 3045, 3197, 3344, 3503, 3657, 3822, 3920, 4007, 4084, 4168, 4254, 4329, 4403],
      '9': [3344, 3503, 3657, 3822, 4007, 4168, 4329, 4481, 4632, 4800, 4948],
      '10': [3713, 3873, 4036, 4198, 4360, 4523, 4685, 4846, 5008, 5170, 5333, 5495],
      '11': [4226, 4407, 4587, 4768, 4947, 5128, 5309, 5488, 5669, 5848, 6029, 6210],
      '12': [4817, 5017, 5217, 5418, 5618, 5818, 6019, 6218, 6419, 6620, 6819, 7020],
      '13': [5492, 5667, 5844, 6019, 6194, 6371, 6546, 6721, 6897, 7073, 7249, 7424, 7600],
      '14': [6268, 6425, 6574, 6731, 6923, 7117, 7313, 7507, 7700, 7906, 8118, 8336],
    },
  },
  vergoedingen: [],
};
