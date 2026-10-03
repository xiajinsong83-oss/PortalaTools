/* Portala Tools — Remove Duplicate Lines */
(function () {
  'use strict';

  /* ---------- Pure functions ---------- */

  function removeDuplicateLines(text, options) {
    options = options || {};
    var caseSensitive = !!options.caseSensitive;
    var trimLines = !!options.trimLines;
    var lines = String(text == null ? '' : text).replace(/\r\n?/g, '\n').split('\n');

    var seen = Object.create(null);
    var kept = [];
    var duplicatesRemoved = 0;

    lines.forEach(function (line) {
      var key = trimLines ? line.trim() : line;
      if (!caseSensitive) { key = key.toLowerCase(); }
      if (Object.prototype.hasOwnProperty.call(seen, key)) {
        duplicatesRemoved++;
      } else {
        seen[key] = true;
        kept.push(line);
      }
    });

    return { output: kept.join('\n'), duplicatesRemoved: duplicatesRemoved };
  }

  /* ---------- DOM wiring (browser only) ---------- */

  if (typeof document !== 'undefined') {
    PortalaTools.onReady(function () {
      var input = document.getElementById('remove-duplicate-lines-input');
      var output = document.getElementById('remove-duplicate-lines-output');
      var status = document.getElementById('remove-duplicate-lines-status');
      var caseEl = document.getElementById('remove-duplicate-lines-case');
      var trimEl = document.getElementById('remove-duplicate-lines-trim');
      if (!input || !output || !status) { return; }

      function run() {
        var r = removeDuplicateLines(input.value, {
          caseSensitive: caseEl ? caseEl.checked : false,
          trimLines: trimEl ? trimEl.checked : false
        });
        output.textContent = r.output;
        PortalaTools.setStatus('remove-duplicate-lines-status',
          'Done — removed ' + r.duplicatesRemoved + ' duplicate line(s).', false);
      }

      function copy() {
        if (!output.textContent) {
          PortalaTools.setStatus('remove-duplicate-lines-status', 'Nothing to copy yet.', true);
          return;
        }
        PortalaTools.copyText(output.textContent, function () {
          PortalaTools.setStatus('remove-duplicate-lines-status', 'Copied!', false);
        }, function () {
          PortalaTools.setStatus('remove-duplicate-lines-status', 'Copy failed.', true);
        });
      }

      function clearAll() {
        input.value = '';
        output.textContent = '';
        PortalaTools.setStatus('remove-duplicate-lines-status', '', false);
      }

      function btn(id, fn) {
        var el = document.getElementById(id);
        if (el) { el.addEventListener('click', fn); }
      }
      btn('remove-duplicate-lines-btn-run', run);
      btn('remove-duplicate-lines-btn-copy', copy);
      btn('remove-duplicate-lines-btn-clear', clearAll);
    });
  }

  /* ---------- Node test exports ---------- */

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { removeDuplicateLines: removeDuplicateLines };
  }
})();
