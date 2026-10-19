import type { Cao } from '../types.js';

export const caoBeroepsgoederenvervoer2026: Cao = {
  id: 'beroepsgoederenvervoer',
  name: 'Cao Beroepsgoederenvervoer',
  year: 2026,
  effectiveNote:
    'Functieloonschalen cao Beroepsgoederenvervoer (TLN) geldend per 1 januari 2026 (loonsverhoging 4%). Maandlonen in euro bij een fulltime dienstverband. Loonschalen A t/m H; de cijfers achter de letter zijn de functiejaren (treden, ervaringsjaren). De cao publiceert zowel 4-weken- als maandlonen; hier zijn de gepubliceerde maandlonen overgenomen (geen omrekening toegepast). Jeugdlonen/aanloopschalen zijn niet opgenomen; deze tool rekent met de volwassen functieloonschalen.',
  sourceUrl:
    'https://www.caoberoepsgoederenvervoer.nl/tln-functieloonschalen-per-1-januari-2026/',
  pensioenfondsId: 'vervoer',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    hoursPerWeek: 40,
    stepLabel: 'functiejaar',
    unit: 'maand',
    schalen: {
      A: [2559.54, 2573.49, 2676.41, 2783.46, 2894.81, 3010.6],
      B: [2604.97, 2709.15, 2817.5, 2930.2, 3047.43, 3169.34],
      C: [2717.8, 2826.5, 2939.55, 3057.12, 3179.39, 3306.57],
      D: [2893.55, 3009.29, 3129.65, 3254.83, 3385.0, 3520.4],
      E: [3034.77, 3156.17, 3282.44, 3413.75, 3550.32, 3692.32, 3840.02],
      F: [3171.82, 3298.7, 3430.66, 3567.88, 3710.58, 3859.02, 4013.38, 4173.91],
      G: [
        3350.79, 3484.84, 3624.23, 3769.19, 3919.94, 4076.73, 4239.78, 4409.35,
        4585.71,
      ],
      H: [
        3530.4, 3671.63, 3818.5, 3971.25, 4130.08, 4295.26, 4467.05, 4645.75,
        4831.58, 5024.85,
      ],
    },
  },
  vergoedingen: [
    {
      id: 'verblijfkosten-volledige-dag',
      label: 'Verblijfkostenvergoeding (24 uur)',
      amount: 65.04,
      unit: 'perDag',
      taxable: false,
      note:
        'Volledige (24-uurs) verblijfkostenvergoeding per 1-1-2026 bij meerdaagse ritten, € 65,04 netto/onbelast. De cao kent daarnaast lagere bedragen per uur voor eendaagse en gedeeltelijke ritten; alleen het volledige dagtarief is hier opgenomen. Bron: https://www.caoberoepsgoederenvervoer.nl/verblijfskostenvergoeding-beroepsgoederenvervoer-2026/',
    },
  ],
};
