/* Portala Tools — MD5 Hash Generator (blueimp-md5, MIT) */
(function () {
  'use strict';

  /* Resolve the UMD md5 implementation: browser global, else Node require. */
  var md5Impl = (typeof md5 !== 'undefined') ? md5
    : (typeof require !== 'undefined' ? require('./vendor/md5.min.js') : null);

  /* ---------- Pure functions ---------- */

  function generateMd5(str) {
    if (!md5Impl) { throw new Error('MD5 library not loaded.'); }
    return md5Impl(String(str));
  }

  /* ---------- DOM wiring (browser only) ---------- */

  if (typeof document !== 'undefined') {
    PortalaTools.onReady(function () {
      var input = document.getElementById('md5-hash-generator-input');
      var output = document.getElementById('md5-hash-generator-output');
      var status = document.getElementById('md5-hash-generator-status');
      if (!input || !output || !status) { return; }

      function generate() {
        try {
          output.textContent = generateMd5(input.value);
          PortalaTools.setStatus('md5-hash-generator-status', 'MD5 generated.', false);
        } catch (e) {
          output.textContent = '';
          PortalaTools.setStatus('md5-hash-generator-status', 'Failed: ' + e.message, true);
        }
      }

      function copy() {
        if (!output.textContent) {
          PortalaTools.setStatus('md5-hash-generator-status', 'Nothing to copy yet — generate first.', true);
          return;
        }
        PortalaTools.copyText(output.textContent, function () {
          PortalaTools.setStatus('md5-hash-generator-status', 'Copied!', false);
        }, function () {
          PortalaTools.setStatus('md5-hash-generator-status', 'Copy failed — select the output and copy manually.', true);
        });
      }

      function clearAll() {
        input.value = '';
        output.textContent = '';
        PortalaTools.setStatus('md5-hash-generator-status', '', false);
      }

      var btn = function (id, fn) {
        var el = document.getElementById(id);
        if (el) { el.addEventListener('click', fn); }
      };
      btn('md5-hash-generator-btn-generate', generate);
      btn('md5-hash-generator-btn-copy', copy);
      btn('md5-hash-generator-btn-clear', clearAll);
    });
  }

  /* ---------- Node test exports ---------- */

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { generateMd5: generateMd5 };
  }
})();
