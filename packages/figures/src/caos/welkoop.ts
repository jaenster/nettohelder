import type { Cao } from '../types.js';

/**
 * CAO Welkoop (Nederland) 2026 2026. DRAFT from cao-pipeline (confidence: high).
 * Source: CAO Welkoop 1-1-2026 t/m 31-12-2026 (v14042026), Bijlage 2 Loonschalen
 * https://www.fnv.nl/getmedia/65fd2eab-34e2-4d3f-8b3e-ce79e0886745/1545-welkoop-cao-01-01-2026-tm-31-12-2026-v14042026.pdf?ext=.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Functiejaar-bedragen schaal 0 en 1 (EUR 2.431,56) zijn WML-gekoppeld en hangen af van het officiele WML per 1-1-2026
 *   - Of schaal 0 en 1 functiejaar 0 daadwerkelijk gelijk zijn (beide EUR 2.431,56 in de per-maand-tabel)
 *   - De volledige kolom-naar-trede toewijzing per functiegroep in beide tabellen (irregulier grid; groepen starten op verschillende functiejaren)
 *   - Het tweede verhogingspercentage per 1-7-2026 (1,50% voor schaal 4-9, 1,65% voor schaal 3-1 t/m 3-4) en de exacte WML-indexatie per 1-7-2026
 *   - Reiskostenvergoeding EUR 0,23/km met ondergrens 10 km en bovengrens 30 km enkele reis
 *   - Pensioenfonds: cao verwijst naar Bedrijfstakpensioenfonds voor de Detailhandel als terugvaloptie; controleer of Welkoop daadwerkelijk bij pf Detailhandel is aangesloten
 *
 * Excluded: Jeugd-/leeftijdschalen (Leeftijd 15 t/m 20 jaar) per functiegroep; Beoordelingsperiodieken (extra treden 1-3 boven het functiejarenmaximum); Uurloon-kolommen voor groep 0 en groep 1; De 'bedragen per 4 weken'-variant van de salaristabel (alleen de per-maand-tabel is overgenomen); WML-gekoppelde schalen waarvan het exacte 2026-bedrag afhangt van het officiele wettelijk minimumloon
 */
export const caoWelkoop2026: Cao = {
  id: 'welkoop',
  name: "CAO Welkoop",
  year: 2026,
  effectiveNote: "Salaristabel per maand op basis van een 38-urige werkweek, geldig vanaf 1 januari 2026 (looptijd cao 1-1-2026 t/m 31-12-2026). Per 1 juli 2026 een tweede verhoging (zie periods). Schaal 0, 1 en de laagste treden volgen het wettelijk minimumloon (WML); WML-indexatie per 1-1 en 1-7-2026 nog onder voorbehoud van officiele WML-bedragen. Dit record bevat alleen de Functiejaar-treden per functiegroep (de reguliere volwassenenschaal). UITGESLOTEN: jeugd-/leeftijdschalen (15-20 jaar), de beoordelingsperiodieken (extra treden boven het functiejarenmaximum), de uurloon-kolommen, en de 'bedragen per 4 weken'-variant van de tabel.",
  sourceUrl: "https://www.fnv.nl/cao-sector/handel/cao-welkoop",
  pensioenfondsId: 'detailhandel',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'functiejaar',
    unit: 'maand',
    hoursPerWeek: 38,
    schalen: {
      '0': [2431.56],
      '1': [2431.56],
      '2': [2469.09, 2491.16, 2538.5],
      '3': [2484.54, 2531.35, 2579.11, 2627.59, 2675.65],
      '4': [2533.59, 2596.99, 2661.44, 2728.1, 2793.06, 2858.41, 2924.64],
      '5': [2683.65, 2758.79, 2836.03, 2915.45, 2995.64, 3076.51, 3158.03, 3240.12],
      '6': [2938.62, 3017.94, 3099.42, 3180.03, 3259.51, 3341.02, 3421.19, 3499.89, 3578.64],
      '7': [3288.48, 3380.55, 3475.22, 3569.04, 3665.42, 3760.71, 3854.73, 3949.17, 4043.93],
      '8': [3765.33, 3882.03, 4002.35, 4122.43, 4246.12, 4369.25, 4491.59, 4612.84, 4737.41, 4862.96],
      '9': [4254.82, 4386.7, 4522.66, 4658.35, 4798.12, 4937.24, 5075.5, 5212.51, 5353.27, 5495.14],
    },
  },
  periods: [
    {
      from: '2026-07-01',
      note: "+1,50% per 1-7-2026 voor schaal 4 t/m 9 in de hoogste treden; schaal 3-1 t/m 3-4 +1,65%; schaal 0, 1, 2 en 3-0 volgen WML. Tabel per maand, 38-urige werkweek.",
      status: 'confirmed',
      salary: {
        kind: 'table',
        stepLabel: 'functiejaar',
        unit: 'maand',
        hoursPerWeek: 38,
        schalen: {
          '0': [2431.56],
          '1': [2431.56],
          '2': [2469.09, 2491.16, 2538.5],
          '3': [2484.54, 2573.12, 2621.67, 2670.95, 2719.8],
          '4': [2565.26, 2629.45, 2694.71, 2762.2, 2827.97, 2894.14, 2961.2],
          '5': [2717.2, 2793.27, 2871.48, 2951.89, 3033.09, 3114.97, 3197.51, 3280.62],
          '6': [2975.35, 3055.66, 3138.16, 3219.78, 3300.25, 3382.78, 3463.95, 3543.64, 3623.37],
          '7': [3329.59, 3422.81, 3518.66, 3613.65, 3711.24, 3807.72, 3902.91, 3998.53, 4094.48],
          '8': [3812.4, 3930.56, 4052.38, 4173.96, 4299.2, 4423.87, 4547.73, 4670.5, 4796.63, 4923.75],
          '9': [4308.01, 4441.53, 4579.19, 4716.58, 4858.1, 4998.96, 5138.94, 5277.67, 5420.19, 5563.83],
        },
      },
    },
  ],
  vergoedingen: [
    {"id":"reiskosten-woon-werk","label":"Reiskostenvergoeding woon-werkverkeer","amount":0.23,"unit":"perKm","taxable":false,"note":"EUR 0,23 fiscaal onbelast per werkdag, vanaf 10 km tot maximaal 30 km enkele reis (snelste route ANWB-routeplanner)."},
  ],
};
