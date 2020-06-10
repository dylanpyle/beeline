// [1,2,3] -> [[1],[2],[3],[1,2],[1,3],[2,3],[1,2,3]]
export default function findPowerSet<T>(list: T[]): T[][] {
  const setSize = Math.pow(2, list.length);

  const result: T[][] = [];
  for (let i = 0; i < setSize; i++) {
    const set: T[] = [];

    for (let j = 0; j < setSize; j++) {
      if (i & (1 << j)) {
        set.push(list[j]);
      }
    }

    result.push(set);
  }

  return result;
}
