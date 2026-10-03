/* Portala Tools — Line Counter */
(function () {
  'use strict';

  /* ---------- Pure functions ---------- */

  function countLines(text) {
    text = String(text == null ? '' : text);
    var normalized = text.replace(/\r\n?/g, '\n');
    var characters = text.length;
    /* A single trailing newline does not create an extra empty line. */
    var body = normalized.length > 0 && normalized.charAt(normalized.length - 1) === '\n'
      ? normalized.slice(0, -1)
      : normalized;
    var lines = body === '' ? [] : body.split('\n');
    var nonEmpty = lines.filter(function (l) { return l.trim() !== ''; });
    return {
      lines: lines.length,
      nonEmptyLines: nonEmpty.length,
      characters: characters
    };
  }

  /* ---------- DOM wiring (browser only) ---------- */

  if (typeof document !== 'undefined') {
    PortalaTools.onReady(function () {
      var input = document.getElementById('line-counter-input');
      var outLines = document.getElementById('line-counter-lines');
      var outNonEmpty = document.getElementById('line-counter-nonempty');
      var outChars = document.getElementById('line-counter-chars');
      if (!input) { return; }

      function render() {
        var s = countLines(input.value);
        if (outLines) { outLines.textContent = s.lines; }
        if (outNonEmpty) { outNonEmpty.textContent = s.nonEmptyLines; }
        if (outChars) { outChars.textContent = s.characters; }
      }

      input.addEventListener('input', render);
      var clrBtn = document.getElementById('line-counter-btn-clear');
      if (clrBtn) { clrBtn.addEventListener('click', function () { input.value = ''; render(); }); }
      render();
    });
  }

  /* ---------- Node test exports ---------- */

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { countLines: countLines };
  }
})();
