/* Portala Tools — Regex Tester */
(function () {
  'use strict';

  /* ---------- Pure functions ---------- */

  /*
   * Run `pattern` with `flags` against `text`.
   * Returns { matches: [{match, index}], count }.
   * Throws SyntaxError when the pattern is invalid.
   */
  function testPattern(pattern, flags, text) {
    var re = new RegExp(pattern, flags); /* throws on invalid pattern */
    var matches = [];
    var m;
    if (flags.indexOf('g') === -1) {
      m = re.exec(text);
      if (m) { matches.push({ match: m[0], index: m.index }); }
    } else {
      while ((m = re.exec(text)) !== null) {
        matches.push({ match: m[0], index: m.index });
        /* Prevent infinite loop on zero-width matches. */
        if (m.index === re.lastIndex) { re.lastIndex++; }
      }
    }
    return { matches: matches, count: matches.length };
  }

  /* Collect the flags currently ticked in the checkboxes. */
  function collectFlags(g, i, m, s, u) {
    return (g ? 'g' : '') + (i ? 'i' : '') + (m ? 'm' : '') + (s ? 's' : '') + (u ? 'u' : '');
  }

  /* ---------- DOM wiring (browser only) ---------- */

  if (typeof document !== 'undefined') {
    PortalaTools.onReady(function () {
      var pattern = document.getElementById('regex-tester-pattern');
      var input = document.getElementById('regex-tester-input');
      var output = document.getElementById('regex-tester-output');
      var status = document.getElementById('regex-tester-status');
      if (!pattern || !input || !output || !status) { return; }

      function flagVal(id) {
        var el = document.getElementById(id);
        return el ? el.checked : false;
      }

      function run() {
        try {
          var flags = collectFlags(
            flagVal('regex-tester-flag-g'),
            flagVal('regex-tester-flag-i'),
            flagVal('regex-tester-flag-m'),
            flagVal('regex-tester-flag-s'),
            flagVal('regex-tester-flag-u')
          );
          var r = testPattern(pattern.value, flags, input.value);
          if (r.count === 0) {
            output.textContent = 'No matches.';
          } else {
            var lines = [];
            for (var k = 0; k < r.matches.length; k++) {
              lines.push((k + 1) + '. index ' + r.matches[k].index + ': ' + JSON.stringify(r.matches[k].match));
            }
            output.textContent = lines.join('\n');
          }
          PortalaTools.setStatus('regex-tester-status', r.count + ' match(es) found.', false);
        } catch (e) {
          output.textContent = '';
          PortalaTools.setStatus('regex-tester-status', 'Invalid pattern: ' + e.message, true);
        }
      }

      function example() {
        pattern.value = '\\b\\w+@\\w+\\.\\w+\\b';
        input.value = 'Contact alice@example.com or bob@test.org today.\nNo email here, but carol@dev.io works.';
        run();
      }

      function clearAll() {
        pattern.value = '';
        input.value = '';
        output.textContent = '';
        PortalaTools.setStatus('regex-tester-status', '', false);
      }

      var btn = function (id, fn) {
        var el = document.getElementById(id);
        if (el) { el.addEventListener('click', fn); }
      };
      btn('regex-tester-btn-test', run);
      btn('regex-tester-btn-example', example);
      btn('regex-tester-btn-clear', clearAll);
    });
  }

  /* ---------- Node test exports ---------- */

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
      testPattern: testPattern,
      collectFlags: collectFlags
    };
  }
})();
