import type { Cao } from '../types.js';

export const caoKinderopvang2026: Cao = {
  id: 'kinderopvang',
  name: 'Cao Kinderopvang',
  year: 2026,
  effectiveNote:
    'Bruto maandsalarissen bij een voltijds dienstverband van 36 uur per week, geldend per 1 januari 2026 (cao Kinderopvang 2025-2026, voor kindercentra en gastouderbureaus). Per 1-1-2026 is het minimum-uursalaris verhoogd naar € 16,-, wat een minimummaandsalaris van € 2.506 oplevert; salarisnummer 1 t/m 7 worden daaraan gelijkgesteld, wat alleen schaal 1 t/m 4 raakt (bijlage 2, §2.3). De bedragen van schaal 5 t/m 15 zijn per 1-1-2026 ongewijzigd t.o.v. 1 juli 2025 (bijlage 2, §2.2), zoals de cao expliciet vermeldt. Elke array is een salarisschaal; index 0 is de laagste trede (salarisnummer) van die schaal, oplopend t/m de hoogste. Let op: per 1 september 2026 stijgen de salarissen met 1,5% (hogere bedragen dan hier opgenomen). Eindejaarsuitkering is per 1-1-2026 verhoogd van 5,5% naar 8%.',
  sourceUrl:
    'https://www.kinderopvang-werkt.nl/sites/fcb_kinderopvang/files/2025-04/Bijlage-2-Salarisschalen-Cao-Kinderopvang-2025-2026.pdf',
  pensioenfondsId: 'pfzw',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.08,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 36,
    schalen: {
      // Schaal 1 t/m 4: per 1-1-2026 (§2.3), salarisnummer 1-7 gelijkgesteld aan minimum € 2.506.
      '1': [2506, 2506, 2506, 2506, 2506, 2506, 2506, 2517, 2582],
      '2': [2506, 2506, 2506, 2506, 2506, 2517, 2582],
      '3': [2506, 2506, 2506, 2517, 2582, 2641, 2708, 2777, 2846, 2915],
      '4': [2506, 2517, 2582, 2641, 2708, 2777, 2846, 2915, 2990, 3065, 3138],
      // Schaal 5 t/m 15: per 1-1-2026 ongewijzigd t.o.v. 1-7-2025 (§2.2).
      '5': [2517, 2582, 2641, 2708, 2777, 2846, 2915, 2990, 3065, 3138, 3213, 3291, 3374],
      '6': [2641, 2708, 2777, 2846, 2915, 2990, 3065, 3138, 3213, 3291, 3374, 3455, 3536, 3630],
      '7': [2990, 3065, 3138, 3213, 3291, 3374, 3455, 3536, 3630, 3716, 3802, 3894, 3992],
      '8': [3213, 3291, 3374, 3455, 3536, 3630, 3716, 3802, 3894, 3992, 4087, 4187, 4288, 4390],
      '9': [3536, 3630, 3716, 3802, 3894, 3992, 4087, 4187, 4288, 4390, 4497, 4602, 4707, 4823],
      '10': [3894, 3992, 4087, 4187, 4288, 4390, 4497, 4602, 4707, 4823, 4932, 5053, 5172, 5296],
      '11': [4288, 4390, 4497, 4602, 4707, 4823, 4932, 5053, 5172, 5296, 5419, 5543, 5673, 5800, 5939],
      '12': [4823, 4932, 5053, 5172, 5296, 5419, 5543, 5673, 5800, 5939, 6076, 6215, 6358, 6507, 6660],
      '13': [5419, 5543, 5673, 5800, 5939, 6076, 6215, 6358, 6507, 6660, 6805, 6963, 7120, 7280, 7439],
      '14': [6215, 6358, 6507, 6660, 6805, 6963, 7120, 7280, 7439, 7615, 7787, 7959, 8136, 8319, 8505],
      '15': [7120, 7280, 7439, 7615, 7787, 7959, 8136, 8319, 8505, 8692, 8883, 9077, 9277, 9481, 9689],
    },
  },
  vergoedingen: [],
};
