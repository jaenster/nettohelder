import type { Cao } from '../types.js';

/**
 * Cao E-commerce Nederland 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao E-commerce Nederland
 * https://www.e-commerce-nederland.nl/downloads/E-commerce%20Nederland%20cao%202025-2028.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-07-01 (hour) uit de bron
 *   - Basistabel 1-1-2026 teruggerekend uit de tabel per 2026-07-01 (gedeeld door +1%)
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-07-01, 2027-01-01, 2027-07-01, 2028-01-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoECommerce2026: Cao = {
  id: 'e-commerce',
  name: "Cao E-commerce Nederland",
  year: 2026,
  effectiveNote: "Cao 2025-05-01 t/m 2028-06-30; loontabel per 2026-07-01. Let op: De verhogingen zijn in de cao omschreven als verhoging van de salarisschalen (loonschaalverhoging) Salaristabel: uurlonen exclusief vakantiegeld per 1 juli 2026 (Bijlage B), alleen 21 jaar en ouder; de cao bevat ook tabellen per 1 januari 2027, 1 juli 2027 en 1 januari 2028 Een fulltime werkweek is volgens de cao 35 tot en met 40 uur, afhankelijk van de rol; daarom is geen vast aantal uren opgenomen Jeugdlonen gelden alleen in schaal A; vanaf juli 2026 krijgen 16-jarigen minimaal het minimumloon van 17-jarigen Pensioenregeling wordt per werkgever vastgesteld; geen premie in de cao Geen eindejaarsuitkering of eenmalige uitkering gevonden De cao geldt voor e-commerce in levensmiddelen (o.a. orderpickers en bezorgers)",
  sourceUrl: "https://www.e-commerce-nederland.nl/downloads/E-commerce%20Nederland%20cao%202025-2028.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'uur',
    hoursPerWeek: 40,
    schalen: {
      'A': [14.78, 14.99],
      'B': [15.1, 15.3, 15.5, 15.68, 15.87],
      'C': [15.57, 15.84, 16.08, 16.3, 16.5],
      'D': [16.72, 16.95, 17.15, 17.33, 17.49],
      'E': [17.09, 17.49, 17.89, 18.36, 18.87, 19.38, 19.87, 20.31, 20.83],
    },
  },
  periods: [
    {
      from: '2026-07-01',
      note: "+1% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'uur',
        hoursPerWeek: 40,
        schalen: {
          'A': [14.93, 15.14],
          'B': [15.25, 15.45, 15.66, 15.84, 16.03],
          'C': [15.73, 16, 16.24, 16.46, 16.67],
          'D': [16.89, 17.12, 17.32, 17.5, 17.66],
          'E': [17.26, 17.66, 18.07, 18.54, 19.06, 19.57, 20.07, 20.51, 21.04],
        },
      },
    },
    {
      from: '2027-01-01',
      note: "+2% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'uur',
        hoursPerWeek: 40,
        schalen: {
          'A': [15.23, 15.44],
          'B': [15.56, 15.76, 15.97, 16.16, 16.35],
          'C': [16.04, 16.32, 16.56, 16.79, 17],
          'D': [17.23, 17.46, 17.67, 17.85, 18.01],
          'E': [17.61, 18.01, 18.43, 18.91, 19.44, 19.96, 20.47, 20.92, 21.46],
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
        unit: 'uur',
        hoursPerWeek: 40,
        schalen: {
          'A': [15.38, 15.6],
          'B': [15.71, 15.92, 16.13, 16.32, 16.51],
          'C': [16.21, 16.48, 16.73, 16.96, 17.17],
          'D': [17.4, 17.64, 17.84, 18.03, 18.19],
          'E': [17.78, 18.19, 18.62, 19.1, 19.64, 20.16, 20.68, 21.13, 21.68],
        },
      },
    },
    {
      from: '2028-01-01',
      note: "+1% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'uur',
        hoursPerWeek: 40,
        schalen: {
          'A': [15.53, 15.75],
          'B': [15.87, 16.08, 16.29, 16.48, 16.68],
          'C': [16.37, 16.65, 16.9, 17.13, 17.35],
          'D': [17.57, 17.81, 18.02, 18.21, 18.38],
          'E': [17.96, 18.38, 18.8, 19.29, 19.83, 20.36, 20.88, 21.34, 21.89],
        },
      },
    },
  ],
  vergoedingen: [],
};
