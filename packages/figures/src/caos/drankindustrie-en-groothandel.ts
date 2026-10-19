import type { Cao } from '../types.js';

/**
 * CAO Drankindustrie en -groothandel (Nederland) 2025-2026 2026. DRAFT from cao-pipeline (confidence: high).
 * Source: CAO drankindustrie en groothandel in dranken 2025-2026 - Bijlage II Salarisschalen
 * https://www.cnv.nl/documents/6273/Cao_Drankindustrie_en_groothandel_in_dranken_2025-2026.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Functiejarenschaal Groep I per 1-1-2026: 0 t/m 6 functiejaren = 2559.54, 2559.54, 2559.54, 2559.54, 2559.54, 2563.62, 2606.89
 *   - Functiejarenschaal Groep II per 1-1-2026: 2559.54, 2559.54, 2559.54, 2559.54, 2606.89, 2659.17, 2714.38
 *   - Functiejarenschaal Groep III per 1-1-2026 (0 t/m 8 functiejaren): 2559.54, 2559.54, 2581.68, 2639.33, 2700.37, 2764.66, 2832.73, 2900.77, 2969.00
 *   - Functiejarenschaal Groep IV per 1-1-2026 (0 t/m 9 functiejaren): 2559.54, 2594.21, 2594.21, 2728.47, 2802.45, 2878.10, 2953.80, 3029.54, 3105.26, 3180.95
 *   - Per 1-7-2026 Groep I: 2597.93 (x5), 2602.08, 2646.00
 *   - Per 1-7-2026 Groep IV (0-9 fj): 2597.93, 2633.12, 2633.12, 2769.40, 2844.49, 2921.27, 2998.11, 3074.98, 3151.84, 3228.67
 *   - hoursPerWeek=38 is een aanname; de CAO noemt geen expliciete standaard arbeidsduur in de gelezen sectie (toetsing op 261 werkbare dagen/jaar)
 *   - Pensioenfonds = Bpf detailhandel (sector ging per 1-1-2019 over van Bpf Dranken naar detailhandel)
 *   - Geen eindejaarsuitkering/13e maand aangetroffen in de CAO-tekst (daarom 0)
 *   - Tabel per 1-7-2026 wijkt af van de avv-versie (Staatscourant 2026, 26356): daar is de bodem 2608.26 i.p.v. 2597.93 (I fj0-5, II fj0-3, III fj0-1, IV fj0), IV fj2 2699.06 i.p.v. 2633.12, en centafwijkingen III fj4 2740.89 / III fj6 2875.21 / III fj8 3013.54 / II fj5 2699.06 / IV fj5 2921.26 / IV fj9 3228.66
 *
 * Excluded: Aanloopschaal (leeftijds-/jeugdschalen, max 17-20 jaar) voor Groep I-IV; Afwijkende GDH-/drankengroothandel-salarisschalen (Groep I t/m VI, ORBA 0-70 t/m 150-170); Wettelijk minimumloontoetsing (WML); Overwerktoeslag, ploegentoeslag en overige toeslagen; Stagevergoeding (EUR 400/maand fulltime); Eenmalige uitkeringen (o.a. EUR 300 financieel advies); Generatiepact-regeling; Tabel per 1 juli 2025 (valt buiten 2026)
 */
export const caoDrankindustrieEnGroothandel2026: Cao = {
  id: 'drankindustrie-en-groothandel',
  name: "CAO Drankindustrie en -groothandel",
  year: 2026,
  effectiveNote: "Bedragen per 1 januari 2026 (functiejarenschaal, Groep I t/m IV, bruto per maand) uit Bijlage II van de officiele CAO drankindustrie/groothandel in dranken 2025-2026. CAO-looptijd 1 juli 2025 t/m 30 juni 2026. Collectieve verhogingen: +1,5% per 1 juli 2025, +1,5% per 1 januari 2026, +1,5% per 1 juli 2026 (de per-1-juli-2026 tabel staat in periods en is direct uit de CAO overgenomen). De tabel per 1 juli 2026 moet nog getoetst worden aan het WML per 1 juli 2026. Uitgesloten: de aanloopschaal (leeftijds-/jeugdschalen, max 17-20 jaar), de afwijkende GDH-/drankengroothandel-salarisschalen (Groep I t/m VI met ORBA-indeling), wettelijk minimumloontoetsing, toeslagen (overwerk, ploegen), stagevergoeding en eenmalige uitkeringen.",
  sourceUrl: "https://www.cnv.nl/documents/6273/Cao_Drankindustrie_en_groothandel_in_dranken_2025-2026.pdf",
  pensioenfondsId: 'detailhandel',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'functiejaar',
    unit: 'maand',
    hoursPerWeek: 38,
    schalen: {
      'I': [2559.54, 2559.54, 2559.54, 2559.54, 2559.54, 2563.62, 2606.89],
      'II': [2559.54, 2559.54, 2559.54, 2559.54, 2606.89, 2659.17, 2714.38],
      'III': [2559.54, 2559.54, 2581.68, 2639.33, 2700.37, 2764.66, 2832.73, 2900.77, 2969],
      'IV': [2559.54, 2594.21, 2594.21, 2728.47, 2802.45, 2878.1, 2953.8, 3029.54, 3105.26, 3180.95],
    },
  },
  periods: [
    {
      from: '2026-07-01',
      note: "+1,5% collectieve verhoging (functiejarenschaal Groep I-IV per 1 juli 2026, direct uit CAO Bijlage II)",
      status: 'confirmed',
      salary: {
        kind: 'table',
        stepLabel: 'functiejaar',
        unit: 'maand',
        hoursPerWeek: 38,
        schalen: {
          'I': [2597.93, 2597.93, 2597.93, 2597.93, 2597.93, 2602.08, 2646],
          'II': [2597.93, 2597.93, 2597.93, 2597.93, 2646, 2699.05, 2755.09],
          'III': [2597.93, 2597.93, 2620.41, 2678.92, 2740.88, 2806.13, 2875.22, 2944.29, 3013.53],
          'IV': [2597.93, 2633.12, 2633.12, 2769.4, 2844.49, 2921.27, 2998.11, 3074.98, 3151.84, 3228.67],
        },
      },
    },
  ],
  vergoedingen: [
    {"id":"reiskosten-woon-werk","label":"Reiskostenvergoeding woon-werkverkeer","amount":0.2,"unit":"perKm","taxable":false,"note":"EUR 0,20 per km; alleen bij enkele reisafstand van ten minste 10 km en tot maximaal 30 km enkele reis; over de eerste 10 km geen vergoeding."},
  ],
};
