import type { Cao } from '../types.js';

/**
 * Cao Toneel en Dans 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Toneel en Dans
 * https://zoek.officielebekendmakingen.nl/stcrt-2025-6402.html
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-01-01 (month) uit de bron
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoToneelDans2026: Cao = {
  id: 'toneel-dans',
  name: "Cao Toneel en Dans",
  year: 2026,
  effectiveNote: "Cao 2025-01-01 t/m 2026-12-31; loontabel per 2026-01-01. Let op: Eindejaarsuitkering is een vast bedrag van € 400 bruto per jaar bij een volledig dienstverband, uitbetaald in december; naar rato bij deeltijd. Werkgever kan ruil tegen drie extra vakantiedagen aanbieden Salarisbedragen zijn bruto maandsalarissen bij 40 uur per week; minimaal het wettelijk minimumuurloon In de schalen I, II en III zijn de laagste stappen (onder het minimumloon) leeg; de treden in de tabel beginnen bij de eerste gevulde stap Schaal VID is alleen voor dansers (niet van Het Nationale Ballet) Pensioen via PFZW; de verdeling van de premie tussen werkgever en werknemer staat niet in de algemeen verbindend verklaarde tekst en is daarom niet opgenomen Cao loopt af op 31-12-2026; afspraken voor 2027 nog niet bekend",
  sourceUrl: "https://zoek.officielebekendmakingen.nl/stcrt-2025-6402.html",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      'I': [2444, 2504, 2564],
      'II': [2492, 2559, 2627, 2694, 2762, 2829, 2897],
      'III': [2531, 2605, 2679, 2753, 2826, 2900, 2974, 3048, 3122, 3196],
      'IV': [2740, 2819, 2898, 2977, 3056, 3135, 3214, 3293, 3372, 3451, 3530],
      'V': [2897, 2986, 3075, 3164, 3253, 3342, 3431, 3521, 3610, 3705, 3802, 3902, 4005, 4111, 4221],
      'VID': [2817, 2939, 3060, 3191, 3346, 3567, 3784, 4002, 4211, 4304, 4400, 4497, 4597, 4699, 4803],
      'VI': [3077, 3191, 3304, 3417, 3531, 3644, 3758, 3871, 3984, 4087, 4194, 4302, 4414, 4529, 4647, 4767],
      'VII': [3272, 3393, 3514, 3635, 3756, 3877, 3998, 4119, 4240, 4344, 4451, 4560, 4671, 4786, 4903, 5024],
      'VIII': [3670, 3796, 3922, 4048, 4174, 4300, 4426, 4552, 4678, 4784, 4892, 5003, 5116, 5232, 5350],
      'IX': [4035, 4178, 4321, 4463, 4606, 4748, 4891, 5034, 5176, 5311, 5450, 5592, 5739, 5889],
      'X': [4780, 4928, 5076, 5224, 5371, 5519, 5667, 5815, 5962, 6075, 6191, 6309, 6429],
      'XI': [5083, 5257, 5430, 5603, 5776, 5950, 6123, 6296, 6469, 6636, 6807, 6982, 7162],
      'XII': [6165, 6376, 6588, 6799, 7011, 7222, 7433, 7645, 7856, 8059, 8268, 8482, 8702],
    },
  },
  vergoedingen: [],
};
