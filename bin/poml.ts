#!/usr/bin/env node
import { parseArgs } from 'node:util';
import { commandLine } from 'pomljs';

const { values: args } = parseArgs({
  options: {
    file: { type: 'string', short: 'f' },
    // If not given, output the result to stdout.
    output: { type: 'string', short: 'o' },
  },
});

await commandLine({ ...args, speakerMode: false });
