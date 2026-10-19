import type { Cao } from '../types.js';

/**
 * Cao HTM 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao HTM
 * https://www.cnv.nl/documents/5961/Cao_HTM_2024-2026_b2ccjsW.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-01-01 (month) uit de bron
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoHtm2026: Cao = {
  id: 'htm',
  name: "Cao HTM",
  year: 2026,
  effectiveNote: "Cao 2024-01-01 t/m 2026-06-30; loontabel per 2026-01-01. Let op: Standaardwerktijd: 36,93 uur per week voor rijdend personeel, 37,85 uur per week voor overig personeel Eindejaarsuitkering is een vast bedrag: € 3.375 bruto in 2025 (gemaximeerd op het maandsalaris van de hoogste trede van schaal 55); bedrag 2026 niet gevonden Pensioen bij ABP; werknemersdeel volgens ABP-premie, niet in de cao vermeld en niet opgenomen Minimum uurloon € 16 bruto per 1-1-2024 (behalve stagiairs en leeftijdstredes) Cao liep af op 30-6-2026; onderhandelingen over een nieuwe cao lopen nog (CNV, 29-9-2026), loonsverhoging na 1-1-2026 nog niet bekend Salaristabel per 1-1-2026 overgenomen van de tabel-afbeelding in bijlage 2 (per maand, hele euro's). Groepen 1-5, 54 en 55 vanaf trede 5 (21 jaar; lagere treden zijn leeftijdstreden 16-20 jaar); 55 en 62 zijn groepen met ingebouwde onregelmatigheidstoeslag. Groepen 13-17 (tactisch en strategisch management, RSP) alleen 70%, 100% (normbedrag) en 110%; de RSP-variant van groep 12 (€ 5.947 / € 8.496 / € 9.345) niet opgenomen.",
  sourceUrl: "https://www.cnv.nl/documents/5961/Cao_HTM_2024-2026_b2ccjsW.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      '1': [2854, 2937, 3021, 3109, 3154, 3256, 3256, 3324, 3324, 3402, 3402, 3494, 3494, 3581, 3581, 3659],
      '2': [2973, 3061, 3154, 3256, 3324, 3402, 3402, 3494, 3494, 3581, 3581, 3659, 3659, 3743, 3743, 3829],
      '3': [3021, 3109, 3206, 3324, 3402, 3581, 3581, 3659, 3659, 3743, 3743, 3829, 3829, 3908, 3908, 3984],
      '4': [3061, 3154, 3256, 3402, 3494, 3659, 3743, 3743, 3829, 3829, 3908, 3908, 3984, 3984, 4065, 4065, 4150],
      '5': [3154, 3256, 3402, 3581, 3743, 3829, 3908, 3984, 3984, 4065, 4065, 4150, 4150, 4233, 4233, 4315],
      '6': [3402, 3581, 3743, 3829, 3908, 3984, 4150, 4233, 4315, 4315, 4405, 4405, 4495],
      '7': [3659, 3743, 3908, 4065, 4233, 4405, 4591, 4697, 4792, 4792, 4877, 4877, 4972],
      '8': [4065, 4233, 4405, 4591, 4792, 4972, 5059, 5155, 5235, 5235, 5319, 5319, 5489],
      '9': [4495, 4591, 4792, 4972, 5155, 5319, 5489, 5673, 5845, 5845, 6004, 6004, 6159],
      '10': [4859, 5046, 5228, 5412, 5597, 5782, 5965, 6151, 6333, 6520, 6701],
      '11': [5422, 5632, 5838, 6047, 6253, 6462, 6670, 6881, 7086, 7296, 7503],
      '12': [6115, 6357, 6594, 6831, 7067, 7307, 7543, 7784, 8022, 8259, 8496],
      '13': [6746, 9638, 10602],
      '14': [7724, 11035, 12138],
      '15': [8882, 12689, 13958],
      '16': [10315, 14735, 16209],
      '17': [12060, 17229, 18952],
      '54': [3154, 3206, 3256, 3324, 3494, 3581, 3659, 3743, 3829, 3912, 3912, 3998, 3998, 4086, 4086, 4170],
      '55': [3686, 3733, 3789, 3855, 4026, 4111, 4186, 4274, 4357, 4447, 4447, 4541, 4541, 4628, 4628, 4713],
      '62': [3935, 4112, 4275, 4360, 4446, 4525, 4696, 4779, 4863, 4863, 4958, 4958, 5046],
    },
  },
  vergoedingen: [],
};
