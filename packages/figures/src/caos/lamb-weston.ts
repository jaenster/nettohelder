import type { Cao } from '../types.js';

/**
 * Cao Lamb Weston B.V.-bedrijven in Nederland 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Lamb Weston B.V.-bedrijven in Nederland
 * https://www.cnv.nl/voeding/voeding/cao-lwm-lamb-weston-meijer-vof/nieuws/cnv-leden-stemmen-alsnog-in-met-nieuwe-cao-lamb-weston-2026-09-07/
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8,33%, eindejaarsuitkering 0%
 *   - Voltijd 40 uur/week
 *   - Verhogingen na 1-1-2026: 2026-07-01 +€ 46/mnd + +1,5% collectieve verhoging
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoLambWeston2026: Cao = {
  id: 'lamb-weston',
  name: "Cao Lamb Weston B.V.-bedrijven in Nederland",
  year: 2026,
  effectiveNote: "Cao 2026-07-01 t/m 2027-06-30; geen loontabel bekend. Let op: Cao 1-7-2026 t/m 30-6-2027 volgens (aangepast) eindbod van Lamb Weston, aangenomen door FNV-leden (juli 2026) en CNV-leden (7 september 2026) Per 1-7-2026 eerst € 46 bruto per maand (fulltime) op salarissen en loonschalen, aansluitend 1,5%; gemiddeld circa 2,82% Vakantietoeslag 8,33% van het jaarinkomen, uitbetaald in mei Voltijd 40 uur per week; basissalaris dagdienst op 173,33 uur per maand, ploegendienst 164,67 uur per maand Salarisschalen (bijlage II, minimum en maximum per schaal) staan in de cao-PDF alleen als afbeelding; niet opgenomen. Groeistappen van 1,75% van het schaalmaximum per jaar Pensioen: beschikbare-premieregeling (uitvoering Nationale-Nederlanden), franchise € 19.172 (2026); de premie komt volledig voor rekening van de werkgever, dus geen werknemerspremie Reiskostenvergoeding 2026 tijdelijk € 0,25 per km; pilot generatiepact 80-90-100 voor Maintenance",
  sourceUrl: "https://www.cnv.nl/voeding/voeding/cao-lwm-lamb-weston-meijer-vof/nieuws/cnv-leden-stemmen-alsnog-in-met-nieuwe-cao-lamb-weston-2026-09-07/",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.0833,
  eindejaarsuitkeringPct: 0,
  salary: { kind: 'own', unit: 'maand', hoursPerWeek: 40 },
  periods: [
    {
      from: '2026-07-01',
      note: "+€ 46/mnd + +1,5% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', hoursPerWeek: 40, raises: [{ perMaand: 46 }, { pct: 0.015 }] },
    },
  ],
  vergoedingen: [],
};
