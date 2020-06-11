import test from "tape";
import buildLookupTable from "./build-lookup-table";

test("getSortedKey", (t: test.Test) => {
  t.deepEqual(buildLookupTable(["apple", "dog", "pale", "aaabbbaaa"]), {
    aelp: ["apple", "pale"],
    dgo: ["dog"],
    ab: ["aaabbbaaa"],
  });

  t.end();
});
