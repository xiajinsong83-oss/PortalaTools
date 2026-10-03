/* Portala Tools — Discount Calculator */
(function () {
  'use strict';

  /* ---------- Pure functions ---------- */

  function calculateDiscount(price, discountPct) {
    var p = Number(price);
    var d = Number(discountPct);
    if (isNaN(p) || isNaN(d)) { throw new Error('Enter a valid price and discount percentage.'); }
    if (d < 0 || d > 100) { throw new Error('Discount must be between 0 and 100.'); }
    var discountAmount = p * d / 100;
    var finalPrice = p - discountAmount;
    return {
      discountAmount: discountAmount,
      finalPrice: finalPrice,
      saved: discountAmount
    };
  }

  /* ---------- DOM wiring (browser only) ---------- */

  if (typeof document !== 'undefined') {
    PortalaTools.onReady(function () {
      var price = document.getElementById('discount-calculator-input');
      var pct = document.getElementById('discount-calculator-pct');
      var output = document.getElementById('discount-calculator-output');
      var status = document.getElementById('discount-calculator-status');
      if (!price || !pct || !output || !status) { return; }

      function money(n) { return '$' + n.toFixed(2); }

      function calc() {
        try {
          var r = calculateDiscount(price.value, pct.value);
          output.textContent =
            'Discount: ' + money(r.discountAmount) + '\n' +
            'Final price: ' + money(r.finalPrice) + '\n' +
            'You save: ' + money(r.saved);
          PortalaTools.setStatus('discount-calculator-status', 'Calculated.', false);
        } catch (e) {
          output.textContent = '';
          PortalaTools.setStatus('discount-calculator-status', e.message, true);
        }
      }

      var btn = function (id, fn) {
        var el = document.getElementById(id);
        if (el) { el.addEventListener('click', fn); }
      };
      btn('discount-calculator-btn-calc', calc);
      price.addEventListener('input', calc);
      pct.addEventListener('input', calc);
    });
  }

  /* ---------- Node test exports ---------- */

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { calculateDiscount: calculateDiscount };
  }
})();
