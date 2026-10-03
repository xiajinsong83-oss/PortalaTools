/* Portala Tools — URL Encoder / Decoder */
(function () {
  'use strict';

  /* ---------- Pure functions ---------- */

  function encodeUrl(str) {
    /* encodeURIComponent escapes everything except A-Z a-z 0-9 - _ . ! ~ * ' ( ) */
    return encodeURIComponent(str);
  }

  function decodeUrl(str) {
    try {
      return decodeURIComponent(str);
    } catch (e) {
      /* URIError: malformed percent sequence */
      throw new Error('Malformed URL encoding: ' + e.message);
    }
  }

  /* ---------- DOM wiring (browser only) ---------- */

  if (typeof document !== 'undefined') {
    PortalaTools.onReady(function () {
      var input = document.getElementById('url-encoder-input');
      var output = document.getElementById('url-encoder-output');
      var status = document.getElementById('url-encoder-status');
      if (!input || !output || !status) { return; }

      var EXAMPLE = 'https://example.com/search?q=hello world&lang=zh&tag=测试';

      function encode() {
        try {
          output.textContent = encodeUrl(input.value);
          PortalaTools.setStatus('url-encoder-status', 'Encoded successfully.', false);
        } catch (e) {
          output.textContent = '';
          PortalaTools.setStatus('url-encoder-status', 'Encode failed: ' + e.message, true);
        }
      }

      function decode() {
        try {
          output.textContent = decodeUrl(input.value);
          PortalaTools.setStatus('url-encoder-status', 'Decoded successfully.', false);
        } catch (e) {
          output.textContent = '';
          PortalaTools.setStatus('url-encoder-status', 'Decode failed: ' + e.message, true);
        }
      }

      function copy() {
        if (!output.textContent) {
          PortalaTools.setStatus('url-encoder-status', 'Nothing to copy yet — run an action first.', true);
          return;
        }
        PortalaTools.copyText(output.textContent, function () {
          PortalaTools.setStatus('url-encoder-status', 'Copied!', false);
        }, function () {
          PortalaTools.setStatus('url-encoder-status', 'Copy failed — select the output and copy manually.', true);
        });
      }

      function example() {
        input.value = EXAMPLE;
        output.textContent = '';
        PortalaTools.setStatus('url-encoder-status', 'Sample loaded. Try Encode, then Decode the result.', false);
      }

      function clearAll() {
        input.value = '';
        output.textContent = '';
        PortalaTools.setStatus('url-encoder-status', '', false);
      }

      var btn = function (id, fn) {
        var el = document.getElementById(id);
        if (el) { el.addEventListener('click', fn); }
      };
      btn('url-encoder-btn-encode', encode);
      btn('url-encoder-btn-decode', decode);
      btn('url-encoder-btn-copy', copy);
      btn('url-encoder-btn-example', example);
      btn('url-encoder-btn-clear', clearAll);
    });
  }

  /* ---------- Node test exports ---------- */

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
      encodeUrl: encodeUrl,
      decodeUrl: decodeUrl
    };
  }
})();
