import type { Cao } from '../types.js';

/**
 * Cao Talent&Pro 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Talent&Pro
 * https://cao-kijker.awvn.nl/bestanden/3897_01-01-2026%20tot%2001-07-2026_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-01-01 (month) uit de bron
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoTalentPro2026: Cao = {
  id: 'talent-pro',
  name: "Cao Talent&Pro",
  year: 2026,
  effectiveNote: "Cao 2026-01-01 t/m 2026-06-30; loontabel per 2026-01-01. Let op: Geen algemene loonsverhoging: salarisverhoging per 1-1-2026 hangt af van beoordeling, fase en functie (vaste bedragen of percentages volgens referentiehuis) Eenmalige netto uitkering van €500 (naar rato parttime) op 26 januari 2026 voor kantoormedewerkers Salarisschalen kantoormedewerkers geven alleen min/max per niveau (Junior, Medior, Medior B, Senior) en zijn niet voor alle groepen volledig; niet opgenomen Pensioen kantoormedewerkers bij Nationale-Nederlanden (beschikbare premie), eigen bijdrage 4% van de pensioengrondslag; franchise alleen voor 2024 vermeld (€18.798), daarom niet opgenomen Pensioen consultants via StiPP Bonus- en declarabiliteitsregelingen afhankelijk van bedrijfsresultaten en prestaties; niet opgenomen Cao liep af op 30-6-2026; geen nieuwe cao gevonden Salaristabel consultants (cao 1-1-2026 t/m 30-6-2026): alleen bandbreedte min-max per fase en spoor, opgenomen als [min, max]; Principal House of Bèta (hybride model) en de salarisschalen kantoormedewerkers zijn niet opgenomen",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/3897_01-01-2026%20tot%2001-07-2026_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.0833,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      'Regulier Potential': [2559.54, 3156.75],
      'Regulier Talent': [2585.75, 3156.75],
      'Regulier Pro': [2742.75, 3907.13],
      'Regulier Principal': [3363.75, 5252.63],
      'House of Bèta Potential': [2559.54, 3363.75],
      'House of Bèta Talent': [2585.75, 3363.75],
      'House of Bèta Mastership': [2770, 3363.75],
      'House of Bèta Specialist': [3130.88, 4398.75],
      'House of Bèta Senior Specialist': [4165.88, 5149.13],
      'CRL/BCM Potential': [2559.54, 3363.75],
      'CRL/BCM Talent': [2585.75, 3363.75],
      'CRL/BCM Mastership': [2770, 3363.75],
      'CRL/BCM Pro': [2846.25, 4114.13],
      'CRL/BCM Principal': [3467.25, 5459.63],
    },
  },
  vergoedingen: [],
};
