import type { Cao } from '../types.js';

/**
 * Cao Passagiers- en Bagageafhandeling Luchtvaart 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Passagiers- en Bagageafhandeling Luchtvaart
 * https://zoek.officielebekendmakingen.nl/stcrt-2026-11183.html
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-07-01 (hour) uit de bron
 *   - Basistabel 1-1-2026 teruggerekend uit de tabel per 2026-07-01 (gedeeld door +2%)
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-07-01, 2027-01-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoLuchtvaartAfhandeling2026: Cao = {
  id: 'luchtvaart-afhandeling',
  name: "Cao Passagiers- en Bagageafhandeling Luchtvaart",
  year: 2026,
  effectiveNote: "Cao 2025-07-01 t/m 2027-06-30; loontabel per 2026-07-01. Let op: Sector-cao tussen WPBL en FNV; looptijd 1-7-2025 t/m 30-6-2027 volgens het onderhandelingsresultaat, AVV tot en met 30-6-2027 Scale = basisuurlonen per 1-7-2026, alleen minimum en maximum per groep A t/m J (geen treden); als twee treden opgenomen. Groei binnen de schaal is beoordelingsafhankelijk (5-puntsschaal) Basisuurlonen per 1-1-2027: A € 17,11-20,16 ... J € 22,62-32,80 Wie op of boven het schaalmaximum zit, krijgt de cao-verhoging niet Werknemers die via de RGM-aanbesteding op Schiphol van werkgever wisselen krijgen per 1-1-2027 geen 3% maar een vaste ervaringsverhoging van 2,25% (art. 13 lid 6) Vakantietoeslag 8% over het basissalaris; gemiddelde arbeidsduur 38 uur per week Pensioen en eindejaarsuitkering niet in de cao geregeld (geen vaste eindejaarsuitkering)",
  sourceUrl: "https://zoek.officielebekendmakingen.nl/stcrt-2026-11183.html",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'uur',
    hoursPerWeek: 38,
    schalen: {
      'A': [16.29, 19.19],
      'B': [16.29, 19.46],
      'C': [16.43, 20.03],
      'D': [16.58, 20.88],
      'E': [17, 21.87],
      'F': [17.57, 23.15],
      'G': [18.27, 24.71],
      'H': [19.13, 26.41],
      'I': [20.25, 28.53],
      'J': [21.53, 31.23],
    },
  },
  periods: [
    {
      from: '2026-07-01',
      note: "+2% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'uur',
        hoursPerWeek: 38,
        schalen: {
          'A': [16.62, 19.57],
          'B': [16.62, 19.85],
          'C': [16.76, 20.43],
          'D': [16.91, 21.3],
          'E': [17.34, 22.31],
          'F': [17.92, 23.61],
          'G': [18.64, 25.2],
          'H': [19.51, 26.94],
          'I': [20.66, 29.1],
          'J': [21.96, 31.85],
        },
      },
    },
    {
      from: '2027-01-01',
      note: "+3% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'uur',
        hoursPerWeek: 38,
        schalen: {
          'A': [17.12, 20.16],
          'B': [17.12, 20.45],
          'C': [17.26, 21.04],
          'D': [17.42, 21.94],
          'E': [17.86, 22.98],
          'F': [18.46, 24.32],
          'G': [19.2, 25.96],
          'H': [20.1, 27.75],
          'I': [21.28, 29.97],
          'J': [22.62, 32.81],
        },
      },
    },
  ],
  vergoedingen: [],
};
