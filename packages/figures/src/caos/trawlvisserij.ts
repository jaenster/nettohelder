import type { Cao } from '../types.js';

/**
 * Cao Trawlvisserij 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Trawlvisserij
 * https://www.cnv.nl/voeding/vlees-en-vis/cao-trawlvisserij/nieuws/update-cao-trawlvisserij-2026-07-13/
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8%, eindejaarsuitkering 0%
 *   - Voltijdsuren niet in de bron: 40 aangenomen
 *   - Verhogingen na 1-1-2026: 2026-07-01 +3% collectieve verhoging; 2027-01-01 +3% collectieve verhoging
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoTrawlvisserij2026: Cao = {
  id: 'trawlvisserij',
  name: "Cao Trawlvisserij",
  year: 2026,
  effectiveNote: "Cao 2026-01-01 t/m 2027-12-31; geen loontabel bekend. Let op: Partijen: Redersvereniging voor de Zeevisserij en CNV; onderhandelingsresultaat 19-5-2026, door leden aangenomen (juli 2026) Beloning bestaat grotendeels uit een aandeel in de besomming (gage); de verhogingen gelden voor het walloon, garantieloon en vakantieloon (dagbedragen per rang) Loontabel is per dag per rang (bijv. matroos € 162,73, schipper € 325,46 per dag per 1-1-2025) en niet opgenomen omdat de eenheid 'dag' niet ondersteund wordt Vakantiebijslag is 8% van 260 x het walloon per dag, niet van het werkelijke loon Pensioen via pensioenregeling Zeevisserij; totale premie 20%, werknemersdeel niet gevonden Vergoedingen en verstrekkingen ook +3% per 1-7-2026 en +3% per 1-1-2027",
  sourceUrl: "https://www.cnv.nl/voeding/vlees-en-vis/cao-trawlvisserij/nieuws/update-cao-trawlvisserij-2026-07-13/",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: { kind: 'own', unit: 'maand' },
  periods: [
    {
      from: '2026-07-01',
      note: "+3% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', raises: [{ pct: 0.03 }] },
    },
    {
      from: '2027-01-01',
      note: "+3% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', raises: [{ pct: 0.03 }] },
    },
  ],
  vergoedingen: [],
};
