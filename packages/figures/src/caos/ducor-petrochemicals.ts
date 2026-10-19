import type { Cao } from '../types.js';

/**
 * Cao Ducor Petrochemicals B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Ducor Petrochemicals B.V.
 * https://cao-kijker.awvn.nl/bestanden/1293_01-03-2026%20tot%2001-03-2027_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2025-03-01 (month) uit de bron
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoDucorPetrochemicals2026: Cao = {
  id: 'ducor-petrochemicals',
  name: "Cao Ducor Petrochemicals B.V.",
  year: 2026,
  effectiveNote: "Cao 2026-03-01 t/m 2027-02-28; loontabel per 2025-03-01. Let op: Cao 1-3-2026 t/m 28-2-2027 (FNV); de cao-tekst 2026-2027 noemt geen nieuwe loonsverhoging en bevat nog de functieschalen per 1-3-2025 (inclusief 3,2% verhoging uit het eindbod van 20-3-2025). Een eventuele verhoging in 2026 kon niet worden gevonden Maandinkomen wordt 14 maal per jaar betaald: een extra maandinkomen in mei als vakantiegeld en een extra maandinkomen in november als eindejaarsuitkering (hier weergegeven als 8,33% elk); minimumvakantietoeslag volgens de cao € 2.820,75 Salarisschalen I t/m X per maand met treden 0 t/m max; na 3, 6 en 9 jaar op het maximum volgt telkens 1% extra (uitloopbedragen niet opgenomen) Jaarlijks per 1 januari één trede hoger tot het maximum van de schaal Ploegentoeslag volcontinudienst 28,5% van het schaalsalaris Eigen pensioenregeling; werknemersbijdrage staat niet in de cao Bovenwettelijke bijdrage zorgverzekering € 10 bruto per maand",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/1293_01-03-2026%20tot%2001-03-2027_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.0833,
  eindejaarsuitkeringPct: 0.0833,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      'I': [2911.01, 2955.13, 2999.3, 3043.42, 3088.41, 3134.16, 3179.93],
      'II': [2959.22, 3004.99, 3051.59, 3095.74, 3143.13, 3188.92, 3237.98, 3288.67],
      'III': [3038.5, 3085.11, 3134.16, 3181.58, 3233.89, 3290.28, 3337.7, 3397.36],
      'IV': [3103.11, 3152.15, 3204.48, 3258.42, 3313.15, 3372.02, 3430.07, 3500.39],
      'V': [3224.89, 3280.51, 3335.25, 3397.36, 3460.32, 3529.81, 3596.86, 3664.68],
      'VI': [3352.43, 3416.19, 3479.93, 3548.62, 3612.39, 3681.87, 3752.16, 3824.94, 3896.03],
      'VII': [3539.63, 3604.23, 3668.77, 3739.9, 3811.01, 3882.16, 3952.44, 4026.82, 4104.51, 4185.41],
      'VIII': [3788.15, 3855.17, 3929.56, 4003.94, 4079.94, 4158.44, 4231.18, 4318.67, 4395.52, 4474.79],
      'IX': [4086.51, 4172.32, 4258.99, 4344.81, 4431.46, 4516.49, 4603.95, 4689.78, 4775.61, 4863.11],
      'X': [4582.7, 4676.74, 4769.09, 4861.47, 4950.58, 5043.77, 5136.13, 5227.69, 5319.23, 5411.61],
    },
  },
  vergoedingen: [],
};
