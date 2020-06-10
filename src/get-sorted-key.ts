function deduplicateSortedList(list: string[]): string[] {
  const result = [];
  for (let i = 0; i < list.length; i++) {
    if (list[i-1] !== list[i]) {
      result.push(list[i]);
    }
  }

  return result;
}

export default function getSortedKey(word: string): string {
  const sorted = word.toLowerCase().split('').sort();
  return deduplicateSortedList(sorted).join('');
}
