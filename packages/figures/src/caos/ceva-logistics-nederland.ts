import type { Cao } from '../types.js';

/**
 * Cao CEVA Logistics Nederland 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao CEVA Logistics Nederland
 * https://cao-kijker.awvn.nl/bestanden/2982_01-07-2026%20tot%2001-07-2027_akkoord.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8%, eindejaarsuitkering 0%
 *   - Voltijd 39.25 uur/week
 *   - Verhogingen na 1-1-2026: 2026-04-01 +€ 50/mnd collectieve verhoging; 2026-09-01 +€ 100/mnd collectieve verhoging
 *   - Pensioenfonds Beschikbare premieregeling CEVA → generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoCevaLogisticsNederland2026: Cao = {
  id: 'ceva-logistics-nederland',
  name: "Cao CEVA Logistics Nederland",
  year: 2026,
  effectiveNote: "Cao 2026-07-01 t/m 2027-06-30; geen loontabel bekend. Let op: Onderhandelingsresultaat 2-7-2026 (looptijd 1-7-2026 t/m 30-6-2027): EUR 100 bruto per maand (fulltime) per 1-9-2026 voor salarisschalen 2 t/m 7, ook boven RSP 100% Schalen 8 en 9: per 1-4-2027 schaalminima/-maxima +2,25% en merit-budget 2,25% van de loonsom; schalen 10 en 11: +2% en merit-budget 2%; geen minimale meritverhoging. Ook de EUR 50 per 1-4-2026 gold voor schalen 8-11 alleen voor de schaalgrenzen (individueel via merit) Eenmalige compensatie EUR 200 bruto (fulltime) bij de salarisbetaling van september 2026 voor schalen 2-7 (over juli en augustus); exacte datum niet bekend, daarom niet in oneOffPayments Pensioen (cao 2025-2026): eigen bijdrage 8% voor werknemers in dienst op of na 1-7-2013, 5% voor wie eerder in dienst kwam; franchise EUR 16.314 en maximum EUR 137.800 zijn 2025-bedragen. Per 1-1-2027 wordt de werknemersbijdrage met 2% verlaagd voor wie op 31-12-2026 in dienst is Normale arbeidsduur gemiddeld 39,25 uur per week (40 uur ingeroosterd met 40 ADV-uren per jaar) Jeugdlonen per 1-7-2026 afgeschaft; minimum schaal 2 = WML Salaristabellen (min/max per schaal) staan alleen als onleesbare afbeelding in de cao, daarom niet opgenomen",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/2982_01-07-2026%20tot%2001-07-2027_akkoord.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: { kind: 'own', unit: 'maand', hoursPerWeek: 39.25 },
  periods: [
    {
      from: '2026-04-01',
      note: "+€ 50/mnd collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', hoursPerWeek: 39.25, raises: [{ perMaand: 50 }] },
    },
    {
      from: '2026-09-01',
      note: "+€ 100/mnd collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', hoursPerWeek: 39.25, raises: [{ perMaand: 100 }] },
    },
  ],
  vergoedingen: [],
};
