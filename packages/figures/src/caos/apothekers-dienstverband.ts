import type { Cao } from '../types.js';

/**
 * Cao Apothekers in Dienstverband 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Apothekers in Dienstverband
 * https://www.knmp.nl/sites/default/files/2025-12/cao_apothekers_in_dienstverband_2025_2027.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-09-01 (month) uit de bron
 *   - Basistabel 1-1-2026 teruggerekend uit de tabel per 2026-09-01 (gedeeld door +4,25%, +1%)
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-04-01, 2026-09-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoApothekersDienstverband2026: Cao = {
  id: 'apothekers-dienstverband',
  name: "Cao Apothekers in Dienstverband",
  year: 2026,
  effectiveNote: "Cao 2025-03-01 t/m 2027-03-31; loontabel per 2026-09-01. Let op: Eindejaarsuitkering 3% in 2025 en 5% in 2026 (pensioengevend, telt niet mee voor vakantietoeslag). Eenmalige uitkering in december 2025: 2,55% van 12 x het bruto maandsalaris van december 2025 (incl. eventuele toelage); niet als vast bedrag uit te drukken. Pensioen bij Stichting Pensioenfonds Openbare Apothekers (SPOA); premie 50/50 verdeeld, percentage en franchise niet in de cao. Andere cao dan de Cao Apotheken (apotheekpersoneel). Schaal: bijlage 1 (salarisschalen per maand bij 38 uur per week) per 1-9-2026, dienstjaren 0 t/m 11. Bijlage 2 bevat aparte bedragen voor 40 uur (Do-the-job contract); niet opgenomen. Bron bijlage: https://www.knmp.nl/sites/default/files/2025-10/bijlage_1_salarisschalen_per_maand_op_basis_van_een_38-urige_werkweek.pdf",
  sourceUrl: "https://www.knmp.nl/sites/default/files/2025-12/cao_apothekers_in_dienstverband_2025_2027.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.05,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 38,
    schalen: {
      'Gevestigd apotheker': [4554.32, 4782.04, 5021.14, 5272.2, 5535.81, 5812.6, 6103.23, 6408.39, 6728.81, 7065.24, 7418.51, 7789.43],
      'Tweede apotheker': [3554.23, 3731.94, 3918.54, 4114.46, 4320.18, 4536.2, 4763.01, 5001.15, 5251.21, 5513.77, 5789.45, 6078.93],
    },
  },
  periods: [
    {
      from: '2026-04-01',
      note: "+4,25% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 38,
        schalen: {
          'Gevestigd apotheker': [4747.88, 4985.28, 5234.53, 5496.27, 5771.08, 6059.63, 6362.61, 6680.74, 7014.78, 7365.51, 7733.79, 8120.49],
          'Tweede apotheker': [3705.29, 3890.54, 4085.08, 4289.33, 4503.79, 4728.99, 4965.44, 5213.7, 5474.39, 5748.11, 6035.5, 6337.29],
        },
      },
    },
    {
      from: '2026-09-01',
      note: "+1% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 38,
        schalen: {
          'Gevestigd apotheker': [4795.36, 5035.13, 5286.88, 5551.23, 5828.79, 6120.23, 6426.24, 6747.55, 7084.93, 7439.17, 7811.13, 8201.69],
          'Tweede apotheker': [3742.34, 3929.45, 4125.93, 4332.22, 4548.83, 4776.28, 5015.09, 5265.84, 5529.13, 5805.59, 6095.86, 6400.66],
        },
      },
    },
  ],
  vergoedingen: [],
};
