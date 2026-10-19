import type { Cao } from '../types.js';

/**
 * Cao Aspen Oss en BioChem Oss 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Aspen Oss en BioChem Oss
 * https://www.cnv.nl/documents/6101/Cao_Aspen_Oss_en_BioChem_Oss_2025-2026.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2025-07-01 (month) uit de bron
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-07-01)
 *
 * Excluded: none stated
 */
export const caoAspenOss2026: Cao = {
  id: 'aspen-oss',
  name: "Cao Aspen Oss en BioChem Oss",
  year: 2026,
  effectiveNote: "Cao 2026-07-01 t/m 2027-06-30; loontabel per 2025-07-01. Let op: Cao 2026-2027 is een eindbod van de werkgever (4 september 2026); de CNV-ledenstemming liep tot 6 oktober 2026, uitslag niet gevonden Eindbod: 2,30% per 1-7-2026 voor iedereen; daarnaast per 1-10-2026 een extra structurele verhoging bij performancescore 4 of 5 (percentages nog niet bepaald) Verhoging 3,2% per 1-7-2025 en salarisschalen uit de cao 2025-2026 Salarisschalen staan in de cao als jaarbedragen met drie tertielen (van/tot); hier omgerekend naar maandbedragen (jaarbedrag / 12) met [minimum, maximum] als twee treden Minimum uurloon (incl. vakantietoeslag) € 16 Vakantietoeslag 8%, maandelijks uitbetaald (sparen kan) Pensioen via PGB: werknemer 5,90%, werkgever 21,25% van de pensioengrondslag; franchise € 18.475 in 2025 (wettelijke franchise, jaarlijks aangepast) WGA-ERD-premie voor 50% op werknemers verhaald",
  sourceUrl: "https://www.cnv.nl/documents/6101/Cao_Aspen_Oss_en_BioChem_Oss_2025-2026.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      'B1': [2429.17, 4126.33],
      'B2': [2876.42, 4888.67],
      'B3': [3415, 5792.92],
      'B4': [4034.92, 6860],
      'M1': [5305.25, 8994.08],
      'M2': [6727.83, 11433.17],
      'O1': [2053.25, 3496.17],
      'O2L': [2347.83, 3984],
      'O2M': [2683.25, 4563.25],
      'O2H': [3059.33, 5213.67],
      'O3': [3496.17, 5935.25],
      'O4': [3984, 6778.67],
      'P1': [4106, 6981.83],
      'P2': [4847.92, 8262.5],
      'P3': [5742, 9746.08],
      'P4': [7093.75, 12063.17],
      'S1': [3912.83, 6656.83],
      'S2': [4725.92, 8028.67],
      'S3': [5681.08, 9664.92],
      'S4': [7175, 12205.58],
    },
  },
  periods: [
    {
      from: '2026-07-01',
      note: "+2,3% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          'B1': [2485.04, 4221.24],
          'B2': [2942.58, 5001.11],
          'B3': [3493.55, 5926.16],
          'B4': [4127.72, 7017.78],
          'M1': [5427.27, 9200.94],
          'M2': [6882.57, 11696.13],
          'O1': [2100.47, 3576.58],
          'O2L': [2401.83, 4075.63],
          'O2M': [2744.96, 4668.2],
          'O2H': [3129.69, 5333.58],
          'O3': [3576.58, 6071.76],
          'O4': [4075.63, 6934.58],
          'P1': [4200.44, 7142.41],
          'P2': [4959.42, 8452.54],
          'P3': [5874.07, 9970.24],
          'P4': [7256.91, 12340.62],
          'S1': [4002.83, 6809.94],
          'S2': [4834.62, 8213.33],
          'S3': [5811.74, 9887.21],
          'S4': [7340.03, 12486.31],
        },
      },
    },
  ],
  vergoedingen: [],
};
