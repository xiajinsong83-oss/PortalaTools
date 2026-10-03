/* Portala Tools — Whitespace Remover */
(function () {
  'use strict';

  /* ---------- Pure functions ---------- */

  /* Remove every whitespace character (spaces, tabs, newlines). */
  function removeAllWhitespace(text) {
    return String(text == null ? '' : text).replace(/\s+/g, '');
  }

  /* Collapse runs of whitespace into a single space and trim the edges. */
  function collapseWhitespace(text) {
    return String(text == null ? '' : text).replace(/\s+/g, ' ').trim();
  }

  /* Trim leading/trailing whitespace on each line, keep line breaks. */
  function trimEachLine(text) {
    return String(text == null ? '' : text)
      .replace(/\r\n?/g, '\n')
      .split('\n')
      .map(function (l) { return l.trim(); })
      .join('\n');
  }

  /* Trim only the outer edges of the whole block. */
  function trimText(text) {
    return String(text == null ? '' : text).trim();
  }

  /* ---------- DOM wiring (browser only) ---------- */

  if (typeof document !== 'undefined') {
    PortalaTools.onReady(function () {
      var input = document.getElementById('whitespace-remover-input');
      var output = document.getElementById('whitespace-remover-output');
      var status = document.getElementById('whitespace-remover-status');
      if (!input || !output || !status) { return; }

      var actions = {
        'whitespace-remover-btn-all': { fn: removeAllWhitespace, label: 'All whitespace removed.' },
        'whitespace-remover-btn-collapse': { fn: collapseWhitespace, label: 'Spaces collapsed.' },
        'whitespace-remover-btn-trimlines': { fn: trimEachLine, label: 'Each line trimmed.' },
        'whitespace-remover-btn-trim': { fn: trimText, label: 'Text trimmed.' }
      };

      Object.keys(actions).forEach(function (id) {
        var el = document.getElementById(id);
        if (el) {
          el.addEventListener('click', function () {
            output.textContent = actions[id].fn(input.value);
            PortalaTools.setStatus('whitespace-remover-status', actions[id].label, false);
          });
        }
      });

      var copyBtn = document.getElementById('whitespace-remover-btn-copy');
      if (copyBtn) {
        copyBtn.addEventListener('click', function () {
          if (!output.textContent) {
            PortalaTools.setStatus('whitespace-remover-status', 'Nothing to copy yet.', true);
            return;
          }
          PortalaTools.copyText(output.textContent, function () {
            PortalaTools.setStatus('whitespace-remover-status', 'Copied!', false);
          }, function () {
            PortalaTools.setStatus('whitespace-remover-status', 'Copy failed.', true);
          });
        });
      }

      var clrBtn = document.getElementById('whitespace-remover-btn-clear');
      if (clrBtn) {
        clrBtn.addEventListener('click', function () {
          input.value = '';
          output.textContent = '';
          PortalaTools.setStatus('whitespace-remover-status', '', false);
        });
      }
    });
  }

  /* ---------- Node test exports ---------- */

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
      removeAllWhitespace: removeAllWhitespace,
      collapseWhitespace: collapseWhitespace,
      trimEachLine: trimEachLine,
      trimText: trimText
    };
  }
})();
