/* Portala Tools — Binary / Octal / Decimal / Hex Converter (BigInt) */
(function () {
  'use strict';

  /* ---------- Pure functions ---------- */

  var VALID = {
    2: /^-?[01]+$/,
    8: /^-?[0-7]+$/,
    10: /^-?[0-9]+$/,
    16: /^-?[0-9a-fA-F]+$/
  };

  /* Parse a numeric string in the given base into a BigInt (supports negatives). */
  function parseBigInt(value, base) {
    var neg = value.charAt(0) === '-';
    var digits = neg ? value.slice(1) : value;
    var bi = 0n;
    var b = BigInt(base);
    for (var i = 0; i < digits.length; i++) {
      var d = parseInt(digits[i], base);
      if (isNaN(d)) { throw new Error('Invalid digit: ' + digits[i]); }
      bi = bi * b + BigInt(d);
    }
    return neg ? -bi : bi;
  }

  function convertBases(value, fromBase) {
    value = String(value == null ? '' : value).trim().replace(/\s+/g, '');
    if (value === '' || value === '-') {
      throw new Error('Please enter a value to convert.');
    }
    fromBase = parseInt(fromBase, 10);
    if (!VALID[fromBase]) {
      throw new Error('Unsupported base.');
    }
    if (!VALID[fromBase].test(value)) {
      throw new Error('"' + value + '" is not a valid base-' + fromBase + ' number.');
    }
    var bi = parseBigInt(value, fromBase);
    return {
      decimal: bi.toString(10),
      hex: bi.toString(16).toUpperCase(),
      octal: bi.toString(8),
      binary: bi.toString(2)
    };
  }

  /* Group a binary string in 4-digit chunks from the right. */
  function groupBinary(bin) {
    var neg = bin.charAt(0) === '-' ? '-' : '';
    var digits = neg ? bin.slice(1) : bin;
    var padded = digits;
    while (padded.length % 4 !== 0) { padded = '0' + padded; }
    return neg + padded.replace(/(.{4})/g, '$1 ').trim();
  }

  /* ---------- DOM wiring (browser only) ---------- */

  if (typeof document !== 'undefined') {
    PortalaTools.onReady(function () {
      var input = document.getElementById('binary-converter-input');
      var baseEl = document.getElementById('binary-converter-base');
      var out = document.getElementById('binary-converter-output');
      var status = document.getElementById('binary-converter-status');
      if (!input || !baseEl || !out || !status) { return; }

      function convert() {
        try {
          var r = convertBases(input.value, baseEl.value);
          out.textContent =
            'Binary:    ' + groupBinary(r.binary) + '\n' +
            'Octal:     ' + r.octal + '\n' +
            'Decimal:   ' + r.decimal + '\n' +
            'Hex:       ' + r.hex;
          PortalaTools.setStatus('binary-converter-status', 'Converted successfully.', false);
        } catch (e) {
          out.textContent = '';
          PortalaTools.setStatus('binary-converter-status', e.message, true);
        }
      }

      function example() {
        input.value = '255';
        baseEl.value = '10';
        out.textContent = '';
        PortalaTools.setStatus('binary-converter-status', 'Sample loaded. Press Convert.', false);
      }

      function clearAll() {
        input.value = '';
        out.textContent = '';
        PortalaTools.setStatus('binary-converter-status', '', false);
      }

      var btn = function (id, fn) {
        var el = document.getElementById(id);
        if (el) { el.addEventListener('click', fn); }
      };
      btn('binary-converter-btn-convert', convert);
      btn('binary-converter-btn-example', example);
      btn('binary-converter-btn-clear', clearAll);
    });
  }

  /* ---------- Node test exports ---------- */

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
      convertBases: convertBases,
      groupBinary: groupBinary
    };
  }
})();
