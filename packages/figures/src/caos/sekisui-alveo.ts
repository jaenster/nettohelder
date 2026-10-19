import type { Cao } from '../types.js';

/**
 * Cao Sekisui Alveo B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Sekisui Alveo B.V.
 * https://cao-kijker.awvn.nl/bestanden/0741_01-07-2025%20tot%2001-07-2027_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2025-07-01 (month) uit de bron
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-07-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoSekisuiAlveo2026: Cao = {
  id: 'sekisui-alveo',
  name: "Cao Sekisui Alveo B.V.",
  year: 2026,
  effectiveNote: "Cao 2025-07-01 t/m 2027-06-30; loontabel per 2025-07-01. Let op: Salarisschalen kennen alleen een minimum en maximum per schaal (geen treden); hier als twee treden opgenomen. Tabel per 1-7-2025; de cao vermeldt niet dat de schalen per 1-7-2026 worden verhoogd. Individuele beoordelingsverhoging (o.a. 1,37% van het salaris) en mogelijke prestatiegratificatie van € 500 of € 1.000 bruto. Eindejaarsgratificatie 8 1/3% van het verdiende bruto jaarsalaris. Pensioen: collectieve pensioenverzekering volgens pensioenreglement; werknemersbijdrage niet in de cao vermeld. Arbeidsduur dagdienst 40 uur; in sommige ploegendiensten 34 of 33,6 uur.",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/0741_01-07-2025%20tot%2001-07-2027_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      '1': [2541, 2797],
      '2': [2693, 3024],
      '3': [2856, 3270],
      '4': [3032, 3539],
      '5': [3222, 3827],
      '6': [3322, 4134],
      '7': [3421, 4455],
      '8': [3526, 4823],
      '9': [3632, 5227],
      '10': [3744, 5898],
      '11': [3856, 6513],
      '12': [4099, 7219],
    },
  },
  periods: [
    {
      from: '2026-07-01',
      note: "+3% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          '1': [2617.23, 2880.91],
          '2': [2773.79, 3114.72],
          '3': [2941.68, 3368.1],
          '4': [3122.96, 3645.17],
          '5': [3318.66, 3941.81],
          '6': [3421.66, 4258.02],
          '7': [3523.63, 4588.65],
          '8': [3631.78, 4967.69],
          '9': [3740.96, 5383.81],
          '10': [3856.32, 6074.94],
          '11': [3971.68, 6708.39],
          '12': [4221.97, 7435.57],
        },
      },
    },
  ],
  vergoedingen: [],
};
