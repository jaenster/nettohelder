import type { Cao } from '../types.js';

/**
 * CAO NS 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: CAO NS
 * https://www.fnv.nl/getmedia/7dce906b-5001-4bfc-9fcc-c72b242af88a/NS-Onderhandelingsresultaat-DEF.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8%, eindejaarsuitkering 0%
 *   - Voltijdsuren niet in de bron: 40 aangenomen
 *   - Verhogingen na 1-1-2026: 2026-03-01 +3,5% collectieve verhoging
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoNs2026: Cao = {
  id: 'ns',
  name: "CAO NS",
  year: 2026,
  effectiveNote: "Cao 2025-03-01 t/m 2027-02-28; geen loontabel bekend. Let op: Per 1 maart 2026: 3,5% voor salarisgroepen tot en met SG 59, 3% voor SG 60 en hoger Cao loopt tot 1 maart 2027; loonsverhoging daarna nog niet bekend SAV-tarieven (toeslagen) per 1 maart 2025 +4% en per 1 maart 2026 +3,5% Pensioen via Pensioenfonds Rail & OV; premie wordt jaarlijks door cao-partijen vastgesteld, werknemersdeel niet gevonden Vakantiegeldpercentage en eventuele eindejaarsuitkering niet geverifieerd; 8% is het wettelijk minimum Salaristabellen niet gevonden",
  sourceUrl: "https://www.fnv.nl/getmedia/7dce906b-5001-4bfc-9fcc-c72b242af88a/NS-Onderhandelingsresultaat-DEF.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: { kind: 'own', unit: 'maand' },
  periods: [
    {
      from: '2026-03-01',
      note: "+3,5% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', raises: [{ pct: 0.035 }] },
    },
  ],
  vergoedingen: [],
};
