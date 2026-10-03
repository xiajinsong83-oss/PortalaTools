/* Portala Tools — Random Number Generator (crypto.getRandomValues) */
(function () {
  'use strict';

  /* ---------- Pure functions ---------- */

  function secureRandomInt(max) {
    if (max <= 0) { throw new Error('Bad range.'); }
    if (typeof crypto !== 'undefined' && crypto.getRandomValues) {
      var buf = new Uint32Array(2);
      var twoPow53 = Math.pow(2, 53);
      var limit = Math.floor(twoPow53 / max) * max;
      var x;
      do {
        crypto.getRandomValues(buf);
        x = ((buf[1] & 0x1fffff) * 0x100000000 + buf[0]);
      } while (x >= limit);
      return Math.floor(x % max);
    }
    return Math.floor(Math.random() * max);
  }

  function generateRandomNumbers(min, max, count) {
    min = Math.floor(Number(min));
    max = Math.floor(Number(max));
    if (isNaN(min) || isNaN(max)) {
      throw new Error('Min and max must be valid integers.');
    }
    if (min > max) { var t = min; min = max; max = t; }
    count = Math.max(1, Math.min(100, Math.floor(Number(count)) || 1));
    var range = max - min + 1;
    var out = [];
    for (var i = 0; i < count; i++) {
      out.push(min + secureRandomInt(range));
    }
    return out;
  }

  /* ---------- DOM wiring (browser only) ---------- */

  if (typeof document !== 'undefined') {
    PortalaTools.onReady(function () {
      var minEl = document.getElementById('random-number-generator-min');
      var maxEl = document.getElementById('random-number-generator-max');
      var countEl = document.getElementById('random-number-generator-count');
      var out = document.getElementById('random-number-generator-output');
      var status = document.getElementById('random-number-generator-status');
      if (!minEl || !maxEl || !out || !status) { return; }

      function generate() {
        try {
          var nums = generateRandomNumbers(minEl.value, maxEl.value, countEl ? countEl.value : 1);
          out.textContent = nums.join('\n');
          PortalaTools.setStatus('random-number-generator-status',
            'Generated ' + nums.length + ' number(s) in [' + nums.reduce(function (a, b) { return Math.min(a, b); }) +
            ', ' + nums.reduce(function (a, b) { return Math.max(a, b); }) + '].', false);
        } catch (e) {
          out.textContent = '';
          PortalaTools.setStatus('random-number-generator-status', e.message, true);
        }
      }

      function copy() {
        if (!out.textContent) {
          PortalaTools.setStatus('random-number-generator-status', 'Nothing to copy yet — generate numbers first.', true);
          return;
        }
        PortalaTools.copyText(out.textContent, function () {
          PortalaTools.setStatus('random-number-generator-status', 'Copied!', false);
        }, function () {
          PortalaTools.setStatus('random-number-generator-status', 'Copy failed — select the text and copy manually.', true);
        });
      }

      function clearAll() {
        out.textContent = '';
        PortalaTools.setStatus('random-number-generator-status', '', false);
      }

      var btn = function (id, fn) {
        var el = document.getElementById(id);
        if (el) { el.addEventListener('click', fn); }
      };
      btn('random-number-generator-btn-generate', generate);
      btn('random-number-generator-btn-copy', copy);
      btn('random-number-generator-btn-clear', clearAll);
    });
  }

  /* ---------- Node test exports ---------- */

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
      generateRandomNumbers: generateRandomNumbers,
      secureRandomInt: secureRandomInt
    };
  }
})();
