"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var tape_1 = tslib_1.__importDefault(require("tape"));
var find_words_1 = tslib_1.__importDefault(require("./find-words"));
var lookupTable = {
    aelp: ['apple', 'pale', 'leap'],
    abc: ['cab', 'bac'],
    alp: ['lap', 'pal'],
    a: ['a'],
};
tape_1.default('findWords', function (t) {
    t.deepEqual(find_words_1.default({
        optionalLetters: ['p', 'l', 'e', 'q', 'x', 'z'],
        requiredLetter: 'a',
        lookupTable: lookupTable,
        minLength: 2
    }), [
        'lap',
        'pal',
        'apple',
        'pale',
        'leap'
    ]);
    t.end();
});
//# sourceMappingURL=find-words.spec.js.map