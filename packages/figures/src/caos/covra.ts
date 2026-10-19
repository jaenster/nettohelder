import type { Cao } from '../types.js';

/**
 * Cao Centrale Organisatie voor Radioactief Afval (COVRA) 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Centrale Organisatie voor Radioactief Afval (COVRA)
 * https://www.fnv.nl/getmedia/e56fec8a-3b53-44b0-afc4-3a2b23558401/470-centrale-organisatie-voor-radioactief-afval-covra-cao-01-01-2025-tm-31-12-2027-v02072026.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8%, eindejaarsuitkering 0%
 *   - Voltijd 40 uur/week
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoCovra2026: Cao = {
  id: 'covra',
  name: "Cao Centrale Organisatie voor Radioactief Afval (COVRA)",
  year: 2026,
  effectiveNote: "Cao 2025-01-01 t/m 2027-12-31; geen loontabel bekend. Let op: Salarisschalen worden jaarlijks per 1 januari geïndexeerd met de CBS-consumentenprijsindex (alle huishoudens) over oktober-oktober van het voorgaande jaar; volgens de AWVN cao-kijker 3,547% per 1-1-2025 en 3,115% per 1-1-2026. Indexatie per 1-1-2027 nog niet bekend Per 1-1-2026 nieuwe salarisschalen (bijlage I), maar de tabel is niet in de gepubliceerde cao-tekst opgenomen Pensioen via Centraal Beheer Algemeen Pensioenfonds: totale premie 32% van de pensioengrondslag, werknemer 1/3 (10,66%); franchise niet vermeld, daarom niet opgenomen. Aanpassing aan nieuwe pensioenwet verwacht Ploegentoeslag 25% van het basismaandsalaris bij volcontinu dienst Bijdrage zorgpremie € 107,25 bruto per maand (2026)",
  sourceUrl: "https://www.fnv.nl/getmedia/e56fec8a-3b53-44b0-afc4-3a2b23558401/470-centrale-organisatie-voor-radioactief-afval-covra-cao-01-01-2025-tm-31-12-2027-v02072026.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: { kind: 'own', unit: 'maand', hoursPerWeek: 40 },
  vergoedingen: [],
};
