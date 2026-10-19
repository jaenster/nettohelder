import type { Cao } from '../types.js';

/**
 * Cao Tuinzaadbedrijven 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Tuinzaadbedrijven
 * https://www.fnv.nl/getmedia/21ac69f1-99c1-482d-944f-81638fe15f2b/Onderhandelingsresultaat-cao-tuinzaadbedrijven-september-2026.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8%, eindejaarsuitkering 0%
 *   - Voltijdsuren niet in de bron: 40 aangenomen
 *   - Verhogingen na 1-1-2026: 2026-10-01 +3,25% collectieve verhoging; 2027-01-01 +3,25% collectieve verhoging
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoTuinzaadbedrijven2026: Cao = {
  id: 'tuinzaadbedrijven',
  name: "Cao Tuinzaadbedrijven",
  year: 2026,
  effectiveNote: "Cao 2026-01-01 t/m 2027-12-31; geen loontabel bekend. Let op: Onderhandelingsresultaat september 2026; FNV legt het neutraal voor, ledenraadpleging 8 t/m 26 oktober 2026. Nog niet definitief Eenmalige betaling van 3,25% over de uitbetaalde maandsalarissen van 1-1-2026 t/m 30-9-2026 voor wie op 1-10-2026 in dienst is, uiterlijk in november 2026; pensioengevend en met vakantiegeld Eerder door de werkgever toegekende algemene loonsverhogingen mogen worden verrekend Geen salaristabel, pensioenpremie of eindejaarsuitkering gevonden Vakantiegeld 8% is het wettelijk minimum; niet apart geverifieerd in de cao-tekst",
  sourceUrl: "https://www.fnv.nl/getmedia/21ac69f1-99c1-482d-944f-81638fe15f2b/Onderhandelingsresultaat-cao-tuinzaadbedrijven-september-2026.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: { kind: 'own', unit: 'maand' },
  periods: [
    {
      from: '2026-10-01',
      note: "+3,25% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', raises: [{ pct: 0.0325 }] },
    },
    {
      from: '2027-01-01',
      note: "+3,25% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', raises: [{ pct: 0.0325 }] },
    },
  ],
  vergoedingen: [],
};
