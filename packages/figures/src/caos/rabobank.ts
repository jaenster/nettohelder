import type { Cao } from '../types.js';

/**
 * CAO Rabobank (Nederland) 2025-2026 2026. DRAFT from cao-pipeline (confidence: high).
 * Source: Rabobank cao 2025-2026 (pagina 18-19, Salarisschalen per 1 januari 2026 en per 1 juni 2026)
 * https://cnvstorageprd.blob.core.windows.net/media/documents/Rabobank_cao_2025-2026.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Schalen 3 t/m 11 min/max per 1 januari 2026 (36u): 3 = 2496,00/2722,17; 4 = 2496,00/3049,49; 5 = 2542,43/3631,01; 6 = 2945,71/4206,72; 7 = 3446,88/4922,66; 8 = 4024,06/5746,78; 9 = 4930,94/7042,62; 10 = 5876,27/8394,65; 11 = 7407,66/10582,35
 *   - Schalen 3 t/m 11 min/max per 1 juni 2026 (36u): 3 = 2496,00/2776,61; 4 = 2496,00/3110,48; 5 = 2593,28/3703,63; 6 = 3004,62/4290,85; 7 = 3515,82/5021,11; 8 = 4104,54/5861,72; 9 = 5029,56/7183,47; 10 = 5993,80/8562,54; 11 = 7555,81/10794,00
 *   - eindejaarsuitkering: 13e maand = 1/12 van uitbetaalde maandsalarissen, hier als 0,0833 maandfractie
 *   - pensioenfondsId = generiek (Rabobank heeft eigen pensioenregeling, geen sectorfonds in de toegestane lijst)
 *   - Of SK A/SK B terecht zijn uitgesloten (zij staan op 40-urige werkweek-basis)
 *
 * Excluded: Senior kader A en B schalen (gepubliceerd op 40-urige werkweek-basis, niet proportioneel met de 36u-tabel); Aanloopschalen; Jaarlijkse individuele salarisaanpassing (GROW: 0%/2,5%/5%); Persoonlijke toeslag en ploegentoeslag; Employee Benefit Budget (EBB, 10% van maandinkomen); Reiskostenvergoeding woon-werkverkeer (netto staffel per afstand); Eenmalige uitkering EUR 500 netto december 2025; Eenmalige uitkering 2,5% jaarinkomen april 2026 en april 2027 voor medewerkers t/m schaal 8 aan schaalmaximum
 */
export const caoRabobank2026: Cao = {
  id: 'rabobank',
  name: "CAO Rabobank",
  year: 2026,
  effectiveNote: "Salaristabel schalen 3 t/m 11 op maandbasis bij een 36-urige werkweek, effectief per 1 januari 2026 (collectieve verhoging +4% plus marktconforme verhoging schaalmaxima; voor schalen 9 en 10 +5% en voor schaal 11 +10% extra, reeds verwerkt in deze min/max). Per 1 juni 2026 een tweede collectieve verhoging van +2% (zie periods). Maandbedragen niet lager dan EUR 2.496 (gebaseerd op minimumloon EUR 16/uur). Uitgesloten: Senior kader A en B schalen (gepubliceerd op 40-urige basis, niet proportioneel met de 36u-tabel), aanloopschalen, jaarlijkse individuele GROW-aanpassing, persoonlijke toeslag, ploegentoeslag, Employee Benefit Budget (EBB 10%), reiskostenvergoeding woon-werk, eenmalige uitkeringen (EUR 500 dec 2025; 2,5% jaarinkomen apr 2026/2027).",
  sourceUrl: "https://cnvstorageprd.blob.core.windows.net/media/documents/Rabobank_cao_2025-2026.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: {
    kind: 'band',
    levelLabel: "Salarisschaal",
    unit: 'maand',
    levels: [
      { id: '3', min: 2496, max: 2722.17 },
      { id: '4', min: 2496, max: 3049.49 },
      { id: '5', min: 2542.43, max: 3631.01 },
      { id: '6', min: 2945.71, max: 4206.72 },
      { id: '7', min: 3446.88, max: 4922.66 },
      { id: '8', min: 4024.06, max: 5746.78 },
      { id: '9', min: 4930.94, max: 7042.62 },
      { id: '10', min: 5876.27, max: 8394.65 },
      { id: '11', min: 7407.66, max: 10582.35 },
    ],
    defaultRsp: 0.9,
    hoursPerWeek: 36,
  },
  periods: [
    {
      from: '2026-06-01',
      note: "+2% collectieve salarisaanpassing (schalen 3 t/m 11, 36-urige werkweek)",
      status: 'confirmed',
      salary: {
        kind: 'band',
        levelLabel: "Salarisschaal",
        unit: 'maand',
        levels: [
          { id: '3', min: 2496, max: 2776.61 },
          { id: '4', min: 2496, max: 3110.48 },
          { id: '5', min: 2593.28, max: 3703.63 },
          { id: '6', min: 3004.62, max: 4290.85 },
          { id: '7', min: 3515.82, max: 5021.11 },
          { id: '8', min: 4104.54, max: 5861.72 },
          { id: '9', min: 5029.56, max: 7183.47 },
          { id: '10', min: 5993.8, max: 8562.54 },
          { id: '11', min: 7555.81, max: 10794 },
        ],
        defaultRsp: 0.9,
        hoursPerWeek: 36,
      },
    },
  ],
  vergoedingen: [],
};
