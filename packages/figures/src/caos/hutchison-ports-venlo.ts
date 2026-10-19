import type { Cao } from '../types.js';

/**
 * Cao Hutchison Ports Venlo 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Hutchison Ports Venlo
 * https://www.fnv.nl/getmedia/c9bff355-821f-4813-ad5d-1c5615611467/2091-hutchison-ports-venlo-cao-1-1-2025-tm-31-12-2027-v13092025.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2025-01-01 (month) uit de bron
 *   - Basistabel 1-1-2026: tabel per 2025-01-01 verhoogd met +4% per 2026-01-01
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoHutchisonPortsVenlo2026: Cao = {
  id: 'hutchison-ports-venlo',
  name: "Cao Hutchison Ports Venlo",
  year: 2026,
  effectiveNote: "Cao 2025-01-01 t/m 2027-12-31; loontabel per 2025-01-01. Let op: Cao 1-1-2025 t/m 31-12-2027 met FNV Per 1-1-2025 salaristabel incl. 8% indexatie Vanaf 1-1-2026 volgen de basismaandsalarissen de collectieve loonsverhogingen van de cao Beroepsgoederenvervoer (BGV), op hetzelfde moment; de 4% per 1-1-2026 is de BGV-verhoging zoals opgenomen in beroepsgoederenvervoer.json, niet in de HPV-cao zelf genoemd Daarnaast koopkrachtbehoud via een 'indexatiesaldo' (BGV-verhoging minus CPI, startsaldo 3,55% per 1-1-2025); bij een negatief saldo een inflatiecorrectie van maximaal 3% per jaar; uitkomst niet bekend Vakantietoeslag is 1,3 maal het bruto basismaandsalaris van april (omgerekend 10,83% van het jaarsalaris) Normale arbeidsduur 40 uur per week Pensioen via de bedrijfspensioenregeling zoals bij ECT; premie niet gevonden Salaristabel per 1-1-2025 (incl. 8% indexatie) overgenomen van de tabel-afbeelding in bijlage 1 (per maand, hele euro's; gecontroleerd tegen de tabel per 1-1-2024). Schaal 3-6: eerste trede is de aanloopschaal, daarna treden 0-12; schaal 7-9: treden 0-14.",
  sourceUrl: "https://www.fnv.nl/getmedia/c9bff355-821f-4813-ad5d-1c5615611467/2091-hutchison-ports-venlo-cao-1-1-2025-tm-31-12-2027-v13092025.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.10830000000000001,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      '3': [2584.4, 2620.8, 2734.16, 2850.64, 2966.08, 3082.56, 3196.96, 3313.44, 3428.88, 3543.28, 3659.76, 3776.24, 3888.56, 4006.08],
      '4': [2584.4, 2685.28, 2821.52, 2960.88, 3097.12, 3232.32, 3371.68, 3508.96, 3645.2, 3781.44, 3919.76, 4053.92, 4190.16, 4327.44],
      '5': [2600, 2745.6, 2903.68, 3063.84, 3225.04, 3385.2, 3546.4, 3706.56, 3868.8, 4027.92, 4189.12, 4350.32, 4511.52, 4670.64],
      '6': [3132.48, 3270.8, 3425.76, 3576.56, 3724.24, 3877.12, 4026.88, 4177.68, 4329.52, 4481.36, 4634.24, 4787.12, 4936.88, 5087.68],
      '7': [3374.8, 3533.92, 3695.12, 3856.32, 4017.52, 4177.68, 4339.92, 4499.04, 4659.2, 4819.36, 4981.6, 5141.76, 5304, 5465.2, 5624.32],
      '8': [3459.04, 3634.8, 3808.48, 3986.32, 4160, 4336.8, 4510.48, 4685.2, 4858.88, 5034.64, 5211.44, 5386.16, 5564, 5738.72, 5915.52],
      '9': [3915.6, 4100.72, 4286.88, 4470.96, 4658.16, 4846.4, 5029.44, 5216.64, 5402.8, 5588.96, 5775.12, 5961.28, 6148.48, 6336.72, 6523.92],
    },
  },
  vergoedingen: [],
};
