import type { Cao } from '../types.js';

/**
 * Cao URS Nederland B.V. (Unie van de Redding- en Sleepdienst Nederland) 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao URS Nederland B.V. (Unie van de Redding- en Sleepdienst Nederland)
 * https://cao-kijker.awvn.nl/bestanden/1974_01-01-2024%20tot%2001-01-2028_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8,4%, eindejaarsuitkering 0%
 *   - Voltijdsuren niet in de bron: 40 aangenomen
 *   - Verhogingen na 1-1-2026: 2027-01-01 +1% collectieve verhoging
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoReddingSleepdienst2026: Cao = {
  id: 'redding-sleepdienst',
  name: "Cao URS Nederland B.V. (Unie van de Redding- en Sleepdienst Nederland)",
  year: 2026,
  effectiveNote: "Cao 2024-01-01 t/m 2027-12-31; geen loontabel bekend. Let op: Per 1 januari van elk jaar automatische prijscompensatie (APC, afgeleid van de CPI van oktober); de uitkomst per 1-1-2025, 1-1-2026 en 1-1-2027 staat niet in de cao en is niet meegenomen Afspraken: 2024 1% initieel + 2% APC (1% verrekend met APC 2025); 2025 APC min 1%; 2026 0% initieel + APC; 2027 1% initieel + APC Vakantietoeslag 8,4% over 12x basismaandsalaris plus de toeslag van 41% (dienstensysteem 35% + aflossen 6%) Eindejaarsuitkering € 1.000 netto (via WKR), in december Salaristabellen in de cao gelden per 1-1-2024 (basisloon exclusief 41% toeslag); geen tabel voor 2026/2027 gevonden Pensioen sinds 1-1-2025 bij BPF Koopvaardij, premieverdeling 20% werknemer / 80% werkgever, franchise bevroren op € 20.935 (tenzij Koopvaardij-franchise hoger); totale premie niet in de cao vermeld Rooster gebaseerd op gemiddeld 35,34 uur per week",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/1974_01-01-2024%20tot%2001-01-2028_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.084,
  eindejaarsuitkeringPct: 0,
  salary: { kind: 'own', unit: 'maand' },
  periods: [
    {
      from: '2027-01-01',
      note: "+1% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', raises: [{ pct: 0.01 }] },
    },
  ],
  vergoedingen: [],
};
