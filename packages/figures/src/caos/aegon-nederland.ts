import type { Cao } from '../types.js';

/**
 * CAO Aegon Nederland 2026. DRAFT from cao-pipeline (confidence: high).
 * Source: Aegon CAO 1 januari 2026 t/m 31 december 2026 (v15012026), Bijlage 2 Salaristabel
 * https://www.fnv.nl/getmedia/4a2d04f8-f910-44fd-86c9-7e80af4b017d/1738-aegon-nederland-cao-01-01-2026-tm-31-12-2026-v15012026.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Of de eerste tabel in bijlage 2 (de niet-verhoogde) inderdaad de per-1-januari-2026 tabel is: beide tabellen dragen in de PDF het kopje 'per 1 juli 2026', maar de tweede is expliciet 'inclusief salarisverhoging' (+4,0%), dus de eerste is de tabel voor de verhoging (geldend vanaf 1 jan 2026)
 *   - Conversie jaarsalaris->maand (/12): officiele bedragen zijn vaste JAARsalarissen bij 2080 uur, ondanks dat de tekst 'bruto maandsalarissen' noemt (33.280 kan geen maandsalaris zijn voor schaal 6)
 *   - Maximum als bandgrens (100%); uitloopmaximum 110% bewust niet opgenomen als max
 *   - defaultRsp 0,9 is een aanname, niet uit de CAO
 *   - pensioenfondsId 'generiek': Aegon heeft een eigen individuele beschikbare premieregeling, geen sectorfonds uit de toegestane lijst
 *   - eindejaarsuitkering 8,33% afgeleid uit de overlijdensuitkering-tekst ('dertiende maand (8,33%)'); controleer of de 13e maand voor alle medewerkers structureel geldt
 *   - Alle 9 schalen x 3 kolommen (min/max/uitloop) beide tabellen
 *
 * Excluded: uitloopmaximum 110% per schaal; aanloopschaal (tijdelijk 1 schaal lager, max 2 jaar); Perform & Develop / RSP-salarisverhogingen (budget 2,25%); promotieverhoging 6% per schaal; flexbudget; vitaliteitsbudget EUR 200/jaar; toeslagen en eenmalige uitkeringen; schalen 1 t/m 5 (CAO geldt alleen voor schalen 6 t/m 14)
 */
export const caoAegonNederland2026: Cao = {
  id: 'aegon-nederland',
  name: "CAO Aegon Nederland",
  year: 2026,
  effectiveNote: "Salarisschalen 6 t/m 14 als band (minimum tot maximum=100%, uitloopmaximum 110% niet als bandgrens gebruikt). Bedragen in de officiele tabel zijn VASTE JAARSALARISSEN bij 40 uur/week (2080 uur/jaar); hier gedeeld door 12 naar maandsalaris. De `salary`-tabel geldt per 1 januari 2026 (eerste tabel in bijlage 2, voor de verhoging). Per 1 juli 2026 algemene salarisverhoging van 4,0% (max EUR 490/maand fulltime); de verhoogde tabel staat in `periods`. Uitgesloten: uitloopmaximum 110%, aanloopschaal (1 schaal lager, max 2 jaar), Perform&Develop/RSP-verhogingen, promotieverhoging 6%, flexbudget, vitaliteitsbudget (EUR 200/jaar), toeslagen en eenmalige uitkeringen.",
  sourceUrl: "https://www.fnv.nl/cao-sector/finance/cao-aegon-nederland",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: {
    kind: 'band',
    levelLabel: "Salarisschaal",
    unit: 'maand',
    levels: [
      { id: '6', min: 2773.33, max: 3865.68 },
      { id: '7', min: 2942.61, max: 4203.72 },
      { id: '8', min: 3221.68, max: 4602.39 },
      { id: '9', min: 3276.47, max: 5460.78 },
      { id: '10', min: 3752.1, max: 6253.5 },
      { id: '11', min: 4353.29, max: 7255.48 },
      { id: '12', min: 5156.83, max: 8594.71 },
      { id: '13', min: 6157.69, max: 10262.81 },
      { id: '14', min: 7386.57, max: 12310.95 },
    ],
    defaultRsp: 0.9,
    hoursPerWeek: 40,
  },
  periods: [
    {
      from: '2026-07-01',
      note: "+4,0% algemene salarisverhoging (max EUR 490/maand fulltime); verhoogde jaarsalaristabel uit bijlage 2, gedeeld door 12",
      status: 'confirmed',
      salary: {
        kind: 'band',
        levelLabel: "Salarisschaal",
        unit: 'maand',
        levels: [
          { id: '6', min: 2814.22, max: 4020.31 },
          { id: '7', min: 3060.31, max: 4371.87 },
          { id: '8', min: 3350.54, max: 4786.49 },
          { id: '9', min: 3407.53, max: 5679.21 },
          { id: '10', min: 3902.19, max: 6503.64 },
          { id: '11', min: 4527.42, max: 7545.7 },
          { id: '12', min: 5363.1, max: 8938.5 },
          { id: '13', min: 6403.99, max: 10673.32 },
          { id: '14', min: 7680.57, max: 12800.95 },
        ],
        defaultRsp: 0.9,
        hoursPerWeek: 40,
      },
    },
  ],
  vergoedingen: [],
};
