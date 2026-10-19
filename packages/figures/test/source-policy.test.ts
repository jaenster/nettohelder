import { readdirSync, readFileSync } from 'node:fs';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { describe, it, expect } from 'vitest';
import { caos2026, caoCatalog2026, provenance2026, provenance2027 } from '../src/index.js';
import { checkSourceUrl } from '../src/source-policy.js';

const pkgDir = fileURLToPath(new URL('..', import.meta.url));
const srcDir = join(pkgDir, 'src');

/** Hosts that appear in the source as identifiers, not as cited sources. */
const NON_SOURCE_URL = /^https?:\/\/(www\.w3\.org|schema\.org)\//;

const listTs = (dir: string): string[] =>
  readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? listTs(join(dir, e.name)) : e.name.endsWith('.ts') ? [join(dir, e.name)] : [],
  );

const report = (offenders: string[]): string =>
  `${offenders.length} non-primary source URL(s):\n${offenders.join('\n')}`;

describe('source policy', () => {
  it('every URL in figures/src (records, provenance, comments) is a primary source', () => {
    const offenders: string[] = [];
    for (const file of listTs(srcDir)) {
      if (file.endsWith('source-policy.ts')) continue;
      readFileSync(file, 'utf8')
        .split('\n')
        .forEach((line, i) => {
          for (const [url] of line.matchAll(/https?:\/\/[^\s'"`)<>\]]+/g)) {
            if (NON_SOURCE_URL.test(url)) continue;
            const verdict = checkSourceUrl(url);
            if (verdict.ok) continue;
            offenders.push(`  ${relative(pkgDir, file)}:${i + 1} ${url} — ${verdict.reason}`);
          }
        });
    }
    expect(offenders, report(offenders)).toEqual([]);
  });

  it('every CAO record sourceUrl is a primary source', () => {
    const offenders = caos2026
      .map((c) => ({ id: c.id, verdict: checkSourceUrl(c.sourceUrl), url: c.sourceUrl }))
      .filter((r) => !r.verdict.ok)
      .map((r) => `  cao ${r.id}: ${r.url} — ${r.verdict.reason}`);
    expect(offenders, report(offenders)).toEqual([]);
  });

  it('every catalogue link is a primary source', () => {
    const offenders = caoCatalog2026
      .flatMap((s) => s.caos)
      .filter((c) => !checkSourceUrl(c.fnvUrl).ok)
      .map((c) => `  catalog ${c.name}: ${c.fnvUrl} — ${checkSourceUrl(c.fnvUrl).reason}`);
    expect(offenders, report(offenders)).toEqual([]);
  });

  it('every provenance URL is a primary source', () => {
    const all = { ...prefix('2026', provenance2026), ...prefix('2027', provenance2027) };
    const offenders = Object.entries(all)
      .filter(([, p]) => !checkSourceUrl(p.url).ok)
      .map(([key, p]) => `  provenance ${key}: ${p.url} — ${checkSourceUrl(p.url).reason}`);
    expect(offenders, report(offenders)).toEqual([]);
  });

  it('rejects known secondary domains and unknown hosts', () => {
    expect(checkSourceUrl('https://ambtenarensalaris.nl/x').ok).toBe(false);
    expect(checkSourceUrl('https://zendesk.bcs.nl/hc/x').ok).toBe(false);
    expect(checkSourceUrl('https://example.com/x').ok).toBe(false);
    expect(checkSourceUrl('https://zoek.officielebekendmakingen.nl/stcrt-1.html').ok).toBe(true);
    expect(checkSourceUrl('https://comform.cnv.nl/x').ok).toBe(true);
  });
});

function prefix<T>(year: string, map: Record<string, T>): Record<string, T> {
  return Object.fromEntries(Object.entries(map).map(([k, v]) => [`${year} ${k}`, v]));
}
