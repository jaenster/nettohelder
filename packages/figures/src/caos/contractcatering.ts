import type { Cao } from '../types.js';

/**
 * CAO Contractcatering / Hospitality (voorheen Veneca) Nederland - salarisschalen 2026 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Bijlage A.A1 Bedrijfscatering, loontabel per 1 januari 2026 (Salaristabellen deel A)
 * https://werkenincontractcatering.nl/wp-content/uploads/2026/02/Salaristabellen-deel-A-per-1-januari-2026-publicatie.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Hele tabel Bijlage A.A1 Bedrijfscatering per maand (schalen I-IX x functiejaren) - transcribed from PDF
 *   - Grid is irregular: schaal I/II hebben 0-3 fj, III/IV 0-4 fj, V 0-5 fj, VI/VII 0-6 fj, VIII 0-7 fj, IX 0-8 fj
 *   - WML-bedrag EUR 2549,73/maand (EUR 14,71/uur) per 1-1-2026 voor schaal I/II tredes - wordt per 1-7-2026 aangepast aan nieuwe WML
 *   - hoursPerWeek=38 aangenomen (CAO hanteert gemiddeld 38 uur/week voor jaarurensystematiek); maandbedragen A.A1 zijn echter gebaseerd op 260 werkbare dagen, niet strikt proportioneel met de uurtabel
 *   - eindejaarsuitkering 8,33% - gevonden in deel A.C (inflight) art. 10; controleer of dit ook geldt voor bedrijfscatering deel A.A
 *   - vakantietoeslag 8% (art. 54)
 *   - Pensioen: Pensioenfonds Horeca & Catering (PH&C) - niet in toegestane lijst, daarom 'generiek'
 *   - Reiskosten EUR 0,19 netto/km, alleen 11-30 km band
 *
 * Excluded: Deel A.B1/A.B2 institutionele catering tabellen; Deel A.C1 inflightcatering tabel; Deel A.D3 horeca/onderwijscatering tabel; Volledige deel B (hospitality) loontabel met periodieken; Aanloopschaalsalarissen (inflight: -17,3% / -10% / -5%); Jeugdlonen; BBL-studenten en leerlingenlonen; Alle toeslagen (overwerk, onregelmatige uren, nacht, ploegen, weekend, kledingtoeslag, jubileumtoeslag); Eenmalige uitkering EUR 225 bruto pro rata; Omrijkilometervergoeding (EUR 0,19 netto)
 */
export const caoContractcatering2026: Cao = {
  id: 'contractcatering',
  name: "CAO Contractcatering (Veneca)",
  year: 2026,
  effectiveNote: "Tabel geldig per 1 januari 2026 (looptijd CAO 1-1-2026 t/m 31-12-2026). Verhogingen per 1-1-2026 zijn reeds in deze tabel verwerkt: schalen I en II +2,16% (gelijk aan WML), schalen III t/m IX +2,5%. Bedragen zijn bruto per maand op basis van 260 werkbare dagen. Dit is uitsluitend de tabel Bijlage A.A1 Bedrijfscatering (deel A, het grootste segment). NIET opgenomen: de andere deel-A tabellen (A.B1/A.B2 institutionele catering, A.C1 inflightcatering, A.D3 onderwijscatering) en de volledige deel B (hospitality) loontabel; aanloopschaalsalarissen; jeugdlonen; BBL/leerlingenlonen; alle toeslagen (overwerk, onregelmatigheid, nacht, ploegen, kleding, jubileum); en de eenmalige uitkering van EUR 225 bruto (in dienst 1-10-2025 en 1-10-2026). De aan WML gekoppelde bedragen (schaal I/II, gemarkeerd) worden per 1 juli 2026 aangepast aan het dan geldende wettelijk minimumuurloon; die nieuwe bedragen zijn nog niet gepubliceerd.",
  sourceUrl: "https://werkenincontractcatering.nl/scc/cao/loontabellen/",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: {
    kind: 'table',
    stepLabel: 'functiejaar',
    unit: 'maand',
    hoursPerWeek: 38,
    schalen: {
      'I': [2549.73, 2549.73, 2549.73, 2549.73],
      'II': [2549.73, 2549.73, 2549.73, 2592.36],
      'III': [2558.44, 2577.47, 2632.83, 2689.25, 2746.78],
      'IV': [2764.27, 2824.55, 2884.82, 2946.25, 3008.93],
      'V': [3019.7, 3085.1, 3150.5, 3217.16, 3285.14, 3354.45],
      'VI': [3328.76, 3400.45, 3472.12, 3545.15, 3619.69, 3695.65, 3773.34],
      'VII': [3662.21, 3740.63, 3819.1, 3899.09, 3980.71, 4063.86, 4148.98],
      'VIII': [4008.89, 4094.4, 4179.94, 4267.19, 4356.15, 4446.8, 4539.57, 4634.09],
      'IX': [4246.05, 4330.93, 4417.58, 4505.89, 4595.99, 4687.93, 4781.67, 4877.33, 4974.87],
    },
  },
  vergoedingen: [
    {"id":"reiskosten","label":"Reiskostenvergoeding woon-werk","amount":0.19,"unit":"perKm","taxable":false,"note":"Netto per gereisde kilometer (per 1-4-2024). Alleen voor woon-werk en werk-woon kilometers vanaf 11 t/m 30 km per enkele reis; eerste 10 km worden niet vergoed; regiomedewerker kent geen maximum van 30 km."},
  ],
};
