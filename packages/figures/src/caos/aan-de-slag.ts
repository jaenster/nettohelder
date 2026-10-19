import type { Cao } from '../types.js';

/**
 * Cao Aan de slag 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Aan de slag
 * https://www.fnv.nl/getmedia/9e8d5181-2527-4548-8047-bdf39a47f153/2039-aan-de-slag-cao-01-01-2026-tm-31-12-2027-v24032026.pdf?ext=.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-01-01 (month) uit de bron
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-07-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoAanDeSlag2026: Cao = {
  id: 'aan-de-slag',
  name: "Cao Aan de slag",
  year: 2026,
  effectiveNote: "Cao 2026-01-01 t/m 2027-12-31; loontabel per 2026-01-01. Let op: Partijen: VNG, Cedris, FNV en CNV; cao voor werknemers met loonkostensubsidie (Participatiewet) bij ontwikkelbedrijven Schaalbedragen stijgen met het percentage van de WML-stijging per 1 januari en 1 juli (2026 en 2027); verhogingen per 2027 nog onbekend Loontabel per 1-1-2026 (37 uur); 'WML' in de tabel = wettelijk minimumloon (€ 2.367,58 per maand bij 37 uur), zo opgenomen; trede 0 is de eerste waarde Per 1-1-2027 gaat de normwerkweek van 37 naar 36 uur zonder achteruitgang in salaris (peildatum loon 1 juli 2026) Eindejaarsuitkering: vast bedrag van € 350 bruto per jaar (naar rato), niet als percentage uit te drukken Eenmalige uitkering € 150 bruto (naar rato) in november of december 2026 en 2027 Pensioen bij PWRI; werknemersaandeel is 30% van de pensioenpremie, premie en franchise niet gevonden Per 1 juli 2026 verhalen werkgevers niet langer 50% van de WGA-premie op werknemers",
  sourceUrl: "https://www.fnv.nl/getmedia/9e8d5181-2527-4548-8047-bdf39a47f153/2039-aan-de-slag-cao-01-01-2026-tm-31-12-2027-v24032026.pdf?ext=.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 37,
    schalen: {
      'Schaal 1': [2367.58, 2367.58, 2367.58, 2390, 2449],
      'Schaal 2': [2367.58, 2367.58, 2390, 2449, 2506, 2564],
      'Schaal 3': [2367.58, 2390, 2449, 2506, 2564, 2621, 2683, 2751],
    },
  },
  periods: [
    {
      from: '2026-07-01',
      note: "+1,9% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 37,
        schalen: {
          'Schaal 1': [2412.56, 2412.56, 2412.56, 2435.41, 2495.53],
          'Schaal 2': [2412.56, 2412.56, 2435.41, 2495.53, 2553.61, 2612.72],
          'Schaal 3': [2412.56, 2435.41, 2495.53, 2553.61, 2612.72, 2670.8, 2733.98, 2803.27],
        },
      },
    },
  ],
  vergoedingen: [],
};
