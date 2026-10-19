import type { Cao } from '../types.js';

/**
 * Cao Provinciale sector (Cao Provincies) — salaristabel per 1 januari 2026.
 * Looptijd 1 juli 2025 t/m 30 juni 2026; per 1 jan 2026 +1,5% (na +2,5% per
 * 1 jul 2025). De provincies publiceren per salarisschaal alléén een minimum-
 * en maximumsalaris (schalen 1–18); er is geen vaste periodieken-grid zoals bij
 * Cao Rijk — de werkgever zet de werknemer met jaarlijkse stappen van min naar
 * max. Daarom bevat elke schaal hier twee waarden: [minimum, maximum]. Schaal A
 * (100–120% WML) is niet als vast bedrag in de cao opgenomen en valt buiten de
 * tabel.
 *
 * IKB (Individueel Keuzebudget) provincies = 22,37% (t/m schaal 13) resp. 21,82%
 * (schaal 14+) van het salaris, opgebouwd uit: 8% vakantietoelage, 8,3% eind-
 * ejaarsuitkering, 3,4%/2,85% levensloopbijdrage en 2,67% bovenwettelijk verlof.
 * Gemodelleerd als vakantiegeld 8% + eindejaarsuitkering 8,3% zodat de engine
 * niet dubbeltelt; de levensloop- en verlofcomponenten zijn geen zuivere cash-
 * naar-netto en blijven buiten beschouwing — netto licht conservatief.
 *
 * Pensioen = ABP. Bron: officiële IPO cao-tekst provinciale sector 2025-2026,
 * Bijlage 1 (Financiële arbeidsvoorwaarden), Paragraaf 2 Salaristabellen.
 */
export const caoProvincies2026: Cao = {
  id: 'provincies',
  name: 'Cao Provincies',
  year: 2026,
  effectiveNote:
    'Salaristabel per 1 jan 2026 (schalen 1–18, +1,5%). De cao definieert per schaal alleen minimum en maximum (geen vaste periodieken); arrays bevatten [min, max]. Schaal A (100–120% WML) niet opgenomen. IKB-componenten levensloop (3,4%/2,85%) en bovenwettelijk verlof (2,67%) niet in % verwerkt.',
  sourceUrl: 'https://www.ipo.nl/wp-content/uploads/sites/5/2025/10/website-ipo-cao-provincies-2025-juni_v4-interactief-003.pdf',
  pensioenfondsId: 'abp',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.083, // IKB-component eindejaarsuitkering (vakantietoelage 8% apart)
  salary: {
    kind: 'table',
    hoursPerWeek: 36,
    stepLabel: 'trede',
    unit: 'maand',
    schalen: {
      '1': [2596.78, 2639.84],
      '2': [2596.78, 2804.88],
      '3': [2596.78, 3045.08],
      '4': [2596.78, 3200.73],
      '5': [2596.78, 3356.60],
      '6': [2596.78, 3508.03],
      '7': [2749.50, 3851.87],
      '8': [3090.42, 4338.84],
      '9': [3473.71, 4886.42],
      '10': [3791.58, 5340.57],
      '11': [4402.95, 6213.95],
      '12': [4993.42, 7057.40],
      '13': [5407.15, 7648.47],
      '14': [6103.18, 8642.83],
      '15': [6694.82, 9488.06],
      '16': [7346.50, 10418.99],
      '17': [8062.67, 11442.11],
      '18': [8850.88, 12568.14],
    },
  },
  vergoedingen: [],
};
