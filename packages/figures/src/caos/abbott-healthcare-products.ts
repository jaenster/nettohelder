import type { Cao } from '../types.js';

/**
 * Cao Abbott Healthcare Products B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Abbott Healthcare Products B.V.
 * https://www.cnv.nl/documents/5923/Cao_Abbott_HP_2025-2027.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8,33%, eindejaarsuitkering 8,33%
 *   - Voltijd 40 uur/week
 *   - Verhogingen na 1-1-2026: 2026-04-01 +3% collectieve verhoging; 2027-01-01 +0,75% collectieve verhoging
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoAbbottHealthcareProducts2026: Cao = {
  id: 'abbott-healthcare-products',
  name: "Cao Abbott Healthcare Products B.V.",
  year: 2026,
  effectiveNote: "Cao 2025-04-01 t/m 2027-03-31; geen loontabel bekend. Let op: Salarisgroepen 2 t/m 8 en A t/m E met een jaarlijks per 1 april vastgesteld referentiesalaris; de bedragen staan niet in de cao-tekst Vakantietoeslag 8,33% van 12 maandsalarissen; 13e maand 1/12 van het jaarsalaris, opgenomen in het Individueel Keuzebudget (IKB) Pensioen: Abbott pensioenregeling (beschikbare premie, Zwitserleven / Stichting Pensioenfonds Abbott Nederland) met werknemersbijdrage 4,1%; franchise wordt jaarlijks vastgesteld maar is niet vermeld, daarom niet opgenomen Contractarbeidsduur 40 uur per week; 5-ploegendienst gemiddeld 33,6 uur Individuele (merit) verhoging afhankelijk van beoordeling, niet opgenomen",
  sourceUrl: "https://www.cnv.nl/documents/5923/Cao_Abbott_HP_2025-2027.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.0833,
  eindejaarsuitkeringPct: 0.0833,
  salary: { kind: 'own', unit: 'maand', hoursPerWeek: 40 },
  periods: [
    {
      from: '2026-04-01',
      note: "+3% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', hoursPerWeek: 40, raises: [{ pct: 0.03 }] },
    },
    {
      from: '2027-01-01',
      note: "+0,75% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', hoursPerWeek: 40, raises: [{ pct: 0.0075 }] },
    },
  ],
  vergoedingen: [],
};
