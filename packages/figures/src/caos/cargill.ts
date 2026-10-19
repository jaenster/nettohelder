import type { Cao } from '../types.js';

/**
 * Cao Cargill BV 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Cargill BV
 * https://www.cnv.nl/voeding/voeding/cao-cargill/nieuws/leden-cnv-stemmen-voor-de-nieuwe-cao-en-sociaal-plan-cargill-2025-07-16/
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8%, eindejaarsuitkering 8,33%
 *   - Voltijd 40 uur/week
 *   - Verhogingen na 1-1-2026: 2026-08-01 +2% collectieve verhoging
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoCargill2026: Cao = {
  id: 'cargill',
  name: "Cao Cargill BV",
  year: 2026,
  effectiveNote: "Cao 2025-08-01 t/m 2027-07-31; geen loontabel bekend. Let op: Onderhandelingsresultaat 2 juli 2025 (FNV, CNV), door CNV-leden goedgekeurd juli 2025; looptijd 1-8-2025 t/m 31-7-2027 De structurele verhogingen komen bovenop de automatische prijscompensatie (APC): salarissen worden per 1 januari en 1 juli aangepast aan de CBS-CPI; die uitkomsten zijn niet opgenomen Dertiende maand in november, gelijk aan het maandinkomen van december (vorige cao-tekst 2023-2025) Per 1-8-2025 vergoeding werkoverdracht/omkleedtijd van € 100 bruto per maand (ploegendienst) of € 50 (dagdienst), geïndexeerd; niet opgenomen Salaristabel van de nieuwe cao niet gevonden; pensioen via aparte Cao inzake Pensioen Cargill BV, werknemerspremie niet gevonden Cargill stopt met de activiteiten in Sas van Gent (aangekondigd september 2025)",
  sourceUrl: "https://www.cnv.nl/voeding/voeding/cao-cargill/nieuws/leden-cnv-stemmen-voor-de-nieuwe-cao-en-sociaal-plan-cargill-2025-07-16/",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: { kind: 'own', unit: 'maand', hoursPerWeek: 40 },
  periods: [
    {
      from: '2026-08-01',
      note: "+2% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', hoursPerWeek: 40, raises: [{ pct: 0.02 }] },
    },
  ],
  vergoedingen: [],
};
