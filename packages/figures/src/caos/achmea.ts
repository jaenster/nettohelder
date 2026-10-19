import type { Cao } from '../types.js';

/**
 * Cao Achmea 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Achmea
 * https://www.cnv.nl/documents/5394/Cao_Achmea_2025-2027.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2027-01-01 (month) uit de bron
 *   - Basistabel 1-1-2026 teruggerekend uit de tabel per 2027-01-01 (gedeeld door +3%)
 *   - Latere tabellen berekend uit de cao-verhogingen (2027-01-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoAchmea2026: Cao = {
  id: 'achmea',
  name: "Cao Achmea",
  year: 2026,
  effectiveNote: "Cao 2025-09-01 t/m 2027-08-31; loontabel per 2027-01-01. Let op: Cao is alleen met De Unie afgesloten; CNV-leden hebben het eindbod afgewezen Voltijd arbeidsduur is gemiddeld 34 uur per week; salarisschalen gelden bij 34 uur Salarisschalen A t/m K kennen alleen een minimum en maximum met een vast periodiekbedrag per schaal (per 1-1-2027 van € 44,80 in A tot € 311,25 in K); als treden zijn [minimum, maximum] opgenomen Eenmalige uitkering € 1.250 bruto in januari 2026 bij 34 uur of meer, voor wie op 31-12-2025 in dienst is; naar rato bij deeltijd en bij indiensttreding in 2025 Vakantietoeslag (8%) en eindejaarsuitkering (8,33%) worden maandelijks als 1/12 deel in het keuzebudget uitbetaald Winstuitkering van maximaal 3,3% van 12 maandsalarissen in juni, ter beslissing van de Raad van Bestuur; niet opgenomen Pensioen bij Stichting Pensioenfonds Achmea (SPA): eigen bijdrage 3,25% van de pensioengrondslag; franchise voor 2026 in de huidige regeling niet in de cao vermeld (alleen € 17.545 per 2024, jaarlijks geïndexeerd met cao-verhogingen), daarom niet opgenomen Nieuwe pensioenregeling (Wtp) beoogd per 1-7-2027: eigen bijdrage 4,25% van de pensioengrondslag, franchise € 19.172 (2026), maximum pensioengevend salaris € 137.800; wie 3,25% betaalde krijgt een persoonlijke toeslag van 0,8% van het pensioengevend salaris Cao loopt af op 31-08-2027; afspraken daarna nog niet bekend",
  sourceUrl: "https://www.cnv.nl/documents/5394/Cao_Achmea_2025-2027.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 34,
    schalen: {
      'A': [2439.78, 2526.77],
      'B': [2439.78, 2821.5],
      'C': [2472.12, 3157.88],
      'D': [2631.85, 3538.57],
      'E': [2940.9, 3971.17],
      'F': [3323.01, 4460.35],
      'G': [3694.15, 5022.78],
      'H': [4149.24, 5697.34],
      'I': [4663.68, 6578.24],
      'J': [5245.69, 7669.53],
      'K': [5918.21, 8940.04],
    },
  },
  periods: [
    {
      from: '2027-01-01',
      note: "+3% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 34,
        schalen: {
          'A': [2512.97, 2602.57],
          'B': [2512.97, 2906.15],
          'C': [2546.28, 3252.62],
          'D': [2710.81, 3644.73],
          'E': [3029.13, 4090.31],
          'F': [3422.7, 4594.16],
          'G': [3804.97, 5173.46],
          'H': [4273.72, 5868.26],
          'I': [4803.59, 6775.59],
          'J': [5403.06, 7899.62],
          'K': [6095.76, 9208.24],
        },
      },
    },
  ],
  vergoedingen: [],
};
