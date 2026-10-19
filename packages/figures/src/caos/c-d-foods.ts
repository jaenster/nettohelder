import type { Cao } from '../types.js';

/**
 * Cao C&D Foods (Netherlands) B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao C&D Foods (Netherlands) B.V.
 * https://www.fnv.nl/getmedia/f11d3ea3-9384-4c73-b15e-a953d25dd287/451-c-d-foods-netherlands-b-v-cao-010426-310327-v180926.pdf?ext=.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-04-01 (month) uit de bron
 *   - Basistabel 1-1-2026 teruggerekend uit de tabel per 2026-04-01 (gedeeld door +3,1%)
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-04-01)
 *
 * Excluded: none stated
 */
export const caoCDFoods2026: Cao = {
  id: 'c-d-foods',
  name: "Cao C&D Foods (Netherlands) B.V.",
  year: 2026,
  effectiveNote: "Cao 2026-04-01 t/m 2027-03-31; loontabel per 2026-04-01. Let op: Salarisschalen per 1-4-2026 (incl. 3,1%) met alleen minimum en maximum per groep; hier als [min, max]. Jaarlijkse individuele verhoging van het schaalsalaris 1% tot 4% op basis van beoordeling Contractuele arbeidsduur 36 uur per week (dag-, 2-, 3- en 4-ploegendienst); 5-ploegendienst 33,6 uur; voormalige HAY-schalen dagdienst 37 uur met 2 uur ATV Vakantietoeslag 8% van het jaarinkomen, minimaal € 2.075,85 per jaar (vanaf 19 jaar), uitbetaald in mei Bonus (extra bruto uitkering) afhankelijk van het behalen van audits/GMP; niet opgenomen Pensioen bij Centraal Beheer Algemeen Pensioenfonds: werknemersbijdrage 4,69% van de pensioengrondslag, franchise 2026 € 19.172, maximum pensioengevend salaris 2026 € 137.800 Verhoging in 2025 (vorige cao) niet gevonden",
  sourceUrl: "https://www.fnv.nl/getmedia/f11d3ea3-9384-4c73-b15e-a953d25dd287/451-c-d-foods-netherlands-b-v-cao-010426-310327-v180926.pdf?ext=.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 36,
    schalen: {
      '1': [2343.36, 2737.15],
      '2': [2395.73, 2885.55],
      '3': [2486.91, 3048.5],
      '4': [2648.88, 3327.84],
      '5': [2935.98, 3701.26],
      '6': [3235.69, 4079.53],
      '7': [3410.28, 4458.78],
      '8': [3721.63, 4906.89],
      '9': [4009.7, 5293.89],
    },
  },
  periods: [
    {
      from: '2026-04-01',
      note: "+3,1% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 36,
        schalen: {
          '1': [2416, 2822],
          '2': [2470, 2975],
          '3': [2564, 3143],
          '4': [2731, 3431],
          '5': [3027, 3816],
          '6': [3336, 4206],
          '7': [3516, 4597],
          '8': [3837, 5059],
          '9': [4134, 5458],
        },
      },
    },
  ],
  vergoedingen: [],
};
