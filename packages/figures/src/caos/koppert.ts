import type { Cao } from '../types.js';

/**
 * Cao Koppert B.V. en Koppert Beheer B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Koppert B.V. en Koppert Beheer B.V.
 * https://www.cnv.nl/documents/5940/Koppert_cao-01-05-2026_tm_30-04-2028.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-05-01 (month) uit de bron
 *   - Basistabel 1-1-2026 teruggerekend uit de tabel per 2026-05-01 (gedeeld door +3,5%)
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-05-01, 2027-05-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoKoppert2026: Cao = {
  id: 'koppert',
  name: "Cao Koppert B.V. en Koppert Beheer B.V.",
  year: 2026,
  effectiveNote: "Cao 2026-05-01 t/m 2028-04-30; loontabel per 2026-05-01. Let op: Per 1-5-2026: 3,5% voor HAY 8 t/m 16, maar 2,5% voor HAY 17 t/m 22; per 1-5-2027: 3,5% voor alle schalen Salarisschalen hebben geen treden: per schaal minimum, norm (100%) en maximum (110%), als drie treden opgenomen; tabel per 1-5-2027 staat ook in de cao (bijlage 1) Individuele salarisverhoging afhankelijk van beoordeling, tot maximaal 110% van de schaal Variabel beloningsbeleid volgens werkgeversbeleid; geen vaste eindejaarsuitkering Pensioen bij BPL (Bedrijfspensioenfonds voor de Landbouw); werknemerspremie staat niet in de cao en is niet opgenomen",
  sourceUrl: "https://www.cnv.nl/documents/5940/Koppert_cao-01-05-2026_tm_30-04-2028.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      'HAY 8': [2788.93, 3039.21, 3343.13],
      'HAY 9': [2788.93, 3302.94, 3633.24],
      'HAY 10': [2788.93, 3589.57, 3948.53],
      'HAY 11': [2925.85, 3901.13, 4291.25],
      'HAY 12': [3179.73, 4239.66, 4663.61],
      'HAY 13': [3455.68, 4607.57, 5068.32],
      'HAY 14': [3854.9, 5139.86, 5653.85],
      'HAY 15': [4356.02, 5808.02, 6388.82],
      'HAY 16': [4922.28, 6563.03, 7219.34],
      'HAY 17': [5300.43, 7067.23, 7773.95],
      'HAY 18': [6166.67, 8222.21, 9044.43],
      'HAY 19': [7257.96, 9677.29, 10645.01],
      'HAY 20': [8572.36, 11429.81, 12572.78],
      'HAY 21': [10095.99, 13461.32, 14807.46],
      'HAY 22': [12741.31, 16988.42, 18687.27],
    },
  },
  periods: [
    {
      from: '2026-05-01',
      note: "+3,5% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          'HAY 8': [2886.54, 3145.58, 3460.14],
          'HAY 9': [2886.54, 3418.54, 3760.4],
          'HAY 10': [2886.54, 3715.21, 4086.73],
          'HAY 11': [3028.25, 4037.67, 4441.44],
          'HAY 12': [3291.02, 4388.05, 4826.84],
          'HAY 13': [3576.63, 4768.83, 5245.71],
          'HAY 14': [3989.82, 5319.75, 5851.73],
          'HAY 15': [4508.48, 6011.3, 6612.43],
          'HAY 16': [5094.56, 6792.74, 7472.02],
          'HAY 17': [5485.94, 7314.58, 8046.04],
          'HAY 18': [6382.5, 8509.99, 9360.99],
          'HAY 19': [7511.99, 10015.99, 11017.59],
          'HAY 20': [8872.39, 11829.85, 13012.83],
          'HAY 21': [10449.35, 13932.47, 15325.72],
          'HAY 22': [13187.26, 17583.01, 19341.32],
        },
      },
    },
    {
      from: '2027-05-01',
      note: "+3,5% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          'HAY 8': [2987.57, 3255.68, 3581.24],
          'HAY 9': [2987.57, 3538.19, 3892.01],
          'HAY 10': [2987.57, 3845.24, 4229.77],
          'HAY 11': [3134.24, 4178.99, 4596.89],
          'HAY 12': [3406.21, 4541.63, 4995.78],
          'HAY 13': [3701.81, 4935.74, 5429.31],
          'HAY 14': [4129.46, 5505.94, 6056.54],
          'HAY 15': [4666.28, 6221.7, 6843.87],
          'HAY 16': [5272.87, 7030.49, 7733.54],
          'HAY 17': [5677.95, 7570.59, 8327.65],
          'HAY 18': [6605.89, 8807.84, 9688.62],
          'HAY 19': [7774.91, 10366.55, 11403.21],
          'HAY 20': [9182.92, 12243.89, 13468.28],
          'HAY 21': [10815.08, 14420.11, 15862.12],
          'HAY 22': [13648.81, 18198.42, 20018.27],
        },
      },
    },
  ],
  vergoedingen: [],
};
