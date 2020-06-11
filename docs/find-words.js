"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var get_sorted_key_1 = tslib_1.__importDefault(require("./get-sorted-key"));
var power_set_1 = tslib_1.__importDefault(require("./power-set"));
function findWords(options) {
    var requiredLetter = options.requiredLetter, optionalLetters = options.optionalLetters, lookupTable = options.lookupTable, minLength = options.minLength;
    var allowedLetters = optionalLetters.concat(requiredLetter);
    var normalized = get_sorted_key_1.default(allowedLetters.join('')).split('');
    var powerSet = power_set_1.default(normalized);
    var result = [];
    for (var _i = 0, powerSet_1 = powerSet; _i < powerSet_1.length; _i++) {
        var set = powerSet_1[_i];
        if (set.indexOf(requiredLetter) > -1) {
            var words = lookupTable[set.join('')];
            if (words) {
                var allowedWords = words.filter(function (word) { return word.length >= minLength; });
                result.push.apply(result, allowedWords);
            }
        }
    }
    return result;
}
exports.default = findWords;
//# sourceMappingURL=find-words.js.map