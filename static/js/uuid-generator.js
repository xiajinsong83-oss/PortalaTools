/* Portala Tools — UUID Generator (v4) */
(function () {
  'use strict';

  /* ---------- Pure functions ---------- */

  var UUID_V4_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

  function isValidUUID(uuid) {
    return UUID_V4_RE.test(String(uuid));
  }

  function generateUUID() {
    var g = (typeof crypto !== 'undefined') ? crypto : null;
    if (g && typeof g.randomUUID === 'function') {
      return g.randomUUID();
    }
    /* Manual v4 fallback using crypto.getRandomValues */
    var bytes = new Uint8Array(16);
    if (g && typeof g.getRandomValues === 'function') {
      g.getRandomValues(bytes);
    } else {
      for (var i = 0; i < 16; i++) { bytes[i] = Math.floor(Math.random() * 256); }
    }
    bytes[6] = (bytes[6] & 0x0f) | 0x40; /* version 4 */
    bytes[8] = (bytes[8] & 0x3f) | 0x80; /* variant 10xx xxxx */
    var hex = [];
    for (var j = 0; j < 16; j++) {
      hex.push(bytes[j].toString(16).padStart(2, '0'));
    }
    return hex[0] + hex[1] + hex[2] + hex[3] + '-' +
      hex[4] + hex[5] + '-' + hex[6] + hex[7] + '-' +
      hex[8] + hex[9] + '-' + hex[10] + hex[11] + hex[12] +
      hex[13] + hex[14] + hex[15];
  }

  function generateUUIDs(count) {
    var n = Math.max(1, Math.min(50, parseInt(count, 10) || 1));
    var out = [];
    for (var i = 0; i < n; i++) { out.push(generateUUID()); }
    return out;
  }

  /* ---------- DOM wiring (browser only) ---------- */

  if (typeof document !== 'undefined') {
    PortalaTools.onReady(function () {
      var count = document.getElementById('uuid-generator-input');
      var output = document.getElementById('uuid-generator-output');
      var status = document.getElementById('uuid-generator-status');
      if (!count || !output || !status) { return; }

      function generate() {
        try {
          var list = generateUUIDs(count.value);
          output.textContent = list.join('\n');
          PortalaTools.setStatus('uuid-generator-status',
            'Generated ' + list.length + ' UUID v4' + (list.length === 1 ? '' : 's') + '.', false);
        } catch (e) {
          output.textContent = '';
          PortalaTools.setStatus('uuid-generator-status', 'Error: ' + e.message, true);
        }
      }

      function copy() {
        if (!output.textContent) {
          PortalaTools.setStatus('uuid-generator-status', 'Nothing to copy yet — generate first.', true);
          return;
        }
        PortalaTools.copyText(output.textContent, function () {
          PortalaTools.setStatus('uuid-generator-status', 'Copied!', false);
        }, function () {
          PortalaTools.setStatus('uuid-generator-status', 'Copy failed — select the output and copy manually.', true);
        });
      }

      function clearAll() {
        count.value = 5;
        output.textContent = '';
        PortalaTools.setStatus('uuid-generator-status', '', false);
      }

      var btn = function (id, fn) {
        var el = document.getElementById(id);
        if (el) { el.addEventListener('click', fn); }
      };
      btn('uuid-generator-btn-generate', generate);
      btn('uuid-generator-btn-copy', copy);
      btn('uuid-generator-btn-clear', clearAll);
    });
  }

  /* ---------- Node test exports ---------- */

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
      generateUUID: generateUUID,
      generateUUIDs: generateUUIDs,
      isValidUUID: isValidUUID
    };
  }
})();
