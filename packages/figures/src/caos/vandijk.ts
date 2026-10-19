import type { Cao } from '../types.js';

/**
 * Cao VanDijk (v/h The Learning Network) 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao VanDijk (v/h The Learning Network)
 * https://cao-kijker.awvn.nl/bestanden/2285_01-01-2026%20tot%2001-01-2027_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-01-01 (month) uit de bron
 *
 * Excluded: none stated
 */
export const caoVandijk2026: Cao = {
  id: 'vandijk',
  name: "Cao VanDijk (v/h The Learning Network)",
  year: 2026,
  effectiveNote: "Cao 2026-01-01 t/m 2026-12-31; loontabel per 2026-01-01. Let op: Cao 1-1-2026 t/m 31-12-2026 (verbeterd eindbod aan CNV en CGMV); structurele verhoging € 170 bruto per maand (fulltime) per 1-1-2026 voor medewerkers in dienst op 31-12-2025 Eenmalige uitkering € 250 bruto (fulltime) in juli 2026 alleen voor medewerkers in schaal 11 of hoger, in dienst op 31-12-2025 en nog werkzaam op 31-7-2026 Salarisschalen (min/max/uitloop) stijgen met € 170, behalve de minima van schaal 7 t/m 10 (gekoppeld aan het wettelijk minimum(jeugd)loon); de schaaltabel staat als afbeelding in de cao en is niet opgenomen Jaarlijkse competentieverhoging per 1 januari van 1,25%, 1,5% of 1,75% van het schaalgemiddelde, afhankelijk van positie in de schaal Tantième afhankelijk van het nettoresultaat, maximaal € 3.375 bruto per fulltime medewerker, alleen schaal 11 of hoger Pensioen basisregeling bij Pensioenfonds Detailhandel (2026): werknemersbijdrage 6,1875% van de grondslag, franchise € 18.680, maximum € 79.409; daarboven verplichte excedent-DC-regeling (werknemer 1/4 van de premie) Vakantietoeslag 8% van het jaarsalaris, uitbetaald in mei; voor schaal t/m 10 geen vakantiegeld over overwerk-/ploegentoeslagen Salarisschalen per 1 januari 2026 (cao-tekst blz. 16) zijn bandbreedtes zonder treden: opgenomen als [minimum, maximum]. Minimum schalen 7-9 is het WML (+5%/+10%) en volgt per 1 juli 2026 het nieuwe minimumloon. Uitloopschalen 10-19 (tot max. uitloop) niet opgenomen.",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/2285_01-01-2026%20tot%2001-01-2027_cao.pdf",
  pensioenfondsId: 'detailhandel',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      '7': [2549.68, 3080.35],
      '8': [2677.17, 3349.72],
      '9': [2804.65, 3645.93],
      '10': [2912.13, 3937.38],
      '11': [3019.6, 4240.02],
      '12': [3296.31, 4655.31],
      '13': [3547.34, 5059.11],
      '14': [3891.54, 5615.84],
      '15': [4402, 6374.93],
      '16': [5127.88, 7228.6],
      '17': [5945.44, 8392.04],
      '18': [7004.98, 9780.08],
      '19': [8111.2, 11561.12],
    },
  },
  vergoedingen: [],
};
