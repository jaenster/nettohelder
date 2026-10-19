import type { Cao } from '../types.js';

/**
 * Cao CNC Grondstoffen B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao CNC Grondstoffen B.V.
 * https://www.fnv.nl/getmedia/25a13dca-9890-4883-b0b5-b3fdfd89c1d8/274-cnc-grondstoffen-cao-01-05-2026-tm-30-04-2027-v01102026.pdf?ext=.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-11-01 (4weeks) uit de bron
 *   - Basistabel 1-1-2026 teruggerekend uit de tabel per 2026-11-01 (gedeeld door +2,25%, +0,75%)
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-06-01, 2026-11-01)
 *   - Bron is een 4-wekentabel, omgerekend naar maand (×13/12)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoCncGrondstoffen2026: Cao = {
  id: 'cnc-grondstoffen',
  name: "Cao CNC Grondstoffen B.V.",
  year: 2026,
  effectiveNote: "Cao 2026-05-01 t/m 2027-04-30; loontabel per 2026-11-01. Let op: Salarissen per periode van 4 weken (13 perioden per jaar); tabel per 1-11-2026 'met ATV-dagen' in hele euro's, trede = functiejaar. Wie ATV niet vast ingeroosterd heeft kan ATV uitruilen tegen 5% meer salaris (aparte tabel) Voltijd 160 uur per periode (40 uur per week) met 104 uur ATV per jaar, gemiddeld 38 uur per week Eenmalige uitkering € 250 bruto in december 2026 (deeltijd naar rato; bij indiensttreding in 2026 1/12 per maand) Vakantietoeslag 8% van het periode-inkomen; eindejaarsuitkering in periode 13 gelijk aan het periode-inkomen van periode 13 (circa 7,69% van het jaarinkomen) Pensioen: middelloonregeling bij Centraal Beheer APF (Witteveenfranchise); werknemersbijdrage en franchisebedrag niet gevonden. Overgang naar WTP-regeling uiterlijk 1-1-2028 Verhogingen in 2025 (vorige cao) niet gevonden",
  sourceUrl: "https://www.fnv.nl/getmedia/25a13dca-9890-4883-b0b5-b3fdfd89c1d8/274-cnc-grondstoffen-cao-01-05-2026-tm-30-04-2027-v01102026.pdf?ext=.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.07690000000000001,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      'I': [2366.12, 2556.46, 2735.23, 2862.48, 2953.97, 3024.42],
      'II': [2529.12, 2718.41, 2899.28, 3003.39, 3068.59, 3107.5, 3174.8],
      'III': [2712.1, 2875.1, 3034.94, 3194.78, 3257.88, 3320.98, 3386.18, 3453.48, 3513.42],
      'IV': [2914, 3049.66, 3180.06, 3307.31, 3376.71, 3437.71, 3500.8, 3561.8, 3630.15],
      'V': [3129.58, 3243.16, 3354.63, 3466.1, 3535.5, 3608.07, 3681.68, 3745.83, 3819.44],
      'VI': [3270.5, 3407.21, 3541.81, 3661.7, 3745.83, 3832.06, 3919.34, 4005.57, 4091.81, 4172.78],
      'VII': [3485.03, 3630.15, 3771.07, 3905.67, 4005.57, 4105.48, 4205.38, 4304.23, 4407.29, 4505.09],
      'VIII': [3750.03, 3902.52, 4046.59, 4187.5, 4300.02, 4416.75, 4524.02, 4638.64, 4753.27, 4857.38, 4973.05],
      'IX': [4055, 4224.31, 4384.15, 4537.69, 4672.29, 4797.43, 4932.04, 5063.49, 5194.94, 5319.03, 5454.69, 5577.73],
    },
  },
  periods: [
    {
      from: '2026-06-01',
      note: "+2,25% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          'I': [2419.35, 2613.98, 2796.77, 2926.88, 3020.43, 3092.47],
          'II': [2586.02, 2779.57, 2964.52, 3070.97, 3137.63, 3177.42, 3246.24],
          'III': [2773.12, 2939.78, 3103.23, 3266.67, 3331.18, 3395.7, 3462.37, 3531.18, 3592.47],
          'IV': [2979.57, 3118.28, 3251.61, 3381.72, 3452.69, 3515.05, 3579.57, 3641.94, 3711.83],
          'V': [3200, 3316.13, 3430.11, 3544.09, 3615.05, 3689.25, 3764.52, 3830.11, 3905.38],
          'VI': [3344.09, 3483.87, 3621.51, 3744.09, 3830.11, 3918.28, 4007.53, 4095.7, 4183.87, 4266.67],
          'VII': [3563.44, 3711.83, 3855.91, 3993.55, 4095.7, 4197.85, 4300, 4401.08, 4506.45, 4606.45],
          'VIII': [3834.41, 3990.32, 4137.63, 4281.72, 4396.77, 4516.13, 4625.81, 4743.01, 4860.22, 4966.67, 5084.95],
          'IX': [4146.24, 4319.35, 4482.8, 4639.78, 4777.42, 4905.38, 5043.01, 5177.42, 5311.83, 5438.71, 5577.42, 5703.23],
        },
      },
    },
    {
      from: '2026-11-01',
      note: "+0,75% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          'I': [2437.5, 2633.58, 2817.75, 2948.83, 3043.08, 3115.67],
          'II': [2605.42, 2800.42, 2986.75, 3094, 3161.17, 3201.25, 3270.58],
          'III': [2793.92, 2961.83, 3126.5, 3291.17, 3356.17, 3421.17, 3488.33, 3557.67, 3619.42],
          'IV': [3001.92, 3141.67, 3276, 3407.08, 3478.58, 3541.42, 3606.42, 3669.25, 3739.67],
          'V': [3224, 3341, 3455.83, 3570.67, 3642.17, 3716.92, 3792.75, 3858.83, 3934.67],
          'VI': [3369.17, 3510, 3648.67, 3772.17, 3858.83, 3947.67, 4037.58, 4126.42, 4215.25, 4298.67],
          'VII': [3590.17, 3739.67, 3884.83, 4023.5, 4126.42, 4229.33, 4332.25, 4434.08, 4540.25, 4641],
          'VIII': [3863.17, 4020.25, 4168.67, 4313.83, 4429.75, 4550, 4660.5, 4778.58, 4896.67, 5003.92, 5123.08],
          'IX': [4177.33, 4351.75, 4516.42, 4674.58, 4813.25, 4942.17, 5080.83, 5216.25, 5351.67, 5479.5, 5619.25, 5746],
        },
      },
    },
  ],
  vergoedingen: [],
};
