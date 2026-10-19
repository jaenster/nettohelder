import type { Cao } from '../types.js';

/**
 * CAO Deutsche Bank (Nederland) 2026 salaris 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: CAO Banken 2025-2027 - Art. 6.9 Salarisschalen, Tabel 3.a (per 1 januari 2026), bestand Tabel_5
 * https://www.caobanken.nl/images/2025/Salaristabellen/Tabel_5_-_NVB_CAO-salaristabellen_2025-2027.jpg
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Whether Deutsche Bank's own kop-cao functiehuis amounts equal these published CAO Banken sector scales (art 6.9) or differ - DB has its own salary system per 6.5
 *   - All schaal x functiejaar monthly amounts (annual /12) transcribed from Tabel 5 / Tabel 3.a image: schalen 3 through 15
 *   - Schaal 10 jump between functiejaar 7 (57891.80/yr = 4824.32/mo) and functiejaar 8 (59939.47/yr = 4994.96/mo) - larger gap than other steps, verify against source
 *   - That eindejaarsuitkering = 0 (CAO Banken uses 12-month base, no standard 13th month)
 *   - pensioenfondsId 'generiek' - confirm Deutsche Bank Nederland's pension provider (likely company arrangement, not a sector fund)
 *   - vakantiegeld 8% for Deutsche Bank specifically
 *   - Whether there is a separate +x% verhoging later in 2026 in the DB kop-cao (sector CAO Banken only had +3.5% per 1-1-2026, already in this table)
 *
 * Excluded: Eenmalige uitkering bruto EUR 500 per 1 juli 2026; 7,5%-variant Tabel 3.b (werkgevers zonder eigen salarissysteem die beoordelingstoeslag omzetten); Bruto minimum(jeugd)loon / aanloopschalen (art. 6.10); Beoordelingstoeslagen (art. 6.16); Overige toeslagen en vergoedingen; Deutsche Bank-specifiek kop-cao functiehuis / eigen salarissysteem (art. 6.5)
 */
export const caoDeutscheBankCao2026: Cao = {
  id: 'deutsche-bank-cao',
  name: "CAO Deutsche Bank",
  year: 2026,
  effectiveNote: "Salarisschalen per 1 januari 2026 (na de structurele verhoging van +3,5% per 1-1-2026), gebaseerd op de officiele NVB CAO Banken-salaristabel 'Tabel 3.a / Tabel 5' bij een gemiddelde arbeidsduur van 36 uur per week. Brutobedragen zijn van jaarbasis (12 maanden) omgerekend naar MAAND (/12). Deutsche Bank Nederland valt onder de CAO Banken en kent daarbovenop een eigen kop-cao met een eigen functiehuis/salarissysteem; de hier opgenomen sector-salarisschalen (art. 6.9 CAO Banken) zijn de publiek gepubliceerde officiele bedragen, maar de interne DB-functiehuisbedragen kunnen hiervan afwijken. EXCLUDED: de eenmalige uitkering van bruto EUR 500 per 1 juli 2026, de 7,5%-variant (Tabel 3.b) voor werkgevers zonder eigen salarissysteem die de beoordelingstoeslag omzetten, bruto minimum(jeugd)loon/aanloopschalen, beoordelingstoeslagen, toeslagen en het DB-specifieke kop-cao functiehuis. Loopt t/m 31-12-2026; nieuwe onderhandelingen lopen.",
  sourceUrl: "https://www.caobanken.nl/nl/cao-banken/hoofdstuk-6-functie-en-belonen/6-9-salarisschalen",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'functiejaar',
    unit: 'maand',
    hoursPerWeek: 36,
    schalen: {
      '3': [2274.25, 2337, 2399.64, 2462.56, 2525.03, 2587.95],
      '4': [2247.93, 2315.57, 2383.2, 2450.84, 2518.77, 2586.52, 2653.98, 2721.96, 2789.6],
      '5': [2355.79, 2431.59, 2507.45, 2583.3, 2659.04, 2735.07, 2810.75, 2886.49, 2962.23, 3038.26, 3113.94],
      '6': [2459.17, 2544.4, 2629.22, 2714.38, 2799.26, 2884.13, 2969.13, 3054.23, 3138.88, 3224.1, 3308.93, 3394.89, 3480.61],
      '7': [2754.09, 2849.59, 2945.16, 3040.73, 3136.24, 3231.8, 3327.27, 3423.85, 3520.55, 3617.01, 3713.3, 3809.76, 3906.28],
      '8': [3090.78, 3198.47, 3305.99, 3414.51, 3523.1, 3631.87, 3740.46, 3849, 3957.76, 4066.3, 4174.95, 4283.6, 4392.26],
      '9': [3478.24, 3600.76, 3723.11, 3845.69, 3968.33, 4090.74, 4213.44, 4335.9, 4458.19, 4580.71, 4703.18, 4826.25, 4949.18],
      '10': [3981.45, 4126.37, 4268.98, 4402.76, 4543.28, 4683.68, 4824.32, 4994.96, 5104.58, 5244.45, 5384.2, 5523.78, 5663.71],
      '11': [4551.46, 4712.47, 4874.32, 5034.59, 5194.74, 5354.72, 5514.81, 5674.96, 5835.18, 5995.21, 6155.36, 6315.45, 6475.61],
      '12': [5287.18, 5473.36, 5659.66, 5845.84, 6032.08, 6222.09, 6400.04, 6590.68, 6776.74, 6963.04, 7149.04, 7335.34, 7521.46],
      '13': [6140.35, 6356.9, 6573.85, 6790.34, 7007.06, 7223.72, 7440.5, 7656.87, 7873.48, 8090.31, 8307.04, 8523.64, 8740.3],
      '14': [7193.48, 7447.77, 7702.13, 7956.72, 8210.84, 8465.31, 8719.49, 8974.02, 9228.26, 9493.65, 9736.97, 9991.56, 10245.92],
      '15': [8454.17, 8753.49, 9053.04, 9352.63, 9651.68, 9950.94, 10250.26, 10549.57, 10849.01, 11148.33, 11447.59, 11747.08, 12046.1],
    },
  },
  vergoedingen: [],
};
