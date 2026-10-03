/* Portala Tools — JSON String Escape / Unescape */
(function () {
  'use strict';

  /* ---------- Pure functions ---------- */

  /* Escape a raw string for use inside a JSON string literal,
     stripping the surrounding quotes that JSON.stringify adds. */
  function escapeJsonString(str) {
    var wrapped = JSON.stringify(String(str == null ? '' : str));
    return wrapped.slice(1, -1);
  }

  /* Reverse the escaping: parse the input as the *contents* of a JSON string. */
  function unescapeJsonString(str) {
    try {
      var parsed = JSON.parse('"' + String(str == null ? '' : str) + '"');
      return { ok: true, value: parsed, error: null };
    } catch (e) {
      return { ok: false, value: null, error: e.message };
    }
  }

  /* ---------- DOM wiring (browser only) ---------- */

  if (typeof document !== 'undefined') {
    PortalaTools.onReady(function () {
      var input = document.getElementById('json-string-escape-input');
      var output = document.getElementById('json-string-escape-output');
      var status = document.getElementById('json-string-escape-status');
      if (!input || !output || !status) { return; }

      function escape() {
        output.textContent = escapeJsonString(input.value);
        PortalaTools.setStatus('json-string-escape-status', 'String escaped.', false);
      }

      function unescape() {
        var r = unescapeJsonString(input.value);
        if (r.ok) {
          output.textContent = r.value;
          PortalaTools.setStatus('json-string-escape-status', 'String unescaped.', false);
        } else {
          output.textContent = '';
          PortalaTools.setStatus('json-string-escape-status', 'Invalid escape sequence: ' + r.error, true);
        }
      }

      function copy() {
        if (!output.textContent) {
          PortalaTools.setStatus('json-string-escape-status', 'Nothing to copy yet.', true);
          return;
        }
        PortalaTools.copyText(output.textContent, function () {
          PortalaTools.setStatus('json-string-escape-status', 'Copied!', false);
        }, function () {
          PortalaTools.setStatus('json-string-escape-status', 'Copy failed.', true);
        });
      }

      function btn(id, fn) {
        var el = document.getElementById(id);
        if (el) { el.addEventListener('click', fn); }
      }
      btn('json-string-escape-btn-escape', escape);
      btn('json-string-escape-btn-unescape', unescape);
      btn('json-string-escape-btn-copy', copy);
      btn('json-string-escape-btn-clear', function () {
        input.value = '';
        output.textContent = '';
        PortalaTools.setStatus('json-string-escape-status', '', false);
      });
    });
  }

  /* ---------- Node test exports ---------- */

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
      escapeJsonString: escapeJsonString,
      unescapeJsonString: unescapeJsonString
    };
  }
})();
