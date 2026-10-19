import type { Cao } from '../types.js';

/**
 * Cao GAO Onderwijsadviesbureaus 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao GAO Onderwijsadviesbureaus
 * https://www.cnv.nl/documents/5785/Cao_GAO_Onderwijsadviesbureaus_2026_.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-09-01 (month) uit de bron
 *   - Basistabel 1-1-2026 teruggerekend uit de tabel per 2026-09-01 (gedeeld door +1,25%)
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-09-01)
 *
 * Excluded: none stated
 */
export const caoOnderwijsadviesbureaus2026: Cao = {
  id: 'onderwijsadviesbureaus',
  name: "Cao GAO Onderwijsadviesbureaus",
  year: 2026,
  effectiveNote: "Cao 2026-01-01 t/m 2026-12-31; loontabel per 2026-09-01. Let op: Cao 2026 (1-1-2026 t/m 31-12-2026) voor BCO Onderwijsadvies, HCO, Bazalt Groep, Stichting 1801, RPCZ, Gouwe Academy en CPS Salarisschalen per 1-9-2026 (incl. 1,25%), afgerond op hele euro's; schalen 0, 1 en 2 vervallen per 1-1-2026. Lagere periodieken in schaal 3 t/m 7 liggen op hetzelfde minimumbedrag (€ 2.641) Cao 2025: 1,5% per 1-1-2025 en 1,5% per 1-9-2025 Betrekking (voltijd) gemiddeld 36 uur per week Vakantietoeslag 8% van het jaarsalaris, uitbetaald in mei Pensioen bij ABP; werknemer betaalt 30% van de premie (cao art. 23). Premie 2026 (8,13% werknemersdeel), franchise € 19.200 en maximum € 137.800 zijn de ABP-cijfers 2026 en niet in deze cao zelf vermeld Op ondernemingsniveau 2,5% van de loonsom voor levensfasebewust personeelsbeleid / individueel keuzebudget (niet opgenomen)",
  sourceUrl: "https://www.cnv.nl/documents/5785/Cao_GAO_Onderwijsadviesbureaus_2026_.pdf",
  pensioenfondsId: 'abp',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 36,
    schalen: {
      '3': [2608.4, 2608.4, 2608.4, 2608.4, 2608.4, 2608.4, 2619.26, 2708.15, 2800],
      '4': [2608.4, 2608.4, 2608.4, 2608.4, 2608.4, 2631.11, 2716.05, 2810.86, 2905.68, 3005.43],
      '5': [2608.4, 2608.4, 2608.4, 2608.4, 2652.84, 2744.69, 2839.51, 2935.31, 3034.07, 3139.75, 3247.41],
      '6': [2608.4, 2608.4, 2608.4, 2702.22, 2805.93, 2909.63, 3022.22, 3136.79, 3253.33, 3379.75, 3505.19],
      '7': [2636.05, 2729.88, 2821.73, 2916.54, 3018.27, 3119.01, 3227.65, 3339.26, 3452.84, 3570.37, 3693.83, 3822.22],
      '8': [2803.95, 2905.68, 3018.27, 3130.86, 3248.4, 3369.88, 3498.27, 3627.65, 3763.95, 3905.19, 4050.37, 4201.48],
      '9': [3111.11, 3228.64, 3347.16, 3477.53, 3605.93, 3743.21, 3883.46, 4027.65, 4179.75, 4337.78, 4498.77, 4668.64],
      '10': [3483.46, 3604.94, 3724.44, 3856.79, 3990.12, 4124.44, 4266.67, 4414.81, 4564.94, 4721.98, 4882.96, 5050.86, 5223.7],
      '11': [3917.04, 4053.33, 4193.58, 4338.77, 4486.91, 4639.01, 4801.98, 4964.94, 5136.79, 5311.6, 5492.35, 5683.95, 5876.54],
      '12': [4407.9, 4562.96, 4714.07, 4878.02, 5046.91, 5219.75, 5398.52, 5584.2, 5775.8, 5973.33, 6182.72, 6391.11, 6611.36],
      '13': [5006.42, 5177.28, 5355.06, 5540.74, 5726.42, 5927.9, 6129.38, 6340.74, 6554.07, 6781.23, 7015.31, 7256.3, 7505.19],
      '14': [5498.27, 5686.91, 5880.49, 6083.95, 6290.37, 6507.65, 6731.85, 6961.98, 7198.02, 7443.95, 7699.75, 7966.42, 8237.04, 8520.49],
      '15': [6239.01, 6454.32, 6673.58, 6904.69, 7142.72, 7384.69, 7638.52, 7900.25, 8172.84, 8452.35, 8739.75, 9039.01, 9348.15, 9671.11],
    },
  },
  periods: [
    {
      from: '2026-09-01',
      note: "+1,25% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 36,
        schalen: {
          '3': [2641, 2641, 2641, 2641, 2641, 2641, 2652, 2742, 2835],
          '4': [2641, 2641, 2641, 2641, 2641, 2664, 2750, 2846, 2942, 3043],
          '5': [2641, 2641, 2641, 2641, 2686, 2779, 2875, 2972, 3072, 3179, 3288],
          '6': [2641, 2641, 2641, 2736, 2841, 2946, 3060, 3176, 3294, 3422, 3549],
          '7': [2669, 2764, 2857, 2953, 3056, 3158, 3268, 3381, 3496, 3615, 3740, 3870],
          '8': [2839, 2942, 3056, 3170, 3289, 3412, 3542, 3673, 3811, 3954, 4101, 4254],
          '9': [3150, 3269, 3389, 3521, 3651, 3790, 3932, 4078, 4232, 4392, 4555, 4727],
          '10': [3527, 3650, 3771, 3905, 4040, 4176, 4320, 4470, 4622, 4781, 4944, 5114, 5289],
          '11': [3966, 4104, 4246, 4393, 4543, 4697, 4862, 5027, 5201, 5378, 5561, 5755, 5950],
          '12': [4463, 4620, 4773, 4939, 5110, 5285, 5466, 5654, 5848, 6048, 6260, 6471, 6694],
          '13': [5069, 5242, 5422, 5610, 5798, 6002, 6206, 6420, 6636, 6866, 7103, 7347, 7599],
          '14': [5567, 5758, 5954, 6160, 6369, 6589, 6816, 7049, 7288, 7537, 7796, 8066, 8340, 8627],
          '15': [6317, 6535, 6757, 6991, 7232, 7477, 7734, 7999, 8275, 8558, 8849, 9152, 9465, 9792],
        },
      },
    },
  ],
  vergoedingen: [],
};
