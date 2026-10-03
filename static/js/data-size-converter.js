/* Portala Tools — Data Size Converter (binary, 1024-based) */
(function () {
  'use strict';

  /* ---------- Pure functions ---------- */

  var UNITS = {
    B: 1,
    KB: 1024,
    MB: 1024 * 1024,
    GB: Math.pow(1024, 3),
    TB: Math.pow(1024, 4),
    PB: Math.pow(1024, 5)
  };

  var ORDER = ['B', 'KB', 'MB', 'GB', 'TB', 'PB'];

  function convertDataSize(value, from, to) {
    if (!(from in UNITS) || !(to in UNITS)) {
      throw new Error('Unknown data size unit.');
    }
    return Number(value) * UNITS[from] / UNITS[to];
  }

  function convertToAllUnits(value, from) {
    var result = {};
    ORDER.forEach(function (u) {
      result[u] = convertDataSize(value, from, u);
    });
    return result;
  }

  /* ---------- DOM wiring (browser only) ---------- */

  if (typeof document !== 'undefined') {
    PortalaTools.onReady(function () {
      var value = document.getElementById('data-size-converter-value');
      var from = document.getElementById('data-size-converter-from');
      var to = document.getElementById('data-size-converter-to');
      var output = document.getElementById('data-size-converter-output');
      var status = document.getElementById('data-size-converter-status');
      if (!value || !from || !to || !output || !status) { return; }

      function calc() {
        try {
          var r = convertDataSize(value.value, from.value, to.value);
          var all = convertToAllUnits(value.value, from.value);
          var lines = [value.value + ' ' + from.value + ' = ' + r + ' ' + to.value, ''];
          lines.push('All units:');
          ORDER.forEach(function (u) {
            lines.push('  ' + all[u] + ' ' + u);
          });
          output.textContent = lines.join('\n');
          PortalaTools.setStatus('data-size-converter-status', 'Converted.', false);
        } catch (e) {
          output.textContent = '';
          PortalaTools.setStatus('data-size-converter-status', e.message, true);
        }
      }

      var btn = function (id, fn) {
        var el = document.getElementById(id);
        if (el) { el.addEventListener('click', fn); }
      };
      btn('data-size-converter-btn-convert', calc);
      value.addEventListener('input', calc);
      from.addEventListener('change', calc);
      to.addEventListener('change', calc);
    });
  }

  /* ---------- Node test exports ---------- */

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
      convertDataSize: convertDataSize,
      convertToAllUnits: convertToAllUnits
    };
  }
})();
