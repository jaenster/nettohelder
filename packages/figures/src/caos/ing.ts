import type { Cao } from '../types.js';

/**
 * CAO ING (Nederland) 2025-2026 2026. DRAFT from cao-pipeline (confidence: high).
 * Source: ING Bank cao 01-01-2025 t/m 31-12-2026 (v17112025), Bijlage 1 Salarisschalen 1 tot en met 15, pagina 42
 * https://www.fnv.nl/getmedia/e44d5930-5f58-41ed-84de-569673d2a919/1036-ing-bank-cao-01-01-2025-tm-31-12-2026-v17112025.pdf?ext=.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Alle min/max bedragen per salarisschaal 2 t/m 15 zoals per 1 juli 2025 (Bijlage 1) - getranscribeerd uit pdftotext, kolom-voor-kolom controleren
 *   - Bevestig dat er geen Schaal 1 in de officiele tabel staat (tabel begint bij Schaal 2)
 *   - Collectieve verhoging +3,5% per 1 juli 2026 op zowel minima als maxima - exacte 2e-helft-2026 bedragen niet in PDF, moeten worden afgeleid (1,035 x 1-juli-2025-bedragen)
 *   - Dertiende maand = 1/12 per maand -> eindejaarsuitkering 0,0833
 *   - Vakantietoeslag = 8% per maand via Mijn Keuze Budget
 *   - Pensioenfonds = ING CDC Pensioenfonds (eigen ondernemingsfonds, geen sectorfonds in de lijst -> generiek gekozen)
 *   - Thuiswerkvergoeding EUR 45 netto per maand
 *
 * Excluded: Schaal 1 (komt niet voor in de officiele Bijlage-1-tabel); Schalen 13-15: beleidsvrijheid, ING mag positief afwijken (boven-cao); Eenmalige uitkering EUR 1.500 bruto (januari 2025); Mijn Keuze Budget (~20% van maandsalaris, bevat vakantietoeslag + 13e maand + BIS); Pay for Growth structurele individuele verhogingen; Variabele beloning (VR, max 10% jaarsalaris voor bepaalde rollen); PTA / PTI / PTN / TIS / BIS persoonlijke toeslagen; Minimumuurloon EUR 16 en automatische WML-aanpassingen; 80-90-100 regeling, RVU-regeling; Salaristabel per 1 juli 2026 (+3,5%) - niet als aparte bedragentabel gepubliceerd in de PDF
 */
export const caoIng2026: Cao = {
  id: 'ing',
  name: "CAO ING",
  year: 2026,
  effectiveNote: "Salary table = ING-salarisschalen 1 t/m 15, bruto in euro bij een 36-urige werkweek, zoals geldig per 1 juli 2025 (Bijlage 1 van de CAO). Deze tabel is ook van kracht op 1 januari 2026 en blijft gelden tot 30 juni 2026. PER 1 JULI 2026 ontvangt iedereen een collectieve verhoging van 3,5% en worden de minima en maxima van de salarisschalen eveneens met 3,5% verhoogd. De CAO-PDF publiceert GEEN aparte bedragentabel per 1 juli 2026 (alleen de tabel per 1 juli 2025), daarom is de 1-juli-2026-tabel hier NIET als losse periode opgenomen om geen geinflateerde bedragen te verzinnen; pas de 1-juli-2025-bedragen met +3,5% aan voor de tweede helft van 2026. ING gebruikt een bandmodel (min-max per salarisschaal), geen vaste trede-grid. EXCLUDED: schaal 1 (komt niet voor in de officiele tabel; voor schalen 13 t/m 15 geldt beleidsvrijheid/boven-cao mogelijk), de eenmalige uitkering van EUR 1.500 (jan 2025), Mijn Keuze Budget/Pay for Growth, variabele beloning, PTA/PTI/TIS toeslagen, en minimumuurloon-aanpassingen.",
  sourceUrl: "https://www.fnv.nl/cao-sector/finance/cao-ing",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: {
    kind: 'band',
    levelLabel: "Salarisschaal",
    unit: 'maand',
    levels: [
      { id: '2', min: 2496, max: 3114.31 },
      { id: '3', min: 2496, max: 3350.84 },
      { id: '4', min: 2496, max: 3648.13 },
      { id: '5', min: 2496, max: 3957.12 },
      { id: '6', min: 2568.62, max: 4340.21 },
      { id: '7', min: 2854.4, max: 4779.95 },
      { id: '8', min: 3339.44, max: 5526.17 },
      { id: '9', min: 3872.12, max: 6345.61 },
      { id: '10', min: 4596.95, max: 7460.78 },
      { id: '11', min: 5485.7, max: 8828.03 },
      { id: '12', min: 6500.6, max: 10389.47 },
      { id: '13', min: 7499.31, max: 11925.9 },
      { id: '14', min: 8827.33, max: 13969.07 },
      { id: '15', min: 10390.96, max: 16374.6 },
    ],
    defaultRsp: 0.9,
    hoursPerWeek: 36,
  },
  vergoedingen: [
    {"id":"thuiswerkvergoeding","label":"Thuiswerkvergoeding","amount":45,"unit":"perMaand","taxable":false,"note":"Netto EUR 45 per maand, onafhankelijk van het aantal thuiswerkdagen; ook bij minder dan 36 uur wordt het volledige bedrag uitgekeerd."},
  ],
};
