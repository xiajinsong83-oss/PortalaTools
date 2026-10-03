/* Portala Tools — HTML Entity Encoder / Decoder */
(function () {
  'use strict';

  /* ---------- Pure functions ---------- */

  function encodeHtmlEntities(str) {
    return String(str == null ? '' : str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function decodeHtmlEntities(str) {
    return String(str == null ? '' : str)
      .replace(/&#x([0-9a-fA-F]+);/g, function (_, h) { return safeCodePoint(parseInt(h, 16)); })
      .replace(/&#(\d+);/g, function (_, n) { return safeCodePoint(parseInt(n, 10)); })
      .replace(/&nbsp;/g, ' ')
      .replace(/&quot;/g, '"')
      .replace(/&apos;|&#0?39;/g, "'")
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&amp;/g, '&');
  }

  function safeCodePoint(code) {
    if (isNaN(code) || code < 0 || code > 0x10ffff) { return ''; }
    return String.fromCodePoint(code);
  }

  /* ---------- DOM wiring (browser only) ---------- */

  if (typeof document !== 'undefined') {
    PortalaTools.onReady(function () {
      var input = document.getElementById('html-entity-encoder-input');
      var out = document.getElementById('html-entity-encoder-output');
      var status = document.getElementById('html-entity-encoder-status');
      if (!input || !out || !status) { return; }

      function encode() {
        try {
          out.textContent = encodeHtmlEntities(input.value);
          PortalaTools.setStatus('html-entity-encoder-status', 'Encoded successfully.', false);
        } catch (e) {
          out.textContent = '';
          PortalaTools.setStatus('html-entity-encoder-status', e.message, true);
        }
      }

      function decode() {
        try {
          out.textContent = decodeHtmlEntities(input.value);
          PortalaTools.setStatus('html-entity-encoder-status', 'Decoded successfully.', false);
        } catch (e) {
          out.textContent = '';
          PortalaTools.setStatus('html-entity-encoder-status', e.message, true);
        }
      }

      function copy() {
        if (!out.textContent) {
          PortalaTools.setStatus('html-entity-encoder-status', 'Nothing to copy yet — run Encode or Decode first.', true);
          return;
        }
        PortalaTools.copyText(out.textContent, function () {
          PortalaTools.setStatus('html-entity-encoder-status', 'Copied!', false);
        }, function () {
          PortalaTools.setStatus('html-entity-encoder-status', 'Copy failed.', true);
        });
      }

      function example() {
        input.value = '<p class="note">Tom & Jerry say "it\'s" 3 &lt; 5</p>';
        out.textContent = '';
        PortalaTools.setStatus('html-entity-encoder-status', 'Sample loaded. Try Encode then Decode.', false);
      }

      function clearAll() {
        input.value = '';
        out.textContent = '';
        PortalaTools.setStatus('html-entity-encoder-status', '', false);
      }

      var btn = function (id, fn) {
        var el = document.getElementById(id);
        if (el) { el.addEventListener('click', fn); }
      };
      btn('html-entity-encoder-btn-encode', encode);
      btn('html-entity-encoder-btn-decode', decode);
      btn('html-entity-encoder-btn-copy', copy);
      btn('html-entity-encoder-btn-example', example);
      btn('html-entity-encoder-btn-clear', clearAll);
    });
  }

  /* ---------- Node test exports ---------- */

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
      encodeHtmlEntities: encodeHtmlEntities,
      decodeHtmlEntities: decodeHtmlEntities
    };
  }
})();
