import { describe, it, expect } from 'vitest';
import { caos2026, pensioenfondsen2026, validateCaos } from '../src/index.js';

const knownPensioenfondsIds = new Set(pensioenfondsen2026.map((p) => p.id));

describe('shipped CAO data integrity', () => {
  const issues = validateCaos(caos2026, { knownPensioenfondsIds });
  const errors = issues.filter((i) => i.severity === 'error');

  it('has no structural errors', () => {
    expect(errors, errors.map((e) => `${e.caoId}: [${e.code}] ${e.message}`).join('\n')).toEqual([]);
  });

  // Warnings are allowed to exist (a CAO can legitimately be atypical) but are
  // surfaced so a reviewer sees them. This keeps the test green while still
  // printing what to eyeball.
  it('reports its warnings', () => {
    const warnings = issues.filter((i) => i.severity === 'warn');
    if (warnings.length > 0)
      console.warn('CAO data warnings:\n' + warnings.map((w) => `  ${w.caoId}: [${w.code}] ${w.message}`).join('\n'));
    expect(true).toBe(true);
  });
});
