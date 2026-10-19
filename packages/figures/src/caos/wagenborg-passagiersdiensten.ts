import type { Cao } from '../types.js';

/**
 * Cao Wagenborg Passagiersdiensten 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Wagenborg Passagiersdiensten
 * https://cao-kijker.awvn.nl/bestanden/0257_01-01-2026%20tot%2001-01-2027_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-01-01 (month) uit de bron
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-07-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoWagenborgPassagiersdiensten2026: Cao = {
  id: 'wagenborg-passagiersdiensten',
  name: "Cao Wagenborg Passagiersdiensten",
  year: 2026,
  effectiveNote: "Cao 2026-01-01 t/m 2026-12-31; loontabel per 2026-01-01. Let op: Cao 1-1-2026 t/m 31-12-2026 (overeengekomen 26-1-2026) Lonen stijgen halfjaarlijks (1 januari en 1 juli) met de CBS-index van cao-lonen; in 2026 totaal minimaal 3,9%: 1,85% per 1-1-2026 en per 1-7-2026 de index aangevuld tot samen 3,9% (hier 2,05%); als de indexen samen hoger zijn wordt het meerdere toegekend Salarisschalen 1 t/m 7 per 1-1-2026 in hele euro's per maand, 100%-kolom; de tabel kent ook kolommen van 96%, 101%, 103% en 104% (o.a. afhankelijk van diploma's), niet opgenomen Normale diensttijd gemiddeld 36 uur per week Vakantietoeslag 8% van het jaarloon Werknemer betaalt de helft van het WGA-deel van de gedifferentieerde premie Werkhervattingskas; pensioenpremie werknemer niet vermeld",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/0257_01-01-2026%20tot%2001-01-2027_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 36,
    schalen: {
      '1': [3276, 3301, 3343, 3398, 3438],
      '2': [3417, 3467, 3518, 3568, 3622, 3675, 3726],
      '3': [3548, 3616, 3679, 3750, 3814, 3884, 3948],
      '4': [3709, 3778, 3848, 3908, 3977, 4050, 4116, 4183],
      '5': [3917, 3989, 4068, 4144, 4216, 4293, 4363, 4440],
      '6': [4193, 4293, 4440, 4482, 4581, 4669, 4768, 4863, 4960],
      '7': [4525, 4616, 4717, 4814, 4914, 5004, 5105, 5204, 5298],
    },
  },
  periods: [
    {
      from: '2026-07-01',
      note: "+2,05% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 36,
        schalen: {
          '1': [3343.16, 3368.67, 3411.53, 3467.66, 3508.48],
          '2': [3487.05, 3538.07, 3590.12, 3641.14, 3696.25, 3750.34, 3802.38],
          '3': [3620.73, 3690.13, 3754.42, 3826.88, 3892.19, 3963.62, 4028.93],
          '4': [3785.03, 3855.45, 3926.88, 3988.11, 4058.53, 4133.03, 4200.38, 4268.75],
          '5': [3997.3, 4070.77, 4151.39, 4228.95, 4302.43, 4381.01, 4452.44, 4531.02],
          '6': [4278.96, 4381.01, 4531.02, 4573.88, 4674.91, 4764.71, 4865.74, 4962.69, 5061.68],
          '7': [4617.76, 4710.63, 4813.7, 4912.69, 5014.74, 5106.58, 5209.65, 5310.68, 5406.61],
        },
      },
    },
  ],
  vergoedingen: [],
};
