import type { Cao } from '../types.js';

/**
 * Cao voor het Verzekeringsbedrijf 2025-2026 (binnendienst).
 * Looptijd: 1 januari 2025 t/m 30 juni 2026.
 *
 * Belangrijk: deze cao publiceert GEEN sectorbreed salarisgebouw. Artikel 3.1.1
 * verplicht elke onderneming een eigen functie-indelingssysteem te hanteren dat
 * de maximale beloning per functie bepaalt; de salarisschalen en -maxima
 * verschillen dus per werkgever en staan niet in de cao. De enige harde
 * cao-ondergrens is het minimumuurloon van € 16,00 bruto/uur (art. 3.2.2, per
 * 1-1-2025, niet geïndexeerd gedurende de looptijd). Bij een fulltime
 * arbeidsduur van 1976 uur/jaar (= gemiddeld 38 uur/week, art. 1.1) is dat een
 * vast jaarsalaris van € 31.616 → € 2.634,67 per maand.
 *
 * Daarom is hier één enkele 'band' gemodelleerd met de cao-bodem als minimum;
 * het maximum is per werkgever bepaald en niet in de cao vastgelegd.
 *
 * Salarisverhogingen in deze cao: +3% (1-1-2025), +2% (1-7-2025), +2% (1-1-2026).
 * Vakantietoeslag: 8% van het vast jaarsalaris (art. 3.4.1).
 * Jaarlijkse uitkering (art. 3.3): 1/12 van het vast jaarsalaris = 8,33%, maar
 * voorwaardelijk ("tenzij de bedrijfsresultaten dit naar het oordeel van de
 * werkgever niet toelaten") en verrekend met gratificatie/tantième/winstdeling.
 *
 * Pensioen: werkgevers brengen de regeling onder bij een eigen pensioenuitvoerder
 * (art. 5.1.4) — er is geen sectorfonds. Daarom pensioenfondsId 'generiek'.
 *
 * Bron: officiële cao-tekst Verbond van Verzekeraars, "Cao voor het
 * Verzekeringsbedrijf 2025-2026", art. 1.1, 3.1.1, 3.2.2, 3.3, 3.4.1, 5.1.4.
 */
export const caoVerzekeringsbedrijf2026: Cao = {
  id: 'verzekeringsbedrijf',
  name: 'Cao Verzekeringsbedrijf',
  year: 2026,
  effectiveNote:
    'Cao 2025-2026, looptijd t/m 30-6-2026; salarisniveau incl. verhoging +2% per 1-1-2026. LET OP: de cao kent geen sectorbreed salarisgebouw — elke werkgever stelt via een eigen indelingssysteem (art. 3.1.1) de salarisschalen en -maxima per functie vast. Enige cao-ondergrens is het minimumuurloon € 16,00/uur (art. 3.2.2), bij 1976 uur/jaar voltijd = € 2.634,67/maand. Het hier opgenomen "band"-niveau is uitsluitend deze cao-bodem; het maximum is werkgeverafhankelijk en niet in de cao vastgelegd (max gelijkgesteld aan min). Jaarlijkse uitkering (8,33%) is voorwaardelijk op bedrijfsresultaat.',
  sourceUrl:
    'https://www.verzekeraars.nl/media/chgfathc/cao-voor-het-verzekeringsbedrijf-2025-2026.pdf',
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: {
    kind: 'band',
    hoursPerWeek: 38,
    levelLabel: 'Functiegroep',
    unit: 'maand',
    defaultRsp: 1,
    levels: [{ id: 'cao-minimum', min: 2634.67, max: 2634.67 }],
  },
  vergoedingen: [],
};
