import type { TaxYearFigures, ProvenanceMap, ArbeidskortingParams } from './types.js';
import { aowArbeidskorting, aowFactor } from './aow.js';

const belowAowArbeidskorting: ArbeidskortingParams = {
  segments: [
    { from: 0, base: 0, rate: 0.08324 },
    { from: 11_965, base: 996, rate: 0.31009 },
    { from: 25_845, base: 5_300, rate: 0.0195 },
    { from: 45_592, base: 5_685, rate: -0.0651 },
  ],
  zeroAbove: 132_920,
};

/**
 * Tax year 2026 — loondienst slice. All values verified against primary sources
 * (see provenance2026). Formula CONSTANTS are used, not the Belastingdienst
 * inclusive row labels (which are off-by-one).
 */
export const figures2026: TaxYearFigures = {
  year: 2026,

  belowAow: {
    brackets: [
      { upTo: 38_883, rate: 0.3575 },
      { upTo: 78_426, rate: 0.3756 },
      { upTo: Infinity, rate: 0.495 },
    ],
    algemeneHeffingskorting: {
      max: 3_115,
      afbouwStart: 29_736,
      afbouwRate: 0.06398,
    },
    arbeidskorting: belowAowArbeidskorting,
  },

  aow: {
    brackets: [
      { upTo: 38_883, rate: 0.1785 },
      { upTo: 78_426, rate: 0.3756 },
      { upTo: Infinity, rate: 0.495 },
    ],
    algemeneHeffingskorting: {
      max: 1_556,
      afbouwStart: 29_736,
      afbouwRate: 0.03195,
    },
    // Derived by the statutory ratio (see aow.ts); provisional in provenance.
    arbeidskorting: aowArbeidskorting(belowAowArbeidskorting, aowFactor(0.3575, 0.1785)),
    ouderenkorting: {
      max: 2_067,
      afbouwStart: 46_002,
      afbouwRate: 0.15,
    },
  },

  zvw: {
    werkgeversheffing: 0.061,
    aanslagBijdrage: 0.0485,
    maxBijdrageInkomen: 79_409,
  },

  zzp: {
    zelfstandigenaftrek: 1_200,
    startersaftrek: 2_123,
    mkbWinstvrijstelling: 0.127,
    urencriterium: 1_225,
    zelfstandigenaftrekAowFactor: 0.5,
  },

  dertigProcent: {
    pct: 0.30,
    generalNorm: 48_013,
    jongMasterNorm: 36_497,
    wntCap: 262_000,
  },
};

const BELASTINGDIENST_TARIEVEN =
  'https://www.belastingdienst.nl/wps/wcm/connect/nl/voorlopige-aanslag/content/voorlopige-aanslag-tarieven-en-heffingskortingen';

