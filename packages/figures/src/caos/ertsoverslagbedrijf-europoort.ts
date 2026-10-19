import type { Cao } from '../types.js';

/**
 * Cao Ertsoverslagbedrijf Europoort C.V. (EECV) 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Ertsoverslagbedrijf Europoort C.V. (EECV)
 * https://cao-kijker.awvn.nl/bestanden/4036_01-01-2024%20tot%2001-01-2027_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8,33%, eindejaarsuitkering 0%
 *   - Voltijd 37.5 uur/week
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoErtsoverslagbedrijfEuropoort2026: Cao = {
  id: 'ertsoverslagbedrijf-europoort',
  name: "Cao Ertsoverslagbedrijf Europoort C.V. (EECV)",
  year: 2026,
  effectiveNote: "Cao 2024-01-01 t/m 2026-12-31; geen loontabel bekend. Let op: Naast de initiële verhogingen automatische prijscompensatie: per 1 januari met de CPI-stijging april-oktober en per 1 juli met de CPI-stijging oktober-april (afgeleid); uitkomsten niet opgenomen Vakantietoeslag gelijk aan één schemamaandsalaris (opgenomen als 8,33%) 13e maand (één schemamaandsalaris) alleen voor beambten Dagdienst 37,5 uur per week, met 9 ADV-dagen gemiddeld 36,2 uur; ploegendiensten korter Eenmalig € 750 netto per 1 juni 2024 Salarisgebouwen (bijlage C) in de cao zijn alleen per 1-7-2024 (vóór de latere APC en initiële verhogingen); geen tabel voor 2026 gevonden, daarom niet opgenomen. Pensioenpremie niet gevonden",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/4036_01-01-2024%20tot%2001-01-2027_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.0833,
  eindejaarsuitkeringPct: 0,
  salary: { kind: 'own', unit: 'maand', hoursPerWeek: 37.5 },
  vergoedingen: [],
};
