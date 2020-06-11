"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var tape_1 = tslib_1.__importDefault(require("tape"));
var build_lookup_table_1 = tslib_1.__importDefault(require("./build-lookup-table"));
tape_1.default('getSortedKey', function (t) {
    t.deepEqual(build_lookup_table_1.default([
        'apple',
        'dog',
        'pale',
        'aaabbbaaa'
    ]), {
        aelp: ['apple', 'pale'],
        dgo: ['dog'],
        ab: ['aaabbbaaa']
    });
    t.end();
});
//# sourceMappingURL=build-lookup-table.spec.js.map