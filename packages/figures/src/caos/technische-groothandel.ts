import type { Cao } from '../types.js';

/**
 * CAO Technische Groothandel (Nederland) 2026 2026. DRAFT from cao-pipeline (confidence: high).
 * Source: CAO Technische Groothandel 1 oktober 2025 t/m 31 december 2027 - Bijlage 1 CAO-Salarisschalen (p.41-42); en CAO-salarisschaal per 1 juli 2025 (xlsx)
 * https://www.technischegroothandel.org/files/cao-technische-groothandel-2025-2027(6).pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Transponering: schaal 1=Functiegroep I (kolom 0) ... schaal 7=Functiegroep VII (kolom 6) - controleer dat de calculator functiegroepen zo nummert
 *   - Onregelmatig grid: FG I/II hebben maar 2 treden (+0, +1 beide gelijk), FG VII begint pas bij ervaringsjaar +1 (geen +0-rij) - tabelwaarden FG VII 1-7-2025: 16.45/16.93/17.42/17.89/18.38/18.86/19.36/19.87
 *   - Of de jeugd-/leeftijdsschalen (16-20 jaar) toch nodig zijn voor de calculator - nu uitgesloten
 *   - hoursPerWeek=40 is de CAO-referentieweek voor de EUR70-verhoging; uurloon is hours-onafhankelijk maar maandconversie gebruikt contracturen (art. 29)
 *   - pensioenfondsId=pmt: afhankelijk van werkingssfeer/bedrijfsactiviteiten; niet elke technische groothandel valt onder PMT
 *   - Base-tabel 'per 1 juli 2025' is aangenomen als geldig op 1-1-2026 (geen tussentijdse verhoging tussen 1-7-2025 en 1-4-2026) - bevestigd door loonparagraaf art. 32
 *   - EUR0,23/km is het CAO-MINIMUM voor reiskosten; werkgevers kunnen meer betalen
 *
 * Excluded: Jeugdschalen 16-20 jaar (leeftijdsafhankelijke uurlonen); Aanloop/inschaling op leeftijd (rijen 16-20 jaar); Ploegentoeslag en onregelmatigheidstoeslagen CAO-regeling A/B/C/D (25%-50%); Overwerktoeslagen; Toeslag 3% bij toepassing CAO-regeling B; Vitaliteitsbudget EUR 200/jaar (fulltime) / EUR 100 (<=50%); Eenmalige uitkeringen / voorschotverrekening (art. 32 lid 2); Loonsverhogingen na 2026 (1-1-2027 +1,75%, 1-7-2027 +EUR70)
 */
export const caoTechnischeGroothandel2026: Cao = {
  id: 'technische-groothandel',
  name: "CAO Technische Groothandel",
  year: 2026,
  effectiveNote: "Salaristabel `salary` geldt op 1 januari 2026 = de tabel 'per 1 juli 2025' (incl. CAO-verhoging 2,5% per 1-7-2025), die ongewijzigd doorloopt tot de volgende collectieve verhoging. Per 1 april 2026 worden alle brutosalarissen met 3,0% verhoogd (zie periods). De CAO loopt 1 okt 2025 t/m 31 dec 2027. De schaal is gebaseerd op het BRUTO UURLOON (unit=uur); maandsalaris = uurloon x (52 x contracturen/week / 12). Schalen 1-7 = Functiegroepen I-VII; tredes = ervaringsjaren (periodieken) vanaf 21 jaar (v.a. 21 jaar +0 .. +8). UITGESLOTEN: jeugdschalen (16-20 jaar), aanloop/inschaling op basis van leeftijd, ploegen-/overwerk-/onregelmatigheidstoeslagen (CAO-regeling A/B/C/D, 25-50%), vitaliteitsbudget (EUR 200/jaar), reiskostenvergoeding (apart opgenomen), eenmalige uitkeringen. Wettelijk minimum(uur)loon geldt altijd als ondergrens.",
  sourceUrl: "https://www.technischegroothandel.org/documentatie/arbeidsvoorwaarden-cao/",
  pensioenfondsId: 'pmt',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'functiejaar',
    unit: 'uur',
    hoursPerWeek: 40,
    schalen: {
      '1': [15.12, 15.12],
      '2': [15.12, 15.12],
      '3': [15.12, 15.22, 15.46, 15.57, 15.67],
      '4': [15.12, 15.35, 15.57, 15.78, 16.02, 16.24],
      '5': [15.12, 15.67, 15.88, 16.1, 16.33, 16.58, 16.91],
      '6': [15.12, 15.99, 16.39, 16.83, 17.28, 17.61, 18.04, 18.54],
      '7': [16.45, 16.93, 17.42, 17.89, 18.38, 18.86, 19.36, 19.87],
    },
  },
  periods: [
    {
      from: '2026-04-01',
      note: "+3,0% collectieve verhoging (alle brutosalarissen), tabel 'Salarisschaal per 1 april 2026' incl. WML-garantie per 1-7-2026",
      status: 'confirmed',
      salary: {
        kind: 'table',
        stepLabel: 'functiejaar',
        unit: 'uur',
        hoursPerWeek: 40,
        schalen: {
          '1': [15.57, 15.57],
          '2': [15.57, 15.57],
          '3': [15.57, 15.68, 15.92, 16.04, 16.14],
          '4': [15.57, 15.81, 16.04, 16.25, 16.5, 16.73],
          '5': [15.57, 16.14, 16.36, 16.58, 16.82, 17.08, 17.42],
          '6': [15.57, 16.47, 16.88, 17.33, 17.8, 18.14, 18.58, 19.1],
          '7': [16.94, 17.44, 17.94, 18.43, 18.93, 19.43, 19.94, 20.47],
        },
      },
    },
  ],
  vergoedingen: [
    {"id":"reiskosten-woon-werk","label":"Reiskostenvergoeding woon-werk","amount":0.23,"unit":"perKm","taxable":false,"note":"Minimaal EUR 0,23/km. Alleen bij woon-werkafstand >10 km (enkele reis); volledige afstand vergoed tot max 30 km enkele reis. Niet betaald als werkgever vervoer ter beschikking stelt. (Art. 22 CAO)"},
  ],
};
