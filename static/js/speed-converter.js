/* Portala Tools — Speed Converter */
(function () {
  'use strict';

  /* ---------- Pure functions ---------- */

  /* factor to convert 1 unit -> metres per second */
  var TO_MS = {
    'm/s': 1,
    'km/h': 1 / 3.6,
    'mph': 0.44704,
    'knot': 0.5144444444,
    'ft/s': 0.3048
  };

  function convertSpeed(value, from, to) {
    if (!(from in TO_MS) || !(to in TO_MS)) {
      throw new Error('Unknown speed unit.');
    }
    return Number(value) * TO_MS[from] / TO_MS[to];
  }

  /* ---------- DOM wiring (browser only) ---------- */

  if (typeof document !== 'undefined') {
    PortalaTools.onReady(function () {
      var value = document.getElementById('speed-converter-value');
      var from = document.getElementById('speed-converter-from');
      var to = document.getElementById('speed-converter-to');
      var output = document.getElementById('speed-converter-output');
      var status = document.getElementById('speed-converter-status');
      if (!value || !from || !to || !output || !status) { return; }

      function calc() {
        try {
          var r = convertSpeed(value.value, from.value, to.value);
          output.textContent = value.value + ' ' + from.value +
            ' = ' + r + ' ' + to.value;
          PortalaTools.setStatus('speed-converter-status', 'Converted.', false);
        } catch (e) {
          output.textContent = '';
          PortalaTools.setStatus('speed-converter-status', e.message, true);
        }
      }

      var btn = function (id, fn) {
        var el = document.getElementById(id);
        if (el) { el.addEventListener('click', fn); }
      };
      btn('speed-converter-btn-convert', calc);
      value.addEventListener('input', calc);
      from.addEventListener('change', calc);
      to.addEventListener('change', calc);
    });
  }

  /* ---------- Node test exports ---------- */

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { convertSpeed: convertSpeed };
  }
})();
