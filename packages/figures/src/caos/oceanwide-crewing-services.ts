import type { Cao } from '../types.js';

/**
 * Oceanwide - Nautilus EU CBA (Collective Bargaining Agreement for EU seafarers) 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Oceanwide - Nautilus EU CBA (Collective Bargaining Agreement for EU seafarers)
 * https://cao-kijker.awvn.nl/bestanden/4297_01-01-2026%20tot%2001-01-2029_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-01-01 (month) uit de bron
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoOceanwideCrewingServices2026: Cao = {
  id: 'oceanwide-crewing-services',
  name: "Oceanwide - Nautilus EU CBA (Collective Bargaining Agreement for EU seafarers)",
  year: 2026,
  effectiveNote: "Cao 2026-01-01 t/m 2028-12-31; loontabel per 2026-01-01. Let op: Geconsolideerde maandlonen in euro inclusief vast overwerk (8 uur per dag plus maximaal 2 uur vast overwerk, 7 dagen per week; 1 periode op / 1 periode af), exclusief vakantietoeslag. Jaarlijkse indexatie volgt de loonaanpassingen van de cao Koopvaardij (VWH); per 1-1-2026 was dat 3,95%. Latere indexaties zijn niet bekend. Pensioen bij BPFK (Bedrijfstakpensioenfonds Koopvaardij); werkgever en werknemer betalen elk 50% van de premie, het premiepercentage staat niet in de cao. Groepen Hotel A t/m D: A steward/bartender, B o.a. receptionist/kok, C o.a. sous chef, D head chef/hotel manager. Ook dagloners: dagloon = maandloon x 12 + 8% vakantietoeslag / 182,5 dagen. Cao met Oceanwide Expeditions Crew & Staff B.V. en Nautilus International (Engelstalig).",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/4297_01-01-2026%20tot%2001-01-2029_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      '3O': [3466, 3530, 3594, 3658, 3723, 3787, 3851, 3915, 3979, 4043, 4107, 4172, 4236],
      '4E': [3466, 3530, 3594, 3658, 3723, 3787, 3851, 3915, 3979, 4043, 4107, 4172, 4236],
      'ETO': [4337, 4406, 4474, 4543, 4611, 4680, 4748, 4817, 4885, 4954, 5022, 5091, 5159],
      '3E': [4337, 4406, 4474, 4543, 4611, 4680, 4748, 4817, 4885, 4954, 5022, 5091, 5159],
      '2O': [4515, 4609, 4703, 4797, 4891, 4985, 5079, 5173, 5267, 5361, 5455, 5549, 5643],
      '2E': [5761, 5851, 5940, 6030, 6119, 6209, 6298, 6388, 6477, 6567, 6657, 6746, 6836],
      'CO': [6273, 6389, 6504, 6620, 6736, 6852, 6967, 7083, 7199, 7314, 7430, 7546, 7661],
      'CE': [6634, 6762, 6890, 7018, 7146, 7274, 7402, 7530, 7658, 7786, 7914, 8042, 8170],
      'Staff Captain': [6812, 6938, 7064, 7190, 7316, 7442, 7568, 7694, 7820, 7947, 8073, 8199, 8325],
      'Master': [8962, 9128, 9294, 9460, 9626, 9792, 9958, 10124, 10290, 10456, 10622, 10788, 10954],
      'Wiper': [3228, 3279, 3330, 3381, 3431, 3482, 3533, 3584, 3635, 3686, 3737, 3788, 3839],
      'OS': [3228, 3279, 3330, 3381, 3431, 3482, 3533, 3584, 3635, 3686, 3737, 3788, 3839],
      'Motorman': [3347, 3400, 3453, 3505, 3558, 3611, 3664, 3717, 3769, 3822, 3875, 3928, 3981],
      'AB': [3347, 3400, 3453, 3505, 3558, 3611, 3664, 3717, 3769, 3822, 3875, 3928, 3981],
      'Fitter': [3466, 3521, 3575, 3630, 3685, 3740, 3794, 3849, 3904, 3958, 4013, 4068, 4123],
      'Bosun': [3466, 3521, 3575, 3630, 3685, 3740, 3794, 3849, 3904, 3958, 4013, 4068, 4123],
      'Ass Elec': [3585, 3642, 3698, 3755, 3812, 3868, 3925, 3981, 4038, 4095, 4151, 4208, 4264],
      'Elec': [3704, 3763, 3821, 3880, 3938, 3997, 4055, 4114, 4172, 4231, 4289, 4348, 4406],
      'Hotel A': [3228, 3279, 3330, 3381, 3431, 3482, 3533, 3584, 3635, 3686, 3737, 3788, 3839],
      'Hotel B': [3347, 3400, 3453, 3505, 3558, 3611, 3664, 3717, 3769, 3822, 3875, 3928, 3981],
      'Hotel C': [3466, 3521, 3575, 3630, 3685, 3740, 3794, 3849, 3904, 3958, 4013, 4068, 4123],
      'Hotel D': [4117, 4179, 4241, 4303, 4366, 4428, 4490, 4552, 4615, 4677, 4739, 4801, 4864],
    },
  },
  vergoedingen: [],
};
