/* Portala Tools — Color Contrast Checker (WCAG 2.1) */
(function () {
  'use strict';

  /* ---------- Pure functions ---------- */

  function hexToRgb(hex) {
    var h = String(hex).replace('#', '').trim();
    if (h.length === 3) {
      h = h.split('').map(function (c) { return c + c; }).join('');
    }
    if (!/^[0-9a-fA-F]{6}$/.test(h)) {
      throw new Error('Invalid hex color: ' + hex);
    }
    return {
      r: parseInt(h.substr(0, 2), 16),
      g: parseInt(h.substr(2, 2), 16),
      b: parseInt(h.substr(4, 2), 16)
    };
  }

  function relativeLuminance(r, g, b) {
    function channel(c) {
      c = c / 255;
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    }
    return 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);
  }

  function contrastRatio(hex1, hex2) {
    var c1 = hexToRgb(hex1);
    var c2 = hexToRgb(hex2);
    var l1 = relativeLuminance(c1.r, c1.g, c1.b);
    var l2 = relativeLuminance(c2.r, c2.g, c2.b);
    var lighter = Math.max(l1, l2);
    var darker = Math.min(l1, l2);
    return (lighter + 0.05) / (darker + 0.05);
  }

  function getVerdicts(ratio) {
    return {
      normalAA: ratio >= 4.5,
      normalAAA: ratio >= 7,
      largeAA: ratio >= 3,
      largeAAA: ratio >= 4.5
    };
  }

  /* ---------- DOM wiring (browser only) ---------- */

  if (typeof document !== 'undefined') {
    PortalaTools.onReady(function () {
      var fg = document.getElementById('color-contrast-checker-fg');
      var bg = document.getElementById('color-contrast-checker-bg');
      var fgPicker = document.getElementById('color-contrast-checker-fg-picker');
      var bgPicker = document.getElementById('color-contrast-checker-bg-picker');
      var output = document.getElementById('color-contrast-checker-output');
      var status = document.getElementById('color-contrast-checker-status');
      if (!fg || !bg || !output || !status) { return; }

      function calc() {
        try {
          var ratio = contrastRatio(fg.value, bg.value);
          var v = getVerdicts(ratio);
          output.textContent =
            'Contrast ratio: ' + ratio.toFixed(2) + ':1\n' +
            'Normal text  - AA: ' + (v.normalAA ? 'PASS' : 'FAIL') +
            '  AAA: ' + (v.normalAAA ? 'PASS' : 'FAIL') + '\n' +
            'Large text   - AA: ' + (v.largeAA ? 'PASS' : 'FAIL') +
            '  AAA: ' + (v.largeAAA ? 'PASS' : 'FAIL');
          PortalaTools.setStatus('color-contrast-checker-status', 'Checked.', false);
        } catch (e) {
          output.textContent = '';
          PortalaTools.setStatus('color-contrast-checker-status', e.message, true);
        }
      }

      function syncPicker(picker, text) {
        if (picker && /^#[0-9a-fA-F]{6}$/.test(text.value)) { picker.value = text.value; }
      }

      fg.addEventListener('input', function () { syncPicker(fgPicker, fg); calc(); });
      bg.addEventListener('input', function () { syncPicker(bgPicker, bg); calc(); });
      if (fgPicker) { fgPicker.addEventListener('input', function () { fg.value = fgPicker.value; calc(); }); }
      if (bgPicker) { bgPicker.addEventListener('input', function () { bg.value = bgPicker.value; calc(); }); }
    });
  }

  /* ---------- Node test exports ---------- */

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
      hexToRgb: hexToRgb,
      relativeLuminance: relativeLuminance,
      contrastRatio: contrastRatio,
      getVerdicts: getVerdicts
    };
  }
})();
