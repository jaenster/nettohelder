import type { Cao } from '../types.js';

/**
 * Cao Woondiensten (woningcorporaties) — Nederland, schalen A-O 2026 2026. DRAFT from cao-pipeline (confidence: high).
 * Source: https://www.fnv.nl/getmedia/2975dda2-a06c-434c-8305-34e5d50866d5/491-woondiensten-cao-01-04-2025-tm-31-03-2027-v23122025.pdf
 * https://www.fnv.nl/getmedia/2975dda2-a06c-434c-8305-34e5d50866d5/491-woondiensten-cao-01-04-2025-tm-31-03-2027-v23122025.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Eindejaarsuitkering: Verify that 4% / 12 months = 0.0333 is the correct monthly-equivalent fraction
 *   - September 1, 2026 salary revision amounts — confirm exact 0.5% increase calculation on all schalen
 *   - SPW pension fund slug 'pmt' — verify it matches 'Pensioenfonds voor Medewerkers' or 'Pensioenfonds voor de Woningcorporaties'
 *   - Trede counts per schaal — ensure each schaal has correct number of steps (A: 5, B: 8, C: 8, D: 9, E: 9, F: 10, G: 11, H: 12, I: 13, J: 14, K: 14, L: 15, M: 16, N: 17, O: 18)
 *   - Vakantiegeld 8% — confirm it does not accumulate during second year of sickness (article 7.10 offset rule)
 *   - Thuiswerkvergoeding: €2.40 netto per day — verify no indexation expected before 1 April 2027
 *
 * Excluded: Instapsalaris schalen (article 4.3 — separate entry-level scales for new starters); Functiewaardering handboek (Handboek functie-indeling woondiensten — separate classification guide); Jeugdschalen (youth salary scales if any); Aanloopschalen (entry scales beyond instapsalaris); Toeslagen (various allowances for overtime, irregular hours, etc. per article 3.5-3.6); One-off payments (dienstjubilea gratificatie — service anniversary gratuities); Toeslag voor werk buiten normale werktijden (shift/irregular hours allowance); Reiskostenvergoeding woon-werkverkeer (commute allowance — varies by employer); Funktiegebonden kostenvergoedingen (function-specific allowances); Verhuiskostenregeling (relocation costs — employer-specific); Ongevallenverzekering bedragen (accident insurance payout amounts); Sick leave continuation amounts (percentage-based, not fixed); WIA-pluspensioen and WIA-excedentpensioen (disability pension supplements); Jubileumgratificatie amounts (service anniversary bonuses); Individueel Keuze Budget option combinations (flexible benefits trading); Generation pact provisions (generatiepact); Working-from-home policy details (employer discretionary); Lease allowance details (if any)
 */
