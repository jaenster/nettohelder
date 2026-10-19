import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { describe, it, expect } from 'vitest';
import { readCaoIndex, renderCaoIndex } from '../scripts/cao-index.js';
import { caoIndex2026, caos2026, loadCao } from '../src/index.js';

const caosDir = fileURLToPath(new URL('../src/caos', import.meta.url));
const generated = fileURLToPath(new URL('../src/cao-index.generated.ts', import.meta.url));

describe('cao index', () => {
  it('is in sync with caos2026 and the catalogue (run `pnpm --filter @nettohelder/figures gen`)', async () => {
    expect(readFileSync(generated, 'utf8')).toBe(renderCaoIndex(await readCaoIndex(caosDir)));
  });

  it('lists every CAO once', () => {
    expect(caoIndex2026.map((e) => e.id).sort()).toEqual(caos2026.map((c) => c.id).sort());
  });

  it('loads the same record caos2026 holds', async () => {
    for (const cao of caos2026) expect(await loadCao(cao.id)).toBe(cao);
    expect(loadCao('bestaat-niet')).toBeUndefined();
  });
});
