import type { Cao } from '../types.js';

/**
 * HISWA CAO 2025-2026 2026. DRAFT from cao-pipeline (confidence: high).
 * Source: Salaristabellen HISWA cao per 1 oktober 2025, 1 januari 2026 en 1 oktober 2026
 * https://cnvstorageprd.blob.core.windows.net/media/documents/Salaristabellen_HISWA_cao_per_1_januari_2026_en_1_oktober_2026.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Pension fund: sources mention Bedrijfstak Pensioenfonds Vlakglas but this is for float glass industry - verify actual HISWA pension provider
 *   - Eindejaarsuitkering: no 13th month identified in official salary tables; confirm in full CAO text
 *   - Maximum salaries functiegroep 7 & 8: both show 4906.74 in Oct 2026 - verify not transcription errors
 *   - Functiegroep 4 age 21 Oct 2026: shows 2422.70 vs 2422.25 - verify legal minimum adjustment
 *   - Youth percentages: verify these reference statutory minimum wage, not CAO percentages
 *
 * Excluded: Youth/age-based percentages (15-20 years) modeled as statutory minimum thresholds only; Pension fund specific name (source contested); Toeslagen, gratificaties, one-off payments; Working conditions, overtime, leave policies detail; 80-90-100 reduced hours scheme; Mantelverof details
 */
export const caoHiswa2026: Cao = {
  id: 'hiswa',
  name: "CAO HISWA",
  year: 2026,
  effectiveNote: "Effective 1 January 2026 with +2% increase. Basis: 38 hours per week full-time employment. Youth (under 21) paid as percentages of statutory minimum wage. Excluded: age-based percentage rows, toeslagen, pension details, working conditions.",
  sourceUrl: "https://cnvstorageprd.blob.core.windows.net/media/documents/Salaristabellen_HISWA_cao_per_1_januari_2026_en_1_oktober_2026.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'band',
    levelLabel: "Functiegroep",
    unit: 'maand',
    levels: [
      { id: '1', min: 2422.25, max: 2779.68 },
      { id: '2', min: 2422.25, max: 2900.53 },
      { id: '3', min: 2422.25, max: 3081.82 },
      { id: '4', min: 2422.25, max: 3263.11 },
      { id: '5', min: 2516.35, max: 3444.39 },
      { id: '6', min: 2658.82, max: 3686.1 },
      { id: '7', min: 2803.85, max: 4834.23 },
      { id: '8', min: 2960.97, max: 4834.23 },
    ],
    defaultRsp: 0.85,
    hoursPerWeek: 38,
  },
  periods: [
    {
      from: '2026-10-01',
      note: "+1.5% collectieve verhoging",
      status: 'confirmed',
      salary: {
        kind: 'band',
        levelLabel: "Functiegroep",
        unit: 'maand',
        levels: [
          { id: '1', min: 2422.25, max: 2821.38 },
          { id: '2', min: 2422.25, max: 2944.04 },
          { id: '3', min: 2422.25, max: 3128.05 },
          { id: '4', min: 2422.7, max: 3312.06 },
          { id: '5', min: 2554.1, max: 3496.05 },
          { id: '6', min: 2698.7, max: 3741.39 },
          { id: '7', min: 2845.91, max: 4906.74 },
          { id: '8', min: 3005.39, max: 4906.74 },
        ],
        defaultRsp: 0.85,
        hoursPerWeek: 38,
      },
    },
  ],
  vergoedingen: [],
};
