/* Portala Tools — Lorem Ipsum Generator (public-domain Cicero word pool) */
(function () {
  'use strict';

  /* ---------- Pure functions ---------- */

  var WORDS = (
    'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ' +
    'incididunt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud ' +
    'exercitation ullamco laboris nisi aliquip ex ea commodo consequat duis aute ' +
    'irure reprehenderit in voluptate velit esse cillum eu fugiat nulla pariatur ' +
    'excepteur sint occaecat cupidatat non proident sunt culpa qui officia deserunt ' +
    'mollit anim id est laborum at vero eos accusamus iusto odio dignissimos ' +
    'blanditiis praesent voluptatum deleniti atque corrupti quos dolores quas ' +
    'molestias excepturi occaecati cupiditate provident similique mollitia animi ' +
    'laborum dolorum fuga harum quidem rerum facilis expedita distinctio nam libero'
  ).split(' ');

  function generateLorem(numParagraphs, wordsPerParagraph, rand) {
    rand = rand || Math.random;
    numParagraphs = Math.max(1, Math.min(10, parseInt(numParagraphs, 10) || 3));
    wordsPerParagraph = Math.max(1, Math.min(100, parseInt(wordsPerParagraph, 10) || 40));

    function makeParagraph() {
      var words = [];
      for (var i = 0; i < wordsPerParagraph; i++) {
        words.push(WORDS[Math.floor(rand() * WORDS.length)]);
      }
      var s = words.join(' ');
      return s.charAt(0).toUpperCase() + s.slice(1) + '.';
    }

    var paras = [];
    for (var p = 0; p < numParagraphs; p++) { paras.push(makeParagraph()); }
    return paras.join('\n\n');
  }

  /* ---------- DOM wiring (browser only) ---------- */

  if (typeof document !== 'undefined') {
    PortalaTools.onReady(function () {
      var out = document.getElementById('lorem-ipsum-generator-output');
      var status = document.getElementById('lorem-ipsum-generator-status');
      var parasEl = document.getElementById('lorem-ipsum-generator-paragraphs');
      var wordsEl = document.getElementById('lorem-ipsum-generator-words');
      if (!out || !status) { return; }

      function generate() {
        var text = generateLorem(
          parasEl ? parasEl.value : 3,
          wordsEl ? wordsEl.value : 40
        );
        out.textContent = text;
        var count = text.split(/\s+/).filter(Boolean).length;
        PortalaTools.setStatus('lorem-ipsum-generator-status',
          'Generated ' + count + ' words.', false);
      }

      function copy() {
        if (!out.textContent) {
          PortalaTools.setStatus('lorem-ipsum-generator-status', 'Nothing to copy yet.', true);
          return;
        }
        PortalaTools.copyText(out.textContent, function () {
          PortalaTools.setStatus('lorem-ipsum-generator-status', 'Copied!', false);
        }, function () {
          PortalaTools.setStatus('lorem-ipsum-generator-status', 'Copy failed.', true);
        });
      }

      var genBtn = document.getElementById('lorem-ipsum-generator-btn-generate');
      if (genBtn) { genBtn.addEventListener('click', generate); }
      var copyBtn = document.getElementById('lorem-ipsum-generator-btn-copy');
      if (copyBtn) { copyBtn.addEventListener('click', copy); }
    });
  }

  /* ---------- Node test exports ---------- */

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { generateLorem: generateLorem, WORDS: WORDS };
  }
})();
