/* Portala Tools — HEX <-> RGB Color Converter */
(function () {
  'use strict';

  /* ---------- Pure functions ---------- */

  /* Accepts #RGB or #RRGGBB; returns {r,g,b}. Throws on invalid input. */
  function hexToRgb(hex) {
    var s = String(hex).trim().replace(/^#/, '');
    if (/^[0-9a-fA-F]{3}$/.test(s)) {
      s = s.charAt(0) + s.charAt(0) + s.charAt(1) + s.charAt(1) + s.charAt(2) + s.charAt(2);
    }
    if (!/^[0-9a-fA-F]{6}$/.test(s)) {
      throw new Error('Invalid HEX color. Use #RGB or #RRGGBB (e.g. #f80 or #ff8000).');
    }
    var n = parseInt(s, 16);
    return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
  }

  function rgbToCss(rgb) {
    return 'rgb(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ')';
  }

  /* Clamp each channel to 0-255 and produce #rrggbb. Throws on non-numeric input. */
  function rgbToHex(r, g, b) {
    var nums = [r, g, b].map(function (v) {
      var n = Number(v);
      if (isNaN(n)) { throw new Error('R, G and B must be numbers.'); }
      n = Math.max(0, Math.min(255, Math.round(n)));
      return n;
    });
    function hx(v) { return v.toString(16).padStart(2, '0'); }
    return '#' + hx(nums[0]) + hx(nums[1]) + hx(nums[2]);
  }

  /* ---------- DOM wiring (browser only) ---------- */

  if (typeof document !== 'undefined') {
    PortalaTools.onReady(function () {
      var hexInput = document.getElementById('hex-to-rgb-converter-hex');
      var rInput = document.getElementById('hex-to-rgb-converter-r');
      var gInput = document.getElementById('hex-to-rgb-converter-g');
      var bInput = document.getElementById('hex-to-rgb-converter-b');
      var output = document.getElementById('hex-to-rgb-converter-output');
      var swatch = document.getElementById('hex-to-rgb-converter-swatch');
      var status = document.getElementById('hex-to-rgb-converter-status');
      if (!hexInput || !output || !status) { return; }

      function hexToRgbView() {
        try {
          var rgb = hexToRgb(hexInput.value);
          output.textContent = 'r: ' + rgb.r + '\ng: ' + rgb.g + '\nb: ' + rgb.b + '\n' + rgbToCss(rgb);
          swatch.style.background = rgbToCss(rgb);
          PortalaTools.setStatus('hex-to-rgb-converter-status', 'Converted HEX to RGB.', false);
        } catch (e) {
          output.textContent = '';
          swatch.style.background = '#fff';
          PortalaTools.setStatus('hex-to-rgb-converter-status', e.message, true);
        }
      }

      function rgbToHexView() {
        try {
          var hex = rgbToHex(rInput.value, gInput.value, bInput.value);
          output.textContent = 'HEX: ' + hex;
          swatch.style.background = hex;
          PortalaTools.setStatus('hex-to-rgb-converter-status', 'Converted RGB to HEX.', false);
        } catch (e) {
          output.textContent = '';
          swatch.style.background = '#fff';
          PortalaTools.setStatus('hex-to-rgb-converter-status', e.message, true);
        }
      }

      var btn = function (id, fn) {
        var el = document.getElementById(id);
        if (el) { el.addEventListener('click', fn); }
      };
      btn('hex-to-rgb-converter-btn-h2r', hexToRgbView);
      btn('hex-to-rgb-converter-btn-r2h', rgbToHexView);
    });
  }

  /* ---------- Node test exports ---------- */

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
      hexToRgb: hexToRgb,
      rgbToCss: rgbToCss,
      rgbToHex: rgbToHex
    };
  }
})();
