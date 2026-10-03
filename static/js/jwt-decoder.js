/* Portala Tools — JWT Decoder (base64url, UTF-8 safe) */
(function () {
  'use strict';

  /* ---------- Pure functions ---------- */

  /* Decode a base64url string (dash/underscore, optional padding) to UTF-8 text. */
  function base64urlDecode(str) {
    var s = String(str).replace(/-/g, '+').replace(/_/g, '/');
    while (s.length % 4 !== 0) { s += '='; }
    var bin = atob(s);
    var bytes = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; i++) { bytes[i] = bin.charCodeAt(i); }
    return new TextDecoder().decode(bytes);
  }

  /* Decode a JWT into parsed header/payload plus the raw signature. */
  function decodeJwt(token) {
    var parts = String(token).trim().split('.');
    if (parts.length !== 3) {
      throw new Error('A JWT must have 3 dot-separated parts (header.payload.signature).');
    }
    var header;
    var payload;
    try {
      header = JSON.parse(base64urlDecode(parts[0]));
    } catch (e) {
      throw new Error('Could not decode the header: ' + e.message);
    }
    try {
      payload = JSON.parse(base64urlDecode(parts[1]));
    } catch (e) {
      throw new Error('Could not decode the payload: ' + e.message);
    }
    return {
      header: header,
      payload: payload,
      signature: parts[2],
      exp: typeof payload.exp === 'number' ? payload.exp : null,
      iat: typeof payload.iat === 'number' ? payload.iat : null
    };
  }

  /* Epoch seconds -> readable UTC string. */
  function unixSecondsToUtc(sec) {
    return new Date(sec * 1000).toUTCString();
  }

  /* ---------- DOM wiring (browser only) ---------- */

  if (typeof document !== 'undefined') {
    PortalaTools.onReady(function () {
      var input = document.getElementById('jwt-decoder-input');
      var output = document.getElementById('jwt-decoder-output');
      var status = document.getElementById('jwt-decoder-status');
      if (!input || !output || !status) { return; }

      var EXAMPLE = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

      function decode() {
        try {
          var r = decodeJwt(input.value);
          var lines = [];
          lines.push('HEADER:');
          lines.push(JSON.stringify(r.header, null, 2));
          lines.push('');
          lines.push('PAYLOAD:');
          lines.push(JSON.stringify(r.payload, null, 2));
          lines.push('');
          lines.push('SIGNATURE:');
          lines.push(r.signature);
          if (r.iat !== null) {
            lines.push('');
            lines.push('Issued at (iat):   ' + r.iat + '  ->  ' + unixSecondsToUtc(r.iat));
          }
          if (r.exp !== null) {
            lines.push('Expires (exp):     ' + r.exp + '  ->  ' + unixSecondsToUtc(r.exp));
          }
          output.textContent = lines.join('\n');
          PortalaTools.setStatus('jwt-decoder-status', 'Decoded successfully.', false);
        } catch (e) {
          output.textContent = '';
          PortalaTools.setStatus('jwt-decoder-status', 'Decode failed: ' + e.message, true);
        }
      }

      function example() {
        input.value = EXAMPLE;
        decode();
      }

      function clearAll() {
        input.value = '';
        output.textContent = '';
        PortalaTools.setStatus('jwt-decoder-status', '', false);
      }

      var btn = function (id, fn) {
        var el = document.getElementById(id);
        if (el) { el.addEventListener('click', fn); }
      };
      btn('jwt-decoder-btn-decode', decode);
      btn('jwt-decoder-btn-example', example);
      btn('jwt-decoder-btn-clear', clearAll);
    });
  }

  /* ---------- Node test exports ---------- */

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
      base64urlDecode: base64urlDecode,
      decodeJwt: decodeJwt,
      unixSecondsToUtc: unixSecondsToUtc
    };
  }
})();
