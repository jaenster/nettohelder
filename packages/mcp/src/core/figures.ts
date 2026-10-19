import { createHash } from 'node:crypto';
import {
  figures2026,
  figures2027,
  provenance2026,
  provenance2027,
  pensioenfondsen2026,
  type ProvenanceMap,
  type TaxYearFigures,
} from '@nettohelder/figures';
import type { FiguresDocument, TaxYear } from './schemas.js';

export const taxYears: Record<TaxYear, { figures: TaxYearFigures; provenance: ProvenanceMap }> = {
  2026: { figures: figures2026, provenance: provenance2026 },
  2027: { figures: figures2027, provenance: provenance2027 },
};

export function isTaxYear(n: number): n is TaxYear {
  return n === 2026 || n === 2027;
}

/** JSON has no Infinity: the open top bracket becomes `upTo: null`. */
function jsonSafe(value: unknown): unknown {
  return JSON.parse(JSON.stringify(value, (_k, v: unknown) => (v === Infinity ? null : v)));
}

const cache = new Map<TaxYear, FiguresDocument>();

/** The figures of one tax year as a self-describing, versioned JSON document. */
export function figuresDocument(year: TaxYear): FiguresDocument {
  const hit = cache.get(year);
  if (hit) return hit;
  const { figures, provenance } = taxYears[year];
  const body = {
    figures: jsonSafe(figures) as Record<string, unknown>,
    provenance,
    pensioenfondsen: jsonSafe(pensioenfondsen2026) as Record<string, unknown>[],
  };
  const dataVersion = createHash('sha256').update(JSON.stringify(body)).digest('hex').slice(0, 12);
  const status = Object.values(provenance).some((p) => p.status === 'provisional') ? 'provisional' : 'confirmed';
  const doc: FiguresDocument = { schemaVersion: 1, year, dataVersion, status, ...body };
  cache.set(year, doc);
  return doc;
}
