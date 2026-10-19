import type { Cao } from '../types.js';

/**
 * CAO Parketvloerenondernemingen 2025-2027 2026. DRAFT from cao-pipeline (confidence: high).
 * Source: CAO Parketvloerenondernemingen 2025-2027 (Bijlage I, Functies en loontabellen, art. 3)
 * https://www.fnv.nl/getmedia/43fecf8a-8ba4-4c3d-a180-344e6dea354a/346-parketvloerondernemingen-cao-2025-2027-v17122025.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Mapping of the '21 jaar' row to functiejaar 0 / step index 0 in each schaal (in the CAO it is a leeftijds/instaprij, not literally functiejaar 0)
 *   - Per 1 jan 2026 the in-force table is the '1 mei 2025' table (no separate 1 jan 2026 increase exists); confirm the calculator should use this for Jan-Apr 2026
 *   - All loongroep 7 step amounts (Per 1 mei 2025): 3368,3724,3756,3790,3820,3853,3880,3950,4014,4076,4142,4204,4266,4331
 *   - All Per 1 mei 2026 loongroep 7 amounts: 3521,3887,3920,3955,3986,4020,4048,4120,4186,4250,4318,4382,4445,4512
 *   - hoursPerWeek=40 (uurloon factor 173,92 in art. 5 bijlage I)
 *   - BHV EUR 22,15 and leermeester EUR 15,49 are 2025 amounts; they are CPI-indexed per 1 jan 2026 so the 2026 values may be slightly higher
 *   - Pension fund = Pensioenfonds Detailhandel (stated on FNV page, since 2018)
 *
 * Excluded: aanloopschaal (entrants paid one loongroep lower for max 1 jaar, art. 6 bijlage I); jeugdlonen / werknemers jonger dan 21 (table starts at 21 jaar); overwerk-, ploegen- en nachtdiensttoeslagen; BHV-toeslag, leermeestertoeslag, werkkledingvergoeding (listed separately in vergoedingen, CPI-indexed); werkgeversbijdrage aanvullende zorgverzekering EUR 15,00/maand; vakantietoeslag (captured as vakantiegeldPct 0.08)
 */
export const caoParket2026: Cao = {
  id: 'parket',
  name: "CAO Parketvloerenondernemingen 2025-2027",
  year: 2026,
  effectiveNote: "[fonds→generiek, auto-gok afgekeurd] Salary table effective 1 January 2026 is the table that took effect 1 mei 2025 (it remains in force until the next collective increase on 1 mei 2026). Amounts are bruto per MAAND at a 40-hour working week (uurloon = maandloon / 173,92). Rows are leeftijd/ervaring: the '21 jaar' row is the entry/minimum (treated here as functiejaar 0), then functiejaren 1 t/m 13. Each loongroep spans a different number of functiejaren. Per 1 mei 2026 a collective increase applies: +EUR 50 on the scale plus 3% (to the maximum of loongroep 7); that revised table is in periods. EXCLUDED: aanloopschaal (art. 6 bijlage I, entrants may be paid one loongroep lower for max 1 year), jeugd (table starts at 21 jaar; younger workers fall under wettelijk minimumloon / lower), all toeslagen (overwerk, ploegen, BHV EUR 22,15, leermeester EUR 15,49, werkkleding EUR 1,00/dag) and the employer zorgverzekering bijdrage EUR 15,00/maand.",
  sourceUrl: "https://www.fnv.nl/cao-sector/bouwen-wonen/parket/cao-parket",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'functiejaar',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      '1': [2571],
      '2': [2571, 2577, 2777, 2820, 2862, 2930],
      '3': [2571, 2654, 2854, 2891, 2927, 2966, 3016, 3074],
      '4': [2571, 2751, 2966, 2993, 3025, 3061, 3093, 3152, 3208],
      '5': [2677, 3066, 3095, 3128, 3155, 3188, 3220, 3280, 3340, 3404, 3457, 3520],
      '6': [2966, 3343, 3377, 3414, 3441, 3479, 3514, 3582, 3652, 3726, 3798, 3866, 3936],
      '7': [3368, 3724, 3756, 3790, 3820, 3853, 3880, 3950, 4014, 4076, 4142, 4204, 4266, 4331],
    },
  },
  periods: [
    {
      from: '2026-05-01',
      note: "+EUR 50 op de schalen en +3% (tot maximum loongroep 7) collectieve verhoging",
      status: 'confirmed',
      salary: {
        kind: 'table',
        stepLabel: 'functiejaar',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          '1': [2700],
          '2': [2700, 2706, 2912, 2956, 2999, 3069],
          '3': [2700, 2785, 2991, 3029, 3066, 3106, 3158, 3218],
          '4': [2700, 2885, 3106, 3134, 3167, 3204, 3237, 3298, 3356],
          '5': [2809, 3209, 3239, 3273, 3301, 3335, 3368, 3430, 3492, 3558, 3612, 3677],
          '6': [3106, 3495, 3530, 3568, 3596, 3635, 3671, 3741, 3813, 3889, 3963, 4033, 4106],
          '7': [3521, 3887, 3920, 3955, 3986, 4020, 4048, 4120, 4186, 4250, 4318, 4382, 4445, 4512],
        },
      },
    },
  ],
  vergoedingen: [
    {"id":"reiskosten-auto-netto","label":"Kilometervergoeding dienstreis eigen auto (netto)","amount":0.23,"unit":"perKm","taxable":false,"note":"Art. 16 lid 2; minimale vergoeding voor dienstreizen op verzoek werkgever"},
    {"id":"reiskosten-auto-bruto","label":"Kilometervergoeding dienstreis eigen auto (bruto)","amount":0.16,"unit":"perKm","taxable":true,"note":"Art. 16 lid 2; bruto component bovenop de netto km-vergoeding"},
    {"id":"werkkleding","label":"Werkkledingvergoeding","amount":1,"unit":"perDag","taxable":false,"note":"Art. 16 lid 5; alleen indien werkgever geen werkkleding regelt. Jaarlijks per 1 jan CPI-geindexeerd."},
    {"id":"bhv-toeslag","label":"BHV-toeslag bedrijfshulpverleners","amount":22.15,"unit":"perMaand","taxable":true,"note":"Art. 16 lid 7. Jaarlijks per 1 jan CPI-geindexeerd; 2025-bedrag."},
    {"id":"leermeestertoeslag","label":"Leermeestertoeslag","amount":15.49,"unit":"perMaand","taxable":true,"note":"Art. 16 lid 8. Jaarlijks per 1 jan CPI-geindexeerd; 2025-bedrag."},
    {"id":"thuiswerkvergoeding","label":"Thuiswerkvergoeding","amount":2.4,"unit":"perDag","taxable":false,"note":"Art. 16 lid 10; per gehele thuiswerkdag, geen cumulatie met reiskosten."},
  ],
};
