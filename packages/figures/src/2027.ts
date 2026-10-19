import type { TaxYearFigures, ProvenanceMap } from './types.js';
import { aowArbeidskorting, aowFactor } from './aow.js';

/**
 * Tax year 2027 — Belastingplan 2027 including the nota van wijziging of 9 October 2026. NOT FINAL:
 * parliament still votes and the afbouw thresholds follow the minimum wage
 * (set November 2026). Every figure is 'provisional' in provenance2027; values
 * not yet published for 2027 carry the 2026 value and say so.
 */
const belowAowArbeidskorting = {
  segments: [
    { from: 0, base: 0, rate: 1_142 / 12_438 },
    { from: 12_438, base: 1_142, rate: (5_500 - 1_142) / (26_866 - 12_438) },
    { from: 26_866, base: 5_500, rate: (5_889 - 5_500) / (47_834 - 26_866) },
    { from: 47_834, base: 5_889, rate: -0.0651 },
  ],
  zeroAbove: 47_834 + 5_889 / 0.0651,
};

const factor = aowFactor(0.3623, 0.1833);

export const figures2027: TaxYearFigures = {
  year: 2027,

  belowAow: {
    brackets: [
      { upTo: 39_247, rate: 0.3623 },
      { upTo: 80_578, rate: 0.3816 },
      { upTo: Infinity, rate: 0.495 },
    ],
    algemeneHeffingskorting: {
      max: 3_154,
      afbouwStart: 30_910,
      afbouwRate: 0.0635,
    },
    arbeidskorting: belowAowArbeidskorting,
  },

  aow: {
    brackets: [
      { upTo: 39_247, rate: 0.1833 },
      { upTo: 80_578, rate: 0.3816 },
      { upTo: Infinity, rate: 0.495 },
    ],
    algemeneHeffingskorting: {
      max: 1_596,
      afbouwStart: 30_910,
      afbouwRate: 0.0635 * factor,
    },
    arbeidskorting: aowArbeidskorting(belowAowArbeidskorting, factor),
    ouderenkorting: {
      max: 1_993,
      afbouwStart: 46_577,
      afbouwRate: 0.15,
    },
  },

  // 2027 ZVW percentages are not published yet; 2026 values.
  zvw: {
    werkgeversheffing: 0.061,
    aanslagBijdrage: 0.0485,
    maxBijdrageInkomen: 79_409,
  },

  zzp: {
    zelfstandigenaftrek: 900,
    // Not yet published for 2027; 2026 values.
    startersaftrek: 2_123,
    mkbWinstvrijstelling: 0.127,
    urencriterium: 1_225,
    zelfstandigenaftrekAowFactor: 0.5,
  },

  dertigProcent: {
    pct: 0.27,
    generalNorm: 50_436,
    jongMasterNorm: 38_338,
    wntCap: 273_000,
  },
};

// Nota naar aanleiding van het verslag Belastingplan 2027 (9-10-2026), parametertabel incl. de
// nota van wijziging met de koopkrachtmaatregelen uit de brief van 29 september.
const BELASTINGPLAN_2027 = 'https://www.tweedekamer.nl/kamerstukken/detail?id=2026D50335&did=2026D50335';
const ARBEIDSKORTING_2027 = BELASTINGPLAN_2027;
const OUDERENKORTING_2027 = BELASTINGPLAN_2027;
// Tweede nota van wijziging Belastingplan 2025: forfait 27% en salarisnormen per 1-1-2027.
const EXPAT_2027 = 'https://zoek.officielebekendmakingen.nl/kst-36602-5.html';
// Regeling indexering bezoldigingsmaxima WNT 2027 (Staatscourant 2026, 29611).
const WNT_2027 = 'https://zoek.officielebekendmakingen.nl/stcrt-2026-29611.html';

const provisional = (url: string, note: string) => ({
  url,
  status: 'provisional' as const,
  retrievedAt: '2026-10-19',
  note,
});

export const provenance2027: ProvenanceMap = {
  'belowAow.brackets': provisional(BELASTINGPLAN_2027,
    'Belastingplan 2027 incl. nota van wijziging van 9-10-2026: 36,23% tot € 39.247, 38,16% tot € 80.578, daarboven 49,50%. Stemming Tweede Kamer 12-11-2026; nog niet aangenomen.'),
  'aow.brackets': provisional(BELASTINGPLAN_2027,
    'AOW-leeftijd (geboren na 1-1-1946): schijf 1 18,33%.'),
  'belowAow.algemeneHeffingskorting': provisional(BELASTINGPLAN_2027,
    'Max € 3.154, afbouw 6,35% boven € 30.910 (nota van wijziging 9-10-2026; voorstel was 6,638%). Afbouwgrens volgt het minimumloon.'),
  'aow.algemeneHeffingskorting': provisional(BELASTINGPLAN_2027,
    'Max € 1.596 (gepubliceerd); afbouwpercentage afgeleid: 6,35% × 18,33/36,23.'),
  'belowAow.arbeidskorting': provisional(ARBEIDSKORTING_2027,
    'Hoogte knikpunten € 1.142 / € 5.500 / € 5.889, afbouw vanaf € 47.834 met 6,51% (parametertabel nota 9-10-2026). Inkomensgrenzen € 12.438 en € 26.866 van de eerste twee knikpunten staan niet in die tabel en komen uit een secundaire bron.'),
  'aow.arbeidskorting': provisional(ARBEIDSKORTING_2027,
    'Afgeleid: arbeidskorting onder AOW-leeftijd × 18,33/36,23 (art. 8.10 lid 2 Wet IB 2001).'),
  'aow.ouderenkorting': provisional(OUDERENKORTING_2027,
    'Max € 1.993, afbouw 15% boven verzamelinkomen € 46.577.'),
  'zvw.werkgeversheffing': provisional(BELASTINGPLAN_2027, 'Percentage 2027 nog niet gepubliceerd; waarde 2026.'),
  'zvw.aanslagBijdrage': provisional(BELASTINGPLAN_2027, 'Percentage 2027 nog niet gepubliceerd; waarde 2026.'),
  'zvw.maxBijdrageInkomen': provisional(BELASTINGPLAN_2027, 'Maximum 2027 nog niet gepubliceerd; waarde 2026.'),
  'zzp.zelfstandigenaftrek': provisional(BELASTINGPLAN_2027, 'Afbouw naar € 900 in 2027.'),
  'zzp.startersaftrek': provisional(BELASTINGPLAN_2027, 'Bedrag 2027 nog niet bevestigd; waarde 2026.'),
  'zzp.mkbWinstvrijstelling': provisional(BELASTINGPLAN_2027, 'Percentage 2027 nog niet bevestigd; waarde 2026.'),
  'zzp.urencriterium': provisional('https://www.kvk.nl/starten/de-magische-1225-uur-alles-over-het-urencriterium/', 'Ongewijzigd.'),
  'dertigProcent.pct': provisional(EXPAT_2027, 'Vanaf 2027 maximaal 27% (overgangsrecht 30% voor wie vóór 2024 startte).'),
  'dertigProcent.generalNorm': provisional(EXPAT_2027, 'Aangekondigd € 50.436, nog vóór indexatie.'),
  'dertigProcent.jongMasterNorm': provisional(EXPAT_2027, 'Aangekondigd € 38.338, nog vóór indexatie.'),
  'dertigProcent.wntCap': provisional(WNT_2027, 'WNT-norm 2027 € 273.000.'),
};
