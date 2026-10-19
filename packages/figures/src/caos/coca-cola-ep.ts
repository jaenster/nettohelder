import type { Cao } from '../types.js';

/**
 * Cao Coca-Cola Europacific Partners Nederland B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Coca-Cola Europacific Partners Nederland B.V.
 * https://www.fnv.nl/getmedia/8b8608f9-8ad1-413c-a9e1-c77e9a118615/169-coca-cola-europacific-partners-nederland-cao-01-10-2025-tm-31-12-2026-v08072026.pdf?ext=.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-04-01 (month) uit de bron
 *   - Basistabel 1-1-2026 teruggerekend uit de tabel per 2026-04-01 (gedeeld door +3%)
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-04-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoCocaColaEp2026: Cao = {
  id: 'coca-cola-ep',
  name: "Cao Coca-Cola Europacific Partners Nederland B.V.",
  year: 2026,
  effectiveNote: "Cao 2025-10-01 t/m 2026-12-31; loontabel per 2026-04-01. Let op: Cao 1-10-2025 t/m 31-12-2026 (eindbod van 26 maart 2026, aanvaard): salarissen en salarisschalen +3% per 1-4-2026 Salarisschalen per 1-4-2026 geven per schaal minimum, normsalaris en maximum (geen treden); uitgroei boven het normsalaris alleen bij 'Delivering Exceptionally' Jaarlijkse individuele verhoging per 1 april volgens beoordelingsmatrix (0% tot 5%) Bonusuitkering in februari: 3% gegarandeerd van de som van de maandinkomens, oplopend tot 6% afhankelijk van het operating profit (hier 3% als eindejaarsuitkering opgenomen) Pensioen: beschikbare premie 17% van de pensioengrondslag, waarvan 2% verplichte eigen bijdrage werknemer; franchise is de wettelijke minimale franchise 2026 (bedrag niet in de cao genoemd) Verhoging over 2025 (cao 2025) niet gevonden; verhoogde pensioeninleg per 2025 is volgens partijen in 2026 gelijk aan gemiddeld 2,25% salarisverhoging Normale arbeidsduur dagdienst 40 uur per week; ploegendiensten 36 of 33,6 uur",
  sourceUrl: "https://www.fnv.nl/getmedia/8b8608f9-8ad1-413c-a9e1-c77e9a118615/169-coca-cola-europacific-partners-nederland-cao-01-10-2025-tm-31-12-2026-v08072026.pdf?ext=.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.03,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      'I': [2917.5, 3054.2, 3190.9],
      'II': [2994.28, 3211.11, 3427.93],
      'III': [3076.17, 3382.4, 3688.62],
      'IV': [3194.11, 3604.68, 4015.24],
      'V': [3450.39, 3897.56, 4344.75],
      'VI': [3653.25, 4241.45, 4829.64],
      'VII': [3980.23, 4756.62, 5533],
      'VIII': [4370.37, 5382.93, 6395.49],
    },
  },
  periods: [
    {
      from: '2026-04-01',
      note: "+3% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          'I': [3005.02, 3145.83, 3286.63],
          'II': [3084.11, 3307.44, 3530.77],
          'III': [3168.45, 3483.87, 3799.28],
          'IV': [3289.93, 3712.82, 4135.7],
          'V': [3553.9, 4014.49, 4475.09],
          'VI': [3762.85, 4368.69, 4974.53],
          'VII': [4099.64, 4899.32, 5698.99],
          'VIII': [4501.48, 5544.42, 6587.35],
        },
      },
    },
  ],
  vergoedingen: [],
};
