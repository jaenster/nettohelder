import type { Cao } from '../types.js';

/**
 * Cao Agrarische Bedrijfsverzorging (Bedrijfsverzorgingsdiensten) 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Agrarische Bedrijfsverzorging (Bedrijfsverzorgingsdiensten)
 * https://www.cnv.nl/voeding/land-en-tuinbouw/cao-agrarische-bedrijfsverzorging/nieuws/onderhandelingsresultaat-cao-agrarische-bedrijfsverzorging-2025-11-03/
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8,25%, eindejaarsuitkering 0%
 *   - Voltijdsuren niet in de bron: 40 aangenomen
 *   - Verhogingen na 1-1-2026: 2027-01-01 +3,5% collectieve verhoging
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoBedrijfsverzorgingsdiensten2026: Cao = {
  id: 'bedrijfsverzorgingsdiensten',
  name: "Cao Agrarische Bedrijfsverzorging (Bedrijfsverzorgingsdiensten)",
  year: 2026,
  effectiveNote: "Cao 2025-11-01 t/m 2027-12-31; geen loontabel bekend. Let op: Verhoging 1-5-2025 (3,6%) uit de vorige cao 1-5-2024 t/m 31-10-2025 (totaal 7,6% in twee stappen: 4% per 1-5-2024 en 3,6% per 1-5-2025) Normale arbeidsduur 1.957,5 uur per jaar (jaarurenmodel) Vakantietoeslag 8,25% volgens cao-tekst 2023-2024; niet geverifieerd in de cao 2025-2027 Per 1-1-2026 kilometervergoeding € 0,30 (was € 0,27); stagevergoeding minimaal € 500 per maand Pensioen bij BPL; werknemersdeel niet in de cao opgenomen Geen loontabel gevonden voor 2026",
  sourceUrl: "https://www.cnv.nl/voeding/land-en-tuinbouw/cao-agrarische-bedrijfsverzorging/nieuws/onderhandelingsresultaat-cao-agrarische-bedrijfsverzorging-2025-11-03/",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.0825,
  eindejaarsuitkeringPct: 0,
  salary: { kind: 'own', unit: 'maand' },
  periods: [
    {
      from: '2027-01-01',
      note: "+3,5% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', raises: [{ pct: 0.035 }] },
    },
  ],
  vergoedingen: [],
};
