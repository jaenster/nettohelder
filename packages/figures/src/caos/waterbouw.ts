import type { Cao } from '../types.js';

/**
 * Cao Waterbouw 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Waterbouw
 * https://zoek.officielebekendmakingen.nl/stcrt-2025-27537.html
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2027-02-01 (week) uit de bron
 *   - Basistabel 1-1-2026 teruggerekend uit de tabel per 2027-02-01 (gedeeld door +4%, +1%)
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-02-01, 2027-02-01)
 *   - Bron is een weektabel, omgerekend naar maand (×52/12)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoWaterbouw2026: Cao = {
  id: 'waterbouw',
  name: "Cao Waterbouw",
  year: 2026,
  effectiveNote: "Cao 2025-02-01 t/m 2027-03-31; loontabel per 2027-02-01. Let op: Salaristabel is het basisweekloon (36 uur) per 1 februari 2027; groep A begint bij trede 4, groep B en C bij trede 3 Structurele eindejaarsuitkering van 4% van het bruto jaarloon is in de cao vastgelegd voor 2025 en 2026; voor 2027 niet genoemd Loontredegroei per 1 april in even jaren op basis van beoordeling Pensioen via Bedrijfstakpensioenfonds Waterbouw; werknemerspremie niet gevonden Loonsverhoging na 31 maart 2027 nog niet bekend Bron is de in de Staatscourant gepubliceerde cao-tekst (AVV-besluit)",
  sourceUrl: "https://zoek.officielebekendmakingen.nl/stcrt-2025-27537.html",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.04,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 36,
    schalen: {
      'A': [4302.48, 4448.02, 4584.65, 4719.8, 4856.44, 4999.01, 5137.13],
      'B': [3908.91, 4014.36, 4121.29, 4222.28, 4324.75, 4428.71, 4532.67, 4632.18],
      'C': [3561.39, 3659.41, 3755.94, 3856.93, 3938.61, 4051.49, 4133.17, 4223.76],
      'D': [3322.28, 3399.5, 3475.25, 3545.05, 3635.64, 3698.02, 3773.76, 3858.42, 3928.22],
      'E': [3132.18, 3206.44, 3285.15, 3347.52, 3424.75, 3496.04, 3562.87, 3643.07],
      'F': [2958.42, 3026.73, 3072.77, 3132.18, 3200.5, 3258.42, 3316.34, 3371.29, 3435.15],
      'G': [2854.46, 2901.98, 2970.3, 3031.19, 3080.2, 3133.66, 3200.5, 3253.96, 3311.88],
    },
  },
  periods: [
    {
      from: '2026-02-01',
      note: "+4% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 36,
        schalen: {
          'A': [4474.57, 4625.94, 4768.04, 4908.59, 5050.69, 5198.97, 5342.61],
          'B': [4065.27, 4174.93, 4286.14, 4391.17, 4497.74, 4605.86, 4713.98, 4817.47],
          'C': [3703.84, 3805.78, 3906.18, 4011.21, 4096.16, 4213.54, 4298.5, 4392.71],
          'D': [3455.17, 3535.49, 3614.26, 3686.85, 3781.07, 3845.94, 3924.71, 4012.75, 4085.35],
          'E': [3257.47, 3334.69, 3416.55, 3481.43, 3561.74, 3635.88, 3705.39, 3788.79],
          'F': [3076.75, 3147.8, 3195.68, 3257.47, 3328.51, 3388.75, 3448.99, 3506.14, 3572.55],
          'G': [2968.63, 3018.06, 3089.11, 3152.44, 3203.41, 3259.01, 3328.51, 3384.12, 3444.36],
        },
      },
    },
    {
      from: '2027-02-01',
      note: "+1% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 36,
        schalen: {
          'A': [4519.32, 4672.2, 4815.72, 4957.68, 5101.2, 5250.96, 5396.04],
          'B': [4105.92, 4216.68, 4329, 4435.08, 4542.72, 4651.92, 4761.12, 4865.64],
          'C': [3740.88, 3843.84, 3945.24, 4051.32, 4137.12, 4255.68, 4341.48, 4436.64],
          'D': [3489.72, 3570.84, 3650.4, 3723.72, 3818.88, 3884.4, 3963.96, 4052.88, 4126.2],
          'E': [3290.04, 3368.04, 3450.72, 3516.24, 3597.36, 3672.24, 3742.44, 3826.68],
          'F': [3107.52, 3179.28, 3227.64, 3290.04, 3361.8, 3422.64, 3483.48, 3541.2, 3608.28],
          'G': [2998.32, 3048.24, 3120, 3183.96, 3235.44, 3291.6, 3361.8, 3417.96, 3478.8],
        },
      },
    },
  ],
  vergoedingen: [],
};
