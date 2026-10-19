import type { Cao } from '../types.js';

/**
 * Cao Delrin Netherlands B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Delrin Netherlands B.V.
 * https://cao-kijker.awvn.nl/bestanden/3307_01-07-2025%20tot%2001-07-2027_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-01-01 (month) uit de bron
 *   - Latere tabellen berekend uit de cao-verhogingen (2027-01-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoDelrinNetherlands2026: Cao = {
  id: 'delrin-netherlands',
  name: "Cao Delrin Netherlands B.V.",
  year: 2026,
  effectiveNote: "Cao 2025-07-01 t/m 2027-06-30; loontabel per 2026-01-01. Let op: Per 1 januari 2026: prijscompensatie 1,228% plus initieel 1% (samen 2,24% volgens de salaristabel) Per 1 juli 2026: prijscompensatie (CPI oktober 2025 - april 2026), uitkomst niet bekend; niet opgenomen Per 1 januari 2027: prijscompensatie (CPI april 2026 - oktober 2026) plus initieel 1%; alleen de 1% is opgenomen Salaristabel bevat alleen een guide rate (100%) per level, geen treden Gratificatie (13e maand) van 8,33% van de som van de maandsalarissen, uitbetaald met het novembersalaris Fulltime dagdienst 38,7 uur per week; ploegendiensten 38,7 / 36,1 / 34,3 uur Teambeloning 0% tot max. 8% vanaf 2026 (garantie van 2% vervalt); niet opgenomen Pensioenkosten worden gezamenlijk door werkgever en werknemer gedragen; premie niet in de cao vermeld",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/3307_01-07-2025%20tot%2001-07-2027_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 38.7,
    schalen: {
      'CAO-S': [2830.98],
      'CAO-A': [3872.03],
      'CAO-A1': [4137.75],
      'CAO-A2': [4407.57],
      'CAO-B1': [4871.89],
      'CAO-B2': [5308.97],
      'CAO-C1': [5779.93],
      'CAO-C2': [6247.56],
    },
  },
  periods: [
    {
      from: '2027-01-01',
      note: "+1% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 38.7,
        schalen: {
          'CAO-S': [2859.29],
          'CAO-A': [3910.75],
          'CAO-A1': [4179.13],
          'CAO-A2': [4451.65],
          'CAO-B1': [4920.61],
          'CAO-B2': [5362.06],
          'CAO-C1': [5837.73],
          'CAO-C2': [6310.04],
        },
      },
    },
  ],
  vergoedingen: [],
};
