import type { Cao } from '../types.js';

/**
 * Cao HES Botlek Tank Terminal B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao HES Botlek Tank Terminal B.V.
 * https://cao-kijker.awvn.nl/bestanden/0437_01-01-2025%20tot%2001-01-2027_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8,33%, eindejaarsuitkering 0%
 *   - Voltijdsuren niet in de bron: 40 aangenomen
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoHesBotlekTankTerminal2026: Cao = {
  id: 'hes-botlek-tank-terminal',
  name: "Cao HES Botlek Tank Terminal B.V.",
  year: 2026,
  effectiveNote: "Cao 2025-01-01 t/m 2026-12-31; geen loontabel bekend. Let op: Naast de algemene verhogingen worden loongebouw en salarissen halfjaarlijks (januari en juli) geïndexeerd op basis van de CPI (perioden april-oktober en oktober-april); uitkomsten niet opgenomen Vakantietoeslag is 1x het schemamaandsalaris (8,33%) Arbeidsduur: volcontinudienst gemiddeld 34,2 uur per week, semi-continudienst gemiddeld 38,75 uur per week Eigen bijdrage pensioenpremie 6% van de pensioengrondslag; pensioenfonds en franchise niet vermeld, daarom niet als pensioengegevens opgenomen Salarisschalen (bijlage 1) ontbreken in de gevonden cao-tekst; 6 schalen met treden op basis van ervaringsjaren Cao wordt stilzwijgend verlengd tenzij een partij opzegt",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/0437_01-01-2025%20tot%2001-01-2027_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.0833,
  eindejaarsuitkeringPct: 0,
  salary: { kind: 'own', unit: 'maand' },
  vergoedingen: [],
};
