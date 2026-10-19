import type { Cao } from '../types.js';

/**
 * Cao DB Cargo Nederland N.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao DB Cargo Nederland N.V.
 * https://cao-kijker.awvn.nl/bestanden/3514_01-07-2026%20tot%2001-07-2028_akkoord.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8%, eindejaarsuitkering 6,5%
 *   - Voltijd 36 uur/week
 *   - Verhogingen na 1-1-2026: 2026-07-01 +2,4% collectieve verhoging; 2027-07-01 +2,3% collectieve verhoging
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoDbCargoNederland2026: Cao = {
  id: 'db-cargo-nederland',
  name: "Cao DB Cargo Nederland N.V.",
  year: 2026,
  effectiveNote: "Cao 2026-07-01 t/m 2028-06-30; geen loontabel bekend. Let op: Decemberuitkering 6,5% van het maandinkomen; per 1-1-2027 verhoogd met 0,2% (6,7%) en per 1-1-2028 met 0,2% (6,9%) Eenmalige onkostenvergoeding € 50 netto in juli 2026 Voltijd gemiddeld 36 uur per week (uitbreiding tot 40 uur mogelijk) Pensioen via Pensioenfonds Rail & Openbaar Vervoer: totale premie 27,0% van de grondslag (vanaf 2024), waarvan 1/3 voor de werknemer; franchise gelijk aan het maximum dagloon WIA; premiepad NS wordt gevolgd. Niet als pensioenveld opgenomen omdat de actuele premie/franchise niet bevestigd is Salaristabellen staan als afbeelding in de cao 2024-2026; niet opgenomen",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/3514_01-07-2026%20tot%2001-07-2028_akkoord.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.065,
  salary: { kind: 'own', unit: 'maand', hoursPerWeek: 36 },
  periods: [
    {
      from: '2026-07-01',
      note: "+2,4% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', hoursPerWeek: 36, raises: [{ pct: 0.024 }] },
    },
    {
      from: '2027-07-01',
      note: "+2,3% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', hoursPerWeek: 36, raises: [{ pct: 0.023 }] },
    },
  ],
  vergoedingen: [],
};