export const caoWoondiensten2026: Cao = {
  id: 'woondiensten',
  name: "Cao Woondiensten (woningcorporaties) — Nederland, schalen A-O 2026",
  year: 2026,
  effectiveNote: "Pensioen = SPW (woningcorporaties), niet in fondsenlijst → generiek. Table effective from 1 January 2026 through 31 August 2026 (monthly amounts). Mid-year revision effective 1 September 2026 with 0.5% wage increase.",
  sourceUrl: "https://www.fnv.nl/getmedia/2975dda2-a06c-434c-8305-34e5d50866d5/491-woondiensten-cao-01-04-2025-tm-31-03-2027-v23122025.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0333,
  salary: {
    kind: 'table',
    hoursPerWeek: 36,
    stepLabel: 'trede',
    unit: 'maand',
    schalen: {
      'A': [2726, 2785, 2844, 2903, 2962],
      'B': [2726, 2790, 2854, 2918, 2982, 3046, 3110, 3174],
      'C': [2761, 2827, 2893, 2959, 3025, 3091, 3157, 3223],
      'D': [3019, 3091, 3163, 3235, 3307, 3379, 3451, 3523, 3595],
      'E': [3140, 3217, 3294, 3371, 3448, 3525, 3602, 3679, 3758],
      'F': [3305, 3388, 3471, 3554, 3637, 3720, 3803, 3886, 3969, 4052],
      'G': [3613, 3704, 3795, 3886, 3977, 4068, 4159, 4250, 4341, 4432, 4523],
      'H': [3978, 4078, 4178, 4278, 4378, 4478, 4578, 4678, 4778, 4878, 4978, 5078],
      'I': [4338, 4452, 4566, 4680, 4794, 4908, 5022, 5136, 5250, 5364, 5478, 5592, 5706],
      'J': [4633, 4758, 4883, 5008, 5133, 5258, 5383, 5508, 5633, 5758, 5883, 6008, 6133, 6258],
      'K': [5097, 5235, 5373, 5511, 5649, 5787, 5925, 6063, 6201, 6339, 6477, 6615, 6753, 6891],
      'L': [5498, 5651, 5804, 5957, 6110, 6263, 6416, 6569, 6722, 6875, 7028, 7181, 7334, 7487, 7640],
      'M': [5998, 6169, 6340, 6511, 6682, 6853, 7024, 7195, 7366, 7537, 7708, 7879, 8050, 8221, 8392, 8563],
      'N': [6683, 6880, 7077, 7274, 7471, 7668, 7865, 8062, 8259, 8456, 8653, 8850, 9047, 9244, 9441, 9638, 9835],
      'O': [7678, 7900, 8122, 8344, 8566, 8788, 9010, 9232, 9454, 9676, 9898, 10120, 10342, 10564, 10786, 11008, 11230, 11452],
    },
  },
  periods: [
    {
      from: '2026-09-01',
      note: "+0.5% wage increase effective 1 September 2026",
      status: 'confirmed',
      salary: {
        kind: 'table',
        hoursPerWeek: 36,
        stepLabel: 'trede',
        unit: 'maand',
        schalen: {
          'A': [2740, 2799, 2858, 2917, 2976],
          'B': [2740, 2804, 2868, 2932, 2996, 3060, 3124, 3188],
          'C': [2775, 2841, 2907, 2973, 3039, 3105, 3171, 3237],
          'D': [3034, 3106, 3178, 3250, 3322, 3394, 3466, 3538, 3610],
          'E': [3156, 3233, 3310, 3387, 3464, 3541, 3618, 3695, 3774],
          'F': [3322, 3405, 3488, 3571, 3654, 3737, 3820, 3903, 3986, 4069],
          'G': [3631, 3722, 3813, 3904, 3995, 4086, 4177, 4268, 4359, 4450, 4541],
          'H': [3998, 4098, 4198, 4298, 4398, 4498, 4598, 4698, 4798, 4898, 4998, 5098],
          'I': [4360, 4474, 4588, 4702, 4816, 4930, 5044, 5158, 5272, 5386, 5500, 5614, 5728],
          'J': [4656, 4781, 4906, 5031, 5156, 5281, 5406, 5531, 5656, 5781, 5906, 6031, 6156, 6281],
          'K': [5122, 5260, 5398, 5536, 5674, 5812, 5950, 6088, 6226, 6364, 6502, 6640, 6778, 6916],
          'L': [5525, 5678, 5831, 5984, 6137, 6290, 6443, 6596, 6749, 6902, 7055, 7208, 7361, 7514, 7667],
          'M': [6028, 6199, 6370, 6541, 6712, 6883, 7054, 7225, 7396, 7567, 7738, 7909, 8080, 8251, 8422, 8593],
          'N': [6716, 6913, 7110, 7307, 7504, 7701, 7898, 8095, 8292, 8489, 8686, 8883, 9080, 9277, 9474, 9671, 9868],
          'O': [7716, 7938, 8160, 8382, 8604, 8826, 9048, 9270, 9492, 9714, 9936, 10158, 10380, 10602, 10824, 11046, 11268, 11490],
        },
      },
    },
  ],
  vergoedingen: [
    {"id":"vakantietoeslag","label":"Vakantietoeslag","amount":0.08,"unit":"perJaar","taxable":true,"note":"8% of annual salary, paid in May (provisional) and December (definitive)"},
    {"id":"eindejaarsuitkering","label":"Eindejaarsuitkering","amount":0.04,"unit":"perJaar","taxable":true,"note":"4% of individual annual salary (capped at 4% of scale end level), paid in December, fully pensionable from 1 January 2026"},
    {"id":"thuiswerkvergoeding","label":"Thuiswerkvergoeding","amount":2.4,"unit":"perDag","taxable":false,"note":"Net per day worked from home, effective 1 January 2026 to 1 April 2027 (maximum unexempt amount)"},
    {"id":"kilometervergoeding_zakelijk","label":"Kilometervergoeding zakelijk","amount":0.4,"unit":"perKm","taxable":true,"note":"For business kilometers using private car"},
    {"id":"stagevergoeding","label":"Stagevergoeding","amount":400,"unit":"perMaand","taxable":true,"note":"Minimum € 400 gross per month for 36-hour week stage; pro-rata for part-time"},
  ],
};
