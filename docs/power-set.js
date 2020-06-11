"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// [1,2,3] -> [[1],[2],[3],[1,2],[1,3],[2,3],[1,2,3]]
function findPowerSet(list) {
    var setSize = Math.pow(2, list.length);
    var result = [];
    for (var i = 0; i < setSize; i++) {
        var set = [];
        for (var j = 0; j < setSize; j++) {
            if (i & (1 << j)) {
                set.push(list[j]);
            }
        }
        result.push(set);
    }
    return result;
}
exports.default = findPowerSet;
//# sourceMappingURL=power-set.js.map