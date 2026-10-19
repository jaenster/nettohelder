import type { Cao } from '../types.js';

/**
 * CAO voor de Groothandel in Bloembollen 2026-2027 2026. DRAFT from cao-pipeline (confidence: high).
 * Source: Cao voor de Groothandel in Bloembollen - Looptijd van 1-1-2026 t/m 31-3-2027 (Bijlage II Loonschalen, p.38-43)
 * https://www.fnv.nl/getmedia/2554afff-c89c-430f-b47c-d84427b71d3c/1375-groothandel-in-bloembollen-cao-01-01-2026-tm-31-03-2027-v14042026.pdf?ext=.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Gebruik van de '1 maart 2026'-tabel als basis (salary) terwijl de cao formeel start op 1 januari 2026 - de 4% verhoging ging in per 1 maart 2026 en er is geen aparte jan-feb 2026 tabel gepubliceerd
 *   - Maandloon-grid 1 maart 2026 schaal B t/m H, alle tredes (zie p.39 van de PDF)
 *   - Maandloon-grid 1 mei 2026 schaal F (trede 11 = 3498.70), G en H (zie p.41 van de PDF) - dit is het herziene loongebouw
 *   - Trede 11 van schaal F per 1 mei 2026 = 3498.70 (was 3419.80 per 1 maart)
 *   - hoursPerWeek = 38 (uurloon = niet-afgerond maandloon/165,3); maandloon is afgeleid van weekloon x 52,2/12
 *   - eindejaarsuitkering = 0: '13e maand' en 'structurele eindejaarsuitkering' komen alleen voor in een opsomming van mogelijk uit te ruilen looncomponenten (WKR/cafetaria), niet als structurele cao-aanspraak
 *   - vakantietoeslag 8,33% (Artikel 07.01), niet 8%
 *   - Tredes 10 en 11 gelden alleen 'bij goed/uitstekend functioneren'
 *
 * Excluded: Functiegroep A (geen eigen loonrij; ten minste wettelijk minimumloon); Jeugdschalen 15-19 jaar (uur/week/maandlonen) en jeugdloonpercentages; Wettelijk minimum(jeugd)uurloon (Artikel 03.05 / Bijlage II); Aparte loontabel per 1 januari 2027 (buiten kalenderjaar 2026); Overuren- en urentoeslagen (Artikel 06.05); Jubileumuitkering (12,5 / 25 jaar dienst); Herindelingstabel Bijlage III (omzetting maart->mei tredes); Uur- en weeklonen (alleen maandlonen overgenomen)
 */
export const caoBloembollengroothandel2026: Cao = {
  id: 'bloembollengroothandel',
  name: "CAO voor de Groothandel in Bloembollen 2026-2027",
  year: 2026,
  effectiveNote: "Loonschalen 'vanaf 1 maart 2026' (maandlonen, gebaseerd op 38-urige werkweek = 165,3 uur/maand; uurloon = maandloon/165,3). De cao loopt 1-1-2026 t/m 31-3-2027; de 4% loonsverhoging ging in per 1 maart 2026 en is in deze tabel verwerkt. Per 1 mei 2026 zijn nieuwe loonschalen ingevoerd (herziening/uitbreiding van schalen F, G en H) - zie periods. Functiegroepen B t/m H; tredes 1-11 (trede 10-11 alleen 'bij goed/uitstekend functioneren'). EXCLUDED: functiegroep A (geen eigen loonrij, ten minste wettelijk minimumloon), alle jeugdschalen (15-19 jaar), wettelijk minimum(jeugd)uurloon, de aparte loontabel per 1 januari 2027 (valt buiten 2026), afstandsvergoeding/thuiswerkvergoeding (apart als vergoedingen), overuren-/urentoeslagen, jubileumuitkering en de herindelingstabel (Bijlage III).",
  sourceUrl: "https://www.fnv.nl/cao-sector/agrarisch-groen/bloembollengroothandel",
  pensioenfondsId: 'bpl',
  vakantiegeldPct: 0.0833,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 38,
    schalen: {
      'B': [2470.8, 2526.3, 2581.3, 2636.8, 2692.2, 2747.7],
      'C': [2636.8, 2692.2, 2747.7, 2786.6, 2826.4, 2865.1, 2903.8, 2943.6],
      'D': [2747.7, 2786.6, 2826.4, 2865.1, 2903.8, 2943.6, 2982.8, 3021.5, 3062],
      'E': [2865.1, 2903.8, 2943.6, 2982.8, 3021.5, 3062, 3101.1, 3140.3, 3180.9, 3221.4],
      'F': [3021.5, 3062, 3101.1, 3140.3, 3180.9, 3221.4, 3260.3, 3299.7, 3340.6, 3379.5, 3419.8],
      'G': [3221.4, 3260.3, 3299.7, 3340.6, 3379.5, 3419.8, 3459.1, 3498.7, 3539.4, 3578.3, 3618.8],
      'H': [3419.8, 3459.1, 3498.7, 3539.4, 3578.3, 3618.8, 3658.6, 3699.2, 3739.3, 3779.7, 3818.9],
    },
  },
  periods: [
    {
      from: '2026-05-01',
      note: "Nieuwe loonschalen per 1 mei 2026: herziening/uitbreiding van schalen F (trede 11), G en H zodat in de hoogste functieschalen meer loonperspectief is. Schalen B t/m E ongewijzigd t.o.v. 1 maart 2026.",
      status: 'confirmed',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 38,
        schalen: {
          'B': [2470.8, 2526.3, 2581.3, 2636.8, 2692.2, 2747.7],
          'C': [2636.8, 2692.2, 2747.7, 2786.6, 2826.4, 2865.1, 2903.8, 2943.6],
          'D': [2747.7, 2786.6, 2826.4, 2865.1, 2903.8, 2943.6, 2982.8, 3021.5, 3062],
          'E': [2865.1, 2903.8, 2943.6, 2982.8, 3021.5, 3062, 3101.1, 3140.3, 3180.9, 3221.4],
          'F': [3021.5, 3062, 3101.1, 3140.3, 3180.9, 3221.4, 3260.3, 3299.7, 3340.6, 3379.5, 3498.7],
          'G': [3221.4, 3260.3, 3299.7, 3340.6, 3419.8, 3498.7, 3578.3, 3658.6, 3739.3, 3819.1, 3948.9],
          'H': [3419.8, 3498.7, 3578.3, 3658.6, 3739.3, 3818.9, 3948.9, 4079, 4209.1, 4338.9, 4469],
        },
      },
    },
  ],
  vergoedingen: [
    {"id":"afstandsvergoeding-3-10km","label":"Afstandsvergoeding 3 t/m 10 km (enkele reis)","amount":1.4,"unit":"perDag","taxable":false,"note":"Per 1 januari 2026. Per gewerkte dag, ongeacht aantal uren. Vervalt op dagen met thuiswerkvergoeding."},
    {"id":"afstandsvergoeding-10-25km","label":"Afstandsvergoeding meer dan 10 t/m 25 km (enkele reis)","amount":0.23,"unit":"perKm","taxable":false,"note":"Per 1 januari 2026, per km. Boven 25 km geldt de maximale vergoeding bij 25 km."},
    {"id":"thuiswerkvergoeding","label":"Thuiswerkvergoeding","amount":2.45,"unit":"perDag","taxable":false,"note":"Per 1 januari 2026, voor dagen waarop volledig vanuit huis wordt gewerkt."},
  ],
};
