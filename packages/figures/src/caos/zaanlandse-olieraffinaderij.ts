import type { Cao } from '../types.js';

/**
 * Cao Zaanlandse Olieraffinaderij (ZOR) 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Zaanlandse Olieraffinaderij (ZOR)
 * https://cao-kijker.awvn.nl/bestanden/4026_01-01-2026%20tot%2001-01-2028_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-01-01 (month) uit de bron
 *   - Latere tabellen berekend uit de cao-verhogingen (2027-01-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoZaanlandseOlieraffinaderij2026: Cao = {
  id: 'zaanlandse-olieraffinaderij',
  name: "Cao Zaanlandse Olieraffinaderij (ZOR)",
  year: 2026,
  effectiveNote: "Cao 2026-01-01 t/m 2027-12-31; loontabel per 2026-01-01. Let op: De cao ZOR volgt de cao-verhogingen van de cao Cacao (Cargill); de salaristabel per 1-1-2026 is de gezamenlijke tabel cao Cacao en cao ZOR (2% + 1,23% APC) Automatische prijscompensatie (APC) per januari en juli op basis van CBS-CPI, maximaal 5% per kalenderjaar; uitkomsten per 1-7-2026, 1-1-2027 en 1-7-2027 niet bekend en niet opgenomen HOW-vergoeding per 1-1-2026: EUR 100 bruto per maand voor ploegenmedewerkers, EUR 50 voor dagdienst; telt mee voor vakantietoeslag, 13e maand en pensioen Vakantietoeslag 8% van 12 maandinkomens; eindejaarsuitkering 8,33% van het jaarinkomen in november Dagdienst 40 uur per week; 5-ploegendienst gemiddeld 33,6 uur Pensioen in aparte Cargill pensioen-cao; werknemerspremie niet gevonden",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/4026_01-01-2026%20tot%2001-01-2028_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      'A': [3389.92, 3440.1, 3491.71, 3540.52, 3590.75, 3642.18, 3694.52, 3746.92],
      'B': [3454.28, 3508.42, 3562.59, 3617.74, 3673.95, 3730.52, 3786.95, 3843.5],
      'C': [3579.21, 3640.61, 3702.96, 3765.25, 3827.55, 3889.89, 3952.18, 4014.48],
      'D': [3747.87, 3813.08, 3878.32, 3943.49, 4008.66, 4073.9, 4139.09, 4204.24, 4269.46],
      'E': [3988.37, 4066.63, 4144.83, 4223.12, 4301.34, 4373.74, 4457.76, 4535.99, 4614.22, 4692.47],
      'F': [4301.34, 4385.32, 4469.36, 4553.44, 4638.09, 4721.49, 4805.51, 4889.53, 4973.6, 5057.6],
      'G': [4692.5, 4785.2, 4877.99, 4970.64, 5063.37, 5156.1, 5248.85, 5341.53, 5434.26, 5527.04],
    },
  },
  periods: [
    {
      from: '2027-01-01',
      note: "+2% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          'A': [3457.72, 3508.9, 3561.54, 3611.33, 3662.57, 3715.02, 3768.41, 3821.86],
          'B': [3523.37, 3578.59, 3633.84, 3690.09, 3747.43, 3805.13, 3862.69, 3920.37],
          'C': [3650.79, 3713.42, 3777.02, 3840.56, 3904.1, 3967.69, 4031.22, 4094.77],
          'D': [3822.83, 3889.34, 3955.89, 4022.36, 4088.83, 4155.38, 4221.87, 4288.32, 4354.85],
          'E': [4068.14, 4147.96, 4227.73, 4307.58, 4387.37, 4461.21, 4546.92, 4626.71, 4706.5, 4786.32],
          'F': [4387.37, 4473.03, 4558.75, 4644.51, 4730.85, 4815.92, 4901.62, 4987.32, 5073.07, 5158.75],
          'G': [4786.35, 4880.9, 4975.55, 5070.05, 5164.64, 5259.22, 5353.83, 5448.36, 5542.95, 5637.58],
        },
      },
    },
  ],
  vergoedingen: [],
};
