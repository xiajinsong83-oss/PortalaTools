/* Portala Tools — JSON Minifier */
(function () {
  'use strict';

  /* ---------- Pure functions ---------- */

  function minifyJson(input) {
    /* JSON.parse throws on malformed input, then stringify drops whitespace. */
    return JSON.stringify(JSON.parse(input));
  }

  /* ---------- DOM wiring (browser only) ---------- */

  if (typeof document !== 'undefined') {
    PortalaTools.onReady(function () {
      var input = document.getElementById('json-minifier-input');
      var output = document.getElementById('json-minifier-output');
      var status = document.getElementById('json-minifier-status');
      if (!input || !output || !status) { return; }

      var EXAMPLE = '{\n  "name": "Portala Tools",\n  "online": true,\n  "privacy": "local-only",\n  "features": ["minify", "compress"]\n}';

      function minify() {
        try {
          output.textContent = minifyJson(input.value);
          PortalaTools.setStatus('json-minifier-status', 'Minified successfully.', false);
        } catch (e) {
          output.textContent = '';
          PortalaTools.setStatus('json-minifier-status', 'Invalid JSON: ' + e.message, true);
        }
      }

      function copy() {
        if (!output.textContent) {
          PortalaTools.setStatus('json-minifier-status', 'Nothing to copy yet — run Minify first.', true);
          return;
        }
        PortalaTools.copyText(output.textContent, function () {
          PortalaTools.setStatus('json-minifier-status', 'Copied!', false);
        }, function () {
          PortalaTools.setStatus('json-minifier-status', 'Copy failed — select the output and copy manually.', true);
        });
      }

      function example() {
        input.value = EXAMPLE;
        output.textContent = '';
        PortalaTools.setStatus('json-minifier-status', 'Sample loaded. Press Minify to compress it.', false);
      }

      function clearAll() {
        input.value = '';
        output.textContent = '';
        PortalaTools.setStatus('json-minifier-status', '', false);
      }

      var btn = function (id, fn) {
        var el = document.getElementById(id);
        if (el) { el.addEventListener('click', fn); }
      };
      btn('json-minifier-btn-minify', minify);
      btn('json-minifier-btn-copy', copy);
      btn('json-minifier-btn-example', example);
      btn('json-minifier-btn-clear', clearAll);
    });
  }

  /* ---------- Node test exports ---------- */

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { minifyJson: minifyJson };
  }
})();
