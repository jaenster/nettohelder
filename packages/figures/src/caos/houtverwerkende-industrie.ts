import type { Cao } from '../types.js';

/**
 * CAO Houtverwerkende Industrie (Nederland) 2026. DRAFT from cao-pipeline (confidence: high).
 * Source: CAO Houtverwerkende Industrie 2025-2026 (FNV, v03032026), Tabel 4.1.5 Cao-loon per 1 oktober 2025 (bruto per uur)
 * https://www.fnv.nl/getmedia/891a4c93-62f6-4de1-819b-8dd99c7613b1/347-houtverwerkende-industrie-cao-2025-2026-v03032026.pdf?ext=.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loongroep I heeft slechts 4 waarden (normloon 15,56 + uitloop 1/2/3 = 15,86/16,18/16,43) en GEEN instroomwaarde op periodiek 5, anders dan loongroepen II-V die elk een instroomwaarde op periodiek 5 hebben
 *   - Instroom (periodiek 5) waarden: II=14,80 III=15,07 IV=15,42 V=16,14
 *   - Normloon waarden: I=15,56 II=15,69 III=15,98 IV=16,38 V=17,10
 *   - Uurloon-naar-maand factor 174 (maandloon = uurloon x 174) en 40-urige werkweek incl. 124 uur rvt
 *   - pensioenfonds: sector kent eigen Bpf Houtverwerkende Industrie en Jachtbouw (pensioenen overgedragen aan BPFV per 2022); geen passende slug, daarom 'generiek'
 *   - Of er per 1 jan 2026 / 1 jul 2026 al een nieuwe WML-geindexeerde loontabel is gepubliceerd op houtverwerkendeindustrie.nl die deze tabel vervangt
 *   - eindejaarsuitkering: geen 13e maand of eindejaarsuitkering in de CAO gevonden -> 0
 *
 * Excluded: instroomniveaus / aanloopperiodieken die in tabel 4.1.5 als '-' staan (loongroep I periodieken 4-0; loongroepen II-V periodieken 4,3,2,1,0); WML-minimum en jeugdloon (werknemers tot 21 jaar mogen op WML); eenmalige uitkering (4.1.6); diplomatoeslag/ehbo/bhv/gereedschap/werkkleding deels meegenomen als vergoeding maar niet in salaris; karweiwerk reis- en verblijfkosten, extra reisuren; reiskosten woon-werkverkeer (afhankelijk van vervoermiddel/afstand); overwerk- en ploegentoeslagen; WML-geindexeerde loontabellen per 1 jan 2026 en 1 jul 2026 (nog niet gepubliceerd in deze CAO)
 */
export const caoHoutverwerkendeIndustrie2026: Cao = {
  id: 'houtverwerkende-industrie',
  name: "CAO Houtverwerkende industrie",
  year: 2026,
  effectiveNote: "Loontabel 4.1.5 'Cao-loon per 1 oktober 2025 (bruto per uur)', inclusief de structurele verhoging van EUR 75 bruto/maand + 4% (beide per 1 oktober 2025). Dit is de tabel die geldt aan het begin van 2026 (CAO loopt 1 juli 2025 t/m 31 december 2026). Bedragen zijn bruto per UUR op basis van een 40-urige werkweek (incl. 124 uur roostervrije tijd); maandloon = uurloon x 174. INDEXATIE PENDING: per 1 januari 2026 en 1 juli 2026 wordt het WML geindexeerd en worden de loontabellen aangepast en gepubliceerd op www.houtverwerkendeindustrie.nl; die geindexeerde 2026-tabellen waren in deze CAO-PDF nog niet opgenomen en zijn dus niet verwerkt. Geen verdere structurele cao-verhogingen afgesproken voor 2026. EXCLUDED: instroomniveaus/aanloopperiodieken die in de tabel als '-' staan (loongroep I periodieken 4-0; loongroepen II-V periodieken 4-0), WML-minimum/jeugd (tot 21 jaar mag WML gehanteerd worden), eenmalige uitkering 4.1.6, alle toeslagen en vergoedingen (diplomatoeslag, ehbo/bhv, gereedschap, karwei, reiskosten, werkkleding), overwerk en ploegentoeslagen.",
  sourceUrl: "https://www.fnv.nl/cao-sector/bouwen-wonen/houtverwerkende-industrie",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'uur',
    hoursPerWeek: 40,
    schalen: {
      'I': [15.56, 15.86, 16.18, 16.43],
      'II': [14.8, 15.69, 16, 16.29, 16.53],
      'III': [15.07, 15.98, 16.25, 16.52, 16.8],
      'IV': [15.42, 16.38, 16.67, 16.91, 17.24],
      'V': [16.14, 17.1, 17.4, 17.71, 17.96],
    },
  },
  vergoedingen: [
    {"id":"diplomatoeslag-bbl","label":"Diplomatoeslag bbl (21 jaar of ouder, branchediploma)","amount":7.29,"unit":"perJaar","taxable":true,"note":"EUR 7,29 per week; jaarlijks per 1 juni geindexeerd op CPI. perJaar gekozen als drager; werkelijke eenheid is per week."},
    {"id":"ehbo","label":"EHBO-toeslag","amount":7.68,"unit":"perJaar","taxable":true,"note":"EUR 7,68 per week (ehbo of ehbo+bhv); jaarlijks per 1 juni geindexeerd. Werkelijke eenheid is per week."},
    {"id":"bhv","label":"BHV-toeslag","amount":3.62,"unit":"perJaar","taxable":true,"note":"EUR 3,62 per week; geindexeerd per 1 juni. Werkelijke eenheid is per week."},
    {"id":"gereedschap","label":"Gereedschapsvergoeding","amount":3.65,"unit":"perJaar","taxable":false,"note":"EUR 3,65 per week (voltijd; deeltijd naar rato) als werkgever geen gereedschap verstrekt; geindexeerd per 1 juni. Werkelijke eenheid is per week."},
    {"id":"werkkleding","label":"Werkkledingvergoeding","amount":0.72,"unit":"perDag","taxable":false,"note":"EUR 0,72 per gewerkte dag als werkgever geen kleding verstrekt; geindexeerd per 1 juni."},
    {"id":"reiskosten-km","label":"Reiskostenvergoeding ander vervoermiddel (herhalingslessen ehbo/bhv)","amount":0.23,"unit":"perKm","taxable":false,"note":"EUR 0,23 per km bij ander vervoermiddel; OV 100%. Reiskosten woon-werk algemeen zijn afhankelijk van vervoermiddel en afstand (niet als enkel bedrag gespecificeerd)."},
  ],
};
