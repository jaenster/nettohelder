import type { Cao } from '../types.js';

/**
 * Cao Kriterion 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Kriterion
 * https://cao-kijker.awvn.nl/bestanden/3843_01-01-2026%20tot%2001-01-2031_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8%, eindejaarsuitkering 0%
 *   - Voltijd 40 uur/week
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoKriterion2026: Cao = {
  id: 'kriterion',
  name: "Cao Kriterion",
  year: 2026,
  effectiveNote: "Cao 2026-01-01 t/m 2030-12-31; geen loontabel bekend. Let op: Geen loonschalen of loonsverhogingen: het bruto maandsalaris bij voltijd is minimaal het wettelijk minimumloon, inclusief vakantietoeslag (art. 4) Vakantietoeslag is volgens de cao-tekst onderdeel van het minimumsalaris; de definitie van salaris is exclusief vakantietoeslag. Hier op het wettelijke 8% gezet Geen collectieve pensioenregeling bij de werkgever 160 vakantie-uren per jaar bij 40 uur per week",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/3843_01-01-2026%20tot%2001-01-2031_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: { kind: 'own', unit: 'maand', hoursPerWeek: 40 },
  vergoedingen: [],
};
