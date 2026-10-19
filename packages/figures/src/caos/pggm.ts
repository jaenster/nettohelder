import type { Cao } from '../types.js';

/**
 * CAO PGGM 2026 2026. DRAFT from cao-pipeline (confidence: high).
 * Source: CAO PGGM 1 januari 2026 t/m 31 december 2027 (versie 09042026), Bijlage 4: Salaristabellen
 * https://www.fnv.nl/getmedia/8fb157b5-ac4f-4b41-bd79-37a2589e7704/814-pggm-cao-01-01-2026-tm-31-12-2027-v09042026.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - PGGM Algemeen schaal 9 min 2316 / max 3309 (per 1-1-2026)
 *   - Schaal 19 min 9148 / max 13068 (per 1-1-2026)
 *   - vakantietoeslag 8% (art 5.6.3) en eindejaarsuitkering 8,33% (art 5.7.3)
 *   - Whether the 'PGGM Algemeen' loonlijn is the correct default for the general workforce vs the Vermogensbeheer loonlijnen
 *   - defaultRsp 0.9 assumption (band has Min 70% and Max 100%; RSP choice is a calculator assumption, not from the CAO)
 *   - 2027 figures (+3%) are correct transcription though out of 2026 scope
 *
 * Excluded: Loonlijn PGGM Vermogensbeheer BMO (afwijkende min/max vanaf schaal 14); Loonlijnen PGGM Vermogensbeheer FO Assetmanagement groep 1/2/3 (Max 3/4/5 = 100/110/120%); Promotieverhoging (4% van schaalmaximum) per schaal; Nominale toeslag en indexatietoeslag; Overwerk-, bereikbaarheids- en afwijkende-werkuren toeslagen; Eenmalige uitkering januari 2026: EUR 1.600 bruto + EUR 200 netto; Minimum bruto uurloon EUR 16 (EUR 2.496/maand) instroomgarantie voor schaal 9 en 10; Reiskosten/thuiswerk/leasebudget (Waar-je-werkt-budget) vergoedingen, niet als vaste bedragen in de cao-tabel opgenomen
 */
export const caoPggm2026: Cao = {
  id: 'pggm',
  name: "CAO PGGM 2026",
  year: 2026,
  effectiveNote: "[fonds→generiek, auto-gok afgekeurd] Salaristabel 'PGGM Algemeen' per 1 januari 2026, inclusief de 3,75% cao-verhoging (Bijlage 4). Bedragen zijn bruto maandbedragen op basis van 36 uur per week; Minimum = 70%, Maximum = 100% van de schaal. Per 1 januari 2027 volgt een verhoging van 3% (apart in de cao opgenomen, buiten 2026). EXCLUDED: de afwijkende loonlijnen Vermogensbeheer BMO en Vermogensbeheer FO Assetmanagement (groep 1/2/3 met Max 3/4/5), de promotieverhoging, nominale/indexatietoeslagen, overwerk- en bereikbaarheidstoeslagen, en de eenmalige uitkeringen (€1.600 bruto + €200 netto in januari 2026).",
  sourceUrl: "https://www.fnv.nl/getmedia/8fb157b5-ac4f-4b41-bd79-37a2589e7704/814-pggm-cao-01-01-2026-tm-31-12-2027-v09042026.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: {
    kind: 'band',
    levelLabel: "Salarisschaal",
    unit: 'maand',
    levels: [
      { id: '9', min: 2316, max: 3309 },
      { id: '10', min: 2375, max: 3393 },
      { id: '11', min: 2545, max: 3635 },
      { id: '12', min: 2807, max: 4010 },
      { id: '13', min: 3145, max: 4493 },
      { id: '14', min: 3712, max: 5303 },
      { id: '15', min: 4101, max: 5859 },
      { id: '16', min: 4653, max: 6647 },
      { id: '17', min: 5620, max: 8028 },
      { id: '18', min: 6973, max: 9962 },
      { id: '19', min: 9148, max: 13068 },
    ],
    defaultRsp: 0.9,
    hoursPerWeek: 36,
  },
  periods: [
    {
      from: '2027-01-01',
      note: "+3% collectieve verhoging (buiten kalenderjaar 2026; PGGM Algemeen min/max per schaal o.a. schaal 9: 2.386/3.408)",
      status: 'confirmed',
      salary: {
        kind: 'band',
        levelLabel: "Salarisschaal",
        unit: 'maand',
        levels: [
          { id: '9', min: 2386, max: 3408 },
          { id: '10', min: 2447, max: 3495 },
          { id: '11', min: 2621, max: 3744 },
          { id: '12', min: 2891, max: 4130 },
          { id: '13', min: 3240, max: 4628 },
          { id: '14', min: 3823, max: 5462 },
          { id: '15', min: 4225, max: 6035 },
          { id: '16', min: 4792, max: 6846 },
          { id: '17', min: 5788, max: 8269 },
          { id: '18', min: 7183, max: 10261 },
          { id: '19', min: 9422, max: 13460 },
        ],
        defaultRsp: 0.9,
        hoursPerWeek: 36,
      },
    },
  ],
  vergoedingen: [],
};
