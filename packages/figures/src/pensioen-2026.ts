import type { Pensioenfonds } from './types.js';

/**
 * Pension fund presets, 2026 (middelloon / basisregeling). franchise + total
 * premie% are fund-published and firm; the employee share varies by
 * employer/CAO — only ABP and Detailhandel publish an exact split, the rest
 * are representative (see `confidence` + `note`). Always user-overridable.
 */
export const pensioenfondsen2026: Pensioenfonds[] = [
  {
    id: 'abp',
    name: 'ABP',
    sector: 'Overheid & onderwijs',
    franchise: 19_200,
    employeePremiePct: 0.0813, // exact ABP-splitsing: werknemer 8,13% van grondslag
    totalPremiePct: 0.271,
    confidence: 'high',
    note: 'Exacte ABP-splitsing: werknemer 8,13%, werkgever 18,97% van de grondslag.',
    sourceUrl: 'https://www.abp.nl/content/dam/abp/documenten/formulieren-tabellen/premietabel-2026.pdf',
  },
  {
    id: 'pfzw',
    name: 'PFZW',
    sector: 'Zorg & welzijn',
    franchise: 17_283,
    employeePremiePct: 0.1295, // ~helft van 25,9%; werkgever betaalt min. 50%
    totalPremiePct: 0.259,
    confidence: 'medium',
    note: 'Werkgever betaalt minimaal 50%; werknemersdeel varieert per CAO (hier ~de helft).',
    sourceUrl: 'https://www.pfzw.nl/werkgevers/premie-en-factuur/premiepercentages-en-franchises.html',
  },
  {
    id: 'pmt',
    name: 'PMT',
    sector: 'Metaal & techniek',
    franchise: 19_172,
    employeePremiePct: 0.1028, // werknemer max 36,74% van de premie
    totalPremiePct: 0.2798,
    confidence: 'medium',
    note: 'Werknemersdeel maximaal 36,74% van de premie; werkgever betaalt de rest.',
    sourceUrl: 'https://www.pmt.nl/werkgever/pensioenadministratie/premie-berekenen/',
  },
  {
    id: 'pme',
    name: 'PME',
    sector: 'Metalektro',
    franchise: 19_172,
    employeePremiePct: 0.1089, // werknemer max ~10,89%
    totalPremiePct: 0.2798,
    confidence: 'medium',
    note: 'Werknemersdeel maximaal ~10,89%; precieze splitsing per werkgever/CAO.',
    sourceUrl: 'https://www.pmepensioen.nl/rekencijfers',
  },
  {
    id: 'bpfbouw',
    name: 'bpfBOUW',
    sector: 'Bouw',
    franchise: 19_172,
    employeePremiePct: 0.11, // ~50/50 van de OP-premie per Bouw-CAO
    totalPremiePct: 0.2573,
    confidence: 'low',
    note: 'Splitsing volledig per Bouw-CAO (traditioneel ~50/50 van de OP-premie).',
    sourceUrl: 'https://www.bpfbouw.nl/pensioen-bij-bpfbouw/premie-voor-uw-pensioen',
  },
  {
    id: 'detailhandel',
    name: 'Pensioenfonds Detailhandel',
    sector: 'Detailhandel',
    franchise: 18_680,
    employeePremiePct: 0.061875, // exacte fondssplitsing: werknemer 6,1875%
    totalPremiePct: 0.2475,
    confidence: 'high',
    note: 'Exacte fondssplitsing: werknemer 6,1875%, werkgever 18,5625% van de grondslag (CAO kan afwijken).',
    sourceUrl: 'https://pensioenfondsdetailhandel.nl/contact/werkgever/premiebedrag-en-franchise',
  },
  {
    id: 'nn',
    name: 'NN (De Nationale APF)',
    sector: 'Nationale-Nederlanden',
    franchise: 18_475,
    employeePremiePct: 0.06, // CAO NN: werknemersbijdrage 6% standaard (aanpasbaar)
    totalPremiePct: 0.24,
    confidence: 'high',
    note: 'CAO NN Group: werknemersbijdrage 6% standaard; werkgever 22% + ~2% risico. Flexibele premieregeling (Wtp).',
    sourceUrl: 'https://www.fnv.nl/cao-sector/finance/cao-nn-group',
  },
  {
    id: 'schoonmaak',
    name: 'Pensioenfonds Schoonmaak',
    sector: 'Schoonmaak',
    franchise: 15_254, // uurfranchise €7,72 × 38u × 52w
    employeePremiePct: 0.086, // werknemersdeel ouderdomspensioen (50% van 17,2%)
    totalPremiePct: 0.172,
    confidence: 'high',
    note: 'Ouderdomspensioen: werknemer 8,6% (helft van 17,2%). Fonds hanteert een uurfranchise van €7,72 (hier ×38u×52w naar jaar omgerekend).',
    sourceUrl: 'https://www.pensioenschoonmaak.nl/content/dam/bpfs/documenten/werkgevers/pensioenfonds-schoonmaak-volledige-rekenwijzer-2026.pdf',
  },
  {
    id: 'vervoer',
    name: 'Pensioenfonds Vervoer',
    sector: 'Beroepsvervoer over de weg',
    franchise: 17_283,
    employeePremiePct: 0.1016, // werknemersdeel 10,16% van de grondslag
    totalPremiePct: 0.30,
    confidence: 'high',
    note: 'Werknemersdeel 10,16%, werkgever 19,84% van de pensioengrondslag (totaal 30%).',
    sourceUrl: 'https://www.pfvervoer.nl/sites/default/files/documenten/kerncijfers-2026.pdf',
  },
  {
    id: 'pma',
    name: 'Pensioenfonds Medewerkers Apotheken',
    sector: 'Apotheken',
    franchise: 19_172,
    employeePremiePct: 0.0948, // werknemersdeel 9,48% van de grondslag
    totalPremiePct: 0.2844,
    confidence: 'high',
    note: 'Werknemer 9,48%, werkgever 18,96% van de pensioengrondslag (totaal 28,44%).',
    sourceUrl: 'https://www.pma-pensioenen.nl/ik-ben-werkgever/administratie/kerncijfers-2026/',
  },
  {
    id: 'stipp',
    name: 'StiPP',
    sector: 'Uitzend & personeelsdiensten',
    franchise: 19_219, // uurfranchise €9,24 × 40u × 52w
    employeePremiePct: 0.075, // werknemersdeel 7,5% van de grondslag
    totalPremiePct: 0.234,
    confidence: 'high',
    note: 'Werknemer 7,5%, werkgever 15,9% (totaal 23,4%). Fonds hanteert een uurfranchise van €9,24 (hier ×40u×52w naar jaar omgerekend).',
    sourceUrl: 'https://www.stippensioen.nl/werknemer/pensioen-bij-stipp/de-pensioenregeling/premie/',
  },
  {
    id: 'schilders',
    name: 'BPF Schilders',
    sector: 'Schilders, afwerking & glaszet',
    franchise: 19_184, // uurfranchise €9,80
    employeePremiePct: 0.1382, // 50% van de OP-premie (cao art. 69 lid 2)
    totalPremiePct: 0.2764,
    confidence: 'medium',
    note: 'Werknemer ~13,82% (helft van 27,64%). Uurfranchise €9,80 (×40u×52w naar jaar).',
    sourceUrl: 'https://www.bpfschilders.nl/werkgever/het-pensioen/pensioenpakket/pensioenpremie/',
  },
  {
    id: 'bakkers',
    name: 'Bakkers Pensioenfonds',
    sector: 'Bakkersbedrijf',
    franchise: 19_172,
    employeePremiePct: 0.1157, // werknemersdeel 11,57% van de grondslag
    totalPremiePct: 0.28,
    confidence: 'high',
    note: 'Werknemer 11,57% van de pensioengrondslag (totaal 28%).',
    sourceUrl: 'https://www.bakkerspensioen.nl/rekencijfers',
  },
  {
    id: 'bpl',
    name: 'BPL Pensioen',
    sector: 'Landbouw & agrarisch groen',
    franchise: 17_283,
    employeePremiePct: 0.0731, // werknemersdeel 7,31% van de grondslag
    totalPremiePct: 0.264,
    confidence: 'high',
    note: 'Werknemer 7,31%, werkgever 19,09% van de pensioengrondslag (totaal 26,4%).',
    sourceUrl: 'https://www.bplpensioen.nl/rekencijfers',
  },
  {
    id: 'slagers',
    name: 'Pensioenfonds voor het Slagersbedrijf',
    sector: 'Slagersbedrijf',
    franchise: 19_172,
    employeePremiePct: 0.113, // werknemersdeel 11,30% van de grondslag
    totalPremiePct: 0.283,
    confidence: 'high',
    note: 'Stichting De Samenwerking. Werknemer 11,30%, werkgever 17,00% (totaal 28,30%).',
    sourceUrl: 'https://www.pensioenslagers.nl/media/smlf5fgz/slagers-premieoverzicht-2026.pdf',
  },
  {
    id: 'architecten',
    name: 'Pensioenfonds voor de Architectenbureaus',
    sector: 'Architectenbureaus',
    franchise: 19_406,
    employeePremiePct: 0.1026, // werknemersdeel 10,26% van de grondslag
    totalPremiePct: 0.228,
    confidence: 'high',
    note: 'Werknemer 10,26%, werkgever 12,54% van de pensioengrondslag (totaal 22,8%).',
    sourceUrl: 'https://www.architectenpensioen.nl/uw-pensioen/pensioenpremie',
  },
  {
    id: 'generiek',
    name: 'Anders / weet ik niet',
    sector: 'Neutrale richtwaarde',
    franchise: 18_475,
    employeePremiePct: 0.07,
    totalPremiePct: 0.25,
    confidence: 'low',
    note: 'Neutrale richtwaarde — controleer je eigen pensioenoverzicht voor de exacte franchise en premie.',
    sourceUrl: 'https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/zakelijk/winst/inkomstenbelasting/inkomstenbelasting_voor_ondernemers/pensioen',
  },
];
