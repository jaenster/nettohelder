import type { Cao } from '../types.js';

/**
 * Cao FremantleMedia Netherlands B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao FremantleMedia Netherlands B.V.
 * https://cao-kijker.awvn.nl/bestanden/2642_01-01-2026%20tot%2001-01-2027_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-01-01 (month) uit de bron
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoFremantleMedia2026: Cao = {
  id: 'fremantle-media',
  name: "Cao FremantleMedia Netherlands B.V.",
  year: 2026,
  effectiveNote: "Cao 2026-01-01 t/m 2026-12-31; loontabel per 2026-01-01. Let op: Cao 2026 afgesloten met Alternatief Voor Vakbond (AVV) Verhoging 2026: 3,3% (maximale CPI-correctie van 3% plus 0,3%), plus een discretionaire verhoging van max. 0,8% door leidinggevenden Jaarlijkse inflatiecorrectie per 1 januari op basis van afgeleide CPI (dec t/m nov), minimaal 0% en maximaal 3% Voor Junior Redacteur en Productie Assistent gelden jeugdstaffels van het wettelijk minimumloon; genoemde bedragen zijn voor 21 jaar en ouder Vakantietoeslag 8%, uitbetaald in mei Pensioen bij PNO Media; werknemer betaalt 33% van de totale pensioenpremie (werkgever 67%). Premiepercentage en franchise staan niet in de cao, daarom niet opgenomen Schaal = salarisbandbreedtes per functie (alleen minimum en maximum per maand, bijlage 1 van de cao 2026); de bijlage noemt geen ingangsdatum, hier 1-1-2026 (begin cao) aangenomen. Minimum en maximum staan als twee treden",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/2642_01-01-2026%20tot%2001-01-2027_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      'Junior Redacteur': [2570, 2655],
      'Redacteur': [2620, 3822],
      'Redacteur/Verslaggever': [3202, 4649],
      'Senior Redacteur': [3616, 4545],
      'Verslaggever/Itemregisseur': [3667, 5165],
      'Samensteller/Eindredacteur': [4132, 6198],
      'Productie Assistent': [2570, 2655],
      'Junior Producer': [2620, 2996],
      'Producer': [2789, 3616],
      'Senior Producer': [3409, 4132],
      'Productieleider': [3925, 5165],
      'Senior Productieleider': [4545, 5991],
    },
  },
  vergoedingen: [],
};
