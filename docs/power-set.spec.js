"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var tape_1 = tslib_1.__importDefault(require("tape"));
var power_set_1 = tslib_1.__importDefault(require("./power-set"));
tape_1.default('powerSet', function (t) {
    t.deepEqual(power_set_1.default([]), [[]]);
    t.deepEqual(power_set_1.default(['a', 'b']).sort(), [
        [],
        ['a'],
        ['b'],
        ['a', 'b'],
    ].sort());
    t.deepEqual(power_set_1.default(['a', 'b', 'c']).sort(), [
        [],
        ['a'],
        ['b'],
        ['c'],
        ['a', 'b'],
        ['a', 'c'],
        ['b', 'c'],
        ['a', 'b', 'c']
    ].sort());
    t.deepEqual(power_set_1.default(['a', 'b', 'c', 'd', 'e', 'f', 'g']).length, 128);
    t.end();
});
//# sourceMappingURL=power-set.spec.js.map