export const provenance2026: ProvenanceMap = {
  'belowAow.brackets': {
    url: BELASTINGDIENST_TARIEVEN,
    status: 'confirmed',
    retrievedAt: '2026-06-01',
    note: 'Combined inkomstenbelasting + premies volksverzekeringen. New 37,56% middle bracket in 2026.',
  },
  'aow.brackets': {
    url: BELASTINGDIENST_TARIEVEN,
    status: 'confirmed',
    retrievedAt: '2026-06-01',
    note: 'AOW-age (born >= 1 Jan 1946): schijf 1 17,85% (no AOW-premie).',
  },
  'belowAow.algemeneHeffingskorting': {
    url: 'https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/prive/inkomstenbelasting/heffingskortingen_boxen_tarieven/heffingskortingen/algemene_heffingskorting/tabel-algemene-heffingskorting-2026',
    status: 'confirmed',
    retrievedAt: '2026-06-01',
    note: 'Afbouw 6,398% over (verzamelinkomen - 29.736), based on verzamelinkomen (box 1+2+3).',
  },
  'aow.algemeneHeffingskorting': {
    url: 'https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/prive/inkomstenbelasting/heffingskortingen_boxen_tarieven/heffingskortingen/algemene_heffingskorting/tabel-algemene-heffingskorting-2026',
    status: 'confirmed',
    retrievedAt: '2026-06-01',
    note: 'Afbouw 3,195% (exactly half the below-AOW rate).',
  },
  'belowAow.arbeidskorting': {
    url: 'https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/prive/inkomstenbelasting/heffingskortingen_boxen_tarieven/heffingskortingen/arbeidskorting/tabel-arbeidskorting-2026',
    status: 'confirmed',
    retrievedAt: '2026-06-01',
    note: 'Four-segment piecewise, peak 5.685 at ~45.592, zero at 132.920.',
  },
  'aow.arbeidskorting': {
    url: 'https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/prive/inkomstenbelasting/heffingskortingen_boxen_tarieven/heffingskortingen/arbeidskorting/tabel-arbeidskorting-2026',
    status: 'provisional',
    retrievedAt: '2026-10-19',
    note: 'Afgeleid: arbeidskorting onder AOW-leeftijd × 17,85/35,75 (art. 8.10 lid 2 Wet IB 2001); de gepubliceerde AOW-algemene heffingskorting volgt dezelfde verhouding.',
  },
  'aow.ouderenkorting': {
    url: BELASTINGDIENST_TARIEVEN,
    status: 'provisional',
    retrievedAt: '2026-10-19',
    note: 'Max € 2.067, afbouw 15% boven verzamelinkomen € 46.002.',
  },
  'zvw.werkgeversheffing': {
    url: 'https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/prive/werk_en_inkomen/zorgverzekeringswet/veranderingen-bijdrage-zvw/percentages-zvw',
    status: 'confirmed',
    retrievedAt: '2026-06-01',
    note: 'Paid by employer; NOT deducted from employee net.',
  },
  'zvw.aanslagBijdrage': {
    url: 'https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/prive/werk_en_inkomen/zorgverzekeringswet/veranderingen-bijdrage-zvw/percentages-zvw',
    status: 'confirmed',
    retrievedAt: '2026-06-01',
    note: 'Paid via aanslag by ZZP/DGA/pensioners.',
  },
  'zvw.maxBijdrageInkomen': {
    url: 'https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/prive/werk_en_inkomen/zorgverzekeringswet/veranderingen-bijdrage-zvw/percentages-zvw',
    status: 'confirmed',
    retrievedAt: '2026-06-01',
  },
  'zzp.zelfstandigenaftrek': {
    url: 'https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/zakelijk/winst/inkomstenbelasting/veranderingen-inkomstenbelasting-2026/ondernemersaftrek-2026/zelfstandigenaftrek-2026',
    status: 'confirmed',
    retrievedAt: '2026-06-01',
    note: '€1.200 in 2026 (afbouw naar €900 in 2027); vereist urencriterium; AOW-leeftijd 50%.',
  },
  'zzp.startersaftrek': {
    url: 'https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/zakelijk/winst/inkomstenbelasting/veranderingen-inkomstenbelasting-2026/ondernemersaftrek-2026/zelfstandigenaftrek-2026',
    status: 'confirmed',
    retrievedAt: '2026-06-01',
    note: '€2.123 bovenop zelfstandigenaftrek; max 3× in eerste 5 jaar.',
  },
  'zzp.mkbWinstvrijstelling': {
    url: 'https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/zakelijk/winst/inkomstenbelasting/inkomstenbelasting_voor_ondernemers/mkb_winstvrijstelling',
    status: 'confirmed',
    retrievedAt: '2026-06-01',
    note: '12,70% van winst na ondernemersaftrek; geen urencriterium nodig.',
  },
  'zzp.urencriterium': {
    url: 'https://www.kvk.nl/starten/de-magische-1225-uur-alles-over-het-urencriterium/',
    status: 'confirmed',
    retrievedAt: '2026-06-01',
  },
  'dertigProcent.pct': {
    url: 'https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/zakelijk/internationaal/personeel/u_bent_niet_in_nederland_gevestigd_loonheffingen_inhouden/als_u_loonheffingen_gaat_inhouden/extraterritoriale_kosten_en_de_30procentregeling/inhoud_van_de_regeling/inhoud_van_de_regeling',
    status: 'confirmed',
    retrievedAt: '2026-06-01',
    note: 'In 2026 maximaal 30% van het loon belastingvrij; verlaagt naar 27% per 2027. In 2026 belastingvrije vergoeding maximaal € 78.600 (= 30% × WNT-norm € 262.000).',
  },
  'dertigProcent.generalNorm': {
    url: 'https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/zakelijk/internationaal/personeel/u_bent_niet_in_nederland_gevestigd_loonheffingen_inhouden/als_u_loonheffingen_gaat_inhouden/extraterritoriale_kosten_en_de_30procentregeling/voorwaarden_voor_de_30procentregeling1/deskundigheidsvereiste',
    status: 'confirmed',
    retrievedAt: '2026-06-01',
    note: 'Algemene salarisnorm 2026: belastbaar jaarsalaris € 48.013 (excl. gerichte vrijstelling), 2025: € 46.660.',
  },
  'dertigProcent.jongMasterNorm': {
    url: 'https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/zakelijk/internationaal/personeel/u_bent_niet_in_nederland_gevestigd_loonheffingen_inhouden/als_u_loonheffingen_gaat_inhouden/extraterritoriale_kosten_en_de_30procentregeling/voorwaarden_voor_de_30procentregeling1/deskundigheidsvereiste',
    status: 'confirmed',
    retrievedAt: '2026-06-01',
    note: 'Verlaagde norm voor < 30 jaar met mastertitel 2026: € 36.497 (excl. gerichte vrijstelling), 2025: € 35.468.',
  },
  'dertigProcent.wntCap': {
    url: 'https://www.topinkomens.nl/actueel/nieuws/2025/08/19/algemeen-bezoldigingsmaximum-2026-vastgesteld-op-%E2%82%AC-262.000',
    status: 'confirmed',
    retrievedAt: '2026-06-01',
    note: 'Algemeen WNT-bezoldigingsmaximum 2026 = € 262.000; de 30%-regeling wordt afgetopt op de grondslag tot dit bedrag (max vrijstelling 30% × € 262.000 = € 78.600).',
  },
};
