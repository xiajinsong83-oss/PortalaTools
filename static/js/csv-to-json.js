/* Portala Tools — CSV to JSON Converter */
(function () {
  'use strict';

  /* ---------- Pure functions ---------- */

  function parseCsv(text) {
    var rows = [];
    var row = [];
    var field = '';
    var inQuotes = false;
    var src = String(text).replace(/\r\n/g, '\n').replace(/\r/g, '\n');
    for (var i = 0; i < src.length; i++) {
      var c = src[i];
      if (inQuotes) {
        if (c === '"') {
          if (src[i + 1] === '"') { field += '"'; i++; }
          else { inQuotes = false; }
        } else {
          field += c;
        }
      } else {
        if (c === '"') {
          inQuotes = true;
        } else if (c === ',') {
          row.push(field); field = '';
        } else if (c === '\n') {
          row.push(field); rows.push(row); row = []; field = '';
        } else {
          field += c;
        }
      }
    }
    if (field !== '' || row.length > 0) { row.push(field); rows.push(row); }
    if (rows.length === 1 && rows[0].length === 1 && rows[0][0] === '') { rows.pop(); }
    return rows;
  }

  function csvToJson(text, hasHeader) {
    var rows = parseCsv(text);
    if (!rows.length) { return []; }
    if (hasHeader) {
      var headers = rows[0];
      return rows.slice(1).map(function (r) {
        var obj = {};
        headers.forEach(function (h, idx) {
          obj[h] = (r[idx] !== undefined ? r[idx] : '');
        });
        return obj;
      });
    }
    return rows.map(function (r) {
      var obj = {};
      r.forEach(function (v, idx) { obj['col' + (idx + 1)] = v; });
      return obj;
    });
  }

  /* ---------- DOM wiring (browser only) ---------- */

  if (typeof document !== 'undefined') {
    PortalaTools.onReady(function () {
      var input = document.getElementById('csv-to-json-input');
      var header = document.getElementById('csv-to-json-header');
      var output = document.getElementById('csv-to-json-output');
      var status = document.getElementById('csv-to-json-status');
      if (!input || !header || !output || !status) { return; }

      function convert() {
        try {
          var data = csvToJson(input.value, header.checked);
          output.textContent = JSON.stringify(data, null, 2);
          PortalaTools.setStatus('csv-to-json-status',
            'Converted ' + data.length + ' row' + (data.length === 1 ? '' : 's') + '.', false);
        } catch (e) {
          output.textContent = '';
          PortalaTools.setStatus('csv-to-json-status', e.message, true);
        }
      }

      function copy() {
        if (!output.textContent) {
          PortalaTools.setStatus('csv-to-json-status', 'Nothing to copy yet — convert first.', true);
          return;
        }
        PortalaTools.copyText(output.textContent, function () {
          PortalaTools.setStatus('csv-to-json-status', 'Copied!', false);
        }, function () {
          PortalaTools.setStatus('csv-to-json-status', 'Copy failed.', true);
        });
      }

      function example() {
        input.value = 'name,age,city\nAlice,30,"New York"\nBob,25,London';
        header.checked = true;
        output.textContent = '';
        PortalaTools.setStatus('csv-to-json-status', 'Sample loaded. Press Convert.', false);
      }

      function clearAll() {
        input.value = ''; output.textContent = '';
        PortalaTools.setStatus('csv-to-json-status', '', false);
      }

      var btn = function (id, fn) {
        var el = document.getElementById(id);
        if (el) { el.addEventListener('click', fn); }
      };
      btn('csv-to-json-btn-convert', convert);
      btn('csv-to-json-btn-copy', copy);
      btn('csv-to-json-btn-example', example);
      btn('csv-to-json-btn-clear', clearAll);
    });
  }

  /* ---------- Node test exports ---------- */

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { parseCsv: parseCsv, csvToJson: csvToJson };
  }
})();
