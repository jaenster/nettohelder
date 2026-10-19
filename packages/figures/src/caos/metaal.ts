import type { Cao } from '../types.js';

/**
 * CAO Metaal & Techniek (Kleinmetaal) — functiegroepen A–J × functiejaar, fixed
 * MONTHLY table per 1 maart 2026 (38u). Vakantiegeld 8%; no eindejaarsuitkering
 * (13 ATV-dagen instead). Pension = PMT. Adults 21+ (jeugdschalen not yet modelled).
 * Source: official CNV CAO PDF (Metaalbewerkingsbedrijf), art. 33a.
 * https://www.cnv.nl/documents/5677/20260306_metaalbewerkingsbedrijf_A.pdf
 */
export const caoMetaal2026: Cao = {
  id: 'metaal',
  name: 'CAO Metaal & Techniek',
  year: 2026,
  effectiveNote: 'Maandtabel per 1 mrt 2026 (38u), 21 jaar e.o. Jeugdschalen (16–20) nog niet meegenomen.',
  sourceUrl: 'https://www.cnv.nl/documents/5677/20260306_metaalbewerkingsbedrijf_A.pdf',
  pensioenfondsId: 'pmt',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'functiejaar',
    unit: 'maand',
    schalen: {
      A: [2422.25, 2679, 2698, 2724],
      B: [2750, 2830, 2854, 2874, 2893, 2922, 2948, 2975],
      C: [2857, 2880, 2899, 2923, 2940, 2969, 2998, 3025],
      D: [2914, 2940, 2973, 2996, 3029, 3053, 3102, 3144],
      E: [3002, 3054, 3111, 3154, 3214, 3263, 3316, 3411],
      F: [3146, 3216, 3280, 3348, 3413, 3480, 3547, 3651],
      G: [3391, 3458, 3528, 3604, 3672, 3742, 3810, 3889],
      H: [3664, 3739, 3809, 3890, 3968, 4041, 4113, 4188, 4264],
      I: [3992, 4082, 4162, 4250, 4336, 4414, 4496, 4574, 4667, 4740],
      J: [4392, 4479, 4568, 4667, 4749, 4838, 4931, 5023, 5114, 5199, 5292],
    },
  },
  vergoedingen: [],
};
