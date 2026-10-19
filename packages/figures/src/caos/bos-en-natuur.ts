import type { Cao } from '../types.js';

/**
 * CAO Bos en Natuur (ondernemingsdeel De Landschappen) 2026. DRAFT from cao-pipeline (confidence: high).
 * Source: Salaristabel cao Bos en natuur 2024-2026 ondernemingsdeel De Landschappen (VBNE)
 * https://vbne.nl/wp-content/uploads/2024/11/Salaristabel-Cao-Bos-en-natuur-2024-2026-ondernemingsdeel-Landschappen.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Whether the Landschappen ondernemingsdeel is the right variant to model (vs Bosbouw or Natuurmonumenten, each with own table)
 *   - All schaal x periodiek amounts in the per-1-nov-2025 table (irregular grid: schalen 2-5 have periodiek 0-6, schaal 6 has 0-8, schalen 7-12 have 0-10)
 *   - hoursPerWeek = 38 for voltijd
 *   - No structural eindejaarsuitkering / 13th month in this CAO (set to 0)
 *   - The +3,2% per 1 september 2026 increase (onderhandelingsresultaat cao 2026-2028, 15-4-2026) and that no official Sept-2026 table is yet published
 *   - vakantiegeld 8% (standard, not separately re-confirmed in this PDF)
 *   - reiskosten EUR 0,23/km and thuiswerk EUR 2,35/dag amounts and tax-free status
 *
 * Excluded: Bosbouw ondernemingsdeel (eigen tabel); Natuurmonumenten ondernemingsdeel (eigen tabel); participatiewet-/120%-WML-schaal; jeugd- en BBL-leerlingschalen; ORT / onregelmatigheidstoeslag; eenmalige uitkering EUR 100; salaristabel per 1 september 2026 (+3,2%, nog niet gepubliceerd)
 */
export const caoBosEnNatuur2026: Cao = {
  id: 'bos-en-natuur',
  name: "CAO Bos en Natuur (ondernemingsdeel De Landschappen)",
  year: 2026,
  effectiveNote: "Table effective 1 januari 2026 = 'Salaristabel per 1 november 2025' (raam-cao Bos en Natuur 2024-2026, ondernemingsdeel De Landschappen, +4,0% t.o.v. 1 nov 2024). Bruto maandsalaris bij voltijd (38 uur/week). PENDING/PROVISIONAL: een onderhandelingsresultaat voor cao 2026-2028 (15 april 2026) voorziet +3,2% per 1 september 2026 en +3,8% per 1 juli 2027; de bijbehorende salaristabel per 1 september 2026 is nog niet gepubliceerd, dus niet in 'periods' opgenomen (geen tabel verzonnen). EXCLUDED: de varianten Bosbouw en Natuurmonumenten (eigen tabellen), participatiewet-/120%-WML-schaal, jeugd-/BBL-leerlingschalen, ORT/onregelmatigheidstoeslag, reiskostenvergoeding, thuiswerkvergoeding, en de eenmalige uitkering van EUR 100.",
  sourceUrl: "https://vbne.nl/wp-content/uploads/2024/11/Salaristabel-Cao-Bos-en-natuur-2024-2026-ondernemingsdeel-Landschappen.pdf",
  pensioenfondsId: 'bpl',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 38,
    schalen: {
      '2': [2785.52, 2839.64, 2893.76, 2949.47, 3003.59, 3057.71, 3111.83],
      '3': [2904.9, 2982.9, 3060.89, 3138.89, 3215.29, 3293.29, 3371.28],
      '4': [3040.2, 3143.66, 3247.13, 3350.59, 3452.46, 3555.92, 3659.38],
      '5': [3208.92, 3337.85, 3465.19, 3594.12, 3721.46, 3850.39, 3977.73],
      '6': [3494.71, 3621.21, 3747.72, 3874.22, 4000.73, 4127.23, 4253.74, 4380.24, 4506.75],
      '7': [4048.17, 4196.81, 4345.45, 4494.1, 4642.74, 4791.38, 4940.03, 5088.67, 5237.31, 5385.96, 5534.6],
      '8': [4511.34, 4674.25, 4835.6, 4998.51, 5159.85, 5322.76, 5484.1, 5647.01, 5808.36, 5971.27, 6132.61],
      '9': [5047.07, 5231.91, 5416.75, 5600.02, 5784.86, 5969.7, 6154.54, 6339.38, 6522.65, 6707.49, 6892.33],
      '10': [5554.6, 5767.16, 5979.72, 6192.29, 6404.85, 6617.42, 6829.98, 7042.54, 7255.11, 7467.67, 7680.24],
      '11': [6316.41, 6528.98, 6741.54, 6954.11, 7166.67, 7379.23, 7591.8, 7804.36, 8016.93, 8229.49, 8442.05],
      '12': [7227.18, 7455.26, 7681.79, 7909.87, 8137.95, 8366.03, 8594.11, 8820.64, 9048.72, 9276.8, 9504.87],
    },
  },
  vergoedingen: [
    {"id":"reiskosten","label":"Reiskostenvergoeding woon-werk","amount":0.23,"unit":"perKm","taxable":false,"note":"EUR 0,23/km per 1 nov 2024 (verhoogd van 0,22)"},
    {"id":"thuiswerk","label":"Thuiswerkvergoeding","amount":2.35,"unit":"perDag","taxable":false,"note":"EUR 2,35/dag per 1 nov 2024 (verhoogd van 2,15)"},
  ],
};
