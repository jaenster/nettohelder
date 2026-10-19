import type { Cao } from '../types.js';

/**
 * CAO Varkensverbetering (Nederland) 2026 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Collectieve Arbeidsovereenkomst voor de Varkensverbetering in Nederland, 1 juli 2025 - 30 juni 2026, Bijlage 2: salaristabel
 * https://www.fnv.nl/getmedia/06d2ac03-0c7b-449d-9f67-8ad40375f11d/907-varkensverbetering-in-nederland-cao-01-07-2025-tm-30-06-2026-v03112025.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Calculated July 1, 2026 salaries by applying 3% to January 1, 2026 baseline amounts - please verify against official 2026-2028 CAO document when published
 *   - BPL pension fund ID confirmed, but new pension regulation transition planned for 1 January 2027
 *   - Vacation allowance 8% confirmed from Article 1.2
 *   - No eindejaarsuitkering mentioned in CAO text
 *   - Period 2027-01-01: 0.75% increase status marked provisional as full 2026-2028 CAO document not yet publicly available with detailed tables
 *
 * Excluded: jeugdschalen; aanloopschalen; toeslagen voor overwerk/meerwerk/weekend werk; feest/gedenkdagentoeslag (alleen voor NVS/VKI werknemers voor 1984/1988); consignatiediensten; dienstauto regelingen; verblijfskosten; verhuiskosten; studiekosten; jubileum gratificaties; RVU uitkeringen; WAO/WIA hiaat verzekering; Sazas PLUS verzekering
 */
export const caoVarkensverbetering2026: Cao = {
  id: 'varkensverbetering',
  name: "CAO Varkensverbetering",
  year: 2026,
  effectiveNote: "Effective 1 July 2026 (3% wage increase from 1 January 2026 baseline). Salary table is based on the 1 January 2026 amounts from the 2025-2026 CAO (which included a 4% increase from 1 July 2025 plus 1% increase from 1 January 2026), then adjusted forward 3% for the new 2026-2028 agreement. Exclusions: jeugdschalen (youth scales), aanloopschalen (startup scales), one-off payments (RVU, jubilee gratifications), toeslagen (allowances like overtime, weekend work, clothing/equipment).",
  sourceUrl: "https://www.fnv.nl/getmedia/06d2ac03-0c7b-449d-9f67-8ad40375f11d/907-varkensverbetering-in-nederland-cao-01-07-2025-tm-30-06-2026-v03112025.pdf",
  pensioenfondsId: 'bpl',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    hoursPerWeek: 40,
    stepLabel: 'trede',
    unit: 'maand',
    schalen: {
      'A': [2914, 2965, 3025, 3082, 3141, 3202, 3285, 3363, 3440, 3524, 3613, 3701, 3792, 3884, 3980, 4082, 4185, 4290, 4396, 4502, 4622, 4734, 4852, 4971, 5101, 5224, 5368, 5540, 5710, 5883, 5990, 6164, 6351, 6541, 6734, 6935, 7139, 7351, 7561, 7789],
      'B': [3010, 3074, 3133, 3194, 3257, 3325, 3420, 3500, 3586, 3676, 3768, 3863, 3962, 4065, 4172, 4284, 4396],
      'C': [3131, 3197, 3262, 3328, 3397, 3474, 3572, 3660, 3755, 3849, 3948, 4051, 4158, 4266, 4381, 4501],
      'D': [3141, 3205, 3274, 3343, 3413, 3495, 3596, 3689, 3788, 3886, 3989, 4098, 4210, 4328, 4451],
      'E': [3202, 3268, 3340, 3413, 3478, 3582, 3689, 3793, 3903, 4012, 4125, 4244, 4366],
      'F': [3285, 3361, 3437, 3509, 3607, 3716, 3829, 3948, 4070, 4198, 4330],
      'G': [3363, 3443, 3519, 3627, 3740, 3859, 3988, 4122],
      'H': [3440, 3525, 3632, 3749, 3872, 4003],
      'I': [3524, 3638, 3761, 3892],
      'J': [3701, 3832, 3969],
      'K': [3792, 3932],
    },
  },
  periods: [
    {
      from: '2027-01-01',
      note: "+0.75% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        hoursPerWeek: 40,
        stepLabel: 'trede',
        unit: 'maand',
        schalen: {
          'A': [2936, 2988, 3050, 3108, 3168, 3230, 3313, 3391, 3469, 3555, 3645, 3735, 3827, 3920, 4017, 4120, 4224, 4330, 4437, 4544, 4666, 4779, 4898, 5019, 5151, 5275, 5423, 5595, 5768, 5943, 6050, 6225, 6413, 6605, 6799, 7002, 7207, 7421, 7632, 7862],
          'B': [3036, 3100, 3158, 3220, 3283, 3352, 3448, 3529, 3616, 3707, 3800, 3895, 3995, 4098, 4206, 4319, 4432],
          'C': [3156, 3223, 3288, 3354, 3424, 3501, 3600, 3689, 3785, 3880, 3980, 4084, 4191, 4300, 4416, 4537],
          'D': [3166, 3230, 3299, 3369, 3439, 3522, 3623, 3717, 3817, 3916, 4019, 4129, 4241, 4360, 4483],
          'E': [3227, 3293, 3365, 3439, 3504, 3609, 3717, 3821, 3932, 4042, 4156, 4276, 4399],
          'F': [3311, 3387, 3463, 3536, 3635, 3744, 3857, 3978, 4101, 4229, 4362],
          'G': [3390, 3471, 3548, 3656, 3770, 3890, 4020, 4155],
          'H': [3468, 3554, 3662, 3780, 3904, 4036],
          'I': [3553, 3668, 3792, 3924],
          'J': [3730, 3863, 4002],
          'K': [3821, 3963],
        },
      },
    },
  ],
  vergoedingen: [
    {"id":"vakantietoeslag","label":"Vakantietoeslag","amount":0.08,"unit":"perJaar","taxable":true,"note":"8% van het bruto jaarinkomen"},
    {"id":"reiskostenvergoeding","label":"Reiskostenvergoeding woon-werkverkeer","amount":0,"unit":"perMaand","taxable":false,"note":"Bedrag jaarlijks vastgesteld in overleg tussen werkgever en ondernemingsraad"},
    {"id":"thuiswerkvergoeding","label":"Thuiswerkvergoeding","amount":0,"unit":"perMaand","taxable":false,"note":"Bedrag jaarlijks vastgesteld in overleg tussen werkgever en ondernemingsraad"},
  ],
};
