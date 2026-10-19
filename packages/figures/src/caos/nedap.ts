import type { Cao } from '../types.js';

/**
 * Nederlandsche Apparatenfabriek Nedap 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Nederlandsche Apparatenfabriek Nedap
 * https://cao-kijker.awvn.nl/bestanden/0664_01-04-2026%20tot%2001-04-2027_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-04-01 (month) uit de bron
 *   - Basistabel 1-1-2026 teruggerekend uit de tabel per 2026-04-01 (gedeeld door +3,4%)
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-04-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoNedap2026: Cao = {
  id: 'nedap',
  name: "Nederlandsche Apparatenfabriek Nedap",
  year: 2026,
  effectiveNote: "Cao 2026-04-01 t/m 2027-03-31; loontabel per 2026-04-01. Let op: Cao Nedap N.V. 1 april 2026 t/m 31 maart 2027 (onderhandelaarsakkoord 8 juni 2026 met De Unie en FNV); cao-salarissen en schalen +3,4% per 1-4-2026. Minimum bruto uurloon € 18 voor alle medewerkers gedurende de looptijd. Salarisschalen I t/m IX per 1-4-2026: beginsalaris (0 functiejaren) plus vaste periodieken per functiejaar; er zijn lagere jeugdschalen voor jongere medewerkers/werkstudenten. 13e maand: brutobedrag gelijk aan het maandsalaris van december van het voorgaande jaar, uitbetaald in januari. Winstdelingsregeling (jaarlijks aandeel in de winst) niet opgenomen. Cao 2025-2026 kende een eenmalige uitkering van € 180 bruto o.b.v. fulltime (€ 15 per maand over de looptijd), uit te betalen op een door Nedap te kiezen moment; datum onbekend, daarom niet opgenomen. Pensioen: deelname aan de bestaande pensioenregeling van Nedap; premie niet in de cao vermeld.",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/0664_01-04-2026%20tot%2001-04-2027_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 38,
    schalen: {
      'I': [2936.17, 2999.03, 3061.9],
      'II': [2959.38, 3039.65, 3119.92],
      'III': [3030.95, 3118.96, 3206.96, 3294.97],
      'IV': [3102.51, 3221.47, 3340.43, 3459.38, 3578.34],
      'V': [3251.45, 3371.37, 3491.3, 3611.22, 3731.14, 3851.06],
      'VI': [3436.17, 3560.93, 3685.69, 3810.44, 3935.2, 4059.96, 4184.72],
      'VII': [3622.82, 3759.19, 3895.55, 4031.91, 4168.28, 4304.64, 4441.01, 4577.37],
      'VIII': [3814.31, 3984.53, 4154.74, 4324.95, 4495.16, 4665.38, 4835.59, 5005.8, 5176.02],
      'IX': [4007.74, 4207.93, 4408.12, 4608.32, 4808.51, 5008.7, 5208.9, 5409.09, 5609.28, 5809.48],
    },
  },
  periods: [
    {
      from: '2026-04-01',
      note: "+3,4% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 38,
        schalen: {
          'I': [3036, 3101, 3166],
          'II': [3060, 3143, 3226],
          'III': [3134, 3225, 3316, 3407],
          'IV': [3208, 3331, 3454, 3577, 3700],
          'V': [3362, 3486, 3610, 3734, 3858, 3982],
          'VI': [3553, 3682, 3811, 3940, 4069, 4198, 4327],
          'VII': [3746, 3887, 4028, 4169, 4310, 4451, 4592, 4733],
          'VIII': [3944, 4120, 4296, 4472, 4648, 4824, 5000, 5176, 5352],
          'IX': [4144, 4351, 4558, 4765, 4972, 5179, 5386, 5593, 5800, 6007],
        },
      },
    },
  ],
  vergoedingen: [],
};
