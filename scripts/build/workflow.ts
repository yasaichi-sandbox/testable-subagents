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
const workflowDir = join(rootDir, args[0]);

try {
  await writeFile(
    join(
      rootDir,
      '.claude',
      'commands',
      `workflow-${basename(workflowDir)}.md`
    ),
    [
      '---',
      await readFile(join(workflowDir, 'prompt.meta.yml')),
      '---',
      await transpile(join(workflowDir, 'prompt.poml')),
    ].join('\n')
  );
} catch (err) {
  console.error(err);
  process.exit(1);
}
