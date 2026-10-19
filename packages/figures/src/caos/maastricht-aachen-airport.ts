import type { Cao } from '../types.js';

/**
 * Cao Maastricht Aachen Airport B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Maastricht Aachen Airport B.V.
 * https://cao-kijker.awvn.nl/bestanden/1405_01-01-2025%20tot%2001-01-2028_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-01-01 (month) uit de bron
 *   - Latere tabellen berekend uit de cao-verhogingen (2027-01-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoMaastrichtAachenAirport2026: Cao = {
  id: 'maastricht-aachen-airport',
  name: "Cao Maastricht Aachen Airport B.V.",
  year: 2026,
  effectiveNote: "Cao 2025-01-01 t/m 2027-12-31; loontabel per 2026-01-01. Let op: Dagdienst gemiddeld 40 uur per week (met 14 ATV-dagen); ploegendienst gemiddeld 38 of 36 uur Eindejaarsuitkering: voor iedereen hetzelfde bruto bedrag, gebaseerd op 1% van de totale loonsom (incl. vakantietoeslag) gedeeld door het aantal medewerkers; niet als percentage uit te drukken Resultaatafhankelijke uitkering: 20% van de overprestatie op het begrote bedrijfsresultaat, max. € 500 bruto per persoon, uitbetaald in januari Nominale bedragen en toeslagen stijgen jaarlijks met 2,5% Pensioen bij ABP; werknemerspremie niet in de cao vermeld en niet opgenomen Cao afgesloten met FNV Salaristabel per 1-1-2026 (bijlage 1, 40 uur met 14 ATV-dagen, per maand, treden = looptijd in dienstjaren 0-13) overgenomen van de tabel-afbeelding in de cao-pdf; er is ook een aparte 36-uurstabel. Extra normen, gegarandeerd en persoonlijk maximum niet opgenomen. Groep A heeft geen bedragen in de tabel; groep C is niet opgenomen omdat de tabel daar een dalende trede bevat (trede 4 € 2.639,16, trede 5 € 2.626,62), vermoedelijk een fout in de bron.",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/1405_01-01-2025%20tot%2001-01-2028_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      'B': [2499.75, 2540.25, 2591.57, 2641.81, 2693.65, 2749.4, 2805.27],
      'D': [2606.95, 2660.42, 2710.9, 2767.4, 2819.81, 2878.25, 2936.69, 2996.44, 3054.89, 3115.99, 3177.09, 3239.52],
      'E': [2813.14, 2871.59, 2930.03, 2988.47, 3049.57, 3106.7, 3170.45, 3230.21, 3299.29, 3364.37, 3428.12, 3501.16, 3568.92],
      'F': [3068.18, 3126.62, 3193.03, 3256.78, 3319.22, 3386.94, 3456, 3523.76, 3595.47, 3665.86, 3736.28, 3813.31, 3891.66],
      'G': [3373.66, 3442.73, 3510.48, 3579.55, 3653.93, 3724.3, 3800.03, 3874.41, 3954.1, 4033.81, 4110.82, 4194.49, 4280.83, 4365.84],
      'H': [4471.42, 4597.08, 4720.1, 4844.47, 4970.14, 5091.86, 5217.53, 5341.87, 5464.91, 5590.59],
      'I': [5365.45, 5515.98, 5663.88, 5814.43, 5962.33, 6111.55, 6260.78, 6409.98, 6557.91, 6708.44],
      'J': [6260.78, 6434.86, 6607.64, 6781.74, 6957.15, 7128.6, 7304.01, 7478.1, 7652.21, 7824.98],
    },
  },
  periods: [
    {
      from: '2027-01-01',
      note: "+2,5% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          'B': [2562.24, 2603.76, 2656.36, 2707.86, 2760.99, 2818.14, 2875.4],
          'D': [2672.12, 2726.93, 2778.67, 2836.59, 2890.31, 2950.21, 3010.11, 3071.35, 3131.26, 3193.89, 3256.52, 3320.51],
          'E': [2883.47, 2943.38, 3003.28, 3063.18, 3125.81, 3184.37, 3249.71, 3310.97, 3381.77, 3448.48, 3513.82, 3588.69, 3658.14],
          'F': [3144.88, 3204.79, 3272.86, 3338.2, 3402.2, 3471.61, 3542.4, 3611.85, 3685.36, 3757.51, 3829.69, 3908.64, 3988.95],
          'G': [3458, 3528.8, 3598.24, 3669.04, 3745.28, 3817.41, 3895.03, 3971.27, 4052.95, 4134.66, 4213.59, 4299.35, 4387.85, 4474.99],
          'H': [4583.21, 4712.01, 4838.1, 4965.58, 5094.39, 5219.16, 5347.97, 5475.42, 5601.53, 5730.35],
          'I': [5499.59, 5653.88, 5805.48, 5959.79, 6111.39, 6264.34, 6417.3, 6570.23, 6721.86, 6876.15],
          'J': [6417.3, 6595.73, 6772.83, 6951.28, 7131.08, 7306.82, 7486.61, 7665.05, 7843.52, 8020.6],
        },
      },
    },
  ],
  vergoedingen: [],
};
