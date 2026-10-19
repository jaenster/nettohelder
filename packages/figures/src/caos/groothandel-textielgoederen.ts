import type { Cao } from '../types.js';

/**
 * CAO Groothandel in Textielgoederen en aanverwante artikelen 2024-2026 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Onderhandelingsresultaat CAO Groothandel in Textielgoederen en aanverwante artikelen 2024-2026 (Bijlage loonschalen, per 1 oktober 2025 +4%)
 * https://www.unie.nl/wp-content/uploads/20241106-Onderhandelingsresultaat-Groothandel-Textiel-cao-2024-2026-cpt.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Functiegroep III bedragen per 1-10-2025: salarisnummer 2=2349, 3=2383, 4=2416, 5=2448 (irregular grid - III start pas bij salarisnummer 2)
 *   - Functiegroep IV bedragen: salarisnummer 1=2363, 2=2400, 3=2443, 4=2488, 5=2532, 6=2580, 7=2765
 *   - Functiegroep V bedragen: salarisnummer 1=2466, 2=2518, 3=2570, 4=2617, 5=2670, 6=2719, 7=2765 - LET OP: V salarisnummer 7 (2765) en IV salarisnummer 7 (2765) lijken identiek in de gerenderde tabel; controleer of dit een uitlijningsartefact is (Dec-2024 V7=2658 -> x1.04=2765, dus 2765 klopt voor V7; IV7 in Dec-2024 was 2658? verifieer kolomuitlijning)
 *   - Functiegroep VI bedragen: salarisnummer 1=2590, 2=2660, 3=2723, 4=2788, 5=2853, 6=2917, 7=2982
 *   - Kolomuitlijning van de tabel in de PDF-bijlage is lastig; bedragen per functiegroep en salarisnummer kruiscontroleren tegen het officiele cao-boekje 2024-2026 (artikel 3.4)
 *   - Pensioenfonds: sector zou per 2017 zijn overgegaan naar Pensioenfonds Detailhandel; er loopt een werkgroep over aansluiting bij BPF MITT. detailhandel-slug is een aanname - verifieer welk fonds in 2026 verplicht is
 *   - Eindejaarsuitkering: geen 13e maand gevonden in onderhandelingsresultaat - bevestig dat deze inderdaad ontbreekt
 *   - Vakantiegeld 8% is aangenomen (standaard), niet expliciet gelezen in dit document
 *
 * Excluded: WML-cellen (functiegroep I volledig, functiegroep II grotendeels, salarisnummer 0 voor alle groepen, en laagste salarisnummers per groep) - deze volgen het wettelijk minimumloon en hebben geen vast CAO-bedrag; salarissen boven het loongebouw (eigen verhogingsregime 3,5%/2,5%); toeslag Textielbrevet en toeslag Chauffeursdiploma; overwerkvergoeding; eenmalige uitkering EUR 400 bruto (per 1-1-2025); minimum stagevergoeding EUR 300/maand
 */
export const caoGroothandelTextielgoederen2026: Cao = {
  id: 'groothandel-textielgoederen',
  name: "CAO Groothandel Textielgoederen",
  year: 2026,
  effectiveNote: "Salaristabel zoals geldig per 1 oktober 2025 (+4%), die ongewijzigd doorloopt in 2026 tot het einde van de CAO-looptijd op 30 juni 2026. Geen verdere collectieve verhoging gepland binnen 2026 (nieuwe CAO-onderhandelingen starten 3 maanden voor 30 juni 2026). Bedragen zijn bruto per maand op fulltime basis (38 uur/week). EXCLUDED: alle salarisnummers/cellen die op het wettelijk minimumloon (WML) staan zijn niet opgenomen omdat ze het wettelijk minimumloon volgen en geen vast bedrag in de CAO hebben (dit betreft functiegroep I volledig, functiegroep II grotendeels, en de laagste salarisnummers); functiegroep-indeling/salarisnummer-0-rij (allemaal WML); salarissen boven het loongebouw; toeslagen (Textielbrevet, Chauffeursdiploma), overwerkvergoeding; eenmalige uitkering van EUR 400 (per 1-1-2025); stagevergoeding.",
  sourceUrl: "https://www.fnv.nl/cao-sector/handel/cao-groothandel-textielgoederen",
  pensioenfondsId: 'detailhandel',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 38,
    schalen: {
      'III': [2349, 2383, 2416, 2448],
      'IV': [2363, 2400, 2443, 2488, 2532, 2580, 2765],
      'V': [2466, 2518, 2570, 2617, 2670, 2719, 2765],
      'VI': [2590, 2660, 2723, 2788, 2853, 2917, 2982],
    },
  },
  vergoedingen: [
    {"id":"reiskosten-woon-werk","label":"Reiskostenvergoeding woon-werkverkeer","amount":0.23,"unit":"perKm","taxable":false,"note":"Netto EUR 0,23/km voor woon-werkverkeer bij een afstand van 15 tot maximaal 30 km enkele reis. Geldt niet als de werkgever al op andere wijze (bv. OV) vergoedt. Volgt de fiscale ruimte van de Belastingdienst."},
  ],
};
