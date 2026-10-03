/* Portala Tools — BMI Calculator (metric + imperial) */
(function () {
  'use strict';

  /* ---------- Pure functions ---------- */

  function calcBmiMetric(heightCm, weightKg) {
    heightCm = Number(heightCm); weightKg = Number(weightKg);
    if (isNaN(heightCm) || isNaN(weightKg) || heightCm <= 0 || weightKg <= 0) {
      throw new Error('Enter valid positive height and weight.');
    }
    var m = heightCm / 100;
    var bmi = Math.round((weightKg / (m * m)) * 100) / 100;
    var category;
    if (bmi < 18.5) { category = 'Underweight'; }
    else if (bmi < 25) { category = 'Normal weight'; }
    else if (bmi < 30) { category = 'Overweight'; }
    else { category = 'Obese'; }
    return {
      bmi: bmi,
      category: category,
      healthyMin: Math.round(18.5 * m * m * 10) / 10,
      healthyMax: Math.round(24.9 * m * m * 10) / 10
    };
  }

  function imperialToMetric(feet, inches, pounds) {
    feet = Number(feet) || 0; inches = Number(inches) || 0; pounds = Number(pounds) || 0;
    var totalInches = feet * 12 + inches;
    return {
      cm: Math.round(totalInches * 2.54 * 10) / 10,
      kg: Math.round(pounds / 2.2046226218 * 100) / 100
    };
  }

  /* ---------- DOM wiring (browser only) ---------- */

  if (typeof document !== 'undefined') {
    PortalaTools.onReady(function () {
      var system = document.getElementById('bmi-calculator-system');
      var out = document.getElementById('bmi-calculator-output');
      var status = document.getElementById('bmi-calculator-status');
      if (!system || !out || !status) { return; }

      function val(id) { var el = document.getElementById(id); return el ? el.value : ''; }

      function compute() {
        try {
          var r;
          if (system.value === 'imperial') {
            var m = imperialToMetric(val('bmi-calculator-ft'), val('bmi-calculator-in'), val('bmi-calculator-lb'));
            r = calcBmiMetric(m.cm, m.kg);
          } else {
            r = calcBmiMetric(val('bmi-calculator-cm'), val('bmi-calculator-kg'));
          }
          out.textContent =
            'BMI: ' + r.bmi.toFixed(2) + '\n' +
            'Category: ' + r.category + '\n' +
            'Healthy weight range: ' + r.healthyMin + ' – ' + r.healthyMax + ' kg';
          PortalaTools.setStatus('bmi-calculator-status', 'Calculated (WHO classification).', false);
        } catch (e) {
          out.textContent = '';
          PortalaTools.setStatus('bmi-calculator-status', e.message, true);
        }
      }

      function clearAll() {
        out.textContent = '';
        PortalaTools.setStatus('bmi-calculator-status', '', false);
      }

      var btn = function (id, fn) {
        var el = document.getElementById(id);
        if (el) { el.addEventListener('click', fn); }
      };
      btn('bmi-calculator-btn-calculate', compute);
      btn('bmi-calculator-btn-clear', clearAll);
    });
  }

  /* ---------- Node test exports ---------- */

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
      calcBmiMetric: calcBmiMetric,
      imperialToMetric: imperialToMetric
    };
  }
})();
