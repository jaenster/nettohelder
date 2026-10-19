import type { Cao } from '../types.js';

/**
 * CAO Kappersbedrijf (ANKO) Nederland 2026 2026. DRAFT from cao-pipeline (confidence: high).
 * Source: CAO voor het Kappersbedrijf 1 juli 2025 t/m 31 december 2026
 * https://fnvmooi.nl/wp-content/uploads/2025/09/CAO-Kappers-1-7-2025-31-12-2026.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loongebouw A nieuw per 1 nov 2025 schaal 1 (treden 0-2): 2452.23 / 2474.73 / 2497.23
 *   - Loongebouw A nieuw per 1 nov 2025 schaal 2 (treden 0-4): 2515.05 / 2542.55 / 2570.05 / 2597.55 / 2625.05
 *   - Loongebouw A nieuw per 1 nov 2025 schaal 3 (treden 0-6): 2602.00 / 2632.00 / 2662.00 / 2692.00 / 2722.00 / 2752.00 / 2782.00
 *   - Loongebouw A nieuw per 1 nov 2025 schaal 4 (treden 0-7): 2745.42 ... 2972.92
 *   - Per 1 juli 2026 schaal 4 trede 7: 3017.51 (+1,5%)
 *   - Volledige werkweek = 38 uur (art. 3.1)
 *   - Pensioenfonds = Stichting Bedrijfstakpensioenfonds voor het Kappersbedrijf -> niet in toegestane lijst, gemapt naar 'generiek'
 *   - Geen eindejaarsuitkering / 13e maand in deze CAO
 *
 * Excluded: Jeugdschalen 14-20 jaar (leeftijdsafhankelijke schalen); Loongebouw B (basissalarissen op 98% van A met variabel beloningssysteem; werkgeverskeuze); Overgangsregeling Haarstylist 3 fulltime maandlonen; Toeslagen en (maand)provisie; Loonschalen oude/huidige loongebouw per 1 juli 2025 (vervangen per 1 nov 2025)
 */
export const caoKappers2026: Cao = {
  id: 'kappers',
  name: "CAO Kappersbedrijf (ANKO) Nederland 2026",
  year: 2026,
  effectiveNote: "Loongebouw A (nieuwe loongebouw), bruto maandlonen bij voltijd 38 uur/week. Tabel in `salary` geldt per 1 november 2025 (nieuw loongebouw) en is van kracht op 1 januari 2026. Per 1 juli 2026 worden de loonschalen voor 21 jaar en ouder met +1,5% verhoogd (zie periods); jeugdschalen +0%. Bedragen zijn maandbedragen, niet omgerekend. Uitgesloten: jeugdschalen (14-20 jaar), Loongebouw B (basissalarissen op 98% met variabele beloning), overgangsregeling Haarstylist 3, toeslagen en provisie.",
  sourceUrl: "https://anko.nl/document/cao-voor-het-kappersbedrijf-1-juli-2025-31-december-2026/",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 38,
    schalen: {
      '1 Junior Haarstylist': [2452.23, 2474.73, 2497.23],
      '2 Haarstylist': [2515.05, 2542.55, 2570.05, 2597.55, 2625.05],
      '3 Haarstylist Allround/Haarwerker': [2602, 2632, 2662, 2692, 2722, 2752, 2782],
      '4 Topstylist/Haarwerkspecialist': [2745.42, 2777.92, 2810.42, 2842.92, 2875.42, 2907.92, 2940.42, 2972.92],
    },
  },
  periods: [
    {
      from: '2026-07-01',
      note: "+1,5% collectieve verhoging loonschalen 21 jaar en ouder (jeugdschalen +0%)",
      status: 'confirmed',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 38,
        schalen: {
          '1 Junior Haarstylist': [2489.01, 2511.85, 2534.69],
          '2 Haarstylist': [2552.78, 2580.69, 2608.6, 2636.51, 2664.43],
          '3 Haarstylist Allround/Haarwerker': [2641.03, 2671.48, 2701.93, 2732.38, 2762.83, 2793.28, 2823.73],
          '4 Topstylist/Haarwerkspecialist': [2786.6, 2819.59, 2852.58, 2885.56, 2918.55, 2951.54, 2984.53, 3017.51],
        },
      },
    },
  ],
  vergoedingen: [],
};
