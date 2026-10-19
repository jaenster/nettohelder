import type { Cao } from '../types.js';

/**
 * Cao Avery Dennison 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Avery Dennison
 * https://cao-kijker.awvn.nl/bestanden/1763_01-04-2025%20tot%2001-04-2027_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-04-01 (month) uit de bron
 *   - Basistabel 1-1-2026 teruggerekend uit de tabel per 2026-04-01 (gedeeld door +3,75%)
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-04-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoAveryDennison2026: Cao = {
  id: 'avery-dennison',
  name: "Cao Avery Dennison",
  year: 2026,
  effectiveNote: "Cao 2025-04-01 t/m 2027-03-31; loontabel per 2026-04-01. Let op: De algemene salarisverhoging wordt berekend over het maximum van de schaal (cao bijlage 1, lid 3), dus als vast bedrag per schaal; percentage is een benadering Jaarinkomen = 12 maandinkomens + 8% vakantietoeslag + 8% eindejaarsuitkering (jaarfactor 13,92) Dagdienst 40 uur per week met ATV-dagen (36 of 38 uur effectief); ploegendiensten wijken af Pensioenpremie niet opgenomen Schaal: bijlage 1, salarisschalen 1 april 2026 - 31 maart 2027, maandbedragen exclusief 4% ATV-toeslag; de cao geeft alleen schaalminimum en -maximum (opgenomen als twee treden). Aanloopschalen a1-a3 bij schaal 1 niet opgenomen.",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/1763_01-04-2025%20tot%2001-04-2027_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.08,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      '1': [2618.19, 3264.5],
      '2': [2691.09, 3406.08],
      '3': [2779.76, 3563.34],
      '4': [2879.86, 3753.51],
      '5': [3008.56, 3992.31],
      '6': [3168.69, 4291.19],
      '7': [3361.74, 4657.23],
      '8': [3590.53, 5119.1],
      '9': [3915.11, 5759.7],
      '10': [4345.52, 6649.1],
    },
  },
  periods: [
    {
      from: '2026-04-01',
      note: "+3,75% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          '1': [2716.37, 3386.92],
          '2': [2792.01, 3533.81],
          '3': [2884, 3696.97],
          '4': [2987.85, 3894.27],
          '5': [3121.38, 4142.02],
          '6': [3287.52, 4452.11],
          '7': [3487.81, 4831.88],
          '8': [3725.18, 5311.07],
          '9': [4061.93, 5975.69],
          '10': [4508.48, 6898.44],
        },
      },
    },
  ],
  vergoedingen: [],
};
