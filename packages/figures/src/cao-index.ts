import type { Cao, CaoSalary } from './types.js';
import { caoIndex2026, caoLoaders2026 } from './cao-index.generated.js';

/**
 * What lists, links and the picker need to know about a CAO without loading its
 * salary tables. The full record comes from `loadCao`.
 */
export interface CaoIndexEntry {
  id: string;
  /** Catalogue name (falls back to the record's name for CAOs outside the catalogue). */
  name: string;
  /** Catalogue sector; absent for CAOs outside the catalogue, which the picker leaves out. */
  sector?: string;
  kind: CaoSalary['kind'];
}

export { caoIndex2026 };

const loaded = new Map<string, Promise<Cao>>();

/** The full record of one CAO, imported on first use; undefined for an unknown id. */
export function loadCao(id: string): Promise<Cao> | undefined {
  const load = caoLoaders2026[id];
  if (!load) return undefined;
  let p = loaded.get(id);
  if (!p) {
    p = load().then((m) => Object.values(m)[0]!);
    p.catch(() => loaded.delete(id));
    loaded.set(id, p);
  }
  return p;
}
