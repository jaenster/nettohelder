import type { Cao } from '../types.js';

/**
 * CAO Houthandel (Nederland) 2026 2026. DRAFT from cao-pipeline (confidence: high).
 * Source: CAO voor de Houthandel 2025-2027, artikel 4.6 Loontabel - Salaristabel per 1 januari 2026
 * https://www.vvnh.nl/system/files/Cao_Houthandel_2025-2027.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Functiegroep 5 trede 1 = 2943 (grote sprong t.o.v. startregel 2714 — geverifieerd uit PDF maar opvallend)
 *   - Functiegroep 8 heeft geen startregel; begint bij trede 1 = 3700 t/m trede 8 = 4432
 *   - Onregelmatig grid: elke functiegroep beslaat een ander aantal tredes (groep 1 = 4 waarden, groep 8 = 8 waarden)
 *   - Salary table assumes 40 uur met 23 roostervrije dagen; andere roostervarianten vereisen vermenigvuldigingsfactor
 *   - pensioenfondsId gezet op 'generiek' want het sectorfonds is OAK Pensioen (voorheen bpf Houthandel, gefuseerd met Meubel) en staat niet in de toegestane sluglijst
 *
 * Excluded: Jeugdlonen / instroomschalen voor 16-20 jaar (Tabel 2 t/m 5); Toeslagen (o.a. ploegentoeslag EUR 27,96 / EUR 15,39 per maand vanaf 1-1-2026); Eenmalige uitkering bruto EUR 500 in november 2026 (naar rato dienstverband); Reiskostenvergoeding woon-werk en EUR 0,23/km voor reis naar bedrijfsarts; Omrekenfactoren voor 11 roostervrije dagen (x1,046152) en 0 roostervrije dagen (x1,088458)
 */
export const caoHouthandel2026: Cao = {
  id: 'houthandel',
  name: "CAO Houthandel",
  year: 2026,
  effectiveNote: "Salaristabel per 1 januari 2026 (na +2,5% verhoging per 1-1-2026), Tabel 1 voor een 40-urige werkweek met 23 roostervrije dagen, maandbedragen bruto. Tabel is stabiel heel 2026; volgende verhoging is +1,5% per 1 januari 2027. Voor 40 uur met 11 roostervrije dagen: bedragen x1,046152; met 0 roostervrije dagen: x1,088458. Uitgesloten: alle jeugdlonen/instroomschalen (16-20 jaar, Tabel 2-5), toeslagen (o.a. ploegentoeslag), eenmalige uitkering van bruto EUR 500 in november 2026, en reiskosten/overige vergoedingen.",
  sourceUrl: "https://www.vvnh.nl/cao-houthandel-0",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      '1': [2633, 2633, 2651, 2684],
      '2': [2633, 2651, 2684, 2718, 2750],
      '3': [2651, 2684, 2718, 2750, 2786, 2820],
      '4': [2690, 2761, 2793, 2828, 2861, 2892, 2949],
      '5': [2714, 2943, 2968, 3005, 3035, 3071, 3102, 3162],
      '6': [3015, 3229, 3267, 3303, 3333, 3369, 3409, 3478],
      '7': [3389, 3594, 3643, 3675, 3721, 3762, 3801, 3904],
      '8': [3700, 3799, 3904, 4005, 4107, 4208, 4309, 4432],
    },
  },
  vergoedingen: [],
};
