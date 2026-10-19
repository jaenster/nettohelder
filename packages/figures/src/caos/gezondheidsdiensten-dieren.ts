import type { Cao } from '../types.js';

/**
 * Gezondheidsdienst voor Dieren 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Gezondheidsdienst voor Dieren
 * https://cao-kijker.awvn.nl/bestanden/1059_01-07-2026%20tot%2001-07-2028_akkoord.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-06-01 (month) uit de bron
 *   - Basistabel 1-1-2026 teruggerekend uit de tabel per 2026-06-01 (gedeeld door +1%)
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-06-01, 2027-01-01, 2028-01-01, 2028-06-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoGezondheidsdienstenDieren2026: Cao = {
  id: 'gezondheidsdiensten-dieren',
  name: "Gezondheidsdienst voor Dieren",
  year: 2026,
  effectiveNote: "Cao 2026-07-01 t/m 2028-06-30; loontabel per 2026-06-01. Let op: Cao Royal GD 1 juli 2026 t/m 30 juni 2028 o.b.v. definitief eindbod van 23 september 2026 (FNV, CNV; volgens AWVN geaccepteerd). Per 1-1-2027 +3,5% met een minimum van € 135 per maand (per fte, tot max. einde schaal); daarna worden minimum salarisschalen en salarissen vanaf schaal 5 eenmalig verhoogd naar minimaal 110% WML. Eind 2026 eenmalige netto-uitkering van € 40 per fte (€ 53 als de leden na 6 oktober instemden). Per 1-6-2027 eenmalig 0,5% van de in 2026 ontvangen maandsalarissen als het bedrijfsresultaat 2026 minimaal 2% is (onzeker, niet opgenomen). Salarisschalen per 1-6-2026 (cao 2024-2026) kennen alleen minimum en maximum; als twee treden opgenomen. Schaal 1 loopt van 100% tot 120% WML (niet opgenomen). Vakantie-uitkering 8% (minimum € 3.036 per jaar per 1-6-2026). Eindejaarsuitkering 1,5% over de maandsalarissen inclusief vakantie-uitkering (= 1,62% van het jaarsalaris), minimum € 456. Daarnaast collectieve resultaatafhankelijke beloning (RAB). Pensioen bij BPL Pensioen (per 1-1-2027 nieuwe regeling, excedentdeel tot € 137.800); werknemersbijdrage niet in de stukken vermeld.",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/1059_01-07-2026%20tot%2001-07-2028_akkoord.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.016200000000000003,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      '2': [2686.14, 3091.09],
      '3': [2686.14, 3140.59],
      '4': [2686.14, 3296.04],
      '5': [2686.14, 3550.5],
      '6': [2761.39, 3789.11],
      '7': [2917.82, 4118.81],
      '8': [3174.26, 4590.1],
      '9': [3356.44, 5320.79],
      '10': [3545.54, 5945.54],
      '11': [4196.04, 6495.05],
      '12': [4582.18, 7607.92],
      '13': [5170.3, 8585.15],
      '14': [6006.93, 10018.81],
      '15': [6965.35, 11120.79],
      '16': [8084.16, 12671.29],
    },
  },
  periods: [
    {
      from: '2026-06-01',
      note: "+1% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          '2': [2713, 3122],
          '3': [2713, 3172],
          '4': [2713, 3329],
          '5': [2713, 3586],
          '6': [2789, 3827],
          '7': [2947, 4160],
          '8': [3206, 4636],
          '9': [3390, 5374],
          '10': [3581, 6005],
          '11': [4238, 6560],
          '12': [4628, 7684],
          '13': [5222, 8671],
          '14': [6067, 10119],
          '15': [7035, 11232],
          '16': [8165, 12798],
        },
      },
    },
    {
      from: '2027-01-01',
      note: "+3,5% min. € 135/mnd collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          '2': [2848, 3257],
          '3': [2848, 3307],
          '4': [2848, 3464],
          '5': [2848, 3721],
          '6': [2924, 3962],
          '7': [3082, 4305.6],
          '8': [3341, 4798.26],
          '9': [3525, 5562.09],
          '10': [3716, 6215.18],
          '11': [4386.33, 6789.6],
          '12': [4789.98, 7952.94],
          '13': [5404.77, 8974.49],
          '14': [6279.35, 10473.17],
          '15': [7281.23, 11625.12],
          '16': [8450.78, 13245.93],
        },
      },
    },
    {
      from: '2028-01-01',
      note: "+1,5% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          '2': [2890.72, 3305.86],
          '3': [2890.72, 3356.61],
          '4': [2890.72, 3515.96],
          '5': [2890.72, 3776.82],
          '6': [2967.86, 4021.43],
          '7': [3128.23, 4370.18],
          '8': [3391.12, 4870.23],
          '9': [3577.87, 5645.52],
          '10': [3771.74, 6308.4],
          '11': [4452.12, 6891.44],
          '12': [4861.83, 8072.23],
          '13': [5485.84, 9109.1],
          '14': [6373.54, 10630.26],
          '15': [7390.44, 11799.5],
          '16': [8577.54, 13444.62],
        },
      },
    },
    {
      from: '2028-06-01',
      note: "+1,5% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          '2': [2934.08, 3355.44],
          '3': [2934.08, 3406.95],
          '4': [2934.08, 3568.7],
          '5': [2934.08, 3833.47],
          '6': [3012.38, 4081.75],
          '7': [3175.15, 4435.74],
          '8': [3441.98, 4943.29],
          '9': [3631.54, 5730.2],
          '10': [3828.32, 6403.03],
          '11': [4518.91, 6994.82],
          '12': [4934.76, 8193.32],
          '13': [5568.13, 9245.74],
          '14': [6469.14, 10789.72],
          '15': [7501.3, 11976.49],
          '16': [8706.2, 13646.29],
        },
      },
    },
  ],
  vergoedingen: [],
};
