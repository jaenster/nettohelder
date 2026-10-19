import type { Cao } from '../types.js';

/**
 * CAO Athora Netherlands 2025-2027 2026. DRAFT from cao-pipeline (confidence: high).
 * Source: Cao Athora Netherlands 2025-2027 (DocuSign-signed), Bijlage 3 Salaristabellen, p.67
 * https://www.cnv.nl/documents/5294/CAO-athora-netherlands-2025-2027.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Schalen 7-10 are modelled as min=max because the official table publishes only one amount (eindsalaris) for these scales; confirm whether they truly have no range start
 *   - defaultRsp 0.9 is an assumption, not from the CAO (CAO defines RSP bands 80%/90%/100%/115%)
 *   - pensioenfondsId set to 'generiek' because the scheme is Pensioenfonds SNS Reaal, which is not in the allowed slug list (nn = Nationale-Nederlanden does not match)
 *   - Effective-date interpretation: 1-jan-2026 baseline uses the 'per 1 juli 2025' table (no separate 1-jan-2026 scale change found)
 *
 * Excluded: 40-uur variant of the salary table (used 36-uur basis); one-off payment EUR 1.800 bruto per 1 januari 2026; collectieve winstuitkering (max 3,5%, ExCo-discretionary); persoonlijke en arbeidsmarkt toeslagen; per 1 januari 2027 salary table (out of 2026 scope)
 */
export const caoAthora2026: Cao = {
  id: 'athora',
  name: "CAO Athora Netherlands 2025-2027",
  year: 2026,
  effectiveNote: "Salary band table effective 1 januari 2026 = the 'per 1 juli 2025' table (36-uur basis), since the +3,25% increase per 1 juli 2025 was already applied and no separate 1-jan-2026 structural change to the scales exists. A +2,6% collectieve verhoging takes effect 1 februari 2026 (see periods, transcribed directly from the official table). Schalen 7-10 publish only one amount (eindsalaris), modelled as min=max; schalen 11-19 have a published start-end range. Amounts are monthly bruto on a 36-uur week. EXCLUDED: the 40-uur variant of the table (use 36-uur), the one-off payment of EUR 1.800 bruto per 1 januari 2026, the collectieve winstuitkering (max 3,5%, ExCo-discretionary, not guaranteed), persoonlijke/arbeidsmarkt toeslagen, jeugd-/aanloopregelingen, and the per 1 januari 2027 table (out of 2026 scope).",
  sourceUrl: "https://www.cnv.nl/dienstverlening/verzekeraars/cao-athora/",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: {
    kind: 'band',
    levelLabel: "Salarisschaal",
    unit: 'maand',
    levels: [
      { id: '7', min: 2251.32, max: 2251.32 },
      { id: '8', min: 2540.07, max: 2540.07 },
      { id: '9', min: 2823.39, max: 2823.39 },
      { id: '10', min: 3164.73, max: 3164.73 },
      { id: '11', min: 2667.9, max: 3557.2 },
      { id: '12', min: 2910.04, max: 3880.05 },
      { id: '13', min: 3278.33, max: 4371.11 },
      { id: '14', min: 3724.1, max: 4965.47 },
      { id: '15', min: 4225.68, max: 5634.24 },
      { id: '16', min: 4953.24, max: 6604.32 },
      { id: '17', min: 5839.41, max: 7785.88 },
      { id: '18', min: 6881.45, max: 9175.26 },
      { id: '19', min: 7673.34, max: 10231.12 },
    ],
    defaultRsp: 0.9,
    hoursPerWeek: 36,
  },
  periods: [
    {
      from: '2026-02-01',
      note: "+2,6% collectieve verhoging per 1 februari 2026 (table 'per 1 februari 2026', 36-uur basis)",
      status: 'confirmed',
      salary: {
        kind: 'band',
        levelLabel: "Salarisschaal",
        unit: 'maand',
        levels: [
          { id: '7', min: 2309.85, max: 2309.85 },
          { id: '8', min: 2606.11, max: 2606.11 },
          { id: '9', min: 2896.8, max: 2896.8 },
          { id: '10', min: 3247.01, max: 3247.01 },
          { id: '11', min: 2737.27, max: 3649.69 },
          { id: '12', min: 2985.7, max: 3980.93 },
          { id: '13', min: 3363.57, max: 4484.76 },
          { id: '14', min: 3820.93, max: 5094.57 },
          { id: '15', min: 4335.55, max: 5780.73 },
          { id: '16', min: 5082.02, max: 6776.03 },
          { id: '17', min: 5991.23, max: 7988.31 },
          { id: '18', min: 7060.37, max: 9413.82 },
          { id: '19', min: 7872.85, max: 10497.13 },
        ],
        defaultRsp: 0.9,
        hoursPerWeek: 36,
      },
    },
  ],
  vergoedingen: [],
};
