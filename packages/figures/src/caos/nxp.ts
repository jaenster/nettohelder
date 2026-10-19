import type { Cao } from '../types.js';

/**
 * Cao NXP Semiconductors Netherlands 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao NXP Semiconductors Netherlands
 * https://www.cnv.nl/industrie/metalektro/cao-nxp/
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8%, eindejaarsuitkering 0%
 *   - Voltijdsuren niet in de bron: 40 aangenomen
 *   - Verhogingen na 1-1-2026: 2026-04-01 +3,1% collectieve verhoging; 2027-02-01 +3% collectieve verhoging
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoNxp2026: Cao = {
  id: 'nxp',
  name: "Cao NXP Semiconductors Netherlands",
  year: 2026,
  effectiveNote: "Cao 2026-01-01 t/m 2027-12-31; geen loontabel bekend. Let op: Eindbod van NXP (12-2-2026), door de leden aanvaard (CNV, 2-3-2026) Verhoging 1-4-2026 kent een minimum (bodem) van € 1.380 bruto op fulltime basis; niet vermeld of dit per maand of per jaar is, daarom niet als minimum opgenomen Eenmalige uitkering van 0,75% van het basisjaarsalaris (incl. ploegentoeslag) per 31-3-2026, uitbetaald met het salaris van april 2026, voor wie op 1-4-2026 in dienst is; parttime naar rato Salarisschalen worden per 1-4-2026 en 1-2-2027 met dezelfde percentages verhoogd; tabellen niet gevonden Pensioen via PME; werknemerspremie niet gevonden Vakantiegeld 8% is het wettelijk minimum; niet apart geverifieerd in de cao-tekst",
  sourceUrl: "https://www.cnv.nl/industrie/metalektro/cao-nxp/",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: { kind: 'own', unit: 'maand' },
  periods: [
    {
      from: '2026-04-01',
      note: "+3,1% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', raises: [{ pct: 0.031 }] },
    },
    {
      from: '2027-02-01',
      note: "+3% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', raises: [{ pct: 0.03 }] },
    },
  ],
  vergoedingen: [],
};
