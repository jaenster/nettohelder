import type { Cao } from '../types.js';

/**
 * Cao voor zaterdagbestellers PostNL 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao voor zaterdagbestellers PostNL
 * https://www.fnv.nl/getmedia/7ea371fa-3c1e-45db-87ce-766c35a356f6/386-postnl-zaterdagbestellers-cao-01-04-2024-tm-30-06-2026-v29112024.pdf?ext=.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-01-01 (hour) uit de bron
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoPostnlZaterdagbestellers2026: Cao = {
  id: 'postnl-zaterdagbestellers',
  name: "Cao voor zaterdagbestellers PostNL",
  year: 2026,
  effectiveNote: "Cao 2024-04-01 t/m 2026-06-30; loontabel per 2026-01-01. Let op: Uurlonen per 1-1-2026, schaaljaren 0 t/m 4 (vanaf 18 jaar); jeugdlonen 16 jaar € 11,58 en 17 jaar € 13,03 niet opgenomen. Jaarlijks per 1 april een stap tot het eindsalaris bij positief functioneren Zaterdagbestellers werken in deeltijd; er is geen voltijdnorm in de cao. 37 uur is de overwerkgrens bij Koninklijke PostNL (39,25 uur bij PostNL Pakketten Benelux) en hier alleen gebruikt om het uurloon om te rekenen Per 1-1-2025 nieuwe opgeschoonde salaristabel (jeugdlonen vanaf 18 jaar vervallen); 2,5% per 1-7-2024 Vakantie-uitkering 8% van het ontvangen salaris, uitbetaald in mei Resultaatafhankelijke uitkering zoals in de cao PostNL (variabel, niet opgenomen) Opvolgende cao vanaf 1-7-2026 niet gevonden",
  sourceUrl: "https://www.fnv.nl/getmedia/7ea371fa-3c1e-45db-87ce-766c35a356f6/386-postnl-zaterdagbestellers-cao-01-04-2024-tm-30-06-2026-v29112024.pdf?ext=.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'uur',
    hoursPerWeek: 37,
    schalen: {
      'Zaterdagbesteller': [14.48, 14.8, 15.12, 15.48, 15.78],
    },
  },
  vergoedingen: [],
};
