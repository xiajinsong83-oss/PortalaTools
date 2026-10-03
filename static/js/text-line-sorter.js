/* Portala Tools — Text Line Sorter */
(function () {
  'use strict';

  /* ---------- Pure functions ---------- */

  function sortLines(text, mode) {
    var lines = String(text == null ? '' : text).replace(/\r\n?/g, '\n').split('\n');
    /* Drop a single trailing empty line produced by a trailing newline. */
    if (lines.length > 1 && lines[lines.length - 1] === '') { lines.pop(); }

    if (mode === 'reverse') {
      return lines.reverse().join('\n');
    }
    if (mode === 'shuffle') {
      var arr = lines.slice();
      for (var i = arr.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = arr[i]; arr[i] = arr[j]; arr[j] = tmp;
      }
      return arr.join('\n');
    }
    if (mode === 'natural') {
      return lines.sort(function (a, b) {
        return a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' });
      }).join('\n');
    }
    /* default: alphabetical ascending (A→Z); 'za' reverses it. */
    lines.sort(function (a, b) { return a.localeCompare(b); });
    if (mode === 'za') { lines.reverse(); }
    return lines.join('\n');
  }

  /* ---------- DOM wiring (browser only) ---------- */

  if (typeof document !== 'undefined') {
    PortalaTools.onReady(function () {
      var input = document.getElementById('text-line-sorter-input');
      var output = document.getElementById('text-line-sorter-output');
      var status = document.getElementById('text-line-sorter-status');
      var modeEl = document.getElementById('text-line-sorter-mode');
      if (!input || !output || !status) { return; }

      function run() {
        var mode = modeEl ? modeEl.value : 'az';
        output.textContent = sortLines(input.value, mode);
        PortalaTools.setStatus('text-line-sorter-status', 'Lines sorted.', false);
      }

      function copy() {
        if (!output.textContent) {
          PortalaTools.setStatus('text-line-sorter-status', 'Nothing to copy yet.', true);
          return;
        }
        PortalaTools.copyText(output.textContent, function () {
          PortalaTools.setStatus('text-line-sorter-status', 'Copied!', false);
        }, function () {
          PortalaTools.setStatus('text-line-sorter-status', 'Copy failed.', true);
        });
      }

      function clearAll() {
        input.value = '';
        output.textContent = '';
        PortalaTools.setStatus('text-line-sorter-status', '', false);
      }

      function btn(id, fn) {
        var el = document.getElementById(id);
        if (el) { el.addEventListener('click', fn); }
      }
      btn('text-line-sorter-btn-run', run);
      btn('text-line-sorter-btn-copy', copy);
      btn('text-line-sorter-btn-clear', clearAll);
    });
  }

  /* ---------- Node test exports ---------- */

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { sortLines: sortLines };
  }
})();
