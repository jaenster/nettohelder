import type { Cao } from '../types.js';

/**
 * Cao Freudenberg Performance Materials B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Freudenberg Performance Materials B.V.
 * https://www.cnv.nl/documents/5575/Cao_Freudenberg_Performance_Materials_2025-2026_IghZXJI.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-01-01 (month) uit de bron
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoFreudenbergPerformanceMaterials2026: Cao = {
  id: 'freudenberg-performance-materials',
  name: "Cao Freudenberg Performance Materials B.V.",
  year: 2026,
  effectiveNote: "Cao 2025-04-01 t/m 2026-08-31; loontabel per 2026-01-01. Let op: Cao 1 april 2025 t/m 31 augustus 2026 op basis van het onderhandelingsresultaat van 28 maart 2025; een nieuwe cao vanaf 1 september 2026 is niet gevonden Per 1 juni 2025 worden lonen en loonschalen verhoogd met € 300 bruto (in het akkoord niet expliciet 'per maand' genoemd, hier als maandbedrag opgenomen) Eindejaarsuitkering van 5% van het vaste jaarinkomen is structureel vastgelegd, uitbetaald in december Vakantietoeslag 8% met een minimum (per 1-4-2024 € 229 per maandsalaris); actueel minimum niet bekend Arbeidsduur dagdienst gemiddeld 40 uur per week; 4-ploegendienst 36 uur, 5-ploegendienst 33,6 uur Pensioen via bpf MITT; werknemersbijdrage was 4,05% (cao 2022-2025); actuele premie en franchise niet gevonden, daarom niet opgenomen Verhoging € 300 per 1-6-2025; de bron zegt niet of dit per maand is, daarom niet in de berekening Salarisschalen 31 en 32 vervallen Schaal = maandsalarissen cao I per 1-1-2026 (bijlage C): alleen minimum en maximum per salarisgroep 33-43 (6 tot 8 periodieken, bedragen per periodiek niet in de tabel), opgenomen als twee treden. Cao II (hoger personeel, groepen 54-61) kent alleen jaarsalarissen; niet opgenomen",
  sourceUrl: "https://www.cnv.nl/documents/5575/Cao_Freudenberg_Performance_Materials_2025-2026_IghZXJI.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.05,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      '33': [3033, 3400],
      '34': [3105, 3487],
      '35': [3153, 3589],
      '36': [3194, 3712],
      '37': [3330, 3877],
      '38': [3518, 4064],
      '39': [3740, 4286],
      '40': [3996, 4578],
      '41': [4252, 4870],
      '42': [4407, 5176],
      '43': [4670, 5481],
    },
  },
  vergoedingen: [],
};
