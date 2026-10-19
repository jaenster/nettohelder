import type { Cao } from '../types.js';

/**
 * Cao Pluimveeverwerkende Industrie 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Pluimveeverwerkende Industrie
 * https://www.cnv.nl/documents/5931/Cao-pluimvee-2025-versie-13-8-2025.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-07-01 (month) uit de bron
 *   - Basistabel 1-1-2026 teruggerekend uit de tabel per 2026-07-01 (gedeeld door +3%)
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-07-01, 2027-01-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoPluimveeverwerking2026: Cao = {
  id: 'pluimveeverwerking',
  name: "Cao Pluimveeverwerkende Industrie",
  year: 2026,
  effectiveNote: "Cao 2025-04-01 t/m 2027-03-31; loontabel per 2026-07-01. Let op: Per 1-7-2025 nieuw salarisgebouw op uurbasis: eindejaarsuitkering afgeschaft en in de salarissen opgenomen, plus 4% verhoging en een extra functiejaar per schaal; de 4% in de verhogingen is exclusief de opname van de eindejaarsuitkering Schaal = maandsalarissen per 1-7-2026 uit bijlage 8 (18 jaar en ouder, 40 uur per week, 8 x 261 / 12 uur per maand); functiegroep I volgt het WML (max. 2 maanden) en is niet opgenomen. De cao bevat ook tabellen per uur, week en 4 weken, en per 1-1-2027 (+0,5%) Medewerkers buiten functiegroep I t/m VI: per 1-7-2025 3% + € 35 per maand, per 1-7-2026 2% + € 35 per maand (€ 32,18 per periode), per 1-1-2027 0,5% Eenmalige uitkering juli 2025: 2,15% van het salaris (incl. toeslagen) over januari t/m juni 2025; niet in de berekening Pensioen via BPF VLEP (overgang naar nieuwe regeling per 1-1-2027); werknemersdeel en franchise 2026 niet gevonden Loonsverhoging na 31-3-2027 nog niet bekend",
  sourceUrl: "https://www.cnv.nl/documents/5931/Cao-pluimvee-2025-versie-13-8-2025.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      'II': [2555.94, 2677.57, 2745.15, 2814.41, 2885.36, 2956.31],
      'III': [2650.54, 2716.43, 2784, 2853.26, 2924.21, 2996.85, 3072.87],
      'IV': [2711.36, 2778.93, 2848.19, 2920.83, 2993.48, 3067.81, 3145.51, 3223.22],
      'V': [2851.57, 2922.52, 2995.17, 3071.18, 3147.2, 3226.6, 3306, 3388.78],
      'VI': [3052.6, 3130.31, 3208.02, 3289.11, 3371.88, 3454.66, 3540.82, 3630.35],
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
        hoursPerWeek: 40,
        schalen: {
          'II': [2632.62, 2757.9, 2827.5, 2898.84, 2971.92, 3045],
          'III': [2730.06, 2797.92, 2867.52, 2938.86, 3011.94, 3086.76, 3165.06],
          'IV': [2792.7, 2862.3, 2933.64, 3008.46, 3083.28, 3159.84, 3239.88, 3319.92],
          'V': [2937.12, 3010.2, 3085.02, 3163.32, 3241.62, 3323.4, 3405.18, 3490.44],
          'VI': [3144.18, 3224.22, 3304.26, 3387.78, 3473.04, 3558.3, 3647.04, 3739.26],
        },
      },
    },
    {
      from: '2027-01-01',
      note: "+0,5% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          'II': [2645.78, 2771.69, 2841.64, 2913.33, 2986.78, 3060.23],
          'III': [2743.71, 2811.91, 2881.86, 2953.55, 3027, 3102.19, 3180.89],
          'IV': [2806.66, 2876.61, 2948.31, 3023.5, 3098.7, 3175.64, 3256.08, 3336.52],
          'V': [2951.81, 3025.25, 3100.45, 3179.14, 3257.83, 3340.02, 3422.21, 3507.89],
          'VI': [3159.9, 3240.34, 3320.78, 3404.72, 3490.41, 3576.09, 3665.28, 3757.96],
        },
      },
    },
  ],
  vergoedingen: [],
};
