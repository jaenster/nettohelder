import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { readCaoMeta, renderCaoMeta } from './cao-meta.js';

const caosDir = fileURLToPath(new URL('../../figures/src/caos', import.meta.url));
const target = fileURLToPath(new URL('../src/core/cao-meta.generated.ts', import.meta.url));

const meta = readCaoMeta(caosDir);
writeFileSync(target, renderCaoMeta(meta));
console.log(`cao-meta: ${Object.keys(meta).length} records -> ${target}`);
