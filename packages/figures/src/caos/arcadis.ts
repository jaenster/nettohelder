import type { Cao } from '../types.js';

/**
 * Arcadis 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Arcadis
 * https://cao-kijker.awvn.nl/bestanden/0392_01-01-2025%20tot%2001-01-2027_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-07-01 (month) uit de bron
 *   - Basistabel 1-1-2026 teruggerekend uit de tabel per 2026-07-01 (gedeeld door +1,25%)
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-07-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoArcadis2026: Cao = {
  id: 'arcadis',
  name: "Arcadis",
  year: 2026,
  effectiveNote: "Cao 2025-01-01 t/m 2026-12-31; loontabel per 2026-07-01. Let op: Cao Arcadis 1 januari 2025 t/m 31 december 2026 (geaccepteerd eindbod juli 2025). Salarissen en schalen +3% (min. € 170) per 1-9-2025, +2% (min. € 100) per 1-1-2026 en +1,25% per 1-7-2026. Salarisschalen per 1-7-2026 per level 1 t/m 11: minimum, 100%-salaris en persoonlijk maximum (opgenomen als drie treden). Individuele verhoging jaarlijks per 1 april o.b.v. beoordeling en relatieve salarispositie. In september 2025 eenmalige compensatie voor gemist salaris april-augustus 2025 (individueel bepaald) en € 35 bruto per maand voor gemiste pensioenopbouw; plus € 200 netto eenmalig. In december een 53e-week-uitkering van € 700 netto (vervangt de RAU-regeling). Minimum uurloon € 16. Fulltime 40 uur per week. Pensioen bij Pensioenkring Arcadis (Hnpf): werknemer betaalt 27% van de totale premie (6,69% van de pensioengrondslag in 2022); actueel percentage niet in de cao vermeld. Vakantiegeld 8% is het wettelijk minimum; niet in de cao-tekst geverifieerd",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/0392_01-01-2025%20tot%2001-01-2027_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      '1': [2767.19, 3532.37, 3762.02],
      '2': [2889.3, 3697.05, 3943.52],
      '3': [3025.99, 3902.06, 4198.95],
      '4': [3194.02, 4168.7, 4531.68],
      '5': [3359.83, 4496.96, 4896.91],
      '6': [3578.3, 4965.25, 5469.93],
      '7': [3965.93, 5642.48, 6286.39],
      '8': [4067.87, 6242.83, 7024.37],
      '9': [4611.23, 6792.49, 7566.96],
      '10': [5019.02, 7958.91, 8994.68],
      '11': [5741.9, 9611.43, 10869.64],
    },
  },
  periods: [
    {
      from: '2026-07-01',
      note: "+1,25% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          '1': [2801.78, 3576.52, 3809.05],
          '2': [2925.42, 3743.26, 3992.81],
          '3': [3063.81, 3950.84, 4251.44],
          '4': [3233.95, 4220.81, 4588.33],
          '5': [3401.83, 4553.17, 4958.12],
          '6': [3623.03, 5027.32, 5538.3],
          '7': [4015.5, 5713.01, 6364.97],
          '8': [4118.72, 6320.87, 7112.17],
          '9': [4668.87, 6877.4, 7661.55],
          '10': [5081.76, 8058.4, 9107.11],
          '11': [5813.67, 9731.57, 11005.51],
        },
      },
    },
  ],
  vergoedingen: [],
};
