import {
  caos2026,
  caoCatalog2026,
  caoTimeline,
  pensioenfondsen2026,
  type Cao,
} from '@nettohelder/figures';
import { caoMeta } from './cao-meta.generated.js';
import type { CaoDetail, CaoListQuery, CaoSummary } from './schemas.js';

interface CatalogInfo {
  sector: string;
  name: string;
  url: string;
}

const catalogById = new Map<string, CatalogInfo>();
for (const s of caoCatalog2026) {
  for (const c of s.caos) {
    if (c.caoId && !catalogById.has(c.caoId)) catalogById.set(c.caoId, { sector: s.sector, name: c.name, url: c.fnvUrl });
  }
}

const caoById = new Map<string, Cao>(caos2026.map((c) => [c.id, c]));

export function findCao(id: string): Cao | undefined {
  return caoById.get(id);
}

export function caoSector(id: string): string | undefined {
  return catalogById.get(id)?.sector;
}

export function caoSectors(): string[] {
  return caoCatalog2026.map((s) => s.sector);
}

/** Lowercase and strip diacritics so "cafe" finds "Café". */
function norm(s: string): string {
  return s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
}

export function caoSummary(cao: Cao): CaoSummary {
  const meta = caoMeta[cao.id];
  const sector = caoSector(cao.id);
  const provisional = (cao.periods ?? []).some((p) => p.status === 'provisional');
  return {
    id: cao.id,
    name: cao.name,
    ...(sector !== undefined ? { sector } : {}),
    year: cao.year,
    salaryKind: cao.salary.kind,
    ...(cao.salary.hoursPerWeek !== undefined ? { hoursPerWeek: cao.salary.hoursPerWeek } : {}),
    periods: 1 + (cao.periods?.length ?? 0),
    status: provisional ? 'provisional' : 'confirmed',
    draft: meta?.draft ?? false,
    ...(meta?.confidence !== undefined ? { confidence: meta.confidence } : {}),
    sourceUrl: cao.sourceUrl,
  };
}

const searchIndex = caos2026.map((cao) => ({
  cao,
  name: norm(cao.name),
  haystack: norm(`${cao.name} ${cao.id} ${caoSector(cao.id) ?? ''} ${catalogById.get(cao.id)?.name ?? ''}`),
  sector: norm(caoSector(cao.id) ?? ''),
}));

export function searchCaos(query: Pick<CaoListQuery, 'q' | 'sector' | 'salaryKind' | 'limit' | 'offset'>): {
  total: number;
  limit: number;
  offset: number;
  items: CaoSummary[];
} {
  const q = norm(query.q?.trim() ?? '');
  const tokens = q.split(/\s+/).filter(Boolean);
  const sector = norm(query.sector?.trim() ?? '');
  const hits = searchIndex
    .filter((e) => (!sector || e.sector.includes(sector)) && tokens.every((t) => e.haystack.includes(t)))
    .filter((e) => !query.salaryKind || e.cao.salary.kind === query.salaryKind)
    .map((e) => ({ e, rank: !q ? 2 : e.name.startsWith(q) ? 0 : e.name.includes(q) ? 1 : 2 }))
    .sort((a, b) => a.rank - b.rank || a.e.name.localeCompare(b.e.name))
    .map((x) => x.e.cao);
  return {
    total: hits.length,
    limit: query.limit,
    offset: query.offset,
    items: hits.slice(query.offset, query.offset + query.limit).map(caoSummary),
  };
}

export function caoDetail(cao: Cao): CaoDetail {
  const catalog = catalogById.get(cao.id);
  const fonds = pensioenfondsen2026.find((f) => f.id === cao.pensioenfondsId);
  return {
    ...caoSummary(cao),
    effectiveNote: cao.effectiveNote,
    ...(catalog ? { catalogName: catalog.name, catalogUrl: catalog.url } : {}),
    vakantiegeldPct: cao.vakantiegeldPct,
    eindejaarsuitkeringPct: cao.eindejaarsuitkeringPct,
    ...(fonds
      ? {
          pensioenfonds: {
            id: fonds.id,
            name: fonds.name,
            franchise: fonds.franchise,
            employeePremiePct: fonds.employeePremiePct,
            confidence: fonds.confidence,
            sourceUrl: fonds.sourceUrl,
          },
        }
      : {}),
    vergoedingen: cao.vergoedingen,
    eenmaligeUitkeringen: cao.eenmaligeUitkeringen ?? [],
    timeline: caoTimeline(cao),
  };
}
