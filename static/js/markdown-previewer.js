/* Portala Tools — Markdown Previewer (marked v12, MIT) */
(function () {
  'use strict';

  /* Resolve the UMD marked: browser global, else Node require. */
  var markedImpl = (typeof marked !== 'undefined') ? marked
    : (typeof require !== 'undefined' ? require('./vendor/marked.min.js') : null);

  var SAMPLE = '# Markdown Preview\n\n' +
    'This is a **live** preview. Edit the text on the left and watch it update.\n\n' +
    '## Features\n\n' +
    '- Headings, *italic* and **bold**\n' +
    '- [Links](https://portalaser.cn)\n' +
    '- Inline `code` and code blocks\n\n' +
    '> Block quotes work too.\n\n' +
    '```js\nconsole.log("Hello, Markdown!");\n```';

  /* ---------- Pure functions ---------- */

  function renderMarkdown(md) {
    if (!markedImpl) { throw new Error('Markdown library not loaded.'); }
    return markedImpl.parse(String(md));
  }

  /* ---------- DOM wiring (browser only) ---------- */

  if (typeof document !== 'undefined') {
    PortalaTools.onReady(function () {
      var input = document.getElementById('markdown-previewer-input');
      var output = document.getElementById('markdown-previewer-output');
      var showHtml = document.getElementById('markdown-previewer-show-html');
      var status = document.getElementById('markdown-previewer-status');
      if (!input || !output || !showHtml) { return; }

      function render() {
        try {
          var html = renderMarkdown(input.value);
          if (showHtml.checked) {
            output.textContent = html; /* show raw source as text */
          } else {
            output.innerHTML = html; /* rendered preview */
          }
          PortalaTools.setStatus('markdown-previewer-status', 'Rendered.', false);
        } catch (e) {
          output.innerHTML = '';
          PortalaTools.setStatus('markdown-previewer-status', 'Render error: ' + e.message, true);
        }
      }

      function example() {
        input.value = SAMPLE;
        render();
      }

      function clearAll() {
        input.value = '';
        output.innerHTML = '';
        PortalaTools.setStatus('markdown-previewer-status', '', false);
      }

      input.addEventListener('input', render);
      showHtml.addEventListener('change', render);

      var btn = function (id, fn) {
        var el = document.getElementById(id);
        if (el) { el.addEventListener('click', fn); }
      };
      btn('markdown-previewer-btn-example', example);
      btn('markdown-previewer-btn-clear', clearAll);

      /* Load the sample by default. */
      example();
    });
  }

  /* ---------- Node test exports ---------- */

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { renderMarkdown: renderMarkdown };
  }
})();
