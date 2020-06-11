"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function deduplicateSortedList(list) {
    var result = [];
    for (var i = 0; i < list.length; i++) {
        if (list[i - 1] !== list[i]) {
            result.push(list[i]);
        }
    }
    return result;
}
function getSortedKey(word) {
    var sorted = word.toLowerCase().split('').sort();
    return deduplicateSortedList(sorted).join('');
}
exports.default = getSortedKey;
//# sourceMappingURL=get-sorted-key.js.map