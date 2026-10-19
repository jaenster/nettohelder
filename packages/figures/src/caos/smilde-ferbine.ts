import type { Cao } from '../types.js';

/**
 * Cao Smilde Ferbine 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Smilde Ferbine
 * https://www.cnv.nl/voeding/voeding/cao-smilde-ferbine/nieuws/stem-over-je-nieuwe-cao-smilde-ferbine-2026-07-20/
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8%, eindejaarsuitkering 3%
 *   - Voltijd 40 uur/week
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoSmildeFerbine2026: Cao = {
  id: 'smilde-ferbine',
  name: "Cao Smilde Ferbine",
  year: 2026,
  effectiveNote: "Cao 2026-07-01 t/m 2027-06-30; geen loontabel bekend. Let op: Cao 1-7-2026 t/m 30-6-2027 (onderhandelingsresultaat juli 2026, door leden aanvaard september 2026): loonschalen +2,5% voor iedereen; ingangsdatum niet expliciet vermeld, hier 1-7-2026 (start looptijd) aangenomen Daarnaast structureel € 50 bruto per maand (naar rato bij deeltijd) voor de schalen t/m J en t/m 10 (lagere loonschalen), bovenop de 2,5%; niet als algemene verhoging opgenomen Collectieve verhoging 2025-2026 (cao 1-7-2025 t/m 30-6-2026) niet gevonden Salarisschalen staan niet in de cao (beschikbaar via Mijn Smilde/HRM). Individuele verhoging (periodiek) jaarlijks Vakantietoeslag 8% (mei); eindejaarsuitkering 3% van het jaarsalaris Gemiddelde arbeidsduur 40 uur per week Pensioen: beschikbare premieregeling bij Allianz, medewerkersbijdrage 7,9% van de pensioengrondslag; franchise 100/75 van de AOW voor gehuwden (bedrag niet vermeld). Nieuwe pensioenregeling per 1-1-2028 Reiskostenvergoeding per 1-1-2026 € 0,25 per km (vanaf 5 km) Loonsverhoging van 2,5% in deze cao; ingangsdatum niet in de bron vermeld, daarom niet in de berekening",
  sourceUrl: "https://www.cnv.nl/voeding/voeding/cao-smilde-ferbine/nieuws/stem-over-je-nieuwe-cao-smilde-ferbine-2026-07-20/",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.03,
  salary: { kind: 'own', unit: 'maand', hoursPerWeek: 40 },
  vergoedingen: [],
};
