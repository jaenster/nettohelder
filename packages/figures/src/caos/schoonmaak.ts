import type { Cao } from '../types.js';

/**
 * CAO Schoonmaak- en Glazenwassersbedrijf — basisuurloon per loongroep 1–6 ×
 * dienstjaar, HOURLY table per 1 januari 2026 (38u fulltime). The step index is
 * the dienstjaar (1e t/m 4e dienstjaar); the under-21 jeugd/leeftijdslonen
 * (17-, 18, 19) and the all-in (vakantiewerker) rates are NOT modelled here —
 * only the 21+ dienstjaartabel. Vakantiegeld 8% (uitbetaald in mei);
 * eindejaarsuitkering 5% in 2025/2026. Pension = BPF Schoonmaak.
 * Source: officiële RAS-loontabel + Schoonmakend Nederland, per 1 jan 2026.
 */
export const caoSchoonmaak2026: Cao = {
  id: 'schoonmaak',
  name: 'CAO Schoonmaak',
  year: 2026,
  effectiveNote:
    'Uurtabel per 1 jan 2026 (38u), 1e t/m 4e dienstjaar. Jeugd-/leeftijdslonen (17-, 18, 19) en all-in-tarieven nog niet meegenomen. CAO loopt t/m 30 juni 2026.',
  sourceUrl: 'https://www.ras.nl/cao/bijlagen/iii-loontabellen/',
  pensioenfondsId: 'schoonmaak',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.05,
  salary: {
    kind: 'table',
    stepLabel: 'functiejaar',
    unit: 'uur',
    hoursPerWeek: 38,
    schalen: {
      '1': [15.52, 16.08, 16.55, 17.05],
      '2': [16.08, 16.63, 17.17, 17.70],
      '3': [16.70, 17.30, 17.84, 18.44],
      '4': [17.53, 18.14, 18.73, 19.31],
      '5': [18.20, 18.82, 19.45, 20.06],
      '6': [19.12, 19.77, 20.42, 21.07],
    },
  },
  vergoedingen: [],
};
