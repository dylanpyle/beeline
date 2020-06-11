"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var tape_1 = tslib_1.__importDefault(require("tape"));
var get_sorted_key_1 = tslib_1.__importDefault(require("./get-sorted-key"));
tape_1.default('getSortedKey', function (t) {
    t.equal(get_sorted_key_1.default('apple'), 'aelp');
    t.equal(get_sorted_key_1.default('pale'), 'aelp');
    t.equal(get_sorted_key_1.default('aaaabbbbaaaaaaaa'), 'ab');
    t.equal(get_sorted_key_1.default('dog'), 'dgo');
    t.end();
});
//# sourceMappingURL=get-sorted-key.spec.js.map