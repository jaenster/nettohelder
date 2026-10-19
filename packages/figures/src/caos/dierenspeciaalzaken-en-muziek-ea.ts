import type { Cao } from '../types.js';

/**
 * CAO Dierenspeciaalzaken (Dibevo NPMB-VMN) 2026-2027 2026. DRAFT from cao-pipeline (confidence: high).
 * Source: CAO Dierenspeciaalzaken (Dibevo NPMB-VMN) 2026-2027 - cao-boekje, Bijlage 1A Loontabellen
 * https://dibevo.nl/files/uploads/docs/Cao-Dibevo-2026-2027.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - De per-1-jan-2026 schaalbedragen zijn gebaseerd op 2,65% en worden op 1 april 2026 gecorrigeerd naar definitieve CBS-indexcijfers; verifieer of de bedragen nadien zijn aangepast
 *   - Of het maandloon inderdaad uitgaat van een 38-urige werkweek (art. 5 lid 3 noemt 38 uur in de berekeningsvoorbeelden)
 *   - Of Groep III tot functiejaar 4 loopt en Groep II slechts tot functiejaar 3 (onregelmatig grid, kolom-voor-kolom getranscribeerd)
 *   - Of de overlappende beginbedragen tussen groepen (bv Groep III fj0 = Groep II fj1) correct zijn
 *
 * Excluded: Groep I (volledig wettelijk minimum(jeugd)loon, geen vaste schaalbedragen); jeugdschalen / 'tot 21 jaar' rijen (Wm(j)l); uurloontabellen (alleen maandloon opgenomen); toeslag bijzondere uren (50%/100%); overwerktoeslag (25%/50%); plaatsvervangingstoeslag (15%); opleidingsbudget EUR 225/jaar
 */
export const caoDierenspeciaalzakenEnMuziekEa2026: Cao = {
  id: 'dierenspeciaalzaken-en-muziek-ea',
  name: "CAO Dierenspeciaalzaken (Dibevo NPMB-VMN) 2026-2027",
  year: 2026,
  effectiveNote: "Maandloontabel (per maand, gebaseerd op 38-uur werkweek, art. 5 lid 3) effectief vanaf 1 januari 2026, transcribed direct uit het officiele cao-boekje Dibevo NPMB-VMN 2026-2027 (Bijlage 1A Loontabellen, p.15-16). De per-1-jan-2026 bedragen bevatten de loonsverhoging van 2,65%; dit percentage wordt op 1 april 2026 gecorrigeerd zodra de definitieve CBS-indexcijfers (inflatie + omzetontwikkeling) bekend zijn, dus de exacte bedragen kunnen marginaal wijzigen. Per 1 juli 2026 stijgen de schaalbedragen nog eens met 1,5% (tweede tabel, in periods). EXCLUDED: Groep I (volledig wettelijk minimum(jeugd)loon, geen vaste schaalbedragen), de jeugdschalen / 'tot 21 jaar' rijen (allemaal Wm(j)l), de uurloontabellen (alleen maandloon opgenomen), toeslagen voor bijzondere uren/overwerk/plaatsvervanging, maaltijdvergoeding, reiskostenvergoeding en opleidingsbudget. De uitloopschaalbedragen zijn de 2 hoogste functiejaren per groep en zijn reeds in de tabel opgenomen.",
  sourceUrl: "https://dibevo.nl/kenniscentrum/cao-voor-dierenspeciaalzaken",
  pensioenfondsId: 'detailhandel',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'functiejaar',
    unit: 'maand',
    hoursPerWeek: 38,
    schalen: {
      'II': [2438.18, 2472.89, 2505.95, 2540.66],
      'III': [2472.89, 2505.95, 2540.66, 2575.37, 2610.09],
      'IV': [2540.66, 2591.9, 2643.15, 2694.39, 2745.63],
      'V': [2610.09, 2661.33, 2710.92, 2762.16, 2813.41, 2864.65],
      'VI': [2661.33, 2729.1, 2796.88, 2864.65, 2934.08, 3001.85],
    },
  },
  periods: [
    {
      from: '2026-07-01',
      note: "+1,5% collectieve verhoging",
      status: 'confirmed',
      salary: {
        kind: 'table',
        stepLabel: 'functiejaar',
        unit: 'maand',
        hoursPerWeek: 38,
        schalen: {
          'II': [2474.54, 2509.25, 2543.97, 2578.68],
          'III': [2509.25, 2543.97, 2578.68, 2613.39, 2649.76],
          'IV': [2578.68, 2631.58, 2682.82, 2734.06, 2786.96],
          'V': [2649.76, 2701, 2752.25, 2803.49, 2856.38, 2907.63],
          'VI': [2701, 2770.43, 2838.2, 2907.63, 2978.71, 3046.48],
        },
      },
    },
  ],
  vergoedingen: [
    {"id":"reiskosten","label":"Reiskostenvergoeding woon-werkverkeer","amount":0.23,"unit":"perKm","taxable":false,"note":"Fiscaal vrijgesteld tarief 2026; alleen vanaf 10 km enkele reis, eerste 10 km onvergoed."},
    {"id":"maaltijdvergoeding","label":"Maaltijdvergoeding bij avondwerk","amount":8,"unit":"perDag","taxable":false,"note":"Max EUR 8 per keer, op basis van BTW-bon, indien werkdag begint voor 13:00 en doorloopt na 19:00 en werkgever geen maaltijd verstrekt."},
  ],
};
