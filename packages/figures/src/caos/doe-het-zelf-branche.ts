import type { Cao } from '../types.js';

/**
 * CAO Doe-het-zelf-branche 2026. DRAFT from cao-pipeline (confidence: high).
 * Source: CAO-lonen Doe-het-zelf-branche per 1 januari 2026 (versie d.d. 13 november 2025)
 * https://www.rndweb.nl/cms/files/2025-11/caolonen-dhz-per-1-januari-2026.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Schaal 1 maandbedrag 21+ = EUR 2.422,25 (dit is het WML 21+, geen functiejaren); schaal 1 jeugdbedragen bewust weggelaten
 *   - Schaal 6 functiejaren: 2689.01 / 2754.88 / 2819.10 / 2884.96 / 2949.18 / 3015.05 / 3079.27 / 3145.14 / 3209.36 (21 t/m functiejaar 8)
 *   - Schaal 5 loopt t/m functiejaar 8 (2912.96), schaal 4 t/m functiejaar 7 (2754.88), schaal 3 t/m functiejaar 5 (2621.50), schaal 2 t/m functiejaar 3 (2530.93) - onregelmatig grid
 *   - hoursPerWeek = 38 (art. 7.2.1 normale arbeidstijd fulltime 38 uur)
 *   - eindejaarsuitkering = 0: geen 13e maand/eindejaarsuitkering gevonden in CAO-tekst
 *   - pensioenfonds = Pensioenfonds Detailhandel (art. 8.10)
 *   - geen periods: CAO loopt t/m 30-6-2026, geen latere 2026-verhoging gepubliceerd binnen deze CAO
 *
 * Excluded: jeugdschalen 18/19/20 jaar (50/60/80% WML); uurloontabel en 4-wekentabel (alleen maandbedragen opgenomen); overwerktoeslag en bijzondere beloningen (toeslag 50% e.d., art. 8.1/8.2); studiekostenvergoeding (art. 8.6); eenmalige uitkeringen
 */
export const caoDoeHetZelfBranche2026: Cao = {
  id: 'doe-het-zelf-branche',
  name: "CAO Doe-het-zelf-branche",
  year: 2026,
  effectiveNote: "Loonschalen per 1 januari 2026 (versie RND d.d. 13 november 2025), bedragen per maand op basis van 38 uur/week. Schaal 1 = wettelijk minimumloon (21+, gebaseerd op WMUL per 1-1-2026, +2,16% t.o.v. juli 2025). Schalen 2 t/m 6 hebben per 1-1-2026 een 1% vergrote procentuele afstand tot schaal 1 (plus tredeverhoging 0,5% boven oud schaalmaximum). De CAO loopt t/m 30 juni 2026; tot die datum geen verdere collectieve verhoging gepubliceerd. UITGESLOTEN: jeugdschalen (18/19/20 jaar), uurloon-/4-wekentabellen, overwerk- en ploegentoeslagen, en eenmalige uitkeringen.",
  sourceUrl: "https://www.rndweb.nl/cms/files/2025-11/caolonen-dhz-per-1-januari-2026.pdf",
  pensioenfondsId: 'detailhandel',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'functiejaar',
    unit: 'maand',
    hoursPerWeek: 38,
    schalen: {
      '1': [2422.25],
      '2': [2471.65, 2491.41, 2511.17, 2530.93],
      '3': [2496.35, 2521.05, 2545.75, 2570.45, 2595.15, 2621.5],
      '4': [2544.1, 2573.74, 2603.38, 2634.67, 2664.31, 2693.95, 2723.59, 2754.88],
      '5': [2591.86, 2633.02, 2672.54, 2712.06, 2753.23, 2792.75, 2832.27, 2873.44, 2912.96],
      '6': [2689.01, 2754.88, 2819.1, 2884.96, 2949.18, 3015.05, 3079.27, 3145.14, 3209.36],
    },
  },
  vergoedingen: [
    {"id":"reiskosten-woon-werk","label":"Reiskostenvergoeding woon-werkverkeer","amount":0.18,"unit":"perKm","taxable":false,"note":"Minimaal EUR 0,18 per daadwerkelijk afgelegde kilometer, vanaf 10 km enkele reis (artikel 8.11). Maximum aantal km door werkgever te bepalen."},
  ],
};
