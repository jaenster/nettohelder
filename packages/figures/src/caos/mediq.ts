import type { Cao } from '../types.js';

/**
 * CAO Mediq (Nederland) 2026 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Collectieve Arbeidsovereenkomst Mediq BV, 1 januari 2024 t/m 31 december 2025 - Bijlage 2 Salarisschalen
 * https://www.fnv.nl/getmedia/e61b2dfb-11a7-4751-b005-6824b7a452bd/121-mediq-cao-1-1-2024-tm-31-12-2025-v19122024.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Of er inmiddels (na juni 2026) een nieuw CAO Mediq akkoord met loonsverhoging per 2026 is afgesloten - de hier gebruikte tabel is de tabel per 1-1-2025 die ongewijzigd doorloopt
 *   - 40-uurs salarisgroep min/max bedragen per 1-1-2025: schaal 1 2531/2908, 2 2548/3024, 3 2627/3186, 4 2751/3468, 5 2877/3628, 6 3000/3875, 7 3177/4263, 8 3419/4904, 9 3760/5647, 10 4444/6584
 *   - pensioenfondsId: Mediq pensioen loopt via verzekeraar a.s.r. (beschikbare premieregeling), geen sector-bpf, daarom generiek
 *
 * Excluded: 39-uurs en 38-uurs salarisschalen (alleen medewerkers in dienst voor 1-1-2014); Participatieschaal; loonschaal Beroepsbegeleidende Leerweg; vakantiekrachten (ABU-cao loon); alle toeslagen (ploegendienst, wisseldienst, inconvenient, feestdagen); overwerkvergoeding; beoordelingsgerelateerde salarisverhoging; promotieverhoging (RSP-tabel); geen eindejaarsuitkering/13e maand in de CAO
 */
export const caoMediq2026: Cao = {
  id: 'mediq',
  name: "CAO Mediq",
  year: 2026,
  effectiveNote: "Geen 2026-akkoord beschikbaar. De CAO Mediq 2024-2025 liep af op 31-12-2025; onderhandelingen voor een nieuwe CAO startten in maart 2026 (werkgever bood 1%, FNV eiste 6%) en waren per juni 2026 nog niet afgerond. De hier opgenomen salarisschalen zijn de laatst gepubliceerde tabel per 1 januari 2025 (op basis van 40 uur per week; bedragen bruto per maand), die bij gebrek aan een nieuw akkoord ongewijzigd doorloopt in 2026. Indexatie 2026 nog onbekend (afhankelijk van komend akkoord). Min = aanvangssalaris, max = maximumsalaris per ORBA-salarisgroep. UITGESLOTEN: de afwijkende 39-uurs en 38-uurs schalen (alleen voor medewerkers in dienst voor 1-1-2014), de Participatieschaal en de loonschaal Beroepsbegeleidende Leerweg, vakantiekrachten (die ABU-cao loon ontvangen), alle toeslagen (ploegen/wisseldienst/inconvenient), overwerk, beoordelingsgerelateerde verhogingen en promotieverhogingen.",
  sourceUrl: "https://www.fnv.nl/cao-sector/handel/farmacie/cao-mediq",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'band',
    levelLabel: "Salarisgroep",
    unit: 'maand',
    levels: [
      { id: '1', min: 2531, max: 2908 },
      { id: '2', min: 2548, max: 3024 },
      { id: '3', min: 2627, max: 3186 },
      { id: '4', min: 2751, max: 3468 },
      { id: '5', min: 2877, max: 3628 },
      { id: '6', min: 3000, max: 3875 },
      { id: '7', min: 3177, max: 4263 },
      { id: '8', min: 3419, max: 4904 },
      { id: '9', min: 3760, max: 5647 },
      { id: '10', min: 4444, max: 6584 },
    ],
    defaultRsp: 0.9,
    hoursPerWeek: 40,
  },
  vergoedingen: [],
};
