import type { Cao } from '../types.js';

/**
 * CAO Facilitaire Contactcenters 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: CAO Facilitaire Contactcenters 1-1-2025 t/m 31-12-2027 (document 1441, v16-12-2024) + FNV-bericht 'Loonsverhoging callcenters per 1 januari 2026'
 * https://www.fnv.nl/getmedia/77207497-c37e-42a4-82dc-caff32a31191/1441-facilitaire-contactcenters-cao-01-01-2025-tm-31-12-2027-v16122024.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Klantadviseur level 1 uurloon per 1-1-2026 = EUR 15,28 (4,8% verhoging; bron FNV-bericht, niet in cao-PDF die '?' laat)
 *   - Klantadviseur level 2 = EUR 15,58 en level 3 = EUR 15,89 per 1-1-2026
 *   - Direct Leidinggevende level 1/2/3 = EUR 16,81 / 17,14 / 17,48 per 1-1-2026 (= Klantadviseur +10%)
 *   - maandbedragen die FNV noemt (L1 EUR 2.648,03 bij 40 uur) wijken licht af van uurloon x 40 x 52/12 = ca. 2.648,53 — controleer de exacte maand-conversiefactor
 *   - veronderstelde fulltime week = 40 uur
 *   - of de 4,8% klopt: cao-PDF zegt formule WML(1-1-2026) + 3,85%; het FNV-bericht noemt 4,8% effectieve stijging t.o.v. 2025
 *   - pensioen: geen sectorfonds genoemd in cao (eigen regeling, werkgever 6,5% + medewerker 2,2% = 8,7% in 2026) -> pensioenfondsId 'generiek'
 *   - geen eindejaarsuitkering/13e maand in cao gevonden
 *
 * Excluded: jeugdlonen 16-20 jaar (19/20-jarigen = WML-jeugdloon + 3,85% in 2026); individuele beoordelingsverhoging (tot ca. 1,3%); variabele beloning; toeslag extra rol (min EUR 0,50 bruto/uur); thuiswerkvergoeding (netto, min. fiscale vrijstelling; +EUR 0,50/dag eigen device); reiskostenvergoeding (Bijlage 2); verhogingen per 1-1-2027
 */
export const caoCallcenters2026: Cao = {
  id: 'callcenters',
  name: "CAO Facilitaire Contactcenters",
  year: 2026,
  effectiveNote: "Salaristabel per 1 januari 2026 (cao-loonsverhoging van 4,8% t.o.v. 2025; bron: FNV-bericht december 2025). De cao definieert per level alleen een MINIMUM cao-uurloon, gelijk aan het wettelijk minimumuurloon (WML) per 1-1-2026 plus 3,85%, met level 2 = +2% en level 3 = +4% t.o.v. level 1; Direct Leidinggevende = +10% t.o.v. het vergelijkbare Klantadviseur-level. Bedragen zijn per uur bij een fulltime week van 40 uur (maandequivalent ca. uurloon x 40 x 52 / 12). De cao-PDF zelf laat de 2026-bedragen open ('?') omdat ze afhangen van het WML dat in Q4 2025 werd bekendgemaakt; de hier opgenomen bedragen komen uit het FNV-loonsverhogingsbericht van december 2025. Looptijd cao: 1-1-2025 t/m 31-12-2027. UITGESLOTEN: jeugdlonen (16-20 jaar), individuele beoordelingsverhoging (tot ~1,3%), variabele beloning, toeslag extra rol (min EUR 0,50/uur), thuiswerkvergoeding, reiskostenvergoeding, en de afzonderlijke verhogingen per 1-1-2027.",
  sourceUrl: "https://www.fnv.nl/nieuwsbericht/sectornieuws/ict/2025/12/loonsverhoging-callcenters-per-1-januari-2026",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'uur',
    hoursPerWeek: 40,
    schalen: {
      'Klantadviseur level 1': [15.28],
      'Klantadviseur level 2': [15.58],
      'Klantadviseur level 3': [15.89],
      'Direct Leidinggevende level 1': [16.81],
      'Direct Leidinggevende level 2': [17.14],
      'Direct Leidinggevende level 3': [17.48],
    },
  },
  vergoedingen: [],
};
