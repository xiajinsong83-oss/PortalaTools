/* Portala Tools — Text Diff Checker (LCS line diff) */
(function () {
  'use strict';

  /* ---------- Pure functions ---------- */

  function diffLines(origLines, newLines) {
    var m = origLines.length, n = newLines.length;
    var dp = [];
    for (var i = 0; i <= m; i++) {
      dp.push(new Array(n + 1).fill(0));
    }
    for (var a = 1; a <= m; a++) {
      for (var b = 1; b <= n; b++) {
        if (origLines[a - 1] === newLines[b - 1]) {
          dp[a][b] = dp[a - 1][b - 1] + 1;
        } else {
          dp[a][b] = Math.max(dp[a - 1][b], dp[a][b - 1]);
        }
      }
    }
    var result = [];
    var i2 = m, j2 = n;
    while (i2 > 0 && j2 > 0) {
      if (origLines[i2 - 1] === newLines[j2 - 1]) {
        result.push({ type: 'equal', value: origLines[i2 - 1] });
        i2--; j2--;
      } else if (dp[i2 - 1][j2] > dp[i2][j2 - 1]) {
        result.push({ type: 'removed', value: origLines[i2 - 1] });
        i2--;
      } else {
        result.push({ type: 'added', value: newLines[j2 - 1] });
        j2--;
      }
    }
    while (i2 > 0) { result.push({ type: 'removed', value: origLines[i2 - 1] }); i2--; }
    while (j2 > 0) { result.push({ type: 'added', value: newLines[j2 - 1] }); j2--; }
    result.reverse();
    return result;
  }

  function computeDiff(origText, newText) {
    var origLines = String(origText).split('\n');
    var newLines = String(newText).split('\n');
    var segments = diffLines(origLines, newLines);
    var counts = { equal: 0, removed: 0, added: 0 };
    segments.forEach(function (s) { counts[s.type]++; });
    return { segments: segments, counts: counts };
  }

  function renderDiff(result) {
    return result.segments.map(function (s) {
      if (s.type === 'added') { return '+ ' + s.value; }
      if (s.type === 'removed') { return '- ' + s.value; }
      return '  ' + s.value;
    }).join('\n');
  }

  /* ---------- DOM wiring (browser only) ---------- */

  if (typeof document !== 'undefined') {
    PortalaTools.onReady(function () {
      var orig = document.getElementById('text-diff-original');
      var changed = document.getElementById('text-diff-changed');
      var output = document.getElementById('text-diff-output');
      var status = document.getElementById('text-diff-status');
      if (!orig || !changed || !output || !status) { return; }

      function compare() {
        try {
          var r = computeDiff(orig.value, changed.value);
          output.textContent = renderDiff(r);
          PortalaTools.setStatus('text-diff-status',
            r.counts.added + ' added, ' + r.counts.removed + ' removed, ' +
            r.counts.equal + ' unchanged lines.', false);
        } catch (e) {
          output.textContent = '';
          PortalaTools.setStatus('text-diff-status', 'Error: ' + e.message, true);
        }
      }

      function example() {
        orig.value = 'line one\nline two\nline three';
        changed.value = 'line one\nline 2 edited\nline three';
        output.textContent = '';
        PortalaTools.setStatus('text-diff-status', 'Sample loaded. Press Compare.', false);
      }

      function clearAll() {
        orig.value = ''; changed.value = ''; output.textContent = '';
        PortalaTools.setStatus('text-diff-status', '', false);
      }

      var btn = function (id, fn) {
        var el = document.getElementById(id);
        if (el) { el.addEventListener('click', fn); }
      };
      btn('text-diff-btn-compare', compare);
      btn('text-diff-btn-example', example);
      btn('text-diff-btn-clear', clearAll);
    });
  }

  /* ---------- Node test exports ---------- */

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
      diffLines: diffLines,
      computeDiff: computeDiff,
      renderDiff: renderDiff
    };
  }
})();
