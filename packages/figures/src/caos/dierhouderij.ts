import type { Cao } from '../types.js';

/**
 * CAO Productiegerichte Dierhouderij 2026-2027 2026. DRAFT from cao-pipeline (confidence: high).
 * Source: Looncijfers cao Productiegerichte Dierhouderij per 1 januari 2026 (Werkgeverslijn)
 * https://werkgeverslijn.nl/wp-content/uploads/2026/01/Looncijfers-cao-Productiegerichte-Dierhouderij-per-1-januari-2026.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Schaal B 1e/2e functiejaar = 2431,56 (gelijk aan WML-startschaal)
 *   - Schaal C: 2431,56 / 2496,20 / 2585,90 / 2674,20 / 2764,20 / 2852,70
 *   - Schaal G 6e functiejaar = 3467,20 (hoogste bedrag)
 *   - Vakantietoeslag 8,25% (0,0825) i.p.v. de gangbare 8% - overgenomen uit CAO-tekst art. 4.5.1
 *   - Geen structurele eindejaarsuitkering / 13e maand in de CAO (eindejaarsuitkeringPct = 0) - geverifieerd dat de term alleen in een opsomming voorkomt, niet als toegekend recht
 *   - Reiskosten EUR 0,23 netto per km uit CAO-tekst 2024-2025 art. 4.6.4 - controleer of dit bedrag in 2026 nog actueel is
 *   - Pensioenfonds BPL voor de hele sector
 *
 * Excluded: jeugdschalen 15 t/m 20 jaar; WML-startschaal / startschaal (21 jaar tot AOW-leeftijd); uurlonen en weeklonen (alleen maandlonen overgenomen); prestatietoeslag op uurloon; tijdelijke toeslag hogere functie / vakkennis; persoonlijke toeslagen; meeruren- en deeltijdtoeslagregelingen; vakbondscontributievergoeding
 */
export const caoDierhouderij2026: Cao = {
  id: 'dierhouderij',
  name: "CAO Productiegerichte Dierhouderij 2026-2027",
  year: 2026,
  effectiveNote: "Maandlonen geldig per 1 januari 2026 (initiele verhoging van 4% over de loontabel per 1-1-2025). Looptijd CAO 1-1-2026 t/m 31-12-2027; volgende verhoging +3% per 1 januari 2027 (dus geen mid-year wijziging in 2026). Bedragen zijn de gepubliceerde maandlonen (volledige werkweek). Uitgesloten: jeugdschalen (15 t/m 20 jaar), de WML-startschaal/startschaal voor 21 jaar tot AOW-leeftijd, uur- en weeklonen, alle toeslagen (prestatietoeslag, tijdelijke toeslagen, persoonlijke toeslagen) en de meeruren-/deeltijdregelingen.",
  sourceUrl: "https://werkgeverslijn.nl/wp-content/uploads/2026/01/Looncijfers-cao-Productiegerichte-Dierhouderij-per-1-januari-2026.pdf",
  pensioenfondsId: 'bpl',
  vakantiegeldPct: 0.0825,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    hoursPerWeek: 38,
    stepLabel: 'functiejaar',
    unit: 'maand',
    schalen: {
      'B': [2431.56, 2431.56, 2448.2, 2553.7, 2658.7, 2764.2],
      'C': [2431.56, 2496.2, 2585.9, 2674.2, 2764.2, 2852.7],
      'D': [2694.2, 2774.2, 2853.6, 2934.1, 3012.4, 3091.5],
      'E': [2756.4, 2835.5, 2913.8, 2992.6, 3072, 3150.5],
      'F': [2817.9, 2894.9, 2973.9, 3050.7, 3129.6, 3207.7],
      'G': [3033.7, 3120.7, 3207, 3293.8, 3381.5, 3467.2],
    },
  },
  vergoedingen: [
    {"id":"reiskosten","label":"Reiskostenvergoeding woon-werkverkeer","amount":0.23,"unit":"perKm","taxable":false,"note":"EUR 0,23 netto per kilometer; geen dagmaximum sinds 1-1-2024. Bij dierverzorging/voederen/melken/transport geldt de vergoeding per dienst i.p.v. per dag."},
  ],
};
