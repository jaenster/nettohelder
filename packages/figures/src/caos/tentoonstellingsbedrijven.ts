import type { Cao } from '../types.js';

/**
 * CAO Tentoonstellingsbedrijven 2026. DRAFT from cao-pipeline (confidence: high).
 * Source: CAO Tentoonstellingsbedrijven - loongebouw 'Per 1 mei 2025' (geldig per 1-1-2026) en loongebouw per 1 juli 2026
 * https://www.fnv.nl/getmedia/2dc50f18-053c-46c3-8cf2-59925239d66c/387-tentoonstellingsbedrijven-cao-2022-2023-v130522.pdf?ext=.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Salarisgroep 1 trede 1 (en mogelijk trede 2): tabelwaarde EUR 2.399,92 ligt rond het wettelijk minimumloon; per 1-1-2026 administratief verhoogd naar WML, dus werkelijk beginsalaris kan hoger zijn dan de tabel aangeeft
 *   - Het 1-jan-2026 loongebouw is overgenomen uit de cao-PDF onder kopje 'Per 1 mei 2025'; bevestig dat tussen 1-5-2025 en 1-1-2026 geen extra wijziging plaatsvond
 *   - 1-juli-2026 tabel is rechtstreeks afgelezen uit een afbeelding (CLC-VECTA); controleer enkele bedragen, m.n. salarisgroep 2 trede 1 = EUR 2.477,85 (gelijk aan groep 1 trede 1)
 *   - hoursPerWeek = 38 (normale arbeidsduur; ondernemingen mogen tot 40 uur afspreken). Loonwijzer publiceert ook een 39-uurs variant
 *   - Vergoedingen (gereedschap/werkkleding/BHV) gelden per 1 juli 2026 per gewerkte dag; de 1-1-2026 bedragen kunnen iets lager zijn
 *   - Geen eindejaarsuitkering gevonden in cao-tekst (bevestig)
 *
 * Excluded: +1% collectieve verhoging per 1 januari 2027 (buiten 2026); oud loongebouw 'tot 1 mei 2025'; eenmalige uitkering EUR 520 (november 2025); overwerk-, ploegen-, zaterdag-, zon- en feestdagtoeslagen; jeugd-/aanloopbepalingen indien van toepassing; eindejaarsuitkering (bestaat niet in deze cao)
 */
