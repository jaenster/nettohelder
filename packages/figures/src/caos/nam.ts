import type { Cao } from '../types.js';

/**
 * Cao Nederlandse Aardolie Maatschappij (NAM) 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Nederlandse Aardolie Maatschappij (NAM)
 * https://www.cnv.nl/industrie/chemie-en-energie/cao-nam-nederlandse-aardolie-maatschappij/nieuws/ledenraadplegingen-onderhandelingsresultaat-nieuwe-cao-nam-2026-05-11/
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8%, eindejaarsuitkering 0%
 *   - Voltijdsuren niet in de bron: 40 aangenomen
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoNam2026: Cao = {
  id: 'nam',
  name: "Cao Nederlandse Aardolie Maatschappij (NAM)",
  year: 2026,
  effectiveNote: "Cao 2026-04-01 t/m 2029-03-31; geen loontabel bekend. Let op: Onderhandelingsresultaat van 6 mei 2026, door de leden goedgekeurd (CNV, 20 mei 2026); looptijd 1-4-2026 t/m 31-3-2029 Voor 2026 een eenmalige uitkering van € 5.000 bruto (niet pensioengevend) voor alle cao-medewerkers; betaaldatum niet gevonden, daarom niet als eenmalige uitkering opgenomen Loonontwikkeling 2027 en 2028 gekoppeld aan de AWVN-chemie-index: individuele, pensioengevende verhoging via de Salary Management Chart (afhankelijk van schaalpositie en beoordeling), gemiddeld rond het indexpercentage; uitkomst nog niet bekend Medewerkers die door hun hoge schaalpositie geen verhoging krijgen, ontvangen een eenmalige niet-pensioengevende uitkering afhankelijk van de indexuitkomst Salarisschalen worden voorafgaand aan de loonronde 2027 met 4% en voorafgaand aan de loonronde 2028 met 2,5% verhoogd (schalen, niet de individuele salarissen); schalen zelf niet gevonden Bonusbudget blijft 10%, afhankelijk van bedrijfsresultaten; niet als eindejaarsuitkering opgenomen Vakantietoeslag, arbeidsduur en pensioenpremie niet in het onderhandelingsresultaat; vakantietoeslag 8% is het wettelijke minimum, niet uit de cao-tekst geverifieerd",
  sourceUrl: "https://www.cnv.nl/industrie/chemie-en-energie/cao-nam-nederlandse-aardolie-maatschappij/nieuws/ledenraadplegingen-onderhandelingsresultaat-nieuwe-cao-nam-2026-05-11/",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: { kind: 'own', unit: 'maand' },
  vergoedingen: [],
};
