import type { Cao } from '../types.js';

/**
 * Cao Multimodaal Vervoer 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Multimodaal Vervoer
 * https://www.fnv.nl/getmedia/edfe588d-655f-4bd7-912f-19067391fb5f/1440-multimodaal-vervoer-cao-010126-311226-v180926.pdf?ext=.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-01-01 (month) uit de bron
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoMultimodaalVervoer2026: Cao = {
  id: 'multimodaal-vervoer',
  name: "Cao Multimodaal Vervoer",
  year: 2026,
  effectiveNote: "Cao 2026-01-01 t/m 2026-12-31; loontabel per 2026-01-01. Let op: Loonschalen per 1-1-2026 (bijlage 14), maandbedragen bij 36 uur per week (uurloon = functieloon / 156); treden = dienstjaren Hay-werknemers hebben eigen schalen op basis van 40 uur per week; niet opgenomen Minimum vakantiebijslag per 1-1-2026: € 208,72 per maand (23 jaar en ouder) Eindejaarsuitkering 5,75% van 12 x functieloon Pensioen bij Spoorwegpensioenfonds (SPF), premie 1/3 werknemer en 2/3 werkgever; premiepercentage en franchise niet gevonden Verhogingen 2025 (2% per 1-1 en 1-7-2025) uit de vorige cao 2023-2025 volgens CNV Loonsverhoging 2027 nog niet bekend",
  sourceUrl: "https://www.fnv.nl/getmedia/edfe588d-655f-4bd7-912f-19067391fb5f/1440-multimodaal-vervoer-cao-010126-311226-v180926.pdf?ext=.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0575,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 36,
    schalen: {
      '1': [2660.5],
      '2': [2660.5, 2732.33, 2804.51, 2887.82, 2984.06, 3075.38, 3157.93, 3250.93, 3339.09],
      '3': [2660.5, 2678.64, 2804.51, 2887.82, 3075.38, 3157.93, 3250.93, 3339.09, 3425.69, 3508.21],
      '4': [2660.5, 2732.33, 2887.82, 2984.06, 3157.93, 3250.93, 3339.09, 3425.69, 3508.21, 3593.93, 3682.94],
      '5': [2660.5, 2732.33, 2887.82, 3075.38, 3250.93, 3339.09, 3425.69, 3508.21, 3593.93, 3682.94, 3772.69, 3856.88],
      '6': [2887.82, 3075.38, 3250.93, 3339.09, 3425.69, 3508.21, 3682.94, 3772.69, 3856.88, 3949.04, 4042.86],
      '7': [3157.93, 3250.93, 3425.69, 3593.93, 3772.69, 3949.04, 4142.22, 4251.21, 4347.37, 4434.75, 4530.92],
      '8': [3593.93, 3772.69, 3949.04, 4142.22, 4347.37, 4530.92, 4627.12, 4719.3, 4802.62, 4889.22, 5065.56],
      '9': [4042.86, 4142.22, 4347.37, 4530.92, 4719.3, 4889.22, 5065.56, 5255.48, 5433.42, 5592.94, 5757.23],
      '10': [4530.92, 4719.3, 4889.22, 5065.56, 5255.48, 5433.42, 5592.94, 5757.23, 5939.95, 6125.89, 6302.26],
      '11': [5255.48, 5433.42, 5592.94, 5757.23, 5939.95, 6125.89, 6302.26, 6479.43, 6655.73, 6824.82, 7000.4],
      '12': [5939.95, 6125.89, 6302.26, 6479.43, 6655.73, 6824.82, 7000.4, 7176.7, 7346.64, 7522.18, 7743.37],
      '13': [6479.43, 6655.73, 6824.82, 7000.4, 7176.7, 7346.64, 7522.18, 7743.37, 7955.74, 8176.17, 8394.98],
      '14': [7346.64, 7522.18, 7743.37, 7955.74, 8176.17, 8394.98, 8596.99, 8818.21, 9052.22, 9295.09, 9541.16],
      '15': [7955.74, 8176.17, 8394.98, 8596.99, 8818.21, 9052.22, 9295.09, 9541.16, 9784.8, 10076.52, 10361.86],
      '16': [8596.99, 8818.21, 9052.22, 9295.09, 9541.16, 9784.8, 10076.52, 10361.86, 10649.64, 10937.41, 11225.16],
      '17': [9295.09, 9541.16, 9784.8, 10076.52, 10361.86, 10649.64, 10937.41, 11225.16, 11513.72, 11862.29, 12207.76],
      '18': [10076.52, 10361.86, 10649.64, 10937.41, 11225.16, 11513.72, 11862.29, 12207.76, 12554.84, 13111.07, 13663.31],
      'Rijdend personeel': [2695.48, 2750.79, 2803.67, 2876.6, 3056.11, 3147.5, 3230.05, 3323.04, 3410.41, 3503.4, 3597.22, 3685.35, 3776.68, 3823.15, 3869.68, 3916.12],
      'Chauffeur kleine bus (< 8 pers.)': [2660.5, 2841.98],
    },
  },
  vergoedingen: [],
};
