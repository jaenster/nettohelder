import type { Cao } from '../types.js';

/**
 * Cao Cargill Bioindustrial B.V. (Gouda) 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Cargill Bioindustrial B.V. (Gouda)
 * https://cao-kijker.awvn.nl/bestanden/1478_01-01-2025%20tot%2001-01-2027_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-01-01 (month) uit de bron
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoCargillBioindustrial2026: Cao = {
  id: 'cargill-bioindustrial',
  name: "Cao Cargill Bioindustrial B.V. (Gouda)",
  year: 2026,
  effectiveNote: "Cao 2025-01-01 t/m 2026-12-31; loontabel per 2026-01-01. Let op: Aparte cao voor Cargill Bioindustrial B.V. te Gouda (FNV en BVP), niet de cao Cargill B.V. Salarisschalen per 1-1-2025: 4% + € 200; per 1-1-2026: 2,5% + € 100 (eerst het percentage, dan het bedrag) Salarisschalen 2026 klassen A t/m H: 0-lijn en functiejaren FV 1 t/m FV 11; aanloopschalen (85/90/95% van de 0-lijn) niet opgenomen Eindejaarsuitkering (november) van 2% (2025) en 4,5% (2026) van 12 x het maandinkomen; telt niet mee voor de vakantietoeslag Vakantietoeslag 8% van het jaarsalaris, maximaal 8% van 3x het wettelijk minimumloon, minimaal 8% van D 4 Functies in loongroep K en L (tot 218 ORBA-punten) en hoger gaan per 1-1-2026 over naar het Cargill Banding-systeem Pensioen via Pensioenkring Cargill Bioindustrial; premie niet gevonden Normale arbeidsduur gemiddeld 40 uur per week; 5-ploegendienst 33,6 uur",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/1478_01-01-2025%20tot%2001-01-2027_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.045,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      'A': [3117.49, 3163.62, 3205.81, 3249.58, 3287.75, 3345.11],
      'B': [3192.24, 3240.04, 3286.99, 3336.34, 3388.07, 3426.25, 3487.53],
      'C': [3260.73, 3312.47, 3369.74, 3429.45, 3489.14, 3550.44, 3600.56, 3664.2],
      'D': [3342.71, 3406.37, 3472.4, 3539.27, 3609.32, 3676.98, 3779.64, 3852.04],
      'E': [3472.4, 3544.07, 3621.24, 3695.27, 3772.46, 3849.67, 3923.68, 3975.41, 4050.21, 4123.21],
      'F': [3633.18, 3714.32, 3797.95, 3881.48, 3963.49, 4046.23, 4130.6, 4214.15, 4292.13, 4369.89],
      'G': [3879.16, 3971.46, 4065.33, 4156.86, 4249.16, 4343.09, 4436.16, 4530.08, 4600.11, 4683.72, 4769.09],
      'H': [4126.59, 4238.8, 4348.65, 4461.63, 4573.06, 4684.48, 4798.25, 4908.88, 5021.92, 5136.52, 5233.62, 5329.7],
    },
  },
  vergoedingen: [],
};
