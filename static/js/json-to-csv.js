/* Portala Tools — JSON to CSV Converter */
(function () {
  'use strict';

  /* ---------- Pure functions ---------- */

  function escapeCsv(value) {
    var s = (value === null || value === undefined) ? '' : String(value);
    if (/[",\n]/.test(s)) {
      s = '"' + s.replace(/"/g, '""') + '"';
    }
    return s;
  }

  function jsonToCsv(jsonInput) {
    var data = (typeof jsonInput === 'string') ? JSON.parse(jsonInput) : jsonInput;
    if (!Array.isArray(data)) {
      throw new Error('Input must be a JSON array of flat objects.');
    }
    var headers = [];
    var seen = {};
    data.forEach(function (obj) {
      if (obj && typeof obj === 'object' && !Array.isArray(obj)) {
        Object.keys(obj).forEach(function (k) {
          if (!seen[k]) { seen[k] = true; headers.push(k); }
        });
      }
    });
    var lines = [headers.map(escapeCsv).join(',')];
    data.forEach(function (obj) {
      lines.push(headers.map(function (h) {
        return escapeCsv(obj ? obj[h] : '');
      }).join(','));
    });
    return lines.join('\n');
  }

  /* ---------- DOM wiring (browser only) ---------- */

  if (typeof document !== 'undefined') {
    PortalaTools.onReady(function () {
      var input = document.getElementById('json-to-csv-input');
      var output = document.getElementById('json-to-csv-output');
      var status = document.getElementById('json-to-csv-status');
      if (!input || !output || !status) { return; }

      function convert() {
        try {
          output.textContent = jsonToCsv(input.value);
          PortalaTools.setStatus('json-to-csv-status', 'Converted to CSV.', false);
        } catch (e) {
          output.textContent = '';
          PortalaTools.setStatus('json-to-csv-status', e.message, true);
        }
      }

      function copy() {
        if (!output.textContent) {
          PortalaTools.setStatus('json-to-csv-status', 'Nothing to copy yet — convert first.', true);
          return;
        }
        PortalaTools.copyText(output.textContent, function () {
          PortalaTools.setStatus('json-to-csv-status', 'Copied!', false);
        }, function () {
          PortalaTools.setStatus('json-to-csv-status', 'Copy failed.', true);
        });
      }

      function example() {
        input.value = '[{"name":"Alice","age":30,"city":"New York"},{"name":"Bob","age":25,"city":"London"}]';
        output.textContent = '';
        PortalaTools.setStatus('json-to-csv-status', 'Sample loaded. Press Convert.', false);
      }

      function clearAll() {
        input.value = ''; output.textContent = '';
        PortalaTools.setStatus('json-to-csv-status', '', false);
      }

      var btn = function (id, fn) {
        var el = document.getElementById(id);
        if (el) { el.addEventListener('click', fn); }
      };
      btn('json-to-csv-btn-convert', convert);
      btn('json-to-csv-btn-copy', copy);
      btn('json-to-csv-btn-example', example);
      btn('json-to-csv-btn-clear', clearAll);
    });
  }

  /* ---------- Node test exports ---------- */

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { jsonToCsv: jsonToCsv, escapeCsv: escapeCsv };
  }
})();
