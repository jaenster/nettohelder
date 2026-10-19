import type { Cao } from '../types.js';

/**
 * Cao DHL eCommerce Nederland 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao DHL eCommerce Nederland
 * https://www.fnv.nl/getmedia/ccad6244-8ba1-4b8f-aa87-f737fc0a4658/1898-dhl-ecommerce-nederland-ecn-cao-01-01-2026-tm-31-12-2027-v04052026.pdf?ext=.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-03-01 (month) uit de bron
 *   - Basistabel 1-1-2026 teruggerekend uit de tabel per 2026-03-01 (gedeeld door +4%)
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-03-01, 2027-03-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoDhlEcommerceNederland2026: Cao = {
  id: 'dhl-ecommerce-nederland',
  name: "Cao DHL eCommerce Nederland",
  year: 2026,
  effectiveNote: "Cao 2026-01-01 t/m 2027-12-31; loontabel per 2026-03-01. Let op: Cao voor DHL eCommerce Netherlands (voorheen DHL Parcel), niet voor de pakketbezorgers (aparte cao DHL eCommerce Services) Eenmalig € 250 bruto in maart 2026 ter compensatie van januari en februari (voltijd, deeltijd naar rato) Loonschalen per 1-3-2026 met alleen minimum en maximum per functiegroep (niet rijdend 2 t/m 10, rijdend 5 en 6); hier als [min, max]. Jaarlijkse beoordelingsverhoging tot het maximum; vanaf 2026 ook eenmalige beoordelingsbeloning (€ 125 of € 200) bij (bijna) maximum Arbeidsduur bij volledig dienstverband 40 uur per week Vakantietoeslag 8%, uitbetaald in mei Pensioen bij Pensioenfonds Vervoer (tot maximum SV-loon); premieverdeling wordt jaarlijks door het fonds vastgesteld en staat niet in de cao. Boven het maximum SV-loon Pensioenstichting Transport met werknemerspremie 50% van de totale premie",
  sourceUrl: "https://www.fnv.nl/getmedia/ccad6244-8ba1-4b8f-aa87-f737fc0a4658/1898-dhl-ecommerce-nederland-ecn-cao-01-01-2026-tm-31-12-2027-v04052026.pdf?ext=.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      '2': [2461.1, 2716.93],
      '3': [2461.1, 2869.74],
      '4': [2461.1, 3123.93],
      '5': [2524.56, 3306.5],
      '6': [2663.24, 3570.99],
      '7': [2835.56, 3892.41],
      '8': [3052.71, 4281.63],
      '9': [3370.75, 4816.85],
      '10': [3805.88, 5539.39],
      '5 rijdend': [2461.1, 3379.86],
      '6 rijdend': [2533.12, 3515.05],
    },
  },
  periods: [
    {
      from: '2026-03-01',
      note: "+4% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          '2': [2559.54, 2825.61],
          '3': [2559.54, 2984.53],
          '4': [2559.54, 3248.89],
          '5': [2625.54, 3438.76],
          '6': [2769.77, 3713.83],
          '7': [2948.98, 4048.11],
          '8': [3174.82, 4452.9],
          '9': [3505.58, 5009.52],
          '10': [3958.12, 5760.97],
          '5 rijdend': [2559.54, 3515.05],
          '6 rijdend': [2634.44, 3655.65],
        },
      },
    },
    {
      from: '2027-03-01',
      note: "+3,5% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          '2': [2649.12, 2924.51],
          '3': [2649.12, 3088.99],
          '4': [2649.12, 3362.6],
          '5': [2717.43, 3559.12],
          '6': [2866.71, 3843.81],
          '7': [3052.19, 4189.79],
          '8': [3285.94, 4608.75],
          '9': [3628.28, 5184.85],
          '10': [4096.65, 5962.6],
          '5 rijdend': [2649.12, 3638.08],
          '6 rijdend': [2726.65, 3783.6],
        },
      },
    },
  ],
  vergoedingen: [],
};
