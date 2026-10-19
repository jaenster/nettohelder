import type { Cao } from '../types.js';

/**
 * Cao Philips 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Philips
 * https://www.cnv.nl/industrie/metalektro/cao-philips/nieuws/resultaat-onderhandelingen-cao-en-sociaal-plan-philips-2024-11-19/
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8%, eindejaarsuitkering 0%
 *   - Voltijd 40 uur/week
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoPhilips2026: Cao = {
  id: 'philips',
  name: "Cao Philips",
  year: 2026,
  effectiveNote: "Cao 2024-07-01 t/m 2026-06-30; geen loontabel bekend. Let op: Cao 1-7-2024 t/m 30-6-2026: 3% per 1-12-2024 en 3% per 1-9-2025, elk met een minimum van € 1.800 per jaar (op basis van 40 uur; als € 150 per maand opgenomen) Nieuwe cao vanaf 1-7-2026 nog niet rond: onderhandelingen half oktober 2026 gestopt, Philips deed een eindbod dat de bonden niet voldoende vinden; leden stemmen nog. Geen verhoging voor 2026/2027 bekend Geen salaristabel gevonden; pensioen (Philips Pensioenfonds) en eventuele variabele beloning niet opgenomen Vakantiegeld 8% niet apart geverifieerd in de cao-tekst; uurloon is 0,575% van het bruto maandsalaris inclusief vakantiegeld",
  sourceUrl: "https://www.cnv.nl/industrie/metalektro/cao-philips/nieuws/resultaat-onderhandelingen-cao-en-sociaal-plan-philips-2024-11-19/",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: { kind: 'own', unit: 'maand', hoursPerWeek: 40 },
  vergoedingen: [],
};
