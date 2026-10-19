import type { Cao } from '../types.js';

/**
 * CAO Zwembaden en Zwemscholen 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: https://www.fnv.nl/getmedia/ee2545f9-3ecc-4c42-9f9c-50782e02a67b/1929-zwembaden-zwemscholen-cao-01-10-2024-tm-31-12-2026-v28042025.pdf
 * https://www.fnv.nl/getmedia/ee2545f9-3ecc-4c42-9f9c-50782e02a67b/1929-zwembaden-zwemscholen-cao-01-10-2024-tm-31-12-2026-v28042025.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Pension fund classification: Document lists 'Stichting Pensioenfonds voor de Recreatie'. This does not match any of the specified exact pension fund slugs - using 'generiek'
 *   - The 2026 salary table is NOT YET PUBLISHED - only the adjustment formula is specified (3.5% + CPI). The actual table will be submitted to unions for approval
 *   - All salary amounts shown are the published January 1, 2025 table from Bijlage 1B
 *   - Vakantietoeslag explicitly stated as 8% in Article 19 of the CAO
 *   - No 13th month or year-end bonus (eindejaaruitkering) found in the CAO
 *   - Steps (tredes): table shows 12 steps numbered 0-11
 *
 * Excluded: jeugdschalen (youth scales); leerlingenlonen (apprentice rates); stagiairlonen (intern rates); all-in salarisschalen (all-in combined vacation/salary); zondag/feestdag/nachttoeslag (holiday/night premiums - given as compensatie vrije tijd); 13th month / eindejaaruitkering (none exists in this CAO); personal toeslagen (one-off additions per individual contract)
 */
export const caoZwembaden2026: Cao = {
  id: 'zwembaden',
  name: "CAO Zwembaden en Zwemscholen",
  year: 2026,
  effectiveNote: "Base table effective from January 1, 2025. On January 1, 2026, salaries will increase by 3.5% plus CPI (October 2024-October 2025), but official 2026 table not yet published. Vakantietoeslag: 8%. Excluded: jeugdschalen, leerlingenlonen, stagiairlonen, all-in variants, special toeslagen.",
  sourceUrl: "https://www.fnv.nl/getmedia/ee2545f9-3ecc-4c42-9f9c-50782e02a67b/1929-zwembaden-zwemscholen-cao-01-10-2024-tm-31-12-2026-v28042025.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 38,
    schalen: {
      '1': [2315.21, 2419.93, 2475.49, 2531.05, 2681.45, 2763.17, 2816.49, 2972.63, 3027.84, 3083, 3368.21, 3432.39],
      '2': [2384.67, 2514.98, 2570.47, 2625.96, 2709.85, 2862.21, 2917.42, 3175.67, 3239.82, 3304.02, 3368.21, 3432.39],
      '3': [2456.21, 2549.91, 2603.23, 2656.52, 2807.05, 3047.34, 3111.49, 3175.67, 3239.82, 3304.02, 3368.21, 3432.39],
      '4': [2529.89, 2641.45, 2696.65, 2751.86, 2983.17, 3457.67, 3525.96, 3594.22, 3662.48, 3730.77, 3799, 3867.26],
      '5': [2605.79, 2790.64, 2854.79, 2918.99, 3047.34, 3457.67, 3525.96, 3594.22, 3662.48, 3730.77, 3799, 3867.26],
      '6': [2726.44, 3184.62, 3252.87, 3321.11, 3389.4, 3525.96, 3594.22, 3662.48, 3730.77, 3799, 3867.26, 3935.51],
      '7': [3116.33, 3571.2, 3637.1, 3702.98, 3768.9, 3834.8, 3900.67, 3966.54, 4032.45, 4098.39, 4164.23, 4230.14],
      '8': [3505.31, 3969.06, 4042.84, 4116.68, 4190.51, 4264.37, 4338.2, 4412.03, 4485.89, 4559.69, 4633.53, 4707.38],
      '9': [3895.19, 3969.06, 4042.84, 4116.68, 4190.51, 4264.37, 4338.2, 4412.03, 4485.89, 4559.69, 4633.53, 4707.38],
    },
  },
  vergoedingen: [
    {id:'vakantietoeslag',label:'Vakantietoeslag',amount:0.08,unit:'perJaar',taxable:true,note:'8% of salary earned during vacation year (1 June - 31 May), paid by 30 June'},
  ],
};
