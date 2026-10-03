/* Portala Tools — Random Password Generator (crypto.getRandomValues) */
(function () {
  'use strict';

  /* ---------- Pure functions ---------- */

  var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var LOWER = 'abcdefghijklmnopqrstuvwxyz';
  var DIGITS = '0123456789';
  var SYMBOLS = '!@#$%^&*()-_=+[]{};:,.?/';
  var AMBIGUOUS = 'Il1O0o|`\'"';

  /* Cryptographically secure integer in [0, max) using rejection sampling. */
  function secureRandomInt(max) {
    if (max <= 0) { throw new Error('Bad range.'); }
    if (typeof crypto !== 'undefined' && crypto.getRandomValues) {
      var buf = new Uint32Array(2);
      var twoPow53 = Math.pow(2, 53);
      var limit = Math.floor(twoPow53 / max) * max;
      var x;
      do {
        crypto.getRandomValues(buf);
        x = ((buf[1] & 0x1fffff) * 0x100000000 + buf[0]); /* 53-bit value */
      } while (x >= limit);
      return Math.floor(x % max);
    }
    return Math.floor(Math.random() * max);
  }

  function generatePassword(length, opts) {
    opts = opts || {};
    length = Math.max(4, Math.min(128, Math.floor(Number(length)) || 16));

    var pools = [];
    if (opts.upper !== false) { pools.push(UPPER); }
    if (opts.lower !== false) { pools.push(LOWER); }
    if (opts.digits !== false) { pools.push(DIGITS); }
    if (opts.symbols !== false) { pools.push(SYMBOLS); }
    if (pools.length === 0) { pools.push(LOWER); }

    if (opts.excludeAmbiguous) {
      pools = pools.map(function (p) {
        return p.split('').filter(function (c) {
          return AMBIGUOUS.indexOf(c) === -1;
        }).join('');
      });
    }

    var all = pools.join('');
    if (!all) { all = LOWER; }

    var chars = [];
    /* guarantee at least one character from each selected pool */
    pools.forEach(function (p) {
      if (p.length) { chars.push(p[secureRandomInt(p.length)]); }
    });
    while (chars.length < length) {
      chars.push(all[secureRandomInt(all.length)]);
    }
    /* Fisher-Yates shuffle */
    for (var i = chars.length - 1; i > 0; i--) {
      var j = secureRandomInt(i + 1);
      var t = chars[i]; chars[i] = chars[j]; chars[j] = t;
    }
    return chars.slice(0, length).join('');
  }

  function passwordStrength(pw) {
    var s = String(pw);
    var score = 0;
    if (s.length >= 8) { score++; }
    if (s.length >= 12) { score++; }
    if (s.length >= 16) { score++; }
    if (/[a-z]/.test(s) && /[A-Z]/.test(s)) { score++; }
    if (/\d/.test(s)) { score++; }
    if (/[^A-Za-z0-9]/.test(s)) { score++; }
    if (score <= 2) { return 'Weak'; }
    if (score <= 4) { return 'Fair'; }
    if (score <= 5) { return 'Good'; }
    return 'Strong';
  }

  /* ---------- DOM wiring (browser only) ---------- */

  if (typeof document !== 'undefined') {
    PortalaTools.onReady(function () {
      var len = document.getElementById('random-password-generator-length');
      var lenVal = document.getElementById('random-password-generator-length-value');
      var out = document.getElementById('random-password-generator-output');
      var status = document.getElementById('random-password-generator-status');
      if (!len || !out || !status) { return; }

      function readOpts() {
        return {
          upper: document.getElementById('random-password-generator-upper').checked,
          lower: document.getElementById('random-password-generator-lower').checked,
          digits: document.getElementById('random-password-generator-digits').checked,
          symbols: document.getElementById('random-password-generator-symbols').checked,
          excludeAmbiguous: document.getElementById('random-password-generator-ambiguous').checked
        };
      }

      function generate() {
        var length = parseInt(len.value, 10) || 16;
        length = Math.max(4, Math.min(128, length));
        if (lenVal) { lenVal.textContent = String(length); }
        var pw = generatePassword(length, readOpts());
        out.textContent = pw;
        PortalaTools.setStatus('random-password-generator-status',
          'Generated ' + pw.length + '-character password — strength: ' + passwordStrength(pw) + '.', false);
      }

      function copy() {
        if (!out.textContent) {
          PortalaTools.setStatus('random-password-generator-status', 'Nothing to copy yet — generate a password first.', true);
          return;
        }
        PortalaTools.copyText(out.textContent, function () {
          PortalaTools.setStatus('random-password-generator-status', 'Copied!', false);
        }, function () {
          PortalaTools.setStatus('random-password-generator-status', 'Copy failed — select the text and copy manually.', true);
        });
      }

      function clearAll() {
        out.textContent = '';
        PortalaTools.setStatus('random-password-generator-status', '', false);
      }

      if (len) {
        len.addEventListener('input', function () {
          if (lenVal) { lenVal.textContent = String(len.value); }
        });
      }
      var btn = function (id, fn) {
        var el = document.getElementById(id);
        if (el) { el.addEventListener('click', fn); }
      };
      btn('random-password-generator-btn-generate', generate);
      btn('random-password-generator-btn-copy', copy);
      btn('random-password-generator-btn-clear', clearAll);
    });
  }

  /* ---------- Node test exports ---------- */

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
      generatePassword: generatePassword,
      passwordStrength: passwordStrength,
      secureRandomInt: secureRandomInt
    };
  }
})();
