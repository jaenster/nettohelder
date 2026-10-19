import type { Cao } from '../types.js';

/**
 * Cao Papyrus B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Papyrus B.V.
 * https://cao-kijker.awvn.nl/bestanden/2816_01-07-2026%20tot%2001-01-2028_akkoord.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-01-01 (month) uit de bron
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-07-01, 2027-04-01, 2027-07-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoPapyrus2026: Cao = {
  id: 'papyrus',
  name: "Cao Papyrus B.V.",
  year: 2026,
  effectiveNote: "Cao 2026-07-01 t/m 2027-12-31; loontabel per 2026-01-01. Let op: Cao 1-1-2025 t/m 30-6-2026; onderhandelingsresultaat (27-7-2026, FNV) voor nieuwe cao 1-7-2026 t/m 31-12-2027 met 1,2% per 1-7-2026, 2,5% per 1-4-2027 en 1% per 1-7-2027 Salarisschalen per 1-1-2026 in hele euro's, alleen aanvangs- en eindsalaris per functiegroep (1 t/m 11,5); hier als [min, max]. Periodieken jaarlijks per januari Nieuwe cao: salarisgroep 3 start minimaal op € 18 per uur; minimum uurloon onder oude cao € 14,00 Vakantietoeslag 8% over de feitelijk genoten maandinkomens (juni t/m mei), uitbetaald in mei Werknemers betalen 1/3 van de pensioenkosten; percentage wordt jaarlijks in april vastgesteld (niet vermeld)",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/2816_01-07-2026%20tot%2001-01-2028_akkoord.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      '1': [2724, 3146],
      '2': [2833, 3246],
      '3': [2895, 3371],
      '4': [2996, 3517],
      '5': [3125, 3719],
      '6': [3274, 3903],
      '7': [3434, 4213],
      '8': [3628, 4508],
      '9': [3862, 4957],
      '10': [4228, 5675],
      '11': [4792, 6810],
      '4,5': [2996, 3622],
      '7,5': [3434, 4362],
      '8,5': [3628, 4731],
      '9,5': [3862, 5316],
      '10,5': [4228, 6248],
      '11,5': [4792, 7740],
    },
  },
  periods: [
    {
      from: '2026-07-01',
      note: "+1,2% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          '1': [2756.69, 3183.75],
          '2': [2867, 3284.95],
          '3': [2929.74, 3411.45],
          '4': [3031.95, 3559.2],
          '5': [3162.5, 3763.63],
          '6': [3313.29, 3949.84],
          '7': [3475.21, 4263.56],
          '8': [3671.54, 4562.1],
          '9': [3908.34, 5016.48],
          '10': [4278.74, 5743.1],
          '11': [4849.5, 6891.72],
          '4,5': [3031.95, 3665.46],
          '7,5': [3475.21, 4414.34],
          '8,5': [3671.54, 4787.77],
          '9,5': [3908.34, 5379.79],
          '10,5': [4278.74, 6322.98],
          '11,5': [4849.5, 7832.88],
        },
      },
    },
    {
      from: '2027-04-01',
      note: "+2,5% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          '1': [2825.61, 3263.35],
          '2': [2938.67, 3367.08],
          '3': [3002.98, 3496.74],
          '4': [3107.75, 3648.18],
          '5': [3241.56, 3857.72],
          '6': [3396.12, 4048.58],
          '7': [3562.09, 4370.14],
          '8': [3763.32, 4676.15],
          '9': [4006.05, 5141.9],
          '10': [4385.7, 5886.68],
          '11': [4970.74, 7064.01],
          '4,5': [3107.75, 3757.1],
          '7,5': [3562.09, 4524.7],
          '8,5': [3763.32, 4907.47],
          '9,5': [4006.05, 5514.29],
          '10,5': [4385.7, 6481.05],
          '11,5': [4970.74, 8028.7],
        },
      },
    },
    {
      from: '2027-07-01',
      note: "+1% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          '1': [2853.86, 3295.98],
          '2': [2968.06, 3400.75],
          '3': [3033.01, 3531.71],
          '4': [3138.83, 3684.67],
          '5': [3273.98, 3896.3],
          '6': [3430.08, 4089.07],
          '7': [3597.71, 4413.85],
          '8': [3800.96, 4722.91],
          '9': [4046.11, 5193.32],
          '10': [4429.56, 5945.54],
          '11': [5020.45, 7134.65],
          '4,5': [3138.83, 3794.67],
          '7,5': [3597.71, 4569.95],
          '8,5': [3800.96, 4956.54],
          '9,5': [4046.11, 5569.43],
          '10,5': [4429.56, 6545.86],
          '11,5': [5020.45, 8108.99],
        },
      },
    },
  ],
  vergoedingen: [],
};
