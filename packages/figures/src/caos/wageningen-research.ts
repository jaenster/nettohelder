import type { Cao } from '../types.js';

/**
 * Cao Stichting Wageningen Research 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Stichting Wageningen Research
 * https://www.cnv.nl/onderwijs/onderzoeksinstellingen/nieuws/onderhandelingsresultaat-cao-wageningen-research-bereikt-2026-07-01/
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8%, eindejaarsuitkering 8,3%
 *   - Voltijd 36 uur/week
 *   - Verhogingen na 1-1-2026: 2026-07-01 +3,1% collectieve verhoging
 *   - Eenmalige uitkeringen: 2026-10-01 € 1534
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoWageningenResearch2026: Cao = {
  id: 'wageningen-research',
  name: "Cao Stichting Wageningen Research",
  year: 2026,
  effectiveNote: "Cao 2026-07-01 t/m 2027-06-30; geen loontabel bekend. Let op: Cao 1-7-2026 t/m 30-6-2027 (onderhandelingsresultaat 29 juni 2026, door leden goedgekeurd juli 2026) Per 1-7-2026 salarissen structureel +3,1%; daarnaast worden de bedragen in de salaristabel structureel met € 50 bruto per maand verhoogd (alleen de tabel, niet als vaste verhoging van individuele salarissen) Per 1-7-2025 salarissen +2,0% en daarna alle bedragen in de salaristabel + € 100 bruto Eenmalige uitkering € 1.534 bruto (uiterlijk oktober 2026) en € 350 bruto (uiterlijk oktober 2025), naar rato bij deeltijd Per 1-1-2027 wordt het aantal treden in salarisschalen 1 t/m 5 gelijkgetrokken met de cao Nederlandse Universiteiten Eindejaarsuitkering 8,3% van het jaarsalaris (november); vakantie-uitkering 8% Volledige arbeidsduur gemiddeld 36 uur per week Pensioen via ABP; salarisschalen (bijlage A) staan alleen als afbeelding in de cao en zijn niet overgenomen",
  sourceUrl: "https://www.cnv.nl/onderwijs/onderzoeksinstellingen/nieuws/onderhandelingsresultaat-cao-wageningen-research-bereikt-2026-07-01/",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.083,
  salary: { kind: 'own', unit: 'maand', hoursPerWeek: 36 },
  periods: [
    {
      from: '2026-07-01',
      note: "+3,1% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', hoursPerWeek: 36, raises: [{ pct: 0.031 }] },
    },
  ],
  vergoedingen: [],
  eenmaligeUitkeringen: [
    { date: '2026-10-01', amount: 1534 },
  ],
};
