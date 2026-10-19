import type { Cao } from '../types.js';

export const caoSociaalWerk2026: Cao = {
  id: 'sociaalwerk',
  name: 'Cao Sociaal Werk',
  year: 2026,
  effectiveNote:
    'Bruto maandsalarissen uit "Salaristabellen Cao Sociaal Werk 2025-2027", salaristabel per 1 oktober 2026 (+2,1% t.o.v. 1 oktober 2025), bij een voltijd dienstverband van 36 uur per week. Deze tabel geldt vanaf 1 oktober 2026; van 1 januari t/m 30 september 2026 gold nog de tabel per 1 oktober 2025. Per schaal (1 t/m 15) zijn de functionele periodieken opgenomen: trede 0 = periodieknummer 0, oplopend t/m het hoogste periodieknummer van die schaal (schaal 1: t/m 11, schaal 2: t/m 12, schaal 3: t/m 13, schaal 4-15: t/m 15). De aanloopperiodiek "Start", de garantieperiodieken (a t/m e, alleen voor werknemers in dienst van voor 31-12-2003) en de aparte tabel "inclusief arbeidsmarkttoeslag middeninkomens" (schaal 4 t/m 9, primair proces) zijn niet als treden opgenomen. Salaris kan nooit lager zijn dan het cao-WML-maandbedrag (vanaf 1-1-2026: € 2.303; bedrag per 1-7-2026 werd in juni 2026 bekendgemaakt).',
  sourceUrl:
    'https://www.sociaalwerk-werkt.nl/sites/fcb_sociaalwerk/files/2025-11/Salaristabellen%20Cao%20Sociaal%20Werk%202025-2027.pdf',
  pensioenfondsId: 'pfzw',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.083,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 36,
    schalen: {
      '1': [2382, 2391, 2448, 2510, 2567, 2626, 2690, 2758, 2821, 2892, 2989, 3073],
      '2': [2382, 2448, 2510, 2567, 2626, 2690, 2758, 2821, 2892, 2989, 3073, 3172, 3261],
      '3': [2394, 2448, 2510, 2567, 2626, 2690, 2758, 2821, 2892, 2989, 3073, 3172, 3261, 3359, 3444],
      '4': [2568, 2626, 2690, 2758, 2821, 2892, 2989, 3073, 3172, 3261, 3359, 3444, 3534, 3602, 3683],
      '5': [2635, 2690, 2758, 2821, 2892, 2989, 3073, 3172, 3261, 3359, 3444, 3534, 3602, 3683, 3753, 3895, 3988],
      '6': [2930, 2989, 3073, 3172, 3261, 3359, 3444, 3534, 3602, 3683, 3753, 3895, 3988, 4088, 4193, 4281, 4375],
      '7': [3198, 3261, 3359, 3444, 3534, 3602, 3683, 3753, 3895, 3988, 4088, 4193, 4281, 4375, 4468, 4619, 4779],
      '8': [3468, 3534, 3602, 3683, 3753, 3895, 3988, 4088, 4193, 4281, 4375, 4468, 4619, 4779, 4942, 5103, 5265],
      '9': [3753, 3895, 3988, 4088, 4193, 4281, 4375, 4468, 4619, 4779, 4942, 5103, 5265, 5436, 5625, 5825],
      '10': [4088, 4193, 4281, 4375, 4468, 4619, 4779, 4942, 5103, 5265, 5436, 5625, 5825, 6026, 6240, 6454],
      '11': [4375, 4468, 4619, 4779, 4942, 5103, 5265, 5436, 5625, 5825, 6026, 6240, 6454, 6680, 6920, 7164],
      '12': [4779, 4942, 5103, 5265, 5436, 5625, 5825, 6026, 6240, 6454, 6680, 6920, 7164, 7419, 7690, 7972],
      '13': [5265, 5436, 5625, 5825, 6026, 6240, 6454, 6680, 6920, 7164, 7419, 7690, 7972, 8268, 8716, 9184],
      '14': [5625, 5825, 6026, 6240, 6454, 6680, 6920, 7164, 7419, 7690, 7972, 8268, 8716, 9184, 9676, 10199],
      '15': [6026, 6240, 6454, 6680, 6920, 7164, 7419, 7690, 7972, 8268, 8716, 9184, 9676, 10199, 10745, 11323],
    },
  },
  vergoedingen: [],
};
