/* Portala Tools — Online Timer & Stopwatch */
(function () {
  'use strict';

  /* ---------- Pure functions ---------- */

  /* Format a millisecond duration as HH:MM:SS. */
  function formatTime(ms) {
    var total = Math.max(0, Math.floor(ms / 1000));
    var h = Math.floor(total / 3600);
    var m = Math.floor((total % 3600) / 60);
    var s = total % 60;
    function p(n) { return String(n).padStart(2, '0'); }
    return p(h) + ':' + p(m) + ':' + p(s);
  }

  /* Convert minutes + seconds inputs into a millisecond duration. */
  function parseTimer(min, sec) {
    var m = parseInt(min, 10);
    var s = parseInt(sec, 10);
    if (isNaN(m) || isNaN(s) || m < 0 || s < 0) {
      throw new Error('Minutes and seconds must be non-negative whole numbers.');
    }
    return (m * 60 + s) * 1000;
  }

  /* ---------- DOM wiring (browser only) ---------- */

  if (typeof document !== 'undefined') {
    PortalaTools.onReady(function () {
      /* --- Countdown timer --- */
      var tMin = document.getElementById('timer-stopwatch-t-min');
      var tSec = document.getElementById('timer-stopwatch-t-sec');
      var tDisplay = document.getElementById('timer-stopwatch-t-display');
      var tStatus = document.getElementById('timer-stopwatch-t-status');
      var timerEndsAt = 0;
      var timerRemaining = 0;
      var timerTick = null;

      function paintTimer(ms) { if (tDisplay) { tDisplay.textContent = formatTime(ms); } }

      function stopTimerLoop() {
        if (timerTick) { clearInterval(timerTick); timerTick = null; }
      }

      function startTimer() {
        var total;
        try {
          total = parseTimer(tMin ? tMin.value : 0, tSec ? tSec.value : 0);
        } catch (e) {
          PortalaTools.setStatus('timer-stopwatch-t-status', e.message, true);
          return;
        }
        if (total <= 0) {
          PortalaTools.setStatus('timer-stopwatch-t-status', 'Set a time greater than zero.', true);
          return;
        }
        timerRemaining = total;
        timerEndsAt = Date.now() + timerRemaining;
        stopTimerLoop();
        timerTick = setInterval(function () {
          var left = timerEndsAt - Date.now();
          if (left <= 0) {
            stopTimerLoop();
            paintTimer(0);
            PortalaTools.setStatus('timer-stopwatch-t-status', "Time's up!", false);
          } else {
            paintTimer(left);
          }
        }, 200);
        PortalaTools.setStatus('timer-stopwatch-t-status', 'Timer running.', false);
      }

      function pauseTimer() {
        if (timerTick) {
          timerRemaining = Math.max(0, timerEndsAt - Date.now());
          stopTimerLoop();
          PortalaTools.setStatus('timer-stopwatch-t-status', 'Paused.', false);
        }
      }

      function resetTimer() {
        stopTimerLoop();
        timerRemaining = 0;
        paintTimer(0);
        PortalaTools.setStatus('timer-stopwatch-t-status', '', false);
      }

      /* --- Stopwatch --- */
      var sDisplay = document.getElementById('timer-stopwatch-s-display');
      var sStatus = document.getElementById('timer-stopwatch-s-status');
      var lapList = document.getElementById('timer-stopwatch-laps');
      var swStart = 0;
      var swElapsed = 0;
      var swTick = null;
      var lapCount = 0;

      function paintSw(ms) { if (sDisplay) { sDisplay.textContent = formatTime(ms); } }

      function startSw() {
        if (swTick) { return; }
        swStart = Date.now() - swElapsed;
        swTick = setInterval(function () {
          swElapsed = Date.now() - swStart;
          paintSw(swElapsed);
        }, 100);
        PortalaTools.setStatus('timer-stopwatch-s-status', 'Stopwatch running.', false);
      }

      function pauseSw() {
        if (swTick) {
          clearInterval(swTick);
          swTick = null;
          swElapsed = Date.now() - swStart;
          PortalaTools.setStatus('timer-stopwatch-s-status', 'Paused.', false);
        }
      }

      function lapSw() {
        if (!lapList) { return; }
        lapCount++;
        var li = document.createElement('li');
        li.textContent = 'Lap ' + lapCount + ' — ' + formatTime(swElapsed);
        lapList.appendChild(li);
      }

      function resetSw() {
        if (swTick) { clearInterval(swTick); swTick = null; }
        swElapsed = 0;
        lapCount = 0;
        paintSw(0);
        if (lapList) { lapList.innerHTML = ''; }
        PortalaTools.setStatus('timer-stopwatch-s-status', '', false);
      }

      function bind(id, fn) {
        var el = document.getElementById(id);
        if (el) { el.addEventListener('click', fn); }
      }
      bind('timer-stopwatch-t-start', startTimer);
      bind('timer-stopwatch-t-pause', pauseTimer);
      bind('timer-stopwatch-t-reset', resetTimer);
      bind('timer-stopwatch-s-start', startSw);
      bind('timer-stopwatch-s-pause', pauseSw);
      bind('timer-stopwatch-s-lap', lapSw);
      bind('timer-stopwatch-s-reset', resetSw);

      paintTimer(0);
      paintSw(0);
    });
  }

  /* ---------- Node test exports ---------- */

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { formatTime: formatTime, parseTimer: parseTimer };
  }
})();
