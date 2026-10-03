/* Batch B smoke tests: 12 tools */
'use strict';
const assert = require('assert');

const rpg = require('../static/js/random-password-generator.js');
const rng = require('../static/js/random-number-generator.js');
const bin = require('../static/js/binary-converter.js');
const xml = require('../static/js/xml-formatter.js');
const csv = require('../static/js/csv-viewer.js');
const cc = require('../static/js/case-converter.js');
const pct = require('../static/js/percentage-calculator.js');
const age = require('../static/js/age-calculator.js');
const bmi = require('../static/js/bmi-calculator.js');
const cron = require('../static/js/cron-parser.js');
const ent = require('../static/js/html-entity-encoder.js');
const roman = require('../static/js/roman-numeral-converter.js');

/* --- random-password-generator --- */
(function () {
  const pw = rpg.generatePassword(16, { upper: true, lower: true, digits: true, symbols: true });
  assert.strictEqual(pw.length, 16);
  assert.match(pw, /[A-Z]/);
  assert.match(pw, /[a-z]/);
  assert.match(pw, /\d/);
  assert.match(pw, /[^A-Za-z0-9]/);
  const weak = rpg.generatePassword(4, { upper: false, lower: true, digits: false, symbols: false });
  assert.match(weak, /^[a-z]{4}$/);
  assert.strictEqual(rpg.passwordStrength('A1!bB2@ccXXyy99zzQQ'), 'Strong');
  assert.strictEqual(rpg.passwordStrength('abc'), 'Weak');
  console.log('random-password-generator : PASS (6 assertions)');
})();

/* --- random-number-generator --- */
(function () {
  const nums = rng.generateRandomNumbers(5, 10, 20);
  assert.strictEqual(nums.length, 20);
  nums.forEach((n) => { assert.ok(n >= 5 && n <= 10, 'out of range: ' + n); });
  const neg = rng.generateRandomNumbers(-10, -1, 15);
  assert.strictEqual(neg.length, 15);
  neg.forEach((n) => { assert.ok(n >= -10 && n <= -1, 'out of range: ' + n); });
  assert.throws(() => rng.generateRandomNumbers('abc', 10, 5));
  console.log('random-number-generator : PASS (4 assertions)');
})();

/* --- binary-converter --- */
(function () {
  const r = bin.convertBases('255', '10');
  assert.strictEqual(r.hex, 'FF');
  assert.strictEqual(r.binary, '11111111');
  assert.strictEqual(r.octal, '377');
  assert.strictEqual(r.decimal, '255');
  assert.strictEqual(bin.groupBinary('11111111'), '1111 1111');
  assert.strictEqual(bin.convertBases('FF', '16').decimal, '255');
  console.log('binary-converter : PASS (6 assertions)');
})();

/* --- xml-formatter --- */
(function () {
  assert.strictEqual(xml.validateXml('<a><b>1</b></a>').valid, true);
  assert.strictEqual(xml.validateXml('<a><b></a>').valid, false);
  const formatted = xml.formatXml('<?xml version="1.0"?><a><b>1</b></a>');
  assert.ok(formatted.indexOf('\n  <b>\n    1\n') >= 0);
  assert.strictEqual(formatted.split('\n').length >= 5, true);
  assert.strictEqual(xml.validateXml('<!-- c --><![CDATA[raw]]><root/>').valid, true);
  assert.throws(() => xml.formatXml('<a><b></a>'));
  console.log('xml-formatter : PASS (5 assertions)');
})();

/* --- csv-viewer --- */
(function () {
  assert.deepStrictEqual(csv.parseCsv('a,b\n1,2'), [['a', 'b'], ['1', '2']]);
  assert.deepStrictEqual(csv.parseCsv('a,"x,y"\n1,2'), [['a', 'x,y'], ['1', '2']]);
  assert.deepStrictEqual(csv.parseCsv('"line1\nline2",b'), [['line1\nline2', 'b']]);
  assert.deepStrictEqual(csv.parseCsv('a,b\n'), [['a', 'b']]);
  console.log('csv-viewer : PASS (4 assertions)');
})();

