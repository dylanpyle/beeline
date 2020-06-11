#!./node_modules/.bin/ts-node

import lookupTable from '../data/words.lookup.json';
import findWords from '../src/find-words';
import { WordLookup } from '../src/build-lookup-table';

const optionalLetters = process.argv[2].split('');
const requiredLetter = process.argv[3];

console.log({ optionalLetters, requiredLetter });

const words = findWords({
  optionalLetters,
  requiredLetter,
  lookupTable: lookupTable as WordLookup,
  minLength: 5
});

console.log(words.join('\n'));
