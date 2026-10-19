import type { Cao } from '../types.js';

/**
 * Cao Sociaal-Economische Raad (SER) 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Sociaal-Economische Raad (SER)
 * https://www.cnv.nl/publieke-diensten/semi-publieke-organisaties/cao-ser/nieuws/onderhandelingsresultaat-cao-sociaal-economische-raad-2025-12-15/
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8%, eindejaarsuitkering 8,33%
 *   - Voltijd 38 uur/week
 *   - Verhogingen na 1-1-2026: 2026-10-01 +1,5% collectieve verhoging; 2027-01-01 +3% collectieve verhoging
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoSer2026: Cao = {
  id: 'ser',
  name: "Cao Sociaal-Economische Raad (SER)",
  year: 2026,
  effectiveNote: "Cao 2026-01-01 t/m 2027-12-31; geen loontabel bekend. Let op: Onderhandelingsresultaat december 2025, nieuwe cao per januari 2026 (CNV); looptijd 1-1-2026 t/m 31-12-2027 Per 1-1-2026 1,5% plus nominaal € 100 per maand (beide, niet als minimum); volgorde van toepassing niet vermeld Klimaatbudget € 500 (2026); per 1-1-2027 persoonlijk budget van € 550 voor duurzaamheid en duurzame inzetbaarheid; niet opgenomen Vakantietoeslag 8% (met minimumbedrag vanaf 21 jaar) en eindejaarsuitkering 8,33% van het jaarsalaris, voltijd 38 uur per week (40 uur met adv-opbouw): uit de cao-tekst 2022-2024 Salarisschalen niet gevonden; pensioen bij ABP, werknemerspremie niet in de cao",
  sourceUrl: "https://www.cnv.nl/publieke-diensten/semi-publieke-organisaties/cao-ser/nieuws/onderhandelingsresultaat-cao-sociaal-economische-raad-2025-12-15/",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: { kind: 'own', unit: 'maand', hoursPerWeek: 38 },
  periods: [
    {
      from: '2026-10-01',
      note: "+1,5% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', hoursPerWeek: 38, raises: [{ pct: 0.015 }] },
    },
    {
      from: '2027-01-01',
      note: "+3% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', hoursPerWeek: 38, raises: [{ pct: 0.03 }] },
    },
  ],
  vergoedingen: [],
};
