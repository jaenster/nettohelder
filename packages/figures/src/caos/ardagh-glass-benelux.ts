import type { Cao } from '../types.js';

/**
 * Ardagh Glass Benelux 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Ardagh Glass Benelux
 * https://cao-kijker.awvn.nl/bestanden/1714_01-04-2026%20tot%2001-04-2027_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-04-01 (month) uit de bron
 *   - Basistabel 1-1-2026 teruggerekend uit de tabel per 2026-04-01 (gedeeld door +2,6%)
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-04-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoArdaghGlassBenelux2026: Cao = {
  id: 'ardagh-glass-benelux',
  name: "Ardagh Glass Benelux",
  year: 2026,
  effectiveNote: "Cao 2026-04-01 t/m 2027-03-31; loontabel per 2026-04-01. Let op: Cao 2026-2027 o.b.v. hernieuwd eindbod van 17 juni 2026 (geaccepteerd volgens AWVN); lonen +2,6% per 1-4-2026 met terugwerkende kracht. Eenmalige uitkering € 400 bruto in de salarisbetaling van juli 2026 voor medewerkers in dienst op 1 juli 2026; geldt voor iedere medewerker, niet naar rato. Vakantietoeslag 8% van 12x het maandinkomen, met een minimum voor vakvolwassen fulltimers (€ 1.388,73 in 2012, verhoogd met de algemene verhogingen). Eindejaarsuitkering 5% van 12x het maandinkomen in december; medewerkers van Moerdijk in dienst op 31-12-2006 krijgen het verschil met een 13e maand als harmonisatietoeslag. Normale arbeidsduur dagdienst 38 uur; sommige ploegenroosters 33,6 uur per week. Pensioen via Pensioenfonds PGB; premieverdeling niet in de cao vermeld. Schaal: bijlage I, salarisschalen per 1 april 2026 (periodiekenschaal, maandbedragen). Aanloopschalen (80%/90%) niet opgenomen.",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/1714_01-04-2026%20tot%2001-04-2027_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.05,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 38,
    schalen: {
      '3': [2729.64, 2767.43, 2808.42, 2847.76, 2888.75, 2929.51, 2970.83],
      '4': [2795.26, 2835.11, 2877.7, 2917.07, 2959.54, 3002.03, 3043, 3084.39],
      '5': [2873.92, 2917.07, 2962.72, 3003.51, 3049.19, 3094.92, 3140.58, 3186.78],
      '6': [2954.33, 2998.89, 3047.74, 3088.58, 3132.79, 3175.31, 3220.81, 3266.5, 3310.26],
      '7': [3064.52, 3105.91, 3154.77, 3202.09, 3252.45, 3297.98, 3345.31, 3394.09, 3445.1, 3495.02],
      '8': [3193.68, 3241.35, 3288.54, 3340.66, 3390.91, 3442.85, 3493.31, 3545.18, 3598.32, 3651.61],
      '9': [3375, 3422.36, 3471.28, 3538.08, 3576.7, 3630.24, 3683.71, 3738.83, 3794.05, 3850.97, 3908.65, 3966.98],
      '10': [3642.68, 3698, 3749.91, 3808.26, 3867.88, 3926.18, 3986.13, 4045.9, 4105.7, 4167.59, 4229.79, 4293.27, 4357.2],
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
        hoursPerWeek: 38,
        schalen: {
          '3': [2800.61, 2839.38, 2881.44, 2921.8, 2963.86, 3005.68, 3048.07],
          '4': [2867.94, 2908.82, 2952.52, 2992.91, 3036.49, 3080.08, 3122.12, 3164.58],
          '5': [2948.64, 2992.91, 3039.75, 3081.6, 3128.47, 3175.39, 3222.24, 3269.64],
          '6': [3031.14, 3076.86, 3126.98, 3168.88, 3214.24, 3257.87, 3304.55, 3351.43, 3396.33],
          '7': [3144.2, 3186.66, 3236.79, 3285.34, 3337.01, 3383.73, 3432.29, 3482.34, 3534.67, 3585.89],
          '8': [3276.72, 3325.63, 3374.04, 3427.52, 3479.07, 3532.36, 3584.14, 3637.35, 3691.88, 3746.55],
          '9': [3462.75, 3511.34, 3561.53, 3630.07, 3669.69, 3724.63, 3779.49, 3836.04, 3892.7, 3951.1, 4010.27, 4070.12],
          '10': [3737.39, 3794.15, 3847.41, 3907.27, 3968.44, 4028.26, 4089.77, 4151.09, 4212.45, 4275.95, 4339.76, 4404.9, 4470.49],
        },
      },
    },
  ],
  vergoedingen: [],
};
