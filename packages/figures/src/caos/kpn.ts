import type { Cao } from '../types.js';

/**
 * KPN Cao 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: KPN Cao
 * https://www.cnv.nl/documents/5625/KPN_CAO_2026-2027.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2027-01-01 (month) uit de bron
 *   - Basistabel 1-1-2026 teruggerekend uit de tabel per 2027-01-01 (gedeeld door +3%, +0,5%, +1,5%)
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-02-01, 2026-10-01, 2027-01-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoKpn2026: Cao = {
  id: 'kpn',
  name: "KPN Cao",
  year: 2026,
  effectiveNote: "Cao 2026-01-01 t/m 2027-06-30; loontabel per 2027-01-01. Let op: Salarisschalen kennen alleen een beginsalaris en normsalaris (40 uur); als twee treden opgenomen. Individuele verhoging per 1 april afhankelijk van RSP (1% t/m 4%) Vakantiegeld (8%) en dertiende maand (8,33%) worden maandelijks opgebouwd; standaard wordt het vakantiegeld en 2%-punt van de dertiende maand maandelijks uitbetaald Eenmalige uitkering van € 500 NETTO (voltijd) in juli 2026; niet als bruto bedrag opgenomen Pensioen via Stichting Pensioenfonds KPN: eigen bijdrage 7% (6% bij indiensttreding KPN B.V. vóór 2011) van pensioengevend salaris minus franchise, per 1 oktober 2026 verhoogd met 0,5%-punt; franchisebedrag niet in de cao vermeld, daarom niet ingevuld Loonsverhoging na 30 juni 2027 nog niet bekend",
  sourceUrl: "https://www.cnv.nl/documents/5625/KPN_CAO_2026-2027.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      '4': [2703.02, 3711.89],
      '5': [2833.41, 3915.57],
      '6': [3000.92, 4169.69],
      '7': [3334.04, 4589.42],
      '8': [3611, 5117.65],
      '9': [3938.41, 5810.54],
      '10': [4499.95, 6583.37],
      '11': [5039.61, 7577.02],
      '12': [5743.91, 8865.71],
      '13': [6577.66, 10390.44],
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
        hoursPerWeek: 40,
        schalen: {
          '4': [2784.11, 3823.25],
          '5': [2918.41, 4033.04],
          '6': [3090.95, 4294.78],
          '7': [3434.06, 4727.1],
          '8': [3719.33, 5271.18],
          '9': [4056.56, 5984.85],
          '10': [4634.95, 6780.87],
          '11': [5190.79, 7804.33],
          '12': [5916.23, 9131.68],
          '13': [6774.99, 10702.15],
        },
      },
    },
    {
      from: '2026-10-01',
      note: "+0,5% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          '4': [2798.03, 3842.36],
          '5': [2933, 4053.2],
          '6': [3106.4, 4316.26],
          '7': [3451.23, 4750.74],
          '8': [3737.93, 5297.54],
          '9': [4076.85, 6014.78],
          '10': [4658.13, 6814.78],
          '11': [5216.75, 7843.35],
          '12': [5945.81, 9177.34],
          '13': [6808.87, 10755.67],
        },
      },
    },
    {
      from: '2027-01-01',
      note: "+1,5% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          '4': [2840, 3900],
          '5': [2977, 4114],
          '6': [3153, 4381],
          '7': [3503, 4822],
          '8': [3794, 5377],
          '9': [4138, 6105],
          '10': [4728, 6917],
          '11': [5295, 7961],
          '12': [6035, 9315],
          '13': [6911, 10917],
        },
      },
    },
  ],
  vergoedingen: [],
};
