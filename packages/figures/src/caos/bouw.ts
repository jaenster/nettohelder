import type { Cao } from '../types.js';

export const caoBouw2026: Cao = {
  id: 'bouw',
  name: 'Bouw & Infra',
  year: 2026,
  effectiveNote:
    'Garantielonen bouwplaatswerknemer 21 jaar of ouder, tabel 4.2 cao Bouw & Infra 2025-2027, geldend per 1-1-2026 (periode 1). Bedragen zijn uurlonen in euro bij een normale arbeidsduur van gemiddeld 40 uur per week. Functiegroepen A t/m E. Jeugd-, leerling- en starttabellen (4.3, 4.4, 4.5) zijn niet opgenomen; deze tool rekent met het volwassen garantieloon. Het Wml per 1-7-2026 en 1-1-2027 was bij publicatie nog niet bekend, maar dit raakt de tabel 4.2-bedragen per 1-1-2026 niet.',
  sourceUrl:
    'https://www.tbbouwinfra.nl/Assets/uploads/2025/12/Loontabellen-bouwplaatswerknemer-cao-2025-2027.pdf',
  pensioenfondsId: 'bpfbouw',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'uur',
    hoursPerWeek: 40,
    schalen: {
      A: [18.95],
      B: [20.02],
      C: [21.24],
      D: [22.68],
      E: [23.78],
    },
  },
  vergoedingen: [
    {
      id: 'reiskosten-eigen-auto',
      label: 'Reiskostenvergoeding eigen auto',
      amount: 0.32,
      unit: 'perKm',
      taxable: false,
      note:
        'Cao-vergoeding voor bouwplaatswerknemers die met de eigen auto reizen, € 0,32 per km. De onbelaste grens van de overheid is € 0,23 (vanaf 2026 verhoogd naar € 0,25 met terugwerkende kracht); het meerdere boven die grens is in beginsel belast.',
    },
  ],
};
