/**
 * Which hosts may be cited as a source. Every figure and every CAO table links
 * to a primary source: the government, the parties that signed the CAO (unions,
 * employer organisations, the employer itself) or the pension fund. Never an
 * aggregator, payroll vendor, staffing agency, competitor, news site, or
 * accountancy/advisory/law firm, even when it republishes the same table.
 *
 * This is the one list to maintain. A domain matches itself and its subdomains
 * (`fnv.nl` covers `www.fnv.nl` and `comform.fnv.nl`).
 */

/** Known secondary sources. Matching one fails the source test with the reason given. */
export const BLOCKED_SOURCE_DOMAINS: Readonly<Record<string, string>> = {
  'ambtenarensalaris.nl': 'aggregator',
  'berekenhet.nl': 'competitor',
  'berekenen.nl': 'competitor',
  'loonwijzer.nl': 'aggregator',
  'kennisdomein.nl': 'aggregator',
  'salaris-informatie.nl': 'aggregator',
  'salaristabel.nl': 'aggregator',
  'caowijzer.nl': 'aggregator',
  'bcs.nl': 'payroll vendor',
  'flexpedia.nl': 'staffing agency',
  'jigler.nl': 'staffing platform',
  'nedflex.nl': 'staffing agency',
  'randstad.nl': 'staffing agency',
  'salarisvanmorgen.nl': 'news',
  'rendement.nl': 'news',
  'securitymanagement.nl': 'news',
  'sra.nl': 'accountancy',
  'pwc.nl': 'advisory',
  'meijburg.nl': 'advisory',
  'loyensloeff.com': 'law firm',
  'benpbelastingadviseurs.nl': 'advisory',
};

/** Government, legislation and parliament. */
const GOVERNMENT = [
  'belastingdienst.nl',
  'rijksoverheid.nl',
  'overheid.nl', // officielebekendmakingen, wetten, uitvoering-cao register
  'officielebekendmakingen.nl',
  'tweedekamer.nl',
  'eerstekamer.nl',
  'uitvoeringarbeidsvoorwaardenwetgeving.nl',
  'topinkomens.nl',
  'kvk.nl',
  'svb.nl',
  'uwv.nl',
  'cbs.nl',
  'politie.nl',
  'defensie.nl',
];

/** Unions. */
const UNIONS = [
  'fnv.nl',
  'fnvcabine.nl',
  'fnvklmgrond.nl',
  'fnvmooi.nl',
  'cnv.nl',
  'unie.nl',
  'afmp.nl',
  'politiebond.nl',
  'marechausseevereniging.nl',
  'vnv.nl',
  'vvcs.nl',
  'lhv.nl',
];

/** Employer organisations, employers, sector funds and CAO sites run by the parties. */
const CAO_PARTIES = [
  'awvn.nl',
  'abu.nl',
  'actiz.nl',
  'anko.nl',
  'avn.nu',
  'cao-ziekenhuizen.nl',
  'caobanken.nl',
  'caoberoepsgoederenvervoer.nl',
  'caogemeenten.nl',
  'caogroengrondinfrastructuur.nl',
  'caorijk.nl',
  'caovermo.nl',
  'cbm.nl',
  'cedris.nl',
  'clcvecta.nl',
  'denederlandseggz.nl',
  'dibevo.nl',
  'e-commerce-nederland.nl',
  'fondsambachtelijkebakkerijen.nl',
  'groentenfruithuis.nl',
  'groothandelinlevensmiddelen.nl',
  'hellendedaken.nl',
  'hibin.nl',
  'hiswarecron.nl',
  'jouwveiligheidsdomein.nl',
  'inretail.nl',
  'ipo.nl',
  'jeugdzorg-werkt.nl',
  'khn.nl',
  'kinderopvang-werkt.nl',
  'knmp.nl',
  'mbo-cao.nl',
  'napk.nl',
  'nbvt.nl',
  'noa.nl',
  'nos.nl',
  'nvg-golf.nl',
  'onderhoudnl.nl',
  'poraad.nl',
  'ras.nl',
  'rndweb.nl',
  'sboh.nl',
  'sfa-architecten.nl',
  'sociaalwerk-werkt.nl',
  'tbbouwinfra.nl',
  'technischegroothandel.org',
  'universiteitenvannederland.nl',
  'vakcentrum.nl',
  'vbne.nl',
  'vbw.nu',
  'veiligheidsbranche.nl',
  'veneca.nl',
  'vereniginghogescholen.nl',
  'verzekeraars.nl',
  'vgn.nl',
  'vgs.nl',
  'vo-raad.nl',
  'vscd.nl',
  'vsbn.nl',
  'vvnh.nl',
  'vvob.nl',
  'vwvw.nl',
  'werkenincontractcatering.nl',
  'werkgeverslijn.nl',
  'wvoi.nl',
  'zkn.nl',
  'zn.nl',
];

/** Pension funds. */
const PENSION_FUNDS = [
  'abp.nl',
  'architectenpensioen.nl',
  'bakkerspensioen.nl',
  'bpfbouw.nl',
  'bpfschilders.nl',
  'bplpensioen.nl',
  'pensioenfondsdetailhandel.nl',
  'pensioenschoonmaak.nl',
  'pensioenslagers.nl',
  'pfvervoer.nl',
  'pfzw.nl',
  'pma-pensioenen.nl',
  'pmepensioen.nl',
  'pmt.nl',
  'stippensioen.nl',
];

/** Exact hosts on shared infrastructure that serve a CAO party's own files. */
const ALLOWED_EXACT_HOSTS = [
  'cnvstorageprd.blob.core.windows.net', // CNV document storage
  'd1p3jfjj2ztqji.cloudfront.net', // Nederlandse Veiligheidsbranche (veiligheidsbranche.nl)
  'bkned-site.e-captain.nl', // Kringloop Nederland (BKN)
];

export const ALLOWED_SOURCE_DOMAINS: readonly string[] = [
  ...GOVERNMENT,
  ...UNIONS,
  ...CAO_PARTIES,
  ...PENSION_FUNDS,
];

/** Our own site; links to it are internal, not sources. */
export const SITE_HOSTS: readonly string[] = ['nettohelder.nl'];

const matchesDomain = (host: string, domain: string): boolean =>
  host === domain || host.endsWith(`.${domain}`);

export interface SourceVerdict {
  ok: boolean;
  /** Why the URL is rejected; absent when ok. */
  reason?: string;
}

/** Judges one external URL against the source policy. */
export function checkSourceUrl(url: string): SourceVerdict {
  const match = /^https?:\/\/([^/?#:]+)/i.exec(url);
  if (!match) return { ok: false, reason: 'not an http(s) URL' };
  const host = (match[1] ?? '').toLowerCase();
  const blocked = Object.keys(BLOCKED_SOURCE_DOMAINS).find((d) => matchesDomain(host, d));
  if (blocked) {
    return { ok: false, reason: `secondary source (${BLOCKED_SOURCE_DOMAINS[blocked]}: ${blocked})` };
  }
  if (ALLOWED_EXACT_HOSTS.includes(host)) return { ok: true };
  if (ALLOWED_SOURCE_DOMAINS.some((d) => matchesDomain(host, d))) return { ok: true };
  return {
    ok: false,
    reason: `host ${host} is not on the primary-source allowlist (packages/figures/src/source-policy.ts)`,
  };
}
