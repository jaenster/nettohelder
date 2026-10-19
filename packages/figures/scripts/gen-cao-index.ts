import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { readCaoIndex, renderCaoIndex } from './cao-index.js';

const caosDir = fileURLToPath(new URL('../src/caos', import.meta.url));
const target = fileURLToPath(new URL('../src/cao-index.generated.ts', import.meta.url));

const entries = await readCaoIndex(caosDir);
writeFileSync(target, renderCaoIndex(entries));
console.log(`cao-index: ${entries.length} records -> ${target}`);
