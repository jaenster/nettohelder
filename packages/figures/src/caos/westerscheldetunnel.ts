import type { Cao } from '../types.js';

/**
 * Cao N.V. Westerscheldetunnel 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao N.V. Westerscheldetunnel
 * https://www.fnv.nl/getmedia/e6da0682-24ba-4fc9-a0f6-b497ba7c26c5/1496-westerscheldetunnel-cao-01-10-2025-tm-30-06-2028-v22012026.pdf?ext=.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2025-10-01 (month) uit de bron
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoWesterscheldetunnel2026: Cao = {
  id: 'westerscheldetunnel',
  name: "Cao N.V. Westerscheldetunnel",
  year: 2026,
  effectiveNote: "Cao 2025-10-01 t/m 2028-06-30; loontabel per 2025-10-01. Let op: Cao loopt van 1-10-2025 t/m 30-6-2028 (de cao 2022-2024 was ongewijzigd verlengd t/m 30-9-2025) Verhoging van 1,78% per 1-10-2025 alleen afgeleid uit de kop van de salaristabel in bijlage 1; verdere structurele loonsverhogingen staan niet in de cao-tekst Per 1-1-2026 vervangt een netto-uitkering de resultaatafhankelijke beloning (RAB): € 1.650 per jaar in 2026, € 1.700 in 2027 en € 1.750 in 2028 (netto, gebruteerd in december; 50% bij minder dan gemiddeld 20 uur per week); niet opgenomen omdat het netto is Pensioen bij ABP; werknemerspremie staat niet in de cao en is niet opgenomen Salarisschalen per 1 oktober 2025 (bijlage 1, gescande tabel, afgelezen; in hele euro’s). Schaal 1 begint bij trede 3 (treden 0-2 vervallen i.v.m. wettelijk minimumloon).",
  sourceUrl: "https://www.fnv.nl/getmedia/e6da0682-24ba-4fc9-a0f6-b497ba7c26c5/1496-westerscheldetunnel-cao-01-10-2025-tm-30-06-2028-v22012026.pdf?ext=.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      '1': [2689, 2780, 2872, 2968, 3065, 3160, 3256, 3350],
      '2': [2689, 2780, 2872, 2968, 3065, 3160, 3256, 3350, 3449, 3554, 3651],
      '3': [2968, 3065, 3160, 3256, 3350, 3449, 3554, 3651, 3759, 3874, 3978],
      '4': [3256, 3350, 3449, 3554, 3651, 3759, 3874, 3978, 4101, 4224, 4350],
      '5': [3554, 3651, 3759, 3874, 3978, 4101, 4224, 4350, 4496, 4638, 4781],
      '6': [3874, 3978, 4101, 4224, 4350, 4496, 4638, 4781, 4938, 5094, 5253],
      '7': [4224, 4350, 4496, 4638, 4781, 4938, 5094, 5253, 5438, 5620, 5802],
      '8': [4638, 4781, 4938, 5094, 5253, 5438, 5620, 5802, 6009, 6221, 6430],
      '9': [5094, 5253, 5438, 5620, 5802, 6009, 6221, 6430, 6660, 6893, 7128],
      '10': [5620, 5802, 6009, 6221, 6430, 6660, 6893, 7128, 7389, 7652, 7902],
      '11': [6221, 6430, 6660, 6893, 7128, 7389, 7652, 7902, 8199, 8490, 8779],
      '12': [6893, 7128, 7389, 7652, 7902, 8199, 8490, 8779, 9105, 9430, 9763],
      '13': [7652, 7902, 8199, 8490, 8779, 9105, 9430, 9763, 10114, 10472, 10832],
    },
  },
  vergoedingen: [],
};
