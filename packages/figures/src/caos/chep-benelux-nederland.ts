import type { Cao } from '../types.js';

/**
 * Cao CHEP Benelux Nederland B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao CHEP Benelux Nederland B.V.
 * https://cao-kijker.awvn.nl/bestanden/1407_01-07-2025%20tot%2001-07-2027_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-07-01 (month) uit de bron
 *   - Basistabel 1-1-2026 teruggerekend uit de tabel per 2026-07-01 (gedeeld door +3%)
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-07-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoChepBeneluxNederland2026: Cao = {
  id: 'chep-benelux-nederland',
  name: "Cao CHEP Benelux Nederland B.V.",
  year: 2026,
  effectiveNote: "Cao 2025-07-01 t/m 2027-06-30; loontabel per 2026-07-01. Let op: Salarisschalen per 1-7-2026 (Tiel en Zevenaar gelijk): aanloopschaal en stappen 1 t/m 4 Eindejaarsuitkering is één schaalsalaris (maand december); hier als 8,33% opgenomen Pensioen bij BPFV (bedrijfstakpensioenfonds Vlakglas, Verf, Glasbewerking); werknemerspremie niet in de cao vermeld Ploegentoeslagen, aanwezigheidspremie en 80-90-100-regeling (vanaf 1-7-2026) niet meegenomen",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/1407_01-07-2025%20tot%2001-07-2027_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 37.5,
    schalen: {
      '1': [2521.81, 2542.32, 2615.37, 2688.42, 2761.49],
      '2': [2521.81, 2645.18, 2721.22, 2797.26, 2873.3],
      '3': [2521.81, 2757.01, 2836.03, 2916.53, 2995.55],
      '4': [2521.81, 2903.13, 2988.11, 3071.59, 3155.09],
      '5': [2633.97, 3090.97, 3180.44, 3269.89, 3359.35],
      '6': [2792.13, 3335.5, 3432.41, 3528.72, 3626.22],
      '7': [2990.44, 3574.79, 3678.41, 3782.02, 3886.4],
      '8': [3188.75, 3814.09, 3924.42, 4034.74, 4146.55],
    },
  },
  periods: [
    {
      from: '2026-07-01',
      note: "+3% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 37.5,
        schalen: {
          '1': [2597.46, 2618.59, 2693.83, 2769.07, 2844.33],
          '2': [2597.46, 2724.54, 2802.86, 2881.18, 2959.5],
          '3': [2597.46, 2839.72, 2921.11, 3004.03, 3085.42],
          '4': [2597.46, 2990.22, 3077.75, 3163.74, 3249.74],
          '5': [2712.99, 3183.7, 3275.85, 3367.99, 3460.13],
          '6': [2875.89, 3435.56, 3535.38, 3634.58, 3735.01],
          '7': [3080.15, 3682.03, 3788.76, 3895.48, 4002.99],
          '8': [3284.41, 3928.51, 4042.15, 4155.78, 4270.95],
        },
      },
    },
  ],
  vergoedingen: [],
};
