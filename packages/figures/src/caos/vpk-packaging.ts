import type { Cao } from '../types.js';

/**
 * Cao VPK Packaging B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao VPK Packaging B.V.
 * https://www.fnv.nl/getmedia/d4eb08ca-017f-4f26-8499-672588b82822/460-vpk-packaging-cao-01-01-2026-tm-31-12-2027-v18082026.pdf?ext=.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8%, eindejaarsuitkering 8,33%
 *   - Voltijd 38 uur/week
 *   - Verhogingen na 1-1-2026: 2027-01-01 +1,5% collectieve verhoging; 2027-07-01 +1% collectieve verhoging
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoVpkPackaging2026: Cao = {
  id: 'vpk-packaging',
  name: "Cao VPK Packaging B.V.",
  year: 2026,
  effectiveNote: "Cao 2026-01-01 t/m 2027-12-31; geen loontabel bekend. Let op: Gratificatie 8,33% van de verdiende schaalsalarissen en ploegentoeslagen, in december Vakantietoeslag 8% met een vloer (minimum gekoppeld aan salarisschaal 2, 0 functiejaren) Winstuitkering € 195 bruto per kwartaal bij het halen van de productiedoelstelling, plus € 100 per kwartaal bij laag ziekteverzuim; niet opgenomen Arbeidsduur gemiddeld 38 uur per week op jaarbasis Werknemersbijdrage pensioenpremie 8% volgens de cao, maar grondslag en franchise staan er niet bij; daarom niet als pensioen opgenomen Salarisschalen (bijlage 1) ontbreken in de gepubliceerde pdf",
  sourceUrl: "https://www.fnv.nl/getmedia/d4eb08ca-017f-4f26-8499-672588b82822/460-vpk-packaging-cao-01-01-2026-tm-31-12-2027-v18082026.pdf?ext=.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: { kind: 'own', unit: 'maand', hoursPerWeek: 38 },
  periods: [
    {
      from: '2027-01-01',
      note: "+1,5% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', hoursPerWeek: 38, raises: [{ pct: 0.015 }] },
    },
    {
      from: '2027-07-01',
      note: "+1% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', hoursPerWeek: 38, raises: [{ pct: 0.01 }] },
    },
  ],
  vergoedingen: [],
};
