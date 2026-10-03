/* Portala Tools — Word Counter */
(function () {
  'use strict';

  /* ---------- Pure functions ---------- */

  function countStats(text) {
    text = String(text == null ? '' : text);
    var characters = text.length;
    var charactersNoSpaces = text.replace(/\s/g, '').length;
    var trimmed = text.trim();
    var words = trimmed === '' ? 0 : trimmed.split(/\s+/).length;
    var sentences = (text.match(/[.!?]+/g) || []).length;
    var paragraphs = text.split(/\n+/).filter(function (p) {
      return p.trim() !== '';
    }).length;
    var readingTimeMinutes = Math.round((words / 200) * 10) / 10; /* 200 wpm */
    return {
      words: words,
      characters: characters,
      charactersNoSpaces: charactersNoSpaces,
      sentences: sentences,
      paragraphs: paragraphs,
      readingTimeMinutes: readingTimeMinutes
    };
  }

  /* ---------- DOM wiring (browser only) ---------- */

  if (typeof document !== 'undefined') {
    PortalaTools.onReady(function () {
      var input = document.getElementById('word-counter-input');
      var outWords = document.getElementById('word-counter-words');
      var outChars = document.getElementById('word-counter-chars');
      var outCharsNoSpaces = document.getElementById('word-counter-chars-no-spaces');
      var outSentences = document.getElementById('word-counter-sentences');
      var outParagraphs = document.getElementById('word-counter-paragraphs');
      var outReading = document.getElementById('word-counter-reading');
      if (!input) { return; }

      function render() {
        var s = countStats(input.value);
        if (outWords) { outWords.textContent = s.words; }
        if (outChars) { outChars.textContent = s.characters; }
        if (outCharsNoSpaces) { outCharsNoSpaces.textContent = s.charactersNoSpaces; }
        if (outSentences) { outSentences.textContent = s.sentences; }
        if (outParagraphs) { outParagraphs.textContent = s.paragraphs; }
        if (outReading) {
          outReading.textContent = s.readingTimeMinutes <= 0
            ? '0 min'
            : (s.readingTimeMinutes < 1 ? '< 1 min' : s.readingTimeMinutes + ' min');
        }
      }

      input.addEventListener('input', render);
      var exBtn = document.getElementById('word-counter-btn-example');
      if (exBtn) {
        exBtn.addEventListener('click', function () {
          input.value = 'The quick brown fox jumps over the lazy dog. ' +
            'Word counting is useful for writers, students and marketers who ' +
            'need to stay within a length limit!\n\n' +
            'This is a second paragraph, which lets the paragraph counter update live.';
          render();
        });
      }
      var clrBtn = document.getElementById('word-counter-btn-clear');
      if (clrBtn) {
        clrBtn.addEventListener('click', function () {
          input.value = '';
          render();
        });
      }
      render();
    });
  }

  /* ---------- Node test exports ---------- */

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { countStats: countStats };
  }
})();
