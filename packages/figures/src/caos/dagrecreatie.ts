import type { Cao } from '../types.js';

/**
 * Cao Dagrecreatie 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Dagrecreatie
 * https://cnvstorageprd.blob.core.windows.net/media/documents/cao-dagrecreatie_2025_definitief.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2025-01-01 (hour) uit de bron
 *   - Basistabel 1-1-2026: tabel per 2025-01-01 verhoogd met +1% per 2025-07-01
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoDagrecreatie2026: Cao = {
  id: 'dagrecreatie',
  name: "Cao Dagrecreatie",
  year: 2026,
  effectiveNote: "Cao 2026-01-01 t/m 2026-12-31; loontabel per 2025-01-01. Let op: Aparte cao naast de Cao Recreatie (verblijfsrecreatie): geldt voor HISWA-RECRON-leden in de dagrecreatie die deze cao toepassen Cao 2025 (1-1-2025 t/m 31-12-2025) wordt volgens HISWA-RECRON in 2026 ongewijzigd voortgezet met een looptijd van een jaar Salarissen volgen de indexatieafspraak van de Cao Recreatie; per 1-1-2026 geen indexatie, alleen WML-bedragen stijgen mee. Loonsverhoging 2027 nog niet bekend Schaal = vakvolwassen uurlonen per 1-1-2025, alleen minimum en maximum per schaal (opgenomen als twee treden); de tabel per 1-7-2025 (+1%) stond niet leesbaar in de cao-PDF Wachtperiodiek (max. 1.040 uur) op WML voor schaal 1 t/m 3 niet opgenomen; jeugdlonen niet opgenomen Fulltime = normale arbeidstijd van 2.080 uur per kalenderjaar (40 uur per week) Pensioen: alleen vrijwillige aansluiting bij Stichting Pensioenfonds Recreatie mogelijk; geen premie opgenomen Geen eindejaarsuitkering of eenmalige uitkering gevonden",
  sourceUrl: "https://cnvstorageprd.blob.core.windows.net/media/documents/cao-dagrecreatie_2025_definitief.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'uur',
    hoursPerWeek: 40,
    schalen: {
      '1': [14.2, 14.2],
      '2': [14.2, 16.1],
      '3': [14.23, 17.04],
      '4': [14.88, 17.89],
      '5': [16.03, 19.51],
      '6': [17.28, 21.74],
      '7': [19.65, 24.36],
      '8': [22, 26.54],
      '9': [24.34, 29.4],
    },
  },
  vergoedingen: [],
};
