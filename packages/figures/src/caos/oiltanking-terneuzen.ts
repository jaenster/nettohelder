import type { Cao } from '../types.js';

/**
 * Cao Oiltanking Terneuzen B.V. (Evos Terneuzen) 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Oiltanking Terneuzen B.V. (Evos Terneuzen)
 * https://cao-kijker.awvn.nl/bestanden/4233_01-07-2024%20tot%2001-07-2028_akkoord.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8,33%, eindejaarsuitkering 8,33%
 *   - Voltijdsuren niet in de bron: 40 aangenomen
 *   - Verhogingen na 1-1-2026: 2027-07-01 +1,25% collectieve verhoging; 2028-07-01 +1,25% collectieve verhoging
 *   - Eenmalige uitkeringen: 2026-07-01 € 1500
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoOiltankingTerneuzen2026: Cao = {
  id: 'oiltanking-terneuzen',
  name: "Cao Oiltanking Terneuzen B.V. (Evos Terneuzen)",
  year: 2026,
  effectiveNote: "Cao 2024-07-01 t/m 2028-07-01; geen loontabel bekend. Let op: Cao 1-7-2024 t/m 1-7-2028 (onderhandelingsresultaat FNV Havens en Evos Terneuzen, 13-6-2024): per 1-7-2024 0%, per 1-7-2025 en 1-7-2026 € 1.500 bruto eenmalig, per 1-7-2027 en 1-7-2028 +1,25%; telkens naast de APC Automatische prijscompensatie (APC) op basis van de CPI alle huishoudens afgeleid (cao 2021-2024: jaarlijks in januari, referteperiode september-september; bij negatieve index bevriezing en verrekening); uitkomsten niet verwerkt 13e maand van één gemiddeld bruto basismaandsalaris (8,33%) inclusief eventuele onregelmatigheidstoeslag; vanaf 2024 uitbetaald in november Vakantietoeslag één gemiddeld bruto basismaandsalaris (8,33%) inclusief onregelmatigheidstoeslag, uitbetaald in mei (cao 2021-2024) Standaardwerkdag dagdienst 7,5 uur, continudienst 8,25 uur (cao 2021-2024); geen weekarbeidsduur vermeld Negen salarisschalen (bijlage I) en beoordelingsafhankelijke verhoging per 1 januari; schalen niet opgenomen Kilometervergoeding woon-werk € 0,22 per km vanaf 1-7-2024",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/4233_01-07-2024%20tot%2001-07-2028_akkoord.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.0833,
  eindejaarsuitkeringPct: 0.0833,
  salary: { kind: 'own', unit: 'maand' },
  periods: [
    {
      from: '2027-07-01',
      note: "+1,25% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', raises: [{ pct: 0.0125 }] },
    },
    {
      from: '2028-07-01',
      note: "+1,25% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', raises: [{ pct: 0.0125 }] },
    },
  ],
  vergoedingen: [],
  eenmaligeUitkeringen: [
    { date: '2026-07-01', amount: 1500 },
  ],
};
