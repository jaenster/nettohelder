import type { Cao } from '../types.js';

/**
 * CAO Brocacef (Nederland) 2026 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: CAO Brocacef Holding 1-8-2024 t/m 31-1-2026, Bijlage II Salariswijzigingen en tabellen, tabel per 1 augustus 2025 (38-urige werkweek)
 * https://www.fnv.nl/getmedia/cb9a5183-5665-4723-984f-49a8ad2e4937/108-brocacef-holding-cao-1-8-2024-tm-31-1-2026-v17022025.pdf?ext=.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Alle min/max bedragen functiegroep A t/m K per 1 augustus 2025 (afgelezen uit een ingebedde afbeelding in de PDF, niet uit tekst)
 *   - Met name G minimum 2825.52, I max 4424.12, J max 4897.43, K min 3577.04 / max 5366.55 - kleine afleesfouten mogelijk
 *   - Of de salariscalculator de Bijlage-II band per 1-8-2025 wil gebruiken voor heel januari 2026, of dat per 1-2-2026 de nieuwe CAO 2026-2027 tabel (+2,5%) moet worden ingevoerd zodra die gepubliceerd is
 *   - eindejaarsuitkering 8,33% (art. 18-A) en vakantietoeslag 8% (art. 13) bevestigd uit CAO-tekst
 *   - pensioenfonds: Brocacef heeft eigen ondernemings-CDC-regeling (geen sectorfonds in de toegestane lijst) -> 'generiek'
 *
 * Excluded: jeugd-/vakantiewerkerstabel (juni t/m augustus); 36-urige werkweek tabel; 40-urige werkweek tabel; schaduwtabel (collectieve 36-urige werkweek vóór 25-8-2008); persoonlijke/welvaartsvaste toeslagen; toeslag bijzonder bezwaarlijke werkzaamheden (Bijlage V); overwerktoeslagen; resultaatafhankelijke beloning (EBIT); netto aanwezigheidspremie; eenmalige uitkeringen; reiskosten-/vervoersvergoeding; geplande verhogingen CAO 2026-2027 (+2,5% per 1-2-2026, +1,25% per 1-8-2026) - tabel niet gepubliceerd/gelezen
 */
export const caoBrocacef2026: Cao = {
  id: 'brocacef',
  name: "CAO Brocacef",
  year: 2026,
  effectiveNote: "Salaristabel per 1 augustus 2025 uit de CAO Brocacef 1-8-2024 t/m 31-1-2026 (Bijlage II), gebaseerd op de gemiddelde 38-urige werkweek. Deze tabel is het laatst gepubliceerde, leesbare loongebouw en geldt nog in januari 2026 (de CAO 2024-2026 loopt t/m 31 januari 2026). De opvolgende CAO Brocacef 2026-2027 (akkoord 27-1-2026, leden FNV/CNV/AVV akkoord) verhoogt de salarissen +2,5% per 1 februari 2026, +1,25% per 1 augustus 2026 en +1,5% per 1 februari 2027; de bijbehorende verhoogde salaristabellen waren nog niet als leesbare tabel gepubliceerd, dus zijn NIET als periode opgenomen (geen tabel verzonnen door op te hogen). EXCLUDED: jeugd-/vakantiewerkerstabel (juni t/m augustus), 36-urige en 40-urige varianten en de schaduwtabel, persoonlijke toeslagen, toeslag bijzonder bezwaarlijke werkzaamheden, overwerk, resultaatafhankelijke beloning (EBIT), de netto aanwezigheidspremie en eenmalige uitkeringen, en reiskosten-/vervoersvergoeding.",
  sourceUrl: "https://www.fnv.nl/cao-sector/handel/farmacie/cao-brocacef",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: {
    kind: 'band',
    levelLabel: "Functiegroep",
    unit: 'maand',
    levels: [
      { id: 'A', min: 2301.65, max: 2543.09 },
      { id: 'B', min: 2334.56, max: 2641.4 },
      { id: 'C', min: 2421.98, max: 2815.6 },
      { id: 'D', min: 2482.68, max: 2969.22 },
      { id: 'E', min: 2562.63, max: 3107.74 },
      { id: 'F', min: 2651.15, max: 3341.17 },
      { id: 'G', min: 2825.52, max: 3626.46 },
      { id: 'H', min: 2959.38, max: 3930.77 },
      { id: 'I', min: 3106.77, max: 4424.12 },
      { id: 'J', min: 3308.41, max: 4897.43 },
      { id: 'K', min: 3577.04, max: 5366.55 },
    ],
    defaultRsp: 0.9,
    hoursPerWeek: 38,
  },
  vergoedingen: [],
};
