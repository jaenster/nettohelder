import type { Cao } from '../types.js';

export const caoGgz2026: Cao = {
  id: 'ggz',
  name: 'Cao GGZ',
  year: 2026,
  effectiveNote:
    'Bruto maandsalarissen uit "CAO GGZ 2025-2026 Salarisschalen niveau 1 januari 2026" (cao ggz, looptijd 1-1-2025 t/m 31-7-2026), op basis van een arbeidsduur van 36 uur per week. Per FWG-salarisschaal (10 t/m 80) zijn de treden (periodieken) in volgorde opgenomen; de array-index komt overeen met de trede zoals in de tabel (schalen 35/40/45/50/55/60/65 starten op trede 1 — hun laagste officiële functionele trede — terwijl 10/15/20/25/30/70/75/80 op trede 0 starten). Bedragen met een * in de bron zijn opgehoogd naar het wettelijk minimumuurloon van € 16,- bruto. De aparte aanloop-/leerling-/AIOS-/Medisch Specialisten-schalen zijn niet opgenomen. Let op: per 1 juli 2026 geldt een loonsverhoging van 3% (laatste cao-maand); vanaf dat moment gelden hogere bedragen dan hier opgenomen.',
  sourceUrl: 'https://cms.denederlandseggz.nl/assets/publications/CAO-GGZ-2025-2026-incl-WMLCPI-per-1-1-26.pdf',
  pensioenfondsId: 'pfzw',
  vakantiegeldPct: 0.0833,
  eindejaarsuitkeringPct: 0.0833,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 36,
    schalen: {
      '10': [2504, 2504, 2504, 2504, 2504, 2504, 2526, 2589, 2655],
      '15': [2504, 2504, 2504, 2504, 2526, 2589, 2655, 2729, 2804],
      '20': [2504, 2504, 2504, 2504, 2526, 2589, 2655, 2729, 2804, 2872, 2950],
      '25': [2504, 2504, 2526, 2589, 2655, 2729, 2804, 2872, 2950, 3013, 3088],
      '30': [2504, 2526, 2655, 2729, 2804, 2872, 2950, 3013, 3088, 3157, 3229],
      '35': [2655, 2804, 2872, 2950, 3013, 3088, 3157, 3229, 3304, 3379, 3456],
      '40': [2804, 2950, 3013, 3088, 3157, 3229, 3304, 3379, 3456, 3537, 3621, 3711, 3803],
      '45': [3088, 3229, 3304, 3379, 3456, 3537, 3621, 3711, 3803, 3883, 3975, 4064, 4149],
      '50': [3456, 3621, 3803, 3883, 3975, 4064, 4149, 4234, 4322, 4412, 4494, 4579],
      '55': [3883, 4064, 4234, 4412, 4494, 4579, 4673, 4770, 4867, 4952, 5047, 5140],
      '60': [4412, 4579, 4770, 4952, 5140, 5319, 5399, 5481, 5565, 5646, 5730],
      '65': [5140, 5319, 5481, 5646, 5813, 5979, 6146, 6314, 6395, 6476, 6559, 6638, 6716],
      '70': [5813, 6065, 6314, 6559, 6798, 6956, 7146, 7336, 7526, 7621, 7719, 7814, 7909],
      '75': [6798, 7049, 7336, 7621, 7909, 8101, 8301, 8514, 8728, 8834, 8941, 9066, 9193, 9316, 9442],
      '80': [7909, 8195, 8514, 8834, 9193, 9442, 9690, 9940, 10191, 10317, 10443, 10568, 10693, 10820, 10945],
    },
  },
  vergoedingen: [],
};
