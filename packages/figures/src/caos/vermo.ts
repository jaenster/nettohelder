import type { Cao } from '../types.js';

/**
 * Cao Vermo 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Vermo
 * https://caovermo.nl/assets/uploads/files/43/salaristabel_vermo_vanaf_1_januari_2026.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-01-01 (month) uit de bron
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoVermo2026: Cao = {
  id: 'vermo',
  name: "Cao Vermo",
  year: 2026,
  effectiveNote: "Cao 2026-01-01 t/m 2027-12-31; loontabel per 2026-01-01. Let op: Per 1-1-2026 eerst CPI-verhoging (2,9% volgens CNV), daarna salarissen en schalen + € 300 bruto per jaar bij voltijd, inclusief vakantiegeld en eindejaarsuitkering (€ 230 loonsverhoging + € 70 vitaliteitsbudget, uitbetaald in het salaris); dat vaste bedrag is niet opgenomen Per 1-1-2027 automatische prijscompensatie op basis van CPI juni-juni (minimaal 0,5%, maximaal 5%, rest schuift door); uitkomst onbekend Loonsverhogingen vorige cao: 1-1-2025 3% (inflatiecorrectie) plus 1,75%; niet opgenomen omdat de samenhang/volgorde niet verifieerbaar is Vakantiebijslag 8% en eindejaarsuitkering 8,33% (minimaal € 1.750 bij voltijd) en 36-urige werkweek volgens cao-tekst 2023; niet geverifieerd in de cao 2026-2027 Pensioen bij ABP; werknemerspremie niet in de cao opgenomen Loontabel kan per 1-1-2027 tussentijds worden aangepast (onderzoek loongebouw/RatoPro) Salaristabel vanaf 1 januari 2026 (caovermo.nl, hele euro’s per maand, o.b.v. 36 uur). Flexschalen voor jongeren tot 21 jaar niet opgenomen.",
  sourceUrl: "https://caovermo.nl/assets/uploads/files/43/salaristabel_vermo_vanaf_1_januari_2026.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 36,
    schalen: {
      '1': [2393, 2444, 2495, 2547, 2600, 2651],
      '2': [2348, 2418, 2489, 2559, 2631, 2703, 2773, 2841, 2914],
      '3': [2366, 2456, 2546, 2634, 2723, 2814, 2902, 2992, 3082, 3172],
      '4': [2350, 2449, 2547, 2648, 2745, 2846, 2945, 3044, 3144, 3242, 3342],
      '5': [2424, 2533, 2640, 2751, 2861, 2971, 3079, 3188, 3297, 3406, 3517],
      '6': [2466, 2577, 2689, 2801, 2912, 3025, 3133, 3245, 3357, 3468, 3580, 3694],
      '7': [2765, 2880, 2995, 3112, 3227, 3342, 3458, 3574, 3691, 3806, 3921, 4037],
      '8': [3160, 3288, 3415, 3542, 3669, 3797, 3925, 4054, 4179, 4308, 4432, 4561],
      '9': [3505, 3653, 3804, 3951, 4100, 4246, 4396, 4546, 4693, 4841, 4991, 5140],
      '10': [3780, 3955, 4129, 4306, 4479, 4654, 4830, 5003, 5178, 5353, 5528, 5701],
      '11': [4522, 4709, 4896, 5083, 5267, 5454, 5642, 5826, 6008, 6191, 6372, 6557],
      '12': [5430, 5617, 5802, 5984, 6166, 6348, 6530, 6714, 6896, 7080, 7262, 7444],
      '13': [6060, 6242, 6424, 6607, 6789, 6972, 7154, 7338, 7521, 7701, 7887, 8068],
      '14': [6438, 6657, 6878, 7097, 7320, 7540, 7759, 7980, 8203, 8421, 8642, 8863],
      '15': [6920, 7175, 7431, 7685, 7939, 8193, 8449, 8704, 8960, 9213, 9468, 9724],
      '16': [7408, 7705, 8002, 8300, 8596, 8892, 9190, 9486, 9782, 10079, 10377, 10672],
      '17': [8195, 8515, 8835, 9153, 9475, 9797, 10118, 10439, 10757, 11077, 11397, 11718],
      '18': [9082, 9426, 9771, 10115, 10458, 10803, 11146, 11491, 11836, 12179, 12523, 12868],
      '10A': [4165, 4342, 4521, 4703, 4882, 5060, 5240, 5419, 5597, 5776, 5951, 6128],
      '11A': [4976, 5164, 5349, 5533, 5721, 5902, 6085, 6267, 6450, 6631, 6815, 6998],
    },
  },
  vergoedingen: [],
};
