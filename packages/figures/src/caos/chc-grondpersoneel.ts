import type { Cao } from '../types.js';

/**
 * Cao CHC voor grondpersoneel 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao CHC voor grondpersoneel
 * https://cao-kijker.awvn.nl/bestanden/1988_01-01-2026%20tot%2001-01-2029_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2027-01-01 (month) uit de bron
 *   - Basistabel 1-1-2026 teruggerekend uit de tabel per 2027-01-01 (gedeeld door +3,5%)
 *   - Latere tabellen berekend uit de cao-verhogingen (2027-01-01, 2028-01-01)
 *
 * Excluded: none stated
 */
export const caoChcGrondpersoneel2026: Cao = {
  id: 'chc-grondpersoneel',
  name: "Cao CHC voor grondpersoneel",
  year: 2026,
  effectiveNote: "Cao 2026-01-01 t/m 2028-12-31; loontabel per 2027-01-01. Let op: Schaal = Loongebouw I (niet Technische Dienst) per 1 januari 2027; de bedragen per groep zijn minimum, 100%, 105% en 107% van de schaal (geen echte treden). Loongebouw II (Technische Dienst) heeft hogere bedragen. Jaarlijkse vaste verhoging op basis van inschaling: 2% tot 100% inschaling, 1% van 100% tot maximaal 107%. Dagdienst/kantoor 37,5 uur per week, ploegendienst 38 uur per week. Pensioen: beschikbare premieregeling; deelnemersbijdrage 4,60% van de gemaximeerde pensioengrondslag; franchise en maximum voor 2026. Pensioengevend inkomen is inclusief 8% vakantietoeslag, ploegentoeslag en functietoeslag. Werknemers in dienst vóór 2016 krijgen een leeftijdsafhankelijke bruto compensatie voor het pensioengevend salaris boven het fiscale maximum.",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/1988_01-01-2026%20tot%2001-01-2029_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 37.5,
    schalen: {
      '3': [2545.89, 3223.19, 3384.54, 3449.28],
      '4': [2675.36, 3386.47, 3555.56, 3623.19],
      '5': [2709.18, 3564.25, 3743, 3814.49],
      '6': [2774.88, 3800.97, 3991.3, 4067.63],
      '7': [2993.24, 4100.48, 4305.31, 4387.44],
      '8': [3124.64, 4463.77, 4686.96, 4776.81],
      '9': [3440.58, 4914.98, 5160.39, 5258.94],
      '10': [3871.5, 5530.43, 5806.76, 5916.91],
      '11': [4272.46, 6375.85, 6694.69, 6822.22],
      '12': [5080.19, 7582.61, 7961.35, 8113.04],
    },
  },
  periods: [
    {
      from: '2027-01-01',
      note: "+3,5% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 37.5,
        schalen: {
          '3': [2635, 3336, 3503, 3570],
          '4': [2769, 3505, 3680, 3750],
          '5': [2804, 3689, 3874, 3948],
          '6': [2872, 3934, 4131, 4210],
          '7': [3098, 4244, 4456, 4541],
          '8': [3234, 4620, 4851, 4944],
          '9': [3561, 5087, 5341, 5443],
          '10': [4007, 5724, 6010, 6124],
          '11': [4422, 6599, 6929, 7061],
          '12': [5258, 7848, 8240, 8397],
        },
      },
    },
    {
      from: '2028-01-01',
      note: "+3,5% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 37.5,
        schalen: {
          '3': [2727.23, 3452.76, 3625.61, 3694.95],
          '4': [2865.92, 3627.68, 3808.8, 3881.25],
          '5': [2902.14, 3818.12, 4009.59, 4086.18],
          '6': [2972.52, 4071.69, 4275.59, 4357.35],
          '7': [3206.43, 4392.54, 4611.96, 4699.94],
          '8': [3347.19, 4781.7, 5020.79, 5117.04],
          '9': [3685.64, 5265.05, 5527.94, 5633.51],
          '10': [4147.25, 5924.34, 6220.35, 6338.34],
          '11': [4576.77, 6829.97, 7171.52, 7308.14],
          '12': [5442.03, 8122.68, 8528.4, 8690.9],
        },
      },
    },
  ],
  vergoedingen: [],
};
