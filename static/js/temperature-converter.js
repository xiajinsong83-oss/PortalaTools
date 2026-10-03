/* Portala Tools — Temperature Converter */
(function () {
  'use strict';

  /* ---------- Pure functions ---------- */

  function toCelsius(value, from) {
    if (from === 'C') { return value; }
    if (from === 'F') { return (value - 32) * 5 / 9; }
    if (from === 'K') { return value - 273.15; }
    throw new Error('Unknown scale: ' + from);
  }

  function fromCelsius(c, to) {
    if (to === 'C') { return c; }
    if (to === 'F') { return c * 9 / 5 + 32; }
    if (to === 'K') { return c + 273.15; }
    throw new Error('Unknown scale: ' + to);
  }

  function convertTemperature(value, from, to) {
    return fromCelsius(toCelsius(value, from), to);
  }

  /* Return all three scales for a given value + source. */
  function convertAllTemperatures(value, from) {
    var c = toCelsius(value, from);
    return { C: c, F: fromCelsius(c, 'F'), K: fromCelsius(c, 'K') };
  }

  function fmt(n) {
    return String(Math.round(n * 100) / 100);
  }

  /* ---------- DOM wiring (browser only) ---------- */

  if (typeof document !== 'undefined') {
    PortalaTools.onReady(function () {
      var val = document.getElementById('temperature-converter-value');
      var from = document.getElementById('temperature-converter-from');
      var to = document.getElementById('temperature-converter-to');
      var result = document.getElementById('temperature-converter-output');
      var all = document.getElementById('temperature-converter-all');
      var status = document.getElementById('temperature-converter-status');
      if (!val || !from || !to || !result) { return; }

      function run() {
        var v = parseFloat(val.value);
        if (isNaN(v)) {
          result.textContent = '';
          if (all) { all.textContent = ''; }
          PortalaTools.setStatus('temperature-converter-status', 'Enter a number first.', true);
          return;
        }
        var target = convertTemperature(v, from.value, to.value);
        result.textContent = fmt(target) + ' °' + to.value;
        var allv = convertAllTemperatures(v, from.value);
        if (all) {
          all.textContent = fmt(allv.C) + ' °C  =  ' + fmt(allv.F) + ' °F  =  ' + fmt(allv.K) + ' K';
        }
        PortalaTools.setStatus('temperature-converter-status', 'Converted.', false);
      }

      val.addEventListener('input', run);
      from.addEventListener('change', run);
      to.addEventListener('change', run);
    });
  }

  /* ---------- Node test exports ---------- */

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
      convertTemperature: convertTemperature,
      convertAllTemperatures: convertAllTemperatures
    };
  }
})();
