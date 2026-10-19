import type { Cao } from '../types.js';

/**
 * Cao Albert Heijn Logistiek 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Albert Heijn Logistiek
 * https://www.cnv.nl/handel/distributiecentra-supermarkten/cao-albert-heijn-logistics/nieuws/volledig-onderhandelingsresultaat-ah-logistiek-2026-04-17/
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2025-04-20 (hour) uit de bron
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-04-19)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoAlbertHeijnLogistics2026: Cao = {
  id: 'albert-heijn-logistics',
  name: "Cao Albert Heijn Logistiek",
  year: 2026,
  effectiveNote: "Cao 2026-04-19 t/m 2027-04-24; loontabel per 2025-04-20. Let op: Salaristabel is het basisuursalaris (21+) per 20 april 2025 (periode 5) uit de cao 2025-2026; alleen minimum en maximum per salarisgroep opgenomen (treden zijn vaste bedragen van € 0,38 t/m € 1,57 per uur). De verhoging van 3,6% per 19 april 2026 wordt hierop toegepast Salarisgroep A (Magazijnmedewerker 1): exclusief ADV; per periode 5 2026 twee treden van € 0,30 toegevoegd Vakantietoeslag 8% van uitbetaalde uren x basisuursalaris, uitbetaald in periode 5 Salaris wordt per periode van 4 weken betaald (voltijd 160 uur per periode) Pensioenfonds en werknemerspremie niet gevonden Loonsverhoging na 24 april 2027 nog niet bekend",
  sourceUrl: "https://www.cnv.nl/handel/distributiecentra-supermarkten/cao-albert-heijn-logistics/nieuws/volledig-onderhandelingsresultaat-ah-logistiek-2026-04-17/",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'uur',
    hoursPerWeek: 40,
    schalen: {
      'A': [14.94],
      'B': [16.56, 17.95],
      'C': [16.92, 18.35],
      'D': [17.09, 18.87],
      'E': [17.14, 19.79],
      'F': [17.7, 21.71],
      'G': [18.12, 23.86],
      'H': [18.92, 26.24],
      'I': [20.09, 28.83],
      'J': [21.26, 31.67],
      'K': [23.01, 34.79],
      'L': [25.35, 38.21],
    },
  },
  periods: [
    {
      from: '2026-04-19',
      note: "+3,6% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'uur',
        hoursPerWeek: 40,
        schalen: {
          'A': [15.48],
          'B': [17.16, 18.6],
          'C': [17.53, 19.01],
          'D': [17.71, 19.55],
          'E': [17.76, 20.5],
          'F': [18.34, 22.49],
          'G': [18.77, 24.72],
          'H': [19.6, 27.18],
          'I': [20.81, 29.87],
          'J': [22.03, 32.81],
          'K': [23.84, 36.04],
          'L': [26.26, 39.59],
        },
      },
    },
  ],
  vergoedingen: [],
};
