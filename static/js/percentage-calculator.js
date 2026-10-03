/* Portala Tools — Percentage Calculator (three modes) */
(function () {
  'use strict';

  /* ---------- Pure functions ---------- */

  /* What is X% of Y? */
  function whatIsPercentOf(x, y) {
    x = Number(x); y = Number(y);
    if (isNaN(x) || isNaN(y)) { throw new Error('Enter two numbers.'); }
    return Math.round((x / 100) * y * 100) / 100;
  }

  /* X is what percent of Y? */
  function whatPercentOf(x, y) {
    x = Number(x); y = Number(y);
    if (isNaN(x) || isNaN(y)) { throw new Error('Enter two numbers.'); }
    if (y === 0) { throw new Error('Y cannot be zero.'); }
    return Math.round((x / y) * 100 * 100) / 100;
  }

  /* Percentage change from X to Y. */
  function percentChange(x, y) {
    x = Number(x); y = Number(y);
    if (isNaN(x) || isNaN(y)) { throw new Error('Enter two numbers.'); }
    if (x === 0) { throw new Error('Starting value cannot be zero.'); }
    return Math.round(((y - x) / x) * 100 * 100) / 100;
  }

  /* ---------- DOM wiring (browser only) ---------- */

  if (typeof document !== 'undefined') {
    PortalaTools.onReady(function () {
      var mode = document.getElementById('percentage-calculator-mode');
      var out = document.getElementById('percentage-calculator-output');
      var status = document.getElementById('percentage-calculator-status');
      if (!mode || !out || !status) { return; }

      function val(id) { var el = document.getElementById(id); return el ? el.value : ''; }

      function compute() {
        try {
          var r;
          if (mode.value === 'of') {
            r = whatIsPercentOf(val('percentage-calculator-x'), val('percentage-calculator-y'));
            out.textContent = val('percentage-calculator-x') + '% of ' + val('percentage-calculator-y') + ' = ' + r;
          } else if (mode.value === 'is') {
            r = whatPercentOf(val('percentage-calculator-x'), val('percentage-calculator-y'));
            out.textContent = val('percentage-calculator-x') + ' is ' + r + '% of ' + val('percentage-calculator-y');
          } else {
            r = percentChange(val('percentage-calculator-x'), val('percentage-calculator-y'));
            var dir = r >= 0 ? 'increase' : 'decrease';
            out.textContent = 'Change from ' + val('percentage-calculator-x') + ' to ' + val('percentage-calculator-y') +
              ' = ' + Math.abs(r) + '% ' + dir;
          }
          PortalaTools.setStatus('percentage-calculator-status', 'Calculated.', false);
        } catch (e) {
          out.textContent = '';
          PortalaTools.setStatus('percentage-calculator-status', e.message, true);
        }
      }

      function clearAll() {
        out.textContent = '';
        PortalaTools.setStatus('percentage-calculator-status', '', false);
      }

      var btn = function (id, fn) {
        var el = document.getElementById(id);
        if (el) { el.addEventListener('click', fn); }
      };
      btn('percentage-calculator-btn-calculate', compute);
      btn('percentage-calculator-btn-clear', clearAll);
    });
  }

  /* ---------- Node test exports ---------- */

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
      whatIsPercentOf: whatIsPercentOf,
      whatPercentOf: whatPercentOf,
      percentChange: percentChange
    };
  }
})();
