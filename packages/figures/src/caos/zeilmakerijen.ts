import type { Cao } from '../types.js';

/**
 * Cao SZS (Zeilmakerijen, Dekkledenvervaardiging, Dekkledenverhuur, Scheepstuigerijen en Scheepsbenodigdhedenhandel) 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao SZS (Zeilmakerijen, Dekkledenvervaardiging, Dekkledenverhuur, Scheepstuigerijen en Scheepsbenodigdhedenhandel)
 * https://www.cnv.nl/documents/4989/Cao_SZS_2025-2026.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-10-01 (month) uit de bron
 *   - Basistabel 1-1-2026 teruggerekend uit de tabel per 2026-10-01 (gedeeld door +1,5%)
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-10-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoZeilmakerijen2026: Cao = {
  id: 'zeilmakerijen',
  name: "Cao SZS (Zeilmakerijen, Dekkledenvervaardiging, Dekkledenverhuur, Scheepstuigerijen en Scheepsbenodigdhedenhandel)",
  year: 2026,
  effectiveNote: "Cao 2025-01-01 t/m 2026-12-31; loontabel per 2026-10-01. Let op: Salarisschalen geven alleen een minimum (21 jaar) en maximum per functiegroep; opgenomen als [min, max]. Functiegroep 1 heeft alleen het minimum Minimumbedragen van groep 1 t/m 3 zijn het wettelijk minimumloon per 1 juli 2025 (€ 2.371,20); bij een hogere WML gelden de wettelijke bedragen Verhogingen gelden voor het feitelijk salaris; individuele verhoging afhankelijk van beoordeling Standaard 38 uur per week; bedrijven kunnen een Basis Jaarlijkse Arbeidsduur met 40 uur per week hanteren (met roostervrije uren) Pensioen bij PMT; werknemerspremie niet in de cao opgenomen Cao is niet algemeen verbindend verklaard; nieuwe cao vanaf 2027 nog niet bekend",
  sourceUrl: "https://www.cnv.nl/documents/4989/Cao_SZS_2025-2026.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 38,
    schalen: {
      '1': [2336.16],
      '2': [2336.16, 2779.68],
      '3': [2336.16, 2900.53],
      '4': [2386.9, 3081.82],
      '5': [2516.35, 3263.11],
      '6': [2658.82, 3444.38],
      '7': [2803.85, 3686.1],
      '8': [2960.98, 4834.23],
    },
  },
  periods: [
    {
      from: '2026-10-01',
      note: "+1,5% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 38,
        schalen: {
          '1': [2371.2],
          '2': [2371.2, 2821.38],
          '3': [2371.2, 2944.04],
          '4': [2422.7, 3128.05],
          '5': [2554.1, 3312.06],
          '6': [2698.7, 3496.05],
          '7': [2845.91, 3741.39],
          '8': [3005.39, 4906.74],
        },
      },
    },
  ],
  vergoedingen: [],
};
