import type { Cao } from '../types.js';

/**
 * CAO Hoger Beroepsonderwijs (HBO) 2026 — loongebouw per 1 januari 2026.
 * Fixed schaal × trede table, maandsalarissen. Vastgelegd in het
 * onderhandelingsresultaat cao-hbo 2026 (27 nov 2025) en de cao-tekst zelf
 * (geldig 1-1-2026 t/m 31-12-2026); +5% algemene loonsverhoging per 1-1-2026
 * is verwerkt.
 *
 * Nieuwe systematiek ("uitgewerkte treden", bijlage 1): schalen 1–18.
 * Het aantal treden verschilt per schaal — schaal 1 heeft 5, schaal 2 zes,
 * schaal 3 acht, schalen 4–9 negen, schalen 10–18 elf — plus vanaf schaal 6
 * één aanlooptrede (hier opgenomen als eerste array-element). De treden gelden
 * verplicht voor wie per 1 juli 2026 nieuw in dienst komt; zittend personeel
 * kan op de oude normpercentage-systematiek blijven.
 *
 * Vakantie-uitkering 8% per maand (art. H-1 lid 4) + structurele
 * eindejaarsuitkering 8,3% in december (art. H-1 lid 5). Pensioen = ABP.
 * Bron: officieel onderhandelingsresultaat Vereniging Hogescholen + FNV cao-tekst.
 */
export const caoHbo2026: Cao = {
  id: 'hbo',
  name: 'Cao HBO',
  year: 2026,
  effectiveNote:
    'Loongebouw per 1-1-2026 (nieuwe systematiek, uitgewerkte treden, bijlage 1 onderhandelingsresultaat cao-hbo 2026). +5% per 1-1-2026 verwerkt; eenmalige uitkering €700 (fulltime, dec 2025/jan 2026) niet als vergoeding opgenomen. Aanlooptrede vanaf schaal 6 als eerste trede opgenomen. Schalen 1–18 volledig.',
  sourceUrl:
    'https://www.vereniginghogescholen.nl/system/knowledge_base/attachments/files/000/001/618/original/Onderhandelingsresultaat_cao-hbo_2026_versie_website.pdf',
  pensioenfondsId: 'abp',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.083,
  salary: {
    kind: 'table',
    hoursPerWeek: 38,
    stepLabel: 'trede',
    unit: 'maand',
    schalen: {
      '1': [2558.32, 2629.74, 2701.15, 2772.57, 2843.99],
      '2': [2588.55, 2675.97, 2763.38, 2850.80, 2938.22, 3025.63, 3113.05],
      '3': [2621.14, 2715.64, 2810.15, 2904.65, 2999.15, 3093.65, 3188.15, 3282.65, 3377.16],
      '4': [2649.52, 2745.64, 2841.76, 2937.88, 3034.00, 3130.12, 3226.24, 3322.36, 3418.49, 3514.61],
      '5': [2697.03, 2799.19, 2901.35, 3003.51, 3105.68, 3207.84, 3310.00, 3412.16, 3514.32, 3616.48],
      '6': [2657.27, 2770.87, 2884.47, 2998.07, 3111.67, 3225.28, 3338.88, 3452.48, 3566.08, 3679.68, 3793.29],
      '7': [2950.65, 3064.08, 3177.50, 3290.93, 3404.36, 3517.79, 3631.22, 3744.65, 3858.08, 3971.50, 4084.93],
      '8': [3353.32, 3477.51, 3601.71, 3725.91, 3850.10, 3974.30, 4098.50, 4222.69, 4346.89, 4471.09, 4595.29],
      '9': [3502.78, 3667.97, 3833.16, 3998.35, 4163.54, 4328.73, 4493.92, 4659.11, 4824.30, 4989.48, 5154.67],
      '10': [3639.22, 3826.54, 4013.86, 4201.19, 4388.51, 4575.83, 4763.15, 4950.47, 5137.80, 5325.12, 5512.44, 5699.76],
      '11': [4427.64, 4632.17, 4836.70, 5041.23, 5245.75, 5450.28, 5654.81, 5859.33, 6063.86, 6268.39, 6472.91, 6677.44],
      '12': [5583.78, 5761.13, 5938.47, 6115.82, 6293.17, 6470.52, 6647.87, 6825.22, 7002.56, 7179.91, 7357.26, 7534.61],
      '13': [6306.04, 6461.91, 6617.78, 6773.65, 6929.52, 7085.39, 7241.26, 7397.13, 7553.00, 7708.86, 7864.73, 8020.60],
      '14': [6592.64, 6783.11, 6973.59, 7164.06, 7354.53, 7545.00, 7735.47, 7925.94, 8116.41, 8306.88, 8497.35, 8687.82],
      '15': [7138.40, 7357.11, 7575.81, 7794.52, 8013.22, 8231.93, 8450.63, 8669.34, 8888.04, 9106.75, 9325.45, 9544.16],
      '16': [7729.36, 7975.66, 8221.96, 8468.25, 8714.55, 8960.84, 9207.14, 9453.43, 9699.73, 9946.03, 10192.32, 10438.62],
      '17': [8364.26, 8646.65, 8929.04, 9211.43, 9493.82, 9776.21, 10058.60, 10340.99, 10623.38, 10905.77, 11188.16, 11470.55],
      '18': [9188.24, 9498.93, 9809.62, 10120.31, 10431.00, 10741.69, 11052.38, 11363.08, 11673.77, 11984.46, 12295.15, 12605.84],
    },
  },
  vergoedingen: [],
};
