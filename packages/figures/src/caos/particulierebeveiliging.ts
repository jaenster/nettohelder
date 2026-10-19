import type { Cao } from '../types.js';

/**
 * CAO Particuliere Beveiliging 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: https://fnv.nl/getmedia/82b003c0-27e6-487d-a8df-112f497cc92e/893-particuliere-beveiliging-cao-18-12-2024-tm-27-12-2026-v17042025.pdf
 * https://fnv.nl/getmedia/82b003c0-27e6-487d-a8df-112f497cc92e/893-particuliere-beveiliging-cao-18-12-2024-tm-27-12-2026-v17042025.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - 2026 salary scales require final CPI determination (October 2024-September 2025 reference); document only publishes 2025 scales
 *   - eindejaarsuitkering percentage of 2.01% converts to monthly equivalent of 0.167583% (2.01/12)
 *   - vakantiegeld 8% applies to specific salary components per article 62
 *   - Pension fund name 'Stichting Bedrijfstakpensioenfonds voor de Particuliere Beveiliging' classified as 'generiek'
 *
 * Excluded: Jeugdschalen (youth scales); Aanloopschalen (training scales); Toeslagen (all allowances/supplements); Reisvergoedingen details; Airport-specific supplements (Schiphol agreements); Geld- en waardelogistiek sector variations; Sector-specific object risk supplements
 */
export const caoParticulierebeveiliging2026: Cao = {
  id: 'particulierebeveiliging',
  name: "CAO Particuliere Beveiliging",
  year: 2026,
  effectiveNote: "2026 wage increase effective from loonperiode 1: base increase 0.5% + CPI adjustment (min 2%, max 4.5%). Salary scales shown are loonperiode 1 2025 baseline (includes 4.5% increase vs 2024). Actual 2026 scales pending final CPI determination with reference period October 1 2024 - September 30 2025. Base unit 144 hours per loonperiode (4 weeks).",
  sourceUrl: "https://fnv.nl/getmedia/82b003c0-27e6-487d-a8df-112f497cc92e/893-particuliere-beveiliging-cao-18-12-2024-tm-27-12-2026-v17042025.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.020083,
  salary: {
    kind: 'table',
    hoursPerWeek: 36,
    stepLabel: 'trede',
    unit: 'maand',
    schalen: {
      '2': [2307.84, 2359.19, 2410.43, 2461.76, 2513, 2564.34, 2615.58, 2666.91, 2718.14, 2769.46, 2820.72, 2872.04, 2923.33, 2974.6, 3025.88, 3077.19, 3128.45, 3179.76, 3231.03, 3282.33, 3333.58, 3386.92, 3441.14],
      '3': [2461.76, 2513, 2564.34, 2615.58, 2666.91, 2718.14, 2769.46, 2820.72, 2872.04, 2923.33, 2974.6, 3025.88, 3077.19, 3128.45, 3179.76, 3231.03, 3282.33, 3333.58],
      '4': [2513, 2564.34, 2615.58, 2666.91, 2718.14, 2769.46, 2820.72, 2872.04, 2923.33, 2974.6, 3025.88, 3077.19, 3128.45, 3179.76, 3231.03, 3282.33],
      '5': [2615.58, 2666.91, 2718.14, 2769.46, 2820.72, 2872.04, 2923.33, 2974.6, 3025.88, 3077.19, 3128.45, 3179.76, 3231.03],
      '6': [2666.91, 2718.14, 2769.46, 2820.72, 2872.04, 2923.33, 2974.6, 3025.88, 3077.19, 3128.45, 3179.76, 3231.03],
      '7': [2718.14, 2769.46, 2820.72, 2872.04, 2923.33, 2974.6, 3025.88, 3077.19, 3128.45, 3179.76, 3231.03, 3282.33],
    },
  },
  vergoedingen: [
    {id:'vakantiegeld',label:'Vakantiegeld (Vacation allowance)',amount:0.08,unit:'perJaar',taxable:false,note:'8% of applicable base salary components per article 62, paid in June'},
    {id:'eindejaarsuitkering',label:'Eindejaarsuitkering (Year-end payment)',amount:2.01,unit:'perJaar',taxable:true,note:'2.01% of base salary + vacation allowance, calculated over prior 13 loonperiodes, paid in loonperiode 12'},
  ],
};
