import type { Cao } from '../types.js';

/**
 * Cao Industriële Bakkerij 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Industriële Bakkerij
 * https://zoek.officielebekendmakingen.nl/stcrt-2026-27255.html
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-04-01 (hour) uit de bron
 *   - Basistabel 1-1-2026 teruggerekend uit de tabel per 2026-04-01 (gedeeld door +4,25%)
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-04-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoIndustrieleBakkerij2026: Cao = {
  id: 'industriele-bakkerij',
  name: "Cao Industriële Bakkerij",
  year: 2026,
  effectiveNote: "Cao 2025-01-01 t/m 2026-12-31; loontabel per 2026-04-01. Let op: Partijen: Nederlandse Vereniging voor de Bakkerij (NVB), FNV en CNV; aparte cao naast de cao voor het ambachtelijke bakkersbedrijf Loonsverhogingen gelden per 1 april (maandbetaling) of per 20 april 2025 / 19 april 2026 (4-wekenbetaling) Functie-uurlonen per 1-4-2026 voor de functiegroepen algemeen, financieel, administratief, ICT, kwaliteit, logistiek, productie en technische dienst; trede 0 geldt voor medewerkers die nog niet vakvolwassen zijn. Voor commerciële functies geldt een aparte, lagere tabel die niet is opgenomen Laatste periodieken in de schaal kunnen afhankelijk zijn van een beoordeling Loonschalen onder het wettelijk minimumloon worden gelijkgesteld aan het WML Geen eindejaarsuitkering gevonden; pensioenpremie niet gevonden; afspraken voor 2027 nog niet bekend",
  sourceUrl: "https://zoek.officielebekendmakingen.nl/stcrt-2026-27255.html",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'uur',
    hoursPerWeek: 38,
    schalen: {
      '1': [14.33, 15.32, 15.79, 16.28, 16.74, 17.18, 17.62, 18.11, 18.56, 19.03],
      '2': [16.47, 16.81, 17.14, 17.48, 17.78, 18.12, 18.43, 18.8, 19.09, 19.48],
      '3': [16.78, 17.14, 17.51, 17.87, 18.27, 18.63, 18.99, 19.41, 19.77, 20.15],
      '4': [17.04, 17.47, 17.86, 18.29, 18.71, 19.11, 19.57, 19.97, 20.39, 20.79, 21.22],
      '5': [17.42, 17.87, 18.34, 18.82, 19.28, 19.76, 20.21, 20.65, 21.16, 21.62, 22.08, 22.53],
      '6': [17.78, 18.34, 18.91, 19.5, 20.01, 20.55, 21.15, 21.68, 22.22, 22.79, 23.35, 23.89],
      '7': [18.05, 18.69, 19.31, 19.97, 20.61, 21.24, 21.9, 22.56, 23.19, 23.85, 24.48, 25.14, 25.77],
      '8': [18.52, 19.2, 19.95, 20.65, 21.38, 22.11, 22.84, 23.54, 24.26, 24.98, 25.7, 26.42, 27.14, 27.85],
      '9': [19.03, 19.86, 20.67, 21.49, 22.37, 23.16, 23.98, 24.82, 25.64, 26.45, 27.29, 28.13, 28.96, 29.77, 30.59],
      '10': [19.67, 20.63, 21.64, 22.65, 23.6, 24.6, 25.6, 26.59, 27.56, 28.55, 29.53, 30.54, 31.54, 32.48, 33.48],
      '11': [20.48, 21.59, 22.72, 23.81, 24.91, 26.05, 27.12, 28.27, 29.34, 30.47, 31.58, 32.7, 33.81, 34.87, 35.99, 37.14],
    },
  },
  periods: [
    {
      from: '2026-04-01',
      note: "+4,25% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'uur',
        hoursPerWeek: 38,
        schalen: {
          '1': [14.94, 15.97, 16.46, 16.97, 17.45, 17.91, 18.37, 18.88, 19.35, 19.84],
          '2': [17.17, 17.52, 17.87, 18.22, 18.54, 18.89, 19.21, 19.6, 19.9, 20.31],
          '3': [17.49, 17.87, 18.25, 18.63, 19.05, 19.42, 19.8, 20.23, 20.61, 21.01],
          '4': [17.76, 18.21, 18.62, 19.07, 19.51, 19.92, 20.4, 20.82, 21.26, 21.67, 22.12],
          '5': [18.16, 18.63, 19.12, 19.62, 20.1, 20.6, 21.07, 21.53, 22.06, 22.54, 23.02, 23.49],
          '6': [18.54, 19.12, 19.71, 20.33, 20.86, 21.42, 22.05, 22.6, 23.16, 23.76, 24.34, 24.91],
          '7': [18.82, 19.48, 20.13, 20.82, 21.49, 22.14, 22.83, 23.52, 24.18, 24.86, 25.52, 26.21, 26.87],
          '8': [19.31, 20.02, 20.8, 21.53, 22.29, 23.05, 23.81, 24.54, 25.29, 26.04, 26.79, 27.54, 28.29, 29.03],
          '9': [19.84, 20.7, 21.55, 22.4, 23.32, 24.14, 25, 25.87, 26.73, 27.57, 28.45, 29.33, 30.19, 31.04, 31.89],
          '10': [20.51, 21.51, 22.56, 23.61, 24.6, 25.65, 26.69, 27.72, 28.73, 29.76, 30.79, 31.84, 32.88, 33.86, 34.9],
          '11': [21.35, 22.51, 23.69, 24.82, 25.97, 27.16, 28.27, 29.47, 30.59, 31.76, 32.92, 34.09, 35.25, 36.35, 37.52, 38.72],
        },
      },
    },
  ],
  vergoedingen: [],
};
