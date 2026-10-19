import type { Cao } from '../types.js';

/**
 * Cao SD Guthrie International Zwijndrecht Refinery B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao SD Guthrie International Zwijndrecht Refinery B.V.
 * https://cao-kijker.awvn.nl/bestanden/3790_01-10-2025%20tot%2001-10-2027_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-10-01 (month) uit de bron
 *   - Basistabel 1-1-2026 teruggerekend uit de tabel per 2026-10-01 (gedeeld door +4%)
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-10-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoSdGuthrieZwijndrecht2026: Cao = {
  id: 'sd-guthrie-zwijndrecht',
  name: "Cao SD Guthrie International Zwijndrecht Refinery B.V.",
  year: 2026,
  effectiveNote: "Cao 2025-10-01 t/m 2027-09-30; loontabel per 2026-10-01. Let op: Cao 1-10-2025 t/m 30-9-2027 (onderhandelingsresultaat 6 oktober 2025 met FNV en CNV) Salarisschalen A-H zijn die voor dagdienst per 1-10-2026 (0-lijn t/m FV-treden); er is een aparte, iets lagere tabel voor ploegendienst. Aanloopschalen 1 en 2 niet opgenomen Assistant Managers (K-M) en Executives (2.1-2.3) hebben all-in jaarsalarissen (min/max); niet opgenomen BDA-regeling: gegarandeerde bonus 2% van het bruto jaarsalaris in 2026 (plus 2% variabel), 1% in 2027 (plus 3% variabel); niet als eindejaarsuitkering opgenomen Tegemoetkoming ziektekosten € 25 netto per maand vanaf 1-1-2026 Pensioen bij PGB (middelloon, opbouw 1,75%); franchise 2026 € 19.172. Eigen bijdrage werknemer volgens cao 3,6% 'van het pensioengevend inkomen' (sinds 2022); onduidelijk of dit over de pensioengrondslag (na franchise) gaat, daarom niet als pensioenveld opgenomen",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/3790_01-10-2025%20tot%2001-10-2027_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      'A': [3115.38, 3156.73, 3210.58, 3261.54, 3310.58, 3382.69],
      'B': [3194.23, 3245.19, 3297.12, 3351.92, 3415.38, 3473.08, 3542.31],
      'C': [3270.19, 3322.12, 3385.58, 3450, 3519.23, 3589.42, 3661.54, 3732.69],
      'D': [3352.88, 3423.08, 3496.15, 3575, 3647.12, 3727.88, 3798.08, 3860.58, 3944.23],
      'E': [3486.54, 3575, 3650, 3735.58, 3822.12, 3906.73, 3986.54, 4079.81, 4160.58],
      'F': [3664.42, 3755.77, 3850, 3943.27, 4034.62, 4126.92, 4221.15, 4346.15, 4430.77],
      'G': [3934.62, 4042.31, 4143.27, 4249.04, 4348.08, 4451.92, 4558.65, 4666.35, 4767.31, 4867.31],
      'H': [4211.54, 4332.69, 4456.73, 4577.88, 4702.88, 4828.85, 4954.81, 5075.96, 5200, 5373.08, 5480.77],
    },
  },
  periods: [
    {
      from: '2026-10-01',
      note: "+4% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          'A': [3240, 3283, 3339, 3392, 3443, 3518],
          'B': [3322, 3375, 3429, 3486, 3552, 3612, 3684],
          'C': [3401, 3455, 3521, 3588, 3660, 3733, 3808, 3882],
          'D': [3487, 3560, 3636, 3718, 3793, 3877, 3950, 4015, 4102],
          'E': [3626, 3718, 3796, 3885, 3975, 4063, 4146, 4243, 4327],
          'F': [3811, 3906, 4004, 4101, 4196, 4292, 4390, 4520, 4608],
          'G': [4092, 4204, 4309, 4419, 4522, 4630, 4741, 4853, 4958, 5062],
          'H': [4380, 4506, 4635, 4761, 4891, 5022, 5153, 5279, 5408, 5588, 5700],
        },
      },
    },
  ],
  vergoedingen: [],
};
