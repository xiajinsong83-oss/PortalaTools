/* Portala Tools — CSV Viewer (quoted fields, embedded commas/newlines) */
(function () {
  'use strict';

  /* ---------- Pure functions ---------- */

  function parseCsv(text, delimiter) {
    delimiter = delimiter || ',';
    text = String(text == null ? '' : text);
    var rows = [], row = [], field = '', inQuotes = false;
    for (var i = 0; i < text.length; i++) {
      var c = text[i];
      if (inQuotes) {
        if (c === '"') {
          if (text[i + 1] === '"') { field += '"'; i++; }
          else { inQuotes = false; }
        } else {
          field += c;
        }
      } else {
        if (c === '"') {
          inQuotes = true;
        } else if (c === delimiter) {
          row.push(field); field = '';
        } else if (c === '\n') {
          row.push(field); rows.push(row); row = []; field = '';
        } else if (c === '\r') {
          /* swallow carriage return */
        } else {
          field += c;
        }
      }
    }
    row.push(field);
    rows.push(row);
    /* drop a trailing empty row produced by a final newline */
    if (rows.length && rows[rows.length - 1].length === 1 && rows[rows.length - 1][0] === '') {
      rows.pop();
    }
    return rows;
  }

  /* ---------- DOM wiring (browser only) ---------- */

  if (typeof document !== 'undefined') {
    PortalaTools.onReady(function () {
      var input = document.getElementById('csv-viewer-input');
      var out = document.getElementById('csv-viewer-output');
      var status = document.getElementById('csv-viewer-status');
      if (!input || !out || !status) { return; }

      var EXAMPLE = 'Name,City,Age\n"Smith, John",Boston,34\n"Doe, Jane","New York, NY",29\nNo quotes,Chicago,41';

      function parse() {
        try {
          var rows = parseCsv(input.value);
          if (rows.length === 0) {
            out.innerHTML = '';
            PortalaTools.setStatus('csv-viewer-status', 'No data to parse.', true);
            return;
          }
          var cols = rows.reduce(function (m, r) { return Math.max(m, r.length); }, 0);
          var html = '<table class="tool-table"><thead><tr>';
          rows[0].forEach(function (h) { html += '<th></th>'; });
          html += '</tr></thead><tbody>';
          rows.forEach(function (r, idx) {
            html += '<tr>';
            r.forEach(function (cell) {
              html += '<td>' + escapeHtml(cell) + '</td>';
            });
            html += '</tr>';
          });
          html += '</tbody></table>';
          out.innerHTML = html;
          PortalaTools.setStatus('csv-viewer-status',
            'Parsed ' + rows.length + ' row(s) and ' + cols + ' column(s).', false);
        } catch (e) {
          out.innerHTML = '';
          PortalaTools.setStatus('csv-viewer-status', 'Parse failed: ' + e.message, true);
        }
      }

      function escapeHtml(s) {
        return String(s)
          .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
      }

      function copy() {
        if (input.value.trim() === '') {
          PortalaTools.setStatus('csv-viewer-status', 'Nothing to copy.', true);
          return;
        }
        PortalaTools.copyText(input.value, function () {
          PortalaTools.setStatus('csv-viewer-status', 'Copied!', false);
        }, function () {
          PortalaTools.setStatus('csv-viewer-status', 'Copy failed.', true);
        });
      }

      function example() {
        input.value = EXAMPLE;
        out.innerHTML = '';
        PortalaTools.setStatus('csv-viewer-status', 'Sample loaded. Press Parse.', false);
      }

      function clearAll() {
        input.value = '';
        out.innerHTML = '';
        PortalaTools.setStatus('csv-viewer-status', '', false);
      }

      var btn = function (id, fn) {
        var el = document.getElementById(id);
        if (el) { el.addEventListener('click', fn); }
      };
      btn('csv-viewer-btn-parse', parse);
      btn('csv-viewer-btn-copy', copy);
      btn('csv-viewer-btn-example', example);
      btn('csv-viewer-btn-clear', clearAll);
    });
  }

  /* ---------- Node test exports ---------- */

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
      parseCsv: parseCsv
    };
  }
})();
