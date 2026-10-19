import type { Cao } from '../types.js';

/**
 * Cao SBOH 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao SBOH
 * https://www.sboh.nl/media/skmjrnoy/cao-sboh-2026.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-01-01 (month) uit de bron
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoSboh2026: Cao = {
  id: 'sboh',
  name: "Cao SBOH",
  year: 2026,
  effectiveNote: "Cao 2026-01-01 t/m 2026-12-31; loontabel per 2026-01-01. Let op: Cao voor artsen in opleiding (aios) tot huisarts, specialist ouderengeneeskunde, arts verstandelijk gehandicapten, (profiel)arts M+G, forensisch arts en verslavingsarts in dienst van SBOH; looptijd 1-1-2026 t/m 31-12-2026, wordt stilzwijgend met een jaar verlengd als niemand opzegt Structurele salarisverhoging van 4,0% per 1-1-2026 Salarissen per 1 januari 2026 per dienstjaar (1e t/m 8e dienstjaar) bij 38 uur per week; voor sommige opleidingen gelden aanvullende bedragen (o.a. € 5.443, € 5.627 en € 5.813) die niet zijn opgenomen Eindejaarsuitkering 4,9% van het jaarsalaris (december); vakantietoeslag 8% Pensioen bij Stichting Huisarts & Pensioen; premieverdeling 51,88% werkgever en 48,12% aios, premiepercentage niet gevonden",
  sourceUrl: "https://www.sboh.nl/media/skmjrnoy/cao-sboh-2026.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.049,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 38,
    schalen: {
      'aios': [4352, 4505, 4672, 4869, 5055, 5245, 5428, 5616],
    },
  },
  vergoedingen: [],
};
