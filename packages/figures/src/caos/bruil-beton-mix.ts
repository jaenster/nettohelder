import type { Cao } from '../types.js';

/**
 * Cao Bruil beton & mix 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Bruil beton & mix
 * https://cao-kijker.awvn.nl/bestanden/4100_01-07-2026%20tot%2001-07-2027_akkoord.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-01-01 (hour) uit de bron
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-07-13, 2027-01-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoBruilBetonMix2026: Cao = {
  id: 'bruil-beton-mix',
  name: "Cao Bruil beton & mix",
  year: 2026,
  effectiveNote: "Cao 2026-07-01 t/m 2027-06-30; loontabel per 2026-01-01. Let op: Onderhandelingsresultaat (1-6-2026, CNV en FNV Bouwen & Wonen) voor cao 1-7-2026 t/m 30-6-2027: 1% per 13-7-2026 (loonperiode 8-2026) en 2,5% per 1-1-2027 (loonperiode 1-2027). Vorige cao 1-7-2025 t/m 30-6-2026: 1% per 14-7-2025 en 3% per 1-1-2026 (incl. prijscompensatie) Loonbetaling per vier weken (periodeloon = 160 uur). Tabel: garantie-uurlonen Bijlage I (groepen I-VI, 20 jaar en ouder) vanaf de loonperiode waarin 1-1-2026 valt; één bedrag per groep Leidinggevend, toezichthoudend, hoger technisch en administratief personeel (Bijlage II) heeft vierwekensalarissen met minimum en maximum per groep I-VII, per 1-1-2026 van € 2.504,74-€ 2.957,66 (I) t/m € 4.206,74-€ 6.135,43 (VII); niet opgenomen in de tabel Vakantietoeslag 8% van 13x het periodeloon (plus ploegentoeslag), uitbetaald in de 6e vierwekenperiode, uiterlijk eind mei Pensioen bij bpfBOUW (vrijwillige aansluiting); werknemerspremie niet in de cao vermeld",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/4100_01-07-2026%20tot%2001-07-2027_akkoord.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'uur',
    hoursPerWeek: 40,
    schalen: {
      'I': [17.24],
      'II': [19.22],
      'III': [19.54],
      'IV': [19.93],
      'V': [20.68],
      'VI': [21.33],
    },
  },
  periods: [
    {
      from: '2026-07-13',
      note: "+1% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'uur',
        hoursPerWeek: 40,
        schalen: {
          'I': [17.41],
          'II': [19.41],
          'III': [19.74],
          'IV': [20.13],
          'V': [20.89],
          'VI': [21.54],
        },
      },
    },
    {
      from: '2027-01-01',
      note: "+2,5% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'uur',
        hoursPerWeek: 40,
        schalen: {
          'I': [17.85],
          'II': [19.9],
          'III': [20.23],
          'IV': [20.63],
          'V': [21.41],
          'VI': [22.08],
        },
      },
    },
  ],
  vergoedingen: [],
};
