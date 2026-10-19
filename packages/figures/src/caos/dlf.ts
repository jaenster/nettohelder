import type { Cao } from '../types.js';

/**
 * Cao DLF B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao DLF B.V.
 * https://www.cnv.nl/documents/6265/Cao_DLF_1_juli_2026_-_30_juni_2027.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-07-01 (month) uit de bron
 *   - Basistabel 1-1-2026 teruggerekend uit de tabel per 2026-07-01 (gedeeld door +3,25%)
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-07-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoDlf2026: Cao = {
  id: 'dlf',
  name: "Cao DLF B.V.",
  year: 2026,
  effectiveNote: "Cao 2026-07-01 t/m 2027-06-30; loontabel per 2026-07-01. Let op: Cao DLF Seeds & Science (Kapelle en Moerstraten); vakbonden CNV en RMU Gratificatie van 6% van het jaarsalaris, uitbetaald in november Gemiddelde werkweek 38,15 uur bij 96 uur arbeidsduurverkorting (voormalige DLF-NL werknemers: 48 uur adv) Pensioen via BPL; werknemersbijdrage alleen als de totale pensioenlasten boven 20% van de pensioengevende loonsom uitkomen; hoogte niet gevonden Per 1-1-2027 Individueel Keuzebudget (IKB) Verhoging per 1-7-2025 (4%) uit de vorige cao (1-7-2025 t/m 30-6-2026) Salarisschalen per 1-7-2026 (incl. 3,25%) uit bijlage bij de cao, hele euro's; treden 0 t/m maximum periodieken. Beoordelingsperiodieken boven het maximum niet opgenomen. Schaal 1 alleen voor medewerkers via de participatiewet",
  sourceUrl: "https://www.cnv.nl/documents/6265/Cao_DLF_1_juli_2026_-_30_juni_2027.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.06,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      '1': [2252.78, 2330.27, 2411.62, 2496.85, 2583.05],
      '2': [2632.45, 2665.38, 2699.27, 2736.08, 2768.04, 2811.62],
      '3': [2687.65, 2727.36, 2764.16, 2813.56, 2852.3, 2893.95],
      '4': [2740.92, 2786.44, 2832.93, 2882.32, 2924.94, 2971.43, 3012.11],
      '5': [2816.46, 2867.8, 2924.94, 2978.21, 3027.6, 3083.78, 3132.2],
      '6': [2897.82, 2966.59, 3027.6, 3094.43, 3153.51, 3220.34, 3285.23, 3345.28],
      '7': [3035.35, 3103.15, 3172.88, 3238.74, 3315.25, 3388.86, 3451.82, 3525.42, 3594.19],
      '8': [3271.67, 3350.12, 3429.54, 3509.93, 3586.44, 3669.73, 3747.22, 3824.7, 3907.02, 3977.72],
      '9': [3462.47, 3565.13, 3671.67, 3772.4, 3879.9, 3980.63, 4087.17, 4191.77, 4293.46, 4400],
      '10': [3735.59, 3862.47, 3990.31, 4119.13, 4244.07, 4367.07, 4501.69, 4623.73, 4749.64, 4874.58],
      '11': [4020.34, 4162.71, 4303.15, 4450.36, 4594.67, 4741.89, 4875.54, 5016.95, 5164.16, 5306.54],
    },
  },
  periods: [
    {
      from: '2026-07-01',
      note: "+3,25% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          '1': [2326, 2406, 2490, 2578, 2667],
          '2': [2718, 2752, 2787, 2825, 2858, 2903],
          '3': [2775, 2816, 2854, 2905, 2945, 2988],
          '4': [2830, 2877, 2925, 2976, 3020, 3068, 3110],
          '5': [2908, 2961, 3020, 3075, 3126, 3184, 3234],
          '6': [2992, 3063, 3126, 3195, 3256, 3325, 3392, 3454],
          '7': [3134, 3204, 3276, 3344, 3423, 3499, 3564, 3640, 3711],
          '8': [3378, 3459, 3541, 3624, 3703, 3789, 3869, 3949, 4034, 4107],
          '9': [3575, 3681, 3791, 3895, 4006, 4110, 4220, 4328, 4433, 4543],
          '10': [3857, 3988, 4120, 4253, 4382, 4509, 4648, 4774, 4904, 5033],
          '11': [4151, 4298, 4443, 4595, 4744, 4896, 5034, 5180, 5332, 5479],
        },
      },
    },
  ],
  vergoedingen: [],
};
