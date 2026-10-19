import type { Cao } from '../types.js';

/**
 * Cao Saturn Petcare B.V. (Hattem) 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Saturn Petcare B.V. (Hattem)
 * https://cao-kijker.awvn.nl/bestanden/0887_01-01-2026%20tot%2001-01-2027_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-01-01 (month) uit de bron
 *
 * Excluded: none stated
 */
export const caoSaturnPetcare2026: Cao = {
  id: 'saturn-petcare',
  name: "Cao Saturn Petcare B.V. (Hattem)",
  year: 2026,
  effectiveNote: "Cao 2026-01-01 t/m 2026-12-31; loontabel per 2026-01-01. Let op: Salarissen per 1-1-2026 inclusief 3,5% verhoging; cao loopt van 1-1-2026 t/m 31-12-2026 Vanaf 2026 jaarlijks een eindejaarsuitkering van € 150 bruto (fulltime) in november voor wie op 1 november in dienst is; hier als eenmalige uitkering 2026 opgenomen Werknemers in functiegroep II trede 1 en III trede 1 die op 1-1-2026 in dienst zijn krijgen per 1-1-2026 een extra trede Pensioen bij HNPF (beschikbare premie): werknemersbijdrage 8,7% van de pensioengrondslag (36,5% van de totale premie van max. 23,7%); franchise € 18.475 per 1-1-2025, waarde 2026 niet in de cao Gemiddelde arbeidsduur 38 uur per week Vakantietoeslag 8% Salaristabel per 1-1-2026 (incl. 3,5%) voor een 38-urige werkweek; de laatste tredes van groep II t/m VI zijn uitlooptredes (alleen bij goed functioneren en positieve beoordeling). De cao kent ook een aparte tabel voor 40 uur",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/0887_01-01-2026%20tot%2001-01-2027_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 38,
    schalen: {
      'II': [2517.12, 2547.14, 2583.36, 2613.38, 2650.64, 2685.83, 2723.09, 2756.21, 2792.43, 2825.55],
      'III': [2601.99, 2645.46, 2685.83, 2731.37, 2773.8, 2812.1, 2866.95, 2906.28, 2941.47, 2987.01, 3033.59, 3079.13],
      'IV': [2626.83, 2686.86, 2743.79, 2797.61, 2866.95, 2920.77, 2981.84, 3042.9, 3097.76, 3161.93, 3225.06, 3287.16, 3352.37],
      'V': [2680.65, 2755.17, 2832.8, 2912.49, 2989.08, 3066.71, 3161.93, 3229.2, 3310.97, 3386.52, 3442.41, 3516.93, 3594.56],
      'VI': [3032.55, 3109.14, 3187.8, 3266.46, 3352.37, 3427.92, 3508.65, 3589.38, 3673.22, 3747.74, 3826.4, 3902.99, 3980.61],
      'VII': [3353.4, 3428.96, 3511.76, 3589.38, 3674.25, 3747.74, 3826.4, 3909.2, 3988.89, 4068.59, 4150.35, 4224.87, 4305.6],
      'VIII': [3674.25, 3772.58, 3874.01, 3975.44, 4075.83, 4175.19, 4278.69, 4379.09, 4480.52, 4585.05, 4685.45, 4785.84, 4886.24],
      'IX': [4178.3, 4297.32, 4413.24, 4531.23, 4652.33, 4768.25, 4884.17, 5004.23, 5123.25, 5237.1, 5355.09, 5477.22, 5590.04],
    },
  },
  vergoedingen: [],
};
