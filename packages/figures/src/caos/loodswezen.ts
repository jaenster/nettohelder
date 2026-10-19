import type { Cao } from '../types.js';

/**
 * Cao Nederlands Loodswezen B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Nederlands Loodswezen B.V.
 * https://www.cnv.nl/vervoer/havens/cao-loodswezen/nieuws/onderhandelaarsakkoord-bereikt-cao-loodswezen-2026-05-21/
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2025-01-01 (month) uit de bron
 *   - Basistabel 1-1-2026: tabel per 2025-01-01 verhoogd met +4% per 2026-01-01
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoLoodswezen2026: Cao = {
  id: 'loodswezen',
  name: "Cao Nederlands Loodswezen B.V.",
  year: 2026,
  effectiveNote: "Cao 2026-01-01 t/m 2028-12-31; loontabel per 2025-01-01. Let op: Onderhandelaarsakkoord van 21 mei 2026 (CNV, FNV, VPL) voor 1-1-2026 t/m 31-12-2028; ledenstemming liep tot 1 juni 2026, uitslag niet gevonden Per 1-1-2026 structureel +4% (met terugwerkende kracht); in 2027 en 2028 indexatie volgens de loodsensystematiek (indexatie loodsenuurtarieven, Besluit markttoezicht registerloodsen art. 3.1), percentage nog niet bekend Cao 2025: salarissen per 1-1-2025 +3,5% Dertiende maand gelijk aan het salaris op 1 december (hier 8,33%); vakantie-uitkering 8% van het genoten loon. Medewerkers kunnen kiezen voor maandelijkse uitbetaling Arbeidsduur gemiddeld 36 uur per week (cao 2025) Salaristabel per 1-1-2025 overgenomen van de tabel-afbeelding in bijlage 1 van de cao Loodswezen 2025 (https://www.cnv.nl/documents/5581/Cao_Loodswezen_2025.pdf) (per maand, hele euro's); treden = MN, periodieken en als laatste trede het maximum (MX). Nieuwe tabel per 1-1-2026 niet gevonden. Pensioenpremie niet gevonden",
  sourceUrl: "https://www.cnv.nl/vervoer/havens/cao-loodswezen/nieuws/onderhandelaarsakkoord-bereikt-cao-loodswezen-2026-05-21/",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 36,
    schalen: {
      '1': [2724.8, 2787.2, 2852.72, 2917.2, 2983.76, 3054.48, 3142.88],
      '2': [2786.16, 2851.68, 2916.16, 2982.72, 3052.4, 3124.16, 3196.96, 3290.56],
      '3': [2872.48, 2938, 3008.72, 3077.36, 3147.04, 3219.84, 3295.76, 3371.68, 3473.6],
      '4': [3031.6, 3101.28, 3175.12, 3250, 3322.8, 3402.88, 3480.88, 3560.96, 3667.04],
      '5': [3154.32, 3228.16, 3303.04, 3382.08, 3459.04, 3541.2, 3623.36, 3707.6, 3796, 3907.28],
      '6': [3284.32, 3360.24, 3438.24, 3519.36, 3601.52, 3686.8, 3770, 3860.48, 3952, 4042.48, 4167.28],
      '7': [3447.6, 3526.64, 3610.88, 3695.12, 3782.48, 3872.96, 3961.36, 4056, 4149.6, 4249.44, 4348.24, 4479.28],
      '8': [3653.52, 3737.76, 3826.16, 3914.56, 4008.16, 4102.8, 4197.44, 4297.28, 4401.28, 4505.28, 4611.36, 4721.6, 4862],
      '9': [3995.68, 4088.24, 4186, 4284.8, 4385.68, 4487.6, 4595.76, 4703.92, 4815.2, 4929.6, 5049.2, 5171.92, 5325.84],
      '10': [4305.6, 4411.68, 4512.56, 4619.68, 4730.96, 4844.32, 4958.72, 5074.16, 5196.88, 5319.6, 5448.56, 5580.64, 5713.76, 5886.4],
      '11': [4685.2, 4795.44, 4909.84, 5027.36, 5148, 5270.72, 5395.52, 5524.48, 5655.52, 5790.72, 5932.16, 6074.64, 6221.28, 6370, 6566.56],
      '12': [5262.4, 5389.28, 5518.24, 5649.28, 5785.52, 5924.88, 6068.4, 6214, 6362.72, 6514.56, 6673.68, 6833.84, 6999.2, 7168.72, 7390.24],
      '13': [5828.16, 5968.56, 6110, 6257.68, 6409.52, 6564.48, 6722.56, 6885.84, 7050.16, 7222.8, 7396.48, 7575.36, 7761.52, 7947.68, 8141.12, 8390.72],
    },
  },
  vergoedingen: [],
};
