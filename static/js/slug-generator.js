/* Portala Tools — URL Slug Generator */
(function () {
  'use strict';

  /* ---------- Pure functions ---------- */

  function generateSlug(text) {
    return String(text)
      .normalize('NFKD')           /* decompose accented chars */
      .replace(/[\u0300-\u036f]/g, '') /* strip diacritics */
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-') /* any non-alphanumeric run -> hyphen */
      .replace(/^-+|-+$/g, '');    /* trim leading/trailing hyphens */
  }

  /* ---------- DOM wiring (browser only) ---------- */

  if (typeof document !== 'undefined') {
    PortalaTools.onReady(function () {
      var input = document.getElementById('slug-generator-input');
      var output = document.getElementById('slug-generator-output');
      var status = document.getElementById('slug-generator-status');
      if (!input || !output || !status) { return; }

      function gen() {
        var slug = generateSlug(input.value);
        output.textContent = slug;
        PortalaTools.setStatus('slug-generator-status', slug ? 'Slug generated.' : 'Empty input.', !slug);
      }

      function copy() {
        if (!output.textContent) {
          PortalaTools.setStatus('slug-generator-status', 'Nothing to copy yet.', true);
          return;
        }
        PortalaTools.copyText(output.textContent, function () {
          PortalaTools.setStatus('slug-generator-status', 'Copied!', false);
        }, function () {
          PortalaTools.setStatus('slug-generator-status', 'Copy failed.', true);
        });
      }

      input.addEventListener('input', gen);

      var btn = function (id, fn) {
        var el = document.getElementById(id);
        if (el) { el.addEventListener('click', fn); }
      };
      btn('slug-generator-btn-copy', copy);
      btn('slug-generator-btn-clear', function () {
        input.value = ''; output.textContent = '';
        PortalaTools.setStatus('slug-generator-status', '', false);
      });
    });
  }

  /* ---------- Node test exports ---------- */

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { generateSlug: generateSlug };
  }
})();
