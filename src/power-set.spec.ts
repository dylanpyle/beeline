import test from 'tape';
import powerSet from './power-set';

test('powerSet', (t: test.Test) => {
  t.deepEqual(powerSet([]), [[]]);

  t.deepEqual(powerSet(['a', 'b']).sort(), [
    [],
    ['a'],
    ['b'],
    ['a', 'b'],
  ].sort());

  t.deepEqual(powerSet(['a', 'b', 'c']).sort(), [
    [],
    ['a'],
    ['b'],
    ['c'],
    ['a', 'b'],
    ['a', 'c'],
    ['b','c'],
    ['a','b','c']
  ].sort());

  t.deepEqual(powerSet(['a', 'b', 'c', 'd', 'e', 'f', 'g']).length, 128);

  t.end();
});
