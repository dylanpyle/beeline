import getSortedKey from './get-sorted-key';
import findPowerSet from './power-set';

interface WordLookup {
  [sortedKey: string]: string[] | undefined;
}

// Builds a lookup table where each key is a sorted, de-duplicated list of
// letters making up a word, and the value is an array of words with these
// letters.
// e.g. given ["apple", "pale", "carrot"] creates
// { "alep": ["apple, "pale"], "acort": ["carrot"] }
export function buildLookupTable(wordList: string[]): WordLookup {
  const result: WordLookup = {};

  for (const word of wordList) {
    const key = getSortedKey(word);
    result[key] = (result[key] || []).concat(word.toLowerCase());
  }

  return result;
}

export function findWords(optionalLetters: string[], requiredLetter: string, lookupTable: WordLookup): string[] {
  const allowedLetters = optionalLetters.concat(requiredLetter);

  const normalized = getSortedKey(allowedLetters.join('')).split('');
  const powerSet = findPowerSet<string>(normalized);

  const result: string[] = [];

  for (const set of powerSet) {
    if (set.indexOf(requiredLetter) > -1) {
      const words = lookupTable[set.join('')];
      if (words) {
        result.push(...words);
      }
    }
  }

  return result;
}
