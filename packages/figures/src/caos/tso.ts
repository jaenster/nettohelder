import type { Cao } from '../types.js';

/**
 * Cao TSO (TenneT) 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao TSO (TenneT)
 * https://www.cnv.nl/publieke-diensten/energie/cao-tso-tennet/nieuws/hoogst-haalbare-uitkomst-van-de-onderhandelingen-voor-een-nieuwe-cao-tennet-tso-geef-je-stem/
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2025-01-01 (month) uit de bron
 *   - Basistabel 1-1-2026: tabel per 2025-01-01 verhoogd met +3% per 2026-01-01
 *   - Latere tabellen berekend uit de cao-verhogingen (2027-01-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoTso2026: Cao = {
  id: 'tso',
  name: "Cao TSO (TenneT)",
  year: 2026,
  effectiveNote: "Cao 2026-01-01 t/m 2027-08-31; loontabel per 2025-01-01. Let op: Cao 2026-2027 (1-1-2026 t/m 31-8-2027) volgens CNV: 3% per 1-1-2026 en 2% per 1-1-2027; vakantietoeslag 8%, eindejaarsuitkering 6% en salarisschalen (alleen minimum en maximum, per 1-1-2025) uit de cao 2023-2025. Groei binnen de schaal afhankelijk van positie ten opzichte van het RSP (tot 80%: 5,5%, 80-90%: 3,5%, 90-100%: 2,8%). Cao 2023-2025 kende een jaarlijkse bonus flexibele arbeidsvoorwaarden van € 500 bruto in april; niet bevestigd voor de nieuwe cao. Pensioen bij het ABP; werknemerspremie niet in de cao vermeld. Salarisschalen 10 t/m 13 zijn historische schalen; vanaf schaal 10 geldt bij sollicitatie indeling in Hay-schalen.",
  sourceUrl: "https://www.cnv.nl/publieke-diensten/energie/cao-tso-tennet/nieuws/hoogst-haalbare-uitkomst-van-de-onderhandelingen-voor-een-nieuwe-cao-tennet-tso-geef-je-stem/",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.06,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 38,
    schalen: {
      '1': [2541.01, 3251.71],
      '2': [2541.01, 3458.74],
      '3': [2869.58, 4069.53],
      '4': [2979.79, 4788.47],
      '5': [3498.91, 5626.89],
      '6': [3690.49, 6492.09],
      '7': [4210.64, 7446.9],
      '8': [4275.53, 8442.91],
      '9': [4815.25, 9471.88],
      '10': [5031.55, 10508.06],
    },
  },
  periods: [
    {
      from: '2027-01-01',
      note: "+2% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 38,
        schalen: {
          '1': [2591.83, 3316.74],
          '2': [2591.83, 3527.91],
          '3': [2926.97, 4150.92],
          '4': [3039.39, 4884.24],
          '5': [3568.89, 5739.43],
          '6': [3764.3, 6621.93],
          '7': [4294.85, 7595.84],
          '8': [4361.04, 8611.77],
          '9': [4911.56, 9661.32],
          '10': [5132.18, 10718.22],
        },
      },
    },
  ],
  vergoedingen: [],
};
