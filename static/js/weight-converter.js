/* Portala Tools — Weight Converter */
(function () {
  'use strict';

  /* ---------- Pure functions ---------- */

  /* Factors relative to 1 milligram. */
  var TO_MG = {
    mg: 1,
    g: 1000,
    kg: 1000000,
    t: 1000000000,
    oz: 28349.523125,
    lb: 453592.37
  };

  function convertWeight(value, from, to) {
    if (!TO_MG[from] || !TO_MG[to]) { throw new Error('Unknown unit.'); }
    return value * TO_MG[from] / TO_MG[to];
  }

  function fmt(n) {
    var r = Math.round(n * 1e6) / 1e6;
    return String(r);
  }

  /* ---------- DOM wiring (browser only) ---------- */

  if (typeof document !== 'undefined') {
    PortalaTools.onReady(function () {
      var val = document.getElementById('weight-converter-value');
      var from = document.getElementById('weight-converter-from');
      var to = document.getElementById('weight-converter-to');
      var result = document.getElementById('weight-converter-output');
      var status = document.getElementById('weight-converter-status');
      if (!val || !from || !to || !result) { return; }

      function run() {
        var v = parseFloat(val.value);
        if (isNaN(v)) {
          result.textContent = '';
          PortalaTools.setStatus('weight-converter-status', 'Enter a number first.', true);
          return;
        }
        result.textContent = fmt(convertWeight(v, from.value, to.value)) + ' ' + to.value;
        PortalaTools.setStatus('weight-converter-status', 'Converted.', false);
      }

      val.addEventListener('input', run);
      from.addEventListener('change', run);
      to.addEventListener('change', run);
    });
  }

  /* ---------- Node test exports ---------- */

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { convertWeight: convertWeight };
  }
})();
