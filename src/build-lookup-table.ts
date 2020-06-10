import getSortedKey from './get-sorted-key';

export interface WordLookup {
  [sortedKey: string]: string[] | undefined;
}

// Builds a lookup table where each key is a sorted, de-duplicated list of
// letters making up a word, and the value is an array of words with these
// letters.
// e.g. given ["apple", "pale", "carrot"] creates
// { "alep": ["apple, "pale"], "acort": ["carrot"] }
export default function buildLookupTable(wordList: string[]): WordLookup {
  const result: WordLookup = {};

  for (const word of wordList) {
    const key = getSortedKey(word);
    result[key] = (result[key] || []).concat(word.toLowerCase());
  }

  return result;
}

