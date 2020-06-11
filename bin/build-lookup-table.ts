#!./node_modules/.bin/ts-node

import * as fs from 'fs';
import * as path from 'path';
import buildLookupTable from '../src/build-lookup-table';

const wordlist = fs.readFileSync(path.join(__dirname, '..', 'data', 'words'));
const words = wordlist.toString('utf8').split('\n');

const lookupTable = buildLookupTable(words);
const serializedTable = JSON.stringify(lookupTable, null, 2);

fs.writeFileSync(
  path.join(__dirname, '..', 'static', 'words.lookup.json'),
  serializedTable
);

console.log('done!');
