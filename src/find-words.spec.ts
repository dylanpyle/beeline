import test from 'tape';
import findWords from './find-words';
import { WordLookup } from './build-lookup-table';

const lookupTable: WordLookup = {
  aelp: ['apple', 'pale', 'leap'],
  abc: ['cab', 'bac'],
  alp: ['lap', 'pal'],
  a: ['a'],
};

test('findWords', (t: test.Test) => {
  t.deepEqual(findWords({
    optionalLetters: ['p','l','e','q','x','z'],
    requiredLetter: 'a',
    lookupTable,
    minLength: 2
  }), [
    'lap',
    'pal',
    'apple',
    'pale',
    'leap'
  ]);

  t.end();
});
