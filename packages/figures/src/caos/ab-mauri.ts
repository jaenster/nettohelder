import type { Cao } from '../types.js';

/**
 * Cao AB Mauri 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao AB Mauri
 * https://cao-kijker.awvn.nl/bestanden/2938_01-12-2026%20tot%2001-12-2027_akkoord.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8%, eindejaarsuitkering 10%
 *   - Voltijd 40 uur/week
 *   - Verhogingen na 1-1-2026: 2026-12-01 +3,75% collectieve verhoging
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoAbMauri2026: Cao = {
  id: 'ab-mauri',
  name: "Cao AB Mauri",
  year: 2026,
  effectiveNote: "Cao 2026-12-01 t/m 2027-11-30; geen loontabel bekend. Let op: Cao 1-12-2026 t/m 30-11-2027 (onderhandelingsresultaat CNV van 7-9-2026, positief voorgelegd aan de leden): algemene structurele verhoging van 3,75% per 1-12-2026 voor schaal 1 t/m 8; de cao geldt vanaf december 2026 alleen nog voor schaal 1 t/m 8 Over de periode 1-10-2025 t/m 30-11-2026 is geen definitieve loonafspraak gevonden: de leden van CNV wezen in december 2025 het eindbod (2,5%) en het aangepaste eindbod (3% per 1-12-2025) af Eindejaarsuitkering 10% van het inkomen over het voorgaande kalenderjaar (uitbetaald in januari) en vakantietoeslag 8% volgens de cao 2024-2025 Arbeidsduur 40 uur per week (cao 2024-2025) Pensioen bij het bedrijfstakpensioenfonds voor de levensmiddelenhandel; premie niet gevonden Salarisschalen niet opgenomen",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/2938_01-12-2026%20tot%2001-12-2027_akkoord.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.1,
  salary: { kind: 'own', unit: 'maand', hoursPerWeek: 40 },
  periods: [
    {
      from: '2026-12-01',
      note: "+3,75% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', hoursPerWeek: 40, raises: [{ pct: 0.0375 }] },
    },
  ],
  vergoedingen: [],
};
