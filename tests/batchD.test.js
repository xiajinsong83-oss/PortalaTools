/* Batch D smoke tests: 13 tools */
'use strict';
const assert = require('assert');

/* --- uuid-generator --- */
const uuid = require('../static/js/uuid-generator.js');
{
  const u = uuid.generateUUID();
  assert.strictEqual(uuid.isValidUUID(u), true, 'generated UUID should be valid v4');
  const list = uuid.generateUUIDs(5);
  assert.strictEqual(list.length, 5);
  assert.strictEqual(list.every(uuid.isValidUUID), true);
  assert.strictEqual(uuid.isValidUUID('not-a-uuid'), false);
  console.log('uuid-generator            : PASS (4 assertions)');
}

/* --- text-diff --- */
const diff = require('../static/js/text-diff.js');
{
  const segs = diff.diffLines(['a', 'b', 'c'], ['a', 'x', 'c']);
  const counts = { equal: 0, removed: 0, added: 0 };
  segs.forEach(s => counts[s.type]++);
  assert.strictEqual(counts.equal, 2);
  assert.strictEqual(counts.removed, 1);
  assert.strictEqual(counts.added, 1);
  assert.strictEqual(segs.length, 4);
  console.log('text-diff                  : PASS (4 assertions)');
}

/* --- discount-calculator --- */
const disc = require('../static/js/discount-calculator.js');
{
  const r = disc.calculateDiscount(100, 25);
  assert.strictEqual(r.discountAmount, 25);
  assert.strictEqual(r.finalPrice, 75);
  assert.strictEqual(r.saved, 25);
  console.log('discount-calculator       : PASS (3 assertions)');
}

/* --- tip-calculator --- */
const tip = require('../static/js/tip-calculator.js');
{
  const r = tip.calculateTip(100, 15, 2);
  assert.strictEqual(r.tipAmount, 15);
  assert.strictEqual(r.total, 115);
  assert.strictEqual(r.perPerson, 57.5);
  console.log('tip-calculator             : PASS (3 assertions)');
}

/* --- loan-calculator --- */
const loan = require('../static/js/loan-calculator.js');
{
  const r = loan.calculateLoan(10000, 5, 5);
  assert.ok(Math.abs(r.monthlyPayment - 188.71) < 0.01, 'monthly ~188.71, got ' + r.monthlyPayment);
  assert.ok(r.totalInterest > 0);
  assert.strictEqual(r.months, 60);
  console.log('loan-calculator            : PASS (3 assertions)');
}

/* --- date-difference-calculator --- */
const ddc = require('../static/js/date-difference-calculator.js');
{
  const r = ddc.dateDifference('2024-01-01', '2024-12-31');
  assert.strictEqual(r.totalDays, 365);
  assert.ok(r.totalWeeks > 52);
  console.log('date-difference-calculator : PASS (2 assertions)');
}

/* --- data-size-converter --- */
const dsc = require('../static/js/data-size-converter.js');
{
  assert.strictEqual(dsc.convertDataSize(1, 'GB', 'KB'), 1048576);
  assert.strictEqual(dsc.convertDataSize(1024, 'B', 'KB'), 1);
  assert.strictEqual(dsc.convertDataSize(1, 'MB', 'B'), 1048576);
  console.log('data-size-converter        : PASS (3 assertions)');
}

/* --- speed-converter --- */
const spd = require('../static/js/speed-converter.js');
{
  assert.ok(Math.abs(spd.convertSpeed(1, 'm/s', 'km/h') - 3.6) < 1e-9);
  assert.ok(Math.abs(spd.convertSpeed(60, 'mph', 'km/h') - 96.56064) < 1e-9);
  console.log('speed-converter            : PASS (2 assertions)');
}

/* --- csv-to-json --- */
const c2j = require('../static/js/csv-to-json.js');
{
  const data = c2j.csvToJson('name,age\nAlice,30\nBob,25', true);
  assert.deepStrictEqual(data, [{ name: 'Alice', age: '30' }, { name: 'Bob', age: '25' }]);
  const quoted = c2j.parseCsv('a,b\n"x,y",z');
  assert.deepStrictEqual(quoted, [['a', 'b'], ['x,y', 'z']]);
  console.log('csv-to-json                : PASS (2 assertions)');
}

/* --- json-to-csv --- */
const j2c = require('../static/js/json-to-csv.js');
{
  const csv = j2c.jsonToCsv([{ name: 'Alice', age: 30 }, { name: 'Bob', age: 25 }]);
  assert.strictEqual(csv, 'name,age\nAlice,30\nBob,25');
  assert.strictEqual(j2c.escapeCsv('a,b'), '"a,b"');
  console.log('json-to-csv                : PASS (2 assertions)');
}

/* --- slug-generator --- */
const slug = require('../static/js/slug-generator.js');
{
  assert.strictEqual(slug.generateSlug('Hello, World! 你好'), 'hello-world');
  assert.strictEqual(slug.generateSlug('Café & Bar'), 'cafe-bar');
  console.log('slug-generator             : PASS (2 assertions)');
}

/* --- color-contrast-checker --- */
const ccc = require('../static/js/color-contrast-checker.js');
{
  const ratio = ccc.contrastRatio('#000000', '#ffffff');
  assert.ok(Math.abs(ratio - 21) < 0.01, 'expected ~21, got ' + ratio);
  const gray = ccc.contrastRatio('#777777', '#ffffff');
  assert.ok(gray < 4.5, '#777 on white should fail AA normal, got ' + gray);
  assert.strictEqual(ccc.getVerdicts(21).normalAA, true);
  console.log('color-contrast-checker     : PASS (3 assertions)');
}

/* --- morse-code-translator --- */
const morse = require('../static/js/morse-code-translator.js');
{
  assert.strictEqual(morse.textToMorse('SOS'), '... --- ...');
  assert.strictEqual(morse.morseToText('... --- ...'), 'SOS');
  console.log('morse-code-translator      : PASS (2 assertions)');
}

console.log('BATCH D: all passed');
