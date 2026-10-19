import { readdirSync, readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { NettoRequestSchema, computeNetto, resolveNetto } from '../src/core/index.js';

describe('golden vectors', () => {
  it('replays every golden vector through the request layer', () => {
    const dir = new URL('../../engine/test/golden/', import.meta.url);
    const files = readdirSync(dir).filter((f) => f.endsWith('.json'));
    expect(files.length).toBeGreaterThanOrEqual(30);
    for (const f of files) {
      const v = JSON.parse(readFileSync(new URL(f, dir), 'utf8')) as {
        today: string;
        request: unknown;
        engine: { sources: unknown[]; options: unknown };
        expected: Record<string, unknown>;
      };
      const req = NettoRequestSchema.parse(v.request);
      const resolved = resolveNetto(req, v.today);
      expect([resolved.source], f).toEqual(v.engine.sources);
      expect(resolved.options, f).toEqual(v.engine.options);
      expect(computeNetto(req, v.today).result, f).toEqual(v.expected);
    }
  });
});
