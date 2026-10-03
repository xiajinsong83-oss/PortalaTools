/* Portala Tools — JSON Formatter & Validator */
(function () {
  'use strict';

  /* ---------- Pure functions ---------- */

  function formatJson(input, indent) {
    var parsed = JSON.parse(input); /* throws with position info on invalid JSON */
    return JSON.stringify(parsed, null, typeof indent === 'number' ? indent : 2);
  }

  function minifyJson(input) {
    return JSON.stringify(JSON.parse(input));
  }

  function validateJson(input) {
    try {
      JSON.parse(input);
      return { valid: true, error: null, position: -1 };
    } catch (err) {
      var msg = (err && err.message) || String(err);
      var m = /position (\d+)/i.exec(msg);
      return {
        valid: false,
        error: msg,
        position: m ? parseInt(m[1], 10) : -1
      };
    }
  }

  /* ---------- DOM wiring (browser only) ---------- */

  if (typeof document !== 'undefined') {
    PortalaTools.onReady(function () {
      var input = document.getElementById('json-formatter-input');
      var output = document.getElementById('json-formatter-output');
      var status = document.getElementById('json-formatter-status');
      if (!input || !output || !status) { return; }

      var EXAMPLE = '{\n  "name": "Portala Tools",\n  "online": true,\n  "privacy": "local-only",\n  "features": ["format", "validate", "minify"]\n}';

      function format() {
        try {
          output.textContent = formatJson(input.value);
          PortalaTools.setStatus('json-formatter-status', 'Formatted successfully.', false);
        } catch (e) {
          output.textContent = '';
          PortalaTools.setStatus('json-formatter-status', 'Invalid JSON: ' + e.message, true);
        }
      }

      function validate() {
        var r = validateJson(input.value);
        if (r.valid) {
          PortalaTools.setStatus('json-formatter-status', 'Valid JSON.', false);
        } else {
          output.textContent = '';
          PortalaTools.setStatus('json-formatter-status', 'Invalid JSON: ' + r.error, true);
        }
      }

      function minify() {
        try {
          output.textContent = minifyJson(input.value);
          PortalaTools.setStatus('json-formatter-status', 'Minified successfully.', false);
        } catch (e) {
          output.textContent = '';
          PortalaTools.setStatus('json-formatter-status', 'Invalid JSON: ' + e.message, true);
        }
      }

      function copy() {
        if (!output.textContent) {
          PortalaTools.setStatus('json-formatter-status', 'Nothing to copy yet — run an action first.', true);
          return;
        }
        PortalaTools.copyText(output.textContent, function () {
          PortalaTools.setStatus('json-formatter-status', 'Copied!', false);
        }, function () {
          PortalaTools.setStatus('json-formatter-status', 'Copy failed — select the output and copy manually.', true);
        });
      }

      function example() {
        input.value = EXAMPLE;
        output.textContent = '';
        PortalaTools.setStatus('json-formatter-status', 'Sample loaded. Press Format to see it beautified.', false);
      }

      function clearAll() {
        input.value = '';
        output.textContent = '';
        PortalaTools.setStatus('json-formatter-status', '', false);
      }

      var btn = function (id, fn) {
        var el = document.getElementById(id);
        if (el) { el.addEventListener('click', fn); }
      };
      btn('json-formatter-btn-format', format);
      btn('json-formatter-btn-validate', validate);
      btn('json-formatter-btn-minify', minify);
      btn('json-formatter-btn-copy', copy);
      btn('json-formatter-btn-example', example);
      btn('json-formatter-btn-clear', clearAll);
    });
  }

  /* ---------- Node test exports ---------- */

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
      formatJson: formatJson,
      minifyJson: minifyJson,
      validateJson: validateJson
    };
  }
})();
