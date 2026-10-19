import type { Cao } from '../types.js';

/**
 * Cao Spliethoff Beheer B.V., Go Gracht Service C.V. en Biglift Holding B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Spliethoff Beheer B.V., Go Gracht Service C.V. en Biglift Holding B.V.
 * https://cao-kijker.awvn.nl/bestanden/0641_01-01-2026%20tot%2001-01-2027_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8%, eindejaarsuitkering 0%
 *   - Voltijdsuren niet in de bron: 40 aangenomen
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoSpliethoffBeheer2026: Cao = {
  id: 'spliethoff-beheer',
  name: "Cao Spliethoff Beheer B.V., Go Gracht Service C.V. en Biglift Holding B.V.",
  year: 2026,
  effectiveNote: "Cao 2026-01-01 t/m 2026-12-31; geen loontabel bekend. Let op: Cao met Nautilus International voor zeevarenden op door de Spliethoff Groep beheerde schepen onder Nederlandse vlag; looptijd 2026 telkens één jaar Loonsverhogingen (5% per 1-1-2025 en 3,95% per 1-1-2026) volgens de AWVN cao-kijker; de cao-tekst 2026 is een scan en de loon- en arbeidsvoorwaarden staan in een apart reglement dat niet is gevonden Gagetabellen, vakantietoeslag en pensioen niet gevonden; vakantietoeslag hier op het wettelijke minimum van 8% gezet",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/0641_01-01-2026%20tot%2001-01-2027_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: { kind: 'own', unit: 'maand' },
  vergoedingen: [],
};
