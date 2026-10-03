/* Portala Tools — Base64 Encode & Decode (UTF-8 safe) */
(function () {
  'use strict';

  /* ---------- Pure functions ---------- */

  function encodeBase64(str) {
    var bytes = new TextEncoder().encode(str);
    var bin = '';
    for (var i = 0; i < bytes.length; i++) {
      bin += String.fromCharCode(bytes[i]);
    }
    return btoa(bin);
  }

  function decodeBase64(b64) {
    var cleaned = String(b64).replace(/\s+/g, '');
    if (cleaned === '') { throw new Error('Input is empty.'); }
    if (!/^[A-Za-z0-9+/]*={0,2}$/.test(cleaned)) {
      throw new Error('Invalid Base64 — only A-Z, a-z, 0-9, +, / and = are allowed.');
    }
    if (cleaned.length % 4 === 1) {
      throw new Error('Invalid Base64 — length must be a multiple of 4.');
    }
    var bin = atob(cleaned);
    var bytes = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; i++) {
      bytes[i] = bin.charCodeAt(i);
    }
    return new TextDecoder().decode(bytes);
  }

  /* ---------- DOM wiring (browser only) ---------- */

  if (typeof document !== 'undefined') {
    PortalaTools.onReady(function () {
      var input = document.getElementById('base64-encoder-input');
      var output = document.getElementById('base64-encoder-output');
      var status = document.getElementById('base64-encoder-status');
      if (!input || !output || !status) { return; }

      var EXAMPLE = 'Hello, Portala Tools! Base64 works everywhere.';

      function encode() {
        try {
          output.textContent = encodeBase64(input.value);
          PortalaTools.setStatus('base64-encoder-status', 'Encoded successfully.', false);
        } catch (e) {
          output.textContent = '';
          PortalaTools.setStatus('base64-encoder-status', 'Encode failed: ' + e.message, true);
        }
      }

      function decode() {
        try {
          output.textContent = decodeBase64(input.value);
          PortalaTools.setStatus('base64-encoder-status', 'Decoded successfully.', false);
        } catch (e) {
          output.textContent = '';
          PortalaTools.setStatus('base64-encoder-status', 'Decode failed: ' + e.message, true);
        }
      }

      function copy() {
        if (!output.textContent) {
          PortalaTools.setStatus('base64-encoder-status', 'Nothing to copy yet — run an action first.', true);
          return;
        }
        PortalaTools.copyText(output.textContent, function () {
          PortalaTools.setStatus('base64-encoder-status', 'Copied!', false);
        }, function () {
          PortalaTools.setStatus('base64-encoder-status', 'Copy failed — select the output and copy manually.', true);
        });
      }

      function example() {
        input.value = EXAMPLE;
        output.textContent = '';
        PortalaTools.setStatus('base64-encoder-status', 'Sample loaded. Try Encode, then Decode the result.', false);
      }

      function clearAll() {
        input.value = '';
        output.textContent = '';
        PortalaTools.setStatus('base64-encoder-status', '', false);
      }

      var btn = function (id, fn) {
        var el = document.getElementById(id);
        if (el) { el.addEventListener('click', fn); }
      };
      btn('base64-encoder-btn-encode', encode);
      btn('base64-encoder-btn-decode', decode);
      btn('base64-encoder-btn-copy', copy);
      btn('base64-encoder-btn-example', example);
      btn('base64-encoder-btn-clear', clearAll);
    });
  }

  /* ---------- Node test exports ---------- */

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
      encodeBase64: encodeBase64,
      decodeBase64: decodeBase64
    };
  }
})();
