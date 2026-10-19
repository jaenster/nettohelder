import type { Cao } from '../types.js';

/**
 * Cao AnQore B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao AnQore B.V.
 * https://www.cnv.nl/industrie/chemie-en-energie/cao-anqore/nieuws/onderhandelingsresultaat-cao-anqore-breng-uiterlijk-6-oktober-je-stem-uit-2026-10-01/
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8%, eindejaarsuitkering 0%
 *   - Voltijd 40 uur/week
 *   - Verhogingen na 1-1-2026: 2026-10-01 +2% collectieve verhoging; 2027-10-01 +2% collectieve verhoging
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoAnqore2026: Cao = {
  id: 'anqore',
  name: "Cao AnQore B.V.",
  year: 2026,
  effectiveNote: "Cao 2026-06-01 t/m 2028-05-31; geen loontabel bekend. Let op: Bron 2026-2028 is het onderhandelingsresultaat van 24 september 2026 (looptijd 2 jaar tot en met 31 mei 2028), onder voorbehoud van ledenraadpleging (t/m 6 oktober 2026) en goedkeuring door de aandeelhouders De tweede verhoging van 2% kan al per 1 juli 2027 ingaan als de EBITDA-prognose 2027 in het maandrapport van april 2027 het doel haalt In de cao 1 oktober 2025 t/m 31 mei 2026 was er geen loonsverhoging; de 3,25% per 1 januari 2025 komt uit de vorige cao Salarisschalen zijn jaarsalarissen (minimum, midden, maximum) inclusief vakantietoeslag; niet opgenomen Ploegendienst gemiddeld 33,6 uur per week; resultaatbeloning niet opgenomen Reiskostenvergoeding € 0,25 per km per 1 oktober 2026 Pensioenpremie niet gevonden",
  sourceUrl: "https://www.cnv.nl/industrie/chemie-en-energie/cao-anqore/nieuws/onderhandelingsresultaat-cao-anqore-breng-uiterlijk-6-oktober-je-stem-uit-2026-10-01/",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: { kind: 'own', unit: 'maand', hoursPerWeek: 40 },
  periods: [
    {
      from: '2026-10-01',
      note: "+2% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', hoursPerWeek: 40, raises: [{ pct: 0.02 }] },
    },
    {
      from: '2027-10-01',
      note: "+2% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', hoursPerWeek: 40, raises: [{ pct: 0.02 }] },
    },
  ],
  vergoedingen: [],
};
