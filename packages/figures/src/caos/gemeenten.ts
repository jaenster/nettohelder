import type { Cao } from '../types.js';

/**
 * Cao Gemeenten (SGO) — salaristabel per 1 januari 2026. Vaste schaal × periodiek
 * tabel; schalen 1–18 plus de tussenschalen 10A en 11A. Lage periodieken in de
 * onderste schalen ontbreken omdat het schaalbedrag dan onder het cao-minimum
 * (€16/uur per 1 jan 2026) zou liggen — de tabel start daar op een hogere periodiek.
 *
 * IKB (Individueel Keuzebudget) = 17,05% van het salaris: 8% (vakantietoelage),
 * 7,55% (voormalige eindejaarsuitkering) en 1,5% (min. €33,33/maand). Gemodelleerd
 * als vakantiegeld 8% + eindejaarsuitkering 7,55% zodat de engine niet dubbeltelt;
 * de losse 1,5%-component (met bodembedrag) is niet als zuiver percentage te vangen
 * en blijft buiten beschouwing — netto licht conservatief.
 *
 * Volgende loonstap volgt per 1 juli 2026 (+0,75% indicatief) en 1 januari 2027;
 * niet meegenomen. Pensioen = ABP.
 * Bron: officiële VNG cao-tekst / salaristabel Cao Gemeenten 2025-2027.
 */
export const caoGemeenten2026: Cao = {
  id: 'gemeenten',
  name: 'Cao Gemeenten',
  year: 2026,
  effectiveNote: 'Salaristabel per 1 jan 2026 (schalen 1–18 incl. 10A/11A). Volgende stap per 1 jul 2026; IKB-component 1,5% (bodem €33,33) niet in % verwerkt.',
  sourceUrl: 'https://www.caogemeenten.nl/cao-gemeenten-2025-2027/salaris-salaristoeslagen-en-vergoedingen',
  pensioenfondsId: 'abp',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0755, // IKB 17,05% − 8% vakantietoelage − 1,5% vaste component
  salary: {
    kind: 'table',
    hoursPerWeek: 36,
    stepLabel: 'trede',
    unit: 'maand',
    schalen: {
      '1': [2304, 2441, 2448, 2495, 2543, 2591, 2639, 2686, 2734],
      '2': [2454, 2519, 2585, 2650, 2715, 2781, 2846, 2912, 2978],
      '3': [2441, 2472, 2554, 2637, 2719, 2802, 2885, 2967, 3050, 3133, 3215],
      '4': [2441, 2455, 2547, 2639, 2731, 2823, 2914, 3006, 3098, 3190, 3282, 3374],
      '5': [2441, 2524, 2625, 2726, 2828, 2928, 3029, 3130, 3231, 3333, 3433, 3534],
      '6': [2564, 2667, 2770, 2873, 2976, 3079, 3181, 3284, 3387, 3490, 3593, 3696],
      '7': [2840, 2946, 3053, 3160, 3267, 3374, 3481, 3587, 3695, 3801, 3908, 4015],
      '8': [3206, 3323, 3441, 3558, 3676, 3793, 3912, 4029, 4147, 4264, 4382, 4499],
      '9': [3524, 3661, 3799, 3936, 4073, 4210, 4348, 4485, 4622, 4759, 4896, 5033],
      '10': [3777, 3939, 4100, 4262, 4424, 4585, 4746, 4908, 5070, 5232, 5393, 5554],
      '10A': [4132, 4298, 4464, 4630, 4795, 4961, 5126, 5292, 5458, 5622, 5784, 5947],
      '11': [4465, 4637, 4809, 4981, 5153, 5325, 5498, 5667, 5836, 6005, 6174, 6343],
      '11A': [4884, 5056, 5228, 5399, 5570, 5739, 5908, 6077, 6246, 6414, 6582, 6751],
      '12': [5303, 5475, 5645, 5814, 5982, 6151, 6319, 6488, 6657, 6826, 6995, 7163],
      '13': [5885, 6053, 6222, 6390, 6559, 6728, 6897, 7066, 7234, 7402, 7571, 7740],
      '14': [6232, 6436, 6640, 6843, 7047, 7251, 7455, 7659, 7863, 8066, 8270, 8474],
      '15': [6679, 6914, 7150, 7385, 7621, 7856, 8092, 8328, 8563, 8798, 9034, 9270],
      '16': [7130, 7404, 7678, 7953, 8227, 8501, 8776, 9050, 9324, 9599, 9873, 10147],
      '17': [7857, 8153, 8449, 8745, 9041, 9336, 9632, 9928, 10224, 10520, 10816, 11112],
      '18': [8676, 8995, 9312, 9631, 9948, 10267, 10584, 10903, 11220, 11539, 11856, 12175],
    },
  },
  vergoedingen: [],
};
