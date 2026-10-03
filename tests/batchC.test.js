/* Batch C smoke tests: 12 tools */
'use strict';
const assert = require('assert');

/* --- word-counter --- */
const wc = require('../static/js/word-counter.js');
{
  const s = wc.countStats('Hello world. This is a test!');
  assert.strictEqual(s.words, 6);
  assert.strictEqual(s.sentences, 2);
  assert.strictEqual(s.characters, 'Hello world. This is a test!'.length);
  const e = wc.countStats('');
  assert.strictEqual(e.words, 0);
  assert.strictEqual(e.paragraphs, 0);
}
console.log('word-counter           : PASS (5 assertions)');

/* --- line-counter --- */
const lc = require('../static/js/line-counter.js');
{
  const s = lc.countLines('\na\n\nb\n');
  assert.strictEqual(s.lines, 4);
  assert.strictEqual(s.nonEmptyLines, 2);
  assert.strictEqual(s.characters, 6);
  assert.strictEqual(lc.countLines('one\ntwo\nthree').lines, 3);
}
console.log('line-counter           : PASS (4 assertions)');

/* --- remove-duplicate-lines --- */
const rdl = require('../static/js/remove-duplicate-lines.js');
{
  const r = rdl.removeDuplicateLines('a\nb\na\nc', {});
  assert.strictEqual(r.output, 'a\nb\nc');
  assert.strictEqual(r.duplicatesRemoved, 1);
  const ci = rdl.removeDuplicateLines('a\nA\nb', { caseSensitive: false });
  assert.strictEqual(ci.duplicatesRemoved, 1);
  assert.strictEqual(ci.output, 'a\nb');
}
console.log('remove-duplicate-lines : PASS (4 assertions)');

/* --- text-line-sorter --- */
const tls = require('../static/js/text-line-sorter.js');
{
  assert.strictEqual(tls.sortLines('c\na\nb', 'az'), 'a\nb\nc');
  assert.strictEqual(tls.sortLines('c\na\nb', 'reverse'), 'b\na\nc');
  assert.strictEqual(tls.sortLines('b\na\nc', 'za'), 'c\nb\na');
}
console.log('text-line-sorter       : PASS (3 assertions)');

/* --- whitespace-remover --- */
const wr = require('../static/js/whitespace-remover.js');
{
  assert.strictEqual(wr.removeAllWhitespace('  a   b  '), 'ab');
  assert.strictEqual(wr.collapseWhitespace('  a   b  '), 'a b');
  assert.strictEqual(wr.trimEachLine('  a  \n  b  '), 'a\nb');
}
console.log('whitespace-remover     : PASS (3 assertions)');

/* --- lorem-ipsum-generator --- */
const lig = require('../static/js/lorem-ipsum-generator.js');
{
  const one = lig.generateLorem(1, 40);
  assert.strictEqual(one.split(/\s+/).filter(Boolean).length, 40);
  const two = lig.generateLorem(2, 20);
  assert.strictEqual(two.split(/\s+/).filter(Boolean).length, 40);
  assert.ok(lig.WORDS.length >= 30);
}
console.log('lorem-ipsum-generator  : PASS (3 assertions)');

/* --- svg-previewer --- */
const svgp = require('../static/js/svg-previewer.js');
{
  assert.strictEqual(svgp.looksLikeSvg('<svg><circle r="5"/></svg>'), true);
  assert.strictEqual(svgp.looksLikeSvg('<div>no svg</div>'), false);
  assert.strictEqual(svgp.looksLikeSvg('<svg width="10"><rect/></svg>'), true);
}
console.log('svg-previewer          : PASS (3 assertions)');

/* --- json-string-escape --- */
const jse = require('../static/js/json-string-escape.js');
{
  const esc = jse.escapeJsonString('a"b\\c');
  assert.strictEqual(esc, 'a\\"b\\\\c');
  assert.strictEqual(jse.unescapeJsonString(esc).value, 'a"b\\c');
  const nl = jse.escapeJsonString('line1\nline2');
  assert.strictEqual(nl, 'line1\\nline2');
  assert.strictEqual(jse.unescapeJsonString(nl).value, 'line1\nline2');
}
console.log('json-string-escape     : PASS (4 assertions)');

/* --- timer-stopwatch --- */
const ts = require('../static/js/timer-stopwatch.js');
{
  assert.strictEqual(ts.formatTime(3723000), '01:02:03');
  assert.strictEqual(ts.formatTime(0), '00:00:00');
  assert.strictEqual(ts.parseTimer(1, 30), 90000);
  assert.strictEqual(ts.parseTimer(0, 30), 30000);
  assert.throws(() => ts.parseTimer(-1, 0));
}
console.log('timer-stopwatch        : PASS (5 assertions)');

/* --- temperature-converter --- */
const tc = require('../static/js/temperature-converter.js');
{
  assert.strictEqual(tc.convertTemperature(0, 'C', 'F'), 32);
  assert.strictEqual(tc.convertTemperature(0, 'C', 'K'), 273.15);
  assert.strictEqual(tc.convertTemperature(-40, 'C', 'F'), -40);
  const all = tc.convertAllTemperatures(0, 'C');
  assert.strictEqual(all.C, 0);
  assert.strictEqual(all.F, 32);
  assert.strictEqual(all.K, 273.15);
}
console.log('temperature-converter  : PASS (5 assertions)');

/* --- length-converter --- */
const lenc = require('../static/js/length-converter.js');
{
  assert.strictEqual(lenc.convertLength(1, 'km', 'm'), 1000);
  assert.strictEqual(lenc.convertLength(1, 'in', 'cm'), 2.54);
  assert.strictEqual(lenc.convertLength(1000, 'm', 'km'), 1);
}
console.log('length-converter       : PASS (3 assertions)');

/* --- weight-converter --- */
const wc2 = require('../static/js/weight-converter.js');
{
  assert.strictEqual(wc2.convertWeight(1, 'kg', 'g'), 1000);
  assert.strictEqual(wc2.convertWeight(1, 'lb', 'g'), 453.59237);
  assert.strictEqual(wc2.convertWeight(1000, 'g', 'kg'), 1);
}
console.log('weight-converter       : PASS (3 assertions)');

console.log('BATCH C: all passed');
