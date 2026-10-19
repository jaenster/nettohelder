import { chmodSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { build } from 'esbuild';

const outfile = fileURLToPath(new URL('../dist/index.js', import.meta.url));

// Everything (engine, figures, SDK, zod, TOON) is bundled so `npx` fetches one tarball with no deps.
await build({
  entryPoints: [fileURLToPath(new URL('../src/index.ts', import.meta.url))],
  outfile,
  bundle: true,
  platform: 'node',
  format: 'esm',
  target: 'node20',
  minify: true,
  legalComments: 'none',
  banner: {
    js: "#!/usr/bin/env node\nimport { createRequire } from 'node:module'; const require = createRequire(import.meta.url);",
  },
});
chmodSync(outfile, 0o755);
console.log(`built ${outfile}`);
