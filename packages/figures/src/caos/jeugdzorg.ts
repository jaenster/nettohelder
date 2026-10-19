import type { Cao } from '../types.js';

/**
 * CAO Jeugdzorg Nederland 2026-2027 2026. DRAFT from cao-pipeline (confidence: high).
 * Source: Salarisbedragen Cao Jeugdzorg 2026-2027 (FCB / Jeugdzorg werkt!), Tabel 1: Salarisschalen per 1 januari 2026 (+3,7%)
 * https://www.jeugdzorg-werkt.nl/sites/fcb_jeugdzorg/files/2026-04/FCB-JZ-Salarisbedragen-CAO-2627.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Schaal 4 periodiek 0 en 1 zijn beide 2545,36 (bodembedrag); periodieken 11/12/13 zijn leeg (0,00) en daarom weggelaten - maximum reguliere periodiek 10, plus 2 uitloopperiodieken 3440,19 en 3548,45
 *   - Schaal 5: reguliere periodieken 0-11, plus 2 uitloopperiodieken 3695,45 en 3813,17 (periodieken 12/13 leeg)
 *   - Schalen 6 en 7: reguliere periodieken 0-11 plus 2 uitloopperiodieken (periodieken 12/13 leeg)
 *   - Schalen 8/9/10/11: reguliere periodieken 0-12 plus 2 uitloopperiodieken (periodiek 13 leeg)
 *   - Schalen 12/13: reguliere periodieken 0-13 plus 2 uitloopperiodieken (16 stappen)
 *   - Schalen 14/15: reguliere periodieken 0-13, GEEN uitloopperiodieken (uitlooprijen tonen 0,00)
 *   - Het ontbreken van een loonsverhoging per 1 juli 2026 - alleen het overwerkartikel verruimt per 1 juli 2026, salarissen blijven heel 2026 gelijk
 *   - eindejaarsuitkering 8,3% en vakantietoeslag 8% bevestigd via FBZ/secundaire bronnen, niet uit de salaristabel-PDF zelf
 *   - hoursPerWeek 36 als voltijdnorm voor Jeugdzorg
 *
 * Excluded: Salarisschaal Garantiebanen (tabel 3, gekoppeld aan WMUL); Salarisschaal I/D-banen (bijlage 9 art.1); Garantieschalen overgangsregeling (tabel 4, bijlage 9 art.3, schalen A-E); Bodembedragen vakantietoeslag (art. 7.3.c); Salaristabel per 1 januari 2027 (+3,4%, valt buiten 2026); Overwerkvergoeding en overige toeslagen
 */
export const caoJeugdzorg2026: Cao = {
  id: 'jeugdzorg',
  name: "CAO Jeugdzorg Nederland 2026-2027",
  year: 2026,
  effectiveNote: "Salaristabel per 1 januari 2026 (structurele verhoging +3,7% t.o.v. 2025). Bedragen zijn bruto maandsalarissen op basis van een voltijd dienstverband van 36 uur per week. De tabel is in 2026 stabiel: de eerstvolgende collectieve verhoging is +3,4% per 1 januari 2027 (buiten dit 2026-record). Per 1 juli 2026 is er GEEN loonsverhoging (alleen een verruiming van het overwerkartikel). Elke schaal bevat de periodieken 0 t/m maximum plus 2 uitloopperiodieken; lege (0,00) periodieken zijn weggelaten en hogere schalen lopen door tot periodiek 13. UITGESLOTEN: salarisschaal Garantiebanen (tabel 3), garantieschalen bijlage 9 (tabel 4), salarisschaal I/D-banen (bijlage 9 art.1), bodembedragen vakantietoeslag, en alle toeslagen/overwerkvergoedingen.",
  sourceUrl: "https://www.jeugdzorg-werkt.nl/sites/fcb_jeugdzorg/files/2026-04/FCB-JZ-Salarisbedragen-CAO-2627.pdf",
  pensioenfondsId: 'pfzw',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.083,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 36,
    schalen: {
      '4': [2545.36, 2545.36, 2602.49, 2684.63, 2769.18, 2856.12, 2946.21, 3038.68, 3135.15, 3233.89, 3335.05, 3440.19, 3548.45],
      '5': [2545.36, 2613.52, 2696.51, 2783.43, 2871.98, 2964.39, 3059.25, 3156.47, 3257.64, 3361.92, 3469.45, 3580.82, 3695.45, 3813.17],
      '6': [2715.49, 2803.95, 2894.88, 2988.93, 3086.12, 3186.45, 3290.03, 3396.71, 3507.35, 3621.12, 3738.9, 3860.63, 3986.28, 4115.1],
      '7': [2922.53, 3018.94, 3118.52, 3221.28, 3327.96, 3437.79, 3550.8, 3668.58, 3789.5, 3914.35, 4043.19, 4176.73, 4315.01, 4457.31],
      '8': [3055.29, 3158.01, 3263.12, 3372.98, 3486.02, 3602.18, 3723.1, 3847.97, 3976.79, 4110.33, 4247.87, 4390.1, 4537.08, 4688.85, 4846.11],
      '9': [3309.79, 3422.01, 3539, 3659.08, 3783.17, 3911.98, 4044.73, 4182.27, 4324.51, 4471.5, 4624.03, 4781.31, 4943.34, 5111.66, 5285.51],
      '10': [3601.4, 3725.47, 3854.31, 3987.05, 4124.61, 4266.83, 4413.8, 4566.35, 4724.42, 4887.2, 5055.54, 5230.2, 5410.39, 5596.91, 5790.55],
      '11': [4119.02, 4263.68, 4413.06, 4567.15, 4726.8, 4892.73, 5063.43, 5240.48, 5424.6, 5614.29, 5810.28, 6014.17, 6224.38, 6442.54, 6667.71],
      '12': [4537.08, 4698.32, 4865.08, 5037.34, 5216.77, 5401.72, 5593.74, 5792.14, 5997.59, 6210.18, 6430.67, 6659.04, 6895.34, 7140.34, 7394.04, 7656.4],
      '13': [5172.51, 5359.03, 5551.87, 5751.8, 5958.84, 6173.02, 6395.09, 6625.87, 6863.75, 7111.12, 7367.19, 7632.7, 7906.96, 8191.45, 8487.03, 8792.08],
      '14': [6481.25, 6717.52, 6963.34, 7216.99, 7480.96, 7753.62, 8036.56, 8329.75, 8634.01, 8949.35, 9275.73, 9614.02, 9965.66, 10329.23],
      '15': [7531.55, 7810.54, 8098.99, 8398.49, 8709.87, 9031.54, 9365.83, 9712.79, 10072.35, 10444.59, 10831.04, 11231.74, 11647.42, 12078.12],
    },
  },
  vergoedingen: [],
};
