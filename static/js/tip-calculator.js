/* Portala Tools — Tip Calculator */
(function () {
  'use strict';

  /* ---------- Pure functions ---------- */

  function calculateTip(bill, tipPct, split) {
    var b = Number(bill);
    var t = Number(tipPct);
    var s = parseInt(split, 10);
    if (isNaN(b) || isNaN(t)) { throw new Error('Enter a valid bill amount and tip percentage.'); }
    if (isNaN(s) || s < 1) { s = 1; }
    var tipAmount = b * t / 100;
    var total = b + tipAmount;
    var perPerson = total / s;
    return {
      tipAmount: tipAmount,
      total: total,
      perPerson: perPerson,
      split: s
    };
  }

  /* ---------- DOM wiring (browser only) ---------- */

  if (typeof document !== 'undefined') {
    PortalaTools.onReady(function () {
      var bill = document.getElementById('tip-calculator-bill');
      var tip = document.getElementById('tip-calculator-tip');
      var split = document.getElementById('tip-calculator-split');
      var output = document.getElementById('tip-calculator-output');
      var status = document.getElementById('tip-calculator-status');
      if (!bill || !tip || !split || !output || !status) { return; }

      function money(n) { return n.toFixed(2); }

      function calc() {
        try {
          var r = calculateTip(bill.value, tip.value, split.value);
          output.textContent =
            'Tip amount: $' + money(r.tipAmount) + '\n' +
            'Total: $' + money(r.total) + '\n' +
            'Per person (' + r.split + '): $' + money(r.perPerson);
          PortalaTools.setStatus('tip-calculator-status', 'Calculated.', false);
        } catch (e) {
          output.textContent = '';
          PortalaTools.setStatus('tip-calculator-status', e.message, true);
        }
      }

      var preset = function (pct) {
        tip.value = pct;
        calc();
      };

      var btn = function (id, fn) {
        var el = document.getElementById(id);
        if (el) { el.addEventListener('click', fn); }
      };
      btn('tip-calculator-btn-10', function () { preset(10); });
      btn('tip-calculator-btn-15', function () { preset(15); });
      btn('tip-calculator-btn-18', function () { preset(18); });
      btn('tip-calculator-btn-20', function () { preset(20); });
      btn('tip-calculator-btn-calc', calc);
      bill.addEventListener('input', calc);
      tip.addEventListener('input', calc);
      split.addEventListener('input', calc);
    });
  }

  /* ---------- Node test exports ---------- */

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { calculateTip: calculateTip };
  }
})();
