/* Batch A smoke tests: 11 tools */
'use strict';
const assert = require('assert');

(async function run() {

  /* --- json-minifier --- */
  const jmin = require('../static/js/json-minifier.js');
  assert.strictEqual(jmin.minifyJson('{ "a" : 1 , "b" : [1,2] }'), '{"a":1,"b":[1,2]}');
  assert.strictEqual(jmin.minifyJson('{\n  "x": true\n}'), '{"x":true}');
  assert.throws(() => jmin.minifyJson('{oops'));
  console.log('json-minifier        : PASS (3 assertions)');

  /* --- url-encoder --- */
  const ue = require('../static/js/url-encoder.js');
  assert.strictEqual(ue.encodeUrl('hello world'), 'hello%20world');
  assert.strictEqual(ue.encodeUrl('a&b=c'), 'a%26b%3Dc');
  assert.strictEqual(ue.decodeUrl('hello%20world'), 'hello world');
  assert.strictEqual(ue.decodeUrl(ue.encodeUrl('你好 & 100%')), '你好 & 100%');
  assert.throws(() => ue.decodeUrl('%')); /* malformed percent sequence */
  console.log('url-encoder          : PASS (5 assertions)');

  /* --- timestamp-converter --- */
  const tc = require('../static/js/timestamp-converter.js');
  assert.strictEqual(tc.unixToUtcIso(0), '1970-01-01T00:00:00Z');
  assert.strictEqual(tc.unixToUtcIso(1700000000), '2023-11-14T22:13:20Z');
  assert.strictEqual(tc.parseTimestampInput('1700000000', false), 1700000000);
  assert.strictEqual(tc.parseTimestampInput('1700000000000', true), 1700000000);
  assert.ok(Number.isFinite(tc.localInputToUnix('2023-11-14T22:13:20')));
  console.log('timestamp-converter  : PASS (5 assertions)');

  /* --- md5-hash-generator --- */
  const md5g = require('../static/js/md5-hash-generator.js');
  assert.strictEqual(md5g.generateMd5('abc'), '900150983cd24fb0d6963f7d28e17f72');
  assert.strictEqual(md5g.generateMd5(''), 'd41d8cd98f00b204e9800998ecf8427e');
  console.log('md5-hash-generator   : PASS (2 assertions)');

  /* --- sha256-hash-generator --- */
  const s256 = require('../static/js/sha256-hash-generator.js');
  assert.strictEqual(
    await s256.sha256Hex('abc'),
    'ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad');
  assert.strictEqual(
    await s256.sha256Hex(''),
    'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855');
  console.log('sha256-hash-generator: PASS (2 assertions)');

  /* --- sha512-hash-generator --- */
  const s512 = require('../static/js/sha512-hash-generator.js');
  assert.strictEqual(
    await s512.sha512Hex('abc'),
    'ddaf35a193617abacc417349ae20413112e6fa4e89a97ea20a9eeee64b55d39a2192992a274fc1a836ba3c23a3feebbd454d4423643ce80e2a9ac94fa54ca49f');
  assert.strictEqual((await s512.sha512Hex('abc')).length, 128);
  console.log('sha512-hash-generator: PASS (2 assertions)');

  /* --- regex-tester --- */
  const rt = require('../static/js/regex-tester.js');
  let r1 = rt.testPattern('\\d+', 'g', 'abc123def456');
  assert.strictEqual(r1.count, 2);
  assert.strictEqual(r1.matches[0].match, '123');
  assert.strictEqual(r1.matches[0].index, 3);
  assert.strictEqual(r1.matches[1].index, 9);
  let r2 = rt.testPattern('\\d+', '', 'abc123def456');
  assert.strictEqual(r2.count, 1); /* no g flag -> first match only */
  assert.throws(() => rt.testPattern('(', 'g', 'x')); /* invalid pattern */
  assert.strictEqual(rt.collectFlags(true, true, false, false, false), 'gi');
  console.log('regex-tester         : PASS (7 assertions)');

  /* --- qr-code-generator --- */
  const qr = require('../static/js/qr-code-generator.js');
  assert.strictEqual(qr.qrModuleCount('hello', 'M'), 21);
  let m = qr.qrMatrix('hello', 'M');
  assert.strictEqual(m.length, 21);
  assert.strictEqual(m[0].length, 21);
  console.log('qr-code-generator    : PASS (3 assertions)');

  /* --- hex-to-rgb-converter --- */
  const cvr = require('../static/js/hex-to-rgb-converter.js');
  let rgb = cvr.hexToRgb('#ff8000');
  assert.deepStrictEqual(rgb, { r: 255, g: 128, b: 0 });
  assert.strictEqual(cvr.rgbToCss(rgb), 'rgb(255,128,0)');
  assert.strictEqual(cvr.hexToRgb('#f80').r, 255); /* shorthand expands */
  assert.strictEqual(cvr.hexToRgb('#f80').b, 0);
  assert.strictEqual(cvr.rgbToHex(255, 128, 0), '#ff8000');
  assert.throws(() => cvr.hexToRgb('#xyz'));
  console.log('hex-to-rgb-converter : PASS (6 assertions)');

  /* --- markdown-previewer --- */
  const md = require('../static/js/markdown-previewer.js');
  assert.strictEqual(md.renderMarkdown('# Hi'), '<h1>Hi</h1>\n');
  assert.ok(md.renderMarkdown('**bold**').includes('<strong>bold</strong>'));
  console.log('markdown-previewer   : PASS (2 assertions)');

  /* --- jwt-decoder --- */
  const jwt = require('../static/js/jwt-decoder.js');
  const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
  let d = jwt.decodeJwt(TOKEN);
  assert.strictEqual(d.header.alg, 'HS256');
  assert.strictEqual(d.header.typ, 'JWT');
  assert.strictEqual(d.payload.name, 'John Doe');
  assert.strictEqual(d.iat, 1516239022);
  assert.strictEqual(d.signature, 'SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c');
  assert.throws(() => jwt.decodeJwt('not-a-jwt'));
  console.log('jwt-decoder          : PASS (6 assertions)');

  console.log('BATCH A: all passed');
})().catch(function (e) {
  console.error('BATCH A FAILED:', e);
  process.exit(1);
});