export const caoTentoonstellingsbedrijven2026: Cao = {
  id: 'tentoonstellingsbedrijven',
  name: "CAO Tentoonstellingsbedrijven",
  year: 2026,
  effectiveNote: "Salaristabel zoals geldig per 1 januari 2026 = het loongebouw 'Per 1 mei 2025' uit de cao (maandbedragen berekend op basis van een normale arbeidsduur van gemiddeld 38 uur per week). Per 1 juli 2026 een collectieve verhoging van +2% (apart opgenomen in periods, rechtstreeks afgelezen uit de officiele CLC-VECTA loongebouw-afbeelding). Onzeker punt: trede 1 van salarisgroep 1 ligt op/onder het wettelijk minimumloon en wordt per 1-1-2026 administratief opgehoogd naar het WML, waardoor het werkelijke beginsalaris in groep 1 hoger kan liggen dan de tabelwaarde. Uitgesloten: de +1% verhoging per 1 januari 2027 (valt buiten 2026), het oude loongebouw 'tot 1 mei 2025', de eenmalige uitkering van EUR 520 (nov 2025), toeslagen voor overwerk/ploegen/zaterdag/zon- en feestdagen, en eventuele jeugd-/aanloopbepalingen. Geen eindejaarsuitkering in deze cao.",
  sourceUrl: "https://www.clcvecta.nl/werk-opleiding/caotentoonstellingsbedrijven/salarisschalen,-loongebouw-vergoedingen",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.0833,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 38,
    schalen: {
      '1': [2399.92, 2402.73, 2452.37, 2503.2, 2547.44],
      '2': [2404.23, 2450.38, 2501.12, 2542.71, 2595.84, 2650.27, 2695.64],
      '3': [2437.33, 2487.81, 2539.52, 2592.57, 2646.88, 2691.4, 2748.51, 2807.42, 2867.83],
      '4': [2526.13, 2578.82, 2632.83, 2688.18, 2745.14, 2803.96, 2852.18, 2913.77, 2976.78, 3041.44],
      '5': [2673.37, 2729.79, 2788.25, 2848.21, 2909.6, 2972.58, 3024.17, 3090.01, 3157.45, 3226.63, 3297.48],
      '6': [2832.65, 2893.66, 2956.22, 3020.38, 3072.9, 3139.92, 3208.65, 3279.09, 3351.31, 3425.29, 3501.1],
      '7': [3003.35, 3068.68, 3135.46, 3204.22, 3260.41, 3332.15, 3405.7, 3481.03, 3558.31, 3637.47, 3718.65, 3801.85],
      '8': [3172.81, 3242.38, 3313.66, 3386.72, 3461.59, 3538.34, 3617.04, 3697.7, 3780.38, 3865.12, 3951.95, 4040.98, 4132.24],
      '9': [3367.43, 3441.84, 3518.1, 3596.31, 3676.44, 3758.57, 3842.73, 3929.03, 4017.5, 4108.13, 4201.1, 4296.33, 4393.94, 4494.05],
      '10': [3575.93, 3655.59, 3737.18, 3820.85, 3906.57, 3994.49, 4084.55, 4176.88, 4271.58, 4368.6, 4467.99, 4569.94, 4674.41, 4781.51],
      '11': [3798.37, 3883.57, 3970.9, 4060.35, 4152.1, 4246.1, 4342.53, 4441.29, 4542.54, 4646.34, 4752.7, 4861.74, 4973.51, 5088.06, 5226.95],
      '12': [4037.02, 4128.16, 4221.58, 4317.37, 4415.51, 4516.11, 4619.23, 4724.94, 4833.32, 4944.37, 5058.18, 5174.84, 5294.46, 5414.9, 5538.22, 5706.33],
    },
  },
  periods: [
    {
      from: '2026-07-01',
      note: "+2% collectieve verhoging (loongebouw rechtstreeks afgelezen uit officiele CLC-VECTA afbeelding)",
      status: 'confirmed',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 38,
        schalen: {
          '1': [2477.85, 2501.42, 2553.26, 2598.39],
          '2': [2477.85, 2499.39, 2551.14, 2593.56, 2647.76, 2703.28, 2749.55],
          '3': [2486.07, 2537.56, 2590.31, 2644.42, 2699.81, 2745.23, 2803.48, 2863.56, 2925.19],
          '4': [2576.65, 2630.39, 2685.48, 2741.94, 2800.04, 2860.03, 2909.22, 2972.04, 3036.32, 3102.27],
          '5': [2726.84, 2784.39, 2844.01, 2905.18, 2967.79, 3032.03, 3084.65, 3151.81, 3220.6, 3291.17, 3363.43],
          '6': [2889.3, 2951.54, 3015.34, 3080.79, 3134.36, 3202.72, 3272.82, 3344.68, 3418.34, 3493.8, 3571.13],
          '7': [3063.41, 3130.06, 3198.17, 3268.3, 3325.62, 3398.79, 3473.81, 3550.65, 3629.48, 3710.22, 3793.02, 3877.88],
          '8': [3236.27, 3307.23, 3379.93, 3454.46, 3530.82, 3609.11, 3689.38, 3771.65, 3855.99, 3942.42, 4030.99, 4121.8, 4214.88],
          '9': [3434.78, 3510.68, 3588.46, 3668.23, 3749.96, 3833.74, 3919.58, 4007.61, 4097.85, 4190.3, 4285.12, 4382.26, 4481.82, 4583.93],
          '10': [3647.45, 3728.7, 3811.93, 3897.27, 3984.7, 4074.37, 4166.24, 4260.42, 4357.01, 4455.97, 4557.35, 4661.34, 4767.9, 4877.14],
          '11': [3874.34, 3961.24, 4050.32, 4141.56, 4235.14, 4331.02, 4429.38, 4530.11, 4633.39, 4739.27, 4847.76, 4958.98, 5072.98, 5189.82, 5331.49],
          '12': [4117.76, 4210.72, 4306.01, 4403.72, 4503.82, 4606.43, 4711.62, 4819.44, 4929.98, 5043.25, 5159.34, 5278.33, 5400.35, 5523.2, 5648.98, 5820.45],
        },
      },
    },
  ],
  vergoedingen: [
    {"id":"gereedschap-timmerlieden","label":"Gereedschapsvergoeding timmerlieden","amount":6.58,"unit":"perDag","taxable":false,"note":"per gewerkte dag, geldig vanaf 1 juli 2026 (CPI +2,8%)"},
    {"id":"gereedschap-schilders-atelier","label":"Gereedschapsvergoeding schilders/atelierpersoneel","amount":2.93,"unit":"perDag","taxable":false,"note":"per gewerkte dag, geldig vanaf 1 juli 2026 (CPI +2,8%)"},
    {"id":"werkkleding","label":"Werkkledingvergoeding","amount":4.41,"unit":"perDag","taxable":false,"note":"per gewerkte dag, geldig vanaf 1 juli 2026 (CPI +2,8%)"},
    {"id":"bhv","label":"BHV-vergoeding","amount":5.97,"unit":"perDag","taxable":false,"note":"per gewerkte dag, geldig vanaf 1 juli 2026 (CPI +2,8%)"},
  ],
};
