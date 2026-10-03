/* Portala Tools — Length Converter */
(function () {
  'use strict';

  /* ---------- Pure functions ---------- */

  /* Factors relative to 1 millimetre. */
  var TO_MM = {
    mm: 1,
    cm: 10,
    m: 1000,
    km: 1000000,
    in: 25.4,
    ft: 304.8,
    yd: 914.4,
    mi: 1609344
  };

  function convertLength(value, from, to) {
    if (!TO_MM[from] || !TO_MM[to]) { throw new Error('Unknown unit.'); }
    return value * TO_MM[from] / TO_MM[to];
  }

  function fmt(n) {
    /* Keep enough precision but trim noise. */
    var r = Math.round(n * 1e6) / 1e6;
    return String(r);
  }

  /* ---------- DOM wiring (browser only) ---------- */

  if (typeof document !== 'undefined') {
    PortalaTools.onReady(function () {
      var val = document.getElementById('length-converter-value');
      var from = document.getElementById('length-converter-from');
      var to = document.getElementById('length-converter-to');
      var result = document.getElementById('length-converter-output');
      var status = document.getElementById('length-converter-status');
      if (!val || !from || !to || !result) { return; }

      function run() {
        var v = parseFloat(val.value);
        if (isNaN(v)) {
          result.textContent = '';
          PortalaTools.setStatus('length-converter-status', 'Enter a number first.', true);
          return;
        }
        result.textContent = fmt(convertLength(v, from.value, to.value)) + ' ' + to.value;
        PortalaTools.setStatus('length-converter-status', 'Converted.', false);
      }

      val.addEventListener('input', run);
      from.addEventListener('change', run);
      to.addEventListener('change', run);
    });
  }

  /* ---------- Node test exports ---------- */

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { convertLength: convertLength };
  }
})();
