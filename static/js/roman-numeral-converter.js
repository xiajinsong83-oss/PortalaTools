/* Portala Tools — Roman Numeral Converter (1–3999) */
(function () {
  'use strict';

  /* ---------- Pure functions ---------- */

  var ROMAN = [
    [1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'],
    [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'],
    [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']
  ];
  var MAP = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

  function toRoman(num) {
    num = Math.floor(Number(num));
    if (isNaN(num) || num < 1 || num > 3999) {
      throw new Error('Number must be between 1 and 3999.');
    }
    var s = '';
    for (var i = 0; i < ROMAN.length; i++) {
      while (num >= ROMAN[i][0]) {
        s += ROMAN[i][1];
        num -= ROMAN[i][0];
      }
    }
    return s;
  }

  function fromRoman(str) {
    str = String(str == null ? '' : str).trim().toUpperCase();
    if (str === '') { throw new Error('Enter a Roman numeral.'); }
    var total = 0, prev = 0;
    for (var i = str.length - 1; i >= 0; i--) {
      var val = MAP[str[i]];
      if (!val) { throw new Error('Invalid Roman numeral character: "' + str[i] + '".'); }
      if (val < prev) { total -= val; } else { total += val; }
      prev = val;
    }
    if (total < 1 || total > 3999) { throw new Error('Invalid Roman numeral.'); }
    if (toRoman(total) !== str) { throw new Error('Malformed Roman numeral (not in standard form).'); }
    return total;
  }

  /* ---------- DOM wiring (browser only) ---------- */

  if (typeof document !== 'undefined') {
    PortalaTools.onReady(function () {
      var numEl = document.getElementById('roman-numeral-converter-number');
      var romanEl = document.getElementById('roman-numeral-converter-roman');
      var out = document.getElementById('roman-numeral-converter-output');
      var status = document.getElementById('roman-numeral-converter-status');
      if (!numEl || !romanEl || !out || !status) { return; }

      function toRomanAction() {
        try {
          var r = toRoman(numEl.value);
          romanEl.value = r;
          out.textContent = numEl.value + ' → ' + r;
          PortalaTools.setStatus('roman-numeral-converter-status', 'Converted number to Roman numeral.', false);
        } catch (e) {
          out.textContent = '';
          PortalaTools.setStatus('roman-numeral-converter-status', e.message, true);
        }
      }

      function fromRomanAction() {
        try {
          var n = fromRoman(romanEl.value);
          numEl.value = String(n);
          out.textContent = romanEl.value.toUpperCase() + ' → ' + n;
          PortalaTools.setStatus('roman-numeral-converter-status', 'Converted Roman numeral to number.', false);
        } catch (e) {
          out.textContent = '';
          PortalaTools.setStatus('roman-numeral-converter-status', e.message, true);
        }
      }

      function example() {
        numEl.value = '1999';
        romanEl.value = '';
        out.textContent = '';
        PortalaTools.setStatus('roman-numeral-converter-status', 'Sample loaded. Press To Roman Numeral.', false);
      }

      function clearAll() {
        numEl.value = '';
        romanEl.value = '';
        out.textContent = '';
        PortalaTools.setStatus('roman-numeral-converter-status', '', false);
      }

      var btn = function (id, fn) {
        var el = document.getElementById(id);
        if (el) { el.addEventListener('click', fn); }
      };
      btn('roman-numeral-converter-btn-to', toRomanAction);
      btn('roman-numeral-converter-btn-from', fromRomanAction);
      btn('roman-numeral-converter-btn-example', example);
      btn('roman-numeral-converter-btn-clear', clearAll);
    });
  }

  /* ---------- Node test exports ---------- */

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
      toRoman: toRoman,
      fromRoman: fromRoman
    };
  }
})();
