import type { Cao } from '../types.js';

/**
 * Cao Celanese Production Netherlands B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Celanese Production Netherlands B.V.
 * https://cao-kijker.awvn.nl/bestanden/2538_01-10-2025%20tot%2001-04-2027_akkoord.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-10-01 (month) uit de bron
 *   - Basistabel 1-1-2026 teruggerekend uit de tabel per 2026-10-01 (gedeeld door +1,5%)
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-10-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoCelaneseProductionNetherlands2026: Cao = {
  id: 'celanese-production-netherlands',
  name: "Cao Celanese Production Netherlands B.V.",
  year: 2026,
  effectiveNote: "Cao 2025-10-01 t/m 2027-03-31; loontabel per 2026-10-01. Let op: Cao 1-10-2025 t/m 31-3-2027 (eindbod FNV / onderhandelingsresultaat ABW van 18-12-2025); structureel +3,5% per 1-10-2025 en +1,5% per 1-10-2026 Jeugdschalen vervallen Dagdienst gemiddeld 40 uur per week; 2-ploegendienst 37,5 uur, 3-ploegendienst 36 uur Vakantietoeslag 8% van het in het kalenderjaar verdiende jaarsalaris, voorschot in april Eigen pensioenregeling met pensioenbudget van 26% van de salarissom; werknemersbijdrage staat niet in de cao Verschil tussen kilometervergoeding en fiscaal maximum (€ 0,23/km) kan worden verrekend met het brutosalaris Schaal: bijlage 1, cao-schalen Celanese per 1 oktober 2026 (incl. 1,5%), maandbedragen in hele euro's, treden 0 t/m 5-10 (cao-tekst https://cao-kijker.awvn.nl/bestanden/2538_01-10-2024%20tot%2001-04-2027_cao.pdf).",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/2538_01-10-2025%20tot%2001-04-2027_akkoord.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      'A': [2896.55, 2943.84, 2985.22, 3035.47, 3087.68, 3146.8],
      'B': [2973.4, 3019.7, 3070.94, 3118.23, 3174.38, 3234.48, 3289.66],
      'C': [3044.33, 3098.52, 3151.72, 3212.81, 3275.86, 3338.92, 3405.91, 3475.86],
      'D': [3121.18, 3187.19, 3255.17, 3326.11, 3396.06, 3466.01, 3536.95, 3596.06, 3669.95],
      'E': [3247.29, 3322.17, 3400, 3477.83, 3557.64, 3634.48, 3714.29, 3796.06, 3875.86],
      'F': [3406.9, 3494.58, 3583.25, 3669.95, 3753.69, 3842.36, 3927.09, 4044.33, 4126.11, 4204.93],
      'G': [3664.04, 3759.61, 3858.13, 3952.71, 4048.28, 4144.83, 4244.33, 4338.92, 4446.31, 4529.06, 4618.72],
      'H': [3917.24, 4035.47, 4149.75, 4262.07, 4377.34, 4496.55, 4611.82, 4724.14, 4840.39, 5000.99, 5105.42],
    },
  },
  periods: [
    {
      from: '2026-10-01',
      note: "+1,5% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          'A': [2940, 2988, 3030, 3081, 3134, 3194],
          'B': [3018, 3065, 3117, 3165, 3222, 3283, 3339],
          'C': [3090, 3145, 3199, 3261, 3325, 3389, 3457, 3528],
          'D': [3168, 3235, 3304, 3376, 3447, 3518, 3590, 3650, 3725],
          'E': [3296, 3372, 3451, 3530, 3611, 3689, 3770, 3853, 3934],
          'F': [3458, 3547, 3637, 3725, 3810, 3900, 3986, 4105, 4188, 4268],
          'G': [3719, 3816, 3916, 4012, 4109, 4207, 4308, 4404, 4513, 4597, 4688],
          'H': [3976, 4096, 4212, 4326, 4443, 4564, 4681, 4795, 4913, 5076, 5182],
        },
      },
    },
  ],
  vergoedingen: [],
};
