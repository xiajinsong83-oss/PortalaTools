/* Portala Tools — Age Calculator */
(function () {
  'use strict';

  /* ---------- Pure functions ---------- */

  function parseDate(s) {
    var p = String(s).trim().split('-');
    if (p.length !== 3) { throw new Error('Expected YYYY-MM-DD date.'); }
    return { y: +p[0], m: +p[1] - 1, d: +p[2] };
  }

  function daysInMonth(year, month) {
    return new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
  }

  /* Compute age components and totals between two YYYY-MM-DD dates. */
  function ageOn(birth, today) {
    var b = parseDate(birth), t = parseDate(today);
    var years = t.y - b.y;
    var months = t.m - b.m;
    var days = t.d - b.d;
    if (days < 0) {
      months--;
      var prevMonth = (t.m + 11) % 12;
      var prevYear = t.m === 0 ? t.y - 1 : t.y;
      days += daysInMonth(prevYear, prevMonth);
    }
    if (months < 0) { years--; months += 12; }
    if (years < 0) { throw new Error('Birth date is in the future.'); }

    var ms = Date.UTC(t.y, t.m, t.d) - Date.UTC(b.y, b.m, b.d);
    var totalDays = Math.round(ms / 86400000);
    var totalMonths = (t.y - b.y) * 12 + (t.m - b.m) + (t.d >= b.d ? 0 : -1);
    var totalWeeks = Math.floor(totalDays / 7);
    return {
      years: years,
      months: months,
      days: days,
      totalDays: totalDays,
      totalMonths: totalMonths,
      totalWeeks: totalWeeks
    };
  }

  /* ---------- DOM wiring (browser only) ---------- */

  if (typeof document !== 'undefined') {
    PortalaTools.onReady(function () {
      var birth = document.getElementById('age-calculator-birth');
      var today = document.getElementById('age-calculator-today');
      var out = document.getElementById('age-calculator-output');
      var status = document.getElementById('age-calculator-status');
      if (!birth || !out || !status) { return; }

      function compute() {
        try {
          if (!birth.value) { throw new Error('Pick a birth date.'); }
          var ref = today && today.value ? today.value : new Date().toISOString().slice(0, 10);
          var r = ageOn(birth.value, ref);
          out.textContent =
            r.years + ' years, ' + r.months + ' months, ' + r.days + ' days\n' +
            'Total: ' + r.totalDays.toLocaleString() + ' days  ·  ' +
            r.totalMonths + ' months  ·  ' + r.totalWeeks.toLocaleString() + ' weeks';
          PortalaTools.setStatus('age-calculator-status', 'Calculated as of ' + ref + '.', false);
        } catch (e) {
          out.textContent = '';
          PortalaTools.setStatus('age-calculator-status', e.message, true);
        }
      }

      function clearAll() {
        birth.value = '';
        out.textContent = '';
        PortalaTools.setStatus('age-calculator-status', '', false);
      }

      var btn = function (id, fn) {
        var el = document.getElementById(id);
        if (el) { el.addEventListener('click', fn); }
      };
      btn('age-calculator-btn-calculate', compute);
      btn('age-calculator-btn-clear', clearAll);
    });
  }

  /* ---------- Node test exports ---------- */

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
      ageOn: ageOn
    };
  }
})();
