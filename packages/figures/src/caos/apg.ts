import type { Cao } from '../types.js';

/**
 * CAO APG Groep (Nederland) 2026 2026. DRAFT from cao-pipeline (confidence: high).
 * Source: Bijlage 1 – Salarisschalen, CAO APG Groep 1-7-2024 t/m 30-6-2026 (Salarisschalen per 1 januari 2026, 36 uur)
 * https://cao-kijker.awvn.nl/bestanden/1183_01-07-2024%20tot%2001-07-2026_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - 36-uurs band minima en RSP-100 maxima per 1 jan 2026 voor schalen 2 t/m 13 (bv. schaal 2: 2581,55 - 3037,12; schaal 13: 7523,66 - 10748,09)
 *   - Keuze van 36 uur als standaard voltijd: APG bepaalt per functie of voltijd 36/38/40 uur is; schaal XII+ is altijd 40 uur
 *   - Pensioenfonds: APG-medewerkers vallen onder Personeelspensioenfonds APG Groep (PPF), of ABP voor wie voor 1 juli 2013 was aangesloten; PPF staat niet in de toegestane lijst, daarom 'generiek' gekozen (eventueel 'abp' overwegen)
 *   - Geen verdere collectieve loonsverhoging na 1 jan 2026 binnen de CAO-looptijd (t/m 30 juni 2026) - bevestigd via artikel 3.2: +1% (1-9-2024), +3,75% (1-1-2025), +3,75% (1-1-2026)
 *
 * Excluded: Schaal 1 (WML-gekoppeld, verschijnt alleen in de 38-uurstabel); RSP 110 uitloopbedragen (boven schaalmaximum); 38-uurs voltijdvariant; 40-uurs voltijdvariant (verplicht voor schaal XII en hoger); Tijdelijke arbeidsmarkttoeslag; Ploegentoeslag; Vitaliteitsbijdrage (0,8% per maand); Consignatie/bereikbaarheidsdienst; Jubileumgratificatie
 */
export const caoApg2026: Cao = {
  id: 'apg',
  name: "CAO APG Groep",
  year: 2026,
  effectiveNote: "Salarisschalen per 1 januari 2026 (definitieve tabel, inclusief de structurele verhoging van +3,75% per 1 jan 2026 t.o.v. 1 jan 2025; eerdere verhogingen waren +1% per 1 sep 2024 en +3,75% per 1 jan 2025). Deze CAO loopt t/m 30 juni 2026; er zijn binnen 2026 GEEN verdere collectieve verhogingen afgesproken, dus de tabel is heel 2026 vlak. Bedragen zijn brutomaandsalarissen op basis van een 36-urige voltijd werkweek. LET OP: APG kent ook 38- en 40-urige voltijdvarianten met afwijkende (niet-proportionele) bedragen; schaal XII en hoger is voltijd 40 uur. De band loopt van het schaalminimum tot het maximum bij RSP 100. UITGESLOTEN: schaal 1 (WML-gekoppeld, alleen 38-uurstabel), de RSP 110 uitloopbedragen boven schaalmaximum, de 38- en 40-uursvarianten, en alle toeslagen (tijdelijke arbeidsmarkttoeslag, ploegentoeslag, vitaliteitsbijdrage 0,8%, consignatie, jubileumgratificatie).",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/1183_01-07-2024%20tot%2001-07-2026_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: {
    kind: 'band',
    levelLabel: "Salarisschaal",
    unit: 'maand',
    levels: [
      { id: '2', min: 2581.55, max: 3037.12 },
      { id: '3', min: 2704.33, max: 3181.56 },
      { id: '4', min: 2946.24, max: 3466.16 },
      { id: '5', min: 3045.85, max: 3807.31 },
      { id: '6', min: 3162.07, max: 4216.09 },
      { id: '7', min: 3294.57, max: 4706.53 },
      { id: '8', min: 3707.28, max: 5296.12 },
      { id: '9', min: 4204.88, max: 6006.97 },
      { id: '10', min: 4806.92, max: 6867.03 },
      { id: '11', min: 5538.22, max: 7911.74 },
      { id: '12', min: 6430.33, max: 9186.18 },
      { id: '13', min: 7523.66, max: 10748.09 },
    ],
    defaultRsp: 0.9,
    hoursPerWeek: 36,
  },
  vergoedingen: [],
};
