import type { Cao } from '../types.js';

/**
 * CAO Groen, Grond en Infrastructuur (Nederland) 2026 salaris 2026. DRAFT from cao-pipeline (confidence: high).
 * Source: https://www.caogroengrondinfrastructuur.nl/downloads/2502-ACT-CAO%20boekje%20GGI_digitaal_def-new.pdf
 * https://www.caogroengrondinfrastructuur.nl/downloads/2502-ACT-CAO%20boekje%20GGI_digitaal_def-new.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Functiegroep D steps 6-7 amounts (verify against original PDF)
 *   - Functiegroep E whether it truly has 8 steps or if data incomplete
 *   - Functiegroep H-J whether these are separate groups or merged
 *   - 40-hour week table equivalent amounts not shown here - only 38-hour week presented
 *   - September 2026 table completeness across all function groups
 *
 * Excluded: youth scales (under 21 years); aanloopschalen for new functiegroep B; one-time bonuses and premiums; temporary function premiums; personal supplements; performance bonuses on hourly wage; workers with disabilities special scales; BBL apprentice wages
 */
export const caoGgi2026: Cao = {
  id: 'ggi',
  name: "CAO Groen, Grond en Infrastructuur",
  year: 2026,
  effectiveNote: "From 1 January 2026 (with 1.5% increase). Monthly salaries for 38-hour work week. Additional 1.5% increase effective 1 September 2026. Excludes: youth scales (under 21), temporary allowances, one-off bonuses, special function premiums.",
  sourceUrl: "https://www.caogroengrondinfrastructuur.nl/downloads/2502-ACT-CAO%20boekje%20GGI_digitaal_def-new.pdf",
  pensioenfondsId: 'bpl',
  vakantiegeldPct: 0.0833,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 38,
    schalen: {
      'B': [2339.4, 2406.6, 2475.1],
      'C': [2543.9, 2611.5, 2680, 2749, 2817.7, 2886, 2953.6, 3023],
      'D': [3090.7, 3159, 3228.1, 3295.6, 3364.5, 3432.2, 3500.8, 3568.4],
      'E': [3113.1, 3181.4, 3247.9, 3315.6, 3383.4, 3450.4, 3518.3, 3585.5],
      'F': [3652.7, 3720.6, 3788.4, 3855.2, 3922.4, 3989.6, 4057.5, 4124.9],
      'G': [4192.1, 4259.7, 4327.4, 4394.8, 4461.8, 4529.7, 4596.6, 4664.5],
      'H': [4731.5, 4798.9],
      'I': [4731.5, 4798.9],
      'J': [4731.5, 4798.9],
    },
  },
  periods: [
    {
      from: '2026-09-01',
      note: "+1.5% collective increase",
      status: 'confirmed',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 38,
        schalen: {
          'B': [2374.4, 2442.7, 2512.3],
          'C': [2581.9, 2650.7, 2720.3, 2790.3, 2859.9, 2929.3, 2998, 3068.3],
          'D': [3137, 3206.4, 3276.6, 3344.9, 3415, 3483.6, 3552.8, 3621.4],
          'E': [3159.8, 3229, 3296.6, 3365.4, 3434.1, 3502.2, 3571.1, 3639.2],
          'F': [3707.5, 3776.5, 3845.2, 3913, 3981.3, 4049.4, 4118.4, 4186.7],
          'G': [4255, 4323.7, 4392.2, 4460.7, 4528.8, 4597.5, 4665.6, 4734.5],
          'H': [4802.4, 4870.9],
          'I': [4802.4, 4870.9],
          'J': [4802.4, 4870.9],
        },
      },
    },
  ],
  vergoedingen: [
    {"id":"vakantiegeld","label":"Vakantiegeld (vakantietoeslag)","amount":0.0833,"unit":"perMaand","taxable":true,"note":"8.33% of gross wage, paid separately or accumulated for holiday payment"},
    {"id":"reiskosten_auto_5_10km","label":"Reiskosten auto (5-10 km)","amount":2.3,"unit":"perDag","taxable":false,"note":"Daily travel allowance per 1 January 2025"},
    {"id":"reiskosten_auto_11_15km","label":"Reiskosten auto (11-15 km)","amount":5.06,"unit":"perDag","taxable":false,"note":"Daily travel allowance per 1 January 2025"},
    {"id":"bereikbaarheidsvergoeding","label":"Bereikbaarheidsvergoeding (availability allowance)","amount":15.2,"unit":"perDag","taxable":true,"note":"Per 1 January 2026 (EUR 15.00 in 2025). Not applicable for functiegroep G and higher."},
    {"id":"werkkleding","label":"Werkkleding vergoeding (clothing allowance)","amount":4.4,"unit":"perJaar","taxable":true,"note":"EUR 4.40 per week per 1 January 2026 (EUR 4.30 in 2025). For own clothing wear. Alternative: employer provides 3 work outfits per year."},
  ],
};
