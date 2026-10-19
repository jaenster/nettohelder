import type { Cao } from '../types.js';

/**
 * Cao Royal FloraHolland 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Royal FloraHolland
 * https://www.cnv.nl/voeding/veilingen/cao-royal-floraholland/nieuws/cnv-leden-stemmen-voor-nieuwe-cao-rfh-2026-05-26/
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2025-01-01 (month) uit de bron
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-04-01, 2027-04-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoRoyalFloraholland2026: Cao = {
  id: 'royal-floraholland',
  name: "Cao Royal FloraHolland",
  year: 2026,
  effectiveNote: "Cao 2026-04-01 t/m 2028-03-31; loontabel per 2025-01-01. Let op: Onderhandelingsresultaat april 2026, door CNV-leden aangenomen (26 mei 2026); looptijd 1-4-2026 tot 1-4-2028 Overwerkvergoeding 37% plus pensioenopbouw; compensatie voorbereidingstijd (5 minuten per werkdag) voor logistiek; feestdagentoeslag verlaagd Vakantietoeslag 8,33% van het jaarsalaris en arbeidsduur 38 uur per week volgens de cao-tekst 2024-2026; nieuwe cao-tekst wordt hertaald Pensioen: basisregeling PGB, aanvullend Centraal Beheer PPI; onder de cao 2024-2026 was de werknemerspremie 5,0% van het pensioengevend salaris, voor de nieuwe cao niet bevestigd en daarom niet opgenomen Salaristabel per 1-1-2025 uit de cao 2024-2026: alleen minimum en maximum per schaal (C05-C55), opgenomen als [min, max] (bron tabel: https://cao-kijker.awvn.nl/bestanden/0144_01-04-2024%20tot%2001-04-2026_cao.pdf)",
  sourceUrl: "https://www.cnv.nl/voeding/veilingen/cao-royal-floraholland/nieuws/cnv-leden-stemmen-voor-nieuwe-cao-rfh-2026-05-26/",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.0833,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 38,
    schalen: {
      'C05': [2556.88, 2801.14],
      'C10': [2642.1, 2989.82],
      'C15': [2701.75, 3109.75],
      'C20': [2773.02, 3265.06],
      'C25': [2882.02, 3461.47],
      'C30': [3007.24, 3687.6],
      'C35': [3194.23, 3986.81],
      'C40': [3363, 4410.49],
      'C45': [3579.93, 4875.29],
      'C50': [3913.35, 5542.21],
      'C55': [4446.91, 6300.52],
    },
  },
  periods: [
    {
      from: '2026-04-01',
      note: "+3,5% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 38,
        schalen: {
          'C05': [2646.37, 2899.18],
          'C10': [2734.57, 3094.46],
          'C15': [2796.31, 3218.59],
          'C20': [2870.08, 3379.34],
          'C25': [2982.89, 3582.62],
          'C30': [3112.49, 3816.67],
          'C35': [3306.03, 4126.35],
          'C40': [3480.71, 4564.86],
          'C45': [3705.23, 5045.93],
          'C50': [4050.32, 5736.19],
          'C55': [4602.55, 6521.04],
        },
      },
    },
    {
      from: '2027-04-01',
      note: "+3,5% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 38,
        schalen: {
          'C05': [2738.99, 3000.65],
          'C10': [2830.28, 3202.77],
          'C15': [2894.18, 3331.24],
          'C20': [2970.53, 3497.61],
          'C25': [3087.29, 3708.01],
          'C30': [3221.43, 3950.25],
          'C35': [3421.74, 4270.77],
          'C40': [3602.53, 4724.63],
          'C45': [3834.91, 5222.53],
          'C50': [4192.08, 5936.95],
          'C55': [4763.64, 6749.27],
        },
      },
    },
  ],
  vergoedingen: [],
};
