import type { Cao } from '../types.js';

/**
 * Cao easyJet vliegers werkend vanuit Nederland 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao easyJet vliegers werkend vanuit Nederland
 * https://cao-kijker.awvn.nl/bestanden/3883_01-10-2024%20tot%2001-04-2028_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8%, eindejaarsuitkering 8,33%
 *   - Voltijdsuren niet in de bron: 40 aangenomen
 *   - Verhogingen na 1-1-2026: 2026-10-01 +2,73% collectieve verhoging
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoEasyjetVliegers2026: Cao = {
  id: 'easyjet-vliegers',
  name: "Cao easyJet vliegers werkend vanuit Nederland",
  year: 2026,
  effectiveNote: "Cao 2024-10-01 t/m 2028-03-31; geen loontabel bekend. Let op: Cao 1-10-2024 t/m 31-3-2028 (VNV en easyJet). Basisjaarsalaris +8,33% per 1-10-2024, daarna per 1-10-2025 en 1-10-2026 met de CPI (12-maandsgemiddelde aug-jul, minimaal 1,0%); uitkomsten 2,603% en 2,73% volgens de AWVN cao-kijker Bruto basisjaarsalaris per 1-10-2024 (betaald in 12 maandbedragen): Captain € 141.174,35, Senior First Officer € 81.780,14, First Officer € 60.818,26, Second Officer € 52.266,94 Daarnaast variabele sectorbeloning per gevlogen sector (per 1-10-2024 nominaal: Captain € 57,30, SFO € 35,16, FO € 26,15, SO € 22,48) Vakantiegeld wijkt af: maandelijkse reservering van 8% van 3 x het wettelijk minimummaandloon (dus geen 8% over het volledige salaris) Eindejaarsuitkering (EJUK) van 8,33% van het basisjaarsalaris vanaf 1-1-2025 Pensioenregeling in bijlage 7 van de cao; werknemersbijdrage niet vastgesteld",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/3883_01-10-2024%20tot%2001-04-2028_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: { kind: 'own', unit: 'maand' },
  periods: [
    {
      from: '2026-10-01',
      note: "+2,73% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', raises: [{ pct: 0.0273 }] },
    },
  ],
  vergoedingen: [],
};
