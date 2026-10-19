import type { Cao } from '../types.js';

/**
 * Cao Sociale Werkvoorziening (SW) 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Sociale Werkvoorziening (SW)
 * https://www.cedris.nl/app/uploads/2026/06/Loontabel-cao-sw-1-7-2026.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-07-01 (month) uit de bron
 *   - Basistabel 1-1-2026 teruggerekend uit de tabel per 2026-07-01 (gedeeld door +1,9%)
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-07-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoSocialeWerkvoorziening2026: Cao = {
  id: 'sociale-werkvoorziening',
  name: "Cao Sociale Werkvoorziening (SW)",
  year: 2026,
  effectiveNote: "Cao 2026-01-01 t/m 2028-12-31; loontabel per 2026-07-01. Let op: Loonsverhogingen volgen de loon- en prijscompensatie (LPO) die gemeenten van het Rijk ontvangen, twee keer per jaar (ook in 2027 en 2028); percentages na 1 juli 2026 nog niet bekend Verhoging januari 2027: restant tot een totaal van 4,01% t.o.v. januari 2026 (circa 2,07%), exact percentage niet gepubliceerd Per 1 mei 2026 extra verhoging (reparatie loongebouw) van schalen A, B1 en B2; hoogste treden stijgen jan 2026 - jan 2027 met 5,38% (A), 6,72% (B1) en 6,55% (B2). Treden onder € 2.304 zijn geschrapt Vanaf 1 juli 2026 geen werknemersdeel WGA-premie meer (werkgever betaalt volledig) Pensioen (ABP), eindejaarsuitkering, en vakantietoeslag niet in de cao-tekst geverifieerd Loonsverhogingen 2025 (vorige cao) niet nagezocht Loonschalen per 1-7-2026 (Cedris), maandbedragen bij 36 uur per week; schaal O heeft alleen een starttrede",
  sourceUrl: "https://www.cedris.nl/app/uploads/2026/06/Loontabel-cao-sw-1-7-2026.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 36,
    schalen: {
      'O': [2304.22],
      'A': [2304.22, 2333.66],
      'B1': [2304.22, 2333.66, 2364.08],
      'B2': [2304.22, 2333.66, 2364.08, 2393.52],
      'C1': [2420.02, 2461.24, 2501.47],
      'C2': [2420.02, 2461.24, 2501.47, 2545.63, 2615.31],
      'D1': [2675.17, 2715.41, 2759.57, 2802.75],
      'D2': [2675.17, 2715.41, 2759.57, 2802.75, 2845.93, 2931.31],
      'E': [2931.31, 3020.61, 3102.06, 3187.44, 3267.91, 3355.25],
      'F': [3102.06, 3187.44, 3267.91, 3355.25, 3442.59, 3531.89, 3618.25],
      'G': [3618.25, 3746.81, 3833.17, 3920.51, 4005.89, 4088.32, 4138.37, 4178.61],
      'H': [4138.37, 4178.61, 4261.04, 4391.56, 4464.18, 4565.26, 4647.69, 4734.05],
      'I': [4565.26, 4734.05, 4988.22, 5228.66, 5427.87, 5582.92, 5824.34, 6069.68, 6302.26],
    },
  },
  periods: [
    {
      from: '2026-07-01',
      note: "+1,9% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 36,
        schalen: {
          'O': [2348],
          'A': [2348, 2378],
          'B1': [2348, 2378, 2409],
          'B2': [2348, 2378, 2409, 2439],
          'C1': [2466, 2508, 2549],
          'C2': [2466, 2508, 2549, 2594, 2665],
          'D1': [2726, 2767, 2812, 2856],
          'D2': [2726, 2767, 2812, 2856, 2900, 2987],
          'E': [2987, 3078, 3161, 3248, 3330, 3419],
          'F': [3161, 3248, 3330, 3419, 3508, 3599, 3687],
          'G': [3687, 3818, 3906, 3995, 4082, 4166, 4217, 4258],
          'H': [4217, 4258, 4342, 4475, 4549, 4652, 4736, 4824],
          'I': [4652, 4824, 5083, 5328, 5531, 5689, 5935, 6185, 6422],
        },
      },
    },
  ],
  vergoedingen: [],
};
