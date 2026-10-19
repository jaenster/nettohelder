import type { Cao } from '../types.js';

/**
 * Cao Pensioenfonds Rail & OV 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Pensioenfonds Rail & OV
 * https://cao-kijker.awvn.nl/bestanden/4270_01-10-2024%20tot%2001-10-2026_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-02-01 (month) uit de bron
 *   - Basistabel 1-1-2026 teruggerekend uit de tabel per 2026-02-01 (gedeeld door +3%)
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-02-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoPensioenfondsRailOv2026: Cao = {
  id: 'pensioenfonds-rail-ov',
  name: "Cao Pensioenfonds Rail & OV",
  year: 2026,
  effectiveNote: "Cao 2024-10-01 t/m 2026-09-30; loontabel per 2026-02-01. Let op: Salarisschalen kennen alleen een minimum en maximum (geen treden); hier als [min, max] opgenomen, bedragen op basis van 36 uur; het minimum geldt bij 23 jaar en is 65% van het maximum Salarisgroei binnen de schaal via relatieve schaalpositie (rsp) en beoordeling; bij bevordering 5% verhoging Pensioen bij Pensioenfonds Rail & OV: medewerker betaalt een derde van de totale premie over het pensioengevend inkomen boven de franchise; premiepercentage en franchise niet in de cao vermeld Daarnaast wordt een WGA/WIA-plus-premie ingehouden (premie jaarlijks vastgesteld) Cao liep tot en met 30-9-2026 en wordt zonder opzegging telkens met een jaar verlengd; geen nieuwe cao gevonden",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/4270_01-10-2024%20tot%2001-10-2026_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.0833,
  eindejaarsuitkeringPct: 0.0833,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 36,
    schalen: {
      '1': [1760.19, 2708.74],
      '2': [1939.81, 2975.73],
      '3': [2125.24, 3272.82],
      '4': [2339.81, 3592.23],
      '5': [2683.5, 4126.21],
      '6': [3086.41, 4738.83],
      '7': [3543.69, 5445.63],
      '8': [4296.12, 6603.88],
      '9': [5086.41, 8058.25],
      '10': [6100, 9760.19],
      '11': [7316.5, 11816.5],
      '12': [7842.72, 12642.72],
    },
  },
  periods: [
    {
      from: '2026-02-01',
      note: "+3% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 36,
        schalen: {
          '1': [1813, 2790],
          '2': [1998, 3065],
          '3': [2189, 3371],
          '4': [2410, 3700],
          '5': [2764, 4250],
          '6': [3179, 4881],
          '7': [3650, 5609],
          '8': [4425, 6802],
          '9': [5239, 8300],
          '10': [6283, 10053],
          '11': [7536, 12171],
          '12': [8078, 13022],
        },
      },
    },
  ],
  vergoedingen: [],
};
