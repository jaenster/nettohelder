import type { Cao } from '../types.js';

/**
 * Cao Hoger Personeel Metalektro 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Hoger Personeel Metalektro
 * https://zoek.officielebekendmakingen.nl/stcrt-2026-14650.html
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8%, eindejaarsuitkering 0%
 *   - Voltijdsuren niet in de bron: 40 aangenomen
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoMetalektroHp2026: Cao = {
  id: 'metalektro-hp',
  name: "Cao Hoger Personeel Metalektro",
  year: 2026,
  effectiveNote: "Cao 2026-01-01 t/m 2026-12-31; geen loontabel bekend. Let op: Structurele verhoging per 1-1-2026: 2% plus € 43 bruto per maand (als twee verhogingen opgenomen); alleen als salaris plus vakantietoeslag op jaarbasis onder het grensbedrag van € 131.256 (per 1-1-2026) ligt Verhogingen 2025 (1-1-2025 3,25%, grensbedrag € 124.443; 1-6-2025 3%, grensbedrag € 128.176) uit de HP-cao 2024/2025 Eenmalige uitkering € 100 netto in november 2026 voor werknemers die op 1 november 2026 in dienst zijn (netto, niet in oneOffPayments) Geen salaristabel met bedragen: de HP-cao kent alleen salarisgroepen L t/m Q met ISF-puntenbereiken Arbeidsduur als jaarnorm (BJA 2026: 1.720 uur, 1.736 uur met seniorenregeling); vrije roosteruren kunnen tegen salaris worden geruild (0,383% per 8 uur) Looptijd: de cao Metalektro 2026 loopt van 1-1-2026 t/m 31-12-2026; AVV tot en met 31-12-2026. Per 1-1-2027 komt een aparte fondsen-cao Pensioen (PME) niet opgenomen: premie werknemer voor HP niet in de cao-tekst gevonden Geen eindejaarsuitkering in de cao",
  sourceUrl: "https://zoek.officielebekendmakingen.nl/stcrt-2026-14650.html",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: { kind: 'own', unit: 'maand' },
  vergoedingen: [],
};
