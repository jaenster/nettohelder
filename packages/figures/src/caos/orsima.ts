import type { Cao } from '../types.js';

/**
 * Cao Orsima (onderhoud en reiniging scheepvaart, industrie en milieu) 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Orsima (onderhoud en reiniging scheepvaart, industrie en milieu)
 * https://www.cnv.nl/documents/5468/Cao_Orsima_2025-2026.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2025-10-01 (hour) uit de bron
 *
 * Excluded: none stated
 */
export const caoOrsima2026: Cao = {
  id: 'orsima',
  name: "Cao Orsima (onderhoud en reiniging scheepvaart, industrie en milieu)",
  year: 2026,
  effectiveNote: "Cao 2025-03-01 t/m 2027-04-30; loontabel per 2025-10-01. Let op: Loongebouw per 1-10-2025 (bijlage 2): uurlonen 21 jaar en ouder per loongroep en ervaringsjaar; fulltime 40 uur per week Verhoging 1-10-2025: € 50 bruto per maand of per 4 weken, gebaseerd op het 4-wekenloon Aanloopsalaris mogelijk: 15% onder het loongebouw (groepen 2-7, max. 1 jaar, minimaal WML) Vakantiebijslag: percentage niet expliciet in de cao (verwijzing naar Wet minimumloon en minimumvakantiebijslag); 8% aangenomen volgens de premieberekening van PF Vervoer Volgens CNV (16-10-2026) is de cao verlengd tot 1 mei 2027 en is er in 2026 geen loonsverhoging; de cao-tekst noemde nog een APC-verhoging per 1-3-2026 Per 1-3-2027 wordt de automatische prijscompensatie (CPI dec/dec) in de loontabellen verwerkt; percentage nog niet bekend Pensioen 2026 (PF Vervoer, sector Orsima): premie 30%, werknemersdeel 12% van (pensioengevend salaris incl. vakantietoeslag - franchise € 17.283), maximumloon € 79.409 Per 1-1-2027 nieuwe pensioenregeling met iets hogere franchise; premie 2027 nog niet bekend",
  sourceUrl: "https://www.cnv.nl/documents/5468/Cao_Orsima_2025-2026.pdf",
  pensioenfondsId: 'vervoer',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'uur',
    hoursPerWeek: 40,
    schalen: {
      '1': [16.45, 16.6],
      '2': [17.26, 17.45, 17.64],
      '3': [17.78, 17.95, 18.12],
      '4': [18.13, 18.34, 18.52, 18.68],
      '5': [18.53, 18.9, 19.28, 19.65, 20.03],
      '6': [19.23, 19.59, 19.97, 20.38, 20.77, 21.18, 21.61],
      '7': [19.77, 20.13, 20.56, 20.94, 21.36, 21.8, 22.21, 22.64, 23.11],
    },
  },
  vergoedingen: [],
};
