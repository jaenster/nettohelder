import type { Cao } from '../types.js';

/**
 * CAO Groothandel in Eieren en Eiproducten en de Eiproductenindustrie 2026. DRAFT from cao-pipeline (confidence: high).
 * Source: Staatscourant 2026, 15331 - CAO Groothandel in Eieren en Eiproducten en de Eiproductenindustrie 2026/2027 (avv), Bijlage I Salarisschalen
 * https://zoek.officielebekendmakingen.nl/stcrt-2026-15331.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Schaal II treden 0-4: 14,86 / 14,88 / 14,95 / 15,02 / 15,11 per uur
 *   - Schaal III treden 0-6: 14,91 / 14,97 / 15,11 / 15,42 / 15,62 / 15,83 / 16,03 per uur
 *   - Schaal IV treden 0-7: 15,00 / 15,40 / 16,04 / 16,15 / 16,26 / 16,36 / 16,51 / 16,68 per uur
 *   - Schaal V treden 0-8: 15,70 / 16,52 / 17,28 / 17,41 / 17,59 / 17,77 / 17,96 / 18,16 / 18,40 per uur
 *   - Schaal VI treden 0-9: 16,53 / 17,63 / 18,75 / 18,90 / 19,09 / 19,30 / 19,48 / 19,69 / 19,88 / 20,09 per uur
 *   - Schaal C treden 0-9: 14,91 / 15,67 / 16,48 / 17,07 / 17,60 / 18,16 / 18,62 / 19,13 / 19,62 / 20,13 per uur
 *   - hoursPerWeek = 38 (afgeleid uit art.: uurloon = maandsalaris gedeeld door 38; let op het CAO-voorbeeld rekent met 40 uur)
 *   - pensioenfondsId: CAO noemt Pensioenfonds PGB; geen exacte slug beschikbaar, daarom 'generiek'
 *   - geen eindejaarsuitkering vermeld in de CAO
 *
 * Excluded: jeugdschalen 17/18/19/20 jaar; reiskostenvergoeding woon-werk (afstandsgebonden maandtabel, niet als vast bedrag te modelleren); chauffeursvergoedingen / verblijfkosten eendaagse en meerdaagse ritten (Bijlage II); ploegendiensttoeslag; overwerktoeslag (30/50/100%); toeslag onaangename uren (50%); persoonlijke toeslagen; tabel per 01-01-2027 (buiten kalenderjaar 2026)
 */
export const caoEierenEnEiproductenGroothandel2026: Cao = {
  id: 'eieren-en-eiproducten-groothandel',
  name: "CAO Groothandel in Eieren en Eiproducten en de Eiproductenindustrie",
  year: 2026,
  effectiveNote: "Salaristabel per 01-01-2026 uit Bijlage I van de CAO (Staatscourant 2026 nr. 15331, 22 mei 2026; looptijd 01-01-2026 t/m 31-12-2027). Lonen zijn UURLONEN (uurloon is leidend; maandsalaris wordt afgeleid door uurloon x ca. 174 uur/maand, gebaseerd op een 38-urige werkweek). Transcribeerde de volwassen ervaringsjaren-treden (21 jaar+, treden 0-9) per salarisschaal II, III, IV, V, VI en C. EXCLUDED: jeugdschalen (17/18/19/20 jaar), reiskostenvergoeding woon-werk (afstandstabel), chauffeursvergoedingen/verblijfkosten (Bijlage II), ploegen-/overwerk-/onaangename-uren-toeslagen, en persoonlijke toeslagen. Volgende collectieve verhoging is per 01-01-2027 (buiten 2026, daarom geen periods). Lonen boven de cao-schalen +3% per 01-01-2026.",
  sourceUrl: "https://zoek.officielebekendmakingen.nl/stcrt-2026-15331.html",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'functiejaar',
    unit: 'uur',
    hoursPerWeek: 38,
    schalen: {
      'II': [14.86, 14.88, 14.95, 15.02, 15.11],
      'III': [14.91, 14.97, 15.11, 15.42, 15.62, 15.83, 16.03],
      'IV': [15, 15.4, 16.04, 16.15, 16.26, 16.36, 16.51, 16.68],
      'V': [15.7, 16.52, 17.28, 17.41, 17.59, 17.77, 17.96, 18.16, 18.4],
      'VI': [16.53, 17.63, 18.75, 18.9, 19.09, 19.3, 19.48, 19.69, 19.88, 20.09],
      'C': [14.91, 15.67, 16.48, 17.07, 17.6, 18.16, 18.62, 19.13, 19.62, 20.13],
    },
  },
  vergoedingen: [],
};
