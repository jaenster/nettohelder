import type { Cao } from '../types.js';

/**
 * Cao Reisbranche 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Reisbranche
 * https://www.cnv.nl/dienstverlening/reisbranche/cao-reisbranche/nieuws/werkgevers-passen-eindbod-voor-cao-reisbranche-aan-2026-07-20/
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2025-07-01 (month) uit de bron
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-09-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoReisbranche2026: Cao = {
  id: 'reisbranche',
  name: "Cao Reisbranche",
  year: 2026,
  effectiveNote: "Cao 2026-07-01 t/m 2027-06-30; loontabel per 2025-07-01. Let op: Loontabellen geven alleen een minimum en maximum per groep (geen treden); opgeslagen als [min, max] Loontabel is die per 1 juli 2025 (cao 2024-2026); per 1 september 2026 stijgen feitelijke lonen en schaalminima/-maxima met 3% Per 1 januari 2027 stijgen alleen de minimum- en maximumbedragen van de salarisschalen met 1,5% (geen verhoging feitelijke lonen) Verhoging van € 125 per 1 juli 2025 geldt voor groepen 2 t/m 8 en A, bij fulltime dienstverband, naar rato voor parttimers Aanlooptredes (90% en 95% van het minimum) alleen voor werknemers jonger dan 21 jaar, niet opgenomen Reisleiders/reisbegeleiders (groep A) hebben uurlonen met dezelfde minima/maxima als groep 6 Jaarlijkse individuele loonsverhoging van minimaal 1% bij beoordeling goed of hoger (onder schaalmaximum), niet opgenomen Pensioen via PGB; werknemerspremie niet gevonden Normale arbeidsduur gemiddeld maximaal 39 uur per week; uurloon = maandloon * 12 / 2043,6",
  sourceUrl: "https://www.cnv.nl/dienstverlening/reisbranche/cao-reisbranche/nieuws/werkgevers-passen-eindbod-voor-cao-reisbranche-aan-2026-07-20/",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      '4': [2599.88, 3243.86],
      '5': [2639.88, 3600.97],
      '6': [2679.88, 3995.93],
      '7': [2740.32, 4432.62],
      '8': [2868.64, 4951.34],
      '2-3': [2559.88, 2919.95],
    },
  },
  periods: [
    {
      from: '2026-09-01',
      note: "+3% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          '4': [2677.88, 3341.18],
          '5': [2719.08, 3709],
          '6': [2760.28, 4115.81],
          '7': [2822.53, 4565.6],
          '8': [2954.7, 5099.88],
          '2-3': [2636.68, 3007.55],
        },
      },
    },
  ],
  vergoedingen: [],
};
