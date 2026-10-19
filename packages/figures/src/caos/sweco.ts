import type { Cao } from '../types.js';

/**
 * Sweco Nederland 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Sweco Nederland
 * https://cao-kijker.awvn.nl/?s=Sweco
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-03-01 (month) uit de bron
 *   - Basistabel 1-1-2026 teruggerekend uit de tabel per 2026-03-01 (gedeeld door +2%)
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-03-01, 2026-10-01, 2027-03-01, 2028-01-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoSweco2026: Cao = {
  id: 'sweco',
  name: "Sweco Nederland",
  year: 2026,
  effectiveNote: "Cao 2026-10-01 t/m 2028-03-31; loontabel per 2026-03-01. Let op: Nieuwe cao 1 oktober 2026 t/m 31 maart 2028 o.b.v. onderhandelingsresultaat van 13 oktober 2026 (volgens AWVN cao-kijker): +2% per 1-10-2026, +1,25% per 1-3-2027 en +2% per 1-1-2028. Nog niet bevestigd door ledenraadpleging; cao-tekst niet gevonden. Vorige cao 1 april 2025 t/m 30 september 2026: schaal- en feitelijke salarissen +2% per 1-4-2025, 1-10-2025 en 1-3-2026. Salaristabel per 1-3-2026 (cao 2025-2026): per schaal minimum-, norm- en maximumsalaris (als drie treden opgenomen); schalen 4 t/m 17. Minimum uurloon € 16. Vakantietoeslag 8%, uitbetaald in mei. Winstafhankelijk salarisdeel (afhankelijk van bedrijfsresultaat) niet opgenomen. Voltijd 40 uur per week. Pensioenpremie niet in de cao vermeld.",
  sourceUrl: "https://cao-kijker.awvn.nl/?s=Sweco",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      '4': [2828.43, 2828.43, 2943.14],
      '5': [2828.43, 2828.43, 3227.45],
      '6': [2828.43, 3032.35, 3503.92],
      '7': [2828.43, 3327.45, 3847.06],
      '8': [3049.02, 3655.88, 4263.73],
      '9': [3374.51, 4049.02, 4723.53],
      '10': [3692.16, 4485.29, 5275.49],
      '11': [4123.53, 5010.78, 5899.02],
      '12': [4608.82, 5600.98, 6593.14],
      '13': [5133.33, 6317.65, 7501.96],
      '14': [5791.18, 7131.37, 8471.57],
      '15': [6590.2, 8114.71, 9641.18],
      '16': [7499.02, 9240.2, 10978.43],
      '17': [8433.33, 10520.59, 12607.84],
    },
  },
  periods: [
    {
      from: '2026-03-01',
      note: "+2% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          '4': [2885, 2885, 3002],
          '5': [2885, 2885, 3292],
          '6': [2885, 3093, 3574],
          '7': [2885, 3394, 3924],
          '8': [3110, 3729, 4349],
          '9': [3442, 4130, 4818],
          '10': [3766, 4575, 5381],
          '11': [4206, 5111, 6017],
          '12': [4701, 5713, 6725],
          '13': [5236, 6444, 7652],
          '14': [5907, 7274, 8641],
          '15': [6722, 8277, 9834],
          '16': [7649, 9425, 11198],
          '17': [8602, 10731, 12860],
        },
      },
    },
    {
      from: '2026-10-01',
      note: "+2% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          '4': [2942.7, 2942.7, 3062.04],
          '5': [2942.7, 2942.7, 3357.84],
          '6': [2942.7, 3154.86, 3645.48],
          '7': [2942.7, 3461.88, 4002.48],
          '8': [3172.2, 3803.58, 4435.98],
          '9': [3510.84, 4212.6, 4914.36],
          '10': [3841.32, 4666.5, 5488.62],
          '11': [4290.12, 5213.22, 6137.34],
          '12': [4795.02, 5827.26, 6859.5],
          '13': [5340.72, 6572.88, 7805.04],
          '14': [6025.14, 7419.48, 8813.82],
          '15': [6856.44, 8442.54, 10030.68],
          '16': [7801.98, 9613.5, 11421.96],
          '17': [8774.04, 10945.62, 13117.2],
        },
      },
    },
    {
      from: '2027-03-01',
      note: "+1,25% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          '4': [2979.48, 2979.48, 3100.32],
          '5': [2979.48, 2979.48, 3399.81],
          '6': [2979.48, 3194.3, 3691.05],
          '7': [2979.48, 3505.15, 4052.51],
          '8': [3211.85, 3851.12, 4491.43],
          '9': [3554.73, 4265.26, 4975.79],
          '10': [3889.34, 4724.83, 5557.23],
          '11': [4343.75, 5278.39, 6214.06],
          '12': [4854.96, 5900.1, 6945.24],
          '13': [5407.48, 6655.04, 7902.6],
          '14': [6100.45, 7512.22, 8923.99],
          '15': [6942.15, 8548.07, 10156.06],
          '16': [7899.5, 9733.67, 11564.73],
          '17': [8883.72, 11082.44, 13281.17],
        },
      },
    },
    {
      from: '2028-01-01',
      note: "+2% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          '4': [3039.07, 3039.07, 3162.32],
          '5': [3039.07, 3039.07, 3467.81],
          '6': [3039.07, 3258.18, 3764.87],
          '7': [3039.07, 3575.26, 4133.56],
          '8': [3276.09, 3928.15, 4581.26],
          '9': [3625.82, 4350.56, 5075.31],
          '10': [3967.12, 4819.33, 5668.37],
          '11': [4430.62, 5383.95, 6338.34],
          '12': [4952.06, 6018.1, 7084.15],
          '13': [5515.63, 6788.14, 8060.66],
          '14': [6222.46, 7662.47, 9102.47],
          '15': [7080.99, 8719.03, 10359.18],
          '16': [8057.49, 9928.34, 11796.03],
          '17': [9061.39, 11304.09, 13546.79],
        },
      },
    },
  ],
  vergoedingen: [],
};
