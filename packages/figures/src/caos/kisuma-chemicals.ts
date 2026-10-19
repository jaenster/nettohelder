import type { Cao } from '../types.js';

/**
 * Cao Kisuma Chemicals B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Kisuma Chemicals B.V.
 * https://www.fnv.nl/getmedia/746404bc-3411-4b74-8ba4-1de83e4ee3c4/1283-kisuma-chemicals-cao-1-7-2024-tm-30-6-2026-v02092024.pdf?ext=.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2025-07-01 (month) uit de bron
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoKisumaChemicals2026: Cao = {
  id: 'kisuma-chemicals',
  name: "Cao Kisuma Chemicals B.V.",
  year: 2026,
  effectiveNote: "Cao 2024-07-01 t/m 2026-06-30; loontabel per 2025-07-01. Let op: Cao 1-7-2024 t/m 30-6-2026 (7,0% per 1-7-2024 en 4,0% per 1-7-2025); een opvolgende cao vanaf 1-7-2026 is niet gevonden Salarisschalen per 1-7-2025 met alleen minimum en maximum per groep (groep 1 vervallen); hier als [min, max]. Jaarlijkse verhoging per 1 januari met 1/10 van het schaalbereik tot het maximum Normale arbeidsduur 38 uur per week (dag- en 2-ploegendienst); 5-ploegendienst gemiddeld 33,6 uur Vakantietoeslag 8% van het bruto maandinkomen, uitbetaald na afloop van het vakantietoeslagjaar (mei) Pensioenregeling premievrij voor werknemers gedurende de looptijd van de cao (geen werknemersbijdrage); fiscaal minimale franchise",
  sourceUrl: "https://www.fnv.nl/getmedia/746404bc-3411-4b74-8ba4-1de83e4ee3c4/1283-kisuma-chemicals-cao-1-7-2024-tm-30-6-2026-v02092024.pdf?ext=.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 38,
    schalen: {
      '2': [2491.29, 3272.62],
      '3': [2759.19, 3666.54],
      '4': [3069.45, 4180.12],
      '5': [3425.14, 4749.59],
      '6': [3827.73, 5473.25],
    },
  },
  vergoedingen: [],
};
