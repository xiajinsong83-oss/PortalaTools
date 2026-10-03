/* Portala Tools — SVG Previewer */
(function () {
  'use strict';

  /* ---------- Pure functions ---------- */

  /* Heuristic: does the input look like a complete SVG document? */
  function looksLikeSvg(input) {
    var s = String(input == null ? '' : input).trim();
    return /^<svg[\s>][\s\S]*<\/svg>$/i.test(s);
  }

  /* ---------- DOM wiring (browser only) ---------- */

  if (typeof document !== 'undefined') {
    PortalaTools.onReady(function () {
      var input = document.getElementById('svg-previewer-input');
      var box = document.getElementById('svg-previewer-box');
      var status = document.getElementById('svg-previewer-status');
      if (!input || !box || !status) { return; }

      var EXAMPLE = '<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">\n' +
        '  <circle cx="100" cy="100" r="80" fill="#4f8cff" />\n' +
        '  <rect x="60" y="60" width="80" height="80" fill="#ffb84f" />\n' +
        '</svg>';

      function render() {
        if (!looksLikeSvg(input.value)) {
          box.innerHTML = '';
          PortalaTools.setStatus('svg-previewer-status',
            'Could not find a complete <svg>…</svg> block.', true);
          return;
        }
        box.innerHTML = input.value; /* local-only, by design */
        PortalaTools.setStatus('svg-previewer-status', 'SVG rendered.', false);
      }

      function copy() {
        PortalaTools.copyText(input.value, function () {
          PortalaTools.setStatus('svg-previewer-status', 'SVG code copied!', false);
        }, function () {
          PortalaTools.setStatus('svg-previewer-status', 'Copy failed.', true);
        });
      }

      function btn(id, fn) {
        var el = document.getElementById(id);
        if (el) { el.addEventListener('click', fn); }
      }
      btn('svg-previewer-btn-render', render);
      btn('svg-previewer-btn-example', function () {
        input.value = EXAMPLE;
        box.innerHTML = '';
        PortalaTools.setStatus('svg-previewer-status', 'Sample loaded. Press Render.', false);
      });
      btn('svg-previewer-btn-copy', copy);
      btn('svg-previewer-btn-clear', function () {
        input.value = '';
        box.innerHTML = '';
        PortalaTools.setStatus('svg-previewer-status', '', false);
      });
    });
  }

  /* ---------- Node test exports ---------- */

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { looksLikeSvg: looksLikeSvg };
  }
})();
