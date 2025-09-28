import { parseArgs } from 'node:util';
import { readFile, writeFile } from 'node:fs/promises';
import { basename, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { transpile } from './_transpile.ts';

const { positionals: args } = parseArgs({ allowPositionals: true });
if (args.length !== 1) {
  console.error('Usage: build <directory>');
  console.error('Error: exactly 1 positional argument <directory> is required');
  process.exit(1);
}

const rootDir = join(fileURLToPath(import.meta.url), '..', '..', '..');
const agentDir = join(rootDir, args[0]);

try {
  await writeFile(
    join(rootDir, '.claude', 'commands', `test-${basename(agentDir)}.md`),
    await transpile(join(agentDir, 'prompt.test.poml'))
  );
} catch (err) {
  console.error(err);
  process.exit(1);
}
