/* Portala Tools — QR Code Generator (qrcode-generator, MIT) */
(function () {
  'use strict';

  /* Resolve the UMD qrcode factory: browser global, else Node require. */
  var qrImpl = (typeof qrcode !== 'undefined') ? qrcode
    : (typeof require !== 'undefined' ? require('./vendor/qrcode.js') : null);

  /* ---------- Pure functions ---------- */

  function buildQr(text, level) {
    if (!qrImpl) { throw new Error('QR library not loaded.'); }
    if (!text) { throw new Error('Enter some text to encode.'); }
    var qr = qrImpl(0, level || 'M'); /* version 0 = auto-detect */
    qr.addData(text);
    qr.make();
    return qr;
  }

  function qrModuleCount(text, level) {
    return buildQr(text, level).getModuleCount();
  }

  /* Returns a 2D boolean matrix: true = dark module. */
  function qrMatrix(text, level) {
    var qr = buildQr(text, level);
    var n = qr.getModuleCount();
    var rows = [];
    for (var r = 0; r < n; r++) {
      var row = [];
      for (var c = 0; c < n; c++) { row.push(qr.isDark(r, c)); }
      rows.push(row);
    }
    return rows;
  }

  /* ---------- DOM wiring (browser only) ---------- */

  if (typeof document !== 'undefined') {
    PortalaTools.onReady(function () {
      var input = document.getElementById('qr-code-generator-input');
      var level = document.getElementById('qr-code-generator-level');
      var canvas = document.getElementById('qr-code-generator-canvas');
      var download = document.getElementById('qr-code-generator-download');
      var status = document.getElementById('qr-code-generator-status');
      if (!input || !level || !canvas || !download || !status) { return; }

      function draw(matrix) {
        var ctx = canvas.getContext('2d');
        var n = matrix.length;
        var quiet = 4; /* quiet zone modules on each side */
        var total = n + quiet * 2;
        var cell = Math.floor(canvas.width / total);
        canvas.height = canvas.width;
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#000000';
        for (var r = 0; r < n; r++) {
          for (var c = 0; c < n; c++) {
            if (matrix[r][c]) {
              ctx.fillRect((c + quiet) * cell, (r + quiet) * cell, cell, cell);
            }
          }
        }
      }

      function generate() {
        try {
          var matrix = qrMatrix(input.value, level.value);
          draw(matrix);
          download.href = canvas.toDataURL('image/png');
          download.style.display = 'inline-block';
          PortalaTools.setStatus('qr-code-generator-status',
            'QR code generated (' + matrix.length + 'x' + matrix.length + ' modules, level ' + level.value + ').', false);
        } catch (e) {
          PortalaTools.setStatus('qr-code-generator-status', 'Failed: ' + e.message, true);
        }
      }

      function example() {
        input.value = 'https://portalaser.cn';
        level.value = 'M';
        generate();
      }

      function clearAll() {
        input.value = '';
        var ctx = canvas.getContext('2d');
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        download.style.display = 'none';
        PortalaTools.setStatus('qr-code-generator-status', '', false);
      }

      var btn = function (id, fn) {
        var el = document.getElementById(id);
        if (el) { el.addEventListener('click', fn); }
      };
      btn('qr-code-generator-btn-generate', generate);
      btn('qr-code-generator-btn-example', example);
      btn('qr-code-generator-btn-clear', clearAll);
    });
  }

  /* ---------- Node test exports ---------- */

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
      buildQr: buildQr,
      qrModuleCount: qrModuleCount,
      qrMatrix: qrMatrix
    };
  }
})();
