import type { Cao } from '../types.js';

/**
 * Cao CINOP 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao CINOP
 * https://cao-kijker.awvn.nl/recente-akkoorden/?search=cinop
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8%, eindejaarsuitkering 1,4%
 *   - Voltijd 37.5 uur/week
 *   - Verhogingen na 1-1-2026: 2026-04-01 +4% collectieve verhoging
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoCinop2026: Cao = {
  id: 'cinop',
  name: "Cao CINOP",
  year: 2026,
  effectiveNote: "Cao 2026-01-01 t/m 2026-12-31; geen loontabel bekend. Let op: Cao 2026 volgens onderhandelingsresultaat van 8 december 2025 (4% per 1-4-2026), bron AWVN cao-kijker; volledige tekst niet gevonden Vakantietoeslag 8%, vaste eindejaarsuitkering 1,4% van het bruto jaarsalaris en voltijd 37,5 uur volgens de cao 2022-2025 Jaarlijks één trede tot het maximum van de schaal; bij positief resultaat (gemiddeld ≥ 4% over drie jaar) extra structurele verhoging van 2% Salarisschalen in de cao 2022-2025 zijn verouderd; niet opgenomen Pensioen via ABP; eigen bijdrage niet in de cao vermeld",
  sourceUrl: "https://cao-kijker.awvn.nl/recente-akkoorden/?search=cinop",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.013999999999999999,
  salary: { kind: 'own', unit: 'maand', hoursPerWeek: 37.5 },
  periods: [
    {
      from: '2026-04-01',
      note: "+4% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', hoursPerWeek: 37.5, raises: [{ pct: 0.04 }] },
    },
  ],
  vergoedingen: [],
};
