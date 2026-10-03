/* Portala Tools — SHA-512 Hash Generator (Web Crypto, async) */
(function () {
  'use strict';

  /* ---------- Pure functions ---------- */

  function bufferToHex(buf) {
    var bytes = new Uint8Array(buf);
    var hex = '';
    for (var i = 0; i < bytes.length; i++) {
      hex += (bytes[i] < 16 ? '0' : '') + bytes[i].toString(16);
    }
    return hex;
  }

  /* Async: digest UTF-8 bytes with the named SHA algo and return lowercase hex. */
  async function digestHex(algo, str) {
    var bytes = new TextEncoder().encode(String(str));
    var digest = await crypto.subtle.digest(algo, bytes);
    return bufferToHex(digest);
  }

  function sha512Hex(str) {
    return digestHex('SHA-512', str);
  }

  /* ---------- DOM wiring (browser only) ---------- */

  if (typeof document !== 'undefined') {
    PortalaTools.onReady(function () {
      var input = document.getElementById('sha512-hash-generator-input');
      var output = document.getElementById('sha512-hash-generator-output');
      var status = document.getElementById('sha512-hash-generator-status');
      if (!input || !output || !status) { return; }

      async function generate() {
        PortalaTools.setStatus('sha512-hash-generator-status', 'Generating…', false);
        try {
          var hex = await sha512Hex(input.value);
          output.textContent = hex;
          PortalaTools.setStatus('sha512-hash-generator-status', 'SHA-512 generated.', false);
        } catch (e) {
          output.textContent = '';
          PortalaTools.setStatus('sha512-hash-generator-status', 'Failed: ' + e.message, true);
        }
      }

      function copy() {
        if (!output.textContent) {
          PortalaTools.setStatus('sha512-hash-generator-status', 'Nothing to copy yet — generate first.', true);
          return;
        }
        PortalaTools.copyText(output.textContent, function () {
          PortalaTools.setStatus('sha512-hash-generator-status', 'Copied!', false);
        }, function () {
          PortalaTools.setStatus('sha512-hash-generator-status', 'Copy failed — select the output and copy manually.', true);
        });
      }

      function clearAll() {
        input.value = '';
        output.textContent = '';
        PortalaTools.setStatus('sha512-hash-generator-status', '', false);
      }

      var btn = function (id, fn) {
        var el = document.getElementById(id);
        if (el) { el.addEventListener('click', fn); }
      };
      btn('sha512-hash-generator-btn-generate', generate);
      btn('sha512-hash-generator-btn-copy', copy);
      btn('sha512-hash-generator-btn-clear', clearAll);
    });
  }

  /* ---------- Node test exports ---------- */

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
      bufferToHex: bufferToHex,
      sha512Hex: sha512Hex
    };
  }
})();
