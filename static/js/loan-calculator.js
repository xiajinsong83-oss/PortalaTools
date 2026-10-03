/* Portala Tools — Loan / Mortgage Calculator (PMT) */
(function () {
  'use strict';

  /* ---------- Pure functions ---------- */

  function calculateLoan(amount, annualPct, years) {
    var P = Number(amount);
    var annual = Number(annualPct);
    var n = Math.round(Number(years) * 12);
    if (isNaN(P) || isNaN(annual) || isNaN(n) || n <= 0) {
      throw new Error('Enter a valid loan amount, interest rate and term.');
    }
    var r = annual / 100 / 12;
    var monthly;
    if (r === 0) {
      monthly = P / n;
    } else {
      monthly = P * r / (1 - Math.pow(1 + r, -n));
    }
    var totalPaid = monthly * n;
    var totalInterest = totalPaid - P;
    return {
      monthlyPayment: monthly,
      totalInterest: totalInterest,
      totalPaid: totalPaid,
      months: n
    };
  }

  /* ---------- DOM wiring (browser only) ---------- */

  if (typeof document !== 'undefined') {
    PortalaTools.onReady(function () {
      var amount = document.getElementById('loan-calculator-amount');
      var rate = document.getElementById('loan-calculator-rate');
      var years = document.getElementById('loan-calculator-years');
      var output = document.getElementById('loan-calculator-output');
      var status = document.getElementById('loan-calculator-status');
      if (!amount || !rate || !years || !output || !status) { return; }

      function money(n) { return '$' + n.toFixed(2); }

      function calc() {
        try {
          var r = calculateLoan(amount.value, rate.value, years.value);
          output.textContent =
            'Monthly payment: ' + money(r.monthlyPayment) + '\n' +
            'Total interest: ' + money(r.totalInterest) + '\n' +
            'Total paid: ' + money(r.totalPaid) + '\n' +
            'Term: ' + r.months + ' months';
          PortalaTools.setStatus('loan-calculator-status', 'Calculated.', false);
        } catch (e) {
          output.textContent = '';
          PortalaTools.setStatus('loan-calculator-status', e.message, true);
        }
      }

      var btn = function (id, fn) {
        var el = document.getElementById(id);
        if (el) { el.addEventListener('click', fn); }
      };
      btn('loan-calculator-btn-calc', calc);
      amount.addEventListener('input', calc);
      rate.addEventListener('input', calc);
      years.addEventListener('input', calc);
    });
  }

  /* ---------- Node test exports ---------- */

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { calculateLoan: calculateLoan };
  }
})();
