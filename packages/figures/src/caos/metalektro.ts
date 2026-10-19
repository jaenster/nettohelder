import type { Cao } from '../types.js';

/**
 * Cao Metalektro (grootmetaal / technologische industrie) — Basis-cao 2026.
 * Persoonlijke minimum maandverdienste bij voltijd per 1 januari 2026 (art. 3.3.1):
 * salarisgroepen A–K (er is geen groep I) × functiejaar. De tabel is getrapt — elke
 * salarisgroep loopt van functiejaar 0 tot een eigen maximum (A t/m fj1, K t/m fj10).
 * Bedragen incl. de verhoging per 1-1-2026 (+2,00%, min. €101,72). Vakantietoeslag 8%;
 * geen structurele eindejaarsuitkering in de Basis-cao. Pensioen = PME.
 * Bron: officiële Basis-cao Metalektro 2026 PDF (FNV), art. 3.3.1.
 */
export const caoMetalektro2026: Cao = {
  id: 'metalektro',
  name: 'Cao Metalektro',
  year: 2026,
  effectiveNote:
    'Maandtabel (persoonlijk minimum maandverdienste) per 1 jan 2026, voltijd. Salarisgroepen A–K (geen groep I), getrapt per functiejaar. Jeugdschalen t/m 20 jaar vervallen per 1-1-2022. Geen structurele eindejaarsuitkering.',
  sourceUrl:
    'https://www.fnv.nl/getmedia/5d171cbc-1373-43c9-9d71-06fd03042fbf/315-metalektro-cao-01-01-2026-tm-31-12-2026-v09042026.pdf',
  pensioenfondsId: 'pme',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    hoursPerWeek: 38,
    stepLabel: 'functiejaar',
    unit: 'maand',
    schalen: {
      A: [2768.86, 2803.01],
      B: [2809.65, 2853.79, 2897.15],
      C: [2869.64, 2923.8, 2977.11, 3030.46],
      D: [2954.58, 3014.6, 3074.56, 3134.57, 3195.36],
      E: [3057.1, 3125.41, 3193.75, 3262.07, 3330.33, 3398.63],
      F: [3178.77, 3255.39, 3332.01, 3408.72, 3484.45, 3561.14, 3637.77],
      G: [3318.71, 3405.31, 3491.15, 3577.81, 3663.58, 3750.25, 3836.03, 3922.71],
      H: [3487.83, 3584.43, 3680.26, 3776.05, 3871.87, 3968.57, 4064.33, 4160.11, 4255.92],
      J: [3702.73, 3808.55, 3914.34, 4020.19, 4125.96, 4231.81, 4337.61, 4443.39, 4549.21, 4655.03],
      K: [3950.2, 4067.67, 4184.3, 4301.77, 4419.24, 4535.8, 4653.37, 4769.97, 4887.47, 5004.92, 5121.58],
    },
  },
  vergoedingen: [],
};
