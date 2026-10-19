import type { Cao } from '../types.js';

/**
 * CAO Dierenartspraktijken (Veterinaire sector) 2026. DRAFT from cao-pipeline (confidence: high).
 * Source: CAO Veterinaire sector 1 januari 2024 t/m 31 december 2026
 * https://www.fnv.nl/getmedia/91b6efac-c9d8-4b49-a441-bf750bd5192b/1185-veterinaire-sector-cao-1-1-2024-tm-31-12-2026-vbest03032024.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Vakantiegeld is exactly 8% - confirmed from Article 11, Lid 1
 *   - Eindejaaruitkering - no 13th month bonus found in CAO text, appears to be 0
 *   - PFZW is the main pension fund for non-dierenarts employees (2/3 employer, 1/3 employee). Dierenartsen in loondienst have separate SPD arrangement.
 *   - 1 January 2026 salary table values transcribed from 'per 1 januari 2026' row in Bijlage III
 *   - 1 July 2026 salary table values transcribed from 'per 1 juli 2026' row in Bijlage III
 *   - These salary tables are BEFORE AWVN indexation - CAO states 'Deze salarisschalen zijn exclusief een indexatie per 1 januari 2025 en per 1 januari 2026'
 *   - The 1 July increases reflect 45% of the gap towards AWVN median per Article 9 Lid 1
 *   - Functiegroepen use band structure (min-max ranges) rather than rigid schalen with tredes
 *
 * Excluded: Toeslag voor extra taken (4% of salary for higher-grade tasks); Jubileumuitkering (lump sum payments at 10, 15, 25, 40 years service); Verhuiskostenregeling (relocation costs up to EUR 1361); Shift and night work toeslagen (varying by time and day of week); Beoordelingsafhankelijke verhoging (performance-based increases); Overtime and meerwerk vergoedingen; Dierenarts-in-loondienst pension (SPD separate arrangement); Jeugdloon for students/youth vacation workers
 */
export const caoDierenartspraktijken2026: Cao = {
  id: 'dierenartspraktijken',
  name: "CAO Dierenartspraktijken (Veterinaire sector)",
  year: 2026,
  effectiveNote: "Effective 1 January 2026 through 31 December 2026. Salary table shows band ranges (min-max) for functiegroepen 1-14. Mid-year salary adjustment on 1 July 2026 (step towards AWVN median: 45% of gap). Table values are BEFORE AWVN indexation (max 3.5% on 1 Jan 2026, additional max 3.5% for 1 July 2026). Excluded: toeslag for extra tasks, jubileumuitkering (lump sums at service anniversaries), verhuiskostenregeling, shift/night work toeslagen, overtime premiums, beoordelingsafhankelijke increases, dierenarts-in-loondienst SPD pension, jeugdloon.",
  sourceUrl: "https://www.fnv.nl/getmedia/91b6efac-c9d8-4b49-a441-bf750bd5192b/1185-veterinaire-sector-cao-1-1-2024-tm-31-12-2026-vbest03032024.pdf",
  pensioenfondsId: 'pfzw',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'band',
    hoursPerWeek: 40,
    levelLabel: "Functiegroep",
    unit: 'maand',
    levels: [
      { id: '1', min: 2366.17, max: 2534.22 },
      { id: '2', min: 2380.05, max: 2577.39 },
      { id: '3', min: 2412.75, max: 2673.48 },
      { id: '4', min: 2459.79, max: 2821.28 },
      { id: '5', min: 2531.18, max: 3032.93 },
      { id: '6', min: 2638.37, max: 3300.22 },
      { id: '7', min: 2860.31, max: 3765.49 },
      { id: '8', min: 3122.57, max: 4243.19 },
      { id: '9', min: 3510.86, max: 4870.26 },
      { id: '10', min: 4092.56, max: 5668.31 },
      { id: '11', min: 4730.77, max: 6596.2 },
      { id: '12', min: 5456.47, max: 7677.72 },
      { id: '13', min: 6336.66, max: 9064.58 },
      { id: '14', min: 7426.53, max: 10699.87 },
    ],
    defaultRsp: 0.9,
  },
  periods: [
    {
      from: '2026-07-01',
      note: "Mid-year step increase towards AWVN median level (45% of gap). Also subject to AWVN indexation (max 3.5%).",
      status: 'provisional',
      salary: {
        kind: 'band',
        hoursPerWeek: 40,
        levelLabel: "Functiegroep",
        unit: 'maand',
        levels: [
          { id: '1', min: 2406.33, max: 2723.19 },
          { id: '2', min: 2431.96, max: 2806.8 },
          { id: '3', min: 2492.75, max: 2996.03 },
          { id: '4', min: 2581.12, max: 3204.11 },
          { id: '5', min: 2717.33, max: 3435.23 },
          { id: '6', min: 2892.64, max: 3701.84 },
          { id: '7', min: 3098.6, max: 4070.88 },
          { id: '8', min: 3326.18, max: 4613.42 },
          { id: '9', min: 3708.53, max: 5297.7 },
          { id: '10', min: 4235.14, max: 6173.88 },
          { id: '11', min: 4955.43, max: 7203.67 },
          { id: '12', min: 5763.12, max: 8407.43 },
          { id: '13', min: 6931.4, max: 9930.32 },
          { id: '14', min: 8067.45, max: 11570.67 },
        ],
        defaultRsp: 0.9,
      },
    },
  ],
  vergoedingen: [
    {id:'vakantietoeslag',label:'Vakantietoeslag',amount:0.08,unit:'perMaand',taxable:true,note:'8% of annual income (12x gross monthly + consignatie + shift allowances, calculated from June-May period)'},
    {id:'reiskosten_woonwerk',label:'Reiskosten woon-werkverkeer (netto)',amount:0.23,unit:'perKm',taxable:false,note:'EUR 0.23 per km netto from 1 January 2026. First 5 km and distances above 35 km not reimbursed. Applies to all transport modes (car, cycling, public transport).'},
    {id:'reiskosten_zakelijk',label:'Zakelijke reiskosten',amount:0.3,unit:'perKm',taxable:false,note:'EUR 0.30 per km for business travel using personal vehicle'},
    {id:'consignatievergoeding',label:'Consignatievergoeding (on-call allowance)',amount:4,unit:'perDag',taxable:true,note:'EUR 4.00 per hour on-call (EUR 5.40 on public holidays) from 1 January 2024. Indexed by AWVN (max 3.5% from 1 January 2026).'},
  ],
};
