import getSortedKey from "./get-sorted-key";
import { WordLookup } from "./build-lookup-table";
import findPowerSet from "./power-set";

interface Options {
  optionalLetters: string[];
  requiredLetter: string;
  lookupTable: WordLookup;
  minLength: number;
}

export default function findWords(options: Options): string[] {
  const { requiredLetter, optionalLetters, lookupTable, minLength } = options;

  const allowedLetters = optionalLetters.concat(requiredLetter);

  const normalized = getSortedKey(allowedLetters.join("")).split("");
  const powerSet = findPowerSet<string>(normalized);

  const result: string[] = [];

  for (const set of powerSet) {
    if (set.indexOf(requiredLetter) > -1) {
      const words = lookupTable[set.join("")];
      if (words) {
        const allowedWords = words.filter(
          (word: string) => word.length >= minLength
        );
        result.push(...allowedWords);
      }
    }
  }

  return result;
}
