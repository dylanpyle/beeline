"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var get_sorted_key_1 = tslib_1.__importDefault(require("./get-sorted-key"));
// Builds a lookup table where each key is a sorted, de-duplicated list of
// letters making up a word, and the value is an array of words with these
// letters.
// e.g. given ["apple", "pale", "carrot"] creates
// { "alep": ["apple, "pale"], "acort": ["carrot"] }
function buildLookupTable(wordList) {
    var result = {};
    for (var _i = 0, wordList_1 = wordList; _i < wordList_1.length; _i++) {
        var word = wordList_1[_i];
        var key = get_sorted_key_1.default(word);
        result[key] = (result[key] || []).concat(word.toLowerCase());
    }
    return result;
}
exports.default = buildLookupTable;
//# sourceMappingURL=build-lookup-table.js.map