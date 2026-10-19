import type { Cao } from '../types.js';

/**
 * Cao De Nederlandsche Bank N.V. (DNB) 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao De Nederlandsche Bank N.V. (DNB)
 * https://www.fnv.nl/nieuwsbericht/sectornieuws/finance/2026-2/06/pensioen-dnb-en-cao-loonstijging-2026
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8%, eindejaarsuitkering 0%
 *   - Voltijdsuren niet in de bron: 40 aangenomen
 *   - Verhogingen na 1-1-2026: 2026-07-01 +2,3% collectieve verhoging
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoDnb2026: Cao = {
  id: 'dnb',
  name: "Cao De Nederlandsche Bank N.V. (DNB)",
  year: 2026,
  effectiveNote: "Cao 2025-07-01 t/m 2027-06-30; geen loontabel bekend. Let op: Lonen worden volgens de cao twee keer per jaar (januari en juli) aan de inflatie aangepast; de verhoging per 1-1-2027 is nog niet bekend 2,7% per 1-1-2025 en 2,8% per 1-7-2025 volgens AWVN cao-kijker; 2,0% in januari 2026 en 2,3% per 1-7-2026 volgens FNV Per 1-1-2026 vervalt de representatiekostenvergoeding; die wordt kostenneutraal in het maandsalaris en de schaalminima/-maxima verwerkt (per medewerker verschillend) Minimumgarantie: werknemers van 21 jaar of ouder verdienen ten minste EUR 16 bruto per uur Vakantiegeld 8% is het wettelijk minimum; niet geverifieerd in de cao-tekst (alleen als scan beschikbaar). Persoonlijk Keuzebudget aanwezig, percentage niet gevonden Nieuwe pensioenregeling per 1-7-2026; werknemerspremie niet gevonden Salaristabel niet gevonden (cao-tekst is een scan)",
  sourceUrl: "https://www.fnv.nl/nieuwsbericht/sectornieuws/finance/2026-2/06/pensioen-dnb-en-cao-loonstijging-2026",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: { kind: 'own', unit: 'maand' },
  periods: [
    {
      from: '2026-07-01',
      note: "+2,3% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', raises: [{ pct: 0.023 }] },
    },
  ],
  vergoedingen: [],
};
