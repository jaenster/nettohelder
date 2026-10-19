import type { Cao } from '../types.js';

/**
 * Cao Mode-, Interieur-, Tapijt- en Textielindustrie (MITT) 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Mode-, Interieur-, Tapijt- en Textielindustrie (MITT)
 * https://www.cnv.nl/documents/5703/Cao_MITT_2025-2026.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-04-01 (hour) uit de bron
 *   - Basistabel 1-1-2026 teruggerekend uit de tabel per 2026-04-01 (gedeeld door +1,8%)
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-04-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoMitt2026: Cao = {
  id: 'mitt',
  name: "Cao Mode-, Interieur-, Tapijt- en Textielindustrie (MITT)",
  year: 2026,
  effectiveNote: "Cao 2025-09-01 t/m 2026-10-31; loontabel per 2026-04-01. Let op: Loonschalen kennen alleen een minimum en maximum uurloon per functiegroep; als twee treden opgenomen. Jaarlijkse periodiek is een vast percentage (0,5% t/m 4,4%) van het minimum uurloon tot het maximum is bereikt Voltijdnorm verschilt per onderneming (36 tot 40 uur per week); 38 uur aangehouden Aanloopschaal: eerste jaar 72,5% en daarna 85% van het minimum uurloon Cao liep tot en met 31 oktober 2026; onderhandelingen over een nieuwe cao lopen (oktober 2026), loonsverhoging daarna nog niet bekend Pensioenfonds en werknemerspremie niet in de cao gevonden",
  sourceUrl: "https://www.cnv.nl/documents/5703/Cao_MITT_2025-2026.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'uur',
    hoursPerWeek: 38,
    schalen: {
      '1': [15, 15.12],
      '2': [15, 15.35],
      '3': [15.1, 15.86],
      '4': [15.33, 16.68],
      '5': [15.94, 17.83],
      '6': [16.68, 19.49],
      '7': [17.63, 21.84],
      '8': [18.79, 24.93],
      '9': [20.27, 28.26],
      '10': [21.62, 31.65],
      '11': [22.96, 34.77],
    },
  },
  periods: [
    {
      from: '2026-04-01',
      note: "+1,8% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'uur',
        hoursPerWeek: 38,
        schalen: {
          '1': [15.27, 15.39],
          '2': [15.27, 15.63],
          '3': [15.37, 16.15],
          '4': [15.61, 16.98],
          '5': [16.23, 18.15],
          '6': [16.98, 19.84],
          '7': [17.95, 22.23],
          '8': [19.13, 25.38],
          '9': [20.63, 28.77],
          '10': [22.01, 32.22],
          '11': [23.37, 35.4],
        },
      },
    },
  ],
  vergoedingen: [],
};
