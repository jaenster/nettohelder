import type { Cao } from '../types.js';

/**
 * Cao Westlake Epoxy B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Westlake Epoxy B.V.
 * https://cao-kijker.awvn.nl/bestanden/4298_01-04-2025%20tot%2001-04-2028_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2025-04-01 (month) uit de bron
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-04-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoWestlakeEpoxy2026: Cao = {
  id: 'westlake-epoxy',
  name: "Cao Westlake Epoxy B.V.",
  year: 2026,
  effectiveNote: "Cao 2025-04-01 t/m 2028-03-31; loontabel per 2025-04-01. Let op: Onderhandelingsresultaat (CNV) / eindbod (FNV) cao 1-4-2025 t/m 31-3-2028 Verhoging per 1-4-2026 is gelijk aan de AWVN-contractloonstijging Chemie over 2025; volgens de AWVN cao-kijker is dat 3,57%. Verhoging per 1-4-2027 volgt de AWVN-contractloonstijging Chemie over 2026 (nog onbekend) Salarisschalen per april 2025 (broadbanding): alleen minimum en maximum maandsalaris per salarisgroep, geen treden Maandsalaris is 1/14 van het pensioenbasissalaris; in april en december een uitkering ineens van elk één maandsalaris (hier als 8,33% vakantietoeslag en 8,33% eindejaarsuitkering opgenomen) QIP-kwartaalbonus vervallen per 1-7-2025; in december 2025 eenmalig 1,6% van de som van het kwartaal-pensioenbasissalaris (Q3 en Q4) Werkgever heeft een voorgenomen besluit tot beëindiging van de productielocatie Pernis aangekondigd; sociaal plan 2024 blijft van kracht Pensioenpremie werknemer niet gevonden",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/4298_01-04-2025%20tot%2001-04-2028_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.0833,
  eindejaarsuitkeringPct: 0.0833,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      '7': [3885, 6077],
      '8': [3431, 5269],
      '9': [3426, 4722],
      '10': [3283, 4204],
      '11': [3179, 3929],
      '12': [3089, 3716],
      '13': [3018, 3541],
      '14': [2945, 3460],
      '15': [2879, 3319],
    },
  },
  periods: [
    {
      from: '2026-04-01',
      note: "+3,57% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          '7': [4023.69, 6293.95],
          '8': [3553.49, 5457.1],
          '9': [3548.31, 4890.58],
          '10': [3400.2, 4354.08],
          '11': [3292.49, 4069.27],
          '12': [3199.28, 3848.66],
          '13': [3125.74, 3667.41],
          '14': [3050.14, 3583.52],
          '15': [2981.78, 3437.49],
        },
      },
    },
  ],
  vergoedingen: [],
};
