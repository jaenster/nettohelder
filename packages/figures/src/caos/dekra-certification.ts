import type { Cao } from '../types.js';

/**
 * Cao DEKRA Certification B.V. en DEKRA Solutions B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao DEKRA Certification B.V. en DEKRA Solutions B.V.
 * https://cao-kijker.awvn.nl/bestanden/3471_01-04-2026%20tot%2001-04-2027_akkoord.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-04-01 (month) uit de bron
 *   - Basistabel 1-1-2026 teruggerekend uit de tabel per 2026-04-01 (gedeeld door +2,6%)
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-04-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoDekraCertification2026: Cao = {
  id: 'dekra-certification',
  name: "Cao DEKRA Certification B.V. en DEKRA Solutions B.V.",
  year: 2026,
  effectiveNote: "Cao 2026-04-01 t/m 2027-03-31; loontabel per 2026-04-01. Let op: Geen vaste treden: per Job level (1-16) aanvangssalaris (68% van ijksalaris), ijksalaris (100%) en maximale uitloop (116%); hier als drie treden opgenomen Verhogingen zijn individueel via een verhogingstabel (beoordeling x positie t.o.v. ijksalaris). Per 1-4-2026 is het ijkpunt X 2,6% (bij 'goed' en 100-116% positie); range 2,35% tot 7,6%. Per 1-4-2025 was X 4,0%. Bij 'onvoldoende' geen verhoging Ijksalarissen per 1-4-2025 met 4,0% en per 1-4-2026 met 2,6% verhoogd Fulltime 40 uur per week met 13 ADV-dagen; salaris en pensioen gebaseerd op gemiddeld 38 uur Succesdeling tot max. 3% van het jaarsalaris, afhankelijk van bedrijfsresultaat Vakantietoeslag 8%, uitbetaald in mei Pensioen bij ABP; werknemerspremie niet in de cao vermeld en niet opgenomen",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/3471_01-04-2026%20tot%2001-04-2027_akkoord.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 38,
    schalen: {
      '1': [1769.85, 2602.73, 3019.16],
      '2': [1870.1, 2750.15, 3190.18],
      '3': [1992.21, 2929.73, 3398.48],
      '4': [2133.83, 3137.99, 3640.07],
      '5': [2306.76, 3392.3, 3935.07],
      '6': [2522.46, 3709.49, 4303.01],
      '7': [2762.41, 4062.36, 4712.34],
      '8': [3027.04, 4451.53, 5163.77],
      '9': [3324.94, 4889.62, 5671.95],
      '10': [3707.44, 5452.12, 6324.45],
      '11': [4180.19, 6147.34, 7130.92],
      '12': [4737.98, 6967.62, 8082.45],
      '13': [5400.79, 7942.34, 9213.11],
      '14': [6202.79, 9121.74, 10581.23],
      '15': [7156.86, 10524.8, 12208.76],
      '16': [8027.3, 11804.84, 13693.63],
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
          '1': [1815.87, 2670.4, 3097.66],
          '2': [1918.72, 2821.65, 3273.12],
          '3': [2044.01, 3005.9, 3486.84],
          '4': [2189.31, 3219.58, 3734.71],
          '5': [2366.74, 3480.5, 4037.38],
          '6': [2588.04, 3805.94, 4414.89],
          '7': [2834.23, 4167.98, 4834.86],
          '8': [3105.74, 4567.27, 5298.03],
          '9': [3411.39, 5016.75, 5819.42],
          '10': [3803.83, 5593.87, 6488.89],
          '11': [4288.87, 6307.17, 7316.32],
          '12': [4861.17, 7148.78, 8292.59],
          '13': [5541.21, 8148.84, 9452.65],
          '14': [6364.06, 9358.91, 10856.34],
          '15': [7342.94, 10798.44, 12526.19],
          '16': [8236.01, 12111.77, 14049.66],
        },
      },
    },
  ],
  vergoedingen: [],
};
