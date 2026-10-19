import type { Cao } from '../types.js';

/**
 * CAO Horeca (KHN) Nederland loontabellen 2026 2026. DRAFT from cao-pipeline (confidence: high).
 * Source: Horeca-cao loontabel per 1 januari 2026 (KHN) - Lonen vakkrachten per maand o.b.v. 1976 uren per jaar (gemiddeld 38 uur per week)
 * https://static2.khn.nl/public/images/downloads/Loontabel-per-1-januari-20261.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - I+II 1-jan: basisloon 2.422,25 / periodiek 1 2.470,69 / eindloon 2.520,11
 *   - I+II 1-jul: basisloon 2.468,35 / periodiek 1 2.517,72 / eindloon 2.568,07
 *   - III 1-jul basisloon opgetrokken naar 2.468,35 (was 2.455,64 per 1-jan)
 *   - IV 1-jul basisloon opgetrokken naar 2.468,35 (was 2.462,64 per 1-jan)
 *   - IV eindloon 2.778,00 ligt zeer dicht bij periodiek 6 2.773,33 - controleren of dit klopt
 *   - VI heeft periodieken 1-9 daarna direct eindloon 3.289,31 (geen 10/11) - sprong van 3.161,59 naar 3.289,31 verifieren
 *   - VIII begint bij periodiek 11 (3.948,98); periodiek 12 leeg, eindloon 4.027,96
 *   - Kolomtoewijzing IX/X/XI verifieren - waarden komen uit beeld-OCR van de PDF, ronding op cent
 *   - Alle bedragen zijn maandlonen o.b.v. 38 uur/week (1976 uur/jaar); andere uurvarianten niet 1-op-1 proportioneel
 *
 * Excluded: Jeugdschalen (19 jaar 90%, 18 jaar 80% en jongere leeftijden); Leerlingen-/BBL-lonen; Uurloontabel en weekloontabel (alleen maandloon opgenomen); Toeslagen en het aparte uurloon-uitsplitsingsblok per functiegroep; Functiegroep I en II als aparte schalen (samengevoegd tot I+II conform de tabel)
 */
export const caoHoreca2026: Cao = {
  id: 'horeca',
  name: "CAO Horeca (KHN)",
  year: 2026,
  effectiveNote: "Loontabel 'Lonen vakkrachten per maand' o.b.v. 1976 uren per jaar (gemiddeld 38 uur per week), bruto per maand, geldend vanaf 1 januari 2026 (incl. de per 1-1-2026 afgesproken cao-verhoging van 2,5% en de WML-verhoging van 2,16%). Functiegroepen I en II zijn samengevoegd tot I+II met basisloon op WML-niveau. Per 1 juli 2026 stijgt het WML opnieuw; daardoor stijgt alleen functiegroep I+II (volledige schaal) en wordt het basisloon van III en IV opgetrokken naar het nieuwe WML-bedrag (zie periods) - de overige schalen blijven ongewijzigd. Schaalwaarden zijn oplopend: index 0 = basisloon (100% 20 jaar of ouder), daarna periodiek 1..N, laatste waarde = eindloon. EXCLUDED: jeugdschalen (19 jaar 90%, 18 jaar 80% en jonger), leerlingen/BBL-lonen, uurloon- en weekloontabellen (alleen maand opgenomen), toeslagen en het uurloon-uitsplitsing-blok.",
  sourceUrl: "https://khn.nl/kennis/loontabellen-per-1-januari-2026",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 38,
    schalen: {
      'I+II': [2422.25, 2470.69, 2520.11],
      'III': [2455.64, 2504.76, 2554.85, 2582.71],
      'IV': [2462.64, 2511.89, 2562.13, 2613.37, 2665.64, 2718.95, 2773.33, 2778],
      'V': [2505.04, 2555.14, 2606.25, 2658.37, 2711.54, 2765.77, 2821.09, 2877.51, 2935.06, 2993.76, 3032.79],
      'VI': [2645.47, 2698.38, 2752.35, 2807.4, 2863.55, 2920.82, 2979.23, 3038.82, 3099.59, 3161.59, 3289.31],
      'VII': [2900.5, 2958.51, 3017.68, 3078.03, 3139.59, 3202.38, 3266.43, 3331.76, 3398.39, 3466.36, 3535.69, 3606.4, 3678.53],
      'VIII': [3176.02, 3239.54, 3304.33, 3370.41, 3437.82, 3506.58, 3576.71, 3648.24, 3721.21, 3795.63, 3871.55, 3948.98, 4027.96],
      'IX': [3461.7, 3530.93, 3601.55, 3673.58, 3747.05, 3821.99, 3898.43, 3976.4, 4055.93, 4137.05, 4219.79, 4304.18, 4390.27, 4478.07],
      'X': [3773.21, 3848.67, 3925.65, 4004.16, 4084.24, 4165.93, 4249.24, 4334.23, 4420.91, 4509.33, 4599.52, 4691.51, 4785.34, 4881.05],
      'XI': [4112.83, 4195.09, 4278.99, 4364.57, 4451.86, 4540.9, 4631.72, 4724.35, 4818.84, 4915.21, 5013.52, 5113.79, 5216.06, 5320.39],
    },
  },
  periods: [
    {
      from: '2026-07-01',
      note: "WML-verhoging (I+II, III, IV)",
      status: 'confirmed',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 38,
        schalen: {
          'I+II': [2468.35, 2517.72, 2568.07],
          'III': [2468.35, 2504.76, 2554.85, 2582.71],
          'IV': [2468.35, 2511.89, 2562.13, 2613.37, 2665.64, 2718.95, 2773.33, 2778],
          'V': [2505.04, 2555.14, 2606.25, 2658.37, 2711.54, 2765.77, 2821.09, 2877.51, 2935.06, 2993.76, 3032.79],
          'VI': [2645.47, 2698.38, 2752.35, 2807.4, 2863.55, 2920.82, 2979.23, 3038.82, 3099.59, 3161.59, 3289.31],
          'VII': [2900.5, 2958.51, 3017.68, 3078.03, 3139.59, 3202.38, 3266.43, 3331.76, 3398.39, 3466.36, 3535.69, 3606.4, 3678.53],
          'VIII': [3176.02, 3239.54, 3304.33, 3370.41, 3437.82, 3506.58, 3576.71, 3648.24, 3721.21, 3795.63, 3871.55, 3948.98, 4027.96],
          'IX': [3461.7, 3530.93, 3601.55, 3673.58, 3747.05, 3821.99, 3898.43, 3976.4, 4055.93, 4137.05, 4219.79, 4304.18, 4390.27, 4478.07],
          'X': [3773.21, 3848.67, 3925.65, 4004.16, 4084.24, 4165.93, 4249.24, 4334.23, 4420.91, 4509.33, 4599.52, 4691.51, 4785.34, 4881.05],
          'XI': [4112.83, 4195.09, 4278.99, 4364.57, 4451.86, 4540.9, 4631.72, 4724.35, 4818.84, 4915.21, 5013.52, 5113.79, 5216.06, 5320.39],
        },
      },
    },
  ],
  vergoedingen: [],
};
