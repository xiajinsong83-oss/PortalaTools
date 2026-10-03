/* Portala Tools — Unix Timestamp Converter */
(function () {
  'use strict';

  /* ---------- Pure functions ---------- */

  function pad2(n) { return n < 10 ? '0' + n : '' + n; }

  /* Normalize raw numeric input to whole seconds; ms flag divides by 1000. */
  function parseTimestampInput(raw, isMs) {
    var n = Number(raw);
    if (raw === '' || raw === null || isNaN(n)) {
      throw new Error('Enter a valid number.');
    }
    return isMs ? Math.floor(n / 1000) : Math.floor(n);
  }

  /* Seconds -> strict UTC ISO string: YYYY-MM-DDTHH:mm:ssZ */
  function unixToUtcIso(seconds) {
    var d = new Date(seconds * 1000);
    if (isNaN(d.getTime())) { throw new Error('Invalid timestamp.'); }
    return d.getUTCFullYear() + '-' +
      pad2(d.getUTCMonth() + 1) + '-' +
      pad2(d.getUTCDate()) + 'T' +
      pad2(d.getUTCHours()) + ':' +
      pad2(d.getUTCMinutes()) + ':' +
      pad2(d.getUTCSeconds()) + 'Z';
  }

  /* "YYYY-MM-DDTHH:mm:ss" (datetime-local) interpreted as local time -> seconds. */
  function localInputToUnix(value) {
    if (!value) { throw new Error('Pick a date and time.'); }
    var d = new Date(value);
    if (isNaN(d.getTime())) { throw new Error('Invalid date/time.'); }
    return Math.floor(d.getTime() / 1000);
  }

  function nowSeconds() {
    return Math.floor(Date.now() / 1000);
  }

  /* ---------- DOM wiring (browser only) ---------- */

  if (typeof document !== 'undefined') {
    PortalaTools.onReady(function () {
      var input = document.getElementById('timestamp-converter-input');
      var msToggle = document.getElementById('timestamp-converter-ms');
      var output = document.getElementById('timestamp-converter-output');
      var dt = document.getElementById('timestamp-converter-datetime');
      var output2 = document.getElementById('timestamp-converter-output2');
      if (!input || !output || !dt || !output2) { return; }

      function toLocalDisplay(seconds) {
        var d = new Date(seconds * 1000);
        return d.toString();
      }

      function convertTimestamp() {
        try {
          var sec = parseTimestampInput(input.value, msToggle.checked);
          var utc = unixToUtcIso(sec);
          output.textContent = 'UTC:   ' + utc + '\nLocal: ' + toLocalDisplay(sec);
          PortalaTools.setStatus('timestamp-converter-status', 'Converted timestamp to date.', false);
        } catch (e) {
          output.textContent = '';
          PortalaTools.setStatus('timestamp-converter-status', e.message, true);
        }
      }

      function convertDate() {
        try {
          var sec = localInputToUnix(dt.value);
          output2.textContent = 'Seconds:    ' + sec + '\nUTC:        ' + unixToUtcIso(sec) + '\n(ms: ' + (sec * 1000) + ')';
          PortalaTools.setStatus('timestamp-converter-status', 'Converted date to timestamp.', false);
        } catch (e) {
          output2.textContent = '';
          PortalaTools.setStatus('timestamp-converter-status', e.message, true);
        }
      }

      function now() {
        var d = new Date();
        d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
        /* Strip milliseconds so datetime-local accepts the value. */
        dt.value = d.toISOString().slice(0, 19);
        var sec = nowSeconds();
        input.value = String(sec);
        if (msToggle) { msToggle.checked = false; }
        convertTimestamp();
        PortalaTools.setStatus('timestamp-converter-status', 'Filled in the current time.', false);
      }

      var btn = function (id, fn) {
        var el = document.getElementById(id);
        if (el) { el.addEventListener('click', fn); }
      };
      btn('timestamp-converter-btn-convert', convertTimestamp);
      btn('timestamp-converter-btn-convert2', convertDate);
      btn('timestamp-converter-btn-now', now);
    });
  }

  /* ---------- Node test exports ---------- */

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
      parseTimestampInput: parseTimestampInput,
      unixToUtcIso: unixToUtcIso,
      localInputToUnix: localInputToUnix,
      nowSeconds: nowSeconds
    };
  }
})();
