/* Seed smoke tests: json-formatter + base64-encoder */
'use strict';
const assert = require('assert');
const jf = require('../static/js/json-formatter.js');
const be = require('../static/js/base64-encoder.js');

/* --- json-formatter --- */
assert.strictEqual(jf.formatJson('{"a":1}'), '{\n  "a": 1\n}');
assert.strictEqual(jf.formatJson('{"a":1}', 4), '{\n    "a": 1\n}');
assert.strictEqual(jf.minifyJson('{ "a" : 1 , "b" : [1,2] }'), '{"a":1,"b":[1,2]}');
assert.strictEqual(jf.validateJson('{"a":1}').valid, true);
assert.strictEqual(jf.validateJson('{"a":}').valid, false);
assert.strictEqual(jf.validateJson('{bad').position >= 0, true);
console.log('json-formatter  : PASS (6 assertions)');

/* --- base64-encoder --- */
assert.strictEqual(be.encodeBase64('hello'), 'aGVsbG8=');
assert.strictEqual(be.encodeBase64('你好'), '5L2g5aW9');
assert.strictEqual(be.decodeBase64('aGVsbG8='), 'hello');
assert.strictEqual(be.decodeBase64('5L2g5aW9'), '你好');
assert.throws(() => be.decodeBase64('!!!not-base64!!!'));
assert.throws(() => be.decodeBase64('a')); /* length % 4 === 1 */
console.log('base64-encoder  : PASS (6 assertions)');

console.log('SEED TESTS: all passed');
