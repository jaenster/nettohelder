import type { Cao } from '../types.js';

/**
 * Cao voor de Bereide Verf- en Drukinktindustrie 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao voor de Bereide Verf- en Drukinktindustrie
 * https://www.cnv.nl/documents/5784/CAO_Verf-en-drukinktindustrie_2025-2026_yheOrk6.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-01-01 (month) uit de bron
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoVerfDrukinkt2026: Cao = {
  id: 'verf-drukinkt',
  name: "Cao voor de Bereide Verf- en Drukinktindustrie",
  year: 2026,
  effectiveNote: "Cao 2025-11-01 t/m 2026-10-31; loontabel per 2026-01-01. Let op: Partijen: VVVF, FNV en CNV; herzien eindbod met nipte meerderheid aanvaard (december 2025) Salarisschalen per 1-11-2025 (incl. 3,1%); per 1-1-2026 is aan elke schaal één extra trede toegevoegd (in de tabel opgenomen). Volgens CNV levert dat 1% tot 1,65% extra loonstijging op, afhankelijk van de schaal; geen algemene verhoging Groep I heeft geen bedragen (onder het wettelijk minimumloon); bij een trede onder het WML geldt de eerstvolgende hogere trede Arbeidsduur 40 uur per week minus 5% op jaarbasis (11,5 ADV-dagen) Vakantietoeslag 8% met minimum € 2.662,09 voor vakvolwassen voltijders; extra uitkering 8% van het jaarinkomen Verhoging 2,25% per 1-1-2025 komt uit de vorige cao Pensioen bij PGB: premie maximaal 29%; werknemer betaalt 1,03% garantiepremie plus 46% van de overige premie. Premiepercentage 2026 niet gevonden Cao loopt af op 31-10-2026; onderhandelingen over een nieuwe cao gestart (september 2026), resultaat nog niet bekend",
  sourceUrl: "https://www.cnv.nl/documents/5784/CAO_Verf-en-drukinktindustrie_2025-2026_yheOrk6.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.08,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      'II': [2570.48, 2595.73, 2628.71, 2653.35, 2680.98],
      'III': [2568.36, 2597.13, 2631.53, 2665.2, 2700.3, 2736.06, 2771.18, 2801.98, 2836.12],
      'IV': [2558.54, 2588.74, 2620.28, 2657.51, 2698.19, 2733.97, 2773.95, 2816.77, 2854.67, 2892.56, 2929.76, 2966.88, 3004.7],
      'V': [2698.19, 2748.7, 2800.62, 2856.78, 2912.21, 2966.24, 3020.25, 3075.71, 3126.92, 3182.36, 3241.31, 3295.62, 3349.94],
      'VI': [2884.13, 2941.68, 2995.72, 3053.96, 3114.33, 3173.23, 3229.37, 3291.14, 3347.25, 3406.23, 3465.15, 3523.25, 3581.36],
      'VII': [3094.65, 3162.72, 3223.77, 3287.63, 3354.29, 3415.31, 3479.17, 3542.33, 3609.71, 3672.87, 3735.33, 3802.69, 3867.05, 3931.42],
    },
  },
  vergoedingen: [],
};
