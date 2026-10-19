import type { Cao } from '../types.js';

/**
 * Cao Red Bee Media B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Red Bee Media B.V.
 * https://www.fnv.nl/getmedia/00e3f2be-6202-4d58-8cc3-860e0a12ab5e/520-red-bee-media-cao-01-01-2026-tm-31-12-2026-v14072026.pdf?ext=.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-04-01 (month) uit de bron
 *   - Basistabel 1-1-2026 teruggerekend uit de tabel per 2026-04-01 (gedeeld door +2,6%)
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-04-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoRedBeeMedia2026: Cao = {
  id: 'red-bee-media',
  name: "Cao Red Bee Media B.V.",
  year: 2026,
  effectiveNote: "Cao 2026-01-01 t/m 2026-12-31; loontabel per 2026-04-01. Let op: Geaccepteerd eindbod van 15-06-2026 (looptijd 1-1-2026 t/m 31-12-2026): 2,6% per 1-4-2026, volgens samenvatting AWVN cao-kijker; de akkoordtekst zelf was niet te downloaden Vakantietoeslag 8% (cao 2024, art. 4:3), uitbetaald in mei; niet gecontroleerd of dit in 2026 gewijzigd is De cao kent een bonusregeling en winstdelingsregeling (hoofdstuk 7 en 8); niet meegenomen Pensioen niet gevonden Salarisstructuur per 1-4-2026: per band alleen minimum, midpoint (100%) en 120% als maandsalaris exclusief vakantietoeslag; opgenomen als drie tredes [min, midpoint, 120%]",
  sourceUrl: "https://www.fnv.nl/getmedia/00e3f2be-6202-4d58-8cc3-860e0a12ab5e/520-red-bee-media-cao-01-01-2026-tm-31-12-2026-v14072026.pdf?ext=.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      'Band 6': [2559.54, 2958.65, 3550.37],
      'Band 7': [2559.54, 3295.34, 3954.41],
      'Band 8': [2559.54, 3690.39, 4428.47],
      'Band 9': [2559.54, 4188.93, 5026.72],
      'Band 10': [2847.5, 4745.82, 5694.98],
      'Band 11': [3228.33, 5380.56, 6456.67],
      'Band 12': [3682.81, 6138.02, 7365.62],
      'Band 13': [4267.74, 7112.9, 8535.49],
      'Band 14': [4970.21, 8283.69, 9940.43],
    },
  },
  periods: [
    {
      from: '2026-04-01',
      note: "+2,6% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          'Band 6': [2626.09, 3035.57, 3642.68],
          'Band 7': [2626.09, 3381.02, 4057.22],
          'Band 8': [2626.09, 3786.34, 4543.61],
          'Band 9': [2626.09, 4297.84, 5157.41],
          'Band 10': [2921.53, 4869.21, 5843.05],
          'Band 11': [3312.27, 5520.45, 6624.54],
          'Band 12': [3778.56, 6297.61, 7557.13],
          'Band 13': [4378.7, 7297.84, 8757.41],
          'Band 14': [5099.44, 8499.07, 10198.88],
        },
      },
    },
  ],
  vergoedingen: [],
};
