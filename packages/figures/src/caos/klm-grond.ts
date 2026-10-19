import type { Cao } from '../types.js';

/**
 * Cao KLM Grondpersoneel 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao KLM Grondpersoneel
 * https://www.cnv.nl/nieuws/uitweg-uit-impasse-klm-grondmedewerkers-zien-acties-beloond/
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8%, eindejaarsuitkering 8,33%
 *   - Voltijdsuren niet in de bron: 40 aangenomen
 *   - Verhogingen na 1-1-2026: 2026-07-01 +1,25% collectieve verhoging; 2027-01-01 +1% collectieve verhoging
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoKlmGrond2026: Cao = {
  id: 'klm-grond',
  name: "Cao KLM Grondpersoneel",
  year: 2026,
  effectiveNote: "Cao 2025-03-01 t/m 2027-02-28; geen loontabel bekend. Let op: Eenmalige uitkeringen zijn NETTO bedragen (fulltime): € 500 netto in december 2025 en € 250 netto in januari 2026; niet als bruto bedrag opgenomen Eindejaarsuitkering 8,33% afgeleid uit CNV-bericht dat meetellen van de onregelmatigheids-/ploegentoeslag vanaf 2026 een extra 8,33% over de jaarlijkse toeslag betekent Verbeterde winstdelingsregeling (niet uit te drukken in de calculator) Vakantiegeldpercentage en pensioenpremie (Pensioenfonds KLM Grond) niet geverifieerd; 8% is het wettelijk minimum Cao loopt tot 1 maart 2027; loonsverhoging daarna nog niet bekend Salaristabellen niet gevonden",
  sourceUrl: "https://www.cnv.nl/nieuws/uitweg-uit-impasse-klm-grondmedewerkers-zien-acties-beloond/",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: { kind: 'own', unit: 'maand' },
  periods: [
    {
      from: '2026-07-01',
      note: "+1,25% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', raises: [{ pct: 0.0125 }] },
    },
    {
      from: '2027-01-01',
      note: "+1% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', raises: [{ pct: 0.01 }] },
    },
  ],
  vergoedingen: [],
};
