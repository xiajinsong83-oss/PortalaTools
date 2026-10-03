/* Portala Tools — Date Difference Calculator */
(function () {
  'use strict';

  /* ---------- Pure functions ---------- */

  function parseDate(str) {
    var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(str).trim());
    if (!m) { throw new Error('Invalid date, use YYYY-MM-DD.'); }
    return new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]));
  }

  function dateDifference(startStr, endStr) {
    var s = parseDate(startStr);
    var e = parseDate(endStr);
    var totalDays = Math.round((e - s) / 86400000);

    /* Calendar-aware years/months/days */
    var years = e.getFullYear() - s.getFullYear();
    var months = e.getMonth() - s.getMonth();
    var days = e.getDate() - s.getDate();
    if (days < 0) {
      months--;
      var prevDay = new Date(e.getFullYear(), e.getMonth(), 0);
      days += prevDay.getDate();
    }
    if (months < 0) {
      years--;
      months += 12;
    }
    return {
      years: years,
      months: months,
      days: days,
      totalDays: Math.abs(totalDays),
      totalWeeks: Math.abs(totalDays) / 7
    };
  }

  /* ---------- DOM wiring (browser only) ---------- */

  if (typeof document !== 'undefined') {
    PortalaTools.onReady(function () {
      var start = document.getElementById('date-difference-calculator-start');
      var end = document.getElementById('date-difference-calculator-end');
      var output = document.getElementById('date-difference-calculator-output');
      var status = document.getElementById('date-difference-calculator-status');
      if (!start || !end || !output || !status) { return; }

      function calc() {
        try {
          var r = dateDifference(start.value, end.value);
          output.textContent =
            'Duration: ' + r.years + 'y ' + r.months + 'm ' + r.days + 'd\n' +
            'Total days: ' + r.totalDays + '\n' +
            'Total weeks: ' + r.totalWeeks.toFixed(1);
          PortalaTools.setStatus('date-difference-calculator-status', 'Calculated.', false);
        } catch (e) {
          output.textContent = '';
          PortalaTools.setStatus('date-difference-calculator-status', e.message, true);
        }
      }

      var btn = function (id, fn) {
        var el = document.getElementById(id);
        if (el) { el.addEventListener('click', fn); }
      };
      btn('date-difference-calculator-btn-calc', calc);
      start.addEventListener('change', calc);
      end.addEventListener('change', calc);
    });
  }

  /* ---------- Node test exports ---------- */

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
      parseDate: parseDate,
      dateDifference: dateDifference
    };
  }
})();
