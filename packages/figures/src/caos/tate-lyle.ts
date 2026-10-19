import type { Cao } from '../types.js';

/**
 * Cao Tate & Lyle Netherlands B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Tate & Lyle Netherlands B.V.
 * https://cao-kijker.awvn.nl/bestanden/1042_01-04-2026%20tot%2001-04-2028_akkoord.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8%, eindejaarsuitkering 3,25%
 *   - Voltijd 36 uur/week
 *   - Verhogingen na 1-1-2026: 2026-04-01 +2% collectieve verhoging; 2026-07-01 +1,134% collectieve verhoging; 2027-04-01 +2,5% collectieve verhoging
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoTateLyle2026: Cao = {
  id: 'tate-lyle',
  name: "Cao Tate & Lyle Netherlands B.V.",
  year: 2026,
  effectiveNote: "Cao 2026-04-01 t/m 2028-03-31; geen loontabel bekend. Let op: Onderhandelingsresultaat 25 maart 2026, looptijd 1-4-2026 t/m 31-3-2028: bovenop de automatische prijscompensatie (APC) +2% per 1-4-2026 en +2,5% per 1-4-2027 APC: salarissen worden per 1 januari en 1 juli aangepast aan de CPI (afgeleid) over het voorgaande halfjaar, max. 6,5% per kalenderjaar. APC per 1-7-2026 is 1,134% volgens de AWVN cao-kijker; overige APC-uitkomsten (o.a. 1-1-2025, 1-7-2025, 1-1-2026, 2027) niet gevonden en hier niet meegenomen Verhoging 4% per 1-4-2025 uit de cao 2024-2026 Laatst gevonden salarisschalen (ORBA, per 1-4-2024) niet opgenomen omdat de APC-verhogingen daarna niet allemaal bekend zijn Eindejaarsuitkering 3,25% van 12 x het maandsalaris Normale arbeidsduur gemiddeld 36 uur per week Pensioen bij PGB: vaste premie 20,4% van de gemaximeerde bruto loonsom, werknemer betaalt 30% daarvan; werknemerspercentage van de pensioengrondslag en franchise 2026 niet gevonden",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/1042_01-04-2026%20tot%2001-04-2028_akkoord.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0325,
  salary: { kind: 'own', unit: 'maand', hoursPerWeek: 36 },
  periods: [
    {
      from: '2026-04-01',
      note: "+2% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', hoursPerWeek: 36, raises: [{ pct: 0.02 }] },
    },
    {
      from: '2026-07-01',
      note: "+1,134% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', hoursPerWeek: 36, raises: [{ pct: 0.01134 }] },
    },
    {
      from: '2027-04-01',
      note: "+2,5% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', hoursPerWeek: 36, raises: [{ pct: 0.025 }] },
    },
  ],
  vergoedingen: [],
};
