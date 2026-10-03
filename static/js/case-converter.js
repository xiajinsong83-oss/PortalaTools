/* Portala Tools — Case Converter (pure transformers) */
(function () {
  'use strict';

  /* ---------- Pure functions ---------- */

  function words(str) {
    return String(str == null ? '' : str)
      .toLowerCase()
      .split(/[^a-z0-9]+/)
      .filter(Boolean);
  }

  function capitalize(w) {
    return w.charAt(0).toUpperCase() + w.slice(1);
  }

  function toUpperCase(str) { return String(str == null ? '' : str).toUpperCase(); }
  function toLowerCase(str) { return String(str == null ? '' : str).toLowerCase(); }
  function toTitleCase(str) { return words(str).map(capitalize).join(' '); }
  function toSentenceCase(str) {
    var w = words(str);
    if (!w.length) { return ''; }
    return capitalize(w[0]) + w.slice(1).join(' ');
  }
  function toCamelCase(str) {
    var w = words(str);
    if (!w.length) { return ''; }
    return w[0] + w.slice(1).map(capitalize).join('');
  }
  function toPascalCase(str) { return words(str).map(capitalize).join(''); }
  function toSnakeCase(str) { return words(str).join('_'); }
  function toKebabCase(str) { return words(str).join('-'); }

  /* ---------- DOM wiring (browser only) ---------- */

  if (typeof document !== 'undefined') {
    PortalaTools.onReady(function () {
      var input = document.getElementById('case-converter-input');
      var out = document.getElementById('case-converter-output');
      var status = document.getElementById('case-converter-status');
      if (!input || !out || !status) { return; }

      var transforms = {
        upper: [toUpperCase, 'UPPERCASE'],
        lower: [toLowerCase, 'lowercase'],
        title: [toTitleCase, 'Title Case'],
        sentence: [toSentenceCase, 'Sentence case'],
        camel: [toCamelCase, 'camelCase'],
        pascal: [toPascalCase, 'PascalCase'],
        snake: [toSnakeCase, 'snake_case'],
        kebab: [toKebabCase, 'kebab-case']
      };

      function run(kind) {
        var pair = transforms[kind];
        if (!pair) { return; }
        out.textContent = pair[0](input.value);
        PortalaTools.setStatus('case-converter-status', 'Converted to ' + pair[1] + '.', false);
      }

      function copy() {
        if (!out.textContent) {
          PortalaTools.setStatus('case-converter-status', 'Nothing to copy yet — pick a format first.', true);
          return;
        }
        PortalaTools.copyText(out.textContent, function () {
          PortalaTools.setStatus('case-converter-status', 'Copied!', false);
        }, function () {
          PortalaTools.setStatus('case-converter-status', 'Copy failed.', true);
        });
      }

      function example() {
        input.value = 'hello world from portala tools';
        out.textContent = '';
        PortalaTools.setStatus('case-converter-status', 'Sample loaded. Pick a target format.', false);
      }

      function clearAll() {
        input.value = '';
        out.textContent = '';
        PortalaTools.setStatus('case-converter-status', '', false);
      }

      var btn = function (id, fn) {
        var el = document.getElementById(id);
        if (el) { el.addEventListener('click', fn); }
      };
      Object.keys(transforms).forEach(function (k) {
        btn('case-converter-btn-' + k, function () { run(k); });
      });
      btn('case-converter-btn-copy', copy);
      btn('case-converter-btn-example', example);
      btn('case-converter-btn-clear', clearAll);
    });
  }

  /* ---------- Node test exports ---------- */

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
      toUpperCase: toUpperCase,
      toLowerCase: toLowerCase,
      toTitleCase: toTitleCase,
      toSentenceCase: toSentenceCase,
      toCamelCase: toCamelCase,
      toPascalCase: toPascalCase,
      toSnakeCase: toSnakeCase,
      toKebabCase: toKebabCase
    };
  }
})();