/* --- case-converter --- */
(function () {
  assert.strictEqual(cc.toPascalCase('hello world'), 'HelloWorld');
  assert.strictEqual(cc.toSnakeCase('hello world'), 'hello_world');
  assert.strictEqual(cc.toCamelCase('hello world from here'), 'helloWorldFromHere');
  assert.strictEqual(cc.toKebabCase('Hello World'), 'hello-world');
  assert.strictEqual(cc.toTitleCase('hello world'), 'Hello World');
  console.log('case-converter : PASS (5 assertions)');
})();

/* --- percentage-calculator --- */
(function () {
  assert.strictEqual(pct.whatIsPercentOf(20, 150), 30);
  assert.strictEqual(pct.whatPercentOf(30, 120), 25);
  assert.strictEqual(pct.percentChange(80, 100), 25);
  assert.strictEqual(pct.percentChange(100, 80), -20);
  console.log('percentage-calculator : PASS (4 assertions)');
})();

/* --- age-calculator --- */
(function () {
  const r = age.ageOn('2000-01-15', '2026-10-02');
  assert.strictEqual(r.years, 26);
  assert.strictEqual(r.months, 8);
  assert.strictEqual(r.days, 17);
  assert.ok(r.totalDays > 9000 && r.totalWeeks > 1300);
  assert.strictEqual(age.ageOn('2020-06-15', '2020-07-16').days, 1);
  console.log('age-calculator : PASS (5 assertions)');
})();

/* --- bmi-calculator --- */
(function () {
  const r = bmi.calcBmiMetric(170, 70);
  assert.strictEqual(r.bmi, 24.22);
  assert.strictEqual(r.category, 'Normal weight');
  assert.strictEqual(bmi.calcBmiMetric(170, 50).category, 'Underweight');
  const imp = bmi.imperialToMetric(5, 7, 154);
  assert.ok(Math.abs(imp.cm - 170.2) < 1 && Math.abs(imp.kg - 69.85) < 1);
  console.log('bmi-calculator : PASS (4 assertions)');
})();

/* --- cron-parser --- */
(function () {
  assert.strictEqual(cron.describeField('*/5', 'minutes'), 'every 5 minutes');
  const runs = cron.nextRuns('0 12 * * *', 3, new Date('2026-10-02T09:00:00'));
  assert.strictEqual(runs.length, 3);
  runs.forEach((r) => { assert.strictEqual(r.getHours(), 12); assert.strictEqual(r.getMinutes(), 0); });
  assert.deepStrictEqual(cron.parseCron('*/15 * * * *').minute, [0, 15, 30, 45]);
  assert.deepStrictEqual(cron.parseCron('0 12 * * 0,6').dow.sort(), [0, 6]);
  console.log('cron-parser : PASS (5 assertions)');
})();

/* --- html-entity-encoder --- */
(function () {
  assert.strictEqual(ent.encodeHtmlEntities('Tom & Jerry'), 'Tom &amp; Jerry');
  assert.strictEqual(ent.encodeHtmlEntities('<b>"it\'s"</b>'), '&lt;b&gt;&quot;it&#39;s&quot;&lt;/b&gt;');
  const round = ent.encodeHtmlEntities('A & B < > " \' ~');
  assert.strictEqual(ent.decodeHtmlEntities(round), 'A & B < > " \' ~');
  assert.strictEqual(ent.decodeHtmlEntities('&#123;'), '{');
  console.log('html-entity-encoder : PASS (4 assertions)');
})();

/* --- roman-numeral-converter --- */
(function () {
  assert.strictEqual(roman.toRoman(1999), 'MCMXCIX');
  assert.strictEqual(roman.fromRoman('MCMXCIX'), 1999);
  assert.strictEqual(roman.toRoman(2026), 'MMXXVI');
  assert.throws(() => roman.toRoman(0));
  assert.throws(() => roman.toRoman(-5));
  assert.throws(() => roman.fromRoman('ABC'));
  console.log('roman-numeral-converter : PASS (6 assertions)');
})();

console.log('BATCH B TESTS: all passed');
