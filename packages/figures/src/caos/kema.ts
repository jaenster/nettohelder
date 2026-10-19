import type { Cao } from '../types.js';

/**
 * Cao KEMA B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao KEMA B.V.
 * https://cao-kijker.awvn.nl/bestanden/4300_01-07-2026%20tot%2001-07-2027_akkoord.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8%, eindejaarsuitkering 0%
 *   - Voltijd 38 uur/week
 *   - Verhogingen na 1-1-2026: 2026-07-01 +3,4% collectieve verhoging
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoKema2026: Cao = {
  id: 'kema',
  name: "Cao KEMA B.V.",
  year: 2026,
  effectiveNote: "Cao 2026-07-01 t/m 2027-06-30; geen loontabel bekend. Let op: Cao 1-7-2026 t/m 30-6-2027 (onderhandelingsresultaat FNV, CNV en KEMA van 2-7-2026): ijksalarissen +3,4% en minimale salarisstijging 3,4% per 1-7-2026 voor medewerkers die minimaal 6 maanden in dienst zijn Vorige cao 1-7-2025 t/m 30-6-2026: ijksalarissen +4,0% en minimale salarisstijging 4,0% per 1-7-2025 De werkelijke verhoging hangt af van een matrix (beoordeling x positie t.o.v. het ijksalaris): in 2026 van 3,40% tot 5,85% bij beoordeling 2 t/m 5, 0% bij beoordeling 1; de hier opgenomen verhogingen zijn de minima Minimum uurloon € 17,00 bruto voor vakbekwame werknemers van 21 jaar en ouder Standaard arbeidsduur gemiddeld 38 uur per week Vakantietoeslag 8%, uitbetaald in mei; vanaf 1-6-2027 keuze voor maandelijkse uitbetaling Pensioen bij ABP (franchise € 17.550 peildatum 2024) of een A.S.R.-regeling; werknemerspremie niet in de cao vermeld Salarisschalen niet opgenomen",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/4300_01-07-2026%20tot%2001-07-2027_akkoord.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: { kind: 'own', unit: 'maand', hoursPerWeek: 38 },
  periods: [
    {
      from: '2026-07-01',
      note: "+3,4% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', hoursPerWeek: 38, raises: [{ pct: 0.034 }] },
    },
  ],
  vergoedingen: [],
};
