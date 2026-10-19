import type { Cao } from '../types.js';

/**
 * Cao Hexion VAD B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Hexion VAD B.V.
 * https://cao-kijker.awvn.nl/bestanden/2140_01-04-2026%20tot%2001-04-2027_akkoord.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2025-04-01 (month) uit de bron
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-04-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoHexionVad2026: Cao = {
  id: 'hexion-vad',
  name: "Cao Hexion VAD B.V.",
  year: 2026,
  effectiveNote: "Cao 2026-04-01 t/m 2027-03-31; loontabel per 2025-04-01. Let op: Onderhandelingsresultaat van 21 mei 2026, looptijd 1 april 2026 t/m 31 maart 2027 Jaarsalaris is 14 maandsalarissen: een uitkering ineens van een maandsalaris in april (hier als vakantiegeld opgenomen) en in december (als eindejaarsuitkering) Salarisschalen (groepen 15 t/m 7, Band A) kennen alleen een minimum en (normaal) maximum, afgeronde eurobedragen per april 2025; groei via jaarlijkse merit-verhogingen op basis van beoordeling Daarnaast bonusplan (ICP) op basis van doelstellingen Pensioenregeling van werkgever; werknemersbijdrage niet gevonden",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/2140_01-04-2026%20tot%2001-04-2027_akkoord.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.0833,
  eindejaarsuitkeringPct: 0.0833,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      '7': [3879, 6010],
      '8': [3438, 5225],
      '9': [3433, 4693],
      '10': [3294, 4190],
      '11': [3194, 3922],
      '12': [3106, 3715],
      '13': [3037, 3545],
      '14': [2966, 3466],
      '15': [2901, 3329],
    },
  },
  periods: [
    {
      from: '2026-04-01',
      note: "+3,5% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          '7': [4014.77, 6220.35],
          '8': [3558.33, 5407.88],
          '9': [3553.16, 4857.26],
          '10': [3409.29, 4336.65],
          '11': [3305.79, 4059.27],
          '12': [3214.71, 3845.03],
          '13': [3143.3, 3669.08],
          '14': [3069.81, 3587.31],
          '15': [3002.54, 3445.52],
        },
      },
    },
  ],
  vergoedingen: [],
};
