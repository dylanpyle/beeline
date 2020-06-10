import test from 'tape';
import getSortedKey from './get-sorted-key';

test('getSortedKey', (t: test.Test) => {
  t.equal(getSortedKey('apple'), 'aelp');
  t.equal(getSortedKey('pale'), 'aelp');
  t.equal(getSortedKey('aaaabbbbaaaaaaaa'), 'ab');
  t.equal(getSortedKey('dog'), 'dgo');
  t.end();
});
