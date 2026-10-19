import type { Cao } from '../types.js';

/**
 * Cao Organon Nederland 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Organon Nederland
 * https://cao-kijker.awvn.nl/bestanden/4289_01-01-2026%20tot%2001-01-2027_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8%, eindejaarsuitkering 3%
 *   - Voltijd 40 uur/week
 *   - Verhogingen na 1-1-2026: 2026-04-01 +3% collectieve verhoging
 *   - Pensioenfonds PGB → generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoOrganonNederland2026: Cao = {
  id: 'organon-nederland',
  name: "Cao Organon Nederland",
  year: 2026,
  effectiveNote: "Cao 2026-01-01 t/m 2026-12-31; geen loontabel bekend. Let op: Cao 2026 (1-1-2026 t/m 31-12-2026) tussen Organon en FNV/VHP2 Verhoging per 1-4-2026: 3%, maar 4% voor medewerkers in het eerste derde deel van hun schaal (onder 0,921 PIR) Salarisschalen A t/m M staan alleen als jaarbedragen (minimum/midpoint/maximum, per 1-1-2025); niet opgenomen omdat er geen jaar-eenheid is Eindejaarsuitkering 3% van 12 x het maandsalaris per 1 november (ook over ploegentoeslag) Jaarlijkse bonus (doelpercentage 5%, 7% of 10% afhankelijk van band 200/300/400), afhankelijk van wereldwijde Organon-prestaties; niet opgenomen Pensioen PGB middelloon: werknemerspremie 5,2% (5% over ploegentoeslag); pensioengrondslag = jaarinkomen incl. vakantiegeld, eindejaarsuitkering en ploegentoeslag (max. € 137.800 in 2026) min franchise € 19.172 (2026). Nieuwe regeling (Wtp) beoogd per 1-1-2027",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/4289_01-01-2026%20tot%2001-01-2027_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.03,
  salary: { kind: 'own', unit: 'maand', hoursPerWeek: 40 },
  periods: [
    {
      from: '2026-04-01',
      note: "+3% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', hoursPerWeek: 40, raises: [{ pct: 0.03 }] },
    },
  ],
  vergoedingen: [],
};
